import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-67-69-y-70",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 67, los interesados sólo podrán solicitar el inicio de un procedimiento de responsabilidad patrimonial, cuando no haya prescrito su derecho a reclamar. Por eso encaja «Cuando no haya prescrito su derecho a reclamar».",
      "descartes": {
        "b": "En «Los interesados sólo podrán solicitar el inicio de un procedimiento de responsabilidad patrimonial», la alternativa B introduce «caducado» donde la norma dispone «prescrito».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Cuando no haya caducado su derecho a reclamar» no expresa la regla que el artículo 67 aplica a «Los interesados sólo podrán solicitar el inicio de un procedimiento de responsabilidad patrimonial»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 67 es el derecho a reclamar prescribirá al año de producido el hecho o el acto que motive la indemnización o se manifieste su efecto lesivo. En este supuesto se ajusta a «Al año».",
      "descartes": {
        "a": "En «El derecho a reclamar prescribirá de producido el hecho o el acto que motive la indemnización o se manifieste…», la alternativa A introduce «A los 6 meses» donde la norma dispone «Al año».",
        "c": "En «El derecho a reclamar prescribirá de producido el hecho o el acto que motive la indemnización o se manifieste…», la alternativa C introduce «A los 4 años» donde la norma dispone «Al año»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 67 dispone que en caso de daños de carácter físico o psíquico a las personas, el plazo empezará a computarse desde la curación o la determinación del alcance de las secuelas. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «En caso de daños de carácter físico o psíquico a las personas, el plazo empezará a computarse desde», la alternativa A introduce «haya producido el hecho o el acto que motive la indemnización» donde la norma dispone «produce la curación o la determinación del alcance de las secuelas».",
        "b": "En «En caso de daños de carácter físico o psíquico a las personas, el plazo empezará a computarse desde», la alternativa B introduce «manifieste su efecto lesivo» donde la norma dispone «produce la curación o la determinación del alcance de las secuelas»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 67 establece que al año de notificarse la resolución administrativa o sentencia definitiva. Esa previsión conduce a «Al año de notificarse la resolución administrativa o sentencia definitiva».",
      "descartes": {
        "a": "En «el derecho a reclamar prescribirá», la alternativa A introduce «dictarse la resolución administrativa o la» donde la norma dispone «notificarse la resolución administrativa o».",
        "c": "En «el derecho a reclamar prescribirá», la alternativa C introduce «dictarse el acto o disposición anulada por vía administrativa o contencioso-administrativa» donde la norma dispone «notificarse la resolución administrativa o sentencia definitiva»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 69, las Administraciones podrán requerir en cualquier momento que se aporte la documentación que acredite el cumplimiento de los mencionados requisitos y el interesado deberá aportarla. Por eso encaja «En cualquier momento».",
      "descartes": {
        "b": "En «Cuando se efectúa una declaración responsable», la alternativa B introduce «Durante el año siguiente a la presentación de la declaración» donde la norma dispone «En cualquier momento».",
        "c": "En «Cuando se efectúa una declaración responsable», la alternativa C introduce «Durante los seis meses siguientes a la presentación de la declaración» donde la norma dispone «En cualquier momento»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 69 denomina comunicación al documento por el que se ponen en conocimiento de la Administración los datos relevantes para iniciar una actividad o ejercer un derecho.",
      "descartes": {
        "a": "En «El documento mediante el que los interesados ponen en conocimiento de la Administración competente sus datos…», la alternativa A introduce «Declaración responsable» donde la norma dispone «Comunicación previa».",
        "c": "En «El documento mediante el que los interesados ponen en conocimiento de la Administración competente sus datos…», la alternativa C introduce «Solicitud» donde la norma dispone «Comunicación previa»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 69 dispone que a los efectos de esta Ley. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «El documento suscrito por un interesado en el que este manifiesta», la alternativa B introduce «Comunicación previa» donde la norma dispone «Declaración responsable».",
        "c": "En «El documento suscrito por un interesado en el que este manifiesta», la alternativa C introduce «Solicitud» donde la norma dispone «Declaración responsable»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 69 establece que las declaraciones responsables y las comunicaciones permitirán; el reconocimiento o ejercicio de un derecho o bien el inicio de una actividad; desde el día de su presentación. Esa previsión conduce a «Desde el día de la presentación».",
      "descartes": {
        "a": "En «Las declaraciones responsables y las comunicaciones permitirán», la alternativa A introduce «que la Administración compruebe, controle e inspeccione el ejercicio del derecho o actividad» donde la norma dispone «el día de la presentación».",
        "c": "En «Las declaraciones responsables y las comunicaciones permitirán», la alternativa C introduce «que la Administración autorice el ejercicio del derecho o actividad» donde la norma dispone «el día de la presentación»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 69, no obstante, lo dispuesto en el párrafo anterior, la comunicación podrá presentarse dentro de un plazo posterior al inicio de la actividad cuando la legislación correspondiente lo prevea expresamente. Por eso encaja «La comunicación».",
      "descartes": {
        "b": "En «Podrá presentarse dentro de un plazo posterior al inicio de la actividad cuando la legislación…», la alternativa B introduce «declaración» donde la norma dispone «comunicación».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La declaración» no expresa la regla que el artículo 69 aplica a «Podrá presentarse dentro de un plazo posterior al inicio de la actividad cuando la legislación…»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regulación del artículo 69 comprende «Imposibilidad de continuar con el ejercicio del derecho o actividad afectada» y «Responsabilidades penales, civiles o administrativas en su caso». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Imposibilidad de continuar con el ejercicio del derecho o actividad afectada», pero resulta incompleta porque también debe incluirse «Responsabilidades penales, civiles o administrativas en su caso».",
        "b": "La alternativa B recoge «Responsabilidades penales, civiles o administrativas en su caso», pero resulta incompleta porque también debe incluirse «Imposibilidad de continuar con el ejercicio del derecho o actividad afectada»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 69 recoge tanto «Determinar la obligación del interesado de restituir la situación jurídica al momento previo al reconocimiento o al…» como «Imposibilitar a instar un nuevo procedimiento con el mismo objeto durante un período determinado por la ley». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Determinar la obligación del interesado de restituir la situación jurídica al momento previo al reconocimiento o al ejercicio del…», pero resulta incompleta porque también debe incluirse «Imposibilitar a instar un nuevo procedimiento con el mismo objeto durante un período determinado por la ley».",
        "b": "La alternativa B recoge «Imposibilitar a instar un nuevo procedimiento con el mismo objeto durante un período determinado por la ley», pero resulta incompleta porque también debe incluirse «Determinar la obligación del interesado de restituir la situación jurídica al momento previo al reconocimiento o al ejercicio del…»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 69 establece que únicamente será exigible, bien una declaración responsable, bien una comunicación para iniciar una misma actividad u obtener el reconocimiento de un mismo derecho o facultad para su ejercicio, sin que sea posible la exigencia de ambas acumulativamente. Esa previsión conduce a «No se podrá exigir acumulativamente para la misma cuestión una comunicación y una declaración responsable».",
      "descartes": {
        "a": "En este supuesto, la alternativa A introduce «Las Administraciones Públicas podrán tener publicados y actualizados modelos de declaración responsable y de comunicación» donde la norma dispone «No se podrá exigir acumulativamente para la misma cuestión una comunicación y una declaración responsable».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Las Administraciones Públicas podrán tener publicados y actualizados modelos de declaración responsable y de…» no expresa la regla que el artículo 69 aplica a este supuesto."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "La regulación del artículo 70 comprende «Documentos y actuaciones que sirven de antecedente y fundamento a la resolución administrativa» y «Diligencias encaminadas a ejecutarla». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Documentos y actuaciones que sirven de antecedente y fundamento a la resolución administrativa», pero resulta incompleta porque también debe incluirse «Diligencias encaminadas a ejecutarla».",
        "b": "La alternativa B recoge «Diligencias encaminadas a ejecutarla», pero resulta incompleta porque también debe incluirse «Documentos y actuaciones que sirven de antecedente y fundamento a la resolución administrativa»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 70 es los expedientes tendrán formato electrónico y se formarán mediante la agregación ordenada de cuantos documentos; notificaciones y demás diligencias deban integrarlos; así como un índice numerado de todos los documentos que contenga cuando se remita. En este supuesto se ajusta a «Se formarán mediante la agregación ordenada de documentos, pruebas, dictámenes, informes, acuerdos, notificaciones y demás diligencias».",
      "descartes": {
        "a": "En «En relación con los expedientes administrativos, es correcto señalar», la alternativa A introduce «Podrán tener formato electrónico» donde la norma dispone «Se formarán mediante la agregación ordenada de documentos».",
        "c": "En «En relación con los expedientes administrativos, es correcto señalar», la alternativa C introduce «Contendrá un índice numerado de todos los documentos que contenga salvo cuando se remita» donde la norma dispone «Se formarán mediante la agregación ordenada de documentos»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 70 dispone que asimismo, deberá constar en el expediente copia electrónica certificada de la resolución adoptada. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Formará parte del expediente administrativo», la alternativa B introduce «Información auxiliar o de apoyo» donde la norma dispone «Una copia electrónica certificada de la resolución adoptada».",
        "c": "En «Formará parte del expediente administrativo», la alternativa C introduce «Juicios de valor emitidos por las Administraciones Públicas» donde la norma dispone «Una copia electrónica certificada de la resolución adoptada»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 70 establece que cuando en virtud de una norma sea preciso remitir el expediente electrónico. Esa previsión conduce a «El Esquema Nacional de Interoperabilidad y en las Normas Técnicas de Interoperabilidad».",
      "descartes": {
        "b": "En «Cuando en virtud de una norma sea preciso remitir el expediente electrónico», la alternativa B introduce «Seguridad y en las Normas Técnicas de Seguridad» donde la norma dispone «Interoperabilidad y en las Normas Técnicas de Interoperabilidad».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «El Esquema Nacional de Interoperabilidad y en las Normas Técnicas de Interoperabilidad» sí está respaldada por el artículo 70."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 70, y se enviará completo; autentificado y acompañado de un índice; asimismo autentificado. Por eso encaja «Completo, foliado, autentificado y acompañado de un índice autentificado de los documentos que contenga».",
      "descartes": {
        "a": "La alternativa A vincula «Y se enviará» con «Completo, foliado, autentificado y acompañado de un índice, autentificado o no, de los documentos que contenga»; el artículo 70 lo relaciona con «Completo, foliado, autentificado y acompañado de un índice autentificado de los documentos que contenga».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Completo, foliado, autentificado y acompañado de un índice autentificado de los documentos que contenga» sí está respaldada por el artículo 70."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 70 es la autenticación del índice garantizará la integridad e inmutabilidad del expediente electrónico generado desde el momento de su firma y permitirá su recuperación siempre que sea preciso. En este supuesto se ajusta a «La autenticación del índice garantizará la integridad e inmutabilidad del expediente electrónico generado desde el momento de su firma y permitirá su recuperación…».",
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
    "1": articleReference(67),
    "2": articleReference(67),
    "3": articleReference(67),
    "4": articleReference(67),
    "5": articleReference(69),
    "6": articleReference(69),
    "7": articleReference(69),
    "8": articleReference(69),
    "9": articleReference(69),
    "10": articleReference(69),
    "11": articleReference(69),
    "12": articleReference(69),
    "13": articleReference(70),
    "14": articleReference(70),
    "15": articleReference(70),
    "16": articleReference(70),
    "17": articleReference(70),
    "18": articleReference(70),
  },
});
