import { normalizeText } from "../utils/text.js";

function oppositionId(resource) {
  return resource.opposition?.id ?? resource.classification?.oposicionId ?? "";
}

function firstArticleNumber(title) {
  const match = String(title).match(/\bartículos?\s+(?:del\s+)?(\d+)/i);
  return match ? Number(match[1]) : null;
}

function resourceDisplayOrder(resource) {
  if (resource.type === "teoria") return 0;
  if (resource.variant === "complete") return 2;
  return 1;
}

function combinedTestTitle(theme) {
  const label = theme.etiqueta?.trim();
  if (label && !/^tema\b/i.test(label)) {
    return `Todas las preguntas del ${label.toLocaleLowerCase("es")}`;
  }
  return `Todas las preguntas del tema ${theme.numero}`;
}

export class ResourceRepository {
  constructor(resources, oppositions = []) {
    this.oppositionCatalog = oppositions;
    const combinedResources = this.buildCombinedResources(resources);
    this.resources = [...combinedResources, ...resources].sort((a, b) => {
      const byTheme = String(a.classification.tema.numero).localeCompare(
        String(b.classification.tema.numero),
        "es",
        { numeric: true },
      );
      const byType = resourceDisplayOrder(a) - resourceDisplayOrder(b);
      const articleA = firstArticleNumber(a.title);
      const articleB = firstArticleNumber(b.title);
      const byArticle = articleA !== null && articleB !== null ? articleA - articleB : 0;
      return (
        byTheme ||
        byType ||
        byArticle ||
        a.title.localeCompare(b.title, "es", { numeric: true })
      );
    });
    this.resourceById = new Map(this.resources.map((resource) => [resource.id, resource]));
  }

  buildCombinedResources(resources) {
    const groups = new Map();
    resources
      .filter(
        (resource) =>
          resource.type === "test" &&
          resource.includeInCombinedTest !== false,
      )
      .forEach((resource) => {
        const themeNumber = String(resource.classification.tema.numero);
        const key = `${oppositionId(resource)}:${themeNumber}`;
        if (!groups.has(key)) groups.set(key, []);
        groups.get(key).push(resource);
      });

    return [...groups.values()].map((themeResources) => {
      const first = themeResources[0];
      const themeNumber = String(first.classification.tema.numero);
      const id = `test-completo-${oppositionId(first)}-tema-${themeNumber}`;
      const preguntas = themeResources.flatMap((resource) =>
        resource.data.preguntas.map((question) => ({
          ...question,
          id: `${resource.id}:${question.id}`,
        })),
      );
      const classification = { ...first.classification };
      const autor = {
        id: "recopilacion-tema",
        nombre: "Recopilación del tema",
      };
      const test = {
        schemaVersion: 1,
        id,
        autor,
        titulo: combinedTestTitle(classification.tema),
        clasificacion: classification,
        fuente: {
          tipo: "recopilacion",
          tests: themeResources.map((resource) => resource.id),
        },
        preguntas,
      };

      return {
        id,
        type: "test",
        variant: "complete",
        title: test.titulo,
        author: autor,
        opposition: first.opposition,
        classification,
        orderModes: ["natural", "aleatorio"],
        defaultOrder: "natural",
        data: test,
      };
    });
  }

  getById(id) {
    return this.resourceById.get(id) ?? null;
  }

  getTestById(id) {
    const resource = this.getById(id);
    return resource?.type === "test" ? resource.data : null;
  }

  getOppositions() {
    const groups = new Map(
      this.oppositionCatalog.map((opposition) => [
        opposition.id,
        {
          ...opposition,
          legacyIds: opposition.legacyIds ?? [],
          covers: opposition.covers ?? {},
          themeNumbers: new Set(
            (opposition.sections ?? []).map((section) => String(section.id)),
          ),
          resourceCount: 0,
        },
      ]),
    );
    this.resources.forEach((resource) => {
      const classification = resource.classification;
      const oppositionDefinition = resource.opposition;
      const id = oppositionId(resource);
      if (!groups.has(id)) {
        groups.set(id, {
          id,
          legacyIds: oppositionDefinition?.legacyIds ?? [],
          title: oppositionDefinition?.title ?? classification.oposicion,
          administration:
            oppositionDefinition?.administration ?? classification.administracion,
          group: oppositionDefinition?.group ?? classification.grupo,
          scale: oppositionDefinition?.scale ?? classification.escala,
          status: oppositionDefinition?.status ?? "available",
          covers: oppositionDefinition?.covers ?? {},
          navigation: oppositionDefinition?.navigation,
          sections: oppositionDefinition?.sections,
          themeNumbers: new Set(
            (oppositionDefinition?.sections ?? []).map(
              (section) => String(section.id),
            ),
          ),
          resourceCount: 0,
        });
      }
      const opposition = groups.get(id);
      opposition.themeNumbers.add(String(classification.tema.numero));
      opposition.resourceCount += 1;
    });

    return [...groups.values()]
      .map((opposition) => {
        const { themeNumbers, ...data } = opposition;
        return { ...data, themeCount: themeNumbers.size };
      })
      .sort((a, b) => a.title.localeCompare(b.title, "es"));
  }

  getOpposition(id) {
    return this.getOppositions().find(
      (opposition) => opposition.id === id || opposition.legacyIds.includes(id),
    );
  }

  getThemes(oppositionIdValue) {
    const opposition = this.getOpposition(oppositionIdValue);
    const canonicalId = opposition?.id ?? oppositionIdValue;
    const themes = new Map(
      (opposition?.sections ?? []).map((section) => [
        String(section.id),
        {
          numero: String(section.id),
          titulo: section.title,
          order: section.order,
          resourceCount: 0,
        },
      ]),
    );
    this.resources
      .filter((resource) => oppositionId(resource) === canonicalId)
      .forEach((resource) => {
        const { numero, titulo } = resource.classification.tema;
        const key = String(numero);
        if (!themes.has(key)) {
          themes.set(key, { numero: key, titulo, resourceCount: 0 });
        }
        themes.get(key).resourceCount += 1;
      });

    return [...themes.values()].sort((a, b) => {
      const byOrder = (a.order ?? Number.MAX_SAFE_INTEGER) -
        (b.order ?? Number.MAX_SAFE_INTEGER);
      return byOrder ||
        a.numero.localeCompare(b.numero, "es", { numeric: true });
    });
  }

  getTheme(oppositionIdValue, themeNumber) {
    return this.getThemes(oppositionIdValue).find((theme) => theme.numero === themeNumber);
  }

  searchThemes(themes, query = "") {
    const term = normalizeText(query);
    return themes.filter((theme) =>
      normalizeText(`tema ${theme.numero} ${theme.titulo}`).includes(term),
    );
  }

  getResources(oppositionIdValue, themeNumber) {
    const canonicalId = this.getOpposition(oppositionIdValue)?.id ?? oppositionIdValue;
    return this.resources.filter(
      (resource) =>
        oppositionId(resource) === canonicalId &&
        String(resource.classification.tema.numero) === themeNumber,
    );
  }

  getOppositionForResource(resourceId) {
    const resource = this.getById(resourceId);
    return resource ? oppositionId(resource) : null;
  }

  searchResources(resources, query = "") {
    const term = normalizeText(query);
    return resources.filter((resource) => {
      const classification = resource.classification;
      const searchable = normalizeText(
        [
          resource.title,
          resource.author?.nombre,
          classification.administracion,
          classification.oposicion,
          classification.grupo,
          classification.escala,
          classification.tema.titulo,
          ...(classification.partes ?? []),
        ].join(" "),
      );
      return !term || searchable.includes(term);
    });
  }
}
