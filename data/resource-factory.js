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

  return {
    oposicionId: opposition.id,
    ...legacyFields,
    tema: source.tema,
  };
}

function theoryCardTitle(theory) {
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
      return {
        id: test.id,
        type: "test",
        title: test.titulo,
        author: test.autor,
        opposition,
        classification,
        sourceClassification: test.clasificacion,
        ...(relatedTheory ? { relatedTheory } : {}),
        ...(theoryNotice ? { theoryNotice } : {}),
        data: { ...test, clasificacion: classification },
      };
    },
    theoryResource(theory) {
      const classification = canonicalClassification(opposition, theory.clasificacion);
      return {
        id: theory.id,
        type: "teoria",
        title: theoryCardTitle(theory),
        opposition,
        classification,
        sourceClassification: theory.clasificacion,
        source: theory.fuente,
        data: { ...theory, clasificacion: classification },
      };
    },
  });
}
