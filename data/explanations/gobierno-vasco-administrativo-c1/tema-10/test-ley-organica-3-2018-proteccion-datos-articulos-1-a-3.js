import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-organica-3-2018-proteccion-datos-articulos-1-a-3",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La ley orgánica persigue dos objetivos complementarios: adaptar el ordenamiento español al Reglamento (UE) 2016/679 y completar sus disposiciones.",
      descartes: {
        a: "La adaptación forma parte del objeto, pero omite la función de completar el Reglamento.",
        b: "Completar las disposiciones también es correcto, aunque el artículo añade la adaptación señalada en A.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El Reglamento (UE) 2016/679 fue aprobado conjuntamente por el Parlamento Europeo y el Consejo.",
      descartes: {
        b: "La Comisión Europea no sustituye al Consejo como institución coautora del Reglamento.",
        c: "La aprobación no correspondió al Consejo y a la Comisión, sino al Parlamento y al Consejo.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "El artículo 1 vincula el Reglamento y la ley orgánica con el derecho fundamental de las personas físicas a la protección de datos, amparado por el artículo 18.4 de la Constitución.",
      descartes: {
        b: "El precepto se refiere a personas físicas; no atribuye en esos términos el derecho fundamental a las personas jurídicas.",
        c: "La opción B amplía el ámbito subjetivo más allá de lo establecido en el artículo.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Además de adaptar la normativa, la ley tiene por objeto garantizar los derechos digitales de la ciudadanía conforme al artículo 18.4 de la Constitución.",
      descartes: {
        a: "La ley utiliza el verbo «garantizar», que expresa una obligación de protección más concreta que el mero reconocimiento.",
        c: "El mandato constitucional sirve para garantizar estos derechos, no para limitarlos.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El ámbito definido por el artículo 2 comprende los títulos I a IX y también los artículos 89 a 94 de la ley orgánica.",
      descartes: {
        a: "El propio encabezamiento delimita su alcance y no lo extiende a toda la ley.",
        b: "La referencia a los títulos I a IX es incompleta porque faltan los artículos 89 a 94.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La norma alcanza tanto al tratamiento total o parcialmente automatizado como al tratamiento no automatizado incluido o destinado a incluirse en un fichero.",
      descartes: {
        a: "Los tratamientos automatizados están incluidos, pero no son la única modalidad contemplada.",
        b: "Los tratamientos no automatizados también entran en el ámbito cuando cumplen la condición relativa al fichero.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "En el tratamiento no automatizado, los datos pueden estar ya contenidos en un fichero o estar destinados a incorporarse a él.",
      descartes: {
        a: "Estar contenidos en un fichero es uno de los supuestos, junto con el destino de inclusión descrito en B.",
        b: "La futura inclusión también basta, pero no excluye los datos que ya forman parte del fichero.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La ley excluye los tratamientos que el artículo 2.2 del Reglamento deja fuera de su ámbito, con las salvedades previstas por la propia ley orgánica.",
      descartes: {
        b: "La exclusión se refiere a datos de personas fallecidas, no a cualquier tratamiento de datos de familiares o personas vinculadas.",
        c: "Los tratamientos relacionados con la salud no aparecen como exclusión general del artículo 2.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Las actividades ajenas al ámbito del Derecho de la Unión se rigen primero por su legislación específica y, supletoriamente, por el Reglamento y la ley orgánica.",
      descartes: {
        a: "La legislación específica ocupa el primer nivel y no puede sustituirse por la aplicación principal de la ley orgánica.",
        c: "El Reglamento sí puede operar con carácter supletorio en estos tratamientos.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El artículo 2 cita expresamente los tratamientos realizados al amparo de la legislación orgánica del régimen electoral general.",
      descartes: {
        b: "La referencia legal concreta es al ámbito de instituciones penitenciarias; «Administración de Justicia» resulta más amplio y no reproduce el ejemplo.",
        c: "La enumeración menciona los registros Civil, de la Propiedad y Mercantiles, no el padrón municipal ni el censo promocional.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Los tratamientos de órganos judiciales y de la Oficina Judicial se someten al Reglamento y a la ley orgánica, sin perjuicio de las disposiciones aplicables de la Ley Orgánica del Poder Judicial.",
      descartes: {
        a: "El Reglamento y la ley orgánica constituyen la regla principal, pero el artículo conserva además la aplicación pertinente de la norma indicada en B.",
        b: "La Ley Orgánica del Poder Judicial interviene en lo que resulte aplicable, junto con el régimen general de la opción A.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Pueden solicitar el acceso, la rectificación o la supresión tanto las personas vinculadas al fallecido por razones familiares o de hecho como sus herederos.",
      descartes: {
        a: "La vinculación familiar o de hecho habilita para actuar, pero la norma reconoce también esa facultad a los herederos.",
        b: "La condición de heredero es suficiente, aunque no es la única relación admitida.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Una ley puede impedir el acceso, la rectificación o la supresión de los datos de la persona fallecida; esta es una de las excepciones expresas del artículo 3.",
      descartes: {
        a: "La voluntad impeditiva de la persona fallecida debe haberse manifestado expresamente; una prohibición tácita no cumple el requisito.",
        c: "La opción A incorpora indebidamente la prohibición tácita, por lo que no pueden aceptarse ambas alternativas.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Los requisitos, la validez y la vigencia de los mandatos e instrucciones de la persona fallecida se desarrollarán mediante real decreto.",
      descartes: {
        a: "El artículo no reserva esta regulación a una nueva ley orgánica.",
        b: "Tampoco exige una norma con rango de ley: prevé expresamente un real decreto.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Si fallece una persona menor, pueden ejercer estas facultades sus representantes legales y también el Ministerio Fiscal dentro de sus competencias.",
      descartes: {
        a: "El Ministerio Fiscal está legitimado, pero comparte esa posibilidad con quienes representan legalmente al menor.",
        b: "La patria potestad o tutela permite actuar, sin excluir la intervención del Ministerio Fiscal.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "En caso de discapacidad se mantienen las personas legitimadas para los menores y se añaden quienes hubieran sido designados para funciones de apoyo, cuando esa actuación esté comprendida en sus medidas de apoyo.",
      descartes: {
        a: "Las personas de la pregunta anterior conservan la facultad, pero el artículo incorpora además a las personas de apoyo en el supuesto previsto.",
        b: "La persona de apoyo puede actuar bajo las condiciones legales, junto con las personas ya legitimadas.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-10-gobierno-vasco",
  references: referencesFromQuestionRanges([
    { from: 1, to: 4, reference: articleReference(1) },
    { from: 5, to: 11, reference: articleReference(2) },
    { from: 12, to: 16, reference: articleReference(3) },
  ]),
});
