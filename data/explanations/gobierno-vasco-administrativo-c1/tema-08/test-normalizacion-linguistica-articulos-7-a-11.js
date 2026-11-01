import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-normalizacion-linguistica-articulos-7-a-11",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Los criterios de uso son pautas básicas establecidas por cada entidad dentro de su planificación lingüística y obligan tanto a la entidad como a su personal.",
      descartes: {
        b: "Los criterios tienen vocación de permanencia y su vigencia no queda condicionada por los períodos ni por los planes estratégicos.",
        c: "La segunda alternativa invierte la regla de permanencia, por lo que no pueden ser correctas ambas.",
        d: "La opción A recoge la definición del artículo 7.1.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La realidad sociolingüística, el uso progresivo del euskera y la plena validez de los actos en cualquiera de las lenguas oficiales son criterios que el artículo 8 contempla conjuntamente.",
      descartes: {
        a: "La situación sociolingüística es un parámetro válido, pero no es la única regla aplicable.",
        b: "El uso progresivo del euskera está previsto, junto con la validez jurídica indicada en C.",
        c: "La validez de ambas lenguas es correcta y se suma a los criterios descritos en A y B.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Cada entidad revisa sus criterios al inicio de cada período y puede adaptarlos durante su desarrollo; esa es la regla del artículo 9.2.",
      descartes: {
        a: "Los criterios se publican en el portal web de la entidad, no necesariamente en un diario oficial.",
        b: "El modelo lo elabora el departamento competente en política lingüística, no el Consejo de Gobierno.",
        d: "Las opciones A y B atribuyen una publicación y una competencia distintas de las previstas.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La aprobación de los criterios debe comunicarse al departamento competente en política lingüística dentro del mes siguiente.",
      descartes: {
        a: "La norma no fija un plazo de diez días.",
        b: "Tampoco establece quince días; concede un mes desde la aprobación.",
        d: "La opción C contiene el plazo expreso del artículo 9.3.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Los rótulos interiores y exteriores de oficinas e instalaciones se redactan en las dos lenguas oficiales, salvo los supuestos concretos que permiten usar solo el euskera.",
      descartes: {
        a: "La identidad corporativa debe figurar al menos en euskera; la opción no refleja ese mínimo ni la posible presencia del castellano.",
        c: "La excepción permite un rótulo solo en euskera, no solo en castellano.",
        d: "La opción C altera la lengua de la excepción y evita que todas sean correctas.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La respuesta A se mantiene porque el artículo 10.3 ordena favorecer la visibilidad del euskera cuando se usan ambas lenguas en la imagen institucional.",
      descartes: {
        b: "La teoría también exige que los mensajes en euskera no sean meras traducciones, sino creaciones originales; esta alternativa resulta igualmente compatible con el artículo 10.4.",
        c: "La difusión exclusiva solo se permite en euskera para actuaciones de promoción de esta lengua, no indistintamente en euskera o castellano.",
        d: "La opción C impide aceptar conjuntamente las tres afirmaciones.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La teoría admite otra opción además de la solución registrada",
        texto: "El artículo 10 respalda la opción A, pero también la B: las campañas deben evitar que los mensajes en euskera sean meras traducciones. Se conserva la respuesta A registrada y se deja constancia de esta segunda alternativa compatible.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Los mensajes automatizados para destinatarios indeterminados y los documentos escritos sin destinatario concreto deben emitirse o redactarse en ambas lenguas oficiales.",
      descartes: {
        a: "La regla sobre mensajes automatizados es correcta, pero se aplica también a los documentos de la opción B.",
        b: "Los documentos sin destinatario se redactan en bilingüe, junto con los mensajes descritos en A.",
        d: "Ambas situaciones aparecen expresamente en el artículo 10.5.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "En los nombres de dominio y subdominio se favorecerá, sin imponerla como obligación absoluta, la inclusión de palabras en euskera.",
      descartes: {
        a: "El verbo legal es «favorecer», no garantizar en todos los casos.",
        c: "La norma promueve la presencia del euskera; no ordena excluirlo.",
        d: "El artículo 10.6 regula expresamente esta cuestión.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El procedimiento se tramita en euskera si lo inicia así una única persona interesada o si todas las personas concurrentes utilizan esa lengua.",
      descartes: {
        a: "El supuesto de una única persona es correcto, pero no agota la regla.",
        b: "La unanimidad lingüística entre varias personas también conduce a la tramitación en euskera.",
        d: "Los dos escenarios están previstos en el artículo 11.1.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Si hay varias personas interesadas y discrepan sobre la lengua, la tramitación se rige por la legislación vigente, procurando además el acuerdo entre ellas.",
      descartes: {
        a: "La discrepancia no determina automáticamente el uso exclusivo del euskera.",
        b: "Tampoco impone por sí sola la tramitación íntegra en castellano.",
        d: "El artículo no establece como solución general una tramitación bilingüe.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Las notificaciones siguen la lengua elegida, deben existir formularios en ambos idiomas y cualquier cambio de opción lingüística debe comunicarse a la entidad.",
      descartes: {
        a: "La lengua elegida rige comunicaciones y notificaciones, junto con las demás garantías indicadas.",
        b: "La disponibilidad de formularios bilingües es correcta, pero no es la única previsión.",
        c: "El cambio de lengua debe comunicarse y completa las reglas de A y B.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-08-normalizacion-linguistica",
  references: referencesFromQuestionRanges([
    { from: 1, reference: articleReference(7) },
    { from: 2, reference: articleReference(8) },
    { from: 3, to: 4, reference: articleReference(9) },
    { from: 5, to: 8, reference: articleReference(10) },
    { from: 9, to: 11, reference: articleReference(11) },
  ]),
});
