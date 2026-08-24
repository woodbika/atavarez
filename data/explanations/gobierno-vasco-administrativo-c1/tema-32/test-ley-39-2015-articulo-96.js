import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulo-96",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 96, cuando razones de interés público o la falta de complejidad del procedimiento así lo aconsejen, las Administraciones Públicas podrán acordar, de oficio o a solicitud del interesado, la tramitación simplificada del procedimiento. Por eso encaja «Ambas respuestas son posibles».",
      "descartes": {
        "a": "En «Las Administraciones Públicas podrán acordar la tramitación simplificada del procedimiento», la alternativa A introduce «Por razones de interés público» donde la norma dispone «Ambas respuestas son posibles».",
        "b": "En «Las Administraciones Públicas podrán acordar la tramitación simplificada del procedimiento», la alternativa B introduce «Por falta de complejidad del procedimiento» donde la norma dispone «Ambas respuestas son posibles»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 96 recoge tanto «De oficio» como «A solicitud del interesado». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «De oficio», pero resulta incompleta porque también debe incluirse «A solicitud del interesado».",
        "b": "La alternativa B recoge «A solicitud del interesado», pero resulta incompleta porque también debe incluirse «De oficio»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 96 dispone que en cualquier momento del procedimiento anterior a su resolución, el órgano competente para su tramitación podrá acordar continuar con arreglo a la tramitación ordinaria. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «El órgano competente para su tramitación podrá acordar continuar con arreglo a la tramitación ordinaria», la alternativa B introduce «la propuesta» donde la norma dispone «su».",
        "c": "En «El órgano competente para su tramitación podrá acordar continuar con arreglo a la tramitación ordinaria», la alternativa C introduce «al trámite de audiencia» donde la norma dispone «a su resolución»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 96 establece que cuando la Administración acuerde de oficio la tramitación simplificada del procedimiento deberá notificarlo a los interesados. Si alguno de ellos manifestara su oposición expresa, la Administración deberá seguir la tramitación ordinaria. Esa previsión conduce a «Si alguno de ellos manifestará su oposición expresa, la Administración deberá seguir la tramitación ordinaria».",
      "descartes": {
        "a": "En «Cuando la Administración acuerde de oficio la tramitación simplificada del procedimiento», la alternativa A introduce «Puede notificarlo a los interesados» donde la norma dispone «Si alguno de ellos manifestará su oposición expresa, la Administración deberá seguir la tramitación ordinaria».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Puede notificarlo a los interesados» no expresa la regla que el artículo 96 aplica a «Cuando la Administración acuerde de oficio la tramitación simplificada del procedimiento»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 96, los interesados podrán solicitar la tramitación simplificada del procedimiento. Si el órgano competente para la tramitación aprecia que no concurre alguna de las razones previstas en el apartado 1. Por eso encaja «La Administración podrá desestimar la solicitud si aprecia que no concurre ninguna de las circunstancias que justifican esta tramitación».",
      "descartes": {
        "a": "En «Los interesados podrán solicitar la tramitación simplificada del procedimiento», la alternativa A introduce «no podrá desestimar la solicitud salvo por razones graves de interés público» donde la norma dispone «podrá desestimar la solicitud si aprecia que no concurre ninguna de las circunstancias que justifican esta tramitación».",
        "c": "En «Los interesados podrán solicitar la tramitación simplificada del procedimiento», la alternativa C introduce «no podrá desestimar la solicitud» donde la norma dispone «podrá desestimar la solicitud si aprecia que no concurre ninguna de las circunstancias que justifican esta tramitación»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 96 es los interesados podrán solicitar la tramitación simplificada del procedimiento. En este supuesto se ajusta a «5 días».",
      "descartes": {
        "a": "Para «Los interesados podrán solicitar la tramitación simplificada y la Administración tendrá que resolver en el…», la alternativa A utiliza «6», pero la previsión aplicable fija «5».",
        "b": "Para «Los interesados podrán solicitar la tramitación simplificada y la Administración tendrá que resolver en el…», la alternativa B utiliza «10», pero la previsión aplicable fija «5»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 96 dispone que si el órgano competente para la tramitación aprecia que no concurre alguna de las razones previstas en el apartado 1; podrá desestimar dicha solicitud; sin que exista posibilidad de recurso por parte del interesado. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «En el que caso, que hubiese una desestimación de la solicitud», la alternativa B introduce «Podrá interponer el recurso que proceda» donde la norma dispone «No habrá posibilidad de recurso».",
        "c": "En «En el que caso, que hubiese una desestimación de la solicitud», la alternativa C introduce «El único recurso que podrá interponer es el de reposición» donde la norma dispone «No habrá posibilidad de recurso»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 96 establece que transcurrido el mencionado plazo de cinco días se entenderá desestimada la solicitud. Esa previsión conduce a «Se entenderá desestimada la solicitud».",
      "descartes": {
        "a": "En «Transcurrido el plazo de la pregunta 6», la alternativa A introduce «producirá la caducidad» donde la norma dispone «entenderá desestimada la solicitud».",
        "b": "En «Transcurrido el plazo de la pregunta 6», la alternativa B introduce «estimada» donde la norma dispone «desestimada»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 96, en el caso de procedimientos en materia de responsabilidad patrimonial de las Administraciones Públicas. Por eso encaja «Una vez iniciado el procedimiento administrativo».",
      "descartes": {
        "b": "En «En el caso de los procedimientos en materia de responsabilidad patrimonial de las Administraciones Públicas…», la alternativa B introduce «Antes de iniciar» donde la norma dispone «Una vez iniciado».",
        "c": "La alternativa C vincula «En el caso de los procedimientos en materia de responsabilidad patrimonial de las Administraciones Públicas…» con «Una vez iniciado el procedimiento administrativo si es a solicitud del interesado, y antes de iniciar el procedimiento si es de oficio»; el artículo 96 lo relaciona con «Una vez iniciado el procedimiento administrativo»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 96 es en el caso de procedimientos en materia de responsabilidad patrimonial de las Administraciones Públicas. En este supuesto se ajusta a «El órgano competente para su tramitación».",
      "descartes": {
        "b": "En «En el caso de los procedimientos en materia de responsabilidad patrimonial de las Administraciones podrá…», la alternativa B introduce «resolución» donde la norma dispone «tramitación».",
        "c": "En «En el caso de los procedimientos en materia de responsabilidad patrimonial de las Administraciones podrá…», la alternativa C introduce «La ley no señala nada al respecto» donde la norma dispone «El órgano competente para su tramitación»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 96 recoge tanto «Supondrá la suspensión del procedimiento general y la iniciación de un procedimiento simplificado» como «así como la valoración del daño y el cálculo de la cuantía de la indemnización». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Supondrá la suspensión del procedimiento general y la iniciación de un procedimiento simplificado», pero resulta incompleta porque también debe incluirse «Se adoptará si se considera inequívoca la relación de causalidad entre el funcionamiento del servicio público y la lesión».",
        "b": "La alternativa B recoge «Se adoptará si se considera inequívoca la relación de causalidad entre el funcionamiento del servicio público y la lesión», pero resulta incompleta porque también debe incluirse «Supondrá la suspensión del procedimiento general y la iniciación de un procedimiento simplificado»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 96 establece que en el caso de procedimientos de naturaleza sancionadora; se podrá adoptar la tramitación simplificada del procedimiento cuando el órgano competente para iniciar el procedimiento considere que; de acuerdo con lo previsto en su normativa reguladora. Esa previsión conduce a «El órgano competente para iniciar el procedimiento».",
      "descartes": {
        "b": "En «En el caso de procedimientos de naturaleza sancionadora», la alternativa B introduce «instruir» donde la norma dispone «iniciar».",
        "c": "En «En el caso de procedimientos de naturaleza sancionadora», la alternativa C introduce «resolver» donde la norma dispone «iniciar»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El artículo 96 permite continuar por tramitación simplificada cuando existen elementos suficientes para calificar la infracción como leve. Las infracciones graves o muy graves no cumplen esa condición.",
      "descartes": {
        "b": "La alternativa B vincula «Decisión que adoptará si existen elementos de juicio suficientes para calificar la infracción como» con «Leve y grave»; el artículo 96 lo relaciona con «Leve».",
        "c": "En «Decisión que adoptará si existen elementos de juicio suficientes para calificar la infracción como», la alternativa C introduce «Grave y Muy grave» donde la norma dispone «Leve»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 96 es no cabe oposición expresa por parte del interesado. En este supuesto se ajusta a «No cabe oposición expresa por parte del interesado».",
      "descartes": {
        "a": "En «En este caso», la alternativa A introduce «La oposición por parte del interesado deberá ser por escrito» donde la norma dispone «No cabe oposición expresa por parte del interesado».",
        "c": "En «En este caso», la alternativa C introduce «La oposición por parte del interesado sólo podrá producirse si la infracción se está calificando como grave» donde la norma dispone «No cabe oposición expresa por parte del interesado»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 96 dispone que 30 días. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «Salvo que reste menos para su tramitación ordinaria», la alternativa A utiliza «15», pero la previsión aplicable fija «30».",
        "c": "Para «Salvo que reste menos para su tramitación ordinaria», la alternativa C utiliza «60», pero la previsión aplicable fija «30»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 96 establece que el día siguiente al que se notifique al interesado el acuerdo de tramitación simplificada. Esa previsión conduce a «El día siguiente al que se notifique al interesado el acuerdo de tramitación simplificada».",
      "descartes": {
        "a": "En «Dicho plazo se contará desde», la alternativa A introduce «que se acuerde la» donde la norma dispone «siguiente al que se notifique al interesado el acuerdo de».",
        "b": "En «Dicho plazo se contará desde», la alternativa B introduce «de la notificación» donde la norma dispone «siguiente al que se notifique»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 96, tramitación simplificada del procedimiento administrativo común. Por eso encaja «Ambas respuestas son posibles».",
      "descartes": {
        "a": "En «En la tramitación simplificada el inicio del procedimiento», la alternativa A introduce «Puede ser de oficio» donde la norma dispone «Ambas respuestas son posibles».",
        "b": "En «En la tramitación simplificada el inicio del procedimiento», la alternativa B introduce «Puede ser a solicitud del interesado» donde la norma dispone «Ambas respuestas son posibles»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 96 es alegaciones formuladas al inicio del procedimiento durante el plazo de cinco días. En este supuesto se ajusta a «Las alegaciones serán formuladas al inicio del procedimiento durante el plazo de 5 días».",
      "descartes": {
        "a": "En «En la tramitación simplificada», la alternativa A introduce «No cabrá subsanación de la solicitud presentada» donde la norma dispone «Las alegaciones serán formuladas al inicio del procedimiento durante el plazo de 5 días».",
        "c": "En «En la tramitación simplificada», la alternativa C introduce «No habrá trámite de audiencia» donde la norma dispone «Las alegaciones serán formuladas al inicio del procedimiento durante el plazo de 5 días»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 96 dispone que informe del Consejo General del Poder Judicial, cuando éste sea preceptivo. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En la tramitación simplificada», la alternativa A introduce «Informes, cuando sean preceptivos» donde la norma dispone «Informe del Consejo General del Poder Judicial, cuando éste sea preceptivo».",
        "c": "En «En la tramitación simplificada», la alternativa C introduce «Dictamen del Consejo de Estado, u órgano equivalente, en todo caso» donde la norma dispone «Informe del Consejo General del Poder Judicial, cuando éste sea preceptivo»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 96 establece que desde que se solicite el Dictamen al Consejo de Estado, u órgano equivalente, hasta que éste sea emitido, se producirá la suspensión automática del plazo para resolver. Esa previsión conduce a «Producirá la suspensión automática del plazo para resolver».",
      "descartes": {
        "a": "La alternativa A vincula «En la tramitación simplificada» con «No producirá la suspensión automática del plazo para resolver»; el artículo 96 lo relaciona con «Producirá la suspensión automática del plazo para resolver».",
        "c": "En «En la tramitación simplificada», la alternativa C introduce «La ley no señala nada al respecto» donde la norma dispone «Producirá la suspensión automática del plazo para resolver»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 96, el Dictamen podrá ser emitido en el plazo de quince días si así lo solicita el órgano competente. Por eso encaja «Podrá ser emitido en el plazo de 15 días si así lo solicita el órgano competente».",
      "descartes": {
        "a": "En «Dicho dictamen», la alternativa A introduce «Deberá ser emitido en el plazo de 15 días» donde la norma dispone «Podrá ser emitido en el plazo de 15 días si así lo solicita el órgano competente».",
        "c": "Para «Dicho dictamen», la alternativa C utiliza «30», pero la previsión aplicable fija «15»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 96 es en todo caso, en el expediente que se remita al Consejo de Estado u órgano consultivo equivalente, se incluirá una propuesta de resolución. En este supuesto se ajusta a «En todo caso, en el expediente que se remita al Consejo de Estado u órgano consultivo equivalente, se incluirá una propuesta de resolución».",
      "descartes": {
        "b": "La alternativa B vincula este supuesto con «Cuando el dictamen sea contrario al fondo de la propuesta de resolución»; el artículo 96 lo relaciona con «En todo caso, en el expediente que se remita al Consejo de Estado u órgano consultivo equivalente, se incluirá una propuesta de resolución».",
        "c": "La alternativa C vincula este supuesto con «incluido el dictamen del Consejo de Estado u órgano consultivo equivalente»; el artículo 96 lo relaciona con «En todo caso, en el expediente que se remita al Consejo de Estado u órgano consultivo equivalente, se incluirá una propuesta de resolución»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(96),
    "2": articleReference(96),
    "3": articleReference(96),
    "4": articleReference(96),
    "5": articleReference(96),
    "6": articleReference(96),
    "7": articleReference(96),
    "8": articleReference(96),
    "9": articleReference(96),
    "10": articleReference(96),
    "11": articleReference(96),
    "12": articleReference(96),
    "13": articleReference(96),
    "14": articleReference(96),
    "15": articleReference(96),
    "16": articleReference(96),
    "17": articleReference(96),
    "18": articleReference(96),
    "19": articleReference(96),
    "20": articleReference(96),
    "21": articleReference(96),
    "22": articleReference(96),
  },
});
