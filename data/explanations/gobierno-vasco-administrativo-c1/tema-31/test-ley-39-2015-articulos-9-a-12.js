import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-9-a-12",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 9 comprende «La comprobación de su nombre y apellidos que conste en el DNI o documento identificativo equivalente» y «La comprobación de su denominación o razón social que conste en un documento identificativo». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «La comprobación de su nombre y apellidos que conste en el DNI o documento identificativo equivalente», pero resulta incompleta porque también debe incluirse «La comprobación de su denominación o razón social que conste en un documento identificativo».",
        "b": "La alternativa B recoge «La comprobación de su denominación o razón social que conste en un documento identificativo», pero resulta incompleta porque también debe incluirse «La comprobación de su nombre y apellidos que conste en el DNI o documento identificativo equivalente»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 9 es sistemas basados en certificados electrónicos cualificados de firma electrónica expedidos por prestadores incluidos en la ‘‘Lista de confianza de prestadores de servicios de certificación’’. En este supuesto se ajusta a «Sistemas basados en certificados electrónicos cualificados de firma electrónica expedidos por prestadores incluidos en la “lista de confianza de prestadores de…».",
      "descartes": {
        "b": "En «Los sistemas de identificación ante las Administraciones Públicas son los señalados legalmente», la alternativa B introduce «sello electrónico expedidos o no» donde la norma dispone «firma electrónica expedidos».",
        "c": "En «Los sistemas de identificación ante las Administraciones Públicas son los señalados legalmente», la alternativa C introduce «de clave concertada basados en certificados electrónicos cualificados» donde la norma dispone «basados en certificados electrónicos cualificados de firma electrónica»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 9 admite otros sistemas de identificación cuando exigen un registro previo como usuario que garantice la identidad. Esa característica los distingue de los sistemas basados en certificados cualificados.",
      "descartes": {
        "a": "En «Requiere registrarse como usuario que permita garantizar su identidad», la alternativa A introduce «Los sistemas basados en certificados electrónicos cualificados de firma electrónica» donde la norma dispone «Otros sistemas de identificación».",
        "b": "En «Requiere registrarse como usuario que permita garantizar su identidad», la alternativa B introduce «Los sistemas basados en certificados electrónicos cualificados de sello electrónico» donde la norma dispone «Otros sistemas de identificación»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 9 establece que cualquier otro sistema que las Administraciones públicas consideren válido en los términos y condiciones que se establezca. Esa previsión conduce a «La Secretaria General de Administración Digital del Ministerio de Política Territorial y Función Pública».",
      "descartes": {
        "b": "En «Para dicha inscripción en el registro se requiere autorización por parte de», la alternativa B introduce «de Estado de Seguridad del Ministerio de Interior» donde la norma dispone «General de Administración Digital del Ministerio de Política Territorial y Función Pública».",
        "c": "En «Para dicha inscripción en el registro se requiere autorización por parte de», la alternativa C introduce «El titular» donde la norma dispone «La Secretaria General de Administración Digital»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 9, habrán de transcurrir dos meses desde dicha comunicación; durante los cuales el órgano estatal competente por motivos de seguridad pública podrá acudir a la vía jurisdiccional; previo informe vinculante de la Secretaría de Estado de Seguridad. Por eso encaja «Por motivos de seguridad pública».",
      "descartes": {
        "b": "En «Dicha denegación sólo se podrá denegar», la alternativa B introduce «protección de datos» donde la norma dispone «seguridad pública».",
        "c": "En «Dicha denegación sólo se podrá denegar», la alternativa C introduce «interés público» donde la norma dispone «seguridad pública»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 9 es cualquier otro sistema que las Administraciones públicas consideren válido en los términos y condiciones que se establezca. En este supuesto se ajusta a «La Secretaria de Estado de Seguridad del Ministerio de Interior».",
      "descartes": {
        "a": "En «Para dicha denegación se requiere el informe de», la alternativa A introduce «General de Administración Digital del Ministerio de Política Territorial y Función Pública» donde la norma dispone «de Estado de Seguridad del Ministerio de Interior».",
        "c": "En «Para dicha denegación se requiere el informe de», la alternativa C introduce «El titular» donde la norma dispone «La Secretaria de Estado de Seguridad»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 9 fija un máximo de tres meses para emitir la autorización de estos sistemas de identificación. Los plazos de uno o dos meses no son los previstos en la ficha teórica.",
      "descartes": {
        "a": "Para «La autorización habrá de ser emitida en el plazo máximo de», la alternativa A utiliza «1», pero la previsión aplicable fija «3».",
        "b": "Para «La autorización habrá de ser emitida en el plazo máximo de», la alternativa B utiliza «2», pero la previsión aplicable fija «3»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 9 fija un plazo máximo de tres meses para autorizar estos sistemas de identificación y atribuye efecto desestimatorio a la falta de resolución. El silencio supone, por ello, la denegación de la solicitud.",
      "descartes": {
        "b": "En «La falta de resolución de la solicitud de autorización», la alternativa B introduce «estimatorios» donde la norma dispone «desestimatorios».",
        "c": "En «La falta de resolución de la solicitud de autorización», la alternativa C introduce «Producirá la caducidad» donde la norma dispone «Se entenderá que tiene efectos desestimatorios»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 10 recoge las dos previsiones: «Se tendrá que admitir el sistema basado en certificado electrónico cualificado de firma electrónica» y «Se tendrá que admitir el sistema basado en certificado electrónico cualificado de sello electrónico». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Se tendrá que admitir el sistema basado en certificado electrónico cualificado de firma electrónica», pero resulta incompleta porque también debe incluirse «Se tendrá que admitir el sistema basado en certificado electrónico cualificado de sello electrónico».",
        "b": "La alternativa B recoge «Se tendrá que admitir el sistema basado en certificado electrónico cualificado de sello electrónico», pero resulta incompleta porque también debe incluirse «Se tendrá que admitir el sistema basado en certificado electrónico cualificado de firma electrónica»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El artículo 10 exige que determinados recursos técnicos de los sistemas de clave concertada se encuentren en territorio español. La localización depende del supuesto regulado y no se impone de forma idéntica en todos los casos.",
      "descartes": {
        "a": "En «Si utilizan un sistema de clave concertada los recursos técnicos necesarios para la recogida», la alternativa A introduce «todo caso, en cualquier país de la UE» donde la norma dispone «ciertos casos, en España».",
        "c": "En «Si utilizan un sistema de clave concertada los recursos técnicos necesarios para la recogida», la alternativa C introduce «todo caso, en cualquier país de la UE o tercer país que haya sido objeto de una decisión de adecuación de la Comisión Europea» donde la norma dispone «ciertos casos, en España»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 9 dispone que en cualquier caso, los datos se encontrarán disponibles para su acceso por parte de las autoridades judiciales y administrativas competentes. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Los datos estarán disponibles para su acceso», la alternativa B introduce «su caso, por parte de autoridades administrativas» donde la norma dispone «todo caso, por parte de autoridades judiciales».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «En su caso, por parte de autoridades administrativas» no expresa la regla que el artículo 9 aplica a «Los datos estarán disponibles para su acceso»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 10 establece que en relación con los sistemas de firma previstos en la letra c) del apartado anterior. Esa previsión conduce a «De la exigencia del cumplimiento de una obligación internacional asumida por España».",
      "descartes": {
        "a": "En «Los datos no podrán ser objeto de transferencia a un tercer país u organización internacional, con excepción», la alternativa A introduce «los países que hayan sido objeto de adecuación por el Consejo de la UE» donde la norma dispone «la exigencia del cumplimiento de una obligación internacional asumida por España».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «De los países que hayan sido objeto de adecuación por el Consejo de la UE» no expresa la regla que el artículo 10 aplica a «Los datos no podrán ser objeto de transferencia a un tercer país u organización internacional, con excepción»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 9, la aceptación de alguno de estos sistemas por la Administración General del Estado. Por eso encaja «la aceptación de alguno de estos sistemas por la Administración General del Estado».",
      "descartes": {
        "b": "En «Servirá para acreditar frente a todas las Administraciones Públicas», la alternativa B introduce «las administraciones autonómicas» donde la norma dispone «la Administración General del Estado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La aceptación de alguno de estos sistemas por las administraciones autonómicas» no expresa la regla que el artículo 9 aplica a «Servirá para acreditar frente a todas las Administraciones Públicas»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 10 es los interesados podrán firmar a través de cualquier medio que permita acreditar la autenticidad de la expresión de su voluntad y consentimiento, así como la integridad e inalterabilidad del documento. En este supuesto se ajusta a «Podrán firmar a través de cualquier medio señalado por la ley».",
      "descartes": {
        "a": "En «Para acreditar la autenticidad de la expresión de su voluntad y consentimiento», la alternativa A introduce «identificarse» donde la norma dispone «firmar».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Podrán firmar a través de cualquier medio señalado por la ley» sí está respaldada por el artículo 10."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 10 recoge las dos previsiones: «Sistemas basados en certificados electrónicos cualificados de firma electrónica cualificada y avanzada expedidos por…» y «Sistemas basados en certificados electrónicos de sello electrónico cualificado y de sello electrónico avanzado…». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Sistemas basados en certificados electrónicos cualificados de firma electrónica cualificada y avanzada expedidos por prestadores…», pero resulta incompleta porque también debe incluirse «Sistemas basados en certificados electrónicos de sello electrónico cualificado y de sello electrónico avanzado expedidos por…».",
        "b": "La alternativa B recoge «Sistemas basados en certificados electrónicos de sello electrónico cualificado y de sello electrónico avanzado expedidos por…», pero resulta incompleta porque también debe incluirse «Sistemas basados en certificados electrónicos cualificados de firma electrónica cualificada y avanzada expedidos por prestadores…»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 10 establece que cuando así lo disponga expresamente la normativa reguladora aplicable. Esa previsión conduce a «Las Administraciones Públicas podrán admitirlos sistemas de identificación como sistemas de firma cuando permitan acreditar la autenticidad de la expresión de la…».",
      "descartes": {
        "a": "En «Cuando así lo disponga expresamente la normativa aplicable», la alternativa A introduce «admitir los sistemas de firma como sistemas de identificación» donde la norma dispone «admitirlos sistemas de identificación como sistemas de firma».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Las Administraciones Públicas podrán admitirlos sistemas de identificación como sistemas de firma cuando permitan acreditar la autenticidad de…» sí está respaldada por el artículo 10."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 10, cuando los interesados utilicen un sistema de firma de los previstos en este artículo, su identidad se entenderá ya acreditada mediante el propio acto de la firma. Por eso encaja «Se entenderá, en todo caso, acreditada su identidad».",
      "descartes": {
        "b": "En «Cuando los interesados utilicen sistemas de firma», la alternativa B introduce «su» donde la norma dispone «todo».",
        "c": "En «Cuando los interesados utilicen sistemas de firma», la alternativa C introduce «con carácter general,» donde la norma dispone «en todo caso,»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 11 es con carácter general, para realizar cualquier actuación prevista en el procedimiento administrativo, será suficiente con que los interesados acrediten previamente su identidad a través de cualquiera de los medios de identificación previstos en esta Ley. En este supuesto se ajusta a «Será suficiente que el interesado se identifique a través de los sistemas que señala esta ley».",
      "descartes": {
        "a": "En «Con carácter general, para realizar cualquier actuación del procedimiento administrativo», la alternativa A introduce «necesario que el interesado firme» donde la norma dispone «suficiente que el interesado se identifique».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Será suficiente que el interesado se identifique a través de los sistemas que señala esta ley» sí está respaldada por el artículo 11."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 11 dispone que las Administraciones Públicas sólo requerirán a los interesados el uso obligatorio de firma para. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Para presentar una solicitud», la alternativa B introduce «la identificación» donde la norma dispone «el uso de firma».",
        "c": "La alternativa C vincula «Para presentar una solicitud» con «Será obligatorio el uso de firma de acuerdo a la normativa aplicable al caso»; el artículo 11 lo relaciona con «Será obligatorio el uso de firma»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 11 establece que uso de medios de identificación y firma en el procedimiento administrativo. Esa previsión conduce a «Será obligatorio el uso de firma».",
      "descartes": {
        "b": "En «Para renunciar a un derecho o desistir del procedimiento», la alternativa B introduce «la identificación» donde la norma dispone «el uso de firma».",
        "c": "La alternativa C vincula «Para renunciar a un derecho o desistir del procedimiento» con «Será obligatorio el uso de firma de acuerdo a la normativa aplicable al caso»; el artículo 11 lo relaciona con «Será obligatorio el uso de firma»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 8, si durante la instrucción de un procedimiento que no haya tenido publicidad. Por eso encaja «Les comunicará la tramitación del procedimiento, cuando no haya habido publicidad legal».",
      "descartes": {
        "a": "En «Si durante la instrucción de un procedimiento la administración tiene conocimiento de la existencia de…», la alternativa A introduce «Le comunicará en todo caso la tramitación del procedimiento» donde la norma dispone «Les comunicará la tramitación del procedimiento, cuando no haya habido publicidad legal».",
        "c": "En «Si durante la instrucción de un procedimiento la administración tiene conocimiento de la existencia de…», la alternativa C introduce «No les comunicará en ningún caso la tramitación del procedimiento» donde la norma dispone «Les comunicará la tramitación del procedimiento, cuando no haya habido publicidad legal»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 7 es cuando en una solicitud, escrito o comunicación figuren varios interesados, las actuaciones a que den lugar se efectuarán con el representante o el interesado que expresamente hayan señalado, y, en su defecto, con el que figure en primer término. En este supuesto se ajusta a «El representante o el interesado que expresamente hayan señalado, y en su defecto, con el que figure en primer término».",
      "descartes": {
        "a": "En «escrito o comunicación figuren varios interesados», la alternativa A introduce «que figure en primer término, y en su defecto, con el representante o el interesado que expresamente se hayan señalado» donde la norma dispone «representante o el interesado que expresamente hayan señalado, y en su defecto, con el que figure en primer término».",
        "c": "En «escrito o comunicación figuren varios interesados», la alternativa C introduce «que figure en primer término siempre» donde la norma dispone «representante o el interesado que expresamente hayan señalado, y en su defecto, con el que figure en primer término»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 12 dispone que los interesados no obligados a relacionarse con la administración por medio electrónico que así lo soliciten. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula «Las Administraciones Públicas asistirán en el uso de medios electrónicos a» con «Los interesados obligados a relacionarse con la administración por medio electrónico que así lo soliciten»; el artículo 12 lo relaciona con «Los interesados no obligados a relacionarse con la administración por medio electrónico que así lo soliciten».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los interesados obligados a relacionarse con la administración por medio electrónico que así lo soliciten» no expresa la regla que el artículo 12 aplica a «Las Administraciones Públicas asistirán en el uso de medios electrónicos a»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 12 establece que las Administraciones Públicas asistirán en el uso de medios electrónicos a los interesados no incluidos en los apartados 2 y 3 del artículo 14 que así lo soliciten. Esa previsión conduce a «Especialmente en lo referente a la identificación y firma electrónica».",
      "descartes": {
        "a": "En «Dicha asistencia será», la alternativa A introduce «Únicamente» donde la norma dispone «Especialmente».",
        "c": "En «Dicha asistencia será», la alternativa C introduce «Salvo» donde la norma dispone «Especialmente»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "La regulación del artículo 12 comprende «Su identificación o firma electrónica en el procedimiento administrativo podrá ser válidamente realizada por un…» y «de lo que deberá quedar constancia para los casos de discrepancia o litigio». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Su identificación o firma electrónica en el procedimiento administrativo podrá ser válidamente realizada por un funcionario público…», pero resulta incompleta porque también debe incluirse «será necesario que el interesado se identifique ante el funcionario y preste su consentimiento expreso para esta actuación».",
        "b": "La alternativa B recoge «será necesario que el interesado se identifique ante el funcionario y preste su consentimiento expreso para esta actuación», pero resulta incompleta porque también debe incluirse «Su identificación o firma electrónica en el procedimiento administrativo podrá ser válidamente realizada por un funcionario público…»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La regla del artículo 12 es la Administración General del Estado, las Comunidades Autónomas y las Entidades Locales mantendrán actualizado un registro, u otro sistema equivalente, donde constarán los funcionarios habilitados para la identificación o firma regulada en este artículo. En este supuesto se ajusta a «La Administración General del Estado, las Comunidades Autónomas y las Entidades Locales».",
      "descartes": {
        "b": "En «Mantendrán actualizado un registro», la alternativa B introduce «Los organismos vinculados a las administraciones de la respuesta anterior» donde la norma dispone «La Administración General del Estado, las Comunidades Autónomas y las Entidades Locales».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los organismos vinculados a las administraciones de la respuesta anterior» no expresa la regla que el artículo 12 aplica a «Mantendrán actualizado un registro»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El artículo 12 dispone que estos registros o sistemas deberán ser plenamente interoperables y estar interconectados con los de las restantes Administraciones Públicas, a los efectos de comprobar la validez de las citadas habilitaciones. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «para comprobar la validez de las citadas habilitaciones y», la alternativa A introduce «únicamente,» donde la norma dispone «al menos,».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Constarán, al menos, los funcionarios que presten servicios en las oficinas de asistencia en materia de registros» sí está respaldada por el artículo 12."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-31-procedimiento-administrativo",
  references: {
    "1": articleReference(9),
    "2": articleReference(9),
    "3": articleReference(9),
    "4": articleReference(9),
    "5": articleReference(9),
    "6": articleReference(9),
    "7": articleReference(9),
    "8": articleReference(9),
    "9": articleReference(10),
    "10": articleReference(10),
    "11": articleReference(9),
    "12": articleReference(10),
    "13": articleReference(9),
    "14": articleReference(10),
    "15": articleReference(10),
    "16": articleReference(10),
    "17": articleReference(10),
    "18": articleReference(11),
    "19": articleReference(11),
    "20": articleReference(11),
    "21": articleReference(8),
    "22": articleReference(7),
    "23": articleReference(12),
    "24": articleReference(12),
    "25": articleReference(12),
    "26": articleReference(12),
    "27": articleReference(12),
  },
});
