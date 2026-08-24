import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-41-a-44",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 41, cuando la notificación se realice con ocasión de la comparecencia espontánea del interesado o su representante en las oficinas de asistencia en materia de registro y solicite la comunicación o notificación personal en ese momento. Por eso encaja «Podrán practicar la notificación por medios no electrónicos».",
      "descartes": {
        "b": "En «Cuando la notificación se realice con ocasión de la comparecencia espontánea del interesado o su…», la alternativa B introduce «Deberán» donde la norma dispone «Podrán».",
        "c": "La alternativa C vincula «Cuando la notificación se realice con ocasión de la comparecencia espontánea del interesado o su…» con «Podrán practicar la notificación por medios electrónicos»; el artículo 41 lo relaciona con «Podrán practicar la notificación por medios no electrónicos»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 41 es cuando para asegurar la eficacia de la actuación administrativa resulte necesario practicar la notificación por entrega directa de un empleado público de la Administración notificante. En este supuesto se ajusta a «Cuando resulte necesario practica la notificación por entrega directa de un empleado público de la administración notificante».",
      "descartes": {
        "a": "En «Las Administraciones podrán practicar las notificaciones por medios no electrónicos en los siguient es…», la alternativa A introduce «practicar la notificación por entrega directa de un empleado público de la oficina de asistencia en materia de registro» donde la norma dispone «practica la notificación por entrega directa de un empleado público de la administración notificante».",
        "c": "En «Las Administraciones podrán practicar las notificaciones por medios no electrónicos en los siguient es…», la alternativa C introduce «practicar la notificación por entrega directa un funcionario agente de la autoridad» donde la norma dispone «practica la notificación por entrega directa de un empleado público»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 41 recoge las dos previsiones: «De su envío o puesta a disposición, de la recepción o acceso por el interesado o su representante, de sus fechas y horas» y «Del contenido íntegro, y de la identidad fidedigna del remitente y destinatario de la misma». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «De su envío o puesta a disposición, de la recepción o acceso por el interesado o su representante, de sus fechas y horas», pero resulta incompleta porque también debe incluirse «Del contenido íntegro, y de la identidad fidedigna del remitente y destinatario de la misma».",
        "b": "La alternativa B recoge «Del contenido íntegro, y de la identidad fidedigna del remitente y destinatario de la misma», pero resulta incompleta porque también debe incluirse «De su envío o puesta a disposición, de la recepción o acceso por el interesado o su representante, de sus fechas y horas»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 41 establece que podrán decidir y comunicar en cualquier momento a la Administración Pública; mediante los modelos normalizados que se establezcan al efecto; que las notificaciones sucesivas se practiquen o dejen de practicarse por medios electrónicos. Reglamentariamente. Esa previsión conduce a «Los interesados que no estén obligados a recibir notificaciones electrónicas».",
      "descartes": {
        "a": "En «Podrán decidir y comunicar en cualquier momento a la Administración Pública», la alternativa A introduce «Cualquier interesado» donde la norma dispone «Los interesados que no estén obligados a recibir notificaciones electrónicas».",
        "c": "La alternativa C vincula «Podrán decidir y comunicar en cualquier momento a la Administración Pública» con «Los interesados que estén obligados a recibir notificaciones electrónicas»; el artículo 41 lo relaciona con «Los interesados que no estén obligados a recibir notificaciones electrónicas»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 41, cuando para asegurar la eficacia de la actuación administrativa resulte necesario practicar la notificación por entrega directa de un empleado público de la Administración notificante. Con independencia del medio utilizado. Por eso encaja «Reglamentariamente».",
      "descartes": {
        "a": "En «las Administraciones podrán establecer la obligación de practicar electrónicam ente las notificaciones para…», la alternativa A introduce «Legalmente» donde la norma dispone «Reglamentariamente».",
        "c": "En «las Administraciones podrán establecer la obligación de practicar electrónicam ente las notificaciones para…», la alternativa C introduce «El enunciado no es correcto porque en ningún caso se puede establecer la obligación para personas físicas» donde la norma dispone «Reglamentariamente»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 41 es adicionalmente, el interesado podrá identificar un dispositivo electrónico y/o una dirección de correo electrónico que servirán para el envío de los avisos regulados en este artículo, pero no para la práctica de notificaciones. En este supuesto se ajusta a «El envío de avisos de puesta a disposición de notificaciones».",
      "descartes": {
        "b": "En «el interesado podrá identificar un dispositivo electrónico y/o una dirección de correo electrónico que…», la alternativa B introduce «La práctica» donde la norma dispone «El envío de avisos de puesta a disposición».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La práctica de notificaciones» no expresa la regla que el artículo 41 aplica a «el interesado podrá identificar un dispositivo electrónico y/o una dirección de correo electrónico que…»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 41 dispone que aquellas en las que el acto a notificar vaya acompañado de elementos que no sean susceptibles de conversión en formato electrónico. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Cuando el acto a notificar vaya acompañado de elementos que no sean susceptibles de conversión en formato…», la alternativa A introduce «podrá no efectuar» donde la norma dispone «no efectuará».",
        "c": "La alternativa C vincula «Cuando el acto a notificar vaya acompañado de elementos que no sean susceptibles de conversión en formato…» con «La administración efectuará la notificación por medios electrónicos»; el artículo 41 lo relaciona con «La administración no efectuará la notificación por medios electrónicos»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 41 establece que las que contengan medios de pago a favor de los obligados, tales como cheques. Esa previsión conduce a «La que contenga medios de pago a favor de los obligados, tales como cheques».",
      "descartes": {
        "a": "En «En ningún caso se efectuarán por medios electrónicos la siguiente notificación», la alternativa A introduce «la administración,» donde la norma dispone «los obligados,».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La que contenga medios de pago a favor de la administración, tales como cheques» no expresa la regla que el artículo 41 aplica a «En ningún caso se efectuarán por medios electrónicos la siguiente notificación»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 41, en los procedimientos iniciados de oficio; las Administraciones Públicas podrán recabar; mediante consulta a las bases de datos del Instituto Nacional de Estadística. Por eso encaja «Del Instituto Nacional de Estadística».",
      "descartes": {
        "a": "En «En los procedimientos iniciados de oficio», la alternativa A introduce «De las Entidades Locales» donde la norma dispone «Del Instituto Nacional de Estadística».",
        "c": "En «En los procedimientos iniciados de oficio», la alternativa C introduce «INE u organismo autonómico equivalente» donde la norma dispone «Instituto Nacional de Estadística»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "Según el artículo 41, con independencia de que la notificación se realice en papel o por medios electrónicos. La opción «La falta de práctica de este aviso impedirá que la notificación sea considerada plenamente válida» no respeta ese criterio y es la que debe descartarse.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 41: con independencia de que la notificación se realice en papel o por medios electrónicos, las Administraciones Públicas enviarán un aviso al dispositivo electrónico y/o a la dirección de correo electrónico del interesado que éste haya comunicado, informándole de la puesta a disposición de una notificación en la sede electrónica de la Administración u Organismo correspondiente o en la dirección electrónica habilitada única.",
        "c": "La alternativa C sí concuerda con el artículo 41: cuando el interesado fuera notificado por distintos cauces, se tomará como fecha de notificación la de aquélla que se hubiera producido en primer lugar."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 42 dispone que todas las notificaciones que se practiquen en papel deberán ser puestas a disposición del interesado en la sede electrónica de la Administración u Organismo actuante para que pueda acceder al contenido de las mismas de forma voluntaria. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Todas las notificaciones que se practiquen en papel», la alternativa B introduce «obligatoria» donde la norma dispone «voluntaria».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Deberán ser puestas a disposición del interesado en la sede electrónica de la Administración u Organismo actuante para que pueda acceder al…» sí está respaldada por el artículo 42."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 42 establece que mayor de catorce años. Esa previsión conduce a «Mayor de catorce años».",
      "descartes": {
        "b": "En «Para hacerse cargo de una notificación en el domicilio del in teresado hay que ser persona», la alternativa B introduce «dieciséis» donde la norma dispone «catorce».",
        "c": "En «Para hacerse cargo de una notificación en el domicilio del in teresado hay que ser persona», la alternativa C introduce «dieciocho» donde la norma dispone «catorce»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 42, cuando el primer intento de notificación se haya realizado antes de las 15 horas. Por eso encaja «Cuando el primer intento de notificación se haya realizado antes de las 15 horas».",
      "descartes": {
        "b": "En «El segundo intento en la notificación en un domicilio deberá realizarse después de las 15 horas», la alternativa B introduce «después» donde la norma dispone «antes».",
        "c": "En «El segundo intento en la notificación en un domicilio deberá realizarse después de las 15 horas», la alternativa C introduce «La ley no señala nada al respecto» donde la norma dispone «Cuando el primer intento de notificación se haya realizado antes de las 15 horas»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 42 exige que entre el primer y el segundo intento de notificación transcurra un mínimo de tres horas. Un intervalo inferior no respeta la separación legal.",
      "descartes": {
        "a": "Para «Entre el primer intento de notificación y el segundo tiene que mediar mínimo», la alternativa A utiliza «Una», pero la previsión aplicable fija «Tres».",
        "b": "Para «Entre el primer intento de notificación y el segundo tiene que mediar mínimo», la alternativa B utiliza «Dos», pero la previsión aplicable fija «Tres»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 43 dispone que en la sede electrónica de la Administración u Organismo actuante. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Las notificaciones por medios electrónicos se practicarán mediante comparecencia», la alternativa B introduce «A través de la dirección electrónica habilitada única» donde la norma dispone «en la sede electrónica de la Administración u Organismo actuante».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «A través de la dirección electrónica habilitada única» no expresa la regla que el artículo 43 aplica a «Las notificaciones por medios electrónicos se practicarán mediante comparecencia»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 43 establece que las notificaciones por medios electrónicos se entenderán practicadas en el momento en que se produzca el acceso a su contenido. Cuando la notificación por medios electrónicos sea de carácter obligatorio. Esa previsión conduce a «Cuando la notificación por medios electrónicos sea de carácter obligatorio».",
      "descartes": {
        "a": "La alternativa A vincula «Las notificaciones por medios electrónicos» con «Se entenderá practica en el momento en que se produzca la puesta a disposición del interesado»; el artículo 43 lo relaciona con «Cuando la notificación por medios electrónicos sea de carácter obligatorio».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Se entenderá practica en el momento en que se produzca la puesta a disposición del interesado» no expresa la regla que el artículo 43 aplica a «Las notificaciones por medios electrónicos»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 44, cuando los interesados en un procedimiento sean desconocidos. Por eso encaja «Con carácter previo a la publicación en el BOE y f acultativo».",
      "descartes": {
        "b": "En «En la notificación infructuosa», la alternativa B introduce «con carácter preceptivo» donde la norma dispone «f acultativo».",
        "c": "En «En la notificación infructuosa», la alternativa C introduce «Como sustitución a la publicación en el BOE» donde la norma dispone «Con carácter previo a la publicación en el BOE y f acultativo»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 44 es las Administraciones Públicas podrán establecer otras formas de notificación complementarias a través de los restantes medios de difusión, que no excluirán la obligación de publicar el correspondiente anuncio en el «Boletín Oficial del Estado». En este supuesto se ajusta a «Podrán ser completadas con otras formas a través de otros medios de difusión».",
      "descartes": {
        "b": "En «Las notificaciones en el BOE», la alternativa B introduce «sustituidas» donde la norma dispone «completadas».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Podrán ser completadas con otras formas a través de otros medios de difusión» sí está respaldada por el artículo 44."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-30-acto-administrativo",
  references: {
    "1": articleReference(41),
    "2": articleReference(41),
    "3": articleReference(41),
    "4": articleReference(41),
    "5": articleReference(41),
    "6": articleReference(41),
    "7": articleReference(41),
    "8": articleReference(41),
    "9": articleReference(41),
    "10": articleReference(41),
    "11": articleReference(42),
    "12": articleReference(42),
    "13": articleReference(42),
    "14": articleReference(42),
    "15": articleReference(43),
    "16": articleReference(43),
    "17": articleReference(44),
    "18": articleReference(44),
  },
});
