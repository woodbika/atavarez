import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-estatuto-autonomia-pais-vasco-competencias-numero-2",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "«¿En qué artículo del Estatuto de Autonomía se encuentran reguladas las competencias exclusivas del País Vasco?» figura en el artículo 10.",
      "descartes": {
        "b": "El artículo 10 fija «10»; «11» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 10 fija «10»; «12» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "«¿En qué artículo del Estatuto de Autonomía se encuentran las competencias de desarrollo legislativo y ejecución?» figura en el artículo 11.",
      "descartes": {
        "a": "El artículo 11 fija «11»; «10» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 11 fija «11»; «12» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "«¿en qué artículo del Estatuto de Autonomía se encuentran aquellas materias sobre las que la Comunidad Autónoma tiene únicamente ejecución?» figura en el artículo 12.",
      "descartes": {
        "a": "El artículo 12 fija «12»; «10» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El artículo 12 fija «12»; «11» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 13 remite a las facultades que la legislación orgánica judicial reconozca, reserve o atribuya al Gobierno y excluye expresamente la jurisdicción militar.",
      "descartes": {
        "a": "La diferencia relevante está en «señala, incluida»: el artículo 13 emplea «reconoce, atribuye o reserva al Gobierno, excluida» y ese matiz cambia el alcance de la regla.",
        "b": "«señala,» sustituye el elemento previsto por la norma, que en el artículo 13 es «reconoce, atribuye o reserva al Gobierno,»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El artículo 13 recoge tanto «La organización y funcionamiento del Ministerio Fiscal» como «El Derecho de Gracia». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«La organización y funcionamiento del Ministerio Fiscal» es cierta, pero no basta por sí sola: «El Derecho de Gracia» también está prevista.",
        "b": "Elegir solo «El Derecho de Gracia» dejaría incompleta la respuesta, porque también se cumple «La organización y funcionamiento del Ministerio Fiscal»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 14 incluye los supuestos enumerados: «Primera Instancia en Derecho Común, todas las instancias y grados en el Derecho Civil Foral». Deben considerarse conjuntamente.",
      "descartes": {
        "b": "La teoría admite las afirmaciones enumeradas; «Todas las instancias y grados, excluidos los recursos de casación y revisión» las descartaría sin fundamento.",
        "c": "«Primera Instancia en Derecho Común, todas las instancias y grados en el Derecho Civil Foral» solo cubre uno de los supuestos; la respuesta completa exige sumar los demás casos enumerados."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 14 incluye los supuestos enumerados: «Primera Instancia». Deben considerarse conjuntamente.",
      "descartes": {
        "a": "La teoría admite las afirmaciones enumeradas; «Todas las instancias y grados, incluidos los recursos de casación y revisión» las descartaría sin fundamento.",
        "c": "«Primera Instancia» solo cubre uno de los supuestos; la respuesta completa exige sumar los demás casos enumerados."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 14 recoge tanto «Que el acto proceda de la Administración del País Vasco» como «Que la legislación sea competencia exclusiva del País Vasco». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Que el acto proceda de la Administración del País Vasco» es cierta, pero no basta por sí sola: «Que la legislación sea competencia exclusiva del País Vasco» también está prevista.",
        "b": "Elegir solo «Que la legislación sea competencia exclusiva del País Vasco» dejaría incompleta la respuesta, porque también se cumple «Que el acto proceda de la Administración del País Vasco»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El artículo 14 distingue dos casos: los órganos del País Vasco conocen las cuestiones internas entre sus órganos judiciales, mientras que el Tribunal Supremo resuelve los conflictos con órganos del Estado. Por eso ninguna opción que diga «siempre» es correcta.",
      "descartes": {
        "a": "Los órganos judiciales vascos conocen las cuestiones internas, pero no los conflictos con los órganos del resto del Estado.",
        "b": "El Tribunal Supremo interviene en los conflictos con órganos estatales; no resuelve siempre cualquier cuestión interna vasca."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "Correspondo al País Vasco la creación y organización, mediante Ley, de su Parlamento, y con respeto a la institución establecida por el artículo 54 de la Constitución, de un órgano similar que en coordinación con aquélla ejerza las funciones a las que se refiere el mencionado artículo y cualesquiera otras que el Parlamento Vasco pueda encomendarle.",
      "descartes": {
        "b": "La diferencia relevante está en «Gobierno Vasco mediante Decreto»: el artículo 15 emplea «Parlamento Vasco mediante Ley» y ese matiz cambia el alcance de la regla.",
        "c": "«Las Cortes Generales mediante Ley Orgánica» altera el órgano o sujeto competente; la formulación del artículo 15 es «El Parlamento Vasco mediante Ley»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 16 configura la enseñanza como competencia exclusiva del País Vasco, pero la somete a límites constitucionales, a las leyes orgánicas, a facultades estatales y a la alta inspección.",
      "descartes": {
        "a": "No es una competencia sin límites: el propio artículo 16 enumera varias reservas constitucionales y estatales.",
        "b": "La alta inspección no es el único límite; también operan el artículo 27 de la Constitución, sus leyes orgánicas y las facultades estatales del artículo 149.1.30.ª."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 17 reserva a las Fuerzas y Cuerpos de Seguridad del Estado los servicios policiales extracomunitarios y supracomunitarios.",
      "descartes": {
        "a": "La diferencia relevante está en «La Policía Autónoma Vasca dentro de su territorio»: el artículo 17 emplea «Las Fuerzas y Cuerpos de Seguridad del Estado» y ese matiz cambia el alcance de la regla.",
        "c": "El artículo 17 fija «Las Fuerzas y Cuerpos de Seguridad del Estado»; «Es una competencia compartida entre los dos» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El artículo 17.2 atribuye al Gobierno del País Vasco el mando supremo de la Policía Autónoma Vasca.",
      "descartes": {
        "a": "La diferencia relevante está en «Parlamento»: el artículo 17 emplea «Gobierno» y ese matiz cambia el alcance de la regla.",
        "c": "«Los Tribunales de Justicia del País» sustituye el elemento previsto por la norma, que en el artículo 17 es «El Gobierno»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El artículo 17 recoge tanto «Las Diputaciones Forales» como «Las Corporaciones Locales». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Las Diputaciones Forales» es cierta, pero no basta por sí sola: «Las Corporaciones Locales» también está prevista.",
        "b": "Elegir solo «Las Corporaciones Locales» dejaría incompleta la respuesta, porque también se cumple «Las Diputaciones Forales»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "Para la coordinación entre la Policía Autónoma y los Cuerpos y Fuerzas de Seguridad del Estado existirá una Junta de Seguridad formada en número igual por representantes del Estado y de la Comunidad Autónoma. En este caso debe aplicarse «Una Junta de Seguridad».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 17 exige «Junta de Seguridad», no «Comisión Arbitral».",
        "b": "«Comisión Mixta» altera el órgano o sujeto competente; la formulación del artículo 17 es «Junta de Seguridad»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "Para la coordinación entre la Policía Autónoma y los Cuerpos y Fuerzas de Seguridad del Estado existirá una Junta de Seguridad formada en número igual por representantes del Estado y de la Comunidad Autónoma. La formulación que conserva ese alcance es «Hay el mismo número de representantes del Estado que de la Comunidad Autónoma».",
      "descartes": {
        "a": "El artículo 17 fija «Hay el mismo número de representantes del Estado que»; «Las tres cuartas partes son representantes del Estado y la otra parte representantes» altera el plazo, la cifra o la mayoría exigida.",
        "b": "La alternativa añade o cambia una condición que el artículo 17 no contempla. La formulación aplicable es «Hay el mismo número de representantes del Estado que de la Comunidad Autónoma»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El Cuerpo de Miñones de la Diputación Foral de Álava, existente en la actualidad.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 17 exige «Álava», no «Bizkaia».",
        "c": "«Miqueletes de Gipuzkoa» altera el término que delimita la respuesta; la formulación del artículo 17 es «Miñones de Álava»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La aprobación de la Junta de Seguridad se exige cuando los cuerpos estatales intervienen por iniciativa propia porque el interés general del Estado está gravemente comprometido.",
      "descartes": {
        "a": "La diferencia relevante está en «su intervención haya sido requerida por el Gobierno Vasco»: el artículo 17 emplea «intervienen por razones de interés general, ya que se encuentra gravemente comprometido» y ese matiz cambia el alcance de la regla.",
        "c": "La alternativa añade o cambia una condición que el artículo 17 no contempla. La formulación aplicable es «Cuando intervienen por razones de interés general, ya que se encuentra gravemente comprometido»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "En los supuestos de especial urgencia, los cuerpos estatales pueden intervenir bajo la responsabilidad del Gobierno, que debe dar cuenta a las Cortes Generales.",
      "descartes": {
        "a": "«Cuando su intervención haya sido requerida por el Gobierno Vasco» regula una posibilidad diferente; en este caso, el artículo 17 establece «Cuando se da una situación de urgencia y tienen que mantener el orden público y proteger a personas y bienes».",
        "b": "La alternativa añade o cambia una condición que el artículo 17 no contempla. La formulación aplicable es «Cuando se da una situación de urgencia y tienen que mantener el orden público y proteger a personas y bienes»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "Corresponde al País Vasco el desarrollo legislativo y la ejecución de la legislación básica del Estado en materia de sanidad interior.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 18 exige «En materia de sanidad interior», no «El régimen económico de la Seguridad Social».",
        "c": "«productos farmacéuticos» altera el término que delimita la respuesta; la formulación del artículo 18 es «sanidad interior»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El artículo 18 recoge tanto «Podrá organizar y administrar todos los servicios relacionados con las materias» como «Ejercerá la tutela de las instituciones, entidades y fundaciones en dichas materias». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Podrá organizar y administrar todos los servicios relacionados con las materias» es cierta, pero no basta por sí sola: «Ejercerá la tutela de las instituciones, entidades y fundaciones en dichas materias» también está prevista.",
        "b": "Elegir solo «Ejercerá la tutela de las instituciones, entidades y fundaciones en dichas materias» dejaría incompleta la respuesta, porque también se cumple «Podrá organizar y administrar todos los servicios relacionados con las materias»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La Comunidad Autónoma podrá organizar y administrar a tales fines, y dentro de su territorio, todos los servicios relacionados con las materias antes expresadas y ejercerá la tutela de las instituciones, entidades y fundaciones en materia de Sanidad y de Seguridad Social, reservándose el Estado la alta inspección conducente.",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 18 exige «El Estado», no «La Comunidad Autónoma Vasca».",
        "c": "La atribución planteada corresponde a «El Estado». «El Estado y la Comunidad Autónoma Vasca comparten la alta inspección» no es el sujeto indicado por el artículo 18."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 18 recoge tanto «Todos los interesados» como «Los Sindicatos de Trabajadores y Asociaciones empresariales». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Todos los interesados» es cierta, pero no basta por sí sola: «Los Sindicatos de Trabajadores y Asociaciones empresariales» también está prevista.",
        "b": "Elegir solo «Los Sindicatos de Trabajadores y Asociaciones empresariales» dejaría incompleta la respuesta, porque también se cumple «Todos los interesados»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "Corresponde al País Vasco el desarrollo legislativo de las normas básicas del Estado en materia de medios de comunicación social, respetando en todo caso lo que dispone el artículo 20 de la Constitución.",
      "descartes": {
        "a": "La diferencia relevante está en «La competencia exclusiva»: el artículo 19 emplea «El desarrollo legislativo de las normas básicas del Estado y la ejecución» y ese matiz cambia el alcance de la regla.",
        "c": "El artículo 19 atribuye esta actuación a «El desarrollo legislativo de las normas básicas del Estado y la ejecución»; «La ejecución» carece de esa atribución en el contenido estudiado."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "La ejecución en las materias a que se refiere el párrafo anterior se coordinará con la del Estado, con respeto a la reglamentación específica aplicable a los medios de titularidad estatal.",
      "descartes": {
        "a": "El artículo 19 fija «ejecución se coordinará con los medios de titularidad estatal»; «competencia de la pregunta anterior se respetará el artículo 21 de la CE» altera el plazo, la cifra o la mayoría exigida.",
        "c": "La alternativa añade o cambia una condición que el artículo 19 no contempla. La formulación aplicable es «En la ejecución se coordinará con los medios de titularidad estatal»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "El artículo 20 recoge tanto «Que por Ley Orgánica le transfiere o delegue el Estado según la CE» como «Todo ello a petición del Parlamento Vasco». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Que por Ley Orgánica le transfiere o delegue el Estado según la CE» es cierta, pero no basta por sí sola: «Todo ello a petición del Parlamento Vasco» también está prevista.",
        "b": "Elegir solo «Todo ello a petición del Parlamento Vasco» dejaría incompleta la respuesta, porque también se cumple «Que por Ley Orgánica le transfiere o delegue el Estado según la CE»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-04-organizacion-politica-administrativa-capv",
  references: {
  "1": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 10",
    "articulos": [
      10
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 11",
    "articulos": [
      11
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 12",
    "articulos": [
      12
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 13",
    "articulos": [
      13
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 13",
    "articulos": [
      13
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 14",
    "articulos": [
      14
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 14",
    "articulos": [
      14
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 14",
    "articulos": [
      14
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 14",
    "articulos": [
      14
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 15",
    "articulos": [
      15
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 16",
    "articulos": [
      16
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 17",
    "articulos": [
      17
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 18",
    "articulos": [
      18
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 18",
    "articulos": [
      18
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 18",
    "articulos": [
      18
    ]
  },
  "23": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 18",
    "articulos": [
      18
    ]
  },
  "24": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 19",
    "articulos": [
      19
    ]
  },
  "25": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 19",
    "articulos": [
      19
    ]
  },
  "26": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 20",
    "articulos": [
      20
    ]
  }
},
});
