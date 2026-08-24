import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-silencio-administrativo-articulos-24-y-25",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 24, en los casos de desestimación por silencio administrativo, la resolución expresa posterior al vencimiento del plazo se adoptará por la Administración sin vinculación alguna al sentido del silencio. Por eso encaja «En todo caso silencio administrativo».",
      "descartes": {
        "b": "En «Cuando se inicia un procedimiento a instancia de parte», la alternativa B introduce «caducidad» donde la norma dispone «silencio administrativo».",
        "c": "En «Cuando se inicia un procedimiento a instancia de parte», la alternativa C introduce «Silencio administrativo o caducidad dependiendo de los casos» donde la norma dispone «En todo caso silencio administrativo»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 24 es en los casos de desestimación por silencio administrativo, la resolución expresa posterior al vencimiento del plazo se adoptará por la Administración sin vinculación alguna al sentido del silencio. En este supuesto se ajusta a «No excluye la obligación de resolución expresa».",
      "descartes": {
        "a": "La alternativa A vincula «El silencio administrativo: artículo 24» con «Excluye la obligación de resolución expresa»; el artículo 24 lo relaciona con «No excluye la obligación de resolución expresa».",
        "c": "En «El silencio administrativo: artículo 24», la alternativa C introduce «Depende de si el interesado quiere esa resolución posterior o no» donde la norma dispone «No excluye la obligación de resolución expresa»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 24 recoge las dos previsiones: «Que una norma con rango de ley señale otra cosa» y «Que una norma de la Unión Europea señale otra cosa». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Que una norma con rango de ley señale otra cosa», pero resulta incompleta porque también debe incluirse «Que una norma de la Unión Europea señale otra cosa».",
        "b": "La alternativa B recoge «Que una norma de la Unión Europea señale otra cosa», pero resulta incompleta porque también debe incluirse «Que una norma con rango de ley señale otra cosa»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 24 establece que en los procedimientos iniciados a solicitud del interesado. Esa previsión conduce a «Desestimación por silencio».",
      "descartes": {
        "b": "En «Se ejerce el derecho de petición y no se resuelve en el plazo máximo. ¿Cuál sería la consecuencia? artículo 24», la alternativa B introduce «Estimación» donde la norma dispone «Desestimación».",
        "c": "En «Se ejerce el derecho de petición y no se resuelve en el plazo máximo. ¿Cuál sería la consecuencia? artículo 24», la alternativa C introduce «Caducidad» donde la norma dispone «Desestimación por silencio»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 24, en los procedimientos iniciados a solicitud del interesado. Por eso encaja «Desestimación por silencio».",
      "descartes": {
        "b": "En «Se deposita una solicitud a través de la cual se transfiere al solicitante una facultad relativa al dominio…», la alternativa B introduce «Estimación» donde la norma dispone «Desestimación».",
        "c": "En «Se deposita una solicitud a través de la cual se transfiere al solicitante una facultad relativa al dominio…», la alternativa C introduce «Caducidad» donde la norma dispone «Desestimación por silencio»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 24 es en los procedimientos iniciados a solicitud del interesado. En este supuesto se ajusta a «Desestimación por silencio».",
      "descartes": {
        "b": "En «Se deposita una solicitud a través de la cual se transfiere a un tercero una facultad sobre servicio público.…», la alternativa B introduce «Estimación» donde la norma dispone «Desestimación».",
        "c": "En «Se deposita una solicitud a través de la cual se transfiere a un tercero una facultad sobre servicio público.…», la alternativa C introduce «Caducidad» donde la norma dispone «Desestimación por silencio»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 24 establece como regla la desestimación por silencio cuando no se resuelve un recurso en plazo. La estimación solo opera en la excepción prevista para determinados recursos de alzada.",
      "descartes": {
        "b": "En «Si un recurso no se resuelve en el plazo máximo. ¿Cuál sería la consecuencia? artículo 24», la alternativa B introduce «Estimación» donde la norma dispone «Desestimación».",
        "c": "En «Si un recurso no se resuelve en el plazo máximo. ¿Cuál sería la consecuencia? artículo 24», la alternativa C introduce «Caducidad» donde la norma dispone «Desestimación por silencio»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 24 establece que en los procedimientos iniciados a solicitud del interesado. Esa previsión conduce a «Recurso de alzada».",
      "descartes": {
        "b": "En «¿Qué recurso puede ser una excepción a la regla general del silencio en materia de procedimiento de…», la alternativa B introduce «reposición» donde la norma dispone «alzada».",
        "c": "En «¿Qué recurso puede ser una excepción a la regla general del silencio en materia de procedimiento de…», la alternativa C introduce «revisión» donde la norma dispone «alzada»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 24, en los casos de desestimación por silencio administrativo, la resolución expresa posterior al vencimiento del plazo se adoptará por la Administración sin vinculación alguna al sentido del silencio. Por eso encaja «Una desestimación por silencio, en algunos casos».",
      "descartes": {
        "b": "En «Pero para ello se requiere que se haya interpuesto contra: artículo 24», la alternativa B introduce «recogida en resolución expresa,» donde la norma dispone «por silencio,».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Una desestimación recogida en resolución expresa, en algunos casos» no expresa la regla que el artículo 24 aplica a «Pero para ello se requiere que se haya interpuesto contra: artículo 24»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 24 es la estimación por silencio administrativo tiene a todos los efectos la consideración de acto administrativo finalizador del procedimiento. En este supuesto se ajusta a «Silencio positivo».",
      "descartes": {
        "b": "En «¿Qué silencio tiene a todos los efectos la consideración de acto administrativo finalizador del…», la alternativa B introduce «negativo» donde la norma dispone «positivo».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Silencio negativo» no expresa la regla que el artículo 24 aplica a «¿Qué silencio tiene a todos los efectos la consideración de acto administrativo finalizador del…»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 24 atribuye al silencio negativo un efecto procesal: permite interponer el recurso administrativo o contencioso-administrativo procedente. No equivale a una estimación ni produce caducidad.",
      "descartes": {
        "a": "En «Tiene los solos efectos de permitir a los interesados la interposición del recurso administrativo o…», la alternativa A introduce «positivo» donde la norma dispone «negativo».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Silencio positivo» no expresa la regla que el artículo 24 aplica a «Tiene los solos efectos de permitir a los interesados la interposición del recurso administrativo o…»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 24 establece que en los casos de estimación por silencio administrativo, la resolución expresa posterior a la producción del acto sólo podrá dictarse de ser confirmatoria del mismo. Esa previsión conduce a «La resolución expresa posterior se dictará de ser confirmatoria del silencio».",
      "descartes": {
        "a": "En «En los casos de estimación por silencio administrativo: artículo 24», la alternativa A introduce «adoptará por la administración sin vinculación alguna al sentido» donde la norma dispone «dictará de ser confirmatoria».",
        "c": "En «En los casos de estimación por silencio administrativo: artículo 24», la alternativa C introduce «Depende de los casos» donde la norma dispone «La resolución expresa posterior se dictará de ser confirmatoria del silencio»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 24, en los casos de desestimación por silencio administrativo, la resolución expresa posterior al vencimiento del plazo se adoptará por la Administración sin vinculación alguna al sentido del silencio. Por eso encaja «La resolución expresa posterior se adoptará por la administración sin vinculación alguna al sentido del silencio».",
      "descartes": {
        "b": "En «En los casos de desestimación por silencio administrativo: artículo 24», la alternativa B introduce «dictará para confirmar el» donde la norma dispone «adoptará por la administración sin vinculación alguna al sentido del».",
        "c": "En «En los casos de desestimación por silencio administrativo: artículo 24», la alternativa C introduce «Depende de los casos» donde la norma dispone «La resolución expresa posterior se adoptará por la administración sin vinculación alguna al sentido del silencio»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 24 recoge tanto «Ante la administración» como «Ante cualquier persona física o jurídica». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Ante la administración», pero resulta incompleta porque también debe incluirse «Ante cualquier persona física o jurídica».",
        "b": "La alternativa B recoge «Ante cualquier persona física o jurídica», pero resulta incompleta porque también debe incluirse «Ante la administración»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 24 dispone que los actos administrativos producidos por silencio administrativo se podrán hacer valer tanto ante la Administración como ante cualquier persona física o jurídica. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Desde qué momento se producen los efectos del silencio administrativo: artículo 24», la alternativa B introduce «Sería desde el día siguiente a ese vencimiento» donde la norma dispone «Desde el vencimiento del plazo máximo para dictarse y notificarse resolución expresa y no se haya producido».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Desde el vencimiento del plazo máximo para dictarse y notificarse resolución expresa y no se haya producido» sí está respaldada por el artículo 24."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 24 establece que por cualquier medio de prueba admisible en derecho. Esa previsión conduce a «Por cualquier medio de prueba admisible en derecho».",
      "descartes": {
        "a": "La alternativa A vincula «¿Cómo se puede acreditar el silencio? Artículo 24» con «Por cualquier medio de prueba»; el artículo 24 lo relaciona con «Por cualquier medio de prueba admisible en derecho».",
        "c": "En «¿Cómo se puede acreditar el silencio? Artículo 24», la alternativa C introduce «Solamente a través del certificado de silencio» donde la norma dispone «Por cualquier medio de prueba admisible en derecho»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 24, este certificado se expedirá de oficio por el órgano competente para resolver en el plazo de quince días desde que expire el plazo máximo para resolver el procedimiento. Por eso encaja «Máximo 15 días».",
      "descartes": {
        "a": "Para «¿En qué plazo se tiene que dar el certificado del silencio desde que se solicita? artículo 24», la alternativa A utiliza «20», pero la previsión aplicable fija «15».",
        "c": "Para «¿En qué plazo se tiene que dar el certificado del silencio desde que se solicita? artículo 24», la alternativa C utiliza «10», pero la previsión aplicable fija «15»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 24 es este certificado se expedirá de oficio por el órgano competente para resolver en el plazo de quince días desde que expire el plazo máximo para resolver el procedimiento. En este supuesto se ajusta a «Órgano competente para resolver».",
      "descartes": {
        "a": "En «¿Quién lo emite? artículo 24», la alternativa A introduce «instruir» donde la norma dispone «resolver».",
        "c": "En «¿Quién lo emite? artículo 24», la alternativa C introduce «El personal al servicio de la administración pública» donde la norma dispone «Órgano competente para resolver»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 25 dispone que susceptibles de producir efectos desfavorables o de gravamen; se producirá la caducidad. En estos casos; con los efectos previstos en el artículo 95. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En un procedimiento iniciado de oficio cuyo fin puede ser causar efectos negativos en el interesado», la alternativa A introduce «Silencio negativo» donde la norma dispone «Caducidad».",
        "c": "En «En un procedimiento iniciado de oficio cuyo fin puede ser causar efectos negativos en el interesado», la alternativa C introduce «Prescripción» donde la norma dispone «Caducidad»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 25 establece que en los procedimientos en que la Administración ejercite potestades sancionadoras o; susceptibles de producir efectos desfavorables o de gravamen; con los efectos previstos en el artículo 95. Esa previsión conduce a «Silencio negativo».",
      "descartes": {
        "b": "En «Y si el procedimiento se inicia para producir efectos favorables al interesado: artículo 25», la alternativa B introduce «Caducidad» donde la norma dispone «Silencio negativo».",
        "c": "En «Y si el procedimiento se inicia para producir efectos favorables al interesado: artículo 25», la alternativa C introduce «Prescripción» donde la norma dispone «Silencio negativo»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-30-acto-administrativo",
  references: {
    "1": articleReference(24),
    "2": articleReference(24),
    "3": articleReference(24),
    "4": articleReference(24),
    "5": articleReference(24),
    "6": articleReference(24),
    "7": articleReference(24),
    "8": articleReference(24),
    "9": articleReference(24),
    "10": articleReference(24),
    "11": articleReference(24),
    "12": articleReference(24),
    "13": articleReference(24),
    "14": articleReference(24),
    "15": articleReference(24),
    "16": articleReference(24),
    "17": articleReference(24),
    "18": articleReference(24),
    "19": articleReference(25),
    "20": articleReference(25),
  },
});
