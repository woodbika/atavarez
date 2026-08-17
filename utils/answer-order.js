function normalizeOptionText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLocaleLowerCase("es")
    .replace(/\s+/g, " ")
    .trim();
}

const ORDER_DEPENDENT_PATTERNS = [
  /\b(?:todas?|todos?|ningunas?|ningunos?)\s+(?:(?:las?|los?)\s+)?(?:respuestas?|opciones?|alternativas?|anteriores?)\b/,
  /\b(?:todas?|ningunas?|ningunos?)\s+(?:es|son|sean|resultan?)\s+(?:correctas?|incorrectas?|falsas?|verdaderas?)\b/,
  /\b(?:todas?|todos?|ningunas?|ningunos?)\s+de\s+(?:las?|los?)\s+anteriores\b/,
  /\b(?:ambas?|ambos?)\b/,
  /\b(?:las?|los?)\s+(?:dos|tres|cuatro)\s+(?:respuestas?|opciones?|alternativas?)\b/,
  /\b(?:las?|los?)\s+(?:dos|tres|cuatro)\s+anteriores\b/,
  /\bcualquiera\s+de\s+(?:las?|los?)\s+(?:dos|anteriores|respuestas?|opciones?|alternativas?)\b/,
  /\btodo\s+lo\s+anterior\b/,
  /\b(?:respuestas?|opciones?|alternativas?)\s+(?:a|b|c|d)\s*\)?/,
  /\b(?:la|las)\s+(?:a|b|c|d)\s*\)?\s*(?:,|y|o)\s*(?:(?:la|las)\s+)?(?:a|b|c|d)\s*\)?/,
  /(?:^|\s)(?:a|b|c|d)\s*\)\s*(?:,|y|o)\s*(?:(?:la|las)\s+)?(?:a|b|c|d)\s*\)?/,
  /(?:^|\s)(?:a|b|c|d)\s+(?:y|o)\s+(?:a|b|c|d)(?:\s|\.|,|$)/,
  /\b(?:respuesta|opcion|alternativa)\s+(?:anterior|siguiente|primera|segunda|ultima)\b/,
];

export function hasOrderDependentAnswers(question) {
  return (question?.opciones ?? []).some((option) => {
    const text = normalizeOptionText(option?.texto);
    return ORDER_DEPENDENT_PATTERNS.some((pattern) => pattern.test(text));
  });
}

function shuffledCopy(values, random) {
  const shuffled = [...values];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[index],
    ];
  }
  return shuffled;
}

function withDisplayIds(options, displayIds) {
  return options.map((option, index) => ({
    ...option,
    displayId: displayIds[index],
  }));
}

export function randomizeTestAnswers(test, enabled, random = Math.random) {
  if (!enabled) return test;

  return {
    ...test,
    preguntas: test.preguntas.map((question) => {
      if (hasOrderDependentAnswers(question)) return question;
      const displayIds = question.opciones.map((option) => option.id);
      return {
        ...question,
        opciones: withDisplayIds(shuffledCopy(question.opciones, random), displayIds),
      };
    }),
  };
}

export function restoreTestAnswers(test, answerOrder = {}) {
  if (!answerOrder || typeof answerOrder !== "object") return test;

  return {
    ...test,
    preguntas: test.preguntas.map((question) => {
      const savedOrder = answerOrder[String(question.id)];
      if (!Array.isArray(savedOrder) || !savedOrder.length) return question;

      const optionsById = new Map(
        question.opciones.map((option) => [String(option.id), option]),
      );
      const orderedOptions = savedOrder
        .map((id) => optionsById.get(String(id)))
        .filter(Boolean);
      if (orderedOptions.length !== question.opciones.length) return question;

      const displayIds = question.opciones.map((option) => option.id);
      return {
        ...question,
        opciones: withDisplayIds(orderedOptions, displayIds),
      };
    }),
  };
}

export function displayOptionId(option) {
  return option?.displayId ?? option?.id ?? "";
}

export function remapOptionReferences(value, question) {
  const text = String(value ?? "");
  const displayIdBySourceId = new Map(
    (question?.opciones ?? []).map((option) => [
      String(option.id).toLocaleLowerCase("es"),
      String(displayOptionId(option)),
    ]),
  );
  const replaceId = (sourceId) => {
    const displayId = displayIdBySourceId.get(
      String(sourceId).toLocaleLowerCase("es"),
    );
    if (!displayId) return sourceId;
    const replacement = sourceId === sourceId.toLocaleUpperCase("es")
      ? displayId.toLocaleUpperCase("es")
      : displayId.toLocaleLowerCase("es");
    return `\uE000${replacement}\uE001`;
  };

  return text
    .replace(
      /\b([a-z])(\s*\)?\s+(?:y|o)\s+(?:(?:la|las)\s+)?)([a-z])(?=\b|\))/giu,
      (_match, first, separator, second) =>
        `${replaceId(first)}${separator}${replaceId(second)}`,
    )
    .replace(
      /(\b(?:opci[oó]n|respuesta|alternativa)(?:es)?\s+)([a-z])(?=\b|\))/giu,
      (_match, prefix, id) => `${prefix}${replaceId(id)}`,
    )
    .replace(/\uE000([^\uE001]+)\uE001/g, "$1");
}
