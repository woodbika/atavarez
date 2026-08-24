import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-de-la-ley-40-2015-numero-2-articulos-8-y-9",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 8, la competencia es irrenunciable y se ejercerá por los órganos administrativos que la tengan atribuida como propia, salvo los casos de delegación o avocación, cuando se efectúen en los términos previstos en esta u otras leyes. Por eso encaja «Avocación y delegación».",
      "descartes": {
        "b": "En «La competencia es irrenunciable y se ejerce por órganos que los tengan como propias salvo», la alternativa B introduce «Encomienda de gestión y avocación» donde la norma dispone «Avocación y delegación».",
        "c": "En «La competencia es irrenunciable y se ejerce por órganos que los tengan como propias salvo», la alternativa C introduce «Encomienda de gestión y suplencia» donde la norma dispone «Avocación y delegación»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El artículo 8 recoge tanto «La Encomienda de gestión y la suplencia» como «la delegación de firma y la delegación de competencias». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «La Encomienda de gestión y la suplencia», pero resulta incompleta porque también debe incluirse «la delegación de firma y la delegación de competencias».",
        "b": "La alternativa B recoge «la delegación de firma y la delegación de competencias», pero resulta incompleta porque también debe incluirse «La Encomienda de gestión y la suplencia»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 8 dispone que se puede desconcentrar en otros órganos la titularidad y ejercicio de las competencias. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En el caso de la desconcentración», la alternativa A introduce «desconcentra en otros órganos únicamente el ejercicio de la competencia» donde la norma dispone «desconcentrar en otros órganos la titularidad y ejercicio de las competencias».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Se puede desconcentra en otros órganos únicamente el ejercicio de la competencia» no expresa la regla que el artículo 8 aplica a «En el caso de la desconcentración»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 8 establece que órganos jerárquicamente dependientes de los que desconcentran y en la misma administración. Esa previsión conduce a «órganos jerárquicamente dependientes de los que desconcentran y en la misma administración».",
      "descartes": {
        "b": "En «Si se da una desconcentración tiene que ser a favor de», la alternativa B introduce «dentro o fuera de» donde la norma dispone «y en».",
        "c": "En «Si se da una desconcentración tiene que ser a favor de», la alternativa C introduce «No tiene por que ser a favor de órganos jerárquicamente dependientes» donde la norma dispone «órganos jerárquicamente dependientes de los que desconcentran y en la misma administración»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 8, los órganos inferiores por razón de la materia y territorio. Por eso encaja «Los órganos inferiores por razón de la materia y territorio».",
      "descartes": {
        "a": "En «Si alguna norma atribuye una competencia a una administración sin especificar a que órgano corresponde la…», la alternativa A introduce «superiores» donde la norma dispone «inferiores».",
        "c": "En «Si alguna norma atribuye una competencia a una administración sin especificar a que órgano corresponde la…», la alternativa C introduce «que se determinen para cada caso» donde la norma dispone «inferiores por razón de la materia y territorio»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 8 es si alguna disposición atribuye la competencia a una Administración. En este supuesto se ajusta a «Corresponderá al superior jerárquico común de ellos».",
      "descartes": {
        "a": "En «Si fuesen en el caso de la pregunta anterior varios órganos», la alternativa A introduce «inferior» donde la norma dispone «superior».",
        "c": "En «Si fuesen en el caso de la pregunta anterior varios órganos», la alternativa C introduce «que determinen para cada caso» donde la norma dispone «superior jerárquico común de ellos»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 9 dispone que delegación de competencias. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «La delegación de competencias», la alternativa B introduce «Puede hacerse dentro de la misma administración o a favor de otra» donde la norma dispone «Tiene que efectuarse dentro de la misma».",
        "c": "En «La delegación de competencias», la alternativa C introduce «La ley no señala nada al respecto» donde la norma dispone «Tiene que efectuarse dentro de la misma administración»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 9 establece que no tienen por qué ser jerárquicamente dependientes. Esa previsión conduce a «No tienen por qué ser jerárquicamente dependientes».",
      "descartes": {
        "a": "La alternativa A vincula «Se hace entre órganos» con «Jerárquicamente dependientes»; el artículo 9 lo relaciona con «No tienen por qué ser jerárquicamente dependientes».",
        "c": "En «Se hace entre órganos», la alternativa C introduce «La ley no señala nada al respecto» donde la norma dispone «No tienen por qué ser jerárquicamente dependientes»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 9 recoge las dos previsiones: «Entidades de derecho público vinculadas o dependientes de aquéllas» y «Otros órganos». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Entidades de derecho público vinculadas o dependientes de aquéllas», pero resulta incompleta porque también debe incluirse «Otros órganos».",
        "b": "La alternativa B recoge «Otros órganos», pero resulta incompleta porque también debe incluirse «Entidades de derecho público vinculadas o dependientes de aquéllas»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 9 es la adopción de disposiciones de carácter general. En este supuesto se ajusta a «La adopción de disposiciones de carácter general».",
      "descartes": {
        "a": "En «No se puede delegar», la alternativa A introduce «actos administrativos» donde la norma dispone «disposiciones de carácter general».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La adopción de actos administrativos» no expresa la regla que el artículo 9 aplica a «No se puede delegar»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 9 dispone que la resolución de recursos en los órganos administrativos que hayan dictado los actos objeto de recurso. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «No se puede delegar», la alternativa A introduce «de recursos» donde la norma dispone «del recurso en el órgano que dicto el acto que se está recurriendo».",
        "b": "En «No se puede delegar», la alternativa B introduce «de alzada» donde la norma dispone «en el órgano que dicto el acto que se está recurriendo»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 9 recoge las dos previsiones: «Los asuntos que se refieran a relaciones con la Jefatura del Estado» y «Los asuntos que se refieran a relaciones con las Presidencias de los Consejos de Gobierno de las Comunidades Autónomas…». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Los asuntos que se refieran a relaciones con la Jefatura del Estado», pero resulta incompleta porque también debe incluirse «Los asuntos que se refieran a relaciones con las Presidencias de los Consejos de Gobierno de las Comunidades Autónomas y las Asambleas…».",
        "b": "La alternativa B recoge «Los asuntos que se refieran a relaciones con las Presidencias de los Consejos de Gobierno de las Comunidades Autónomas y las Asambleas…», pero resulta incompleta porque también debe incluirse «Los asuntos que se refieran a relaciones con la Jefatura del Estado»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 9, las materias en que así se determine por norma con rango de Ley. Por eso encaja «Las materias en que así se determine por norma con rango de ley».",
      "descartes": {
        "b": "En «No se puede delegar», la alternativa B introduce «de rango reglamentario» donde la norma dispone «con rango de ley».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Las materias en que así se determine por norma de rango reglamentario» no expresa la regla que el artículo 9 aplica a «No se puede delegar»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 9 recoge tanto «En el Boletín Oficial que corresponda según la administración delegante y el ámbito territorial competencia del órgano…» como «En el BOE, en el de la Comunidad Autónoma o en el de la provincia». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «En el Boletín Oficial que corresponda según la administración delegante y el ámbito territorial competencia del órgano delegante», pero resulta incompleta porque también debe incluirse «En el BOE, en el de la Comunidad Autónoma o en el de la provincia».",
        "b": "La alternativa B recoge «En el BOE, en el de la Comunidad Autónoma o en el de la provincia», pero resulta incompleta porque también debe incluirse «En el Boletín Oficial que corresponda según la administración delegante y el ámbito territorial competencia del órgano delegante»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 9 dispone que las resoluciones administrativas que se adopten por delegación indicarán expresamente esta circunstancia y se considerarán dictadas por el órgano delegante. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En este supuesto, la alternativa B introduce «se considerarán adoptada por el órgano delegado» donde la norma dispone «indicarán tal circunstancia».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Las resoluciones adoptadas por delegación se considerarán adoptada por el órgano delegado» no expresa la regla que el artículo 9 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 9 establece que salvo autorización expresa de una Ley, no podrán delegarse las competencias que se ejerzan por delegación. Esa previsión conduce a «Autorización expresa de la ley».",
      "descartes": {
        "a": "En «No podrán delegarse las competencias que se ejerzan por delegación, salvo», la alternativa A introduce «del órgano delegante» donde la norma dispone «de la ley».",
        "c": "En «No podrán delegarse las competencias que se ejerzan por delegación, salvo», la alternativa C introduce «del órgano superior al delegante» donde la norma dispone «de la ley»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 9, como trámite preceptivo; la emisión de un dictamen o informe; no podrá delegarse la competencia para resolver un procedimiento una vez que en el correspondiente procedimiento se haya emitido un dictamen o informe preceptivo acerca del mismo. Por eso encaja «No constituye impedimento para la delegación, siempre que no se haya emitido».",
      "descartes": {
        "a": "En «El hecho de que en un procedimiento se exija como trámite preceptivo un dictamen o informe», la alternativa A introduce «Constituye impedimento para la delegación» donde la norma dispone «No constituye impedimento para la delegación, siempre que no se haya emitido».",
        "b": "En «El hecho de que en un procedimiento se exija como trámite preceptivo un dictamen o informe», la alternativa B introduce «ya» donde la norma dispone «no»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 9 es la delegación será revocable en cualquier momento por el órgano que la haya conferido. En este supuesto se ajusta a «En cualquier momento».",
      "descartes": {
        "a": "En «La delegación será revocable», la alternativa A introduce «Antes de la propuesta de resolución» donde la norma dispone «En cualquier momento».",
        "b": "En «La delegación será revocable», la alternativa B introduce «Antes de finalizar la instrucción» donde la norma dispone «En cualquier momento»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 9 dispone que la delegación deberá ser previamente aprobada por los órganos de los que dependan el órgano delegante y el órgano delegado, o aceptada por este último cuando sea el órgano máximo de dirección del Organismo público o Entidad vinculado o dependiente. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «La puede revocar», la alternativa B introduce «recibió» donde la norma dispone «confirió».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El órgano que la recibió» no expresa la regla que el artículo 9 aplica a «La puede revocar»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 9 establece que salvo autorización expresa de una Ley. Esa previsión conduce a «El mismo».",
      "descartes": {
        "b": "En «La delegación de una competencia de un órgano colegiado requiere para su ejercicio ordinario un quórum…», la alternativa B introduce «Uno mayor» donde la norma dispone «El mismo».",
        "c": "En «La delegación de una competencia de un órgano colegiado requiere para su ejercicio ordinario un quórum…», la alternativa C introduce «Uno menor» donde la norma dispone «El mismo»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-29-organizacion-administrativa",
  references: {
    "1": articleReference(8),
    "2": articleReference(8),
    "3": articleReference(8),
    "4": articleReference(8),
    "5": articleReference(8),
    "6": articleReference(8),
    "7": articleReference(9),
    "8": articleReference(9),
    "9": articleReference(9),
    "10": articleReference(9),
    "11": articleReference(9),
    "12": articleReference(9),
    "13": articleReference(9),
    "14": articleReference(9),
    "15": articleReference(9),
    "16": articleReference(9),
    "17": articleReference(9),
    "18": articleReference(9),
    "19": articleReference(9),
    "20": articleReference(9),
  },
});
