import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-40-2015-articulos-32-y-33",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 32, siempre que concurran los requisitos previstos en los apartados anteriores. Por eso encaja «Por lesiones que sufran en sus bienes y derechos».",
      "descartes": {
        "b": "En «Los particulares tienen derecho a ser indemnizados por las Administraciones Públicas», la alternativa B introduce «Siempre que la lesión sea consecuencia del funcionamiento anormal de los servicios públicos» donde la norma dispone «Por lesiones que sufran en sus bienes y derechos».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Siempre que la lesión sea consecuencia del funcionamiento anormal de los servicios públicos» no expresa la regla que el artículo 32 aplica a «Los particulares tienen derecho a ser indemnizados por las Administraciones Públicas»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 32 recoge tanto «En casos de fuerza mayor» como «Cuando el particular tiene el deber jurídico de soportarlo». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «En casos de fuerza mayor», pero resulta incompleta porque también debe incluirse «Cuando el particular tiene el deber jurídico de soportarlo».",
        "b": "La alternativa B recoge «Cuando el particular tiene el deber jurídico de soportarlo», pero resulta incompleta porque también debe incluirse «En casos de fuerza mayor»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 32 dispone que la anulación en vía administrativa o por el orden jurisdiccional contencioso administrativo de los actos o disposiciones administrativas no presupone, por sí misma, derecho a la indemnización. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La anulación en vía administrativa o por el orden jurisdiccional contencioso administrativo de los actos o…», la alternativa A introduce «Presupone» donde la norma dispone «No presupone, por sí misma,».",
        "c": "En «La anulación en vía administrativa o por el orden jurisdiccional contencioso administrativo de los actos o…», la alternativa C introduce «en ningún caso,» donde la norma dispone «por sí misma,»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 32 establece que en todo caso, el daño alegado habrá de ser efectivo, evaluable económicamente e individualizado con relación a una persona o grupo de personas. Esa previsión conduce a «Efectivo y evaluable económicamente».",
      "descartes": {
        "b": "En «El daño alegado habrá de ser», la alternativa B introduce «Individualizado respecto de una persona» donde la norma dispone «Efectivo y evaluable económicamente».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Individualizado respecto de una persona» no expresa la regla que el artículo 32 aplica a «El daño alegado habrá de ser»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 32, siempre que concurran los requisitos previstos en los apartados anteriores. Por eso encaja «Cuando así lo establezcan los propios actos legislativos».",
      "descartes": {
        "a": "En «Los particulares tendrán derecho a ser indemnizados por las Administraciones Públicas como consecuencia de la…», la alternativa A introduce «En todo caso» donde la norma dispone «Cuando así lo establezcan los propios actos legislativos».",
        "c": "En «Los particulares tendrán derecho a ser indemnizados por las Administraciones Públicas como consecuencia de la…», la alternativa C introduce «Nunca, ya que se trata de actos legislativos de naturaleza no expropiatoria» donde la norma dispone «Cuando así lo establezcan los propios actos legislativos»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 32 recoge las dos previsiones: «Los daños derivados de la aplicación de una norma con rango de ley declarada inconstitucional» y «Los daños derivados de la aplicación de una norma contraria al Derecho de la UE». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Los daños derivados de la aplicación de una norma con rango de ley declarada inconstitucional», pero resulta incompleta porque también debe incluirse «Los daños derivados de la aplicación de una norma contraria al Derecho de la UE».",
        "b": "La alternativa B recoge «Los daños derivados de la aplicación de una norma contraria al Derecho de la UE», pero resulta incompleta porque también debe incluirse «Los daños derivados de la aplicación de una norma con rango de ley declarada inconstitucional»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 32 exige una sentencia firme desestimatoria del recurso en el que se hubiera alegado la inconstitucionalidad después declarada. Una simple resolución firme no satisface ese requisito.",
      "descartes": {
        "b": "En «Para que se genere responsabilidad al Estado legislador por daños derivados de la aplicación de una norma con…», la alternativa B introduce «resolución» donde la norma dispone «sentencia».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El particular obtuvo» no expresa la regla que el artículo 32 aplica a «Para que se genere responsabilidad al Estado legislador por daños derivados de la aplicación de una norma con…»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 32 establece que salvo que en ella se establezca otra cosa. Esa previsión conduce a «La fecha de su publicación en el BOE o en el DOUE, según el caso, salvo que en ellos se establezca otra cosa».",
      "descartes": {
        "b": "La alternativa B vincula «La sentencia que declare la inconstitucionalidad de la norma con rango de ley o declare el carácter de norma…» con «El día siguiente a la fecha de su publicación en el BOE o en el DOUE, según el caso, salvo que en ellos se establezca otra cosa»; el artículo 32 lo relaciona con «La fecha de su publicación en el BOE o en el DOUE, según el caso, salvo que en ellos se establezca otra cosa».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «La fecha de su publicación en el BOE o en el DOUE, según el caso, salvo que en ellos se establezca otra cosa» sí está respaldada por el artículo 32."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 32, el Consejo de Ministros. Por eso encaja «El Consejo de Ministros».",
      "descartes": {
        "a": "En «Fijará el importe de las indemnizaciones que proceda abonar cuando el Tribunal Constitucional haya declarado», la alternativa A introduce «Ministro de Justicia» donde la norma dispone «Consejo de Ministros».",
        "c": "En «Fijará el importe de las indemnizaciones que proceda abonar cuando el Tribunal Constitucional haya declarado», la alternativa C introduce «General del Poder Judicial» donde la norma dispone «de Ministros»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 32 es el procedimiento para fijar el importe de las indemnizaciones se tramitará por el Ministerio de Justicia, con audiencia al Consejo de Estado. En este supuesto se ajusta a «El Ministro de Justicia, con audiencia al Consejo de Estado».",
      "descartes": {
        "b": "En «El procedimiento para fijar el importe de las indemnizaciones se tramitará por», la alternativa B introduce «del Consejo General del Poder Judicial» donde la norma dispone «al Consejo de Estado».",
        "c": "En «El procedimiento para fijar el importe de las indemnizaciones se tramitará por», la alternativa C introduce «Consejo de Ministros, con audiencia del Consejo General del Poder Judicial» donde la norma dispone «Ministro de Justicia, con audiencia al Consejo de Estado»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 32 recoge tanto «El daño sea consecuencia de una orden inmediata y directa de la Administración» como «El daño sea consecuencia de vicios del proyecto elaborado por la Administración». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «El daño sea consecuencia de una orden inmediata y directa de la Administración», pero resulta incompleta porque también debe incluirse «El daño sea consecuencia de vicios del proyecto elaborado por la Administración».",
        "b": "La alternativa B recoge «El daño sea consecuencia de vicios del proyecto elaborado por la Administración», pero resulta incompleta porque también debe incluirse «El daño sea consecuencia de una orden inmediata y directa de la Administración»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 33 establece que de forma solidaria. Esa previsión conduce a «De forma solidaria».",
      "descartes": {
        "a": "En «las Administraciones responderán frente al particular», la alternativa A introduce «subsidiaria» donde la norma dispone «solidaria».",
        "b": "En «las Administraciones responderán frente al particular», la alternativa B introduce «mancomunada» donde la norma dispone «solidaria»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 33, en otros supuestos de concurrencia de varias Administraciones en la producción del daño, la responsabilidad se fijará para cada Administración atendiendo a los criterios de competencia, interés público tutelado e intensidad de la intervención. Por eso encaja «A los criterios de competencia, interés público tutelado e intensidad de la intervención».",
      "descartes": {
        "b": "En «En otros supuestos de concurrencia de varias Administraciones en la producción del daño», la alternativa B introduce «lo señalado en el instrumento jurídico regulador de la actuación» donde la norma dispone «los criterios de competencia, interés público tutelado e intensidad de la intervención».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «A los criterios de competencia, interés público tutelado e intensidad de la intervención» sí está respaldada por el artículo 33."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 33 es cuando de la gestión dimanante de fórmulas conjuntas de actuación entre varias Administraciones públicas se derive responsabilidad en los términos previstos en la presente Ley. En este supuesto se ajusta a «De forma solidaria».",
      "descartes": {
        "a": "En «Si no es posible determinar la responsabilidad de acuerdo a lo anterior se responderá», la alternativa A introduce «subsidiaria» donde la norma dispone «solidaria».",
        "b": "En «Si no es posible determinar la responsabilidad de acuerdo a lo anterior se responderá», la alternativa B introduce «mancomunada» donde la norma dispone «solidaria»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-34-responsabilidad-administraciones-publicas",
  references: {
    "1": articleReference(32),
    "2": articleReference(32),
    "3": articleReference(32),
    "4": articleReference(32),
    "5": articleReference(32),
    "6": articleReference(32),
    "7": articleReference(32),
    "8": articleReference(32),
    "9": articleReference(32),
    "10": articleReference(32),
    "11": articleReference(32),
    "12": articleReference(33),
    "13": articleReference(33),
    "14": articleReference(33),
  },
});
