import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-40-2015-articulos-15-a-18",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 15 comprende «Esta ley» y «Las peculiaridades organizativas de cada administración». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Esta ley», pero resulta incompleta porque también debe incluirse «Las peculiaridades organizativas de cada administración».",
        "b": "La alternativa B recoge «Las peculiaridades organizativas de cada administración», pero resulta incompleta porque también debe incluirse «Esta ley»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 15 es los órganos colegiados de las distintas Administraciones Públicas en que participen organizaciones representativas de intereses sociales. En este supuesto se ajusta a «Los órganos colegiados en que participen organizaciones representativas de intereses sociales».",
      "descartes": {
        "b": "En «Podrán establecer o completar sus propias normas de funcionamiento», la alternativa B introduce «compuestos por representaciones de distintas Administraciones, siempre que cuenten con participación de» donde la norma dispone «colegiados en que participen».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los órganos compuestos por representaciones de distintas Administraciones» no expresa la regla que el artículo 15 aplica a «Podrán establecer o completar sus propias normas de funcionamiento»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 15 dispone que aunque sin participar en la estructura jerárquica de ésta; salvo que así lo establezcan sus normas de creación; se desprenda de sus funciones o de la propia naturaleza del órgano colegiado. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Los órganos de la pregunta anterior», la alternativa A introduce «participando» donde la norma dispone «aunque sin participar».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Quedan integrados en la Administración Púbica que corresponda» sí está respaldada por el artículo 15."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 15 establece que el acuerdo de creación y las normas de funcionamiento de los órganos colegiados que dicten resoluciones que tengan efectos jurídicos frente a terceros deberán ser publicados en el Boletín o Diario Oficial de la Administración Pública en que se integran. Esa previsión conduce a «Órganos colegiados que dicten resoluciones que tengan efectos jurídicos frente a terceros».",
      "descartes": {
        "b": "En «El acuerdo de creación y las normas de funcionamiento deberán ser publicados en e l Boletín o Diario Oficial…», la alternativa B introduce «cuya intervención sea preceptiva» donde la norma dispone «que dicten resoluciones que tengan efectos jurídicos frente a terceros».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Órganos colegiados cuya intervención sea preceptiva» no expresa la regla que el artículo 15 aplica a «El acuerdo de creación y las normas de funcionamiento deberán ser publicados en e l Boletín o Diario Oficial…»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 15, cuando se trate de un órgano colegiado a los que se refiere el apartado 2 de este artículo la citada publicidad se realizará por la Administración a quien corresponda la Presidencia. Por eso encaja «La Administración a quien corresponda la Presidencia».",
      "descartes": {
        "a": "En «Si en el caso de la pregunta anterior», la alternativa A introduce «Las Administraciones que estén implicadas» donde la norma dispone «La Administración a quien corresponda la Presidencia».",
        "c": "En «Si en el caso de la pregunta anterior», la alternativa C introduce «Secretaría» donde la norma dispone «Presidencia»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 16 recoge las dos previsiones: «Un miembro del propio órgano» y «Una persona al servicio de la Administración Pública correspondiente». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Un miembro del propio órgano», pero resulta incompleta porque también debe incluirse «Una persona al servicio de la Administración Pública correspondiente».",
        "b": "La alternativa B recoge «Una persona al servicio de la Administración Pública correspondiente», pero resulta incompleta porque también debe incluirse «Un miembro del propio órgano»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 16 dispone que corresponderá al Secretario velar por la legalidad formal y material de las actuaciones del órgano colegiado, certificar las actuaciones del mismo y garantizar que los procedimientos y reglas de constitución y adopción de acuerdos son respetadas. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Corresponderá al Secretario», la alternativa B introduce «Visar las certificaciones con» donde la norma dispone «Velar por la legalidad formal y material de».",
        "c": "En «Corresponderá al Secretario», la alternativa C introduce «Sancionar cuando los procedimientos y reglas de constitución y adopción de acuerdos no son respetadas» donde la norma dispone «Velar por la legalidad formal y material de las actuaciones del órgano colegiado»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 16 establece que en caso de que el Secretario no miembro sea suplido por un miembro del órgano colegiado, éste conservará todos sus derechos como tal. Esa previsión conduce a «Éste conservará todos sus derechos como tal».",
      "descartes": {
        "b": "En «En el caso de que el Secretario no miembrosea suplido por un miembro del órgano colegiado», la alternativa B introduce «perderá» donde la norma dispone «conservará».",
        "c": "En «En el caso de que el Secretario no miembrosea suplido por un miembro del órgano colegiado», la alternativa C introduce «El enunciado no es posible porque un Secretario no miembro debe ser suplido por una persona que no sea miembro del órgano…» donde la norma dispone «Éste conservará todos sus derechos como tal»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 17, todos los órganos colegiados se podrán constituir, convocar, celebrar sus sesiones, adoptar acuerdos y remitir actas tanto de forma presencial como a distancia, salvo que su reglamento interno recoja expresa y excepcionalmente lo contrario. Por eso encaja «De forma presencial como a distancia, salvo que su reglamento interno recoja expresa y excepcionalmente lo contrario».",
      "descartes": {
        "a": "En «Todos los órganos colegiados se podrán constituir», la alternativa A introduce «siempre que el reglamento interno recoja expresa y excepcionalmente esta última posibilidad» donde la norma dispone «salvo que su reglamento interno recoja expresa y excepcionalmente lo contrario».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «De forma presencial como a distancia» no expresa la regla que el artículo 17 aplica a «Todos los órganos colegiados se podrán constituir»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 17 es la identidad de los miembros o personas que los suplan; el contenido de sus manifestaciones; así como la interactividad e intercomunicación entre ellos en tiempo real y la disponibilidad de los medios durante la sesión. Entre otros. En este supuesto se ajusta a «Se utilizarán medios electrónicos que aseguren la identidad de los miembros o personas que los suplan».",
      "descartes": {
        "b": "La alternativa B vincula «En las sesiones que se celebran por órganos colegiados a distancia» con «Se utilizarán, únicamente, el correo electrónico, las audioconferencias y las videoconferencias»; el artículo 17 lo relaciona con «Se utilizarán medios electrónicos que aseguren la identidad de los miembros o personas que los suplan».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Se utilizarán, únicamente, el correo electrónico, las audioconferencias y las videoconferencias» no expresa la regla que el artículo 17 aplica a «En las sesiones que se celebran por órganos colegiados a distancia»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 17 recoge tanto «Presencial del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros» como «A distancia del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Presencial del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros», pero resulta incompleta porque también debe incluirse «A distancia del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros».",
        "b": "La alternativa B recoge «A distancia del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros», pero resulta incompleta porque también debe incluirse «Presencial del Presidente y Secretario o en su caso, de quienes les suplan, y la de la mitad, al menos, de sus miembros»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 17 contempla una regla especial para los órganos colegiados del artículo 15.2: pueden quedar válidamente constituidos con los representantes públicos y sociales que tengan la condición de portavoces. Esa es la composición descrita en la respuesta.",
      "descartes": {
        "b": "La alternativa B vincula «Cuando se trate de los órganos colegiados del artículo 15.2» con «Los representantes de las Administraciones Pú blicas y de las organizaciones representativas de intereses sociales miembros del órgano a…»; el artículo 17 lo relaciona con «Los representantes de las Administraciones Públicas y de las organizaciones representativas de intereses sociales miembros del órgano a los…».",
        "c": "En «Cuando se trate de los órganos colegiados del artículo 15.2», la alternativa C introduce «Presidentes» donde la norma dispone «portavoces»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 17, el Secretario y todos los miembros del órgano colegiado; o en su caso las personas que les suplan; deliberaciones y adopción de acuerdos sin necesidad de convocatoria previa cuando así lo decidan todos sus miembros. Por eso encaja «Cuando estuvieran reunidos, de manera presencial o a distancia, el Secretario y todos los miembros del órgano colegiado, en su caso las personas que les suplan».",
      "descartes": {
        "b": "La alternativa B vincula «Celebración de sesiones, deliberaciones y adopción de acuerdos sin necesidad de convocatoria previa» con «Cuando así lo decidan la mayoría de sus miembros»; el artículo 17 lo relaciona con «Cuando estuvieran reunidos».",
        "c": "La alternativa C vincula «Celebración de sesiones, deliberaciones y adopción de acuerdos sin necesidad de convocatoria previa» con «Ambas respuestas son requisitos para realizar el enunciado de la pregunta»; el artículo 17 lo relaciona con «Cuando estuvieran reunidos»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 17 es tal régimen podrá prever una segunda convocatoria y especificar para ésta el número de miembros necesarios para constituir válidamente el órgano. En este supuesto se ajusta a «Dicho régimen podrá prever una segunda convocatoria y especificar para ésta el número de miembros necesarios para constituir válidamente el órgano».",
      "descartes": {
        "a": "En este supuesto, la alternativa A introduce «Los órganos colegiados podrán establecer el régimen propio de convocatorias» donde la norma dispone «Dicho régimen podrá prever una segunda convocatoria y especificar para ésta el número de miembros necesarios para constituir…».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Los órganos colegiados podrán establecer el régimen propio de convocatorias» no expresa la regla que el artículo 17 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 17 exige que la convocatoria indique el orden del día, la documentación disponible, las condiciones de celebración, el sistema de conexión y los medios técnicos necesarios. La remisión electrónica se formula como regla general, pero no en todo caso.",
      "descartes": {
        "a": "La alternativa A vincula este supuesto con «En todo caso, las convocatorias serán remitidas a los miembros del órgano colegiado a través de medios electrónicos»; el artículo 17 lo relaciona con «En la convocatoria se hará constar el orden del día junto con la doc umentación necesaria para su deliberación cuando sea posible».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «las convocatorias serán remitidas a los miembros del órgano colegiado a través de medios electrónicos» no expresa la regla que el artículo 17 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 17 establece que no podrá ser objeto de deliberación o acuerdo ningún asunto que no figure incluido en el orden del día, salvo que asistan todos los miembros del órgano colegiado y sea declarada la urgencia del asunto por el voto favorable de la mayoría. Esa previsión conduce a «Que asistan todos los miembros del órgano colegiado y sea declarada la urgencia del asunto por el voto favorable de la mayoría».",
      "descartes": {
        "b": "En «No podrán ser objeto de deliberación o acuerdo ningún asunto que no figure en el orden del día, salvo», la alternativa B introduce «la mayoría de los miembros del órgano colegiado y sea declarada la urgencia del asunto por el voto favorable de todos los…» donde la norma dispone «todos los miembros del órgano colegiado y sea declarada la urgencia del asunto por el voto favorable de la mayoría».",
        "c": "En «No podrán ser objeto de deliberación o acuerdo ningún asunto que no figure en el orden del día, salvo», la alternativa C introduce «la mayoría de» donde la norma dispone «todos»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El artículo 17 recoge tanto «Los acuerdos serán adoptados por mayoría de los miembros del órgano colegiado» como «Cuando se asista a distancia». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Los acuerdos serán adoptados por mayoría de los miembros del órgano colegiado», pero resulta incompleta porque también debe incluirse «Cuando se asista a distancia».",
        "b": "La alternativa B recoge «Cuando se asista a distancia», pero resulta incompleta porque también debe incluirse «Los acuerdos serán adoptados por mayoría de los miembros del órgano colegiado»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El artículo 17 recoge las dos previsiones: «Cuando los miembros del órgano voten en contra» y «Cuando los miembros se abstengan». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Cuando los miembros del órgano voten en contra», pero resulta incompleta porque también debe incluirse «Cuando los miembros se abstengan».",
        "b": "La alternativa B recoge «Cuando los miembros se abstengan», pero resulta incompleta porque también debe incluirse «Cuando los miembros del órgano voten en contra»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 17 dispone que quienes acrediten la titularidad de un interés legítimo podrán dirigirse al Secretario de un órgano colegiado para que les sea expedida certificación de sus acuerdos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Certificación de los acuerdos del órgano colegiado», la alternativa A introduce «Será expedido por el Presidente de un órgano colegiado» donde la norma dispone «Se podrá solicitar por quienes acrediten la titularidad de un interés legítimo».",
        "c": "La alternativa C vincula «Certificación de los acuerdos del órgano colegiado» con «Será expedida por medios electró nicos»; el artículo 17 lo relaciona con «Se podrá solicitar por quienes acrediten la titularidad de un interés legítimo»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 18 recoge tanto «De cada sesión que celebre el órgano colegiado se levantará acta por el Secretario» como «Especificará necesariamente los asistentes». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «De cada sesión que celebre el órgano colegiado se levantará acta por el Secretario», pero resulta incompleta porque también debe incluirse «Especificará necesariamente los asistentes».",
        "b": "La alternativa B recoge «Especificará necesariamente los asistentes», pero resulta incompleta porque también debe incluirse «De cada sesión que celebre el órgano colegiado se levantará acta por el Secretario»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 18, podrán grabarse las sesiones que celebre el órgano colegiado. Por eso encaja «En dicho caso no es necesario hacer constar en el acta de las sesiones los puntos principales de las deliberaciones».",
      "descartes": {
        "a": "La alternativa A vincula «Podrán grabarse las sesiones q ue celebre el órgano colegiado» con «El fichero resultante de la grabación»; el artículo 18 lo relaciona con «En dicho caso no es necesario hacer constar en el acta de las sesiones los puntos principales de las deliberaciones».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El fichero resultante de la grabación» no expresa la regla que el artículo 18 aplica a «Podrán grabarse las sesiones q ue celebre el órgano colegiado»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 18 es el acta de cada sesión podrá aprobarse en la misma reunión o en la inmediata siguiente. El Secretario elaborará el acta con el visto bueno del Presidente y lo remitirá a través de medios electrónicos. En este supuesto se ajusta a «El Secretario elaborará el acta con el visto bueno del Presidente y lo remitirá a través de medios electrónicos, a los miembros del órgano colegiado».",
      "descartes": {
        "a": "En este supuesto, la alternativa A introduce «acta de cada sesión se deberá aprobar en la sesión inmediata siguiente» donde la norma dispone «Secretario elaborará el acta con el visto bueno del Presidente y lo remitirá a través de medios electrónicos».",
        "c": "La alternativa C vincula este supuesto con «Los miembros podrán manifestar por medios electrónicos su confor midad o reparos al texto»; el artículo 18 lo relaciona con «El Secretario elaborará el acta con el visto bueno del Presidente y lo remitirá a través de medios electrónicos»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 17 dispone que los órganos colegiados podrán establecer el régimen propio de convocatorias, si éste no está previsto por sus normas de funcionamiento. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Los órganos colegiados», la alternativa A introduce «Solamente pueden reunirse en primera convocatoria» donde la norma dispone «Podrán establecer su propio régimen de convocator ias».",
        "c": "En «Los órganos colegiados», la alternativa C introduce «En ningún caso podrá haber una segunda convocatoria» donde la norma dispone «Podrán establecer su propio régimen de convocator ias»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 17 establece que tal régimen podrá prever una segunda convocatoria y especificar para ésta el número de miembros necesarios para constituir válidamente el órgano. Esa previsión conduce a «Se podrá establecer un quórum diferente al de la primera convocatoria».",
      "descartes": {
        "a": "En «Si existiese la posibilidad de una segunda convocatoria», la alternativa A introduce «requerirá el mismo quórum que en» donde la norma dispone «podrá establecer un quórum diferente al de».",
        "c": "En «Si existiese la posibilidad de una segunda convocatoria», la alternativa C introduce «No cabe dicha posibilidad» donde la norma dispone «Se podrá establecer un quórum diferente al de la primera convocatoria»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Según el artículo 17, los órganos colegiados podrán establecer el régimen propio de convocatorias. Por eso encaja «Se pueden tratar asuntos que no estén en el orden del día, con unos requisitos».",
      "descartes": {
        "a": "En este supuesto, la alternativa A introduce «No se pueden tratar asuntos que no estén en el orden del día» donde la norma dispone «Se pueden tratar asuntos que no estén en el orden del día, con unos requisitos».",
        "b": "En este supuesto, la alternativa B introduce «sin ninguna limitación» donde la norma dispone «con unos requisitos»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La regla del artículo 17 es no podrá ser objeto de deliberación o acuerdo ningún asunto que no figure incluido en el orden del día, salvo que asistan todos los miembros del órgano colegiado y sea declarada la urgencia del asunto por el voto favorable de la mayoría. En este supuesto se ajusta a «Que estén todos los miembros».",
      "descartes": {
        "a": "En «Para que se pueden incluir temas que no estén en el orden del día se requiere», la alternativa A introduce «la mayoría de» donde la norma dispone «todos».",
        "c": "En «Para que se pueden incluir temas que no estén en el orden del día se requiere», la alternativa C introduce «Dicha posibilidad no existe» donde la norma dispone «Que estén todos los miembros»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El artículo 17 dispone que los acuerdos serán adoptados por mayoría de votos. Cuando se asista a distancia, los acuerdos se entenderán adoptados en el lugar donde tenga la sede el órgano colegiado y, en su defecto, donde esté ubicada la presidencia. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Y lo tienen que decidir», la alternativa A introduce «unanimidad» donde la norma dispone «mayoría».",
        "c": "En «Y lo tienen que decidir», la alternativa C introduce «Dicha posibilidad no existe» donde la norma dispone «Por mayoría»."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "El artículo 17 establece que los acuerdos serán adoptados por mayoría de votos. Cuando se asista a distancia, los acuerdos se entenderán adoptados en el lugar donde tenga la sede el órgano colegiado y, en su defecto, donde esté ubicada la presidencia. Esa previsión conduce a «Por mayoría simple».",
      "descartes": {
        "a": "En «Los acuerdos se adoptarán», la alternativa A introduce «unanimidad» donde la norma dispone «mayoría simple».",
        "b": "En «Los acuerdos se adoptarán», la alternativa B introduce «absoluta» donde la norma dispone «simple»."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "Según el artículo 17, quienes acrediten la titularidad de un interés legítimo podrán dirigirse al Secretario de un órgano colegiado para que les sea expedida certificación de sus acuerdos. Por eso encaja «Los que acrediten un interés legítimo».",
      "descartes": {
        "a": "En «Podrán solicitar que se les expida una certificación del acuerdo adoptado», la alternativa A introduce «Cualquier persona» donde la norma dispone «Los que acrediten un interés legítimo».",
        "b": "En «Podrán solicitar que se les expida una certificación del acuerdo adoptado», la alternativa B introduce «hayan adoptado el acuerdo» donde la norma dispone «acrediten un interés legítimo»."
      }
    },
    {
      "preguntaId": 30,
      "justificacion": "La regla del artículo 18 es de cada sesión que celebre el órgano colegiado se levantará acta por el Secretario; las circunstancias del lugar y tiempo en que se ha celebrado; podrán acompañar al acta de las sesiones. En este supuesto se ajusta a «Siempre».",
      "descartes": {
        "a": "En «Las circunstancias del tiempo y lugar constan en el acta», la alternativa A introduce «Si así lo solicita el miembro respectivo» donde la norma dispone «Siempre».",
        "b": "En «Las circunstancias del tiempo y lugar constan en el acta», la alternativa B introduce «Si así lo solicitan todos los miembros» donde la norma dispone «Siempre»."
      }
    },
    {
      "preguntaId": 31,
      "justificacion": "La regulación del artículo 18 comprende «En la misma sesión» y «En la sesión siguiente». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «En la misma sesión», pero resulta incompleta porque también debe incluirse «En la sesión siguiente».",
        "b": "La alternativa B recoge «En la sesión siguiente», pero resulta incompleta porque también debe incluirse «En la misma sesión»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-29-organizacion-administrativa",
  references: {
    "1": articleReference(15),
    "2": articleReference(15),
    "3": articleReference(15),
    "4": articleReference(15),
    "5": articleReference(15),
    "6": articleReference(16),
    "7": articleReference(16),
    "8": articleReference(16),
    "9": articleReference(17),
    "10": articleReference(17),
    "11": articleReference(17),
    "12": articleReference(17),
    "13": articleReference(17),
    "14": articleReference(17),
    "15": articleReference(17),
    "16": articleReference(17),
    "17": articleReference(17),
    "18": articleReference(17),
    "19": articleReference(17),
    "20": articleReference(18),
    "21": articleReference(18),
    "22": articleReference(18),
    "23": articleReference(17),
    "24": articleReference(17),
    "25": articleReference(17),
    "26": articleReference(17),
    "27": articleReference(17),
    "28": articleReference(17),
    "29": articleReference(17),
    "30": articleReference(18),
    "31": articleReference(18),
  },
});
