import {
  articleReference,
  blockReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-11-2022-empleo-publico-vasco-articulos-172-a-177",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La ley dedica el Título XII al régimen disciplinario. Esa es la ubicación sistemática que solicita la pregunta.",
      descartes: {
        a: "El Título X no es el que la ley identifica como sede del régimen disciplinario.",
        b: "El Título XI regula los derechos, deberes, código de conducta, incompatibilidades y responsabilidades del personal empleado público vasco; el régimen disciplinario comienza en el título siguiente.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El artículo 172.1 incluye en el ámbito del Título XII tanto al personal funcionario como al personal directivo público profesional. Por eso deben considerarse válidas ambas afirmaciones.",
      descartes: {
        a: "El personal funcionario está incluido, pero no es el único colectivo: el precepto menciona también al personal directivo público profesional.",
        b: "El personal directivo público profesional también queda sujeto al título, junto con el personal funcionario.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "El artículo 173.2 ordena suspender la tramitación del procedimiento disciplinario y poner los indicios fundados de responsabilidad penal en conocimiento del Ministerio Fiscal.",
      descartes: {
        b: "La aparición de indicios penales impide continuar la tramitación disciplinaria en ese momento: el precepto exige suspenderla.",
        c: "La norma suspende el procedimiento, no al funcionario, y solo dispone su comunicación al Ministerio Fiscal; no añade una comunicación a la representación del personal.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Según el artículo 173.3, los hechos declarados probados mediante una resolución judicial firme vinculan a la Administración.",
      descartes: {
        b: "Niega expresamente el efecto vinculante que el artículo 173.3 atribuye a los hechos probados judicialmente.",
        c: "El carácter vinculante no depende de que los hechos favorezcan al presunto infractor; basta con que hayan sido declarados probados en una resolución judicial firme.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "El artículo 174 establece la irretroactividad de las disposiciones sancionadoras no favorables y la retroactividad de las favorables. La opción A invierte ambos efectos y es, por ello, la afirmación incorrecta.",
      descartes: {
        b: "La culpabilidad sí figura expresamente entre los principios del régimen disciplinario.",
        c: "La presunción de inocencia también está reconocida, junto con el derecho a utilizar los medios de prueba pertinentes para la defensa.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "El artículo 174 recoge el principio de legalidad y tipicidad y también el de proporcionalidad. Se conserva la opción C como solución registrada porque afirma correctamente que A y B son válidas, aunque el enunciado pide localizar una respuesta incorrecta.",
      descartes: {
        a: "La legalidad y la tipicidad de faltas y sanciones forman parte de los principios enumerados en el artículo 174; esta afirmación no es incorrecta.",
        b: "La proporcionalidad se aplica tanto a la clasificación como a la aplicación de infracciones y sanciones; esta opción también reproduce correctamente la norma.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "El enunciado no ofrece una opción incorrecta",
        texto:
          "La teoría confirma por separado las opciones A y B, de modo que la opción C también es verdadera al declarar correctas ambas respuestas. Ninguna alternativa satisface la instrucción de señalar una respuesta incorrecta. Se mantiene C porque es la solución registrada en el test.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "El artículo 175.2 fija en tres años el plazo de prescripción de las faltas muy graves.",
      descartes: {
        a: "El plazo de un año no corresponde a las faltas muy graves.",
        c: "La ley no establece cinco años para esta categoría; el plazo aplicable es de tres años.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "Las faltas graves prescriben a los dos años, conforme al artículo 175.2.",
      descartes: {
        a: "Un año no es el plazo previsto para las faltas graves.",
        c: "Los tres años corresponden a las faltas muy graves, no a las graves.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "El artículo 175.2 establece que las faltas leves prescriben a los seis meses.",
      descartes: {
        b: "El plazo de un año se aplica a las sanciones impuestas por faltas leves, no a la prescripción de la propia falta leve.",
        c: "Los dos años corresponden a las faltas graves; la falta leve tiene un plazo de seis meses.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "El plazo comienza cuando se comete la falta o, si es continuada, cuando cesa su comisión, según el artículo 175.2.",
      descartes: {
        b: "El cómputo no se aplaza al día siguiente: la ley lo inicia desde que se comete la falta o desde que termina la conducta continuada.",
        c: "El artículo 175 regula expresamente la prescripción tanto de las faltas como de las sanciones.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "Las sanciones impuestas por faltas leves prescriben al año, tal como dispone el artículo 175.3.",
      descartes: {
        b: "El plazo de dos años corresponde a las sanciones por faltas graves.",
        c: "Los seis meses son el plazo de prescripción de las faltas leves, no el de las sanciones ya impuestas por ellas.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "El artículo 175.3 inicia la prescripción de la sanción cuando adquiere firmeza en vía administrativa la resolución sancionadora.",
      descartes: {
        a: "La comisión de los hechos sirve para computar la prescripción de la falta, pero no la de la sanción impuesta posteriormente.",
        c: "Las sanciones sí prescriben y el propio artículo establece sus plazos según la gravedad de la falta.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "El artículo 176.1 exige anotar en el expediente personal las sanciones disciplinarias cuando sean firmes.",
      descartes: {
        b: "La cancelación puede producirse de oficio o a instancia de parte; no depende exclusivamente de una solicitud.",
        c: "Las anotaciones canceladas no pueden computarse a efectos de reincidencia, según el artículo 176.2.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "El artículo 177.2 clasifica las faltas disciplinarias en muy graves, graves y leves.",
      descartes: {
        a: "La clasificación queda incompleta porque omite las faltas muy graves.",
        b: "Esta opción deja fuera las faltas leves, que constituyen la tercera categoría legal.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-09-personal-al-servicio-administraciones-publicas-vascas",
  references: {
    1: blockReference("titulo-xii", "Título XII. Régimen disciplinario"),
    2: articleReference(172),
    3: articleReference(173),
    4: articleReference(173),
    5: articleReference(174),
    6: articleReference(174),
    7: articleReference(175),
    8: articleReference(175),
    9: articleReference(175),
    10: articleReference(175),
    11: articleReference(175),
    12: articleReference(175),
    13: articleReference(176),
    14: articleReference(177),
  },
});
