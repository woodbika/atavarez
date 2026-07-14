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
import testEmpleoPublico136a138 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-136-a-138.js";
import testEmpleoPublico139y140 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-139-y-140.js";
import testEmpleoPublico141y142 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-141-y-142.js";
import testEmpleoPublico143a145 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-143-a-145.js";
import testEmpleoPublico146a148 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-146-a-148.js";
import testEmpleoPublico149a152 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-149-a-152.js";
import testEmpleoPublico153a155 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-153-a-155.js";
import testEmpleoPublico156a160 from "./tests/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-156-a-160.js";

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
  testResource(testEmpleoPublico136a138),
  testResource(testEmpleoPublico139y140),
  testResource(testEmpleoPublico141y142),
  testResource(testEmpleoPublico143a145),
  testResource(testEmpleoPublico146a148),
  testResource(testEmpleoPublico149a152),
  testResource(testEmpleoPublico153a155),
  testResource(testEmpleoPublico156a160),
];
