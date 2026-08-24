import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-89-y-90",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 89, propuesta de resolución en los procedimientos de carácter sancionador. Por eso encaja «Cuando los hechos no resulten acreditados según la instrucción del procedimiento no será necesaria la formulación de propuesta de resolución».",
      "descartes": {
        "b": "En «En los procedimientos de carácter sancionador», la alternativa B introduce «se concluyera, en cualquier momento, que ha prescrito la infracción no será necesaria la formulación de la» donde la norma dispone «los hechos no resulten acreditados según la instrucción del procedimiento no será necesaria la formulación de propuesta de».",
        "c": "En «En los procedimientos de carácter sancionador», la alternativa C introduce «La inexistencia de los hechos que pudieran constituir la infracción legitima la no realización de la instrucción» donde la norma dispone «Cuando los hechos no resulten acreditados según la instrucción del procedimiento no será necesaria la formulación de…»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 89 recoge tanto «Cuando los hechos probados no constituyan, de modo manifiesto, infracción administrativa» como «Cuando no exista o no se haya podido identificar a la persona o personas responsables o bien aparezcan exentos de…». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando los hechos probados no constituyan, de modo manifiesto, infracción administrativa», pero resulta incompleta porque también debe incluirse «Cuando no exista o no se haya podido identificar a la persona o personas responsables o bien aparezcan exentos de responsabilidad».",
        "b": "La alternativa B recoge «Cuando no exista o no se haya podido identificar a la persona o personas responsables o bien aparezcan exentos de responsabilidad», pero resulta incompleta porque también debe incluirse «Cuando los hechos probados no constituyan, de modo manifiesto, infracción administrativa»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 89 dispone que en el caso de procedimientos de carácter sancionador, una vez concluida la instrucción del procedimiento, el órgano instructor formulará una propuesta de resolución que deberá ser notificada a los interesados. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En los procedimientos de carácter sancionador», la alternativa A introduce «Una vez concluida la instrucción del procedimiento el órgano competente para resolver formulará una propuesta de resolución» donde la norma dispone «La propuesta de resolución deberá ser notificada a los interesados».",
        "c": "En «En los procedimientos de carácter sancionador», la alternativa C introduce «indicar que ya no se pueden hacer alegaciones ni presentar documentos e informaciones que se estimen pertinentes» donde la norma dispone «ser notificada a los interesados»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "La regulación del artículo 89 comprende «Los hechos que consideren probados y su exacta calificación jurídica» y «Los responsables y la sanción». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Los hechos que consideren probados y su exacta calificación jurídica», pero resulta incompleta porque también debe incluirse «Los responsables y la sanción».",
        "b": "La alternativa B recoge «Los responsables y la sanción», pero resulta incompleta porque también debe incluirse «Los hechos que consideren probados y su exacta calificación jurídica»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 89, en la propuesta de resolución se fijarán de forma motivada los hechos que se consideren probados y su exacta calificación jurídica; así como las medidas provisionales que; la propuesta declarará esa circunstancia. Por eso encaja «Las medidas provisionales que, en su caso, se hubieran adoptado».",
      "descartes": {
        "a": "En «En la propuesta de resolución se fijarán», la alternativa A introduce «Sólo la valoración de las pruebas practicadas que constituyan los fundamentos básicos de la decisión» donde la norma dispone «Las medidas provisionales que, en su caso, se hubieran adoptado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Sólo la valoración de las pruebas practicadas que constituyan los fundamentos básicos de la decisión» no expresa la regla que el artículo 89 aplica a «En la propuesta de resolución se fijarán»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 90 es en la resolución no se podrán aceptar hechos distintos de los determinados en el curso del procedimiento, con independencia de su diferente valoración jurídica. En este supuesto se ajusta a «No se podrán aceptar hechos distintos de los determinados en el procedimiento».",
      "descartes": {
        "b": "En «En la resolución de un procedimiento sancionador», la alternativa B introduce «podrá hacer una valoración jurídica distinta a la determinada» donde la norma dispone «podrán aceptar hechos distintos de los determinados».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «No se podrá hacer una valoración jurídica distinta a la determinada en el procedimiento» no expresa la regla que el artículo 90 aplica a «En la resolución de un procedimiento sancionador»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 90 dispone que 15 días. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "Para «se notificará al inculpado para que aporte alegaciones que estime convenientes en el plazo de», la alternativa A utiliza «10», pero la previsión aplicable fija «15».",
        "c": "Para «se notificará al inculpado para que aporte alegaciones que estime convenientes en el plazo de», la alternativa C utiliza «20», pero la previsión aplicable fija «15»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 90 recoge tanto «Será ejecutiva cuando no quepa contra ella ningún recurso ordinario en vía administrativa» como «Se podrán adoptar en la misma disposiciones cautelares precisas para garantizar su eficacia mientras no sea ejecutiva y…». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Será ejecutiva cuando no quepa contra ella ningún recurso ordinario en vía administrativa», pero resulta incompleta porque también debe incluirse «Se podrán adoptar en la misma disposiciones cautelares precisas para garantizar su eficacia mientras no sea ejecutiva y que podrán…».",
        "b": "La alternativa B recoge «Se podrán adoptar en la misma disposiciones cautelares precisas para garantizar su eficacia mientras no sea ejecutiva y que podrán…», pero resulta incompleta porque también debe incluirse «Será ejecutiva cuando no quepa contra ella ningún recurso ordinario en vía administrativa»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 90, cuando la resolución sea ejecutiva, se podrá suspender cautelarmente, si el interesado manifiesta a la Administración su intención de interponer recurso contencioso-administrativo contra la resolución firme en vía administrativa. Por eso encaja «Manifiesta su intención de interponer recurso contencioso-administrativo contra la resolución firme en vía administrativa».",
      "descartes": {
        "a": "En «Cuando la resolución sea ejecutiva, se podrá suspender cautelarmente, si el interesado», la alternativa A introduce «Interpone el» donde la norma dispone «Manifiesta su intención de interponer».",
        "c": "En «Cuando la resolución sea ejecutiva, se podrá suspender cautelarmente, si el interesado», la alternativa C introduce «Interpone el recurso de alzada» donde la norma dispone «Manifiesta su intención de interponer recurso contencioso-administrativo»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regulación del artículo 90 comprende «Haya transcurrido el plazo legal para interponer el recurso contencioso-administrativo sin que se haya interpuesto» y «Habiendo interpuesto el recurso contencioso-administrativo no ha solicitado la suspensión cautelar o el órgano judicial…». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Haya transcurrido el plazo legal para interponer el recurso contencioso-administrativo sin que se haya interpuesto», pero resulta incompleta porque también debe incluirse «Habiendo interpuesto el recurso contencioso-administrativo no ha solicitado la suspensión cautelar o el órgano judicial se ha…».",
        "b": "La alternativa B recoge «Habiendo interpuesto el recurso contencioso-administrativo no ha solicitado la suspensión cautelar o el órgano judicial se ha…», pero resulta incompleta porque también debe incluirse «Haya transcurrido el plazo legal para interponer el recurso contencioso-administrativo sin que se haya interpuesto»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 90 recoge tanto «La cuantía destinada a indemnizar estos daños se puede determinar en el propio expediente sancionador» como «La cuantía destinada a indemnizar estos daños se puede determinar en un procedimiento complementario». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «La cuantía destinada a indemnizar estos daños se puede determinar en el propio expediente sancionador», pero resulta incompleta porque también debe incluirse «La cuantía destinada a indemnizar estos daños se puede determinar en un procedimiento complementario».",
        "b": "La alternativa B recoge «La cuantía destinada a indemnizar estos daños se puede determinar en un procedimiento complementario», pero resulta incompleta porque también debe incluirse «La cuantía destinada a indemnizar estos daños se puede determinar en el propio expediente sancionador»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 90 establece que cuando las conductas sancionadas hubieran causado daños o perjuicios a las Administraciones y la cuantía destinada a indemnizar estos daños no hubiera quedado determinada en el expediente. Esa previsión conduce a «Este podrá finalizar por una terminación convencional».",
      "descartes": {
        "b": "En «Si la cuantía destinada a indemnizar los daños de la pregunta anterior se determina por un procedimiento…», la alternativa B introduce «No podrá finalizar por» donde la norma dispone «Este podrá finalizar por una».",
        "c": "En «Si la cuantía destinada a indemnizar los daños de la pregunta anterior se determina por un procedimiento…», la alternativa C introduce «Sí podrá finalizar por terminación convencional si el sancionador ha finalizado de esa manera» donde la norma dispone «Este podrá finalizar por una terminación convencional»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 90, este procedimiento será susceptible de terminación convencional, pero ni ésta ni la aceptación por el infractor de la resolución que pudiera recaer implicarán el reconocimiento voluntario de su responsabilidad. Por eso encaja «No implicarán el reconocimiento voluntario de su responsabilidad».",
      "descartes": {
        "a": "La alternativa A vincula «La aceptación por el infractor de la resolución que pudiera recaer en un procedimiento complementario para el…» con «Implicarán el reconocimiento voluntario de su responsabilidad»; el artículo 90 lo relaciona con «No implicarán el reconocimiento voluntario de su responsabilidad».",
        "c": "En «La aceptación por el infractor de la resolución que pudiera recaer en un procedimiento complementario para el…», la alternativa C introduce «La ley no señala nada al respecto» donde la norma dispone «No implicarán el reconocimiento voluntario de su responsabilidad»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 90 es este procedimiento será susceptible de terminación convencional, pero ni ésta ni la aceptación por el infractor de la resolución que pudiera recaer implicarán el reconocimiento voluntario de su responsabilidad. En este supuesto se ajusta a «No implicarán el reconocimiento voluntario de su responsabilidad».",
      "descartes": {
        "a": "La alternativa A vincula «La terminación convencional en el procedimiento anterior» con «Implicarán el reconocimiento voluntario de su responsabilidad»; el artículo 90 lo relaciona con «No implicarán el reconocimiento voluntario de su responsabilidad».",
        "c": "En «La terminación convencional en el procedimiento anterior», la alternativa C introduce «La ley no señala nada al respecto» donde la norma dispone «No implicarán el reconocimiento voluntario de su responsabilidad»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 90 dispone que la resolución del procedimiento pondrá fin a la vía administrativa. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «La resolución del procedimiento», la alternativa B introduce «Será firme en» donde la norma dispone «Pondrá fin a».",
        "c": "La alternativa C vincula «La resolución del procedimiento» con «No pondrá fin a la vía administrativa»; el artículo 90 lo relaciona con «Pondrá fin a la vía administrativa»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(89),
    "2": articleReference(89),
    "3": articleReference(89),
    "4": articleReference(89),
    "5": articleReference(89),
    "6": articleReference(90),
    "7": articleReference(90),
    "8": articleReference(90),
    "9": articleReference(90),
    "10": articleReference(90),
    "11": articleReference(90),
    "12": articleReference(90),
    "13": articleReference(90),
    "14": articleReference(90),
    "15": articleReference(90),
  },
});
