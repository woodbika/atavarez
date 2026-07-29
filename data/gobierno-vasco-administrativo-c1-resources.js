import { GOBIERNO_VASCO_ADMINISTRATIVO_C1 } from "./oppositions.js";
import { createOppositionResourceFactory } from "./resource-factory.js";
import testPrincipiosRectores from "./tests/gobierno-vasco-administrativo-c1/tema-01/tests-ivot/capitulo-iii-titulo-i-ce-principios-rectores.js";
import testCapituloII from "./tests/gobierno-vasco-administrativo-c1/tema-01/tests-ivot/test-capitulo-ii-titulo-i-ce.js";
import testCapitulosIVyV from "./tests/gobierno-vasco-administrativo-c1/tema-01/tests-ivot/test-constitucion-capitulo-iv-y-v.js";
import testArticulos10a13 from "./tests/gobierno-vasco-administrativo-c1/tema-01/tests-ivot/test-constitucion-espanola-articulos-10-a-13.js";
import testArticulos14a29 from "./tests/gobierno-vasco-administrativo-c1/tema-01/tests-ivot/test-constitucion-espanola-articulos-14-a-29-2022.js";
import testEstructura from "./tests/gobierno-vasco-administrativo-c1/tema-01/tests-ivot/test-estructura-constitucion-espanola.js";
import testOrganizacionTerritorial1 from "./tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-1.js";
import testOrganizacionTerritorial2 from "./tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-2.js";
import testOrganizacionTerritorial3 from "./tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-3.js";
import testOrganizacionTerritorial4 from "./tests/gobierno-vasco-administrativo-c1/tema-02/tests-ivot/test-organizacion-territorial-del-estado-numero-4-competencias.js";
import testEstatutoVascoTituloPreliminar from "./tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-titulo-preliminar.js";
import testEstatutoVascoCompetencias1 from "./tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-competencias-numero-1.js";
import testEstatutoVascoCompetencias2 from "./tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-competencias-numero-2.js";
import testEstatutoVascoCompetencias3 from "./tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-competencias-numero-3.js";
import testEstatutoVascoArticulos24a33 from "./tests/gobierno-vasco-administrativo-c1/tema-04/tests-ivot/test-estatuto-autonomia-pais-vasco-articulos-24-a-33.js";
import testEmpleoPublico26a30 from "./tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-26-a-30.js";
import testEmpleoPublico161y162Derechos from "./tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-161-y-162.js";
import testEmpleoPublico161a166 from "./tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-161-a-166.js";
import testEmpleoPublico167a171 from "./tests/gobierno-vasco-administrativo-c1/tema-09/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-167-a-171.js";
import testEmpleoPublico40a44 from "./tests/gobierno-vasco-administrativo-c1/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-40-a-44.js";
import testEmpleoPublico45a50 from "./tests/gobierno-vasco-administrativo-c1/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-45-a-50.js";
import testEmpleoPublico51y52 from "./tests/gobierno-vasco-administrativo-c1/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-51-y-52.js";
import testEmpleoPublico53a62 from "./tests/gobierno-vasco-administrativo-c1/tema-17/tests-ivot/test-ley-11-2022-empleo-publico-vasco-articulos-53-a-62.js";
import testEmpleoPublico136a138 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-136-a-138.js";
import testEmpleoPublico139y140 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-139-y-140.js";
import testEmpleoPublico141y142 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-141-y-142.js";
import testEmpleoPublico143a145 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-143-a-145.js";
import testEmpleoPublico146a148 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-146-a-148.js";
import testEmpleoPublico149a152 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-149-a-152.js";
import testEmpleoPublico153a155 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-153-a-155.js";
import testEmpleoPublico156a160 from "./tests/gobierno-vasco-administrativo-c1/tema-18/tests-ivot/test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-156-a-160.js";
import testFuentesDerecho1 from "./tests/gobierno-vasco-administrativo-c1/tema-28/tests-ivot/test-de-fuentes-del-derecho-1.js";
import testFuentesDerecho2 from "./tests/gobierno-vasco-administrativo-c1/tema-28/tests-ivot/test-de-fuentes-del-derecho-2.js";
import testLey40Articulos5a7 from "./tests/gobierno-vasco-administrativo-c1/tema-29/tests-ivot/test-de-la-ley-40-2015-articulos-5-a-7.js";
import testLey40Articulos8y9 from "./tests/gobierno-vasco-administrativo-c1/tema-29/tests-ivot/test-de-la-ley-40-2015-numero-2-articulos-8-y-9.js";
import testLey40Articulos10y11 from "./tests/gobierno-vasco-administrativo-c1/tema-29/tests-ivot/test-de-la-ley-40-2015-regimen-juridico-sector-publico-articulos-10-y-11.js";
import testLey40Articulos12a14 from "./tests/gobierno-vasco-administrativo-c1/tema-29/tests-ivot/test-ley-40-2015-articulos-12-a-14.js";
import testLey40Articulos15a18 from "./tests/gobierno-vasco-administrativo-c1/tema-29/tests-ivot/test-ley-40-2015-articulos-15-a-18.js";
import testLey39Articulos24y25 from "./tests/gobierno-vasco-administrativo-c1/tema-30/tests-ivot/test-ley-39-2015-silencio-administrativo-articulos-24-y-25.js";
import testLey39Articulos34a40 from "./tests/gobierno-vasco-administrativo-c1/tema-30/tests-ivot/test-ley-39-2015-articulos-34-a-40.js";
import testLey39Articulos41a44 from "./tests/gobierno-vasco-administrativo-c1/tema-30/tests-ivot/test-ley-39-2015-articulos-41-a-44.js";
import testLey39Articulos45y46 from "./tests/gobierno-vasco-administrativo-c1/tema-30/tests-ivot/test-ley-39-2015-articulos-45-y-46.js";
import testLey39Articulos47a52 from "./tests/gobierno-vasco-administrativo-c1/tema-30/tests-ivot/test-ley-39-2015-articulos-47-a-52.js";
import testLey39Articulos3a8 from "./tests/gobierno-vasco-administrativo-c1/tema-31/tests-ivot/test-ley-39-2015-articulos-3-a-8.js";
import testLey39Articulos9a12 from "./tests/gobierno-vasco-administrativo-c1/tema-31/tests-ivot/test-ley-39-2015-articulos-9-a-12.js";
import testLey40Articulos23y24 from "./tests/gobierno-vasco-administrativo-c1/tema-31/tests-ivot/test-ley-40-2015-articulos-23-y-24.js";
import testLey39Articulo53 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulo-53.js";
import testLey39Articulos55a62 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-55-a-62.js";
import testLey39Articulos62a66 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-62-a-66.js";
import testLey39Articulos67y68 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-67-y-68.js";
import testLey39Articulos6769y70 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-67-69-y-70.js";
import testLey39Articulos70a74 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-70-a-74.js";
import testLey39Articulos75a77 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-75-a-77.js";
import testLey39Articulos787980y82 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-78-79-80-y-82.js";
import testLey39Articulo83 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulo-83.js";
import testLey39Articulos85y86 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-85-y-86.js";
import testLey39Articulos87y88 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-87-y-88.js";
import testLey39Articulos89y90 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-89-y-90.js";
import testLey39Articulos91a95 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulos-91-a-95.js";
import testLey39Articulo96 from "./tests/gobierno-vasco-administrativo-c1/tema-32/tests-ivot/test-ley-39-2015-articulo-96.js";
import testLey39Articulos106a109 from "./tests/gobierno-vasco-administrativo-c1/tema-33/tests-ivot/test-ley-39-2015-articulos-106-a-109.js";
import testLey39Articulos112a120 from "./tests/gobierno-vasco-administrativo-c1/tema-33/tests-ivot/test-ley-39-2015-articulos-112-a-120.js";
import testLey39Articulos121a124 from "./tests/gobierno-vasco-administrativo-c1/tema-33/tests-ivot/test-ley-39-2015-articulos-121-a-124.js";
import testLey39Articulos125y126 from "./tests/gobierno-vasco-administrativo-c1/tema-33/tests-ivot/test-ley-39-2015-articulos-125-y-126.js";
import testLey40Articulos32y33 from "./tests/gobierno-vasco-administrativo-c1/tema-34/tests-ivot/test-ley-40-2015-articulos-32-y-33.js";
import testLey40Articulos34a37 from "./tests/gobierno-vasco-administrativo-c1/tema-34/tests-ivot/test-ley-40-2015-articulos-34-a-37.js";
import teoriaConstitucion from "./resources/gobierno-vasco-administrativo-c1/tema-01/teoria/tema-1-la-constitucion-espanola.js";
import teoriaOrganizacionTerritorial from "./resources/gobierno-vasco-administrativo-c1/tema-02/teoria/tema-2-organizacion-territorial.js";
import teoriaOrganizacionPoliticaCapv from "./resources/gobierno-vasco-administrativo-c1/tema-04/teoria/tema-4-organizacion-politica-administrativa-capv.js";
import teoriaPersonalServicioPublico from "./resources/gobierno-vasco-administrativo-c1/tema-09/teoria/tema-9-personal-al-servicio.js";
import teoriaEmpleoPublicoVasco from "./resources/gobierno-vasco-administrativo-c1/tema-17/teoria/tema-17-empleo-publico-vasco.js";
import teoriaAccesoEmpleoPublicoVasco from "./resources/gobierno-vasco-administrativo-c1/tema-18/teoria/tema-18-empleo-publico-vasco.js";

