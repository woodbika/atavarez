export function isQuestionAvailable(question) {
  return question?.disponible !== false;
}

export function availableQuestions(test) {
  return (test?.preguntas ?? []).filter(isQuestionAvailable);
}

export function availableQuestionCount(test) {
  return availableQuestions(test).length;
}

export function unavailableQuestionCount(test) {
  return (test?.preguntas?.length ?? 0) - availableQuestionCount(test);
}

export function selectAvailableQuestions(test) {
  const preguntas = availableQuestions(test);
  if (preguntas.length === test.preguntas.length) return test;

  const availableIds = new Set(
    preguntas.map((question) => String(question.id)),
  );
  const explicaciones = test.explicaciones
    ? {
        ...test.explicaciones,
        preguntas: test.explicaciones.preguntas.filter((explanation) =>
          availableIds.has(String(explanation.preguntaId))),
      }
    : undefined;

  return {
    ...test,
    preguntas,
    ...(explicaciones ? { explicaciones } : {}),
  };
}
