import { OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1 } from "./oppositions.js";
import { createOppositionResourceFactory } from "./resource-factory.js";
import specificQuestionBank from "./tests/osakidetza-tecnico-especialista-informatica-c1/temario-especifico/tests-osakidetza/bateria-preguntas-temario-especifico.js";

const { testResource } = createOppositionResourceFactory(
  OSAKIDETZA_TECNICO_ESPECIALISTA_INFORMATICA_C1,
);

const specificTestResource = Object.freeze({
  ...testResource(specificQuestionBank),
  includeInCombinedTest: false,
  orderModes: Object.freeze(["natural", "aleatorio"]),
  defaultOrder: "natural",
});

export const osakidetzaTecnicoEspecialistaInformaticaC1Resources = Object.freeze([
  specificTestResource,
]);
