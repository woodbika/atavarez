import testPrincipiosRectores from "./tests/tema-01/tests-ivot/capitulo-iii-titulo-i-ce-principios-rectores.js";
import testCapituloII from "./tests/tema-01/tests-ivot/test-capitulo-ii-titulo-i-ce.js";
import testCapitulosIVyV from "./tests/tema-01/tests-ivot/test-constitucion-capitulo-iv-y-v.js";
import testArticulos10a13 from "./tests/tema-01/tests-ivot/test-constitucion-espanola-articulos-10-a-13.js";
import testArticulos14a29 from "./tests/tema-01/tests-ivot/test-constitucion-espanola-articulos-14-a-29-2022.js";
import testEstructura from "./tests/tema-01/tests-ivot/test-estructura-constitucion-espanola.js";
import testEmpleoPublico40a44 from "./tests/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-40-a-44.js";
import testEmpleoPublico45a50 from "./tests/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-45-a-50.js";
import testEmpleoPublico51y52 from "./tests/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-51-y-52.js";
import testEmpleoPublico53a62 from "./tests/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-53-a-62.js";

function testResource(test) {
  return {
    id: test.id,
    type: "test",
    title: test.titulo,
    author: test.autor,
    classification: test.clasificacion,
    data: test,
  };
}

// Registro central de recursos. Otros tipos pueden añadirse con su propio `type`.
export const resources = [
  testResource(testEstructura),
  testResource(testArticulos10a13),
  testResource(testArticulos14a29),
  testResource(testCapituloII),
  testResource(testPrincipiosRectores),
  testResource(testCapitulosIVyV),
  testResource(testEmpleoPublico40a44),
  testResource(testEmpleoPublico45a50),
  testResource(testEmpleoPublico51y52),
  testResource(testEmpleoPublico53a62),
];
