import test from "../../../tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-3.js";
import {
  createTheme02Explanations,
  referencesFromRanges,
} from "./explanation-factory.js";

const references = referencesFromRanges([
  { from: 1, to: 10, reference: "articulo-150" },
  { from: 11, to: 13, reference: "articulo-145" },
  { from: 14, to: 16, reference: "articulo-147" },
  { from: 17, reference: "articulo-148" },
  { from: 18, reference: "articulo-149" },
  { from: 19, to: 23, reference: "articulo-152" },
  { from: 24, to: 27, reference: "articulo-153" },
  { from: 28, reference: "articulo-154" },
  { from: 29, to: 30, reference: "articulo-155" },
  { from: 31, to: 34, reference: "articulo-157" },
  { from: 35, to: 36, reference: "articulo-158" },
]);

export default createTheme02Explanations(test, references);
