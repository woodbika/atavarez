import {
  articleReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-11-2022-empleo-publico-vasco-articulos-181-a-184",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "El artículo 181 atiende al descrédito para la imagen pública de la Administración, no de la ciudadanía. Por eso la opción B es la formulación incorrecta.",
      descartes: {
        a: "El grado de vulneración de la legalidad sí es uno de los criterios para calificar la falta.",
        c: "También se valora la gravedad de los daños al interés público y a los bienes de la Administración o de la ciudadanía.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El artículo 182 atribuye el despido disciplinario al personal laboral. La opción B lo aplica al personal interino y, por ello, es la incorrecta.",
      descartes: {
        a: "El demérito figura entre los tipos generales de sanción y afecta a la carrera, promoción o movilidad voluntaria.",
        c: "El traslado forzoso, con posible cambio de centro o localidad, también está incluido en la relación legal de sanciones.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "El artículo 183 reserva a las faltas muy graves la suspensión firme de funciones que dura entre dos años y un día y seis años.",
      descartes: {
        b: "Para las faltas graves, la suspensión va de treinta y un días a dos años.",
        c: "En las faltas leves, la suspensión solo puede abarcar de uno a treinta días.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "El apercibimiento, graduado según su efecto sobre la imagen pública de la Administración, es una sanción propia de las faltas leves en el artículo 183.",
      descartes: {
        a: "La relación de sanciones por faltas muy graves no incluye el apercibimiento.",
        b: "Las faltas graves se sancionan mediante suspensión, revocación o extinción temporal, traslado forzoso o demérito; no mediante apercibimiento.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "El traslado forzoso por un máximo de un año es una de las sanciones previstas para las faltas graves en el artículo 183.",
      descartes: {
        a: "En una falta muy grave, el traslado forzoso dura como mínimo un año y un día y como máximo tres años.",
        c: "El artículo no prevé el traslado forzoso entre las sanciones aplicables a faltas leves.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "El artículo 183 permite imponer por una falta grave un demérito con una duración máxima de dos años.",
      descartes: {
        a: "El demérito por falta muy grave puede alcanzar cinco años y presenta una regulación más intensa.",
        c: "Las sanciones leves no incluyen el demérito.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "La pérdida de un nivel de desarrollo profesional ya acreditado se encuentra en el catálogo de sanciones por faltas muy graves del artículo 183.",
      descartes: {
        b: "Las faltas graves pueden llevar aparejado un demérito, pero no la pérdida de un nivel profesional ya acreditado.",
        c: "Ninguna de las sanciones leves afecta al nivel de desarrollo profesional alcanzado.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "La separación del servicio del personal funcionario solo puede imponerse por una falta muy grave, según el artículo 183.",
      descartes: {
        b: "Una falta grave puede suspender funciones o provocar otras sanciones temporales, pero no la separación del servicio.",
        c: "Las faltas leves se sancionan con medidas de alcance limitado y nunca con la separación definitiva.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "El despido disciplinario del personal laboral, con la inhabilitación contractual indicada, corresponde a las faltas muy graves conforme al artículo 183.",
      descartes: {
        b: "Para las faltas graves, la norma contempla la extinción del contrato temporal, pero no el despido disciplinario general descrito en el enunciado.",
        c: "Una falta leve no permite extinguir la relación laboral mediante despido disciplinario.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "La obligación de seguir formación sobre ética pública o sobre la materia de la infracción es una sanción prevista para faltas leves en el artículo 183.",
      descartes: {
        a: "El catálogo específico de sanciones por faltas muy graves no incluye esta obligación formativa.",
        b: "Tampoco aparece entre las sanciones asignadas a las faltas graves.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "El artículo 183 asigna a las faltas leves la suspensión de funciones y retribuciones —o de empleo y sueldo— durante un período de uno a treinta días.",
      descartes: {
        a: "La suspensión por falta muy grave comienza en dos años y un día y puede alcanzar seis años.",
        b: "La suspensión por falta grave se sitúa entre treinta y un días y dos años.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "El traslado forzoso de entre un año y un día y tres años, con posible cambio de centro o localidad, es una sanción por falta muy grave según el artículo 183.",
      descartes: {
        b: "En las faltas graves, el traslado forzoso tiene una duración máxima de un año.",
        c: "El traslado forzoso no forma parte de las sanciones aplicables a las faltas leves.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "La revocación del nombramiento interino o la extinción del contrato temporal, unida a la baja de bolsas entre dos años y un día y seis años, corresponde a una falta muy grave en el artículo 183.",
      descartes: {
        b: "Para las faltas graves, la exclusión temporal se vincula a un período de treinta y un días a dos años, no al intervalo indicado.",
        c: "Las faltas leves no permiten revocar el nombramiento ni extinguir el contrato temporal por esta vía.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "La suspensión firme de funciones de treinta y un días a dos años es la franja prevista para las faltas graves en el artículo 183.",
      descartes: {
        a: "La suspensión por falta muy grave empieza en dos años y un día.",
        c: "La sanción por falta leve no puede superar los treinta días.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "El demérito que puede suspender efectos económicos o afectar a la promoción y movilidad durante un máximo de cinco años se impone por faltas muy graves, conforme al artículo 183.",
      descartes: {
        b: "El demérito por falta grave tiene un máximo de dos años y no responde al alcance temporal descrito.",
        c: "Las faltas leves no llevan aparejado demérito.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "El artículo 183 permite, ante una falta grave, revocar el nombramiento interino o extinguir el contrato temporal y suspender el acceso durante el mismo período de treinta y un días a dos años.",
      descartes: {
        a: "En las faltas muy graves, la baja de bolsas se extiende de dos años y un día a seis años.",
        c: "Una falta leve no permite revocar el nombramiento ni extinguir el contrato temporal.",
      },
    },
    {
      preguntaId: 17,
      justificacion:
        "Tras un traslado forzoso con cambio de centro orgánico, el artículo 183 impide volver a obtener destino en el centro de origen durante un período de uno a tres años.",
      descartes: {
        a: "La prohibición no puede limitarse a seis meses: el mínimo legal es de un año.",
        c: "El plazo máximo es de tres años, por lo que no puede extenderse hasta cinco.",
      },
    },
    {
      preguntaId: 18,
      justificacion:
        "El período que impide obtener nuevo destino en el centro de origen se cuenta desde el momento en que se efectúa el traslado, según el artículo 183.",
      descartes: {
        a: "La comisión de la falta puede ser anterior y no marca el inicio de esta limitación ligada al traslado.",
        c: "La incoación del expediente tampoco inicia el cómputo; la norma espera a que el traslado se haga efectivo.",
      },
    },
    {
      preguntaId: 19,
      justificacion:
        "El artículo 184 valora tanto la gravedad de los daños al interés público como el grado de participación en la acción u omisión. Por eso son válidas A y B.",
      descartes: {
        a: "La gravedad del daño es un criterio correcto, pero no agota la pregunta porque también lo es el grado de participación.",
        b: "La participación también se valora, aunque no es el único criterio correcto de los dos propuestos.",
      },
    },
    {
      preguntaId: 20,
      justificacion:
        "Hay reiteración cuando ya existe una sanción firme por otra falta, sea de gravedad mayor, igual o menor. Así la define el artículo 184.",
      descartes: {
        b: "La reiteración no exige que la infracción anterior tenga la misma gravedad; puede ser mayor o menor.",
        c: "La sanción previa por una falta de la misma naturaleza define la reincidencia, no la reiteración.",
      },
    },
    {
      preguntaId: 21,
      justificacion:
        "El artículo 184 denomina reincidencia a la existencia de una sanción firme anterior por una falta de la misma naturaleza.",
      descartes: {
        a: "La reiteración admite una falta anterior de distinta naturaleza y de cualquier grado de gravedad.",
        b: "La ley no utiliza «insistencia» como categoría para graduar la sanción.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-09-personal-al-servicio-administraciones-publicas-vascas",
  references: {
    1: articleReference(181),
    2: articleReference(182),
    3: articleReference(183),
    4: articleReference(183),
    5: articleReference(183),
    6: articleReference(183),
    7: articleReference(183),
    8: articleReference(183),
    9: articleReference(183),
    10: articleReference(183),
    11: articleReference(183),
    12: articleReference(183),
    13: articleReference(183),
    14: articleReference(183),
    15: articleReference(183),
    16: articleReference(183),
    17: articleReference(183),
    18: articleReference(183),
    19: articleReference(184),
    20: articleReference(184),
    21: articleReference(184),
  },
});
