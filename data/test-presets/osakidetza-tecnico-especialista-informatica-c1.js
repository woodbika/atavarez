import {
  osakidetzaCommonQuestionBank,
  osakidetzaSpecificQuestionBank,
} from "../question-banks/index.js";

function testPreset(questionBank, {
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
    questionBankId: questionBank.id,
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

function createTestPresets(questionBank, sectionId) {
  return Object.freeze([
    testPreset(questionBank, {
      id: questionBank.id,
      title: questionBank.titulo,
      orderModes: ["natural", "aleatorio"],
      defaultOrder: "natural",
    }),
    testPreset(questionBank, {
      id: `test-aleatorio-50-temario-${sectionId}-osakidetza`,
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
    testPreset(questionBank, {
      id: `test-por-rango-temario-${sectionId}-osakidetza`,
      title: "Test por rango de preguntas",
      orderModes: ["natural"],
      defaultOrder: "natural",
      questionSelection: {
        type: "range",
      },
      questionCountLabel: `${questionBank.preguntas.length} disponibles`,
      description:
        "Selecciona la primera y la última pregunta que quieres incluir en el intento.",
    }),
  ]);
}

export const osakidetzaCommonTestPresets = createTestPresets(
  osakidetzaCommonQuestionBank,
  "comun",
);

export const osakidetzaSpecificTestPresets = createTestPresets(
  osakidetzaSpecificQuestionBank,
  "especifico",
);
