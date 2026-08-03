export const EXPLANATION_SCHEMA_VERSION = 2;

export const EXPLANATION_REFERENCE_SCOPES = Object.freeze({
  DIRECT: "directa",
  CONTEXTUAL: "contextual",
});

function positiveUniqueIntegers(values) {
  const numbers = values.map(Number);
  if (
    numbers.some((value) => !Number.isInteger(value) || value < 1) ||
    new Set(numbers).size !== numbers.length
  ) {
    throw new Error("Los artículos deben ser enteros positivos y no pueden repetirse.");
  }
  return numbers;
}

function articleLabel(articleNumbers) {
  if (articleNumbers.length === 1) return `Artículo ${articleNumbers[0]}`;
  const last = articleNumbers.at(-1);
  return `Artículos ${articleNumbers.slice(0, -1).join(", ")} y ${last}`;
}

export function articleReference(articleNumbers, options = {}) {
  const articles = positiveUniqueIntegers(
    Array.isArray(articleNumbers) ? articleNumbers : [articleNumbers],
  );
  if (articles.length === 0) {
    throw new Error("Una referencia de artículo debe indicar al menos un número válido.");
  }
  return {
    tipo: "articulos",
    alcance: options.scope ?? EXPLANATION_REFERENCE_SCOPES.DIRECT,
    etiqueta: options.label ?? articleLabel(articles),
    articulos: articles,
  };
}

export function blockReference(blockId, label, options = {}) {
  if (!String(blockId ?? "").trim() || !String(label ?? "").trim()) {
    throw new Error("Una referencia de bloque debe indicar id y etiqueta.");
  }
  return {
    tipo: "bloque",
    alcance: options.scope ?? EXPLANATION_REFERENCE_SCOPES.DIRECT,
    etiqueta: String(label).trim(),
    bloqueId: String(blockId).trim(),
  };
}

export function referencesFromQuestionRanges(ranges) {
  const references = {};
  ranges.forEach(({ from, to = from, reference }) => {
    for (let questionId = from; questionId <= to; questionId += 1) {
      references[String(questionId)] = reference;
    }
  });
  return references;
}

export function defineExplanationSet(
  explanationSet,
  { theoryResourceId, references = {}, referenceForQuestion } = {},
) {
  const questions = explanationSet?.preguntas;
  if (!Array.isArray(questions)) {
    throw new Error("El conjunto de explicaciones debe contener una lista de preguntas.");
  }
  if (!String(theoryResourceId ?? "").trim()) {
    throw new Error(`Las explicaciones de ${explanationSet?.testId ?? "un test"} no indican teoría.`);
  }

  return {
    ...explanationSet,
    schemaVersion: EXPLANATION_SCHEMA_VERSION,
    theoryResourceId: String(theoryResourceId).trim(),
    preguntas: questions.map((explanation, questionIndex) => {
      const reference =
        references[String(explanation.preguntaId)] ??
        referenceForQuestion?.(explanation, questionIndex);
      if (!reference) {
        throw new Error(
          `La pregunta ${explanation.preguntaId} de ${explanationSet.testId} no tiene referencia teórica.`,
        );
      }
      return { ...explanation, referencia: reference };
    }),
  };
}
