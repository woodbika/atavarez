import theory from "../../../resources/gobierno-vasco-administrativo-c1/tema-04/teoria/tema-4-organizacion-politica-administrativa-capv.js";
import testTituloPreliminar from "../../../tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-titulo-preliminar.js";
import testCompetencias1 from "../../../tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-competencias-numero-1.js";
import testCompetencias2 from "../../../tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-competencias-numero-2.js";
import testCompetencias3 from "../../../tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-competencias-numero-3.js";
import testArticulos24a33 from "../../../tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-articulos-24-a-33.js";
import { createTheoryBasedExplanations } from "../theory-explanation-factory.js";
import {
  EXPLANATION_REFERENCE_SCOPES,
  articleReference,
  blockReference,
} from "../../explanation-schema.js";

export default [
  createTheoryBasedExplanations(testTituloPreliminar, theory, {
    articles: { from: 1, to: 9 },
    fallbackLabel: "el Título Preliminar del Estatuto de Autonomía",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
    referenceOverrides: {
      1: blockReference(
        "principios-generales",
        "Principios generales del Estatuto de Autonomía",
        { scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL },
      ),
      2: blockReference(
        "principios-generales",
        "Principios generales del Estatuto de Autonomía",
        { scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL },
      ),
    },
  }),
  createTheoryBasedExplanations(testCompetencias1, theory, {
    articles: { from: 10, to: 12 },
    fallbackLabel: "los artículos 10 a 12 del Estatuto de Autonomía",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
  }),
  createTheoryBasedExplanations(testCompetencias2, theory, {
    articles: { from: 10, to: 20 },
    fallbackLabel: "los artículos 10 a 20 del Estatuto de Autonomía",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
  }),
  createTheoryBasedExplanations(testCompetencias3, theory, {
    articles: { from: 20, to: 23 },
    fallbackLabel: "los artículos 20 a 23 del Estatuto de Autonomía",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
  }),
  createTheoryBasedExplanations(testArticulos24a33, theory, {
    articles: { from: 24, to: 33 },
    fallbackLabel: "los artículos 24 a 33 del Estatuto de Autonomía",
    fallbackScope: EXPLANATION_REFERENCE_SCOPES.DIRECT,
    fallbackQuestionIds: [2, 30],
    referenceOverrides: {
      2: articleReference(24),
      30: blockReference(
        "poderes-pais-vasco",
        "Poderes del País Vasco",
        { scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL },
      ),
    },
    explanationOverrides: {
      2: {
        justificacion:
          "La solución registrada por el test es «Lo que señalen ellos mismos». Se conserva sin cambios, aunque ninguna opción reproduce con exactitud el artículo 24.2.",
        descartes: {
          a: "El artículo 24.2 no remite genéricamente a las leyes del Parlamento Vasco.",
          c: "El artículo 24.2 tampoco remite a los decretos del Gobierno.",
        },
        notaRevision: {
          tipo: "discrepancia-teorica",
          titulo: "Ninguna opción coincide con la teoría",
          texto:
            "El artículo 24.2 establece que los Territorios Históricos conservarán y organizarán sus instituciones de conformidad con lo dispuesto en el artículo 3 del Estatuto. Ninguna de las tres opciones recoge esa remisión. Se mantiene la opción B porque es la solución registrada en el test.",
        },
      },
    },
  }),
];
