import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-67-y-68",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El artículo 68 exige subsanar los defectos de la solicitud y aportar los documentos preceptivos que falten. La ausencia de documentos meramente facultativos no activa ese requerimiento.",
      "descartes": {
        "a": "En «No se da un plazo para subsanar», la alternativa A introduce «la solicitud tenga defectos» donde la norma dispone «falten documentos facultativos».",
        "b": "En «No se da un plazo para subsanar», la alternativa B introduce «preceptivos» donde la norma dispone «facultativos»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 68 es si la solicitud de iniciación no reúne los requisitos que señala el artículo 66; los que señala el artículo 67 u otros exigidos por la legislación específica aplicable; en un plazo de diez días. En este supuesto se ajusta a «10 días».",
      "descartes": {
        "a": "Para «En el caso de que se de un plazo para subsanar éste será de», la alternativa A utiliza «5», pero la previsión aplicable fija «10».",
        "c": "Para «En el caso de que se de un plazo para subsanar éste será de», la alternativa C utiliza «15», pero la previsión aplicable fija «10»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 68 dispone que si la solicitud de iniciación no reúne los requisitos que señala el artículo 66; en un plazo de diez días; subsane la falta o acompañe los documentos preceptivos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Dicho plazo se puede ampliar», la alternativa A introduce «la solicitud tenga defectos» donde la norma dispone «haya que aportar documentos de difícil obtención».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Cuando la solicitud tenga defectos» no expresa la regla que el artículo 68 aplica a «Dicho plazo se puede ampliar»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 68 establece que si la solicitud de iniciación no reúne los requisitos que señala el artículo 66; los que señala el artículo 67 u otros exigidos por la legislación específica aplicable; en un plazo de diez días. Esa previsión conduce a «Hasta 5 días más».",
      "descartes": {
        "a": "En «En el caso de que se pueda ampliar», la alternativa A introduce «Serán» donde la norma dispone «Hasta».",
        "c": "En «En el caso de que se pueda ampliar», la alternativa C introduce «Nunca cabe dicha ampliación» donde la norma dispone «Hasta 5 días más»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 68, si la solicitud de iniciación no reúne los requisitos que señala el artículo 66; los que señala el artículo 67 u otros exigidos por la legislación específica aplicable; se requerirá al interesado para que. Por eso encaja «Cuando se solicita una licencia».",
      "descartes": {
        "b": "Para «Se puede ampliar en el siguiente caso», la alternativa B utiliza «un», pero la previsión aplicable fija «una».",
        "c": "Para «Se puede ampliar en el siguiente caso», la alternativa C utiliza «un», pero la previsión aplicable fija «una»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 68 es se requerirá al interesado para que; en un plazo de diez días; previa resolución que deberá ser dictada en los términos previstos en el artículo 21. En este supuesto se ajusta a «Se le dará al interesado por desistido en sus peticiones, teniendo que haber resolución previa».",
      "descartes": {
        "a": "En «En el caso de que no se subsane en el plazo que señala la pregunta 16», la alternativa A introduce «El interesado deberá considerar desestimadas sus pretensiones» donde la norma dispone «Se le dará al interesado por desistido en sus peticiones, teniendo que haber resolución previa».",
        "b": "En «En el caso de que no se subsane en el plazo que señala la pregunta 16», la alternativa B introduce «sin necesidad de» donde la norma dispone «teniendo que haber»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 68 dispone que en los procedimientos iniciados a solicitud de los interesados, el órgano competente podrá recabar del solicitante la modificación o mejora voluntarias de los términos de aquélla. De ello se levantará acta sucinta, que se incorporará al procedimiento. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Las mejoras voluntarias se dan en los procedimientos», la alternativa A introduce «de oficio» donde la norma dispone «a instancia de parte».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Iniciados de oficio» no expresa la regla que el artículo 68 aplica a «Las mejoras voluntarias se dan en los procedimientos»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 68 establece que en los procedimientos iniciados a solicitud de los interesados, el órgano competente podrá recabar del solicitante la modificación o mejora voluntarias de los términos de aquélla. De ello se levantará acta sucinta, que se incorporará al procedimiento. Esa previsión conduce a «De las mejoras voluntarias».",
      "descartes": {
        "a": "En «Se levanta acta sucinta», la alternativa A introduce «subsanaciones obligatorias» donde la norma dispone «mejoras voluntarias».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «De las subsanaciones obligatorias» no expresa la regla que el artículo 68 aplica a «Se levanta acta sucinta»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 66 recoge las dos previsiones: «Los hechos, petición y razones de forma clara» y «Nombre y apellidos del solicitante». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Los hechos, petición y razones de forma clara», pero resulta incompleta porque también debe incluirse «Nombre y apellidos del solicitante».",
        "b": "La alternativa B recoge «Nombre y apellidos del solicitante», pero resulta incompleta porque también debe incluirse «Los hechos, petición y razones de forma clara»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 66 es nombre y apellidos del interesado y, en su caso, de la persona que lo represente. En este supuesto se ajusta a «En la solicitud debe constar el nombre y apellidos del solicitante y en su caso del representante».",
      "descartes": {
        "a": "En este supuesto, la alternativa A introduce «o» donde la norma dispone «y».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «En la solicitud debe constar el nombre y apellidos del solicitante y en su caso del representante» sí está respaldada por el artículo 66."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 66 recoge tanto «Las Administraciones Públicas podrán establecer modelos y sistemas de presentación masiva que permitan a los…» como «de uso obligatorio». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Las Administraciones Públicas podrán establecer modelos y sistemas de presentación masiva que permitan a los interesados presentar…», pero resulta incompleta porque también debe incluirse «de uso obligatorio».",
        "b": "La alternativa B recoge «de uso obligatorio», pero resulta incompleta porque también debe incluirse «Las Administraciones Públicas podrán establecer modelos y sistemas de presentación masiva que permitan a los interesados presentar…»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 66 recoge las dos previsiones: «Podrán incluir comprobaciones automáticas de la información aportada respecto de datos almacenados en sistemas propios…» y «Podrán ofrecer el formulario cumplimentado». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Podrán incluir comprobaciones automáticas de la información aportada respecto de datos almacenados en sistemas propios o…», pero resulta incompleta porque también debe incluirse «Podrán ofrecer el formulario cumplimentado».",
        "b": "La alternativa B recoge «Podrán ofrecer el formulario cumplimentado», pero resulta incompleta porque también debe incluirse «Podrán incluir comprobaciones automáticas de la información aportada respecto de datos almacenados en sistemas propios o…»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 66, cuando la Administración en un procedimiento concreto establezca expresamente modelos específicos de presentación de solicitudes, éstos serán de uso obligatorio por los interesados. Por eso encaja «Éstos serán de uso obligatorio por los interesados».",
      "descartes": {
        "b": "En «Cuando la administración en un procedimiento concreto establezca expresamente modelos específicos de…», la alternativa B introduce «voluntario» donde la norma dispone «obligatorio».",
        "c": "En «Cuando la administración en un procedimiento concreto establezca expresamente modelos específicos de…», la alternativa C introduce «Depende de lo que señale la administración que ha establecido dicho modelo específico» donde la norma dispone «Éstos serán de uso obligatorio por los interesados»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 68 es a estos efectos, se considerará como fecha de presentación de la solicitud aquella en la que haya sido realizada la subsanación. En este supuesto se ajusta a «Aquella en la que haya sido realizada la subsanación».",
      "descartes": {
        "a": "En «Cuando alguien tuviese obligación de presentar una solicitud de forma electrónica», la alternativa A introduce «presento la solicitud presencialmente» donde la norma dispone «haya sido realizada la subsanación».",
        "c": "En «Cuando alguien tuviese obligación de presentar una solicitud de forma electrónica», la alternativa C introduce «A los diez días de haberse presentado la solicitud presencialmente» donde la norma dispone «Aquella en la que haya sido realizada la subsanación»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(68),
    "2": articleReference(68),
    "3": articleReference(68),
    "4": articleReference(68),
    "5": articleReference(68),
    "6": articleReference(68),
    "7": articleReference(68),
    "8": articleReference(68),
    "9": articleReference(66),
    "10": articleReference(66),
    "11": articleReference(66),
    "12": articleReference(66),
    "13": articleReference(66),
    "14": articleReference(68),
  },
});
