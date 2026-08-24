import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-62-a-66",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 62 comprende «Cuando sea el primero en aportar elementos de prueba que permitan iniciar el procedimiento o comprobar la infracción» y «Cuando se repare el daño causado». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando sea el primero en aportar elementos de prueba que permitan iniciar el procedimiento o comprobar la infracción», pero resulta incompleta porque también debe incluirse «Cuando se repare el daño causado».",
        "b": "La alternativa B recoge «Cuando se repare el daño causado», pero resulta incompleta porque también debe incluirse «Cuando sea el primero en aportar elementos de prueba que permitan iniciar el procedimiento o comprobar la infracción»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 62 es cuando el denunciante haya participado en la comisión de una infracción de esta naturaleza y existan otros infractores. En este supuesto se ajusta a «El órgano competente para resolver deberá reducir el importe del pago de la multa».",
      "descartes": {
        "b": "En «Sin cumplir con lo que se establece en la pregunta anterior», la alternativa B introduce «eximir al denunciante» donde la norma dispone «reducir el importe».",
        "c": "En «Sin cumplir con lo que se establece en la pregunta anterior», la alternativa C introduce «deberá archivar el expediente sancionador» donde la norma dispone «para resolver deberá reducir el importe del pago de la multa»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 62 recoge las dos previsiones: «Para quedar exento del pago de la multa» y «Para que quede reducido el importe del pago de la multa». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Para quedar exento del pago de la multa», pero resulta incompleta porque también debe incluirse «Para que quede reducido el importe del pago de la multa».",
        "b": "La alternativa B recoge «Para que quede reducido el importe del pago de la multa», pero resulta incompleta porque también debe incluirse «Para quedar exento del pago de la multa»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 62 establece que la presentación de una denuncia no confiere, por sí sola, la condición de interesado en el procedimiento. Esa previsión conduce a «No confiere, por sí sola, la condición de interesado en el procedimiento».",
      "descartes": {
        "a": "La alternativa A vincula «La presentación de la denuncia» con «Confiere, por sí sola, la condición de interesado en el procedimiento»; el artículo 62 lo relaciona con «No confiere, por sí sola, la condición de interesado en el procedimiento».",
        "c": "En «La presentación de la denuncia», la alternativa C introduce «Confiere, por sí sola, la condición de interesado en el procedimiento, sí el que ha presentado la denuncia es un particular» donde la norma dispone «No confiere, por sí sola, la condición de interesado en el procedimiento»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 63, los procedimientos de naturaleza sancionadora se iniciarán siempre de oficio por acuerdo del órgano competente y establecerán la debida separación entre la fase instructora y la sancionadora, que se encomendará a órganos distintos. Por eso encaja «De oficio por el acuerdo del órgano competente».",
      "descartes": {
        "b": "En «Los procedimientos de naturaleza sancionadora se iniciarán», la alternativa B introduce «A instancia de parte por denuncia voluntaria u obligatoria» donde la norma dispone «De oficio por el acuerdo del órgano competente».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «A instancia de parte por denuncia voluntaria u obligatoria» no expresa la regla que el artículo 63 aplica a «Los procedimientos de naturaleza sancionadora se iniciarán»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 63 es los procedimientos de naturaleza sancionadora se iniciarán siempre de oficio por acuerdo del órgano competente y establecerán la debida separación entre la fase instructora y la sancionadora, que se encomendará a órganos distintos. En este supuesto se ajusta a «Tienen que encomendarse a órganos distintos».",
      "descartes": {
        "b": "En «La fase de instrucción y la sancionadora», la alternativa B introduce «Pueden» donde la norma dispone «Tienen que».",
        "c": "En «La fase de instrucción y la sancionadora», la alternativa C introduce «No se pueden encomendar» donde la norma dispone «Tienen que encomendarse»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La regulación del artículo 63 comprende «No se pueden imponer sanciones sin que se haya tramitado un procedimiento» y «hasta que no haya recaído una primera resolución sancionadora». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «No se pueden imponer sanciones sin que se haya tramitado un procedimiento», pero resulta incompleta porque también debe incluirse «hasta que no haya recaído una primera resolución sancionadora».",
        "b": "La alternativa B recoge «hasta que no haya recaído una primera resolución sancionadora», pero resulta incompleta porque también debe incluirse «No se pueden imponer sanciones sin que se haya tramitado un procedimiento»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 64 recoge tanto «Se comunicará al instructor del procedimiento» como «Se notificará a los interesados, entendiendo en todo caso por tal al inculpado». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Se comunicará al instructor del procedimiento», pero resulta incompleta porque también debe incluirse «Se notificará a los interesados, entendiendo en todo caso por tal al inculpado».",
        "b": "La alternativa B recoge «Se notificará a los interesados, entendiendo en todo caso por tal al inculpado», pero resulta incompleta porque también debe incluirse «Se comunicará al instructor del procedimiento»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 64 recoge las dos previsiones: «El instructor del procedimiento sancionador» y «El Secretario del procedimiento sancionador». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «El instructor del procedimiento sancionador», pero resulta incompleta porque también debe incluirse «El Secretario del procedimiento sancionador».",
        "b": "La alternativa B recoge «El Secretario del procedimiento sancionador», pero resulta incompleta porque también debe incluirse «El instructor del procedimiento sancionador»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 64 es órgano competente para la resolución del procedimiento y norma que le atribuya tal competencia, indicando la posibilidad de que el presunto responsable pueda reconocer voluntariamente su responsabilidad, con los efectos previstos en el artículo 85. En este supuesto se ajusta a «El órgano competente para resolver».",
      "descartes": {
        "a": "En «Hay que señalar en el acuerdo de iniciación de un procedimiento sancionador la norma que le atribuye la…», la alternativa A introduce «instructor» donde la norma dispone «órgano competente para resolver».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El instructor» no expresa la regla que el artículo 64 aplica a «Hay que señalar en el acuerdo de iniciación de un procedimiento sancionador la norma que le atribuye la…»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 64 dispone que medidas de carácter provisional que se hayan acordado por el órgano competente para iniciar el procedimiento sancionador, sin perjuicio de las que se puedan adoptar durante el mismo de conformidad con el artículo 56. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «En el acuerdo de iniciación de un procedimiento sancionador se señalan», la alternativa B introduce «adopten durante» donde la norma dispone «hayan adoptado antes de iniciarse».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Las medidas provisionales que se adopten durante el procedimiento» no expresa la regla que el artículo 64 aplica a «En el acuerdo de iniciación de un procedimiento sancionador se señalan»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 64 establece que los hechos que motivan la incoación del procedimiento, su posible calificación y las sanciones que pudieran corresponder, sin perjuicio de lo que resulte de la instrucción. La formulación «Identificación de la persona o personas responsables» se aparta de esa regulación y es la afirmación incorrecta.",
      "descartes": {
        "b": "La alternativa B sí concuerda con el artículo 64: los hechos que motivan la incoación del procedimiento, su posible calificación y las sanciones que le puedan corresponder.",
        "c": "La alternativa C sí concuerda con el artículo 64: indicación del derecho a formular alegaciones y a la audiencia en el procedimiento y de los plazos para su ejercicio."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 64, indicación del derecho a formular alegaciones y a la audiencia en el procedimiento y de los plazos para su ejercicio. Por eso encaja «El acuerdo de iniciación podrá ser considerado propuesta de resolución cuando contenga un pronunciamiento preciso acerca de la responsabilidad imputada».",
      "descartes": {
        "a": "En «En caso de no efectuar alegaciones en el plazo previsto sobre el contenido del acuerdo de iniciación», la alternativa A introduce «deberá» donde la norma dispone «podrá».",
        "c": "La alternativa C vincula «En caso de no efectuar alegaciones en el plazo previsto sobre el contenido del acuerdo de iniciación» con «El acuerdo de iniciación no podrá ser considerado propuesta de resolución cuando contenga un pronunciamiento preciso acerca de la…»; el artículo 64 lo relaciona con «El acuerdo de iniciación podrá ser considerado propuesta de resolución cuando contenga un pronunciamiento preciso acerca de la…»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 64 es los hechos que motivan la incoación del procedimiento, su posible calificación y las sanciones que pudieran corresponder, sin perjuicio de lo que resulte de la instrucción. En este supuesto se ajusta a «Ambas respuestas son posibles».",
      "descartes": {
        "a": "En «La calificación de los hechos que motivan la incoación del procedimiento», la alternativa A introduce «Se realiza en el acuerdo de iniciación, que se notifica al interesado» donde la norma dispone «Ambas respuestas son posibles».",
        "b": "En «La calificación de los hechos que motivan la incoación del procedimiento», la alternativa B introduce «Se realiza en el Pliego de cargos, que se notifica al interesado» donde la norma dispone «Ambas respuestas son posibles»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 65 recoge las dos previsiones: «Se abre de oficio» y «Se abre a instancia de parte». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Se abre de oficio», pero resulta incompleta porque también debe incluirse «Se abre a instancia de parte».",
        "b": "La alternativa B recoge «Se abre a instancia de parte», pero resulta incompleta porque también debe incluirse «Se abre de oficio»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 65 establece que 10 días. Esa previsión conduce a «10 días».",
      "descartes": {
        "b": "Para «para que efectúen alegaciones», la alternativa B utiliza «15», pero la previsión aplicable fija «10».",
        "c": "Para «para que efectúen alegaciones», la alternativa C utiliza «20», pero la previsión aplicable fija «10»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 65, el procedimiento iniciado se instruirá, aunque los particulares presuntamente lesionados no se personen en el plazo establecido. Por eso encaja «Aunque los particulares presuntamente lesionados no se personen».",
      "descartes": {
        "a": "En «El procedimiento anterior se instruirá», la alternativa A introduce «Siempre que los particulares presuntamente lesionados se personen en el plazo establecido» donde la norma dispone «Aunque los particulares presuntamente lesionados no se personen».",
        "c": "En «El procedimiento anterior se instruirá», la alternativa C introduce «Sólo si los particulares presuntamente lesionados» donde la norma dispone «Aunque los particulares presuntamente lesionados no»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El artículo 66 enumera el nombre y los apellidos, el medio de notificación, los hechos y la petición, el lugar y la fecha, la firma y el órgano destinatario. La expresión genérica «identificación personal» no figura como un elemento autónomo de esa relación.",
      "descartes": {
        "b": "En «No es un contenido mínimo de la solicitud», la alternativa B introduce «El órgano, unidad o centro administrativo al que se dirige» donde la norma dispone «La identificación personal del interesado».",
        "c": "En «No es un contenido mínimo de la solicitud», la alternativa C introduce «Lugar y fecha» donde la norma dispone «La identificación personal del interesado»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La regulación del artículo 66 comprende «La firma» y «Cualquier medio de acreditar la voluntad». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «La firma», pero resulta incompleta porque también debe incluirse «Cualquier medio de acreditar la voluntad».",
        "b": "La alternativa B recoge «Cualquier medio de acreditar la voluntad», pero resulta incompleta porque también debe incluirse «La firma»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 66 establece que órgano, centro o unidad administrativa a la que se dirige y su correspondiente código de identificación. Esa previsión conduce a «Es el código que identifica a los órganos competentes».",
      "descartes": {
        "b": "La alternativa B vincula «Código de identificación» con «Las oficinas de asistencia en materia de registros no estarán obligadas a facilitar a los interesados el código de identificación»; el artículo 66 lo relaciona con «Es el código que identifica a los órganos competentes».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Las oficinas de asistencia en materia de registros no estarán obligadas a facilitar a los interesados el…» no expresa la regla que el artículo 66 aplica a «Código de identificación»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 66, podrán exigir el correspondiente recibo que acredite la fecha y hora de presentación. Por eso encaja «Podrán exigir el correspondiente recibo que acredite la fecha y hora de presentación».",
      "descartes": {
        "b": "En «De las solicitudes», la alternativa B introduce «una copia con un sello donde conste» donde la norma dispone «el correspondiente recibo que acredite».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Podrán exigir una copia con un sello donde conste la fecha y hora de presentación» no expresa la regla que el artículo 66 aplica a «De las solicitudes»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regulación del artículo 66 comprende «Que tendrán que ser admitidos por el órgano al que se dirige» y «Que deberán ser tenidos en cuenta por el órgano al que se dirige». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Que tendrán que ser admitidos por el órgano al que se dirige», pero resulta incompleta porque también debe incluirse «Que deberán ser tenidos en cuenta por el órgano al que se dirige».",
        "b": "La alternativa B recoge «Que deberán ser tenidos en cuenta por el órgano al que se dirige», pero resulta incompleta porque también debe incluirse «Que tendrán que ser admitidos por el órgano al que se dirige»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(62),
    "2": articleReference(62),
    "3": articleReference(62),
    "4": articleReference(62),
    "5": articleReference(63),
    "6": articleReference(63),
    "7": articleReference(63),
    "8": articleReference(64),
    "9": articleReference(64),
    "10": articleReference(64),
    "11": articleReference(64),
    "12": articleReference(64),
    "13": articleReference(64),
    "14": articleReference(64),
    "15": articleReference(65),
    "16": articleReference(65),
    "17": articleReference(65),
    "18": articleReference(66),
    "19": articleReference(66),
    "20": articleReference(66),
    "21": articleReference(66),
    "22": articleReference(66),
  },
});
