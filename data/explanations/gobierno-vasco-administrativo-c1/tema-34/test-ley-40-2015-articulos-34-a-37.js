import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-40-2015-articulos-34-a-37",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 34, la cuantía de la indemnización se calculará con referencia al día en que la lesión efectivamente se produjo. Por eso encaja «Al día en que la lesión efectivamente se produjo».",
      "descartes": {
        "b": "En «La cuantía de la indemnización se calculará con referencia», la alternativa B introduce «A fecha en que se ponga fin al procedimiento de responsabilidad» donde la norma dispone «Al día en que la lesión efectivamente se produjo».",
        "c": "En «La cuantía de la indemnización se calculará con referencia», la alternativa C introduce «A fecha de abono de la indemnización derivado del procedimiento de responsabilidad» donde la norma dispone «Al día en que la lesión efectivamente se produjo»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 34 es la cuantía de la indemnización se calculará con referencia al día en que la lesión efectivamente se produjo. En este supuesto se ajusta a «A fecha en que se ponga fin al procedimiento de responsabilidad».",
      "descartes": {
        "a": "En «Sin perjuicio de su actualización», la alternativa A introduce «Al día en que la lesión efectivamente se produjo» donde la norma dispone «A fecha en que se ponga fin al procedimiento de responsabilidad».",
        "c": "En «Sin perjuicio de su actualización», la alternativa C introduce «de abono de la indemnización derivado del» donde la norma dispone «en que se ponga fin al»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 34 remite los intereses de demora de la indemnización a la Ley 47/2003, General Presupuestaria, o a las normas presupuestarias autonómicas aplicables.",
      "descartes": {
        "a": "En «Si hubiese intereses por demora en el pago de la indemnización fijada, se exigirán con arreglo a», la alternativa A introduce «El Índice de Garantía de la Competitividad» donde la norma dispone «de 26 de noviembre».",
        "c": "En «Si hubiese intereses por demora en el pago de la indemnización fijada, se exigirán con arreglo a», la alternativa C introduce «El Índice de Precios al Consumo» donde la norma dispone «de 26 de noviembre»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "La regulación del artículo 34 comprende «Podrá sustituirse por una compensación en especie» y «Podrá ser abonada mediante pagos periódicos». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Podrá sustituirse por una compensación en especie», pero resulta incompleta porque también debe incluirse «Podrá ser abonada mediante pagos periódicos».",
        "b": "La alternativa B recoge «Podrá ser abonada mediante pagos periódicos», pero resulta incompleta porque también debe incluirse «Podrá sustituirse por una compensación en especie»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 34 recoge tanto «cuando resulte más adecuado para lograr la reparación debida y convenga al interés público» como «Siempre que exista acuerdo con el interesado». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «cuando resulte más adecuado para lograr la reparación debida y convenga al interés público», pero resulta incompleta porque también debe incluirse «Siempre que exista acuerdo con el interesado».",
        "b": "La alternativa B recoge «Siempre que exista acuerdo con el interesado», pero resulta incompleta porque también debe incluirse «cuando resulte más adecuado para lograr la reparación debida y convenga al interés público»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 35 recoge las dos previsiones: «Incluso cuando concurra con sujetos de derecho privado» y «Incluso cuando la responsabilidad se exija directamente a la entidad de derecho privado a través de la cual actúe la…». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Incluso cuando concurra con sujetos de derecho privado», pero resulta incompleta porque también debe incluirse «Incluso cuando la responsabilidad se exija directamente a la entidad de derecho privado a través de la cual actúe la Administración o…».",
        "b": "La alternativa B recoge «Incluso cuando la responsabilidad se exija directamente a la entidad de derecho privado a través de la cual actúe la Administración o…», pero resulta incompleta porque también debe incluirse «Incluso cuando concurra con sujetos de derecho privado»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 36 dispone que exigirán directamente la responsabilidad patrimonial a la Administración. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Los particulares», la alternativa B introduce «las autoridades y personal a su servicio que han ocasionado el daño» donde la norma dispone «la Administración».",
        "c": "En «Los particulares», la alternativa C introduce «las autoridades y personal a su servicio que han ocasionado el daño, siempre que hayan actuado con dolo o culpa grave» donde la norma dispone «la Administración»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 36 establece que cuando hubiere indemnizado a los lesionados; exigirá de oficio en vía administrativa de sus autoridades y demás personal a su servicio la responsabilidad en que hubieran incurrido por dolo; o culpa o negligencia graves. Esa previsión conduce a «Cuando hubieran incurrido en dolo, o culpa o negligencia graves».",
      "descartes": {
        "a": "En «La Administración correspondiente», la alternativa A introduce «En todo caso» donde la norma dispone «Cuando hubieran incurrido en dolo, o culpa o negligencia graves».",
        "c": "En «La Administración correspondiente», la alternativa C introduce «En ningún caso» donde la norma dispone «Cuando hubieran incurrido en dolo, o culpa o negligencia graves»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 36 recoge las dos previsiones: «El resultado dañoso producido» y «El grado de culpabilidad». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «El resultado dañoso producido», pero resulta incompleta porque también debe incluirse «El grado de culpabilidad».",
        "b": "La alternativa B recoge «El grado de culpabilidad», pero resulta incompleta porque también debe incluirse «El resultado dañoso producido»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regulación del artículo 36 comprende «La responsabilidad profesional del personal al servicio de las Administraciones Públicas» y «Su relación con la producción del resultado dañoso». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «La responsabilidad profesional del personal al servicio de las Administraciones Públicas», pero resulta incompleta porque también debe incluirse «Su relación con la producción del resultado dañoso».",
        "b": "La alternativa B recoge «Su relación con la producción del resultado dañoso», pero resulta incompleta porque también debe incluirse «La responsabilidad profesional del personal al servicio de las Administraciones Públicas»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 36 recoge tanto «Los daños y perjuicios causados en los bienes o derechos de los particulares cuando hubiera concurrido dolo» como «Los daños y perjuicios causados en los bienes o derechos de la Administración Pública cuando hubiera concurrido dolo». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Los daños y perjuicios causados en los bienes o derechos de los particulares cuando hubiera concurrido dolo, culpa o negligencia graves», pero resulta incompleta porque también debe incluirse «Los daños y perjuicios causados en los bienes o derechos de la Administración Pública cuando hubiera concurrido dolo».",
        "b": "La alternativa B recoge «Los daños y perjuicios causados en los bienes o derechos de la Administración Pública cuando hubiera concurrido dolo», pero resulta incompleta porque también debe incluirse «Los daños y perjuicios causados en los bienes o derechos de los particulares cuando hubiera concurrido dolo, culpa o negligencia graves»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 36 establece que el procedimiento para la exigencia de la responsabilidad al que se refieren los apartados 2 y 3. Esa previsión conduce a «Lo señalado en la Ley de Procedimiento Administrativo Común de las Administraciones Públicas».",
      "descartes": {
        "a": "En «El procedimiento para le exigencia de las preguntas anteriores se sustanciará de acuerdo a», la alternativa A introduce «esta ley» donde la norma dispone «la Ley de Procedimiento Administrativo Común de las Administraciones Públicas».",
        "b": "En «El procedimiento para le exigencia de las preguntas anteriores se sustanciará de acuerdo a», la alternativa B introduce «normativa específica que corresponda» donde la norma dispone «Ley de Procedimiento Administrativo Común de las Administraciones Públicas»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 36, el procedimiento para la exigencia de la responsabilidad al que se refieren los apartados 2 y 3. Por eso encaja «Siempre de oficio».",
      "descartes": {
        "b": "En «Dicho procedimiento se iniciará», la alternativa B introduce «A instancia de parte» donde la norma dispone «Siempre de oficio».",
        "c": "En «Dicho procedimiento se iniciará», la alternativa C introduce «Se puede iniciar de oficio o a instancia de parte» donde la norma dispone «Siempre de oficio»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 36 es alegaciones durante un plazo de quince días. En este supuesto se ajusta a «Un plazo de 15 días».",
      "descartes": {
        "a": "Para «Tendrá un trámite de alegaciones durante», la alternativa A utiliza «Un / 10», pero la previsión aplicable fija «Un / 15».",
        "c": "Para «Tendrá un trámite de alegaciones durante», la alternativa C utiliza «Un / 20», pero la previsión aplicable fija «Un / 15»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 36 dispone que práctica de las pruebas admitidas y cualesquiera otras que el órgano competente estime oportunas durante un plazo de quince días. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «Práctica de las pruebas admitidas y cualesquiera otras que el órgano competente estime oportunas durante», la alternativa A utiliza «Un / 10», pero la previsión aplicable fija «Un / 15».",
        "c": "Para «Práctica de las pruebas admitidas y cualesquiera otras que el órgano competente estime oportunas durante», la alternativa C utiliza «Un / 20», pero la previsión aplicable fija «Un / 15»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 36 establece que audiencia durante un plazo de diez días. Esa previsión conduce a «Un plazo de 10 días».",
      "descartes": {
        "b": "Para «Audiencia durante», la alternativa B utiliza «Un / 15», pero la previsión aplicable fija «Un / 10».",
        "c": "Para «Audiencia durante», la alternativa C utiliza «Un / 20», pero la previsión aplicable fija «Un / 10»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 36, formulación de la propuesta de resolución en un plazo de cinco días a contar desde la finalización del trámite de audiencia. Por eso encaja «5 días a contar desde la finalización del trámite de audiencia».",
      "descartes": {
        "b": "Para «Formulación de la propuesta de resolución en un plazo de», la alternativa B utiliza «10», pero la previsión aplicable fija «5».",
        "c": "Para «Formulación de la propuesta de resolución en un plazo de», la alternativa C utiliza «15», pero la previsión aplicable fija «5»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 36 es resolución por el órgano competente en el plazo de cinco días. En este supuesto se ajusta a «5 días».",
      "descartes": {
        "b": "Para «Resolución por el órgano competente en el plazo de», la alternativa B utiliza «10», pero la previsión aplicable fija «5».",
        "c": "Para «Resolución por el órgano competente en el plazo de», la alternativa C utiliza «15», pero la previsión aplicable fija «5»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 36 dispone que la resolución declaratoria de responsabilidad pondrá fin a la vía administrativa. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La resolución declaratoria de responsabilidad», la alternativa A introduce «Será firme en» donde la norma dispone «Pondrá fin a la».",
        "c": "La alternativa C vincula «La resolución declaratoria de responsabilidad» con «No pondrá fin a la vía administrativa»; el artículo 36 lo relaciona con «Pondrá fin a la vía administrativa»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 37 establece que la responsabilidad penal del personal al servicio de las Administraciones Públicas, así como la responsabilidad civil derivada del delito se exigirá de acuerdo con lo previsto en la legislación correspondiente. Esa previsión conduce a «La legislación correspondiente».",
      "descartes": {
        "b": "En «La responsabilidad penal del personal al servicio de las Administraciones Públicas», la alternativa B introduce «Esta ley» donde la norma dispone «La legislación correspondiente».",
        "c": "En «La responsabilidad penal del personal al servicio de las Administraciones Públicas», la alternativa C introduce «Lo señalado en la Ley de Procedimiento Administrativo Común de las Administraciones Públicas» donde la norma dispone «La legislación correspondiente»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 37, la exigencia de responsabilidad penal del personal al servicio de las Administraciones Públicas no suspenderá los procedimientos de reconocimiento de responsabilidad patrimonial que se instruyan. Por eso encaja «No suspenderá los procedimientos de reconocimiento de responsabilidad patrimonial que se instruyan».",
      "descartes": {
        "a": "La alternativa A vincula «La exigencia de responsabilidad penal del personal al servicio de las Administraciones Públicas» con «Suspenderá los procedimientos de reconocimiento de responsabilidad patrimonial que se instruyan»; el artículo 37 lo relaciona con «No suspenderá los procedimientos de reconocimiento de responsabilidad patrimonial que se instruyan».",
        "c": "En «La exigencia de responsabilidad penal del personal al servicio de las Administraciones Públicas», la alternativa C introduce «cuando» donde la norma dispone «salvo que»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-34-responsabilidad-administraciones-publicas",
  references: {
    "1": articleReference(34),
    "2": articleReference(34),
    "3": articleReference(34),
    "4": articleReference(34),
    "5": articleReference(34),
    "6": articleReference(35),
    "7": articleReference(36),
    "8": articleReference(36),
    "9": articleReference(36),
    "10": articleReference(36),
    "11": articleReference(36),
    "12": articleReference(36),
    "13": articleReference(36),
    "14": articleReference(36),
    "15": articleReference(36),
    "16": articleReference(36),
    "17": articleReference(36),
    "18": articleReference(36),
    "19": articleReference(36),
    "20": articleReference(37),
    "21": articleReference(37),
  },
});
