import { osakidetzaSpecificQuestionBank } from "../question-banks/index.js";

function testPreset({
  id,
  title,
  orderModes,
  defaultOrder,
  questionSelection,
  questionCountLabel,
  description,
}) {
  return Object.freeze({
    kind: "test-preset",
    schemaVersion: 1,
    id,
    title,
    questionBankId: osakidetzaSpecificQuestionBank.id,
    includeInCombinedTest: false,
    orderModes: Object.freeze(orderModes),
    defaultOrder,
    ...(questionSelection
      ? { questionSelection: Object.freeze(questionSelection) }
      : {}),
    ...(questionCountLabel ? { questionCountLabel } : {}),
    ...(description ? { description } : {}),
  });
}

export const osakidetzaSpecificTestPresets = Object.freeze([
  testPreset({
    id: osakidetzaSpecificQuestionBank.id,
    title: osakidetzaSpecificQuestionBank.titulo,
    orderModes: ["natural", "aleatorio"],
    defaultOrder: "natural",
  }),
  testPreset({
    id: "test-aleatorio-50-temario-especifico-osakidetza",
    title: "Test aleatorio de 50 preguntas",
    orderModes: ["aleatorio"],
    defaultOrder: "aleatorio",
    questionSelection: {
      type: "random-count",
      count: 50,
    },
    questionCountLabel: "50 preguntas",
    description:
      "Crea un intento nuevo con 50 preguntas elegidas al azar de toda la batería.",
  }),
  testPreset({
    id: "test-por-rango-temario-especifico-osakidetza",
    title: "Test por rango de preguntas",
    orderModes: ["natural"],
    defaultOrder: "natural",
    questionSelection: {
      type: "range",
    },
    questionCountLabel:
      `${osakidetzaSpecificQuestionBank.preguntas.length} disponibles`,
    description:
      "Selecciona la primera y la última pregunta que quieres incluir en el intento.",
  }),
]);
