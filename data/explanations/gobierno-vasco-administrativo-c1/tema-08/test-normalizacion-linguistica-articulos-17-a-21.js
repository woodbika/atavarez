import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-normalizacion-linguistica-articulos-17-a-21",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El plan estratégico es el proceso que reúne para cada período los objetivos, las medidas y los medios necesarios para la normalización lingüística.",
      descartes: {
        a: "El plan de gestión concreta acciones para ejecutar objetivos ya establecidos en el plan estratégico.",
        c: "El decreto no denomina «Plan General» a este instrumento.",
        d: "La definición corresponde expresamente al plan estratégico.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El plan estratégico busca garantizar el euskera como lengua de servicio e incrementar y normalizar su uso como lengua de trabajo.",
      descartes: {
        b: "El castellano conserva su oficialidad, pero no es la lengua cuya normalización persigue este instrumento.",
        c: "La finalidad estratégica descrita se refiere específicamente al euskera.",
        d: "La opción A reproduce el objeto del artículo 17.1.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "El plan debe incluir el análisis de la plantilla, los perfiles lingüísticos y sus fechas de preceptividad.",
      descartes: {
        a: "El análisis de plantilla es obligatorio, junto con los detalles de B y C.",
        b: "Los perfiles deben detallarse, pero también sus fechas y la situación de la plantilla.",
        c: "Las fechas de preceptividad forman parte del contenido junto con A y B.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Cada entidad elabora y aprueba el plan estratégico durante el primer año de cada período de planificación.",
      descartes: {
        a: "El plan no se aprueba anualmente, sino una vez por período.",
        b: "La norma no fija una periodicidad bienal.",
        d: "El momento previsto es el primer año, no el segundo.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Una vez aprobado, el plan estratégico debe publicarse en el portal web de la entidad.",
      descartes: {
        a: "El artículo 17 no exige su publicación en el diario oficial.",
        c: "Solo el portal web aparece como medio obligatorio de publicación.",
        d: "La opción B identifica el canal establecido por la norma.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La elaboración exige diagnóstico inicial, objetivos e instrumentos para alcanzarlos y comunicación de la aprobación al departamento competente; las tres afirmaciones son complementarias.",
      descartes: {
        a: "El diagnóstico es necesario, junto con las decisiones y la comunicación posteriores.",
        b: "Fijar objetivos, medidas y medios forma parte del proceso, pero no lo agota.",
        c: "Dar traslado de la aprobación también es obligatorio y se suma a A y B.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El departamento del Gobierno Vasco competente en política lingüística pone a disposición de las entidades el modelo de plan estratégico.",
      descartes: {
        a: "Cada entidad diseña su plan, pero no elabora el modelo común de coordinación.",
        b: "La competencia no se atribuye al Consejo de Gobierno.",
        d: "El Parlamento Vasco tampoco prepara este modelo técnico.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La entidad incorpora los indicadores necesarios para la coordinación y puede añadir otros que considere oportunos aunque no estén en el anexo.",
      descartes: {
        a: "Los indicadores coordinados son obligatorios, pero no excluyen los adicionales de B.",
        b: "Los indicadores propios son posibles y se suman a los comunes.",
        d: "Ambas clases de indicadores están previstas en el artículo 17.4.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El cuadro de mando y su estructura pueden modificarse mediante orden de la persona titular del departamento competente en política lingüística.",
      descartes: {
        a: "No se requiere una ley del Parlamento para esta modificación técnica.",
        b: "La forma prevista es una orden departamental, no un decreto del Gobierno.",
        d: "La opción C identifica correctamente el órgano y el instrumento.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "En una misma entidad pueden coexistir varios planes estratégicos cuando lo aconsejen las peculiaridades de sus áreas funcionales.",
      descartes: {
        a: "La norma no limita necesariamente cada entidad a un solo plan.",
        c: "La coexistencia es posible, no obligatoria en todas las entidades.",
        d: "El artículo 17.5 sí regula esta posibilidad.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Una unidad administrativa en euskera requiere que al menos el 80 % de sus integrantes, incluida la persona responsable, tenga acreditado el perfil correspondiente o superior.",
      descartes: {
        a: "Las funciones se desarrollan primordialmente en euskera, no de forma exclusiva.",
        c: "La opción A introduce una exclusividad que impide aceptar ambas.",
        d: "La opción B coincide con el umbral y las personas computables.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "El diseño se consulta con la representación del personal; si las medidas afectan a condiciones de trabajo, deja de bastar la consulta y procede la negociación.",
      descartes: {
        a: "No siempre se aplica el mismo trámite: las condiciones de trabajo activan la negociación.",
        b: "Cuando afectan a condiciones laborales deben negociarse, no limitarse a una consulta.",
        d: "La representación del personal sí participa en el diseño.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Antes de aprobarse el plan, el departamento competente debe emitir un informe preceptivo.",
      descartes: {
        b: "El informe es preceptivo, pero no vinculante.",
        c: "El plazo de emisión es de dos meses, no de uno.",
        d: "Si transcurre el plazo sin informe, la entidad puede continuar la tramitación.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "El plan abarca todo el período y, si no hay sustituto al finalizar, se prorroga hasta aprobar uno nuevo informando al departamento competente.",
      descartes: {
        a: "La duración general es correcta, junto con la prórroga y el deber de información.",
        b: "La prórroga opera en ausencia de nuevo plan, pero debe comunicarse como señala C.",
        c: "La información al departamento completa las reglas de A y B.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "El departamento competente determina la periodicidad con la que cada entidad evalúa los indicadores de su cuadro de mando.",
      descartes: {
        a: "La teoría se refiere a los indicadores del cuadro de mando, no de forma genérica a todos los indicadores posibles.",
        c: "Los resultados se ponen a disposición para coordinación, no para que el departamento los apruebe.",
        d: "La opción C altera la finalidad del traslado y evita que todas sean correctas.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "La evaluación interna cuantitativa y cualitativa debe realizarse al menos dos veces: a mediados y al final del período.",
      descartes: {
        a: "Una única evaluación no alcanza el mínimo legal.",
        c: "Pueden existir más evaluaciones; la norma dice «al menos» dos momentos.",
        d: "La opción B conserva el mínimo abierto establecido.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "El departamento facilita metodología estadística, fomenta evaluaciones externas para obtener Bikain y puede realizar estudios periódicos; las tres actuaciones forman parte del seguimiento.",
      descartes: {
        a: "La metodología se pone a disposición de las entidades y constituye una de varias funciones.",
        b: "El fomento de evaluaciones externas es correcto, junto con la posibilidad de estudios.",
        c: "Los estudios periódicos también están previstos y se añaden a A y B.",
      },
    },
    {
      preguntaId: 18,
      justificacion: "El plan de gestión es un plan de acción destinado a alcanzar los objetivos del plan estratégico.",
      descartes: {
        b: "Debe aprobarse al menos en dos ocasiones por período, no solo una.",
        c: "Se publica en el portal web de la entidad, no en el diario oficial.",
        d: "Las opciones B y C modifican frecuencia y medio de publicación.",
      },
    },
    {
      preguntaId: 19,
      justificacion: "Los planes pueden ser unitarios o sectoriales, reproducen la estructura estratégica y concretan acciones, responsables y plazos; todas las afirmaciones son compatibles.",
      descartes: {
        a: "Las dos modalidades son correctas, junto con la estructura y el contenido de B y C.",
        b: "La correspondencia estructural existe, pero no excluye las demás reglas.",
        c: "La concreción de acciones y seguimiento es obligatoria y completa A y B.",
      },
    },
    {
      preguntaId: 20,
      justificacion: "La solución C se mantiene: el informe final se pone a disposición de las entidades del sector público vasco y de la ciudadanía.",
      descartes: {
        a: "El informe lo realiza el departamento competente en política lingüística, no el Consejo de Gobierno.",
        b: "La teoría también confirma el envío al Parlamento y a HAKOBA, aunque añade el Consejo de Gobierno como tercer destinatario.",
        d: "La opción A atribuye la elaboración a un órgano incorrecto.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La teoría admite otra opción además de la solución registrada",
        texto: "El artículo 21 respalda la respuesta C y también el contenido de B, aunque B omite uno de los destinatarios del informe. Se conserva C como solución registrada.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-08-normalizacion-linguistica",
  references: referencesFromQuestionRanges([
    { from: 1, to: 13, reference: articleReference(17) },
    { from: 14, reference: articleReference(18) },
    { from: 15, to: 17, reference: articleReference(19) },
    { from: 18, to: 19, reference: articleReference(20) },
    { from: 20, reference: articleReference(21) },
  ]),
});
