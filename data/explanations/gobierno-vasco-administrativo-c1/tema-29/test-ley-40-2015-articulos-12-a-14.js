import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-40-2015-articulos-12-a-14",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 12, la delegación de firma no alterará la competencia del órgano delegante y para su validez no será necesaria su publicación. Por eso encaja «El Delegante es el titular de un órgano administrativo».",
      "descartes": {
        "b": "Para «En la Delegación de Firma», la alternativa B utiliza «una», pero la previsión aplicable fija «un».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El Delegante es el titular de una unidad administrativa» no expresa la regla que el artículo 12 aplica a «En la Delegación de Firma»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 12 recoge tanto «El Delegado es el titular de un órgano administrativo» como «El Delegado es el titular de una unidad administrativa». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «El Delegado es el titular de un órgano administrativo», pero resulta incompleta porque también debe incluirse «El Delegado es el titular de una unidad administrativa».",
        "b": "La alternativa B recoge «El Delegado es el titular de una unidad administrativa», pero resulta incompleta porque también debe incluirse «El Delegado es el titular de un órgano administrativo»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 12 dispone que el Delegado depende del Delegante. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula «En todo caso» con «El Delegado nunca depende del Delegante»; el artículo 12 lo relaciona con «El Delegado depende del Delegante».",
        "c": "En «En todo caso», la alternativa C introduce «Caben ambas posibilidades» donde la norma dispone «El Delegado depende del Delegante»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 12 establece que la delegación de firma no altera la competencia. Esa previsión conduce a «La delegación de firma no altera la competencia».",
      "descartes": {
        "b": "En este supuesto, la alternativa B introduce «requiere su publicación para su validez» donde la norma dispone «no altera la competencia».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La delegación de firma requiere su publicación para su validez» no expresa la regla que el artículo 12 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 12 recoge tanto «En las resoluciones y actos que se firmen por delegación se hará constar esa circunstancia» como «En las resoluciones y actos que se firmen por delegación se hará constar la autoridad de procedencia». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «En las resoluciones y actos que se firmen por delegación se hará constar esa circunstancia», pero resulta incompleta porque también debe incluirse «En las resoluciones y actos que se firmen por delegación se hará constar la autoridad de procedencia».",
        "b": "La alternativa B recoge «En las resoluciones y actos que se firmen por delegación se hará constar la autoridad de procedencia», pero resulta incompleta porque también debe incluirse «En las resoluciones y actos que se firmen por delegación se hará constar esa circunstancia»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 12 aclara que la delegación de firma no altera la competencia y el artículo 13 establece lo mismo para la suplencia. Las dos figuras mantienen, por tanto, la titularidad competencial.",
      "descartes": {
        "a": "La alternativa A recoge «La delegación de firma», pero resulta incompleta porque también debe incluirse «La suplencia».",
        "b": "La alternativa B recoge «La suplencia», pero resulta incompleta porque también debe incluirse «La delegación de firma»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 13 comprende «De vacante, ausencia o enfermedad» y «De abstención o recusación». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «De vacante, ausencia o enfermedad», pero resulta incompleta porque también debe incluirse «De abstención o recusación».",
        "b": "La alternativa B recoge «De abstención o recusación», pero resulta incompleta porque también debe incluirse «De vacante, ausencia o enfermedad»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 13 establece que si no se designa suplente, la competencia del órgano administrativo se ejercerá por quien designe el órgano administrativo inmediato superior de quien dependa. Esa previsión conduce a «Ambas respuestas son posibles».",
      "descartes": {
        "a": "En «La competencia del órgano administrativo se ejercerá por», la alternativa A introduce «El suplente» donde la norma dispone «Ambas respuestas son posibles».",
        "b": "En «La competencia del órgano administrativo se ejercerá por», la alternativa B introduce «Quien designe el órgano administrativo inmediato superior de quien dependa» donde la norma dispone «Ambas respuestas son posibles»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 13, si no se designa suplente, la competencia del órgano administrativo se ejercerá por quien designe el órgano administrativo inmediato superior de quien dependa. Por eso encaja «La suplencia no altera la competencia».",
      "descartes": {
        "b": "En este supuesto, la alternativa B introduce «requiere su publicación para su validez» donde la norma dispone «no altera la competencia».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La suplencia requiere su publicación para su validez» no expresa la regla que el artículo 13 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regulación del artículo 13 comprende «En las resoluciones y actos que se dicten mediante suplencia se hará constar esa circunstancia» y «En las resoluciones y actos que se firmen mediante suplenc ia se hará constar el titular del órgano en cuya suplencia…». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «En las resoluciones y actos que se dicten mediante suplencia se hará constar esa circunstancia», pero resulta incompleta porque también debe incluirse «En las resoluciones y actos que se firmen mediante suplenc ia se hará constar el titular del órgano en cuya suplencia se adoptan y…».",
        "b": "La alternativa B recoge «En las resoluciones y actos que se firmen mediante suplenc ia se hará constar el titular del órgano en cuya suplencia se adoptan y…», pero resulta incompleta porque también debe incluirse «En las resoluciones y actos que se dicten mediante suplencia se hará constar esa circunstancia»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 14 recoge tanto «Remitirá directamente las actuaciones al órgano competente» como «Deberá notificar esta circunstancia a los interesados». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Remitirá directamente las actuaciones al órgano competente», pero resulta incompleta porque también debe incluirse «Deberá notificar esta circunstancia a los interesados».",
        "b": "La alternativa B recoge «Deberá notificar esta circunstancia a los interesados», pero resulta incompleta porque también debe incluirse «Remitirá directamente las actuaciones al órgano competente»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 14 recoge las dos previsiones: «Podrán dirigirse al órgano que se encuentre conociendo de un asunto para que decline su competencia y remita las…» y «Podrán dirigirse al órgano que estimen competente para que requiera de inhibición al que esté conociendo del asunto». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Podrán dirigirse al órgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al órgano…», pero resulta incompleta porque también debe incluirse «Podrán dirigirse al órgano que estimen competente para que requiera de inhibición al que esté conociendo del asunto».",
        "b": "La alternativa B recoge «Podrán dirigirse al órgano que estimen competente para que requiera de inhibición al que esté conociendo del asunto», pero resulta incompleta porque también debe incluirse «Podrán dirigirse al órgano que se encuentre conociendo de un asunto para que decline su competencia y remita las actuaciones al órgano…»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 14, los conflictos de atribuciones sólo podrán suscitarse entre órganos de una misma Administración no relacionados jerárquicamente, y respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo. Por eso encaja «Sólo respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo».",
      "descartes": {
        "a": "En «Los conflictos de atribuci ones», la alternativa A introduce «podrán suscitarse entre órganos de una misma Administración relacionados jerárquicamente» donde la norma dispone «respecto a asuntos sobre los que no haya finalizado el procedimiento administrativo».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Sólo podrán suscitarse entre órganos de una misma Administración relacionados jerárquicamente» no expresa la regla que el artículo 14 aplica a «Los conflictos de atribuci ones»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-29-organizacion-administrativa",
  references: {
    "1": articleReference(12),
    "2": articleReference(12),
    "3": articleReference(12),
    "4": articleReference(12),
    "5": articleReference(12),
    "6": articleReference([12, 13]),
    "7": articleReference(13),
    "8": articleReference(13),
    "9": articleReference(13),
    "10": articleReference(13),
    "11": articleReference(14),
    "12": articleReference(14),
    "13": articleReference(14),
  },
});
