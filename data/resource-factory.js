import { getAuthorById } from "./authors.js";

function canonicalAuthor(author) {
  if (!author || typeof author !== "object") return undefined;
  const catalogAuthor = getAuthorById(author.id);
  return catalogAuthor
    ? { id: catalogAuthor.id, nombre: catalogAuthor.name }
    : author;
}

function canonicalClassification(opposition, classification) {
  const legacyFields = {
    administracion: opposition.administration,
    oposicion: opposition.title,
    grupo: opposition.group,
    escala: opposition.scale,
  };
  const source = classification && typeof classification === "object"
    ? classification
    : {};
  const sourceTheme = source.tema && typeof source.tema === "object"
    ? source.tema
    : {};
  const sectionId = String(sourceTheme.numero ?? "");
  const section = opposition.sections?.find(
    (item) => String(item.id) === sectionId,
  );
  const theme = section
    ? {
        numero: String(section.id),
        titulo: section.title,
        ...(sourceTheme.etiqueta ? { etiqueta: sourceTheme.etiqueta } : {}),
      }
    : sourceTheme;

  return {
    oposicionId: opposition.id,
    ...legacyFields,
    tema: theme,
  };
}

function theoryCardTitle(theory) {
  if (typeof theory.cardTitle === "string" && theory.cardTitle.trim()) {
    return theory.cardTitle.trim();
  }
  const title = theory.clasificacion.tema.titulo.trim();
  const firstPeriod = title.indexOf(".");
  return firstPeriod === -1 ? title : title.slice(0, firstPeriod + 1);
}

export function createOppositionResourceFactory(
  opposition,
  {
    relatedTheoryByTestId = new Map(),
    theoryNoticeByTestId = new Map(),
  } = {},
) {
  return Object.freeze({
    testResource(test) {
      const relatedTheory = relatedTheoryByTestId.get(test.id);
      const theoryNotice = theoryNoticeByTestId.get(test.id);
      const classification = canonicalClassification(opposition, test.clasificacion);
      const author = canonicalAuthor(test.autor);
      return {
        id: test.id,
        type: "test",
        title: test.titulo,
        author,
        opposition,
        classification,
        sourceClassification: test.clasificacion,
        sourceAuthor: test.autor,
        ...(relatedTheory ? { relatedTheory } : {}),
        ...(theoryNotice ? { theoryNotice } : {}),
        data: { ...test, autor: author, clasificacion: classification },
      };
    },
    theoryResource(theory) {
      const classification = canonicalClassification(opposition, theory.clasificacion);
      const author = canonicalAuthor(theory.autor);
      return {
        id: theory.id,
        type: "teoria",
        title: theoryCardTitle(theory),
        opposition,
        classification,
        sourceClassification: theory.clasificacion,
        ...(theory.autor ? { sourceAuthor: theory.autor } : {}),
        source: theory.fuente,
        data: {
          ...theory,
          ...(author ? { autor: author } : {}),
          clasificacion: classification,
        },
      };
    },
  });
}
