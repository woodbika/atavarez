function normalizeSignatureText(value) {
  return String(value ?? "")
    .normalize("NFC")
    .trim()
    .replace(/\s+/gu, " ")
    .toLocaleLowerCase("es");
}

function questionSignature(question) {
  return JSON.stringify({
    statement: normalizeSignatureText(question.enunciado),
    options: question.opciones.map((option) => ({
      id: normalizeSignatureText(option.id),
      text: normalizeSignatureText(option.texto),
    })),
    correctAnswer: normalizeSignatureText(question.respuestaCorrecta),
  });
}

function testResourcesToAudit(resources) {
  return resources.filter(
    (resource) =>
      resource?.type === "test" &&
      resource.variant !== "complete" &&
      resource.questionSelection === undefined &&
      Array.isArray(resource.data?.preguntas),
  );
}

export function findDuplicateQuestions(resources) {
  const occurrencesByTheme = new Map();

  testResourcesToAudit(resources).forEach((resource) => {
    const themeKey = [
      resource.classification?.oposicionId,
      resource.classification?.tema?.numero,
    ].join(":");
    if (!occurrencesByTheme.has(themeKey)) {
      occurrencesByTheme.set(themeKey, new Map());
    }
    const signatures = occurrencesByTheme.get(themeKey);

    resource.data.preguntas.forEach((question) => {
      const signature = questionSignature(question);
      if (!signatures.has(signature)) signatures.set(signature, []);
      signatures.get(signature).push({
        resourceId: resource.id,
        questionId: String(question.id),
      });
    });
  });

  return [...occurrencesByTheme.entries()].flatMap(([themeKey, signatures]) =>
    [...signatures.values()]
      .filter((occurrences) => occurrences.length > 1)
      .map((occurrences) => ({ themeKey, occurrences })),
  );
}

export function auditResources(resources) {
  return findDuplicateQuestions(resources).map(({ themeKey, occurrences }) => {
    const locations = occurrences
      .map(({ resourceId, questionId }) => `${resourceId}#${questionId}`)
      .join(", ");
    return `Posible pregunta duplicada en ${themeKey}: ${locations}.`;
  });
}
