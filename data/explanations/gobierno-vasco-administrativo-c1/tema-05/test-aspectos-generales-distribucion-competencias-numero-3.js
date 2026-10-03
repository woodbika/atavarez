import {
  blockReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-aspectos-generales-distribucion-competencias-numero-3",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La Ley de Instituciones Locales clasifica las competencias en propias, transferidas y delegadas. La opción D reúne las tres categorías sin omitir ninguna.",
      descartes: {
        a: "Las competencias propias son una categoría esencial, pero la clasificación no termina en ellas.",
        b: "Las competencias transferidas forman parte de la relación junto con las propias y las delegadas.",
        c: "Las competencias delegadas completan la clasificación, aunque no pueden aislarse de las otras dos.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "Las competencias locales pueden establecerse tanto por ley como por norma foral. La respuesta conjunta refleja las dos fuentes habilitadas.",
      descartes: {
        a: "La ley puede atribuir competencias, pero la regulación admite también que lo haga una norma foral.",
        b: "La norma foral es una fuente válida, sin excluir la atribución mediante una ley.",
        d: "Las dos vías aparecen expresamente en el artículo 14, por lo que sí existen respuestas correctas.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "El autogobierno municipal se garantiza mediante competencias propias; las transferidas o delegadas tienen carácter excepcional. Esa prioridad corresponde exactamente a la opción A.",
      descartes: {
        b: "Invierte la regla al convertir en ordinarias las competencias transferidas y delegadas y relegar las propias.",
        c: "Las competencias transferidas no comparten la posición ordinaria de las propias; también se prevén excepcionalmente.",
        d: "La teoría formula de manera expresa la preferencia por competencias propias, de modo que existe una respuesta válida.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Una entidad local puede desarrollar otras actividades de interés local si no duplica servicios y no compromete la sostenibilidad de toda su hacienda. Deben cumplirse las dos condiciones.",
      descartes: {
        a: "Evitar la duplicidad es necesario, pero no basta si la actividad pone en riesgo la sostenibilidad financiera.",
        b: "La estabilidad de la hacienda también es imprescindible, junto con la ausencia de duplicidad.",
        d: "La ley permite expresamente actividades distintas de las competencias propias, transferidas o delegadas bajo esos límites.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "La atribución de competencias propias se rige por suficiencia financiera, proximidad, subsidiariedad y, cuando corresponda, diferenciación. La opción D integra todos los principios.",
      descartes: {
        a: "La suficiencia financiera es obligatoria, pero debe combinarse con los demás principios de atribución.",
        b: "La proximidad a la ciudadanía orienta la decisión, aunque no actúa de forma aislada.",
        c: "La subsidiariedad y la posible diferenciación completan una lista que incluye además financiación y proximidad.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "Las facultades locales pueden ser normativas, de ordenación, planificación, programación, fomento, gestión o ejecución. Las tres opciones parciales pertenecen a la enumeración legal.",
      descartes: {
        a: "Las funciones normativas o de ordenación están previstas, pero no son las únicas posibles.",
        b: "La planificación y la programación también se admiten junto con funciones normativas y ejecutivas.",
        c: "El fomento, la gestión y la ejecución completan la lista, sin desplazar las facultades anteriores.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-05-gobierno-vasco",
  referenceForQuestion: () =>
    blockReference(
      "competencias-entidades-locales",
      "Competencias de las entidades locales",
    ),
});
