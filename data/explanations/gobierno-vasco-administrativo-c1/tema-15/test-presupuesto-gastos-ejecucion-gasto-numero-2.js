import {
  blockReference,
  defineExplanationSet,
  referencesFromQuestionRanges,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-presupuesto-gastos-ejecucion-gasto-numero-2",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La ejecución del gasto sigue esta secuencia: autorización, disposición, contracción de la obligación y ordenación del pago. Cada fase prepara y permite la siguiente.",
      descartes: {
        a: "La contracción de la obligación no precede a la disposición; primero se concreta y compromete el gasto y después se reconoce la obligación.",
        c: "No puede disponerse un gasto antes de autorizarlo, porque la autorización es la fase inicial que reserva el crédito.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El principio de justificación documental exige que todas las operaciones, incluidos los libramientos a justificar, cuenten con soporte adecuado. La pregunta reproduce precisamente esa exigencia.",
      descartes: {
        a: "El control administrativo sucesivo comprueba que las operaciones anteriores se hayan cumplido correctamente; no define el soporte documental de cada operación.",
        c: "La constancia escrita obliga a dejar registro de la actuación de los responsables, pero no sustituye la documentación que justifica el procedimiento.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "El control administrativo sucesivo obliga a verificar el correcto cumplimiento de las operaciones precedentes antes de realizar un nuevo acto del procedimiento. Esa comprobación encadenada es la descrita en el enunciado.",
      descartes: {
        b: "La justificación documental se refiere a que las operaciones estén respaldadas por documentos, no a revisar cada fase anterior antes de continuar.",
        c: "La constancia escrita acredita que una operación se realizó, mientras que aquí se pregunta por el control previo de la secuencia administrativa.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Con carácter general, cada consejero o consejera ejerce en su departamento las competencias de autorización, disposición y contracción de la obligación. La atribución se conecta con la gestión ordinaria de su ámbito departamental.",
      descartes: {
        a: "El Gobierno solo se reserva determinados supuestos de autorización por su naturaleza o cuantía; no asume con carácter general las tres operaciones.",
        b: "La teoría no atribuye estas competencias presupuestarias generales al lehendakari, sino a cada titular departamental.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "El Gobierno puede atribuir estas competencias a otros órganos mediante los decretos que desarrollan la estructura orgánica de los departamentos. Se trata de una decisión organizativa adoptada por decreto.",
      descartes: {
        a: "La teoría no reserva esta redistribución al Parlamento mediante ley; señala expresamente al Gobierno y a los decretos de estructura.",
        c: "Una orden de la consejería no es el instrumento previsto para efectuar esta atribución de competencias.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "La autorización del gasto puede quedar reservada al Gobierno cuando así lo exijan su naturaleza y cuantía conforme a las normas de contratación u otras leyes. La excepción afecta a esa primera fase.",
      descartes: {
        b: "La reserva excepcional descrita no recae sobre la disposición del gasto, que sigue el régimen competencial general.",
        c: "Tampoco se identifica la contracción de la obligación como la fase reservada al Gobierno por naturaleza y cuantía.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "Las funciones de ordenación de pagos están reservadas al Departamento de Economía y Hacienda. Así se separa la ordenación del pago de las fases gestionadas ordinariamente por cada departamento.",
      descartes: {
        a: "El consejero o consejera competente gestiona autorización, disposición y contracción, pero no recibe por ello la ordenación de pagos.",
        c: "La posible reserva gubernamental se refiere a determinadas autorizaciones de gasto, no a la función general de ordenar pagos.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "La autorización reserva todo o parte del crédito disponible para un gasto cuyo importe puede ser máximo, cierto o aproximado. La reserva presupuestaria indicada en la opción B es, por tanto, correcta.",
      descartes: {
        a: "En esta fase no se exige un importe exacto: puede conocerse de forma aproximada o fijarse como máximo.",
        c: "No son válidas las dos afirmaciones porque la opción A restringe indebidamente la autorización a una cantidad exacta.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "Al autorizar el gasto todavía se desconoce quién será el adjudicatario o tercero. Se conoce la necesidad y el concepto del gasto, pero aún no la persona o entidad concreta.",
      descartes: {
        b: "El concepto sí debe conocerse para imputar el gasto a la aplicación presupuestaria adecuada.",
        c: "No se desconocen ambos elementos: la incertidumbre afecta al tercero, no a la naturaleza del gasto.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "En la autorización se conoce el destino del gasto, pero la cuantía exacta puede no estar determinada; basta con un importe aproximado o máximo. Por ello lo desconocido es la cantidad exacta.",
      descartes: {
        a: "El fin del gasto ya está identificado, pues es necesario saber qué necesidad se pretende atender y a qué crédito se imputa.",
        c: "Solo permanece abierta la cuantía definitiva; no puede afirmarse que también se desconozca la finalidad.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "La clasificación económica responde a «en qué se gasta» y ordena los gastos en capítulos, artículos, conceptos y subconceptos. Esa estructura por naturaleza económica es la descrita en el enunciado.",
      descartes: {
        a: "La clasificación orgánica identifica quién realiza el gasto, no su desglose en capítulos y conceptos.",
        c: "La clasificación funcional muestra para qué se gasta; su criterio es la finalidad y no la naturaleza económica del gasto.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "La autorización se imputa a un crédito concreto, aunque basta con que exista saldo en el nivel de vinculación fijado por la normativa. No es imprescindible que la propia aplicación aislada tenga crédito disponible.",
      descartes: {
        a: "Exigir saldo en la aplicación individual desconoce el efecto de la vinculación presupuestaria explicado en la teoría.",
        c: "La opción B formula la suficiencia exigible en el nivel vinculante, por lo que sí hay una respuesta válida.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "El saldo del vinculante se obtiene restando al crédito actualizado conjunto las autorizaciones acumuladas de todas sus aplicaciones presupuestarias. La opción A conserva tanto las magnitudes como el orden de la resta.",
      descartes: {
        b: "Restar disposiciones a autorizaciones calcula otra disponibilidad posterior del proceso, no el saldo de crédito del nivel vinculante.",
        c: "La teoría ofrece expresamente una fórmula aplicable, de modo que no procede negar todas las alternativas.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "El carácter plurianual debe advertirse ya en la autorización y las anualidades futuras se estiman entonces de forma aproximada. Su determinación exacta llegará al concretarse el compromiso.",
      descartes: {
        a: "La autorización no requiere conocer con exactitud las anualidades futuras; en ese momento es suficiente una estimación aproximada.",
        c: "Esperar hasta la disposición sería tardío para identificar el carácter plurianual, que debe constar desde la fase de autorización.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "Los créditos de compromiso cubren gastos plurianuales que se asumen en el ejercicio corriente para años posteriores y su ejecución ha de comenzar en ese mismo ejercicio. Las dos afirmaciones recogen aspectos complementarios de esta figura.",
      descartes: {
        a: "La definición es correcta, pero queda incompleta si no se añade que la ejecución debe iniciarse en el ejercicio corriente.",
        b: "La exigencia de inicio en el propio ejercicio también es cierta, aunque por sí sola no explica qué integra el estado de gastos de compromiso.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "El sistema asigna la Referencia de Intervención después de contabilizar la autorización y esta actúa como nexo entre las fases presupuestarias. La función de enlace indicada en la opción B es la que sostiene la teoría.",
      descartes: {
        a: "La referencia no se asigna antes de contabilizar la autorización, sino una vez realizada esa contabilización.",
        c: "No pueden aceptarse ambas propuestas porque la secuencia temporal afirmada en la opción A es incorrecta.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-15-presupuesto-gastos",
  references: referencesFromQuestionRanges([
    {
      from: 1,
      reference: blockReference("fases-ejecucion", "Fases de ejecución"),
    },
    {
      from: 2,
      to: 3,
      reference: blockReference("principios-ejecucion", "Principios de ejecución"),
    },
    {
      from: 4,
      to: 7,
      reference: blockReference("competencias-ejecucion", "Competencias"),
    },
    {
      from: 8,
      to: 10,
      reference: blockReference(
        "autorizacion-definicion",
        "Autorización del gasto: definición",
      ),
    },
    {
      from: 11,
      to: 16,
      reference: blockReference(
        "autorizacion-tecnicas-presupuestarias",
        "Autorización del gasto: técnicas presupuestarias",
      ),
    },
  ]),
});