const relatedTheoryByTestId = new Map([
  [testEstructura.id, {
    resourceId: teoriaConstitucion.id,
    selection: { blockIds: ["estructura"] },
  }],
  [testArticulos10a13.id, {
    resourceId: teoriaConstitucion.id,
    selection: { articles: { from: 10, to: 13 } },
  }],
  [testArticulos14a29.id, {
    resourceId: teoriaConstitucion.id,
    selection: { articles: { from: 14, to: 29 } },
  }],
  [testCapituloII.id, {
    resourceId: teoriaConstitucion.id,
    selection: { articles: { from: 30, to: 38 } },
  }],
  [testPrincipiosRectores.id, {
    resourceId: teoriaConstitucion.id,
    selection: { articles: { from: 39, to: 52 } },
  }],
  [testCapitulosIVyV.id, {
    resourceId: teoriaConstitucion.id,
    selection: { articles: { from: 53, to: 55 } },
  }],
  [testOrganizacionTerritorial1.id, {
    resourceId: teoriaOrganizacionTerritorial.id,
    selection: { articles: { from: 137, to: 142 } },
  }],
  [testOrganizacionTerritorial4.id, {
    resourceId: teoriaOrganizacionTerritorial.id,
    selection: { articles: { from: 148, to: 149 } },
  }],
  [testEstatutoVascoTituloPreliminar.id, {
    resourceId: teoriaOrganizacionPoliticaCapv.id,
    selection: { articles: { from: 1, to: 9 } },
  }],
  [testEstatutoVascoCompetencias1.id, {
    resourceId: teoriaOrganizacionPoliticaCapv.id,
    selection: { articles: { from: 10, to: 12 } },
  }],
  [testEstatutoVascoCompetencias2.id, {
    resourceId: teoriaOrganizacionPoliticaCapv.id,
    selection: { articles: { from: 10, to: 20 } },
  }],
  [testEstatutoVascoCompetencias3.id, {
    resourceId: teoriaOrganizacionPoliticaCapv.id,
    selection: { articles: { from: 20, to: 23 } },
  }],
  [testEstatutoVascoArticulos24a33.id, {
    resourceId: teoriaOrganizacionPoliticaCapv.id,
    selection: { articles: { from: 24, to: 33 } },
  }],
  [testEmpleoPublico26a30.id, {
    resourceId: teoriaPersonalServicioPublico.id,
    selection: { articles: { from: 26, to: 30 } },
  }],
  [testEmpleoPublico161y162Derechos.id, {
    resourceId: teoriaPersonalServicioPublico.id,
    selection: { articles: { from: 161, to: 162 } },
  }],
  [testEmpleoPublico161a166.id, {
    resourceId: teoriaPersonalServicioPublico.id,
    selection: { articles: { from: 161, to: 166 } },
  }],
  [testEmpleoPublico167a171.id, {
    resourceId: teoriaPersonalServicioPublico.id,
    selection: { articles: { from: 167, to: 171 } },
  }],
  [testEmpleoPublico40a44.id, {
    resourceId: teoriaEmpleoPublicoVasco.id,
    selection: { articles: { from: 40, to: 44 } },
  }],
  [testEmpleoPublico45a50.id, {
    resourceId: teoriaEmpleoPublicoVasco.id,
    selection: { articles: { from: 45, to: 50 } },
  }],
  [testEmpleoPublico51y52.id, {
    resourceId: teoriaEmpleoPublicoVasco.id,
    selection: { articles: { from: 51, to: 52 } },
  }],
  [testEmpleoPublico53a62.id, {
    resourceId: teoriaEmpleoPublicoVasco.id,
    selection: { articles: { from: 53, to: 62 } },
  }],
  [testEmpleoPublico136a138.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 136, to: 138 } },
  }],
  [testEmpleoPublico139y140.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 139, to: 140 } },
  }],
  [testEmpleoPublico141y142.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 141, to: 142 } },
  }],
  [testEmpleoPublico143a145.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 143, to: 145 } },
  }],
  [testEmpleoPublico146a148.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 146, to: 148 } },
  }],
  [testEmpleoPublico149a152.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 149, to: 152 } },
  }],
  [testEmpleoPublico153a155.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 153, to: 155 } },
  }],
  [testEmpleoPublico156a160.id, {
    resourceId: teoriaAccesoEmpleoPublicoVasco.id,
    selection: { articles: { from: 156, to: 160 } },
  }],
]);

