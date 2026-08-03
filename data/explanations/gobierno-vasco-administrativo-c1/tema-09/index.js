import theory from "../../../resources/gobierno-vasco-administrativo-c1/tema-09/teoria/tema-9-personal-al-servicio.js";
import testArticulos26a30 from "../../../tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-26-a-30.js";
import testArticulos161y162 from "../../../tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-161-y-162.js";
import testArticulos161a166 from "../../../tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-161-a-166.js";
import testArticulos167a171 from "../../../tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-167-a-171.js";
import { createTheoryBasedExplanations } from "../theory-explanation-factory.js";
import { EXPLANATION_REFERENCE_SCOPES } from "../../explanation-schema.js";

export default [
  createTheoryBasedExplanations(testArticulos26a30, theory, {
    articles: { from: 26, to: 30 },
    fallbackLabel: "los artículos 26 a 30 de la Ley 11/2022",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
  }),
  createTheoryBasedExplanations(testArticulos161y162, theory, {
    articles: { from: 161, to: 162 },
    fallbackLabel: "los artículos 161 y 162 de la Ley 11/2022",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
  }),
  createTheoryBasedExplanations(testArticulos161a166, theory, {
    articles: { from: 161, to: 166 },
    fallbackLabel: "los artículos 161 a 166 de la Ley 11/2022",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
  }),
  createTheoryBasedExplanations(testArticulos167a171, theory, {
    articles: { from: 167, to: 171 },
    fallbackLabel: "los artículos 167 a 171 de la Ley 11/2022",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
  }),
];
