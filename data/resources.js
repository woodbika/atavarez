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
import testFuentesDerecho1 from "./tests/tema-28/tests-ivot/test-de-fuentes-del-derecho-1.js";
import testFuentesDerecho2 from "./tests/tema-28/tests-ivot/test-de-fuentes-del-derecho-2.js";
import testLey40Articulos5a7 from "./tests/tema-29/tests-ivot/test-de-la-ley-40-2015-articulos-5-a-7.js";
import testLey40Articulos8y9 from "./tests/tema-29/tests-ivot/test-de-la-ley-40-2015-numero-2-articulos-8-y-9.js";
import testLey40Articulos10y11 from "./tests/tema-29/tests-ivot/test-de-la-ley-40-2015-regimen-juridico-sector-publico-articulos-10-y-11.js";
import testLey40Articulos12a14 from "./tests/tema-29/tests-ivot/test-ley-40-2015-articulos-12-a-14.js";
import testLey40Articulos15a18 from "./tests/tema-29/tests-ivot/test-ley-40-2015-articulos-15-a-18.js";
import testLey39Articulos24y25 from "./tests/tema-30/tests-ivot/test-ley-39-2015-silencio-administrativo-articulos-24-y-25.js";
import testLey39Articulos34a40 from "./tests/tema-30/tests-ivot/test-ley-39-2015-articulos-34-a-40.js";
import testLey39Articulos41a44 from "./tests/tema-30/tests-ivot/test-ley-39-2015-articulos-41-a-44.js";
import testLey39Articulos45y46 from "./tests/tema-30/tests-ivot/test-ley-39-2015-articulos-45-y-46.js";
import testLey39Articulos47a52 from "./tests/tema-30/tests-ivot/test-ley-39-2015-articulos-47-a-52.js";

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
  testResource(testFuentesDerecho1),
  testResource(testFuentesDerecho2),
  testResource(testLey40Articulos5a7),
  testResource(testLey40Articulos8y9),
  testResource(testLey40Articulos10y11),
  testResource(testLey40Articulos12a14),
  testResource(testLey40Articulos15a18),
  testResource(testLey39Articulos24y25),
  testResource(testLey39Articulos34a40),
  testResource(testLey39Articulos41a44),
  testResource(testLey39Articulos45y46),
  testResource(testLey39Articulos47a52),
];
