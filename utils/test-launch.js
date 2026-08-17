export function availableQuestionOrders(resource) {
  if (resource?.questionSelection?.type === "random-count") {
    return ["aleatorio"];
  }
  return resource?.orderModes?.length
    ? [...resource.orderModes]
    : ["natural", "aleatorio"];
}

export function buildTestLaunchRoute(
  resource,
  {
    questionOrder = "natural",
    answerOrder = "natural",
    selection = "",
  } = {},
) {
  const answerSegment = answerOrder === "aleatorio"
    ? "respuestas-aleatorias"
    : "respuestas-naturales";
  const base = `#/test/${encodeURIComponent(resource.id)}`;

  if (resource?.questionSelection?.type === "range") {
    const rangeOrder = questionOrder === "aleatorio"
      ? "rango-aleatorio"
      : "rango";
    return `${base}/${rangeOrder}/${selection}/${answerSegment}`;
  }

  const orderSegment = questionOrder === "aleatorio"
    ? "aleatorio"
    : "natural";
  return `${base}/${orderSegment}/${answerSegment}`;
}
