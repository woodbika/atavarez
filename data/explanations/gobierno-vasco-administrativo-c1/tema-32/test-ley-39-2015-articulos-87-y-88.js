import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-87-y-88",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 87, antes de dictar resolución, el órgano competente para resolver podrá decidir, mediante acuerdo motivado, la realización de las actuaciones complementarias indispensables para resolver el procedimiento. Por eso encaja «Se efectúan antes de dictar resolución».",
      "descartes": {
        "b": "En «Actuaciones complementarias», la alternativa B introduce «Decide su realización el órgano instructor» donde la norma dispone «Se efectúan antes de dictar resolución».",
        "c": "En «Actuaciones complementarias», la alternativa C introduce «Son los informes que preceden inmediatamente a la resolución final del procedimiento» donde la norma dispone «Se efectúan antes de dictar resolución»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 87 es el acuerdo de realización de actuaciones complementarias se notificará a los interesados, concediéndoseles un plazo de siete días para formular las alegaciones que tengan por pertinentes tras la finalización de las mismas. En este supuesto se ajusta a «Concediéndoles un plazo de 7 días para formular alegaciones».",
      "descartes": {
        "a": "Para «El acuerdo de realización de actuaciones complementarias se notificará a los interesados», la alternativa A utiliza «un / 15», pero la previsión aplicable fija «un / 7».",
        "b": "Para «El acuerdo de realización de actuaciones complementarias se notificará a los interesados», la alternativa B utiliza «un / 10», pero la previsión aplicable fija «un / 7»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 87 dispone que el acuerdo de realización de actuaciones complementarias se notificará a los interesados, concediéndoseles un plazo de siete días para formular las alegaciones que tengan por pertinentes tras la finalización de las mismas. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Dichas alegaciones se efectúan», la alternativa A introduce «Antes» donde la norma dispone «Después».",
        "c": "En «Dichas alegaciones se efectúan», la alternativa C introduce «Simultáneamente a» donde la norma dispone «Después de»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 87 establece que las actuaciones complementarias deberán practicarse en un plazo no superior a quince días. Esa previsión conduce a «No superior a 15 días».",
      "descartes": {
        "a": "Para «Las actuaciones complementarias deberán practicarse en un plazo», la alternativa A utiliza «10», pero la previsión aplicable fija «15».",
        "c": "Para «Las actuaciones complementarias deberán practicarse en un plazo», la alternativa C utiliza «20», pero la previsión aplicable fija «15»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 87 recoge tanto «Quedará suspendido hasta la terminación de las actuaciones complementarias» como «Quedará suspendido, en todo caso, por un plazo no superior a 15 días». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Quedará suspendido hasta la terminación de las actuaciones complementarias», pero resulta incompleta porque también debe incluirse «Quedará suspendido, en todo caso, por un plazo no superior a 15 días».",
        "b": "La alternativa B recoge «Quedará suspendido, en todo caso, por un plazo no superior a 15 días», pero resulta incompleta porque también debe incluirse «Quedará suspendido hasta la terminación de las actuaciones complementarias»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 88 recoge las dos previsiones: «Se dictará electrónicamente y garantizará la identidad del órgano competente» y «Garantizará la autenticidad e integridad del documento que se formalice». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Se dictará electrónicamente y garantizará la identidad del órgano competente», pero resulta incompleta porque también debe incluirse «Garantizará la autenticidad e integridad del documento que se formalice».",
        "b": "La alternativa B recoge «Garantizará la autenticidad e integridad del documento que se formalice», pero resulta incompleta porque también debe incluirse «Se dictará electrónicamente y garantizará la identidad del órgano competente»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 88 comprende «Decidirá todas las cuestiones planteadas por los interesados» y «Decidirá cuestiones derivadas del procedimiento». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Decidirá todas las cuestiones planteadas por los interesados», pero resulta incompleta porque también debe incluirse «Decidirá cuestiones derivadas del procedimiento».",
        "b": "La alternativa B recoge «Decidirá cuestiones derivadas del procedimiento», pero resulta incompleta porque también debe incluirse «Decidirá todas las cuestiones planteadas por los interesados»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 88 establece que la resolución que ponga fin al procedimiento decidirá todas las cuestiones planteadas por los interesados y aquellas otras derivadas del mismo. Cuando se trate de cuestiones conexas que no hubieran sido planteadas por los interesados. Esa previsión conduce a «El órgano competente antes de pronunciarse sobre las mismas».",
      "descartes": {
        "a": "La alternativa A vincula «Cuando se trate de cuestiones conexas que no hubieran sido planteadas por los interesados» con «El órgano competente no podrá pronunciarse sobre las mismas»; el artículo 88 lo relaciona con «El órgano competente antes de pronunciarse sobre las mismas».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El órgano competente no podrá pronunciarse sobre las mismas» no expresa la regla que el artículo 88 aplica a «Cuando se trate de cuestiones conexas que no hubieran sido planteadas por los interesados»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 88, la resolución será congruente con las peticiones formuladas por el interesado. Por eso encaja «La resolución será congruente con las peticiones formuladas por el interesado».",
      "descartes": {
        "b": "En «En los procedimientos tramitados a solicitud del interesado», la alternativa B introduce «En ningún caso se puede agravar su situación inicial y la Administración no podrá incoar de oficio un procedimiento que…» donde la norma dispone «La resolución será congruente con las peticiones formuladas por el interesado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «En ningún caso se puede agravar su situación inicial y la Administración no podrá incoar de oficio un…» no expresa la regla que el artículo 88 aplica a «En los procedimientos tramitados a solicitud del interesado»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 88 es expresarán, además, los recursos que contra la misma procedan, órgano administrativo o judicial ante el que hubieran de presentarse y plazo para interponerlos, sin perjuicio de que los interesados puedan ejercitar cualquier otro que estimen oportuno. En este supuesto se ajusta a «Expresarán los recursos contra la misma procedan, órgano administrativo o judicial ante el que hubieran de presentarse y plazo para interponerlos».",
      "descartes": {
        "a": "En «Las resoluciones», la alternativa A introduce «Contendrán la decisión, que será motivada salvo en los casos del artículo 35» donde la norma dispone «Expresarán los recursos contra la misma procedan».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Contendrán la decisión, que será motivada salvo en los casos del artículo 35» no expresa la regla que el artículo 88 aplica a «Las resoluciones»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 88 recoge tanto «Los que vengan en la resolución» como «Los que estime oportunos ejercitar». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Los que vengan en la resolución», pero resulta incompleta porque también debe incluirse «Los que estime oportunos ejercitar».",
        "b": "La alternativa B recoge «Los que estime oportunos ejercitar», pero resulta incompleta porque también debe incluirse «Los que vengan en la resolución»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 88 establece que sin perjuicio de la forma y lugar señalados por el interesado para la práctica de las notificaciones. Esa previsión conduce a «Se dictará electrónicamente en todo caso».",
      "descartes": {
        "a": "En «La resolución del procedimiento», la alternativa A introduce «siempre que la notificación se efectúe por medios electrónicos» donde la norma dispone «en todo caso».",
        "c": "En «La resolución del procedimiento», la alternativa C introduce «Con preferencia, se dictará electrónicamente» donde la norma dispone «Se dictará electrónicamente en todo caso»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 88, en ningún caso podrá la Administración abstenerse de resolver so pretexto de silencio. Por eso encaja «Podrá acordarse la inadmisión de las solicitudes de reconocimiento de derechos no previstos en el ordenamiento jurídico, o manifiestamente carentes de fundamento».",
      "descartes": {
        "a": "La alternativa A vincula «La Administración» con «So pretexto de silencio, oscuridad o insuficiencia de los preceptos legales aplicables al caso podrá abstenerse de resolver»; el artículo 88 lo relaciona con «Podrá acordarse la inadmisión de las solicitudes de reconocimiento de derechos no previstos en el ordenamiento jurídico».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «So pretexto de silencio» no expresa la regla que el artículo 88 aplica a «La Administración»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 88 recoge tanto «La aceptación de informes o dictámenes servirá de motivación a la resolución cuando se incorporen al texto de la misma» como «Cuando la competencia para instruir y resolver un procedimiento no recaiga en un mismo órgano». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «La aceptación de informes o dictámenes servirá de motivación a la resolución cuando se incorporen al texto de la misma», pero resulta incompleta porque también debe incluirse «Cuando la competencia para instruir y resolver un procedimiento no recaiga en un mismo órgano».",
        "b": "La alternativa B recoge «Cuando la competencia para instruir y resolver un procedimiento no recaiga en un mismo órgano», pero resulta incompleta porque también debe incluirse «La aceptación de informes o dictámenes servirá de motivación a la resolución cuando se incorporen al texto de la misma»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 88 dispone que en los procedimientos de carácter sancionador, la propuesta de resolución deberá ser notificada a los interesados en los términos previstos en el artículo siguiente. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «En los procedimientos de carácter sancionador», la alternativa B introduce «a diferencia del» donde la norma dispone «al igual que el».",
        "c": "En «En los procedimientos de carácter sancionador», la alternativa C introduce «no será notificada» donde la norma dispone «será notificada al igual que el acuerdo de iniciación»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(87),
    "2": articleReference(87),
    "3": articleReference(87),
    "4": articleReference(87),
    "5": articleReference(87),
    "6": articleReference(88),
    "7": articleReference(88),
    "8": articleReference(88),
    "9": articleReference(88),
    "10": articleReference(88),
    "11": articleReference(88),
    "12": articleReference(88),
    "13": articleReference(88),
    "14": articleReference(88),
    "15": articleReference(88),
  },
});
