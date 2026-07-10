import testPrincipiosRectores from "./tests/tema-01/tests-ivot/capitulo-iii-titulo-i-ce-principios-rectores.js";
import testCapituloII from "./tests/tema-01/tests-ivot/test-capitulo-ii-titulo-i-ce.js";
import testCapitulosIVyV from "./tests/tema-01/tests-ivot/test-constitucion-capitulo-iv-y-v.js";
import testArticulos10a13 from "./tests/tema-01/tests-ivot/test-constitucion-espanola-articulos-10-a-13.js";
import testArticulos14a29 from "./tests/tema-01/tests-ivot/test-constitucion-espanola-articulos-14-a-29-2022.js";
import testEstructura from "./tests/tema-01/tests-ivot/test-estructura-constitucion-espanola.js";

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
];
