import {
  articleReference,
  defineExplanationSet,
  referencesFromQuestionRanges,
} from "../../explanation-schema.js";

const explicacionesArticulos53a55 = {
  testId: "test-constitucion-capitulo-iv-y-v",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La clave está en que el artículo 53.1 establece que los derechos y libertades reconocidos en el Capítulo II vinculan a todos los poderes públicos.",
      descartes: {
        b: "Los principios del Capítulo III tienen el régimen específico del artículo 53.3, no la vinculación formulada en el apartado 1.",
        c: "Los derechos y libertades del Capítulo II sí vinculan a todos los poderes públicos, por lo que existe una respuesta válida.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "Aquí conviene recordar que el artículo 53.2 permite tutelar ante los tribunales ordinarios, mediante un procedimiento basado en preferencia y sumariedad, el artículo 14 y la Sección 1.ª del Capítulo II.",
      descartes: {
        a: "Los principios del Capítulo III sólo pueden alegarse de acuerdo con sus leyes de desarrollo.",
        b: "La tutela preferente y sumaria no alcanza a todo el Capítulo II, sino al artículo 14 y a su Sección 1.ª.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "El recurso de amparo protege el mismo ámbito indicado en la pregunta anterior: artículo 14 y Sección 1.ª del Capítulo II, además de la objeción de conciencia del artículo 30.",
      descartes: {
        b: "No todos los derechos del Capítulo II pueden recurrirse en amparo.",
        c: "El ámbito protegido coincide con el indicado para el procedimiento anterior, por lo que sí existe una respuesta válida.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Según el artículo 53.3, los principios del Capítulo III sólo pueden alegarse ante la jurisdicción ordinaria conforme a lo que dispongan las leyes que los desarrollen.",
      descartes: {
        a: "La Constitución no excluye por completo su alegación judicial.",
        c: "Tampoco permite alegarlos incondicionalmente en todo caso; exige atender a las leyes de desarrollo.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "En este caso, el artículo 55 sólo contempla la suspensión general de determinados derechos cuando se declara el estado de excepción o de sitio, no durante el estado de alarma.",
      descartes: {
        a: "La libertad individual figura entre los derechos susceptibles de suspensión en excepción o sitio, pero no existe suspensión constitucional de derechos en el estado de alarma.",
        b: "El derecho a la educación ni siquiera aparece en la relación de derechos suspendibles del artículo 55.1.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "La clave está en que el artículo 55.1 exceptúa el artículo 17.3 de la suspensión durante el estado de excepción; al no extender esa excepción al estado de sitio, puede suspenderse en este último.",
      descartes: {
        a: "El estado de alarma no habilita la suspensión y, además, el artículo 17.3 se preserva en el estado de excepción.",
        b: "La regla es la contraria: no se suspende en excepción, pero sí puede suspenderse en sitio.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "La suspensión individual del artículo 55.2 sólo alcanza al plazo de detención del artículo 17.2 y a la inviolabilidad domiciliaria y secreto de comunicaciones del artículo 18.2 y 3, no a la circulación.",
      descartes: {
        b: "La inviolabilidad del domicilio sí puede suspenderse individualmente con las garantías del artículo 55.2.",
        c: "El secreto de las comunicaciones también está expresamente incluido en esa posible suspensión individual.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "El derecho de huelga no está entre los derechos que el artículo 55.2 permite suspender de forma individual en investigaciones de terrorismo.",
      descartes: {
        a: "El secreto de las comunicaciones sí figura entre los derechos susceptibles de suspensión individual.",
        c: "El plazo máximo de detención del artículo 17.2 también está incluido en el artículo 55.2.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "La libertad religiosa y de culto del artículo 16 no aparece entre los derechos suspendibles enumerados por el artículo 55.1.",
      descartes: {
        a: "La garantía del artículo 20.5 sobre secuestro de publicaciones sí puede suspenderse en estado de excepción o sitio.",
        b: "El derecho de huelga del artículo 28.2 también está en la relación de derechos suspendibles.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Aquí conviene recordar que el artículo 55.2 reserva a una ley orgánica la determinación de la forma y los casos de suspensión individual vinculada a investigaciones sobre bandas armadas o terrorismo.",
      descartes: {
        b: "La Constitución exige específicamente ley orgánica, por lo que una ley ordinaria no basta.",
        c: "La materia no puede regularse mediante decreto-ley en sustitución de la ley orgánica exigida.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "La suspensión individual exige la necesaria intervención judicial y el adecuado control parlamentario.",
      descartes: {
        a: "La opción intercambia las funciones: la intervención debe ser judicial y el control, parlamentario.",
        c: "La intervención judicial y el control parlamentario están correctamente asignados, por lo que sí existe una respuesta válida.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "En este caso, el artículo 55.2 establece responsabilidad penal cuando se utilicen injustificada o abusivamente esas facultades, por vulnerar derechos y libertades.",
      descartes: {
        b: "El precepto constitucional califica expresamente la responsabilidad como penal, no civil.",
        c: "Tampoco la define como mera responsabilidad administrativa.",
      },
    },
  ],
};

export default defineExplanationSet(explicacionesArticulos53a55, {
  theoryResourceId: "tema-01-constitucion-espanola",
  references: referencesFromQuestionRanges([
    { from: 1, to: 4, reference: articleReference(53) },
    { from: 5, to: 12, reference: articleReference(55) },
  ]),
});
