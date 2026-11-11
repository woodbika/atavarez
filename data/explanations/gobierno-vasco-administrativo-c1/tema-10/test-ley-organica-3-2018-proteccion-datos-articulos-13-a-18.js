import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-organica-3-2018-proteccion-datos-articulos-13-a-18",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Si la solicitud de acceso no concreta su alcance y el responsable trata muchos datos, este puede pedir a la persona afectada que especifique los datos o actividades de tratamiento consultados.",
      descartes: {
        a: "La falta inicial de precisión permite solicitar una concreción, pero no denegar directamente el derecho.",
        c: "El artículo contempla la petición de precisión, no dos alternativas equivalentes a elección del responsable.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La afirmación B es la incorrecta: el sistema remoto debe garantizar de modo permanente el acceso a la totalidad de los datos, no un único acceso.",
      descartes: {
        a: "Facilitar un sistema remoto, directo y seguro puede satisfacer el derecho de acceso.",
        c: "Comunicar cómo entrar en ese sistema basta para considerar atendida la solicitud en los términos del artículo 13.2.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Aunque exista acceso remoto, la persona interesada puede pedir la información del artículo 15.1 del Reglamento que no esté incluida en el sistema.",
      descartes: {
        b: "El sistema remoto no impide solicitar los extremos que hayan quedado fuera de él.",
        c: "La ley regula expresamente esta posibilidad después de describir el acceso remoto.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El ejercicio del derecho de acceso puede considerarse repetitivo cuando se formula más de una vez en seis meses, salvo que exista una causa legítima.",
      descartes: {
        a: "El plazo legal no se reduce a tres meses.",
        c: "Tampoco se exige esperar doce meses para apreciar la reiteración.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Elegir un medio distinto que genere un coste desproporcionado permite calificar la solicitud como excesiva y trasladar a la persona el exceso de coste.",
      descartes: {
        b: "La consecuencia prevista no es denegar el derecho, sino atenderlo sin dilaciones indebidas con el régimen de costes correspondiente.",
        c: "La denegación de B no acompaña a la calificación de solicitud excesiva.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La solicitud de rectificación debe identificar los datos afectados y la corrección que se pretende realizar.",
      descartes: {
        b: "La documentación justificativa se aporta cuando sea preciso, no obligatoriamente en todos los casos.",
        c: "El carácter absoluto de B impide considerar correctas ambas opciones.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Tras una oposición a la mercadotecnia directa, el responsable puede conservar los datos identificativos imprescindibles para impedir que se produzcan tratamientos futuros con ese fin.",
      descartes: {
        a: "La supresión no alcanza necesariamente a los datos mínimos que evitan nuevas acciones de mercadotecnia directa.",
        b: "Los datos se conservan para impedir tratamientos futuros, no para hacerlos posibles.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La limitación del tratamiento debe constar claramente en los sistemas de información del responsable.",
      descartes: {
        b: "El artículo 16.2 atribuye esta constancia al sistema del responsable, no al del encargado.",
        c: "Solo la opción A identifica el sistema señalado por la ley.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-10-gobierno-vasco",
  references: referencesFromQuestionRanges([
    { from: 1, to: 5, reference: articleReference(13) },
    { from: 6, reference: articleReference(14) },
    { from: 7, reference: articleReference(15) },
    { from: 8, reference: articleReference(16) },
  ]),
});
