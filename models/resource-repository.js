import { normalizeText } from "../utils/text.js";

function slug(value) {
  return normalizeText(value)
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function oppositionId(classification) {
  return slug(
    [
      classification.administracion,
      classification.oposicion,
      classification.grupo,
      classification.escala,
    ].join("-"),
  );
}

export class ResourceRepository {
  constructor(resources) {
    this.resources = [...resources].sort((a, b) => {
      const byTheme = String(a.classification.tema.numero).localeCompare(
        String(b.classification.tema.numero),
        "es",
        { numeric: true },
      );
      return byTheme || a.title.localeCompare(b.title, "es");
    });
  }

  getAll() {
    return this.resources;
  }

  getById(id) {
    return this.resources.find((resource) => resource.id === id);
  }

  getTestById(id) {
    const resource = this.getById(id);
    return resource?.type === "test" ? resource.data : null;
  }

  getOppositions() {
    const groups = new Map();
    this.resources.forEach((resource) => {
      const classification = resource.classification;
      const id = oppositionId(classification);
      if (!groups.has(id)) {
        groups.set(id, {
          id,
          title: classification.oposicion,
          administration: classification.administracion,
          group: classification.grupo,
          scale: classification.escala,
          themeNumbers: new Set(),
          resourceCount: 0,
        });
      }
      const opposition = groups.get(id);
      opposition.themeNumbers.add(String(classification.tema.numero));
      opposition.resourceCount += 1;
    });

    return [...groups.values()]
      .map((opposition) => ({
        ...opposition,
        themeCount: opposition.themeNumbers.size,
      }))
      .sort((a, b) => a.title.localeCompare(b.title, "es"));
  }

  getOpposition(id) {
    return this.getOppositions().find((opposition) => opposition.id === id);
  }

  getThemes(oppositionIdValue) {
    const themes = new Map();
    this.resources
      .filter((resource) => oppositionId(resource.classification) === oppositionIdValue)
      .forEach((resource) => {
        const { numero, titulo } = resource.classification.tema;
        const key = String(numero);
        if (!themes.has(key)) {
          themes.set(key, { numero: key, titulo, resourceCount: 0 });
        }
        themes.get(key).resourceCount += 1;
      });

    return [...themes.values()].sort((a, b) =>
      a.numero.localeCompare(b.numero, "es", { numeric: true }),
    );
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
    return this.resources.filter(
      (resource) =>
        oppositionId(resource.classification) === oppositionIdValue &&
        String(resource.classification.tema.numero) === themeNumber,
    );
  }

  getOppositionForResource(resourceId) {
    const resource = this.getById(resourceId);
    return resource ? oppositionId(resource.classification) : null;
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
