import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-45-y-46",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 45 comprende «Así lo establezcan las normas reguladoras de cada procedimiento» y «Lo aconsejen razones de interés público apreciadas por el órgano competente». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Así lo establezcan las normas reguladoras de cada procedimiento», pero resulta incompleta porque también debe incluirse «Lo aconsejen razones de interés público apreciadas por el órgano competente».",
        "b": "La alternativa B recoge «Lo aconsejen razones de interés público apreciadas por el órgano competente», pero resulta incompleta porque también debe incluirse «Así lo establezcan las normas reguladoras de cada procedimiento»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 45 es cuando la Administración estime que la notificación efectuada a un solo interesado es insuficiente para garantizar la notificación a todos, siendo, en este último caso, adicional a la individualmente realizada. En este supuesto se ajusta a «Cuando la Administración estime que la notificación efectuada a un solo interesado es insuficiente para garantizar la notificación a todos».",
      "descartes": {
        "a": "Para «El acto será objeto de publicación», la alternativa A utiliza «una», pero la previsión aplicable fija «un».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Cuando el acto tenga por destinatario a una pluralidad determinada de personas» no expresa la regla que el artículo 45 aplica a «El acto será objeto de publicación»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 45 dispone que cuando se trate de actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo. En este caso. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Habrá publicación», la alternativa A introduce «pro cedimiento selectivo, no siendo necesaria en otro tipo de procedimientos de concurrencia competitiva» donde la norma dispone «procedimiento selectivo o de concurrencia competitiva de cualquier tipo».",
        "c": "En «Habrá publicación», la alternativa C introduce «procedimiento de co ncurrencia competitiva siempre que no se trate de un proceso selectivo» donde la norma dispone «actos integrantes de un procedimiento selectivo o de concurrencia competitiva de cualquier tipo»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 45 establece que en este caso, la convocatoria del procedimiento deberá indicar el medio donde se efectuarán las sucesivas publicaciones, careciendo de validez las que se lleven a cabo en lugares distintos. Esa previsión conduce a «Deberá indicar el medio donde se efectuarán las sucesivas publicaciones».",
      "descartes": {
        "b": "La alternativa B vincula «La convocatoria del procedimiento selectivo» con «Tendrán validez las que se lleven a cabo en lugares distintos a lo s señalados en la convocatoria siempre que se admitan como medios…»; el artículo 45 lo relaciona con «Deberá indicar el medio donde se efectuarán las sucesivas publicaciones».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Tendrán validez las que se lleven a cabo en lugares distintos a lo s señalados en la convocatoria siempre que…» no expresa la regla que el artículo 45 aplica a «La convocatoria del procedimiento selectivo»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 45 exige que la publicación reúna los mismos elementos que una notificación y remite a los efectos previstos para las omisiones de requisitos. Las dos afirmaciones recogen esas reglas complementarias.",
      "descartes": {
        "a": "La alternativa A recoge «La publicación de un acto deberá contener los mismos elementos que las notificaciones», pero resulta incompleta porque también debe incluirse «La publicación que».",
        "b": "La alternativa B recoge «La publicación que», pero resulta incompleta porque también debe incluirse «La publicación de un acto deberá contener los mismos elementos que las notificaciones»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 45 recoge las dos previsiones: «Podrán publicarse de forma conjunta los aspectos coincidentes» y «Se especificarán solamente los aspectos individuales de cada acto». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Podrán publicarse de forma conjunta los aspectos coincidentes», pero resulta incompleta porque también debe incluirse «Se especificarán solamente los aspectos individuales de cada acto».",
        "b": "La alternativa B recoge «Se especificarán solamente los aspectos individuales de cada acto», pero resulta incompleta porque también debe incluirse «Podrán publicarse de forma conjunta los aspectos coincidentes»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 45 dispone que la publicación de los actos se realizará en el diario oficial que corresponda, según cual sea la Administración de la que proceda el acto a notificar. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «La publicación de los actos deberá realizarse en», la alternativa B introduce «Tablones de anuncios o edictos» donde la norma dispone «El diario oficial que corresponda, según cuál sea la Administración de la que proceda el acto a notificar».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Tablones de anuncios o edictos» no expresa la regla que el artículo 45 aplica a «La publicación de los actos deberá realizarse en»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 45 establece que sin perjuicio de lo dispuesto en el artículo 44, la publicación de actos y comunicaciones que, por disposición legal o reglamentaria deba practicarse en tablón de anuncios o edictos, se entenderá cumplida por su publicación en el Diario oficial correspondiente. Esa previsión conduce a «Podrá hacerse en su sustitución una publicación en el diario oficial correspondiente».",
      "descartes": {
        "b": "En «Cuando una disposición legal o reglamentaria exija la publicación en un Tablón de anuncios o edictos», la alternativa B introduce «No podrá sustituirse por» donde la norma dispone «Podrá hacerse en su sustitución».",
        "c": "En «Cuando una disposición legal o reglamentaria exija la publicación en un Tablón de anuncios o edictos», la alternativa C introduce «Ninguna disposición legal o reglamentaria exige hoy publicaciones en tablones de anuncios» donde la norma dispone «Podrá hacerse en su sustitución una publicación en el diario oficial correspondiente»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 46 recoge las dos previsiones: «Cuando la notificación se efectúe pro medio de anuncios» y «Cuando exista una publicación de un acto». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando la notificación se efectúe pro medio de anuncios», pero resulta incompleta porque también debe incluirse «Cuando exista una publicación de un acto».",
        "b": "La alternativa B recoge «Cuando exista una publicación de un acto», pero resulta incompleta porque también debe incluirse «Cuando la notificación se efectúe pro medio de anuncios»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 46 es si el órgano competente apreciase que la notificación por medio de anuncios o la publicación de un acto lesiona derechos o intereses legítimos. En este supuesto se ajusta a «Se limitará a publicar en el Diario oficial que corresponda una somera indicación del contenido del acto y del lugar donde los interesados podrán comparecer».",
      "descartes": {
        "b": "La alternativa B vincula «En dichos casos» con «No se podrá hacer ninguna publicación debiendo hacerse una notificación en papel o electrónica»; el artículo 46 lo relaciona con «en el plazo que se establezca».",
        "c": "Para «En dichos casos», la alternativa C utiliza «un / un», pero la previsión aplicable fija «una»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 46 dispone que adicionalmente y de manera facultativa, las Administraciones podrán establecer otras formas de notificación complementarias a través de los restantes medios de difusión que no excluirán la obligación de publicar en el correspondiente Diario oficial. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Las administraciones podrán establecer otras formas de notificación complementarias a través de los restantes…», la alternativa A introduce «manera preceptiva» donde la norma dispone «forma facultativa».",
        "b": "En «Las administraciones podrán establecer otras formas de notificación complementarias a través de los restantes…», la alternativa B introduce «Sustitutiva y de manera preceptiva» donde la norma dispone «Adicionalmente y de forma facultativa»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-30-acto-administrativo",
  references: {
    "1": articleReference(45),
    "2": articleReference(45),
    "3": articleReference(45),
    "4": articleReference(45),
    "5": articleReference(45),
    "6": articleReference(45),
    "7": articleReference(45),
    "8": articleReference(45),
    "9": articleReference(46),
    "10": articleReference(46),
    "11": articleReference(46),
  },
});
