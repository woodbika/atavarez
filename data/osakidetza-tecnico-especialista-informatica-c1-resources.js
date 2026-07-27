import { OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1 } from "./oppositions.js";
import { createOppositionResourceFactory } from "./resource-factory.js";
import specificQuestionBank from "./tests/osakidetza-tecnico-especialista-informatica-c1/temario-especifico/tests-osakidetza/bateria-preguntas-temario-especifico.js";

const { testResource } = createOppositionResourceFactory(
  OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1,
);

function derivedTest(id, title) {
  return Object.freeze({
    ...specificQuestionBank,
    id,
    titulo: title,
  });
}

const specificTestResource = Object.freeze({
  ...testResource(specificQuestionBank),
  includeInCombinedTest: false,
  orderModes: Object.freeze(["natural", "aleatorio"]),
  defaultOrder: "natural",
});

const randomFiftyTestResource = Object.freeze({
  ...testResource(
    derivedTest(
      "test-aleatorio-50-temario-especifico-osakidetza",
      "Test aleatorio de 50 preguntas",
    ),
  ),
  includeInCombinedTest: false,
  orderModes: Object.freeze(["aleatorio"]),
  defaultOrder: "aleatorio",
  questionSelection: Object.freeze({
    type: "random-count",
    count: 50,
  }),
  questionCountLabel: "50 preguntas",
  description:
    "Crea un intento nuevo con 50 preguntas elegidas al azar de toda la batería.",
});

const rangeTestResource = Object.freeze({
  ...testResource(
    derivedTest(
      "test-por-rango-temario-especifico-osakidetza",
      "Test por rango de preguntas",
    ),
  ),
  includeInCombinedTest: false,
  defaultOrder: "natural",
  questionSelection: Object.freeze({
    type: "range",
  }),
  questionCountLabel: "200 disponibles",
  description:
    "Selecciona la primera y la última pregunta que quieres incluir en el intento.",
});

export const osakidetzaTecnicoEspecialistaInformaticaC1Resources = Object.freeze([
  specificTestResource,
  randomFiftyTestResource,
  rangeTestResource,
]);
