import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-40-2015-articulos-23-y-24",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 23 comprende «Las autoridades» y «El personal». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Las autoridades», pero resulta incompleta porque también debe incluirse «El personal».",
        "b": "La alternativa B recoge «El personal», pero resulta incompleta porque también debe incluirse «Las autoridades»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 23 obliga a quien advierta una causa de abstención a comunicarla a su superior inmediato. Ese órgano valora después las actuaciones necesarias.",
      "descartes": {
        "a": "En «¿A quién comunicarán que se dan dichas circunstancias», la alternativa A introduce «interesado» donde la norma dispone «órgano superior».",
        "c": "En «¿A quién comunicarán que se dan dichas circunstancias», la alternativa C introduce «Presidente de la Corporación» donde la norma dispone «órgano superior»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 23 dispone que la actuación de autoridades y personal al servicio de las Administraciones Públicas en los que concurran motivos de abstención no implicará, necesariamente, y en todo caso, la invalidez de los actos en que hayan intervenido. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La actuación por parte de quien incurre en una causa de abstención», la alternativa A introduce «Conllevará en todo caso» donde la norma dispone «No necesariamente conlleva».",
        "b": "En «La actuación por parte de quien incurre en una causa de abstención», la alternativa B introduce «conlleva en ningún caso» donde la norma dispone «necesariamente conlleva»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "La regulación del artículo 23 comprende «Cuando el órgano superior tiene conocimiento de que alguien incurre en una causa de abstención le sustituye» y «Cuando alguien actúe incurriendo en una causa de abstención podrá tener responsabilidad por ello». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando el órgano superior tiene conocimiento de que alguien incurre en una causa de abstención le sustituye», pero resulta incompleta porque también debe incluirse «Cuando alguien actúe incurriendo en una causa de abstención podrá tener responsabilidad por ello».",
        "b": "La alternativa B recoge «Cuando alguien actúe incurriendo en una causa de abstención podrá tener responsabilidad por ello», pero resulta incompleta porque también debe incluirse «Cuando el órgano superior tiene conocimiento de que alguien incurre en una causa de abstención le sustituye»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 24, en los casos previstos en el artículo anterior, podrá promoverse recusación por los interesados en cualquier momento de la tramitación del procedimiento. Por eso encaja «Los interesados».",
      "descartes": {
        "a": "En «La recusación es planteada por», la alternativa A introduce «Autoridades y personal bajo cuya responsabilidad se tramita el procedimiento» donde la norma dispone «Los interesados».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Autoridades y personal bajo cuya responsabilidad se tramita el procedimiento» no expresa la regla que el artículo 24 aplica a «La recusación es planteada por»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 24 es en los casos previstos en el artículo anterior, podrá promoverse recusación por los interesados en cualquier momento de la tramitación del procedimiento. En este supuesto se ajusta a «En cualquier momento».",
      "descartes": {
        "b": "En «Lo pueden plantear», la alternativa B introduce «Antes del trámite de audiencia» donde la norma dispone «En cualquier momento».",
        "c": "En «Lo pueden plantear», la alternativa C introduce «Durante la instrucción» donde la norma dispone «En cualquier momento»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 24 dispone que la recusación se planteará por escrito en el que se expresará la causa o causas en que se funda. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Se tiene que plantear», la alternativa A introduce «Apud Apta» donde la norma dispone «escrito».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Por Apud Apta» no expresa la regla que el artículo 24 aplica a «Se tiene que plantear»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 24 establece que en el día siguiente el recusado manifestará a su inmediato superior si se da o no en él la causa alegada. En el primer caso, si el superior aprecia la concurrencia de la causa de recusación, acordará su sustitución acto seguido. Esa previsión conduce a «En el día siguiente a que se plantee la recusación».",
      "descartes": {
        "a": "En «El recusado tendrá que señalar si concurren en él o no las causas de abstención alegadas», la alternativa A introduce «El mismo día que se plantea» donde la norma dispone «En el día siguiente a que se plantee».",
        "c": "En «El recusado tendrá que señalar si concurren en él o no las causas de abstención alegadas», la alternativa C introduce «Dentro de los tres días siguientes» donde la norma dispone «En el día siguiente»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 24, en el día siguiente el recusado manifestará a su inmediato superior si se da o no en él la causa alegada. En el primer caso, si el superior aprecia la concurrencia de la causa de recusación, acordará su sustitución acto seguido. Por eso encaja «El órgano superior decretará su sustitución».",
      "descartes": {
        "a": "En «En el caso de que señale que sí concurren dichas circunstancias alegadas por el recurrente», la alternativa A introduce «interesado tendrá derecho a una indemnización» donde la norma dispone «órgano superior decretará su sustitución».",
        "b": "En «En el caso de que señale que sí concurren dichas circunstancias alegadas por el recurrente», la alternativa B introduce «recusado tendrá responsabilidad» donde la norma dispone «órgano superior decretará su sustitución»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 24 es en el día siguiente el recusado manifestará a su inmediato superior si se da o no en él la causa alegada. En el primer caso, si el superior aprecia la concurrencia de la causa de recusación, acordará su sustitución acto seguido. En este supuesto se ajusta a «Decidirá sobre ello su órgano superior».",
      "descartes": {
        "a": "En «En el caso de que señale que no concurren dichas circunstancias alegadas por el recurrente», la alternativa A introduce «la jurisdicción contenciosa-administrativa» donde la norma dispone «su órgano superior».",
        "b": "En «En el caso de que señale que no concurren dichas circunstancias alegadas por el recurrente», la alternativa B introduce «si se abstiene o no él mismo» donde la norma dispone «sobre ello su órgano superior»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 24 concede tres días al superior para resolver la recusación cuando la persona recusada niega la causa alegada. El plazo de un día corresponde a la manifestación previa del recusado, no a la decisión del superior.",
      "descartes": {
        "a": "Para «Para ello hay», la alternativa A utiliza «1», pero la previsión aplicable fija «3».",
        "b": "Para «Para ello hay», la alternativa B utiliza «2», pero la previsión aplicable fija «3»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 24 establece que contra las resoluciones adoptadas en esta materia no cabrá recurso, sin perjuicio de la posibilidad de alegar la recusación al interponer el recurso que proceda contra el acto que ponga fin al procedimiento. Esa previsión conduce a «No cabe recurso alguno».",
      "descartes": {
        "a": "En «Contra la resolución de una recusación», la alternativa A introduce «Cabe recurso potestativo de reposición» donde la norma dispone «No cabe recurso alguno».",
        "b": "En «Contra la resolución de una recusación», la alternativa B introduce «Cabe recurso de alzada» donde la norma dispone «No cabe recurso alguno»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-31-procedimiento-administrativo",
  references: {
    "1": articleReference(23),
    "2": articleReference(23),
    "3": articleReference(23),
    "4": articleReference(23),
    "5": articleReference(24),
    "6": articleReference(24),
    "7": articleReference(24),
    "8": articleReference(24),
    "9": articleReference(24),
    "10": articleReference(24),
    "11": articleReference(24),
    "12": articleReference(24),
  },
});
