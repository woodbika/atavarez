import {
  orderTestQuestions,
  parseQuestionRange,
  selectQuestionRange,
  selectQuestionsByOrder,
  selectRandomQuestions,
} from "../utils/test-order.js";
import {
  randomizeTestAnswers,
  restoreTestAnswers,
} from "../utils/answer-order.js";

export function createTestAttempt(
  resource,
  test,
  {
    requestedOrder = "",
    requestedSelection = "",
    requestedAnswerOrder = "natural",
    random = Math.random,
  } = {},
) {
  const selection = resource?.questionSelection;
  const availableAnswerOrderModes = resource?.answerOrderModes ?? ["natural"];
  const answerOrderMode = availableAnswerOrderModes.includes(requestedAnswerOrder)
    ? requestedAnswerOrder
    : availableAnswerOrderModes[0];
  const randomAnswerOrder = answerOrderMode === "aleatorio";
  const answerRouteSuffix = answerOrderMode === "aleatorio"
    ? "respuestas-aleatorias"
    : "respuestas-naturales";

  if (selection?.type === "random-count") {
    const selectedTest = selectRandomQuestions(test, selection.count, random);
    return {
      test: randomizeTestAnswers(selectedTest, randomAnswerOrder, random),
      orderMode: "aleatorio",
      answerOrderMode,
      selectionKey: `random-${selection.count}`,
      routeSuffix: `/aleatorio/${answerRouteSuffix}`,
    };
  }

  if (selection?.type === "range") {
    const isRandomOrder = requestedOrder === "rango-aleatorio";
    const isRangeRoute = requestedOrder === "rango" || isRandomOrder;
    const range = isRangeRoute
      ? parseQuestionRange(requestedSelection, test.preguntas.length)
      : null;
    if (!range) {
      return {
        error: `Selecciona un rango válido entre 1 y ${test.preguntas.length}.`,
      };
    }
    const selectionKey = `${range.from}-${range.to}`;
    const orderMode = isRandomOrder ? "aleatorio" : "natural";
    const selectedTest = selectQuestionRange(test, range);
    const orderedTest = orderTestQuestions(selectedTest, orderMode, null, random);
    return {
      test: randomizeTestAnswers(orderedTest, randomAnswerOrder, random),
      orderMode,
      answerOrderMode,
      selectionKey,
      routeSuffix: `/${isRandomOrder ? "rango-aleatorio" : "rango"}/${selectionKey}/${answerRouteSuffix}`,
    };
  }

  const availableOrderModes = resource?.orderModes ?? ["natural"];
  const orderMode = availableOrderModes.includes(requestedOrder)
    ? requestedOrder
    : resource?.defaultOrder ?? "natural";
  return {
    test: randomizeTestAnswers(
      orderTestQuestions(test, orderMode, null, random),
      randomAnswerOrder,
      random,
    ),
    orderMode,
    answerOrderMode,
    selectionKey: "",
    routeSuffix: `/${orderMode}/${answerRouteSuffix}`,
  };
}

export function restoreTestAttempt(test, questionOrder, answerOrder) {
  return restoreTestAnswers(
    selectQuestionsByOrder(test, questionOrder),
    answerOrder,
  );
}
