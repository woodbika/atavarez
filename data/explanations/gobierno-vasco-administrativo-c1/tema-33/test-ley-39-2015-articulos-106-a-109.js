import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-106-a-109",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El artículo 106 permite revisar de oficio, en cualquier momento, los actos administrativos nulos cuando concurren las causas del artículo 47.1. La facultad corresponde a las Administraciones Públicas.",
      "descartes": {
        "b": "En este supuesto, la alternativa B introduce «La revisión de oficio de los actos nulos de pleno derecho solamente se puede hacer por iniciativa de la administración» donde la norma dispone «Las Administraciones públicas pueden declarar de oficio la nulidad de los actos administrativos en cualquier momento».",
        "c": "La alternativa C vincula este supuesto con «Para la declaración de nulidad al igual que para la inadmisión de solicitudes de revisión se requiere dictamen del Consejo de Estado o del…»; el artículo 106 lo relaciona con «Las Administraciones públicas pueden declarar de oficio la nulidad de los actos administrativos en cualquier momento»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 106 es las Administraciones Públicas; en cualquier momento; declararán de oficio la nulidad de los actos administrativos que hayan puesto fin a la vía administrativa o que no hayan sido recurridos en plazo. En este supuesto se ajusta a «El que no agota la vía administrativa».",
      "descartes": {
        "a": "La alternativa A vincula «No se puede revisar de oficio el siguiente acto» con «El que agota la vía administrativa»; el artículo 106 lo relaciona con «El que no agota la vía administrativa».",
        "b": "En «No se puede revisar de oficio el siguiente acto», la alternativa B introduce «ha sido recurrido dentro de plazo» donde la norma dispone «agota la vía administrativa»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 106 recoge las dos previsiones: «Los actos administrativos» y «Las disposiciones administrativas». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Los actos administrativos», pero resulta incompleta porque también debe incluirse «Las disposiciones administrativas».",
        "b": "La alternativa B recoge «Las disposiciones administrativas», pero resulta incompleta porque también debe incluirse «Los actos administrativos»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 106 establece que las Administraciones Públicas; por iniciativa propia o a solicitud de interesado; declararán de oficio la nulidad de los actos administrativos que hayan puesto fin a la vía administrativa o que no hayan sido recurridos en plazo. Esa previsión conduce a «Por iniciativa propia».",
      "descartes": {
        "b": "En «La revisión de oficio de las disposiciones administrativas puede hacerse», la alternativa B introduce «A solicitud del interesado» donde la norma dispone «Por iniciativa propia».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «A solicitud del interesado» no expresa la regla que el artículo 106 aplica a «La revisión de oficio de las disposiciones administrativas puede hacerse»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 106 recoge tanto «Por carecer de fundamento» como «Por no alegar ninguna causa de nulidad de pleno derecho». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Por carecer de fundamento», pero resulta incompleta porque también debe incluirse «Por no alegar ninguna causa de nulidad de pleno derecho».",
        "b": "La alternativa B recoge «Por no alegar ninguna causa de nulidad de pleno derecho», pero resulta incompleta porque también debe incluirse «Por carecer de fundamento»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 106 recoge las dos previsiones: «Cuando se trate de una disposición administrativa» y «Cuando se trate de un acto administrativo». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando se trate de una disposición administrativa», pero resulta incompleta porque también debe incluirse «Cuando se trate de un acto administrativo».",
        "b": "La alternativa B recoge «Cuando se trate de un acto administrativo», pero resulta incompleta porque también debe incluirse «Cuando se trate de una disposición administrativa»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 106 dispone que al declarar la nulidad de una disposición o acto; tratándose de una disposición; subsistan los actos firmes dictados en aplicación de la misma. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «Si se declara nula una disposición administrativa» con «Se mantienen todos los actos que se hayan dictado por la aplicación de dicha disposición»; el artículo 106 lo relaciona con «Se mantienen todos los actos firmes que se hayan dictado por la aplicación de dicha disposición».",
        "c": "En «Si se declara nula una disposición administrativa», la alternativa C introduce «quitan todos los actos» donde la norma dispone «mantienen todos los actos firmes»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 106 establece que cuando el procedimiento se hubiera iniciado de oficio, el transcurso del plazo de seis meses desde su inicio sin dictarse resolución producirá la caducidad del mismo. Esa previsión conduce a «6 meses».",
      "descartes": {
        "a": "Para «El procedimiento de revisión de oficio de un acto nulo de pleno derecho se caduca si transcurren sin que haya…», la alternativa A utiliza «3», pero la previsión aplicable fija «6».",
        "c": "Para «El procedimiento de revisión de oficio de un acto nulo de pleno derecho se caduca si transcurren sin que haya…», la alternativa C utiliza «9», pero la previsión aplicable fija «6»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 106, cuando el procedimiento se hubiera iniciado de oficio, el transcurso del plazo de seis meses desde su inicio sin dictarse resolución producirá la caducidad del mismo. Por eso encaja «De oficio».",
      "descartes": {
        "b": "En «Dicha caducidad se produce si el procedimiento se ha iniciado», la alternativa B introduce «A solicitud del interesado» donde la norma dispone «De oficio».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «A solicitud del interesado» no expresa la regla que el artículo 106 aplica a «Dicha caducidad se produce si el procedimiento se ha iniciado»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 106 es si el procedimiento se hubiera iniciado a solicitud de interesado, se podrá entender la misma desestimada por silencio administrativo. En este supuesto se ajusta a «A solicitud del interesado».",
      "descartes": {
        "a": "En «Se produce la desestimación por silencio administrativo cuando el procedimiento se haya iniciado», la alternativa A introduce «De oficio» donde la norma dispone «A solicitud del interesado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «De oficio» no expresa la regla que el artículo 106 aplica a «Se produce la desestimación por silencio administrativo cuando el procedimiento se haya iniciado»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 106 dispone que 6 meses. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «Para ello tienen que transcurrir», la alternativa A utiliza «3», pero la previsión aplicable fija «6».",
        "c": "Para «Para ello tienen que transcurrir», la alternativa C utiliza «9», pero la previsión aplicable fija «6»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 106 establece que las Administraciones Públicas; al declarar la nulidad de una disposición o acto; si se dan las circunstancias previstas en los artículos 32.2 y 34.1 de la Ley de Régimen Jurídico del Sector Público sin perjuicio de que. Esa previsión conduce a «Favorable y anulable».",
      "descartes": {
        "a": "En «Para poder declarar un acto lesivo para el interés público tiene que ser», la alternativa A introduce «nulo de pleno derecho» donde la norma dispone «anulable».",
        "c": "En «Para poder declarar un acto lesivo para el interés público tiene que ser», la alternativa C introduce «De gravamen» donde la norma dispone «Favorable»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 107, su posterior impugnación ante la jurisdicción contencioso-administrativa. Por eso encaja «Su posterior impugnación ante la jurisdicción contencioso-administrativa».",
      "descartes": {
        "a": "En «Dicha declaración se efectúa para», la alternativa A introduce «el órgano superior al que lo dicto» donde la norma dispone «la jurisdicción contencioso-administrativa».",
        "c": "En «Dicha declaración se efectúa para», la alternativa C introduce «revocación por parte de la administración» donde la norma dispone «impugnación ante la jurisdicción contencioso-administrativa»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 107 es la declaración de lesividad no podrá adoptarse una vez transcurridos cuatro años desde que se dictó el acto administrativo y exigirá la previa audiencia de cuantos aparezcan como interesados en el mismo, en los términos establecidos por el artículo 82. En este supuesto se ajusta a «4 años desde que se dictó».",
      "descartes": {
        "b": "Para «No se puede hacer la declaración de lesividad si han transcurrido», la alternativa B utiliza «6», pero la previsión aplicable fija «4».",
        "c": "Para «No se puede hacer la declaración de lesividad si han transcurrido», la alternativa C utiliza «3», pero la previsión aplicable fija «4»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 107 dispone que transcurrido el plazo de seis meses desde la iniciación del procedimiento sin que se hubiera declarado la lesividad, se producirá la caducidad del mismo. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «El plazo máximo para resolver el procedimiento de declaración de lesividad es», la alternativa A utiliza «3», pero la previsión aplicable fija «6».",
        "c": "Para «El plazo máximo para resolver el procedimiento de declaración de lesividad es», la alternativa C utiliza «4», pero la previsión aplicable fija «6»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 107 establece que transcurrido el plazo de seis meses desde la iniciación del procedimiento sin que se hubiera declarado la lesividad, se producirá la caducidad del mismo. Esa previsión conduce a «La caducidad».",
      "descartes": {
        "b": "En «Transcurridos los cuales se producirá», la alternativa B introduce «desestimación por silencio» donde la norma dispone «caducidad».",
        "c": "En «Transcurridos los cuales se producirá», la alternativa C introduce «Depende de quien haya iniciado el procedimiento» donde la norma dispone «La caducidad»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 107, si el acto proviniera de la Administración General del Estado o de las Comunidades Autónomas, la declaración de lesividad se adoptará por el órgano de cada Administración competente en la materia. Por eso encaja «El órgano que se señale como competente».",
      "descartes": {
        "a": "En «Si el acto proviniera de la Administración General del Estado la declaración de lesividad la efectúa», la alternativa A introduce «Ministro competente por razón de la materia» donde la norma dispone «órgano que se señale como competente».",
        "b": "En «Si el acto proviniera de la Administración General del Estado la declaración de lesividad la efectúa», la alternativa B introduce «Consejo de Ministros» donde la norma dispone «órgano que se señale como competente»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 107 es si el acto proviniera de la Administración General del Estado o de las Comunidades Autónomas, la declaración de lesividad se adoptará por el órgano de cada Administración competente en la materia. En este supuesto se ajusta a «El órgano que se señale como competente».",
      "descartes": {
        "a": "En «Si el acto proviniera de la Administración autonómica la declaración de lesividad la efectúa», la alternativa A introduce «Consejero competente por razón de la materia» donde la norma dispone «órgano que se señale como competente».",
        "b": "En «Si el acto proviniera de la Administración autonómica la declaración de lesividad la efectúa», la alternativa B introduce «Consejo de Gobierno» donde la norma dispone «órgano que se señale como competente»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La regulación del artículo 107 comprende «El pleno» y «El órgano colegiado superior de la entidad local». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «El pleno», pero resulta incompleta porque también debe incluirse «El órgano colegiado superior de la entidad local».",
        "b": "La alternativa B recoge «El órgano colegiado superior de la entidad local», pero resulta incompleta porque también debe incluirse «El pleno»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 108 establece que iniciado el procedimiento de revisión de oficio al que se refieren los artículos 106 y 107; el órgano competente para declarar la nulidad o lesividad; podrá suspender la ejecución del acto. Esa previsión conduce a «El órgano competente para resolver dicho procedimiento».",
      "descartes": {
        "a": "En «Iniciado el procedimiento de revisión de oficio puede acordar la suspensión», la alternativa A introduce «que dicto el acto» donde la norma dispone «competente para resolver dicho procedimiento».",
        "b": "En «Iniciado el procedimiento de revisión de oficio puede acordar la suspensión», la alternativa B introduce «superior al que dicto el acto» donde la norma dispone «competente para resolver dicho procedimiento»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 108, iniciado el procedimiento de revisión de oficio al que se refieren los artículos 106 y 107; podrá suspender la ejecución del acto; cuando ésta pudiera causar perjuicios de imposible o difícil reparación. Por eso encaja «Cuando la ejecución del acto pueda suponer un daño de difícil o imposible reparación».",
      "descartes": {
        "a": "En «Cuando», la alternativa A introduce «sea un caso de nulidad de pleno derecho» donde la norma dispone «la ejecución del acto pueda suponer un daño de difícil o imposible reparación».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Cuando sea un caso de nulidad de pleno derecho» no expresa la regla que el artículo 108 aplica a «Cuando»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 109 es las Administraciones Públicas podrán revocar; mientras no haya transcurrido el plazo de prescripción; sus actos de gravamen o desfavorables. En este supuesto se ajusta a «Actos de gravamen».",
      "descartes": {
        "b": "En «Las Administraciones públicas podrán revocar mientras no hayan prescrito», la alternativa B introduce «favorables» donde la norma dispone «de gravamen».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Actos favorables» no expresa la regla que el artículo 109 aplica a «Las Administraciones públicas podrán revocar mientras no hayan prescrito»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 109 recoge tanto «No constituya dispensa no permitida por el ordenamiento jurídico» como «No atente contra el principio de igualdad, el interés público o el ordenamiento jurídico». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «No constituya dispensa no permitida por el ordenamiento jurídico», pero resulta incompleta porque también debe incluirse «No atente contra el principio de igualdad, el interés público o el ordenamiento jurídico».",
        "b": "La alternativa B recoge «No atente contra el principio de igualdad, el interés público o el ordenamiento jurídico», pero resulta incompleta porque también debe incluirse «No constituya dispensa no permitida por el ordenamiento jurídico»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 109 recoge las dos previsiones: «En cualquier momento» y «De oficio o a instancia del interesado». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «En cualquier momento», pero resulta incompleta porque también debe incluirse «De oficio o a instancia del interesado».",
        "b": "La alternativa B recoge «De oficio o a instancia del interesado», pero resulta incompleta porque también debe incluirse «En cualquier momento»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "El artículo 112 permite recurrir las resoluciones y determinados actos de trámite. En este contexto, los actos definitivos pueden ser objeto de alzada o de reposición según pongan o no fin a la vía administrativa.",
      "descartes": {
        "b": "En «Se puede interponer el recurso de alzada y el de reposición», la alternativa B introduce «de trámite» donde la norma dispone «definitivos».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Contra todos los actos de trámite» no expresa la regla que el artículo 112 aplica a «Se puede interponer el recurso de alzada y el de reposición»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "El artículo 112 remite a las causas de nulidad y anulabilidad de los artículos 47 y 48 para fundamentar los recursos administrativos. Las dos clases de vicio pueden servir de base al recurso.",
      "descartes": {
        "a": "La alternativa A recoge «Nulidad de pleno derecho», pero resulta incompleta porque también debe incluirse «Anulabilidad».",
        "b": "La alternativa B recoge «Anulabilidad», pero resulta incompleta porque también debe incluirse «Nulidad de pleno derecho»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El artículo 112 recoge las dos previsiones: «El recurso de alzada» y «El recurso de reposición». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «El recurso de alzada», pero resulta incompleta porque también debe incluirse «El recurso de reposición».",
        "b": "La alternativa B recoge «El recurso de reposición», pero resulta incompleta porque también debe incluirse «El recurso de alzada»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-33-revision-actos-recursos-administrativos",
  references: {
    "1": articleReference(106),
    "2": articleReference(106),
    "3": articleReference(106),
    "4": articleReference(106),
    "5": articleReference(106),
    "6": articleReference(106),
    "7": articleReference(106),
    "8": articleReference(106),
    "9": articleReference(106),
    "10": articleReference(106),
    "11": articleReference(106),
    "12": articleReference(106),
    "13": articleReference(107),
    "14": articleReference(107),
    "15": articleReference(107),
    "16": articleReference(107),
    "17": articleReference(107),
    "18": articleReference(107),
    "19": articleReference(107),
    "20": articleReference(108),
    "21": articleReference(108),
    "22": articleReference(109),
    "23": articleReference(109),
    "24": articleReference(109),
    "25": articleReference(112),
    "26": articleReference(112),
    "27": articleReference(112),
  },
});
