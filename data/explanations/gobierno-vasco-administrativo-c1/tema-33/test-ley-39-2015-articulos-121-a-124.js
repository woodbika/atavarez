import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-121-a-124",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 121, el recurso podrá interponerse ante el órgano que dictó el acto que se impugna o ante el competente para resolverlo. Por eso encaja «Sí, con los límites que señala la Ley 39/2015, de 01 de octubre».",
      "descartes": {
        "a": "En «Puede interponerse un recurso de alzada contra un acto de trámite», la alternativa A introduce «No, ya que solamente cabe contra resoluciones que no pongan fin a la vía administrativa» donde la norma dispone «Sí, con los límites que señala la Ley 39/2015, de 01 de octubre».",
        "b": "En «Puede interponerse un recurso de alzada contra un acto de trámite», la alternativa B introduce «contra todo tipo de actos de trámite que no pongan fin a la vía administrativa» donde la norma dispone «con los límites que señala la Ley 39/2015, de 01 de octubre»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 121 es las resoluciones y actos a que se refiere el artículo 112.1, cuando no pongan fin a la vía administrativa, podrán ser recurridos en alzada ante el órgano superior jerárquico del que los dictó. En este supuesto se ajusta a «Ante el superior jerárquico al que dicto el acto».",
      "descartes": {
        "a": "En «Cuando un acto sea objeto de recurso de alzada ¿Ante quién se puede recurrir», la alternativa A introduce «órgano» donde la norma dispone «superior jerárquico al».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Ante el órgano que dicto el acto» no expresa la regla que el artículo 121 aplica a «Cuando un acto sea objeto de recurso de alzada ¿Ante quién se puede recurrir»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 112 excluye el recurso administrativo directo contra disposiciones de carácter general. Sí permite recurrir un acto cuando la impugnación se basa únicamente en la nulidad de la disposición que aplica, pero no la disposición en sí.",
      "descartes": {
        "a": "En «Se puede interponer un recurso de alzada contra una disposición administrativa», la alternativa A introduce «Sí, siempre que no agote la vía administrativa» donde la norma dispone «No, en ningún caso».",
        "b": "En «Se puede interponer un recurso de alzada contra una disposición administrativa», la alternativa B introduce «Sí, siempre que se recurra ante el órgano que dicto la disposición administrativa» donde la norma dispone «No, en ningún caso»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 121 establece que los Tribunales y órganos de selección del personal al servicio de las Administraciones Públicas y cualesquiera otros que; actúen con autonomía funcional; se considerarán dependientes del órgano al que estén adscritos o. Esa previsión conduce a «Ante el órgano al que estén adscritos».",
      "descartes": {
        "b": "En «Los actos de los Tribunales y órganos de selección del personal al servicio de las Administraciones Públicas…», la alternativa B introduce «que haya nombrado al presidente de los mismos» donde la norma dispone «al que estén adscritos».",
        "c": "En «Los actos de los Tribunales y órganos de selección del personal al servicio de las Administraciones Públicas…», la alternativa C introduce «En primer lugar se puede dirigir indistintamente ante cualquiera de ellos» donde la norma dispone «Ante el órgano al que estén adscritos»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 121 recoge tanto «Ante el órgano que dicto el acto» como «Ante el superior jerárquico al que dicto el acto». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Ante el órgano que dicto el acto», pero resulta incompleta porque también debe incluirse «Ante el superior jerárquico al que dicto el acto».",
        "b": "La alternativa B recoge «Ante el superior jerárquico al que dicto el acto», pero resulta incompleta porque también debe incluirse «Ante el órgano que dicto el acto»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 121 es si el recurso se hubiera interpuesto ante el órgano que dictó el acto impugnado, éste deberá remitirlo al competente en el plazo de diez días, con su informe y con una copia completa y ordenada del expediente. En este supuesto se ajusta a «En el plazo de diez días».",
      "descartes": {
        "b": "Para «Si el recurso se interpone ante el órgano que dicto el acto, esté deberá remitirlo al competente para resolver», la alternativa B utiliza «quince», pero la previsión aplicable fija «diez».",
        "c": "En «Si el recurso se interpone ante el órgano que dicto el acto, esté deberá remitirlo al competente para resolver», la alternativa C introduce «No cabe interponerlo ante el órgano que dicto el acto» donde la norma dispone «En el plazo de diez días»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 121 comprende «Una copia del expediente» y «Un informe». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Una copia del expediente», pero resulta incompleta porque también debe incluirse «Un informe».",
        "b": "La alternativa B recoge «Un informe», pero resulta incompleta porque también debe incluirse «Una copia del expediente»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 121 establece que el titular del órgano que dictó el acto recurrido será responsable directo del cumplimiento de lo previsto en el párrafo anterior. Esa previsión conduce a «El órgano que dicto el acto que está siendo objeto de impugnación».",
      "descartes": {
        "a": "En «¿Quién queda como responsable de dicha remisión», la alternativa A introduce «competente para resolver el recurso» donde la norma dispone «que dicto el acto que está siendo objeto de impugnación».",
        "b": "En «¿Quién queda como responsable de dicha remisión», la alternativa B introduce «jerárquico superior al que dicto el acto» donde la norma dispone «que dicto el acto que está siendo objeto de impugnación»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 122, el plazo para la interposición del recurso de alzada será de un mes, si el acto fuera expreso. Por eso encaja «1 mes».",
      "descartes": {
        "b": "Para «Si el acto es expreso el plazo para interponer el recurso es», la alternativa B utiliza «2», pero la previsión aplicable fija «1».",
        "c": "Para «Si el acto es expreso el plazo para interponer el recurso es», la alternativa C utiliza «3», pero la previsión aplicable fija «1»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El artículo 122 no fija un plazo cerrado para recurrir en alzada un acto presunto: el recurso puede interponerse desde el día siguiente a aquel en que se produzcan los efectos del silencio administrativo.",
      "descartes": {
        "a": "En «Si no fuera expreso el plazo será de», la alternativa A introduce «1 mes a partir del mismo día en el que se produce el silencio administrativo» donde la norma dispone «No existe plazo en estos casos para interponer el recurso».",
        "b": "En «Si no fuera expreso el plazo será de», la alternativa B introduce «3 meses a partir del mismo día en el que se produce el silencio administrativo» donde la norma dispone «No existe plazo en estos casos para interponer el recurso»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 122 dispone que transcurrido dicho plazo sin haberse interpuesto el recurso, la resolución será firme a todos los efectos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Transcurridos dichos plazos sin haberse interpuesto el recurso», la alternativa B introduce «ya no se podría plantear ningún recurso» donde la norma dispone «solo se podría interponer el recurso de revisión».",
        "c": "En «Transcurridos dichos plazos sin haberse interpuesto el recurso», la alternativa C introduce «contencioso-administrativo» donde la norma dispone «de revisión»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 122 establece que el plazo máximo para dictar y notificar la resolución será de tres meses. Transcurrido este plazo sin que recaiga resolución, se podrá entender desestimado el recurso, salvo en el supuesto previsto en el artículo 24.1, tercer párrafo. Esa previsión conduce a «3 meses».",
      "descartes": {
        "a": "Para «El plazo máximo para dictar y notificar la resolución del recurso de alzada es de», la alternativa A utiliza «1», pero la previsión aplicable fija «3».",
        "b": "Para «El plazo máximo para dictar y notificar la resolución del recurso de alzada es de», la alternativa B utiliza «2», pero la previsión aplicable fija «3»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 122, el plazo máximo para dictar y notificar la resolución será de tres meses. Transcurrido este plazo sin que recaiga resolución, se podrá entender desestimado el recurso, salvo en el supuesto previsto en el artículo 24.1, tercer párrafo. Por eso encaja «Se podrá entender desestimado por silencio pudiendo interponer el recurso de revisión».",
      "descartes": {
        "a": "En «Transcurrido este plazo sin que recaiga resolución», la alternativa A introduce «que el acto deviene firme a todos los efectos» donde la norma dispone «desestimado por silencio pudiendo interponer el recurso de revisión».",
        "b": "En «Transcurrido este plazo sin que recaiga resolución», la alternativa B introduce «no pudiendo plantear ya ningún recurso administrativo» donde la norma dispone «pudiendo interponer el recurso de revisión»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 122 es contra la resolución de un recurso de alzada no cabrá ningún otro recurso administrativo, salvo el recurso extraordinario de revisión, en los casos establecidos en el artículo 125.1. En este supuesto se ajusta a «Revisión».",
      "descartes": {
        "a": "En «Contra la resolución del recurso de alzada se podrá interponer el siguiente recurso administrativo», la alternativa A introduce «Reposición» donde la norma dispone «Revisión».",
        "c": "En «Contra la resolución del recurso de alzada se podrá interponer el siguiente recurso administrativo», la alternativa C introduce «Contencioso-administrativo» donde la norma dispone «Revisión»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 122 admite la estimación por silencio de una alzada interpuesta contra una desestimación presunta en el supuesto al que remite el artículo 24.1. Es una excepción, no el efecto general de toda falta de resolución.",
      "descartes": {
        "b": "En «Un recurso de alzada», la alternativa B introduce «Conlleva, en todo caso,» donde la norma dispone «Puede conllevar, en algunos casos,».",
        "c": "Para «Un recurso de alzada», la alternativa C utiliza «30 / 1992 / 26 / una», pero la previsión aplicable fija «una»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 122 establece que contra la resolución de un recurso de alzada no cabrá ningún otro recurso administrativo, salvo el recurso extraordinario de revisión, en los casos establecidos en el artículo 125.1. Esa previsión conduce a «Se puede plantear en supuestos tasados».",
      "descartes": {
        "a": "En «El recurso de la pregunta 14 contra la resolución de un recurso de alzada», la alternativa A introduce «siempre» donde la norma dispone «en supuestos tasados».",
        "c": "En «El recurso de la pregunta 14 contra la resolución de un recurso de alzada», la alternativa C introduce «cuando dicha resolución se considere firme en vía administrativa» donde la norma dispone «en supuestos tasados»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 112, en las mismas condiciones, el recurso de reposición podrá ser sustituido por los procedimientos a que se refiere el párrafo anterior, respetando su carácter potestativo para el interesado. Por eso encaja «Potestativo».",
      "descartes": {
        "a": "En «El recurso de reposición es de carácter», la alternativa A introduce «Ordinario» donde la norma dispone «Potestativo».",
        "c": "En «El recurso de reposición es de carácter», la alternativa C introduce «Extraordinario» donde la norma dispone «Potestativo»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 123 es los actos administrativos que pongan fin a la vía administrativa podrán ser recurridos potestativamente en reposición ante el mismo órgano que los hubiera dictado o ser impugnados directamente ante el orden jurisdiccional contencioso-administrativo. En este supuesto se ajusta a «Sí, determinados actos de trámite y siempre que agoten la vía administrativa».",
      "descartes": {
        "a": "En «¿Este recurso se puede plantear contra actos de trámite», la alternativa A introduce «en todo caso» donde la norma dispone «determinados actos de trámite y siempre que agoten la vía administrativa».",
        "b": "En «¿Este recurso se puede plantear contra actos de trámite», la alternativa B introduce «cuando dichos actos de trámite» donde la norma dispone «determinados actos de trámite y siempre que»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 123 dispone que los actos administrativos que pongan fin a la vía administrativa podrán ser recurridos potestativamente en reposición ante el mismo órgano que los hubiera dictado o ser impugnados directamente ante el orden jurisdiccional contencioso-administrativo. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Ante quien se recurre», la alternativa B introduce «jerárquicamente superior» donde la norma dispone «que lo dicto».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Ante el órgano jerárquicamente superior» no expresa la regla que el artículo 123 aplica a «Ante quien se recurre»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 123 establece que no se podrá interponer recurso contencioso-administrativo hasta que sea resuelto expresamente o se haya producido la desestimación presunta del recurso de reposición interpuesto. Esa previsión conduce a «Un recurso contencioso-administrativo».",
      "descartes": {
        "a": "En «Se puede interponer directamente también», la alternativa A introduce «extraordinario de revisión» donde la norma dispone «contencioso-administrativo».",
        "c": "En «Se puede interponer directamente también», la alternativa C introduce «de alzada» donde la norma dispone «contencioso-administrativo»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 123, no se podrá interponer recurso contencioso-administrativo hasta que sea resuelto expresamente o se haya producido la desestimación presunta del recurso de reposición interpuesto. Por eso encaja «Ambas respuestas constituyen posibilidades totalmente válidas».",
      "descartes": {
        "a": "En «Si se decide interponer el recurso de reposición no se podrá interponer el de la pregunta anterior», la alternativa A introduce «Hasta que no se resuelva el de reposición» donde la norma dispone «Ambas respuestas constituyen posibilidades totalmente válidas».",
        "b": "En «Si se decide interponer el recurso de reposición no se podrá interponer el de la pregunta anterior», la alternativa B introduce «Hasta que no transcurra el plazo máximo para resolver el de reposición» donde la norma dispone «Ambas respuestas constituyen posibilidades totalmente válidas»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 124 es el plazo para la interposición del recurso de reposición será de un mes, si el acto fuera expreso. En este supuesto se ajusta a «1 mes».",
      "descartes": {
        "b": "Para «El plazo para interponer el recurso de reposición si el acto es expreso será de», la alternativa B utiliza «2», pero la previsión aplicable fija «1».",
        "c": "Para «El plazo para interponer el recurso de reposición si el acto es expreso será de», la alternativa C utiliza «3», pero la previsión aplicable fija «1»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 124 dispone que el plazo para la interposición del recurso de reposición será de un mes, si el acto fuera expreso. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «El plazo para interponer el recurso de reposición si el acto es presunto será de», la alternativa A introduce «1 mes a partir del mismo día en el que se produce el silencio administrativo» donde la norma dispone «No existe plazo en estos casos para interponer el recurso».",
        "b": "En «El plazo para interponer el recurso de reposición si el acto es presunto será de», la alternativa B introduce «3 meses a partir del mismo día en el que se produce el silencio administrativo» donde la norma dispone «No existe plazo en estos casos para interponer el recurso»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 124 establece que transcurrido dicho plazo, únicamente podrá interponerse recurso contencioso-administrativo, sin perjuicio, en su caso, de la procedencia del recurso extraordinario de revisión. Esa previsión conduce a «Se podrá interponer el recurso contencioso-administrativo».",
      "descartes": {
        "a": "En «Transcurridos dichos plazos sin que se haya interpuesto el recurso», la alternativa A introduce «El acto deviene firme a todos los efectos» donde la norma dispone «Se podrá interponer el recurso contencioso-administrativo».",
        "b": "En «Transcurridos dichos plazos sin que se haya interpuesto el recurso», la alternativa B introduce «El acto podrá ser objeto del recurso de alzada» donde la norma dispone «Se podrá interponer el recurso contencioso-administrativo»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Según el artículo 124, el plazo máximo para dictar y notificar la resolución del recurso será de un mes. Por eso encaja «1 mes».",
      "descartes": {
        "b": "Para «El plazo máximo para resolver y notificar será de», la alternativa B utiliza «2», pero la previsión aplicable fija «1».",
        "c": "Para «El plazo máximo para resolver y notificar será de», la alternativa C utiliza «3», pero la previsión aplicable fija «1»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La regla del artículo 124 es contra la resolución de un recurso de reposición no podrá interponerse de nuevo dicho recurso. En este supuesto se ajusta a «Un nuevo recurso de reposición».",
      "descartes": {
        "a": "En «Contra la resolución del recurso de reposición, no cabe el siguiente recurso», la alternativa A introduce «El extraordinario de revisión» donde la norma dispone «Un nuevo recurso de reposición».",
        "b": "En «Contra la resolución del recurso de reposición, no cabe el siguiente recurso», la alternativa B introduce «El contencioso-administrativo» donde la norma dispone «Un nuevo recurso de reposición»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El artículo 122 dispone que el plazo máximo para dictar y notificar la resolución será de tres meses. Transcurrido este plazo sin que recaiga resolución, se podrá entender desestimado el recurso, salvo en el supuesto previsto en el artículo 24.1, tercer párrafo. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Si transcurren los plazos máximos para resolver y notificar este recurso sin resolución», la alternativa A introduce «positivo» donde la norma dispone «negativo».",
        "c": "En «Si transcurren los plazos máximos para resolver y notificar este recurso sin resolución», la alternativa C introduce «es positivo cuando se haya interpuesto contra una desestimación previa por silencio» donde la norma dispone «en todo caso es negativo»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-33-revision-actos-recursos-administrativos",
  references: {
    "1": articleReference(121),
    "2": articleReference(121),
    "3": articleReference(112),
    "4": articleReference(121),
    "5": articleReference(121),
    "6": articleReference(121),
    "7": articleReference(121),
    "8": articleReference(121),
    "9": articleReference(122),
    "10": articleReference(122),
    "11": articleReference(122),
    "12": articleReference(122),
    "13": articleReference(122),
    "14": articleReference(122),
    "15": articleReference(122),
    "16": articleReference(122),
    "17": articleReference(112),
    "18": articleReference(123),
    "19": articleReference(123),
    "20": articleReference(123),
    "21": articleReference(123),
    "22": articleReference(124),
    "23": articleReference(124),
    "24": articleReference(124),
    "25": articleReference(124),
    "26": articleReference(124),
    "27": articleReference(122),
  },
});
