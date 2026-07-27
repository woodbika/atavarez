export function orderTestQuestions(test, orderMode, savedOrder = null, random = Math.random) {
  const preguntas = [...test.preguntas];

  if (savedOrder?.length) {
    const positions = new Map(savedOrder.map((id, index) => [String(id), index]));
    preguntas.sort(
      (a, b) =>
        (positions.get(String(a.id)) ?? Infinity) -
        (positions.get(String(b.id)) ?? Infinity),
    );
  } else if (orderMode === "aleatorio") {
    for (let index = preguntas.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(random() * (index + 1));
      [preguntas[index], preguntas[randomIndex]] = [
        preguntas[randomIndex],
        preguntas[index],
      ];
    }
  }

  return { ...test, preguntas };
}

export function parseQuestionRange(value, totalQuestions) {
  const match = String(value ?? "").trim().match(/^(\d+)\s*-\s*(\d+)$/);
  if (!match) return null;

  const from = Number(match[1]);
  const to = Number(match[2]);
  if (
    !Number.isInteger(from) ||
    !Number.isInteger(to) ||
    from < 1 ||
    to < from ||
    to > totalQuestions
  ) {
    return null;
  }

  return { from, to };
}

export function selectQuestionRange(test, { from, to }) {
  return {
    ...test,
    preguntas: test.preguntas.slice(from - 1, to),
  };
}

export function selectRandomQuestions(
  test,
  count,
  random = Math.random,
) {
  const orderedTest = orderTestQuestions(test, "aleatorio", null, random);
  return {
    ...orderedTest,
    preguntas: orderedTest.preguntas.slice(
      0,
      Math.min(count, orderedTest.preguntas.length),
    ),
  };
}

export function selectQuestionsByOrder(test, questionOrder) {
  const questionById = new Map(
    test.preguntas.map((question) => [String(question.id), question]),
  );
  return {
    ...test,
    preguntas: questionOrder
      .map((id) => questionById.get(String(id)))
      .filter(Boolean),
  };
}
