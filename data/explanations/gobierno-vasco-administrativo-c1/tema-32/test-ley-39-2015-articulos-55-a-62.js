import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-39-2015-articulos-55-a-62",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 55, con anterioridad al inicio del procedimiento, el órgano competente podrá abrir un período de información o actuaciones previas con el fin de conocer las circunstancias del caso concreto y la conveniencia o no de iniciar el procedimiento. Por eso encaja «Con anterioridad al inicio del procedimiento».",
      "descartes": {
        "b": "En «El órgano competente podrá abrir un período de información o actuaciones previas con el fin de conocer las…», la alternativa B introduce «posterioridad» donde la norma dispone «anterioridad».",
        "c": "En «El órgano competente podrá abrir un período de información o actuaciones previas con el fin de conocer las…», la alternativa C introduce «Ambas respuestas son posibles» donde la norma dispone «Con anterioridad al inicio del procedimiento»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 55 es en el caso de procedimientos de naturaleza sancionadora las actuaciones previas se orientarán a determinar; con la mayor precisión posible; los hechos susceptibles de motivar la incoación del procedimiento. En este supuesto se ajusta a «Sancionador».",
      "descartes": {
        "b": "En «Las actuaciones previas se orientarán a determinar», la alternativa B introduce «Responsabilidad patrimonial» donde la norma dispone «Sancionador».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Responsabilidad patrimonial» no expresa la regla que el artículo 55 aplica a «Las actuaciones previas se orientarán a determinar»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 55 dispone que en el caso de procedimientos de naturaleza sancionadora las actuaciones previas se orientarán a determinar. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula «Las actuaciones previas serán realizadas por» con «La persona u órgano que se determine por el órgano competente para la iniciación o resolución del procedimiento y»; el artículo 55 lo relaciona con «Los órganos que tengan atribuidas funciones de investigación».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Los órganos que tengan atribuidas funciones de investigación» sí está respaldada por el artículo 55."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 56 establece que iniciado el procedimiento; de acuerdo con los principios de proporcionalidad; efectividad y menor onerosidad. Esa previsión conduce a «Las medidas provisionales adoptadas una vez iniciado el procedimiento».",
      "descartes": {
        "b": "En «Los principios de proporcionalidad, efectividad y menor onerosidad se regulan en relación a», la alternativa B introduce «antes de iniciarse» donde la norma dispone «una vez iniciado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Las medidas provisionales adoptadas antes de iniciarse el procedimiento» no expresa la regla que el artículo 56 aplica a «Los principios de proporcionalidad, efectividad y menor onerosidad se regulan en relación a»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 56, el órgano competente para iniciar o instruir el procedimiento. Por eso encaja «El órgano competente para iniciar o instruir el procedimiento».",
      "descartes": {
        "b": "En «Las medidas adoptadas antes de iniciar el procedimiento son adoptadas por», la alternativa B introduce «instruir el procedimiento o para resolverlo» donde la norma dispone «iniciar o instruir el procedimiento».",
        "c": "En «Las medidas adoptadas antes de iniciar el procedimiento son adoptadas por», la alternativa C introduce «resolver» donde la norma dispone «iniciar o instruir»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 56 permite depositar, retener o inmovilizar cosas muebles. La alternativa registrada cambia el objeto por una cosa inmueble y es, por tanto, la medida que no coincide con la enumeración legal.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 56: suspensión temporal de actividades.",
        "b": "La alternativa B sí concuerda con el artículo 56: retirada o intervención de bienes productivos o suspensión temporal de servicios por razones de sanidad, higiene o seguridad, el cierre temporal del establecimiento por estas u otras causas."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 56 contempla la retención de ingresos a cuenta que deban abonar las Administraciones Públicas. La alternativa invierte el sentido del pago y habla de ingresos que se abonan a la Administración.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 56: prestación de fianzas.",
        "b": "La alternativa B sí concuerda con el artículo 56: embargo preventivo de bienes, rentas y cosas fungibles computables en metálico por aplicación de precios ciertos."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 56 permite consignar o constituir en depósito las cantidades que se reclamen. La alternativa se refiere, en cambio, a cantidades que deban abonar las Administraciones Públicas y no reproduce ese supuesto.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 56: la intervención y depósito de ingresos obtenidos mediante una actividad que se considere ilícita y cuya prohibición o cesación se pretenda.",
        "c": "La alternativa C sí concuerda con el artículo 56: medidas que, para la protección de los derechos de los interesados, prevean expresamente las leyes, o que se estimen necesarias para asegurar la efectividad de la resolución."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 57 establece que no tiene porque ser el mismo órgano quien deba tramitar y resolver los distintos procedimientos. La formulación «No tiene porque ser el mismo órgano quien deba tramitar y resolver los distintos procedimientos» se aparta de esa regulación y es la afirmación incorrecta.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 57: la decisión de la acumulación la toma el órgano que inicie o tramite el procedimiento.",
        "b": "La alternativa B sí concuerda con el artículo 57: se pueden acumular procedimientos que guarden identidad sustancial o íntima conexión, independientemente de cómo se hayan iniciado."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 59 es se entiende por propia iniciativa, la actuación derivada del conocimiento directo o indirecto de las circunstancias, conductas o hechos objeto del procedimiento por el órgano que tiene atribuida la competencia de iniciación. En este supuesto se ajusta a «Inicio del procedimiento de oficio a propia iniciativa».",
      "descartes": {
        "b": "En «La actuación derivada del conocimiento directo o indirecto de las circunstancias», la alternativa B introduce «a instancia de parte» donde la norma dispone «de oficio».",
        "c": "En «La actuación derivada del conocimiento directo o indirecto de las circunstancias», la alternativa C introduce «a petición razonada de otro órgano» donde la norma dispone «de oficio a propia iniciativa»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 60 recoge tanto «La orden de iniciación» como «La petición de iniciación». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «La orden de iniciación», pero resulta incompleta porque también debe incluirse «La petición de iniciación».",
        "b": "La alternativa B recoge «La petición de iniciación», pero resulta incompleta porque también debe incluirse «La orden de iniciación»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 61 establece que inicio del procedimiento por petición razonada de otros órganos. Esa previsión conduce a «Órgano que no tiene competencia para iniciar el procedimiento».",
      "descartes": {
        "a": "La alternativa A vincula «La petición razonada de otros órganos para iniciar un procedimiento tiene que proceder de» con «Órgano que tiene competencia para iniciar el procedimiento»; el artículo 61 lo relaciona con «Órgano que no tiene competencia para iniciar el procedimiento».",
        "c": "En «La petición razonada de otros órganos para iniciar un procedimiento tiene que proceder de», la alternativa C introduce «Ambas respuestas son posibles» donde la norma dispone «Órgano que no tiene competencia para iniciar el procedimiento»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "La regulación del artículo 61 comprende «Conocimiento que se produce ocasionalmente» y «Conocimiento que se produce porque tiene atribuidas funciones de inspección, averiguación o investigación». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Conocimiento que se produce ocasionalmente», pero resulta incompleta porque también debe incluirse «Conocimiento que se produce porque tiene atribuidas funciones de inspección, averiguación o investigación».",
        "b": "La alternativa B recoge «Conocimiento que se produce porque tiene atribuidas funciones de inspección, averiguación o investigación», pero resulta incompleta porque también debe incluirse «Conocimiento que se produce ocasionalmente»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 61 es la petición no vincula al órgano competente para iniciar el procedimiento, si bien deberá comunicar al órgano que la hubiera formulado los motivos por los que, en su caso, no procede la iniciación. En este supuesto se ajusta a «No vincula, pero se deberá comunicar al órgano que la ha formulado los motivos por los que, en su caso, no procede la iniciación».",
      "descartes": {
        "b": "En «La petición», la alternativa B introduce «Vincula, pero sólo cuando el órgano que la formula tiene atribuida funciones de inspección, averiguación o investigación» donde la norma dispone «pero se deberá comunicar al órgano que la ha formulado los motivos por los que».",
        "c": "En «La petición», la alternativa C introduce «Vincula en todo caso» donde la norma dispone «pero se deberá comunicar al órgano que la ha formulado los motivos por los que»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 61 dispone que la petición deberá individualizar la lesión producida en una persona o grupo de personas; su relación de causalidad con el funcionamiento del servicio público; su evaluación económica si fuera posible. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «La petición deberá individualizar la lesión producida», la alternativa A introduce «Sancionador» donde la norma dispone «Responsabilidad patrimonial».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Sancionador» no expresa la regla que el artículo 61 aplica a «La petición deberá individualizar la lesión producida»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 61 establece que la petición deberá individualizar la lesión producida en una persona o grupo de personas; su relación de causalidad con el funcionamiento del servicio público; su evaluación económica si fuera posible. Esa previsión conduce a «La petición de iniciación».",
      "descartes": {
        "a": "En «su relación de causalidad con el funcionamiento del servicio público», la alternativa A introduce «orden» donde la norma dispone «petición».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La orden de iniciación» no expresa la regla que el artículo 61 aplica a «su relación de causalidad con el funcionamiento del servicio público»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 62, las denuncias deberán expresar la identidad de la persona o personas que las presentan y el relato de los hechos que se ponen en conocimiento de la Administración. Cuando dichos hechos pudieran constituir una infracción administrativa. Por eso encaja «Las denuncias deben expresar la identidad del demandante y el relato de los hechos. Si constituyen una infracción administrativa».",
      "descartes": {
        "a": "Para «En relación a la denuncia», la alternativa A utiliza «una / un / un / un», pero la previsión aplicable fija «una».",
        "c": "Para «En relación a la denuncia», la alternativa C utiliza «un», pero la previsión aplicable fija «una»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 62 es la presentación de una denuncia no confiere, por sí sola, la condición de interesado en el procedimiento. En este supuesto se ajusta a «No confiere la condición de interesado».",
      "descartes": {
        "a": "La alternativa A vincula «La presentación de una denuncia» con «Confiere la condición de interesado»; el artículo 62 lo relaciona con «No confiere la condición de interesado».",
        "c": "En «La presentación de una denuncia», la alternativa C introduce «Sí, siempre que no se trate de un procedimiento sancionador» donde la norma dispone «No confiere la condición de interesado»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-32-fases-procedimiento-administrativo",
  references: {
    "1": articleReference(55),
    "2": articleReference(55),
    "3": articleReference(55),
    "4": articleReference(56),
    "5": articleReference(56),
    "6": articleReference(56),
    "7": articleReference(56),
    "8": articleReference(56),
    "9": articleReference(57),
    "10": articleReference(59),
    "11": articleReference(60),
    "12": articleReference(61),
    "13": articleReference(61),
    "14": articleReference(61),
    "15": articleReference(61),
    "16": articleReference(61),
    "17": articleReference(62),
    "18": articleReference(62),
  },
});
