import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-3-a-8",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 3 comprende «Las personas que la ostenten con arreglo a las normas civiles» y «Los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuación esté permitida…». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Las personas que la ostenten con arreglo a las normas civiles», pero resulta incompleta porque también debe incluirse «Los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuación esté permitida por el…».",
        "b": "La alternativa B recoge «Los menores de edad para el ejercicio y defensa de aquellos de sus derechos e intereses cuya actuación esté permitida por el…», pero resulta incompleta porque también debe incluirse «Las personas que la ostenten con arreglo a las normas civiles»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 3 es las Administraciones Públicas sirven con objetividad los intereses generales y actúan de acuerdo con los principios de eficacia, jerarquía, descentralización, desconcentración y coordinación, con sometimiento pleno a la Constitución, a la Ley y al Derecho. En este supuesto se ajusta a «Los menores incapacitados, cuando la extensión de la incapacitación afecte al ejercicio y defensa de sus derechos e intereses de que se trate».",
      "descartes": {
        "a": "En «Se exceptúan de lo anterior: artículo 3», la alternativa A introduce «de 16 años» donde la norma dispone «cuando la extensión de la incapacitación afecte al ejercicio y defensa de sus derechos e intereses de que se trate».",
        "b": "En «Se exceptúan de lo anterior: artículo 3», la alternativa B introduce «Todos los menores incapacitados» donde la norma dispone «Los menores incapacitados»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 4 dispone que quienes lo promuevan como titulares de derechos o intereses legítimos individuales o colectivos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Tienen la condición de interesados: artículo 4», la alternativa B introduce «sin haber iniciado el procedimiento» donde la norma dispone «Quienes promuevan como titulares de derechos o intereses legítimos individuales o colectivos».",
        "c": "La alternativa C vincula «Tienen la condición de interesados: artículo 4» con «Aquellos cuyos derechos legítimos»; el artículo 4 lo relaciona con «Quienes promuevan como titulares de derechos o intereses legítimos individuales o colectivos»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 4 establece que las asociaciones y organizaciones representativas de intereses económicos y sociales serán titulares de intereses legítimos colectivos en los términos que la Ley reconozca. Esa previsión conduce a «Serán titulares de intereses legítimos colectivos en los términos que la Ley reconozca».",
      "descartes": {
        "b": "En «Las asociaciones y organizaciones representativas de intereses económicos y sociales: artículo 4», la alternativa B introduce «derechos» donde la norma dispone «intereses legítimos».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Serán titulares de derechos colectivos en los términos que la Ley reconozca» no expresa la regla que el artículo 4 aplica a «Las asociaciones y organizaciones representativas de intereses económicos y sociales: artículo 4»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 4, cuando la condición de interesado derivase de alguna relación jurídica transmisible, el derecho-habiente sucederá en tal condición cualquiera que sea el estado del procedimiento. Por eso encaja «Cualquiera que sea el estado de tramitación».",
      "descartes": {
        "a": "En «Cuando la condición de interesado derivase de alguna relación jurídico transmisible», la alternativa A introduce «Siempre que estemos ya en la propuesta de resolución» donde la norma dispone «Cualquiera que sea el estado de tramitación».",
        "b": "En «Cuando la condición de interesado derivase de alguna relación jurídico transmisible», la alternativa B introduce «Siempre que estemos en un momento anterior al trámite de audiencia» donde la norma dispone «Cualquiera que sea el estado de tramitación»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 5 es los interesados con capacidad de obrar podrán actuar por medio de representante, entendiéndose con éste las actuaciones administrativas, salvo manifestación expresa en contra del interesado. En este supuesto se ajusta a «Los interesados con capacidad de obrar».",
      "descartes": {
        "a": "En «Podrán actuar por medio de representante: artículo 5», la alternativa A introduce «Todos los interesados» donde la norma dispone «Los interesados con capacidad de obrar».",
        "c": "En «Podrán actuar por medio de representante: artículo 5», la alternativa C introduce «sin» donde la norma dispone «con»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 5 dispone que los interesados con capacidad de obrar podrán actuar por medio de representante, entendiéndose con éste las actuaciones administrativas, salvo manifestación expresa en contra del interesado. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Podrán realizar mediante representante: artículo 5», la alternativa A introduce «la interposición de recursos y el desistimiento de acciones» donde la norma dispone «manifestación expresa en contra del interesado».",
        "b": "En «Podrán realizar mediante representante: artículo 5», la alternativa B introduce «la renuncia de derechos y formular solicitudes» donde la norma dispone «manifestación expresa en contra del interesado»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 5 establece que las personas físicas con capacidad de obrar y las personas jurídicas, siempre que ello esté previsto en sus Estatutos, podrán actuar en representación de otras ante las Administraciones Públicas. Esa previsión conduce a «Cualquier persona con capacidad de obrar».",
      "descartes": {
        "a": "La alternativa A vincula «Podrá actuar en representación de otra ante las Administraciones Públicas: artículo 5» con «Cualquier persona»; el artículo 5 lo relaciona con «Cualquier persona con capacidad de obrar».",
        "c": "En «Podrá actuar en representación de otra ante las Administraciones Públicas: artículo 5», la alternativa C introduce «mayor de edad» donde la norma dispone «con capacidad de obrar»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 5, para formular solicitudes, presentar declaraciones responsables o comunicaciones, interponer recursos, desistir de acciones y renunciar a derechos en nombre de otra persona, deberá acreditarse la representación. Por eso encaja «Deberá acreditarse por cualquier medio válido en derecho que deje constancia fidedigna».",
      "descartes": {
        "b": "En «Para formular solicitudes», la alternativa B introduce «mediante declaración en comparecencia personal del interesado» donde la norma dispone «por cualquier medio válido en derecho que deje constancia fidedigna».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Deberá acreditarse mediante declaración en comparecencia personal del interesado» no expresa la regla que el artículo 5 aplica a «Para formular solicitudes»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 5 es para los actos y gestiones de mero trámite se presumirá aquella representación. En este supuesto se ajusta a «Se presumirá dicha representación».",
      "descartes": {
        "a": "En «Para los actos y gestiones de mero trámite: artículo 5», la alternativa A introduce «deberá acreditar la representación, en todo caso» donde la norma dispone «presumirá dicha representación».",
        "b": "En «Para los actos y gestiones de mero trámite: artículo 5», la alternativa B introduce «deberá acreditar la representación cuando lo señale la administración» donde la norma dispone «presumirá dicha representación»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 5 dispone que la falta o insuficiente acreditación de la representación no impedirá que se tenga por realizado el acto de que se trate. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La falta o insuficiencia de acreditación de la representación: artículo 5», la alternativa A introduce «Impedirá que se tenga por realizado el acto de que se trate» donde la norma dispone «No impedirá que se tenga por realizado el acto de que se trate».",
        "c": "Para «La falta o insuficiencia de acreditación de la representación: artículo 5», la alternativa C utiliza «15», pero la previsión aplicable fija «10»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 5 recoge las dos previsiones: «Mediante apud acta efectuado por comparecer personal o electrónica en sede electrónica» y «Mediante acreditación de su inscripción en el registro electrónico de apoderamientos de la Administración Pública…». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Mediante apud acta efectuado por comparecer personal o electrónica en sede electrónica», pero resulta incompleta porque también debe incluirse «Mediante acreditación de su inscripción en el registro electrónico de apoderamientos de la Administración Pública competente».",
        "b": "La alternativa B recoge «Mediante acreditación de su inscripción en el registro electrónico de apoderamientos de la Administración Pública competente», pero resulta incompleta porque también debe incluirse «Mediante apud acta efectuado por comparecer personal o electrónica en sede electrónica»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "La regulación del artículo 5 comprende «Se deberá especificar las condiciones y obligaciones a las que se compromete el representante» y «Determinará la presunción de validez de la representación, salvo excepciones». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Se deberá especificar las condiciones y obligaciones a las que se compromete el representante», pero resulta incompleta porque también debe incluirse «Determinará la presunción de validez de la representación, salvo excepciones».",
        "b": "La alternativa B recoge «Determinará la presunción de validez de la representación, salvo excepciones», pero resulta incompleta porque también debe incluirse «Se deberá especificar las condiciones y obligaciones a las que se compromete el representante»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 6 recoge tanto «La Administración General del Estado» como «La Administración de las Comunidades Autónomas y las Entidades Locales». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «La Administración General del Estado», pero resulta incompleta porque también debe incluirse «La Administración de las Comunidades Autónomas y las Entidades Locales».",
        "b": "La alternativa B recoge «La Administración de las Comunidades Autónomas y las Entidades Locales», pero resulta incompleta porque también debe incluirse «La Administración General del Estado»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 6 dispone que en el que deberán inscribirse; los de carácter general otorgados apud acta; presencial o electrónicamente. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «En dichos registros deberán inscribirse los siguientes apoderamientos: Artículo 6», la alternativa B introduce «Sólo,» donde la norma dispone «Al menos,».",
        "c": "En «En dichos registros deberán inscribirse los siguientes apoderamientos: Artículo 6», la alternativa C introduce «Todos los apoderamientos» donde la norma dispone «Al menos, los de carácter general»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 6 establece que los registros generales de apoderamientos no impedirán la existencia de registros particulares en cada Organismo donde se inscriban los poderes otorgados para la realización de trámites específicos en el mismo. Esa previsión conduce a «Podrán disponer registros de apoderamientos donde se inscriben los poderes otorgados para la realización de trámites específicos en el mismo».",
      "descartes": {
        "a": "En «Los Organismos: Artículo 6», la alternativa A introduce «Deberán tener» donde la norma dispone «Podrán disponer».",
        "c": "En «Los Organismos: Artículo 6», la alternativa C introduce «No podrán disponer de» donde la norma dispone «Podrán disponer»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El artículo 6 recoge tanto «Deberán ser plenamente interoperables entre sí» como «Permitirán comprobar válidamente la representación de quienes actúen ante las Administraciones en nombre de un tercero». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Deberán ser plenamente interoperables entre sí», pero resulta incompleta porque también debe incluirse «Permitirán comprobar válidamente la representación de quienes actúen ante las Administraciones en nombre de un tercero».",
        "b": "La alternativa B recoge «Permitirán comprobar válidamente la representación de quienes actúen ante las Administraciones en nombre de un tercero», pero resulta incompleta porque también debe incluirse «Deberán ser plenamente interoperables entre sí»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 6 es un poder general para que el apoderado pueda actuar en nombre del poderdante en cualquier actuación administrativa y ante cualquier Administración. En este supuesto se ajusta a «Para que el apoderado pueda actuar en nombre del poderdante en cualquier actuación administrativa y ante cualquier Administración».",
      "descartes": {
        "b": "En «Hay tres tipos de poderes ¿Cuál de todos ellos es el general? Artículo 6», la alternativa B introduce «ante una Administración u Organismo concreto» donde la norma dispone «y ante cualquier Administración».",
        "c": "En «Hay tres tipos de poderes ¿Cuál de todos ellos es el general? Artículo 6», la alternativa C introduce «únicamente para la realización de determinados trámites especificados en el poder» donde la norma dispone «en cualquier actuación administrativa y ante cualquier Administración»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 6 dispone que la Administración General del Estado. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Los modelos de poderes inscribibles en el registro distinguiendo si permiten la actuación ante todas las…», la alternativa B introduce «Cualquier Administración Pública» donde la norma dispone «La Administración General del Estado o ante las Entidades Locales».",
        "c": "La alternativa C vincula «Los modelos de poderes inscribibles en el registro distinguiendo si permiten la actuación ante todas las…» con «La Administración General del Estado»; el artículo 6 lo relaciona con «La Administración General del Estado o ante las Entidades Locales»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 6 establece que (Párrafo anulado) Cada Comunidad Autónoma aprobará los modelos de poderes inscribibles en el registro cuando se circunscriba a actuaciones ante su respectiva Administración. Esa previsión conduce a «Cada Comunidad Autónoma».",
      "descartes": {
        "a": "En «Aprobará los modelos de poderes inscribibles en el registro cuando se circunscriba a actuaciones ante su…», la alternativa A introduce «La Administración General del Estado» donde la norma dispone «Cada Comunidad Autónoma».",
        "c": "En «Aprobará los modelos de poderes inscribibles en el registro cuando se circunscriba a actuaciones ante su…», la alternativa C introduce «Entidad Local» donde la norma dispone «Comunidad Autónoma»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El artículo 6 recoge las dos previsiones: «En la correspondiente sede electrónica haciendo uso de los sistemas de firma electrónica» y «En las oficinas de asistencia en materia de registro». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «En la correspondiente sede electrónica haciendo uso de los sistemas de firma electrónica», pero resulta incompleta porque también debe incluirse «En las oficinas de asistencia en materia de registro».",
        "b": "La alternativa B recoge «En las oficinas de asistencia en materia de registro», pero resulta incompleta porque también debe incluirse «En la correspondiente sede electrónica haciendo uso de los sistemas de firma electrónica»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 6 es los poderes inscritos en el registro tendrán una validez determinada máxima de cinco años a contar desde la fecha de inscripción. En este supuesto se ajusta a «Máxima de 5 años desde la fecha de inscripción».",
      "descartes": {
        "a": "En «Los poderes inscritos en el registro tendrán una validez determinada: artículo 6», la alternativa A introduce «De 5 años a contar» donde la norma dispone «Máxima de 5 años».",
        "c": "En «Los poderes inscritos en el registro tendrán una validez determinada: artículo 6», la alternativa C introduce «Mínima» donde la norma dispone «Máxima»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 6 dispone que las prórrogas otorgadas por el poderdante al registro tendrán una validez determinada máxima de cinco años a contar desde la fecha de inscripción. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «Las prórrogas otorgadas por el poderdante al registro tendrán una validez determinada: art. 6» con «De 5 años a contar desde la fecha de inscripción»; el artículo 6 lo relaciona con «Máxima de 5 años a contar desde la fecha de inscripción».",
        "c": "En «Las prórrogas otorgadas por el poderdante al registro tendrán una validez determinada: art. 6», la alternativa C introduce «Mínima» donde la norma dispone «Máxima»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 6 establece que las solicitudes de inscripción del poder. Esa previsión conduce a «Podrán dirigirse a cualquier registro».",
      "descartes": {
        "a": "En «Las solicitudes de inscripción del poder, de revocación, de prórroga o de denuncia del mismo: artículo 6», la alternativa A introduce «Deberán dirigirse siempre al mismo» donde la norma dispone «Podrán dirigirse a cualquier».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Podrán dirigirse a cualquier registro» sí está respaldada por el artículo 6."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Según el artículo 7, cuando en una solicitud, escrito o comunicación figuren varios interesados, las actuaciones a que den lugar se efectuarán con el representante o el interesado que expresamente hayan señalado, y, en su defecto, con el que figure en primer término. Por eso encaja «El representante o el interesado que expresamente hayan señalado, y en su defecto, con el que figure en primer término».",
      "descartes": {
        "a": "En «escrito o comunicación figuren varios interesados», la alternativa A introduce «que figure en primer término, y en su defecto, con el representante o el interesado que expresamente se hayan señalado» donde la norma dispone «representante o el interesado que expresamente hayan señalado, y en su defecto, con el que figure en primer término».",
        "c": "En «escrito o comunicación figuren varios interesados», la alternativa C introduce «que figure en primer término siempre» donde la norma dispone «representante o el interesado que expresamente hayan señalado, y en su defecto, con el que figure en primer término»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La regla del artículo 8 es si durante la instrucción de un procedimiento que no haya tenido publicidad. En este supuesto se ajusta a «Les comunicará la tramitación del procedimiento, cuando no haya habido publicidad legal».",
      "descartes": {
        "a": "En «Si durante la instrucción de un procedimiento la administración tiene conocimiento de la existencia de…», la alternativa A introduce «Le comunicará en todo caso la tramitación del procedimiento» donde la norma dispone «Les comunicará la tramitación del procedimiento, cuando no haya habido publicidad legal».",
        "c": "En «Si durante la instrucción de un procedimiento la administración tiene conocimiento de la existencia de…», la alternativa C introduce «No les comunicará en ningún caso la tramitación del procedimiento» donde la norma dispone «Les comunicará la tramitación del procedimiento, cuando no haya habido publicidad legal»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-31-procedimiento-administrativo",
  references: {
    "1": articleReference(3),
    "2": articleReference(3),
    "3": articleReference(4),
    "4": articleReference(4),
    "5": articleReference(4),
    "6": articleReference(5),
    "7": articleReference(5),
    "8": articleReference(5),
    "9": articleReference(5),
    "10": articleReference(5),
    "11": articleReference(5),
    "12": articleReference(5),
    "13": articleReference(5),
    "14": articleReference(6),
    "15": articleReference(6),
    "16": articleReference(6),
    "17": articleReference(6),
    "18": articleReference(6),
    "19": articleReference(6),
    "20": articleReference(6),
    "21": articleReference(6),
    "22": articleReference(6),
    "23": articleReference(6),
    "24": articleReference(6),
    "25": articleReference(7),
    "26": articleReference(8),
  },
});
