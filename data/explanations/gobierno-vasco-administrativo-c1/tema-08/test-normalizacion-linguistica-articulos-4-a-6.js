import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-normalizacion-linguistica-articulos-4-a-6",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El artículo 4 fija como objetivo que el euskera sea lengua de servicio y de trabajo de uso normal y general en las actividades del sector público vasco.",
      descartes: {
        b: "El castellano mantiene su oficialidad, pero el objetivo de normalización descrito se dirige al euskera.",
        c: "La norma pretende consolidar específicamente el uso normal del euskera, no formular el objetivo de igual modo para ambas lenguas.",
        d: "La opción A coincide con el objetivo legal.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El principio de no discriminación impide diferenciar a una persona por la lengua oficial que utilice o quiera utilizar, tal como recoge la opción C.",
      descartes: {
        a: "La teoría ordena promover la mejora continua, no garantizarla en los términos absolutos de esta opción.",
        b: "La formación se facilita para perfiles superiores a los del puesto, no únicamente para perfiles iguales.",
        d: "Solo la opción C reproduce sin alterar uno de los principios rectores.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Usar racionalmente los recursos mediante planificación y evaluación caracteriza el principio de eficacia y eficiencia.",
      descartes: {
        b: "La autoorganización se refiere a la gestión de la política lingüística por cada entidad.",
        c: "La acción positiva elimina obstáculos y desventajas para el uso del euskera.",
        d: "La proporcionalidad exige idoneidad, necesidad y equilibrio de las medidas.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Eliminar obstáculos, distinciones o restricciones injustificadas contra el uso del euskera define el principio de acción positiva.",
      descartes: {
        a: "La eficacia y eficiencia ordenan el empleo racional de los recursos, no esta acción correctora.",
        b: "La autoorganización distribuye la responsabilidad de gestión entre las entidades.",
        d: "La proporcionalidad evalúa si una medida es adecuada, necesaria y equilibrada.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La participación mediante órganos propios y la responsabilidad de cada entidad sobre la gestión lingüística expresan el principio de autoorganización.",
      descartes: {
        a: "La eficacia y eficiencia se centran en planificación, evaluación y uso racional de medios.",
        c: "La acción positiva atiende a la eliminación de obstáculos para el euskera.",
        d: "La proporcionalidad controla la intensidad y equilibrio de las medidas adoptadas.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La idoneidad, la inexistencia de alternativas menos lesivas y el balance favorable entre ventajas y perjuicios integran el principio de proporcionalidad.",
      descartes: {
        a: "La eficacia y eficiencia no contienen este juicio de necesidad y ponderación.",
        b: "La autoorganización trata de quién gobierna y gestiona la política lingüística.",
        c: "La acción positiva describe medidas de fomento y eliminación de obstáculos, no el test de proporcionalidad.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Las medidas de fomento del euskera orientadas a la igualdad real no se consideran discriminatorias para las personas castellanohablantes.",
      descartes: {
        b: "El artículo 4 declara expresamente que estas medidas no constituyen discriminación.",
        c: "La norma sí regula de forma expresa el efecto no discriminatorio de las medidas de fomento.",
        d: "La opción A reproduce la previsión legal aplicable.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La normalización es una política transversal; cada entidad debe aprobar criterios de uso, plan estratégico y planes de gestión, dentro de períodos de cinco años.",
      descartes: {
        a: "El carácter estratégico y transversal es correcto, pero no recoge las herramientas ni la duración del período.",
        b: "Las tres herramientas son obligatorias, junto con la regla temporal indicada en la opción C.",
        c: "El período de cinco años es correcto, aunque forma parte de un marco de planificación más amplio.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "La planificación alcanza a todo el personal y se concreta según la red relacional de cada puesto y los ejes de lengua de servicio y de trabajo.",
      descartes: {
        a: "La afectación a todo el personal es cierta, pero la teoría añade cómo se adapta a cada puesto.",
        b: "La red relacional y los dos ejes concretan la planificación sin eliminar su alcance general sobre toda la plantilla.",
        d: "Los dos enunciados proceden de los apartados 1 y 2 del artículo 6.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El artículo 6.3 obliga a implementar formación básica para la atención en euskera y los protocolos y criterios de uso necesarios.",
      descartes: {
        a: "La lengua de trabajo abarca relaciones internas y con otras entidades, pero esta definición no es la medida concreta preguntada.",
        c: "El respeto de los derechos lingüísticos obliga también a quien no tenga vencida la fecha de preceptividad.",
        d: "La teoría exige una capacidad comunicativa mínima y permite derivar la atención; no afirma que toda persona deba dominar directamente ambas lenguas.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-08-normalizacion-linguistica",
  references: referencesFromQuestionRanges([
    { from: 1, to: 7, reference: articleReference(4) },
    { from: 8, reference: articleReference(5) },
    { from: 9, to: 10, reference: articleReference(6) },
  ]),
});
