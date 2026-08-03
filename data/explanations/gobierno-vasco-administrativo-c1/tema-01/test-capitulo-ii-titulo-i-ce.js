import {
  articleReference,
  defineExplanationSet,
  referencesFromQuestionRanges,
} from "../../explanation-schema.js";

const explicacionesArticulos30a38 = {
  testId: "test-capitulo-ii-titulo-i-ce",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La clave está en que el artículo 30.2 dispone que la ley fijará las obligaciones militares de los españoles y regulará las causas de exención del servicio militar obligatorio.",
      descartes: {
        a: "La objeción de conciencia se menciona expresamente, pero el artículo permite que la ley regule otras causas de exención.",
        c: "La Constitución no define el servicio militar como potestativo; encomienda a la ley regular las obligaciones militares.",
        d: "El propio artículo 30.2 prevé que pueda imponerse una prestación social sustitutoria.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "Aquí conviene recordar que el artículo 30.2 permite sustituir el servicio militar por una prestación social sustitutoria en los supuestos regulados por la ley, entre ellos la objeción de conciencia.",
      descartes: {
        b: "La objeción de conciencia es precisamente una causa que puede eximir del servicio militar obligatorio.",
        c: "La Constitución no establece un servicio militar reducido en tres meses para los objetores.",
        d: "La exención del servicio militar no significa necesariamente quedar libre de toda prestación, pues puede imponerse la sustitutoria.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "En este caso, el artículo 30.1 declara que los españoles tienen el derecho y el deber de defender a España.",
      descartes: {
        b: "La defensa de España no se configura únicamente como derecho.",
        c: "Tampoco se configura únicamente como deber: reúne ambas dimensiones.",
        d: "La Constitución no hace depender su naturaleza de la edad, el sexo o la comunidad de nacimiento.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "La clave está en que el artículo 31.1 exige un sistema tributario justo inspirado en igualdad y progresividad y prohíbe que tenga alcance confiscatorio.",
      descartes: {
        a: "El principio constitucional es la progresividad, no la regresividad.",
        c: "Además de sustituir progresividad por regresividad, admite un alcance confiscatorio expresamente prohibido.",
        d: "Aunque menciona igualdad y progresividad, contradice la prohibición absoluta de alcance confiscatorio.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "Aquí conviene recordar que el artículo 31.3 establece una reserva de ley para las prestaciones personales o patrimoniales de carácter público.",
      descartes: {
        b: "Una orden ministerial no satisface por sí sola la reserva de ley constitucional.",
        c: "Un decreto del Gobierno tampoco puede sustituir la ley exigida por el artículo 31.3.",
        d: "Un acuerdo plenario municipal debe apoyarse en la ley y no reemplaza la reserva legal.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "En este caso, el artículo 32.2 encarga a la ley regular las formas de matrimonio, capacidad, derechos y deberes, y las causas y efectos de separación y disolución.",
      descartes: {
        a: "La Constitución enumera las materias, pero remite su regulación a la ley.",
        b: "El artículo 32.2 no exige específicamente una ley orgánica.",
        d: "La regulación corresponde a la ley, por lo que sí existe una respuesta válida.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "La clave está en que el artículo 33 reconoce el derecho a la propiedad privada y a la herencia dentro de la Sección 2.ª del Capítulo II.",
      descartes: {
        a: "Son derechos constitucionales, pero no pertenecen a la Sección 1.ª de derechos fundamentales y libertades públicas.",
        c: "No se ubican en el Capítulo III de principios rectores, sino en el Capítulo II.",
        d: "La Constitución los reconoce expresamente como derechos.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "Aquí conviene recordar que el artículo 33.3 exige causa justificada de utilidad pública o interés social, indemnización y conformidad con las leyes para privar de bienes y derechos.",
      descartes: {
        a: "La Constitución no utiliza como causa expropiatoria genérica las «razones de Estado».",
        b: "La causa puede ser utilidad pública o interés social, no utilidad privada.",
        d: "Los poderes públicos están sujetos a causa justificada, indemnización y procedimiento legal; no actúan sin limitaciones.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "Una fundación se configura por la afectación duradera de un patrimonio a la realización de fines de interés general.",
      descartes: {
        a: "La finalidad constitucionalmente reconocida debe ser de interés general, no meramente privada.",
        b: "Una fundación no es una Administración corporativa.",
        c: "La asociación se basa en una agrupación de personas; la fundación se articula en torno a un patrimonio afectado a un fin.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "En este caso, el artículo 34 reconoce expresamente el derecho de fundación para fines de interés general.",
      descartes: {
        b: "El derecho de asociación se reconoce en el artículo 22, pero el artículo 34 vincula específicamente los fines de interés general con la fundación.",
        c: "La referencia concreta es el derecho de fundación, no otro derecho distinto.",
        d: "La Constitución sí reconoce la fundación para fines de interés general, por lo que existe una respuesta válida.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "La clave está en que el artículo 35.1 establece conjuntamente el deber de trabajar y el derecho al trabajo.",
      descartes: {
        a: "La Constitución no formula dos derechos, sino un deber de trabajar y un derecho al trabajo.",
        b: "Tampoco establece dos deberes.",
        c: "La expresión constitucional es «deber de trabajar», no «deber del trabajo».",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "Aquí conviene recordar que el artículo 35.1 reconoce el derecho a la libre elección de profesión u oficio y a la promoción a través del trabajo.",
      descartes: {
        a: "La formulación constitucional reconoce el derecho al trabajo, no el «derecho de trabajar» empleado por la opción.",
        c: "El artículo prohíbe la discriminación por razón de sexo, pero no añade en esta cláusula la nacionalidad.",
        d: "El estatuto de los trabajadores debe regularse por ley, no mediante real decreto.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "En este caso, el artículo 36 remite a la ley las peculiaridades de los colegios profesionales y el ejercicio de profesiones tituladas, y exige estructura y funcionamiento democráticos.",
      descartes: {
        a: "La regulación legal de las peculiaridades es correcta, pero no es la única afirmación válida.",
        b: "La ley regula las profesiones tituladas, junto con las demás reglas indicadas.",
        c: "La exigencia democrática también es correcta, por lo que procede la respuesta conjunta.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "La Constitución exige estructura interna y funcionamiento democráticos a partidos políticos, sindicatos, asociaciones empresariales y colegios profesionales.",
      descartes: {
        a: "El artículo 6 impone esa exigencia a los partidos, pero no son los únicos incluidos en las opciones.",
        b: "El artículo 7 la impone a sindicatos y asociaciones empresariales, junto con los demás supuestos.",
        c: "El artículo 36 hace lo propio con los colegios profesionales, por lo que las tres respuestas son válidas.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "La clave está en que el artículo 37.1 garantiza expresamente la fuerza vinculante de los convenios colectivos.",
      descartes: {
        a: "La negociación colectiva se produce entre representantes de trabajadores y empresarios, no entre dos representaciones de trabajadores.",
        c: "No son correctas ambas: una de ellas sustituye a los empresarios por una segunda representación de trabajadores.",
        d: "La fuerza vinculante de los convenios sí está garantizada constitucionalmente.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "Aquí conviene recordar que el artículo 37.2 reconoce a trabajadores y empresarios el derecho a adoptar medidas de conflicto colectivo.",
      descartes: {
        a: "Los trabajadores son titulares, pero comparten este derecho con los empresarios.",
        b: "Los empresarios también son titulares, aunque no de forma exclusiva.",
        d: "La Constitución reconoce expresamente el derecho a ambos grupos.",
      },
    },
    {
      preguntaId: 17,
      justificacion:
        "En este caso, el artículo 38 reconoce la libertad de empresa en el marco de la economía de mercado.",
      descartes: {
        a: "La libertad de empresa aparece reconocida expresamente en el artículo 38.",
        b: "La planificación puede modular la actuación económica, pero el marco expresamente definido es la economía de mercado.",
        d: "La Constitución utiliza «economía de mercado», no «economía capitalista».",
      },
    },
  ],
};

export default defineExplanationSet(explicacionesArticulos30a38, {
  theoryResourceId: "tema-01-constitucion-espanola",
  references: referencesFromQuestionRanges([
    { from: 1, to: 3, reference: articleReference(30) },
    { from: 4, to: 5, reference: articleReference(31) },
    { from: 6, reference: articleReference(32) },
    { from: 7, to: 8, reference: articleReference(33) },
    { from: 9, to: 10, reference: articleReference(34) },
    { from: 11, to: 12, reference: articleReference(35) },
    { from: 13, to: 14, reference: articleReference(36) },
    { from: 15, to: 16, reference: articleReference(37) },
    { from: 17, reference: articleReference(38) },
  ]),
});