const theoryNoticeByTestId = new Map([
  [testOrganizacionTerritorial2.id, "Sin vínculo teórico directo"],
  [testOrganizacionTerritorial3.id, "Sin vínculo teórico directo"],
]);

const { testResource, theoryResource } = createOppositionResourceFactory(
  GOBIERNO_VASCO_ADMINISTRATIVO_C1,
  { relatedTheoryByTestId, theoryNoticeByTestId },
);

export const gobiernoVascoAdministrativoC1Resources = Object.freeze([
  theoryResource(teoriaConstitucion),
  testResource(testEstructura),
  testResource(testArticulos10a13),
  testResource(testArticulos14a29),
  testResource(testCapituloII),
  testResource(testPrincipiosRectores),
  testResource(testCapitulosIVyV),
  theoryResource(teoriaOrganizacionTerritorial),
  testResource(testOrganizacionTerritorial1),
  testResource(testOrganizacionTerritorial2),
  testResource(testOrganizacionTerritorial3),
  testResource(testOrganizacionTerritorial4),
  theoryResource(teoriaOrganizacionPoliticaCapv),
  testResource(testEstatutoVascoTituloPreliminar),
  testResource(testEstatutoVascoCompetencias1),
  testResource(testEstatutoVascoCompetencias2),
  testResource(testEstatutoVascoCompetencias3),
  testResource(testEstatutoVascoArticulos24a33),
  theoryResource(teoriaPersonalServicioPublico),
  testResource(testEmpleoPublico26a30),
  testResource(testEmpleoPublico161y162Derechos),
  testResource(testEmpleoPublico161a166),
  testResource(testEmpleoPublico167a171),
  theoryResource(teoriaEmpleoPublicoVasco),
  testResource(testEmpleoPublico40a44),
  testResource(testEmpleoPublico45a50),
  testResource(testEmpleoPublico51y52),
  testResource(testEmpleoPublico53a62),
  theoryResource(teoriaAccesoEmpleoPublicoVasco),
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
  testResource(testLey39Articulos3a8),
  testResource(testLey39Articulos9a12),
  testResource(testLey40Articulos23y24),
  testResource(testLey39Articulo53),
  testResource(testLey39Articulos55a62),
  testResource(testLey39Articulos62a66),
  testResource(testLey39Articulos67y68),
  testResource(testLey39Articulos6769y70),
  testResource(testLey39Articulos70a74),
  testResource(testLey39Articulos75a77),
  testResource(testLey39Articulos787980y82),
  testResource(testLey39Articulo83),
  testResource(testLey39Articulos85y86),
  testResource(testLey39Articulos87y88),
  testResource(testLey39Articulos89y90),
  testResource(testLey39Articulos91a95),
  testResource(testLey39Articulo96),
  testResource(testLey39Articulos106a109),
  testResource(testLey39Articulos112a120),
  testResource(testLey39Articulos121a124),
  testResource(testLey39Articulos125y126),
  testResource(testLey40Articulos32y33),
  testResource(testLey40Articulos34a37),
]);
