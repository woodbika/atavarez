import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-102-a-104",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La libre designación permite al órgano competente apreciar discrecionalmente la idoneidad y las competencias respecto de los requisitos del puesto. Discrecional significa elegir dentro del marco legal, no actuar sin razones.",
      descartes: {
        b: "Una apreciación reglada dejaría predeterminado el resultado y eliminaría el margen de elección propio de este sistema.",
        c: "La arbitrariedad está prohibida: incluso una decisión discrecional debe apoyarse en competencia, procedimiento y finalidad legítima.",
        d: "Discrecionalidad y arbitrariedad no son equivalentes, por lo que A y C no pueden ser correctas a la vez.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Solo pueden cubrirse así los puestos que la relación de puestos de trabajo haya reservado expresamente a la libre designación.",
      descartes: {
        b: "Los puestos reservados a personal directivo público profesional quedan excluidos de esta modalidad funcionarial.",
        c: "El personal eventual tiene su propio régimen y sus puestos no se proveen por libre designación funcionarial.",
        d: "Las opciones B y C describen reservas incompatibles con el artículo 102.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Los puestos dedicados a proteger autoridades pueden reservarse a libre designación por la especial confianza que requieren.",
      descartes: {
        a: "La previsión se refiere a subdirecciones y delegaciones territoriales de la Administración autonómica, no a todas las administraciones públicas vascas.",
        b: "Han de ser puestos de especial responsabilidad y carácter no directivo; la alternativa los califica como directivos.",
        c: "La ley menciona secretarías de altos cargos, no los propios puestos de alto cargo, que tienen un régimen distinto.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El órgano técnico propone una lista de hasta cinco personas que acrediten idoneidad y competencias; el órgano competente elige discrecionalmente dentro de ella.",
      descartes: {
        a: "Pueden proponerse menos de cinco si no hay más candidaturas idóneas; no se exige una cifra exacta.",
        c: "Cinco es el máximo y no el mínimo de integrantes de la relación.",
        d: "La ley sí establece un límite numérico expreso.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Puede reservarse el puesto de origen obtenido por concurso o tras el acceso, los planes fijan las condiciones y la reserva es obligatoria para subdirecciones y delegaciones territoriales autonómicas. Las tres afirmaciones describen el régimen completo.",
      descartes: {
        a: "La posibilidad general de reserva es cierta, pero tiene condiciones y un supuesto específico que también recoge la pregunta.",
        b: "Los planes concretan las condiciones, sin agotar las reglas materiales de la reserva.",
        c: "La reserva para esos puestos autonómicos es correcta y se integra con las previsiones generales A y B.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Para consolidar grado o avanzar en la carrera se toma como referencia el puesto efectivamente ocupado por libre designación.",
      descartes: {
        a: "El puesto anterior obtenido por concurso puede quedar reservado, pero no sustituye al desempeñado para este cómputo.",
        b: "El primer destino tampoco es la referencia mientras se ejerce otro puesto por libre designación.",
        d: "La regla viene directamente del artículo 102.6 y no se deja a la relación de puestos.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El cese en un puesto de libre designación puede acordarse discrecionalmente, dentro de la competencia y finalidad legales.",
      descartes: {
        b: "No se supedita a una causa cerrada y reglada como sucede en otros sistemas de provisión.",
        c: "La posibilidad de elegir el momento del cese no autoriza una decisión arbitraria o ajena al interés público.",
        d: "No puede equipararse la discrecionalidad válida con la arbitrariedad prohibida.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El órgano competente en empleo público de cada administración designa a las personas del órgano técnico de provisión.",
      descartes: {
        b: "La composición debe ser imparcial, no «parcial», y el equilibrio entre mujeres y hombres se exige salvo imposibilidad debidamente justificada.",
        c: "La segunda afirmación contiene un principio opuesto al legal, así que no puede combinarse con la primera.",
        d: "La competencia descrita en A aparece expresamente en el artículo 104.1.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Al menos una persona del órgano técnico debe acreditar formación o experiencia en selección de empleo público.",
      descartes: {
        b: "El mínimo legal no se eleva a dos integrantes.",
        c: "Tampoco se exige que alcance a la mitad del órgano.",
        d: "La especialización general del órgano no significa que todas las personas necesiten esa experiencia selectiva concreta.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Solo de forma excepcional puede acudirse a asesoramiento externo para obtener un juicio experto sobre las peculiaridades del puesto.",
      descartes: {
        b: "El personal asesor informa, pero no dispone ni de voz ni de voto en las deliberaciones previas.",
        c: "La opción B le atribuye voz y contradice el límite de su intervención.",
        d: "La excepcionalidad figura de manera expresa en el artículo 104.4.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 6 }, (_, index) => [index + 1, articleReference(102)]),
    [7, articleReference(103)],
    ...Array.from({ length: 3 }, (_, index) => [index + 8, articleReference(104)]),
  ]),
});
