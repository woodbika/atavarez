import { blockReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-prevencion-riesgos-laborales-pantallas-visualizacion-datos-numero-1",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La teoría considera inequívocamente usuaria de PVD a la persona que supera 4 horas diarias o 20 horas semanales de trabajo efectivo con estos equipos.",
      descartes: {
        a: "Superar 2 horas diarias o 10 semanales abre la franja intermedia, pero no basta por sí solo para la consideración inequívoca.",
        c: "El uso esporádico no reúne la habitualidad ni la duración relevante exigidas.",
        d: "La condición depende del tiempo y las características de uso de la pantalla, no de pertenecer al personal informático.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El Real Decreto 488/1997, de 14 de abril, concreta las disposiciones mínimas de seguridad y salud del trabajo con equipos que incluyen PVD.",
      descartes: {
        a: "La Ley 31/1995 establece el marco general preventivo, pero no es la norma específica sobre PVD solicitada.",
        b: "El Real Decreto 39/1997 aprueba el Reglamento de los Servicios de Prevención; su objeto no son específicamente las PVD.",
        d: "La Guía Técnica desarrolla criterios de aplicación, pero no sustituye al Real Decreto que establece las disposiciones mínimas.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "En la franja de 2 a 4 horas diarias o de 10 a 20 semanales, la Guía exige cumplir al menos 5 de sus 7 requisitos para considerar a la persona usuaria de PVD.",
      descartes: {
        a: "Tres requisitos quedan por debajo del mínimo de cinco indicado en la teoría.",
        b: "Cuatro requisitos todavía no alcanzan el umbral aplicable.",
        d: "No es necesario reunir los siete: basta con cumplir al menos cinco.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "El Real Decreto atribuye al empresariado la adopción de las medidas necesarias para evitar o reducir al mínimo los riesgos derivados del uso de PVD.",
      descartes: {
        b: "El comité participa en prevención, pero la obligación general de adoptar las medidas no recae sobre él.",
        c: "El fabricante responde del equipo en su ámbito, no de la evaluación y organización preventiva del puesto concreto.",
        d: "La persona trabajadora debe cooperar, pero no asume individualmente la responsabilidad empresarial.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "Las pausas deben introducirse antes de que aparezca la fatiga; la prevención pierde eficacia si se espera a que el cansancio ya se haya manifestado.",
      descartes: {
        a: "La teoría recomienda pausas cortas y frecuentes, no largas y escasas.",
        c: "El tiempo de pausa no debe compensarse aumentando después el ritmo de trabajo.",
        d: "Siempre que sea posible, la pausa debe hacerse lejos de la pantalla para permitir descanso visual, muscular y mental.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "Como orientación general, la teoría recomienda pausas de 10 a 15 minutos por cada 90 minutos de trabajo con pantalla.",
      descartes: {
        a: "Cinco minutos cada tres horas espacian demasiado el descanso respecto de la pauta indicada.",
        c: "Una única pausa larga no ofrece la frecuencia preventiva recomendada.",
        d: "Veinte minutos cada cuatro horas tampoco coincide con la pauta de descansos más breves y frecuentes.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "Cuando la tarea exige gran atención continuada, la recomendación se intensifica hasta al menos 10 minutos de pausa por cada hora de actividad.",
      descartes: {
        b: "Quince minutos cada dos horas deja intervalos más largos que la pauta prevista para tareas de gran atención.",
        c: "Una pausa al final de la jornada no previene la fatiga acumulada durante la actividad.",
        d: "Una silla adecuada no elimina la necesidad de descanso visual y mental.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "La evaluación debe revisarse cuando haya cambios significativos en el puesto o se detecten daños para la salud, entre otros supuestos preventivos.",
      descartes: {
        a: "La revisión no depende exclusivamente de un requerimiento de la Inspección de Trabajo.",
        c: "La teoría no establece una periodicidad rígida de cinco años para todos los puestos.",
        d: "Un traslado de sede puede ser relevante, pero no es el único cambio que obliga a revisar la evaluación.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "La vigilancia de la salud contempla examen previo, examen específico periódico y examen a demanda de la persona trabajadora; no incluye una prueba psicotécnica de conducción.",
      descartes: {
        a: "El examen previo al inicio del trabajo con PVD sí forma parte de los tres tipos previstos.",
        b: "El reconocimiento específico periódico está expresamente incluido.",
        c: "También se contempla el examen solicitado por la propia persona trabajadora.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Cuando pueden existir riesgos especialmente significativos o pérdidas graves, la Guía exige una evaluación más detallada que el test ordinario de oficina.",
      descartes: {
        a: "El test básico puede ser suficiente para oficinas habituales, pero no para actividades de especial relevancia o peligro.",
        c: "La especial gravedad refuerza la evaluación preventiva; no excluye la aplicación de la normativa.",
        d: "Un seguro privado no sustituye la obligación de evaluar y controlar los riesgos laborales.",
      },
    },
  ],
};

const references = {
  1: blockReference("2-definiciones", "Definiciones y consideración de persona usuaria"),
  2: blockReference("1-presentacion", "Presentación y marco normativo"),
  3: blockReference("2-definiciones", "Definiciones y consideración de persona usuaria"),
  4: blockReference(
    "3-responsabilidades-del-empresariado-la-evaluacion-de-riesgos",
    "Responsabilidad empresarial y evaluación de riesgos",
  ),
  5: blockReference(
    "4-medidas-correctoras-tecnicas-u-organizativas",
    "Medidas correctoras y organización de las pausas",
  ),
  6: blockReference(
    "4-medidas-correctoras-tecnicas-u-organizativas",
    "Medidas correctoras y organización de las pausas",
  ),
  7: blockReference(
    "4-medidas-correctoras-tecnicas-u-organizativas",
    "Medidas correctoras y organización de las pausas",
  ),
  8: blockReference(
    "3-responsabilidades-del-empresariado-la-evaluacion-de-riesgos",
    "Revisión de la evaluación de riesgos",
  ),
  9: blockReference("5-vigilancia-de-la-salud", "Vigilancia de la salud"),
  10: blockReference(
    "3-responsabilidades-del-empresariado-la-evaluacion-de-riesgos",
    "Metodología de la evaluación de riesgos",
  ),
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-12-gobierno-vasco",
  references,
});
