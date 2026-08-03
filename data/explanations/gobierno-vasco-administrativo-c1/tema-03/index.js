import theory from "../../../resources/gobierno-vasco-administrativo-c1/tema-03/teoria/tema-03-union-europea.js";
import testEspacioEuropeo1 from "../../../tests/gobierno-vasco-administrativo-c1/tema-03/tests-ivot/test-espacio-europeo-i.js";
import testEspacioEuropeo2 from "../../../tests/gobierno-vasco-administrativo-c1/tema-03/tests-ivot/test-espacio-europeo-ii.js";
import testEspacioEuropeo3 from "../../../tests/gobierno-vasco-administrativo-c1/tema-03/tests-ivot/test-espacio-europeo-iii.js";
import testInstituciones1 from "../../../tests/gobierno-vasco-administrativo-c1/tema-03/tests-ivot/test-instituciones-union-europea-i.js";
import testInstituciones2 from "../../../tests/gobierno-vasco-administrativo-c1/tema-03/tests-ivot/test-instituciones-union-europea-ii.js";
import { createTheoryBasedExplanations } from "../theory-explanation-factory.js";
import {
  EXPLANATION_REFERENCE_SCOPES,
  blockReference,
} from "../../explanation-schema.js";

const contextualBlock = (blockId, label) =>
  blockReference(blockId, label, {
    scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL,
  });

const panoramaReference = contextualBlock(
  "breve-panorama-de-las-instituciones",
  "Panorama histórico e institucional de la Unión Europea",
);
const councilReference = blockReference(
  "el-consejo-europeo-institucion-de-impulso-y-direccion-politica",
  "Consejo Europeo",
);
const commissionReference = blockReference(
  "la-comision-europea-institucion-que-representa-el-interes-comun",
  "Comisión Europea",
);
const parliamentReference = blockReference(
  "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos",
  "Parlamento Europeo",
);

const commissionDiscrepancy = {
  referencia: commissionReference,
  justificacion:
    "La solución registrada por el test es «Está formado por un Presidente y sus Ministros (los Comisarios)». Se conserva sin cambios, aunque la teoría introduce el matiz indicado en la nota.",
  descartes: {
    a: "La teoría no atribuye a la Comisión el poder legislativo: le reconoce la iniciativa para proponer legislación.",
    c: "Esta opción sí coincide en buena medida con las funciones que la teoría atribuye a la Comisión.",
  },
  notaRevision: {
    tipo: "discrepancia-teorica",
    titulo: "La solución del test no coincide plenamente con la teoría",
    texto:
      "La teoría describe a la Comisión como un colegio formado por una Presidencia y comisarios, no por ministros. Además, le atribuye la iniciativa legislativa, la vigilancia del cumplimiento de los Tratados y la adopción de iniciativas para el desarrollo de la Unión. Por ello, el contenido teórico se aproxima más a la opción C, aunque aquí se mantiene la opción B registrada en el test.",
  },
};

const tests = [
  {
    test: testEspacioEuropeo1,
    fallbackLabel: "la cronología de la construcción europea",
    fallbackReference: panoramaReference,
  },
  {
    test: testEspacioEuropeo2,
    fallbackLabel: "la cronología de la construcción europea",
    fallbackReference: panoramaReference,
    fallbackQuestionIds: [1],
    referenceOverrides: { 1: panoramaReference },
  },
  {
    test: testEspacioEuropeo3,
    fallbackLabel: "la evolución jurídica de la Unión Europea",
    fallbackReference: panoramaReference,
    fallbackQuestionIds: [8, 17, 25],
    referenceOverrides: {
      8: councilReference,
      17: commissionReference,
      25: panoramaReference,
    },
    explanationOverrides: { 17: commissionDiscrepancy },
  },
  {
    test: testInstituciones1,
    fallbackLabel: "la organización institucional de la Unión Europea",
    fallbackReference: panoramaReference,
  },
  {
    test: testInstituciones2,
    fallbackLabel: "la organización institucional de la Unión Europea",
    fallbackReference: panoramaReference,
    fallbackQuestionIds: [1, 19, 26],
    referenceOverrides: {
      1: parliamentReference,
      19: councilReference,
      26: panoramaReference,
    },
    explanationOverrides: {
      5: {
        justificacion:
          "La solución registrada por el test es «Bruselas (Bélgica)». Se conserva sin cambios, aunque la teoría sitúa allí parte de la actividad parlamentaria.",
        descartes: {
          b: "Luxemburgo sí figura en la teoría como sede de oficinas administrativas y de la Secretaría General.",
          c: "París no aparece entre los lugares de trabajo enumerados por la teoría; es la alternativa que esta respaldaría.",
        },
        notaRevision: {
          tipo: "discrepancia-teorica",
          titulo: "La solución del test contradice la teoría",
          texto:
            "La teoría sitúa la actividad del Parlamento Europeo en Bruselas, Estrasburgo y Luxemburgo. París no figura entre sus lugares de trabajo. Por tanto, el contenido teórico apunta a la opción C, aunque aquí se mantiene la opción A registrada en el test.",
        },
      },
      11: {
        justificacion:
          "La solución registrada por el test es «Examina las peticiones de los ciudadanos creando comisiones de investigación». Se conserva sin cambios, con el matiz recogido en la nota.",
        descartes: {
          a: "La supervisión del Consejo mediante preguntas e información sí es compatible con las funciones de control descritas en la teoría.",
          c: "La teoría no permite considerar correctas ambas formulaciones literalmente, porque la opción B une dos procedimientos distintos.",
        },
        notaRevision: {
          tipo: "discrepancia-teorica",
          titulo: "La solución del test no coincide plenamente con la teoría",
          texto:
            "La teoría distingue tres mecanismos: el control del Consejo mediante preguntas e información, el examen de peticiones a través de la comisión de peticiones y las comisiones temporales de investigación para estudiar infracciones o casos de mala administración. La opción B mezcla los dos últimos mecanismos. Se mantiene, no obstante, como solución registrada por el test.",
        },
      },
      22: commissionDiscrepancy,
    },
  },
];

export default tests.map(({ test, ...options }) =>
  createTheoryBasedExplanations(test, theory, {
    ...options,
  }),
);
