import test from "../../../tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-2.js";
import {
  createTheme02Explanations,
  referencesFromRanges,
} from "./explanation-factory.js";

const references = referencesFromRanges([
  { from: 1, to: 3, reference: "articulo-143" },
  { from: 4, to: 5, reference: "articulo-144" },
  { from: 6, to: 10, reference: "articulo-143" },
  { from: 11, reference: "articulo-144" },
  { from: 12, to: 14, reference: "articulo-151" },
  { from: 15, to: 16, reference: "disposicion-transitoria-segunda" },
  { from: 17, to: 18, reference: "articulo-146" },
  { from: 19, reference: "articulo-147" },
  { from: 20, to: 28, reference: "articulo-151" },
  { from: 29, reference: "articulo-152" },
]);

export default createTheme02Explanations(test, references);
