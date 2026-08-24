import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-70-a-74",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 71, el procedimiento, sometido al principio de celeridad, se impulsará de oficio en todos sus trámites y a través de medios electrónicos, respetando los principios de transparencia y publicidad. Por eso encaja «Se impulsará de oficio en todos sus trámites».",
      "descartes": {
        "a": "La alternativa A vincula «El procedimiento, sometido al criterio de celeridad» con «Se impulsará de oficio en todos sus trámites, salvo el de audiencia»; el artículo 71 lo relaciona con «Se impulsará de oficio en todos sus trámites».",
        "b": "En «El procedimiento, sometido al criterio de celeridad», la alternativa B introduce «únicamente los actos de instrucción» donde la norma dispone «en todos sus trámites»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 71 es en el despacho de los expedientes se guardará el orden riguroso de incoación en asuntos de homogénea naturaleza, salvo que por el titular de la unidad administrativa se dé orden motivada en contrario, de la que quede constancia. En este supuesto se ajusta a «El orden riguroso de incoación cuando sean asuntos de homogénea naturaleza».",
      "descartes": {
        "a": "En «En el despacho de expedientes se guardará», la alternativa A introduce «sean asuntos de homogénea naturaleza o no» donde la norma dispone «cuando sean asuntos de homogénea naturaleza».",
        "b": "En «En el despacho de expedientes se guardará», la alternativa B introduce «heterogénea» donde la norma dispone «homogénea»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 71 dispone que en el despacho de los expedientes se guardará el orden riguroso de incoación en asuntos de homogénea naturaleza, salvo que por el titular de la unidad administrativa se dé orden motivada en contrario, de la que quede constancia. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Salvo que», la alternativa B introduce «Los asuntos no sean de homogénea naturaleza» donde la norma dispone «El titular de la unidad administrativa de orden motivada en contrario».",
        "c": "En «Salvo que», la alternativa C introduce «órgano superior» donde la norma dispone «titular de la unidad administrativa»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 71 establece que el incumplimiento de lo dispuesto en el párrafo anterior dará lugar a la exigencia de responsabilidad disciplinaria del infractor y, en su caso, será causa de remoción del puesto de trabajo. Esa previsión conduce a «Dará lugar a responsabilidad disciplinaria, y en su caso, será causa de remoción del puesto de trabajo».",
      "descartes": {
        "a": "En «El incumplimiento de lo anterior», la alternativa A introduce «o» donde la norma dispone «y».",
        "c": "En «El incumplimiento de lo anterior», la alternativa C introduce «la remoción del puesto de trabajo siempre» donde la norma dispone «responsabilidad disciplinaria, y en su caso, será causa de remoción del puesto de trabajo»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 72 recoge tanto «Los trámites que permiten una impulsión simultánea» como «Los trámites que no exigen un cumplimiento sucesivo». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Los trámites que permiten una impulsión simultánea», pero resulta incompleta porque también debe incluirse «Los trámites que no exigen un cumplimiento sucesivo».",
        "b": "La alternativa B recoge «Los trámites que no exigen un cumplimiento sucesivo», pero resulta incompleta porque también debe incluirse «Los trámites que permiten una impulsión simultánea»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 72 es al solicitar los trámites que deban ser cumplidos por otros órganos, deberá consignarse en la comunicación cursada el plazo legal establecido al efecto. En este supuesto se ajusta a «El plazo legal que tiene para efectuarlo».",
      "descartes": {
        "a": "En «Al solicitar los trámites que deban ser cumplidos por otros órganos, deberá ponerse en la comunicación», la alternativa A introduce «que le da dicho órgano solicitante para hacerlo» donde la norma dispone «legal que tiene para efectuarlo».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «El plazo legal que tiene para efectuarlo» sí está respaldada por el artículo 72."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 73 dispone que los trámites que deban ser cumplimentados por los interesados deberán realizarse en el plazo de diez días a partir del siguiente al de la notificación del correspondiente acto, salvo en el caso de que en la norma correspondiente se fije plazo distinto. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «El plazo que tiene un interesado para efectuar un trámite desde la notificación del acto es de», la alternativa A introduce «naturales, siempre» donde la norma dispone «hábiles, con carácter general».",
        "b": "En «El plazo que tiene un interesado para efectuar un trámite desde la notificación del acto es de», la alternativa B introduce «siempre» donde la norma dispone «con carácter general»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 73 establece que los trámites que deban ser cumplimentados por los interesados deberán realizarse en el plazo de diez días a partir del siguiente al de la notificación del correspondiente acto, salvo en el caso de que en la norma correspondiente se fije plazo distinto. Esa previsión conduce a «10 días hábiles, siempre».",
      "descartes": {
        "a": "En «El plazo para subsanar en su caso es de», la alternativa A introduce «naturales,» donde la norma dispone «hábiles,».",
        "c": "En «El plazo para subsanar en su caso es de», la alternativa C introduce «con carácter general» donde la norma dispone «siempre»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 73, a los interesados que no cumplan lo dispuesto en los apartados anteriores, se les podrá declarar decaídos en su derecho al trámite correspondiente. Por eso encaja «Se le decae el derecho a la realización de dicho trámite».",
      "descartes": {
        "a": "En «Si no efectúan en el trámite o no subsanan el defecto», la alternativa A introduce «les da por desistidos de su solicitud» donde la norma dispone «le decae el derecho a la realización de dicho trámite».",
        "b": "En «Si no efectúan en el trámite o no subsanan el defecto», la alternativa B introduce «les desestima la solicitud» donde la norma dispone «le decae el derecho a la realización de dicho trámite»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regulación del artículo 73 comprende «Si lo efectúa antes de la notificación de la resolución donde se les comunica que se ha terminado el plazo» y «Si lo efectúa el mismo día de la notificación de dicha resolución». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Si lo efectúa antes de la notificación de la resolución donde se les comunica que se ha terminado el plazo», pero resulta incompleta porque también debe incluirse «Si lo efectúa el mismo día de la notificación de dicha resolución».",
        "b": "La alternativa B recoge «Si lo efectúa el mismo día de la notificación de dicha resolución», pero resulta incompleta porque también debe incluirse «Si lo efectúa antes de la notificación de la resolución donde se les comunica que se ha terminado el plazo»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 74 dispone que las cuestiones incidentales que se susciten en el procedimiento, incluso las que se refieran a la nulidad de actuaciones, no suspenderán la tramitación del mismo, salvo la recusación. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «Las cuestiones incidentales» con «Paralizan el procedimiento, salvo la recusación»; el artículo 74 lo relaciona con «No paralizan el procedimiento, salvo la recusación».",
        "b": "En «Las cuestiones incidentales», la alternativa B introduce «en ningún caso el procedimiento» donde la norma dispone «el procedimiento, salvo la recusación»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 74 establece que las cuestiones incidentales que se susciten en el procedimiento, incluso las que se refieran a la nulidad de actuaciones, no suspenderán la tramitación del mismo, salvo la recusación. Esa previsión conduce a «No paralizan el procedimiento».",
      "descartes": {
        "b": "La alternativa B vincula «Las cuestiones incidentales que se refieran a la nulidad de las actuaciones» con «Paralizan el procedimiento»; el artículo 74 lo relaciona con «No paralizan el procedimiento».",
        "c": "En «Las cuestiones incidentales que se refieran a la nulidad de las actuaciones», la alternativa C introduce «Paralizan el procedimiento a discrecionalidad de la Administración Pública que lo tramita» donde la norma dispone «No paralizan el procedimiento»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 70, cuando en virtud de una norma sea preciso remitir el expediente electrónico. Por eso encaja «El Esquema Nacional de Interoperabilidad y en las Normas Técnicas de Interoperabilidad».",
      "descartes": {
        "b": "En «Cuando en virtud de una norma sea preciso remitir el expediente electrónico», la alternativa B introduce «Seguridad y en las Normas Técnicas de Seguridad» donde la norma dispone «Interoperabilidad y en las Normas Técnicas de Interoperabilidad».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «El Esquema Nacional de Interoperabilidad y en las Normas Técnicas de Interoperabilidad» sí está respaldada por el artículo 70."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 70 es y se enviará completo; autentificado y acompañado de un índice; asimismo autentificado. En este supuesto se ajusta a «Completo, foliado, autentificado y acompañado de un índice autentificado de los documentos que contenga».",
      "descartes": {
        "a": "La alternativa A vincula «Y se enviará» con «Completo, foliado, autentificado y acompañado de un índice, autentificado o no, de los documentos que contenga»; el artículo 70 lo relaciona con «Completo, foliado, autentificado y acompañado de un índice autentificado de los documentos que contenga».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Completo, foliado, autentificado y acompañado de un índice autentificado de los documentos que contenga» sí está respaldada por el artículo 70."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 70 dispone que la autenticación del índice garantizará la integridad e inmutabilidad del expediente electrónico generado desde el momento de su firma y permitirá su recuperación siempre que sea preciso. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula este supuesto con «No es admisible que un mismo documento forme parte de distintos expedientes electrónicos»; el artículo 70 lo relaciona con «La autenticación del índice garantizará la integridad e inmutabilidad del expediente electrónico generado desde el momento de su firma y…».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «No es admisible que un mismo documento forme parte de distintos expedientes electrónicos» no expresa la regla que el artículo 70 aplica a este supuesto."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(71),
    "2": articleReference(71),
    "3": articleReference(71),
    "4": articleReference(71),
    "5": articleReference(72),
    "6": articleReference(72),
    "7": articleReference(73),
    "8": articleReference(73),
    "9": articleReference(73),
    "10": articleReference(73),
    "11": articleReference(74),
    "12": articleReference(74),
    "13": articleReference(70),
    "14": articleReference(70),
    "15": articleReference(70),
  },
});
