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
