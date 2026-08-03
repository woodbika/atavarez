import test from "../../../tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-4-competencias.js";
import {
  createTheme02Explanations,
  referencesFromRanges,
} from "./explanation-factory.js";

const stateCompetences = new Set([
  1, 4, 5, 7, 8, 11, 12, 13, 14, 15, 17, 18, 19, 22, 23, 24, 25, 27, 28,
  29, 31, 32, 34, 35, 36, 38, 39, 40, 43, 45, 46,
]);
const references = Object.fromEntries(
  test.preguntas.map((question) => [
    question.id,
    stateCompetences.has(question.id) ? "articulo-149" : "articulo-148",
  ]),
);
references[48] = "articulo-149-2";
references[49] = "articulo-149-2";
references[50] = "articulo-149-3";
references[51] = "articulo-149-3";
references[52] = "articulo-149-3";
references[53] = "articulo-149-3";

export default createTheme02Explanations(test, references);
