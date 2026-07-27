import {
  orderTestQuestions,
  parseQuestionRange,
  selectQuestionRange,
  selectQuestionsByOrder,
  selectRandomQuestions,
} from "../utils/test-order.js";

export function createTestAttempt(
  resource,
  test,
  {
    requestedOrder = "",
    requestedSelection = "",
    random = Math.random,
  } = {},
) {
  const selection = resource?.questionSelection;

  if (selection?.type === "random-count") {
    return {
      test: selectRandomQuestions(test, selection.count, random),
      orderMode: "aleatorio",
      selectionKey: `random-${selection.count}`,
      routeSuffix: "/aleatorio",
    };
  }

  if (selection?.type === "range") {
    const range = requestedOrder === "rango"
      ? parseQuestionRange(requestedSelection, test.preguntas.length)
      : null;
    if (!range) {
      return {
        error: `Selecciona un rango válido entre 1 y ${test.preguntas.length}.`,
      };
    }
    const selectionKey = `${range.from}-${range.to}`;
    return {
      test: selectQuestionRange(test, range),
      orderMode: "natural",
      selectionKey,
      routeSuffix: `/rango/${selectionKey}`,
    };
  }

  const availableOrderModes = resource?.orderModes ?? ["natural"];
  const orderMode = availableOrderModes.includes(requestedOrder)
    ? requestedOrder
    : resource?.defaultOrder ?? "natural";
  return {
    test: orderTestQuestions(test, orderMode),
    orderMode,
    selectionKey: "",
    routeSuffix: `/${orderMode}`,
  };
}

export function restoreTestAttempt(test, questionOrder) {
  return selectQuestionsByOrder(test, questionOrder);
}
