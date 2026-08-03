import test from "../../../tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-1.js";
import {
  createTheme02Explanations,
  referencesFromRanges,
} from "./explanation-factory.js";

const references = referencesFromRanges([
  { from: 1, to: 3, reference: "articulo-137" },
  { from: 4, to: 7, reference: "articulo-138" },
  { from: 8, to: 9, reference: "articulo-139" },
  { from: 10, to: 16, reference: "articulo-140" },
  { from: 17, to: 23, reference: "articulo-141" },
  { from: 24, to: 25, reference: "articulo-142" },
  { from: 26, to: 28, reference: "titulo-viii" },
]);

export default createTheme02Explanations(test, references);
