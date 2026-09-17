import {
  blockReference,
  defineExplanationSet,
  EXPLANATION_REFERENCE_SCOPES,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-presupuesto-ingresos-clasificacion-y-fases-ejecucion",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "El estado de ingresos contiene el importe de los recursos financieros que se prevé liquidar durante el ejercicio. Al ser una previsión, la definición no introduce un límite mínimo ni máximo.",
      descartes: {
        a: "Añadir «como mínimo» transforma una estimación en un suelo que la teoría no establece.",
        b: "La expresión «como máximo» tampoco forma parte de la definición del estado de ingresos.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "La teoría remite al Texto Refundido de Disposiciones Legales sobre Principios Ordenadores de la Hacienda General del País Vasco para determinar los recursos financieros. Por eso corresponde la opción B.",
      descartes: {
        a: "La Ley de Régimen Presupuestario regula el estado de ingresos, pero la enumeración de los recursos financieros procede de la norma sobre principios ordenadores de la Hacienda General.",
        c: "Sí hay una norma identificada expresamente en la ficha, de modo que no procede negar ambas alternativas.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "El presupuesto de ingresos es una previsión y, por ello, tiene carácter estimativo; los créditos de gasto, en cambio, son limitativos. La diferencia queda recogida en la opción C.",
      descartes: {
        a: "Equiparar el ingreso al carácter limitativo de los créditos desconoce que la recaudación real puede superar o quedar por debajo de la previsión.",
        b: "Los créditos no comparten el carácter estimativo atribuido a los ingresos.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Los derechos de la Hacienda General del País Vasco pueden tener naturaleza pública o privada. Como ambas clases están previstas, la respuesta conjunta es la C.",
      descartes: {
        a: "Los derechos públicos son una de las dos categorías, pero no agotan la clasificación.",
        b: "Los derechos privados también existen, aunque conviven con los derivados del ejercicio de potestades públicas.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "Cuando el ingreso nace de una actividad en la que la Administración ejerce potestades públicas, el derecho es de naturaleza pública. Esa es la definición de la opción A.",
      descartes: {
        b: "La naturaleza privada se reserva a actividades en las que la Administración no actúa investida de potestades públicas.",
        c: "Las dos naturalezas son excluyentes según el papel que desempeñe la Administración en la actividad concreta.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "Los derechos derivados de actividades en las que la Administración no es titular de potestades públicas son de naturaleza privada. Por eso se selecciona B.",
      descartes: {
        a: "Para hablar de derecho público tendría que existir una actuación fundada en potestades públicas.",
        c: "La ausencia de potestad pública permite escoger una sola categoría y descarta la respuesta conjunta.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "Las aportaciones que financian los gastos de la CAE proceden de las Diputaciones Forales, de acuerdo con la distribución de recursos del Concierto Económico. La opción B identifica a esas instituciones.",
      descartes: {
        a: "Los ayuntamientos no son quienes realizan las aportaciones descritas en este apartado.",
        c: "El Estado participa en otros flujos financieros, pero no es el sujeto de las aportaciones a las que se refiere la pregunta.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "Las aportaciones de las Diputaciones Forales aparecen expresamente entre los ingresos de derecho público. Por tanto, corresponde la opción A.",
      descartes: {
        b: "No son rendimientos obtenidos por la Administración actuando sin potestades públicas.",
        c: "La teoría las clasifica de forma concreta como públicas, no simultáneamente en ambas naturalezas.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "La ficha teórica confirma que las aportaciones forales representan la mayor parte del presupuesto de ingresos, pero no concreta el porcentaje. Se conserva la cifra superior al 80 % registrada en el test como dato de su material de origen.",
      descartes: {
        a: "Una proporción inferior al 20 % sería incompatible con la afirmación teórica de que constituyen la mayor parte del presupuesto.",
        b: "La mitad no expresa que estas aportaciones superen al conjunto de los demás ingresos, aunque la ficha no permite fijar por sí sola el porcentaje exacto.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "La tramitación o expedición de licencias figura entre los servicios administrativos sujetos a tasa. Por ello la opción adecuada es B.",
      descartes: {
        a: "Un precio público remunera actividades que no tienen la consideración legal de tasa; la licencia está enumerada como supuesto de tasa.",
        c: "La expedición de una licencia no constituye el hecho imponible de un impuesto.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "La venta de publicaciones aparece en la teoría como ejemplo de actividad financiada mediante precio público. Esto conduce a la opción A.",
      descartes: {
        b: "La adquisición voluntaria de una publicación no se presenta como servicio administrativo sujeto a tasa.",
        c: "El pago responde a la entrega de un bien, no a la exacción de un impuesto.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "La venta y el alquiler de viviendas sociales se citan como ejemplos de precios públicos. En ese marco, la venta de una vivienda se corresponde con A.",
      descartes: {
        b: "La teoría no incluye esta venta entre los servicios o usos sujetos a tasa.",
        c: "La pregunta se refiere a la contraprestación por la venta, no a un eventual tributo asociado a la operación.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "La tramitación o expedición de matrículas se encuentra en la relación general de actuaciones por las que pueden establecerse tasas. Bajo esa formulación general, corresponde B.",
      descartes: {
        a: "La ficha menciona como precio público un supuesto específico —la matrícula en conservatorios—, pero la pregunta formula la categoría administrativa general de expedición de matrículas.",
        c: "Una matrícula no se clasifica aquí como impuesto, pues remunera una actuación o servicio concreto.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "Los servicios portuarios y aeroportuarios están enumerados expresamente entre las actividades susceptibles de tasa. La opción B coincide con esa relación.",
      descartes: {
        a: "En el material teórico estos servicios no se ofrecen como ejemplos de precio público.",
        c: "La prestación de un servicio individualizable no se identifica en este caso con un impuesto.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "La expedición de certificados o documentos a instancia de parte puede quedar sujeta a una tasa. Por eso la respuesta registrada es B.",
      descartes: {
        a: "El supuesto aparece en la enumeración legal de tasas, no en los ejemplos de precios públicos.",
        c: "No se trata de una obligación tributaria desligada de un servicio concreto, como ocurriría con un impuesto.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "La Administración puede recibir de otros entes públicos tanto transferencias como subvenciones. Al comprender las dos modalidades, la opción C es completa.",
      descartes: {
        a: "Las transferencias son posibles, pero esta alternativa omite las subvenciones también previstas.",
        b: "Las subvenciones no excluyen que puedan recibirse transferencias procedentes de otros entes públicos.",
      },
    },
    {
      preguntaId: 17,
      justificacion:
        "La clasificación económica contempla impuestos directos en el capítulo 1 e indirectos en el capítulo 2. Por tanto, la categoría de impuestos propios puede comprender ambas clases y procede C.",
      descartes: {
        a: "Limitar los impuestos propios a los directos deja fuera la categoría de impuestos indirectos descrita en el tema.",
        b: "La clasificación tampoco permite afirmar que todos deban ser exclusivamente indirectos.",
      },
    },
    {
      preguntaId: 18,
      justificacion:
        "La teoría identifica el impuesto sobre el bingo como el impuesto propio vigente de la CAE. La opción A reproduce esa denominación.",
      descartes: {
        b: "El juego aparece también ligado a un recargo sobre una tasa, que no es el impuesto solicitado.",
        c: "El IRPF es un tributo concertado recaudado por las Diputaciones Forales, no el impuesto propio indicado.",
      },
    },
    {
      preguntaId: 19,
      justificacion:
        "La respuesta almacenada apunta al juego, pero su denominación no es precisa: la teoría habla del recargo de la tasa sobre el juego, no de un «Impuesto de Juego». Se conserva la opción B original con esta advertencia.",
      descartes: {
        a: "El impuesto sobre el bingo es el impuesto propio mencionado, mientras que el recargo recae sobre la tasa del juego.",
        c: "La ficha no vincula el recargo vigente al IRPF.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La denominación del test no coincide con la teoría",
        texto:
          "La teoría denomina la figura «recargo de la tasa sobre el juego». La opción B utiliza «Impuesto de Juego»; se mantiene porque es la solución registrada en el test, aunque su formulación no es exacta.",
      },
    },
    {
      preguntaId: 20,
      justificacion:
        "Los ingresos por endeudamiento público comprenden emisiones de Deuda Pública y operaciones de crédito o préstamo. Las operaciones bursátiles no figuran como una tercera modalidad autónoma, por lo que se excluyen mediante C.",
      descartes: {
        a: "La emisión de Deuda Pública sí está incluida expresamente entre los ingresos del endeudamiento.",
        b: "Las operaciones de préstamo también forman parte de las vías de financiación enumeradas.",
      },
    },
    {
      preguntaId: 21,
      justificacion:
        "La ejecución del presupuesto de ingresos tiene dos fases: reconocimiento del derecho e ingreso efectivo o recaudación. La opción C recoge exactamente ambas.",
      descartes: {
        a: "La liquidación sirve normalmente para cuantificar y reconocer el derecho, pero no constituye una tercera fase separada junto a reconocimiento e ingreso.",
        b: "Esta alternativa desdobla indebidamente liquidación y recaudación, cuando la teoría sintetiza el proceso en dos fases.",
      },
    },
    {
      preguntaId: 22,
      justificacion:
        "El reconocimiento del derecho es el acto que formaliza un derecho económico a favor de la Administración. Esa definición coincide con la opción A.",
      descartes: {
        b: "La teoría no contempla una fase denominada «autorización del derecho».",
        c: "El ingreso hace efectivo un derecho ya reconocido; no es el acto que lo formaliza inicialmente.",
      },
    },
    {
      preguntaId: 23,
      justificacion:
        "Al reconocerse el derecho, la persona física o jurídica obligada a pagar queda constituida como deudora por derechos reconocidos. La opción A identifica el acto que produce ese efecto.",
      descartes: {
        b: "La autorización no figura entre las fases ni es la que determina contablemente al deudor.",
        c: "El cobro extingue o reduce la deuda, mientras que la pregunta se refiere al momento en que esta se constituye.",
      },
    },
    {
      preguntaId: 24,
      justificacion:
        "El reconocimiento contable exige que haya nacido un derecho de cobro, que su valor sea cierto y determinado y que pueda identificarse al deudor. Las opciones A y B reúnen esas tres condiciones, por lo que procede C.",
      descartes: {
        a: "La existencia del acontecimiento generador es necesaria, pero aún faltan cuantía cierta y deudor determinable.",
        b: "El valor y la identificación del deudor tampoco bastan sin constancia del hecho que origina el derecho de cobro.",
      },
    },
    {
      preguntaId: 25,
      justificacion:
        "Como criterio general, los derechos se reconocen cuando se dictan los actos de liquidación que los cuantifican. De ahí que la respuesta sea B.",
      descartes: {
        a: "El cobro puede coincidir con el reconocimiento en ciertos casos, pero no es la regla general establecida.",
        c: "La exigencia por la Tesorería no sustituye al acto de liquidación como momento ordinario de reconocimiento.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-16-presupuesto-ingresos",
  referenceForQuestion: (explanation) => {
    if (explanation.preguntaId === 9) {
      return blockReference(
        "ejecucion-presupuesto-ingresos",
        "Aportaciones de las Diputaciones Forales",
        { scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL },
      );
    }
    if (explanation.preguntaId >= 21) {
      return blockReference(
        "fases-ejecucion-presupuesto-ingresos",
        "Fases y reconocimiento de los derechos",
      );
    }
    return blockReference(
      "ejecucion-presupuesto-ingresos",
      "Tipos de ingresos y clasificación económica",
    );
  },
});
