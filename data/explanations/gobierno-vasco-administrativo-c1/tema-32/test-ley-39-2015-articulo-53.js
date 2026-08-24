import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulo-53",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 53, además del resto de derechos previstos en esta Ley, los interesados en un procedimiento administrativo, tienen los siguientes derechos. Por eso encaja «Los interesados».",
      "descartes": {
        "a": "En «En el artículo 53 de la Ley 39/2015, del 01 de octubre vienen los derechos reconocidos a», la alternativa A introduce «Cualquier persona» donde la norma dispone «Los interesados».",
        "c": "En «En el artículo 53 de la Ley 39/2015, del 01 de octubre vienen los derechos reconocidos a», la alternativa C introduce «Las personas con capacidad de obrar» donde la norma dispone «Los interesados».",
        "d": "En «En el artículo 53 de la Ley 39/2015, del 01 de octubre vienen los derechos reconocidos a», la alternativa D introduce «Personas con personalidad jurídica» donde la norma dispone «Los interesados»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 53 es a identificar a las autoridades y al personal al servicio de las Administraciones Públicas bajo cuya responsabilidad se tramiten los procedimientos. En este supuesto se ajusta a «A identificar a las autoridades y personal bajo cuya responsabilidad se tramita el procedimiento».",
      "descartes": {
        "a": "En «Se tiene derecho», la alternativa A introduce «todas las autoridades y personal al servicio de las administraciones públicas» donde la norma dispone «las autoridades y personal bajo cuya responsabilidad se tramita el procedimiento».",
        "c": "En «Se tiene derecho», la alternativa C introduce «conocer el nombre y apellidos de» donde la norma dispone «identificar a».",
        "d": "La alternativa D no puede aceptar conjuntamente las respuestas: «A identificar a todas las autoridades y personal al servicio de las administraciones públicas» y «A conocer el nombre y apellidos de las autoridades y personal bajo cuya responsabilidad se tramita el…» no expresa la regla que el artículo 53 aplica a «Se tiene derecho»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 53 dispone que y los actos de trámite dictados. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Se tiene derecho», la alternativa A introduce «antes del trámite de audiencia, el estado de tramitación de los procedimientos en los que tenga la condición de interesado» donde la norma dispone «en cualquier momento, los actos de trámite dictados».",
        "b": "En «Se tiene derecho», la alternativa B introduce «el sentido del silencio administrativo que corresponda» donde la norma dispone «en cualquier momento, los actos de trámite dictados».",
        "c": "En «Se tiene derecho», la alternativa C introduce «el órgano competente para la instrucción del procedimiento, que será en todo caso, el competente para la resolución» donde la norma dispone «en cualquier momento, los actos de trámite dictados»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 53 establece que asimismo, también tendrán derecho a acceder y a obtener copia de los documentos contenidos en los citados procedimientos. Esa previsión conduce a «Obtener copia de los documentos contenidos en los citados procedimientos».",
      "descartes": {
        "a": "En «Se tiene derecho a», la alternativa A introduce «que ha aportado el propio interesado» donde la norma dispone «contenidos en los citados procedimientos».",
        "b": "En «Se tiene derecho a», la alternativa B introduce «que elabora la administración durante el procedimiento» donde la norma dispone «contenidos en los citados procedimientos».",
        "d": "La alternativa D no puede aceptar conjuntamente las respuestas: «Obtener copia de los documentos que ha aportado el propio interesado» y «Obtener copia de los documentos que elabora la administración durante el procedimiento» no expresa la regla que el artículo 53 aplica a «Se tiene derecho a»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 53 recoge tanto «A consultar la información del procedimiento en el Punto de Acceso General electrónico de la Administración» como «A obtener copias de los documentos contenidos en los procedimientos mediante la puesta a disposición de las mismas en…». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «A consultar la información del procedimiento en el Punto de Acceso General electrónico de la Administración», pero resulta incompleta porque también debe incluirse «A obtener copias de los documentos contenidos en los procedimientos mediante la puesta a disposición de las mismas en el Punto de…».",
        "b": "La alternativa B recoge «A obtener copias de los documentos contenidos en los procedimientos mediante la puesta a disposición de las mismas en el Punto de…», pero resulta incompleta porque también debe incluirse «A consultar la información del procedimiento en el Punto de Acceso General electrónico de la Administración».",
        "d": "La alternativa D excluye afirmaciones que sí están respaldadas: «A consultar la información del procedimiento en el Punto de Acceso General electrónico de la Administración» y «A obtener copias de los documentos contenidos en los procedimientos mediante la puesta a disposición de las mismas…»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 53 es a no presentar datos y documentos no exigidos por las normas aplicables al procedimiento de que se trate, que ya se encuentren en poder de las Administraciones Públicas o que hayan sido elaborados por éstas. En este supuesto se ajusta a «A no presentar datos y documentos no exigidos por las normas aplicables a ese procedimiento».",
      "descartes": {
        "b": "En «Se tiene derecho a», la alternativa B introduce «que se encuentren en poder de la Administración Pública actuante» donde la norma dispone «no exigidos por las normas aplicables a ese procedimiento».",
        "c": "En «Se tiene derecho a», la alternativa C introduce «que hayan sido elaborados por la Administración Pública actuante» donde la norma dispone «no exigidos por las normas aplicables a ese procedimiento».",
        "d": "La alternativa D no puede aceptar conjuntamente las respuestas: «A no presentar datos y documentos que se encuentren en poder de la Administración Pública actuante» y «A no presentar datos y documentos que hayan sido elaborados por la Administración Pública actuante» no expresa la regla que el artículo 53 aplica a «Se tiene derecho a»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 53 dispone que a obtener información y orientación acerca de los requisitos jurídicos o técnicos que las disposiciones vigentes impongan a los proyectos, actuaciones o solicitudes que se propongan realizar. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «Se tiene derecho a» con «Actuar asistido de asesor siempre para la defensa de sus intereses»; el artículo 53 lo relaciona con «A obtener información y orientación acerca de los requisitos jurídicos o técnicos que las disposiciones vigentes impongan a los proyectos».",
        "b": "La alternativa B vincula «Se tiene derecho a» con «Cumplir las obligaciones de pago a través de medios no electrónicos»; el artículo 53 lo relaciona con «A obtener información y orientación acerca de los requisitos jurídicos o técnicos que las disposiciones vigentes impongan a los proyectos».",
        "d": "La alternativa D vincula «Se tiene derecho a» con «A formular alegaciones»; el artículo 53 lo relaciona con «A obtener información y orientación acerca de los requisitos jurídicos o técnicos que las disposiciones vigentes impongan a los proyectos»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 53 recoge tanto «A no presentar documentos originales salvo que» como «Que se tenga en cuenta todo lo que aporte y alegue por el órgano competente al redactar la propuesta de resolución». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «A no presentar documentos originales salvo que, de manera excepcional, la normativa reguladora aplicable establezca lo contrario», pero resulta incompleta porque también debe incluirse «Que se tenga en cuenta todo lo que aporte y alegue por el órgano competente al redactar la propuesta de resolución».",
        "b": "La alternativa B recoge «Que se tenga en cuenta todo lo que aporte y alegue por el órgano competente al redactar la propuesta de resolución», pero resulta incompleta porque también debe incluirse «A no presentar documentos originales salvo que, de manera excepcional, la normativa reguladora aplicable establezca lo contrario».",
        "d": "La alternativa D excluye afirmaciones que sí están respaldadas: «A no presentar documentos originales salvo que» y «Que se tenga en cuenta todo lo que aporte y alegue por el órgano competente al redactar la propuesta de resolución»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 53, de las infracciones que tales hechos puedan constituir y de las sanciones que; así como de la identidad del instructor; de la autoridad competente para imponer la sanción y de la norma que atribuya tal competencia. Por eso encaja «A ser notificado de los hechos que se le imputen».",
      "descartes": {
        "b": "La alternativa B vincula «En los procedimientos sancionadores existen otros derechos además de los que tiene cualquier interesado» con «A la presunción de existencia de responsabilidad administrativa mientras no se demuestre lo contrario»; el artículo 53 lo relaciona con «A ser notificado de los hechos que se le imputen».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «A la presunción de existencia de responsabilidad administrativa mientras no se demuestre lo contrario» y «Ninguna de las respuestas anteriores es correcta» no expresa la regla que el artículo 53 aplica a «En los procedimientos sancionadores existen otros derechos además de los que tiene cualquier interesado».",
        "d": "La alternativa D no puede descartar todas las respuestas, porque «A ser notificado de los hechos que se le imputen» sí está respaldada por el artículo 53."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(53),
    "2": articleReference(53),
    "3": articleReference(53),
    "4": articleReference(53),
    "5": articleReference(53),
    "6": articleReference(53),
    "7": articleReference(53),
    "8": articleReference(53),
    "9": articleReference(53),
  },
});
