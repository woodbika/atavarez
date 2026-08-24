import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulo-83",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 83, el órgano competente para resolver. Por eso encaja «El órgano competente para resolver».",
      "descartes": {
        "a": "En «¿Quién abre el trámite de información pública», la alternativa A introduce «la instrucción» donde la norma dispone «resolver».",
        "b": "En «¿Quién abre el trámite de información pública», la alternativa B introduce «la tramitación» donde la norma dispone «resolver»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 83 es el órgano al que corresponda la resolución del procedimiento, cuando la naturaleza de éste lo requiera, podrá acordar un período de información pública. En este supuesto se ajusta a «Cuando la naturaleza del procedimiento lo requiera».",
      "descartes": {
        "a": "En «¿Cuándo se abre dicho trámite», la alternativa A introduce «Siempre» donde la norma dispone «Cuando la naturaleza del procedimiento lo requiera».",
        "c": "En «¿Cuándo se abre dicho trámite», la alternativa C introduce «Dependiendo del número de interesados» donde la norma dispone «Cuando la naturaleza del procedimiento lo requiera»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 83 dispone que a tal efecto, se publicará un anuncio en el Diario oficial correspondiente a fin de que cualquier persona física o jurídica pueda examinar el expediente, o la parte del mismo que se acuerde. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «A tal efecto se anunciará», la alternativa A introduce «y» donde la norma dispone «o».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «En el BOE, de la Comunidad Autónoma o en el de la provincia respectiva, para examinar el procedimiento, o la parte del mismo que se acuerde» sí está respaldada por el artículo 83."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "La regulación del artículo 83 comprende «Cualquier persona física» y «Cualquier persona jurídica». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Cualquier persona física», pero resulta incompleta porque también debe incluirse «Cualquier persona jurídica».",
        "b": "La alternativa B recoge «Cualquier persona jurídica», pero resulta incompleta porque también debe incluirse «Cualquier persona física»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 83, la incomparecencia en este trámite no impedirá a los interesados interponer los recursos procedentes contra la resolución definitiva del procedimiento. Por eso encaja «No impedirá a los interesados interponer los recursos procedentes contra la resolución definitiva del procedimiento».",
      "descartes": {
        "a": "La alternativa A vincula «La incomparecencia en este trámite» con «Impedirá a los interesados interponer los recursos procedentes contra la resolución definitiva del procedimiento»; el artículo 83 lo relaciona con «No impedirá a los interesados interponer los recursos procedentes contra la resolución definitiva del procedimiento».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «No impedirá a los interesados interponer los recursos procedentes contra la resolución definitiva del procedimiento» sí está respaldada por el artículo 83."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 83 es el anuncio señalará el lugar de exhibición; y determinará el plazo para formular alegaciones; que en ningún caso podrá ser inferior a veinte días. En este supuesto se ajusta a «Que en ningún caso podrá ser inferior a veinte días».",
      "descartes": {
        "a": "En «El anuncio señalará el lugar de exhibición y determinará el plazo para formular alegaciones», la alternativa A introduce «superior» donde la norma dispone «inferior».",
        "b": "En «El anuncio señalará el lugar de exhibición y determinará el plazo para formular alegaciones», la alternativa B introduce «tendrá que ser de» donde la norma dispone «en ningún caso podrá ser inferior a»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 83 dispone que la comparecencia en el trámite de información pública no otorga, por sí misma, la condición de interesado. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «La comparecencia en el trámite de información pública» con «Otorga, por sí misma, la condición de interesado»; el artículo 83 lo relaciona con «No otorga, por sí misma, la condición de interesado».",
        "c": "En «La comparecencia en el trámite de información pública», la alternativa C introduce «Otorga la condición de interesado según lo que alegue» donde la norma dispone «No otorga, por sí misma, la condición de interesado»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 83 establece que no obstante, quienes presenten alegaciones u observaciones en este trámite tienen derecho a obtener de la Administración una respuesta razonada, que podrá ser común para todas aquellas alegaciones que planteen cuestiones sustancialmente iguales. Esa previsión conduce a «Tienen derecho a obtener de la Administración una respuesta razonada».",
      "descartes": {
        "a": "En «No obstante, quienes presente alegaciones u observaciones en este trámite», la alternativa A introduce «Adquieren la condición de interesado» donde la norma dispone «Tienen derecho a obtener de la Administración una respuesta razonada».",
        "c": "En «No obstante, quienes presente alegaciones u observaciones en este trámite», la alternativa C introduce «No tienen derecho a nada» donde la norma dispone «Tienen derecho a obtener de la Administración una respuesta razonada»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 83 permite a las Administraciones Públicas establecer otras formas, medios y cauces de participación ciudadana en la elaboración de disposiciones y actos administrativos.",
      "descartes": {
        "b": "En «¿Quién puede establecer otras formas», la alternativa B introduce «leyes» donde la norma dispone «Administraciones Públicas».",
        "c": "En «¿Quién puede establecer otras formas», la alternativa C introduce «El Estado» donde la norma dispone «Las Administraciones Públicas»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regulación del artículo 83 comprende «Directamente» y «A través de las organizaciones y asociaciones reconocidas por la ley». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Directamente», pero resulta incompleta porque también debe incluirse «A través de las organizaciones y asociaciones reconocidas por la ley».",
        "b": "La alternativa B recoge «A través de las organizaciones y asociaciones reconocidas por la ley», pero resulta incompleta porque también debe incluirse «Directamente»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(83),
    "2": articleReference(83),
    "3": articleReference(83),
    "4": articleReference(83),
    "5": articleReference(83),
    "6": articleReference(83),
    "7": articleReference(83),
    "8": articleReference(83),
    "9": articleReference(83),
    "10": articleReference(83),
  },
});
