import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-estatuto-autonomia-pais-vasco-competencias-numero-3",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El País Vasco ejecutará los tratados y convenios en todo lo que afecte a las materias atribuidas a su competencia en este Estatuto.",
      "descartes": {
        "a": "«Todos los Tratados y convenios» regula una posibilidad diferente; en este caso, el artículo 20 establece «Los Tratados y convenios en todo lo que afecte a las materias atribuidas a su competencia».",
        "c": "«que afecten a sus intereses» sustituye el elemento previsto por la norma, que en el artículo 20 es «en todo lo que afecte a las materias atribuidas a su competencia»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "Ningún tratado o convenio podrá afectar a las atribuciones y competencias del País Vasco si no es mediante el procedimiento del artículo 152.2 de la Constitución, salvo lo previsto en el artículo 93 de la misma.",
      "descartes": {
        "a": "«Puede afectar a las atribuciones y competencias del País vasco» regula una posibilidad diferente; en este caso, el artículo 20 establece «Puede afectar a las atribuciones y competencias del País Vasco sino es con la reforma del Estatuto de Autonomía».",
        "c": "«de la Constitución Española» altera el término que delimita la respuesta; la formulación del artículo 20 es «del Estatuto de Autonomía»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "Las funciones de ejecución que este Estatuto atribuye a la Comunidad Autónoma del País Vasco en aquellas materias que no sean de su competencia exclusiva, comprende la potestad de administración, así como, en su caso, la de dictar reglamentos internos de organización de los servicios correspondientes.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 20 exige «administración», no «dictar reglamentos externos».",
        "c": "No son válidas las dos afirmaciones: «La potestad de administración» se ajusta a la teoría, mientras que «La potestad de dictar reglamentos externos» no."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El Gobierno Vasco será informado en la elaboración de los tratados y convenios, así como de los proyectos de legislación aduanera, en cuanto afecten a materias de específico interés para el País Vasco.",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 20 exige «Gobierno», no «Parlamento». En este caso, el artículo 20 conduce a «El Gobierno Vasco».",
        "c": "«Lehendakari» altera el órgano o sujeto competente; la formulación del artículo 20 es «Gobierno Vasco»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El Gobierno Vasco será informado en la elaboración de los tratados y convenios, así como de los proyectos de legislación aduanera, en cuanto afecten a materias de específico interés para el País Vasco. La cifra o condición que debe aplicarse es «El Gobierno Vasco».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 20 exige «Gobierno», no «Parlamento». Aquí debe conservarse «El Gobierno Vasco», conforme a el artículo 20.",
        "c": "«Lehendakari» sustituye el elemento previsto por la norma, que en el artículo 20 es «Gobierno Vasco»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "Salvo disposición expresa en contrario, todas las competencias mencionadas en los artículos anteriores y otros del presente Estatuto se entienden referidas al ámbito territorial del País Vasco.",
      "descartes": {
        "a": "«Siempre se ejercen en el ámbito territorial del País Vasco» regula una posibilidad diferente; en este caso, el artículo 20 establece «Se ejercen en el ámbito territorial del País Vasco, salvo disposición expresa en contrario».",
        "c": "La alternativa añade o cambia una condición que el artículo 20 no contempla. La formulación aplicable es «Se ejercen en el ámbito territorial del País Vasco, salvo disposición expresa en contrario»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El Derecho emanado del País Vasco en las materias de su competencia exclusiva es el aplicable con preferencia a cualquier otro y sólo en su defecto será de aplicación supletoria el Derecho del Estado. La formulación que conserva ese alcance es «Es el aplicable con preferencia a cualquier otro, en las materias de su competencia exclusiva».",
      "descartes": {
        "a": "La diferencia relevante está en «todo caso»: el artículo 21 emplea «las materias de su competencia exclusiva» y ese matiz cambia el alcance de la regla.",
        "c": "La alternativa añade o cambia una condición que el artículo 21 no contempla. La formulación aplicable es «Es el aplicable con preferencia a cualquier otro, en las materias de su competencia exclusiva»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El Derecho emanado del País Vasco en las materias de su competencia exclusiva es el aplicable con preferencia a cualquier otro y sólo en su defecto será de aplicación supletoria el Derecho del Estado. La consecuencia concreta es «Será de aplicación supletoria el Derecho del Estado».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 21 exige «del Estado», no «Comunitario».",
        "c": "No son válidas las dos afirmaciones: «Será de aplicación supletoria el Derecho del Estado» se ajusta a la teoría, mientras que «Será de aplicación supletoria el Derecho Comunitario» no."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "La Comunidad Autónoma podrá celebrar convenios con otras Comunidades Autónomas para la gestión y prestación de servicios propios de la exclusiva competencia de las mismas.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 22 exige «Convenios», no «Acuerdos de cooperación».",
        "c": "«Son sinónimos» altera el término que delimita la respuesta; la formulación del artículo 22 es «Convenios»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La celebración de los citados convenios, antes de su entrada en vigor, deberá ser comunicada a las Cortes Generales. El elemento que completa la regla es «Deberá ser comunicada a las Cortes Generales».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 22 exige «ser comunicada a», no «tener la autorización debida de».",
        "c": "«tener la autorización del Congreso de los Diputados» altera el órgano o sujeto competente; la formulación del artículo 22 es «ser comunicada a las Cortes Generales». En este caso, el artículo 22 conduce a «Deberá ser comunicada a las Cortes Generales»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "La celebración de los citados convenios, antes de su entrada en vigor, deberá ser comunicada a las Cortes Generales. En este caso debe aplicarse «Antes de su entrada en vigor».",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 22 exige «Antes de su», no «Una vez».",
        "c": "«Simultáneamente a» altera el término que delimita la respuesta; la formulación del artículo 22 es «Antes de»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 22 recoge tanto «Las Cortes Generales» como «Cualquiera de las Cámaras». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Las Cortes Generales» es cierta, pero no basta por sí sola: «Cualquiera de las Cámaras» también está prevista.",
        "b": "Elegir solo «Cualquiera de las Cámaras» dejaría incompleta la respuesta, porque también se cumple «Las Cortes Generales»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Si las Cortes Generales, o alguna de las Cámaras, manifestaran reparos en el plazo de treinta días, a partir de la recepción de la comunicación, el convenio deberá seguir el trámite previsto en el párrafo tercero de este artículo.",
      "descartes": {
        "a": "El artículo 22 fija «30»; «10» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El artículo 22 fija «30»; «20» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "Si se formulan reparos, el artículo 22 obliga a seguir el trámite de los acuerdos de cooperación, que requiere autorización de las Cortes Generales.",
      "descartes": {
        "a": "La alternativa invierte o absolutiza la regla: el artículo 22 establece «Se deberá solicitar la autorización correspondiente», no «Nunca entrará en vigor dicho instrumento».",
        "c": "La alternativa invierte o absolutiza la regla: el artículo 22 establece «Se deberá solicitar la autorización correspondiente», no «No cabe la posibilidad de manifestar reparos»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "Si transcurrido dicho plazo no se hubiesen manifestado reparos al convenio, entrará en vigor.",
      "descartes": {
        "a": "La alternativa invierte o absolutiza la regla: el artículo 22 establece «Entrará en vigor», no «Nunca entrará en vigor dicho instrumento».",
        "b": "«Se deberá solicitar la autorización correspondiente» altera el término que delimita la respuesta; la formulación del artículo 22 es «Entrará en vigor»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 22 recoge tanto «Con otra Comunidad Autónoma» como «Con otro Territorio Histórico». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Con otra Comunidad Autónoma» es cierta, pero no basta por sí sola: «Con otro Territorio Histórico» también está prevista.",
        "b": "Elegir solo «Con otro Territorio Histórico» dejaría incompleta la respuesta, porque también se cumple «Con otra Comunidad Autónoma»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "La celebración de los citados convenios, antes de su entrada en vigor, deberá ser comunicada a las Cortes Generales. La consecuencia concreta es «Deberá ser comunicada a las Cortes Generales».",
      "descartes": {
        "a": "La diferencia relevante está en «tener la autorización debida de»: el artículo 22 emplea «ser comunicada a» y ese matiz cambia el alcance de la regla.",
        "c": "«tener la autorización del Congreso de los Diputados» altera el órgano o sujeto competente; la formulación del artículo 22 es «ser comunicada a las Cortes Generales». Aquí debe conservarse «Deberá ser comunicada a las Cortes Generales», conforme a el artículo 22."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "A los veinte días de haberse efectuado esta comunicación, los convenios entrarán en vigor.",
      "descartes": {
        "a": "El artículo 22 fija «20»; «10» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 22 fija «20»; «30» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La Comunidad Autónoma podrá establecer también acuerdos de cooperación con otras Comunidades Autónomas previa autorización de las Cortes Generales.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 22 exige «autorización de», no «comunicación a».",
        "b": "«comunicación al Congreso de los Diputados» altera el órgano o sujeto competente; la formulación del artículo 22 es «autorización de las Cortes Generales»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "La Administración Civil del Estado en el territorio vasco se adecuará al ámbito geográfico de la Comunidad Autónoma.",
      "descartes": {
        "a": "«En el territorio Vasco no existe administración civil del Estado» regula una posibilidad diferente; en este caso, el artículo 23 establece «En el territorio Vasco la Administración civil del Estado se adecuará al ámbito geográfico de la Comunidad autónoma».",
        "c": "El artículo 23 sí regula la cuestión y ofrece una respuesta concreta: «En el territorio Vasco la Administración civil del Estado se adecuará al ámbito geográfico de la Comunidad autónoma»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "De conformidad con el artículo 154 de la Constitución, un Delegado nombrado por el Gobierno la dirigirá y la coordinará, cuando proceda, con la Administración propia de la Comunidad Autónoma. La competencia o actuación consultada recae en «El Delegado de Gobierno».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 23 exige «Delegado de Gobierno», no «Lehendakari».",
        "c": "«Los Subdelegados de Gobierno conjuntamente» altera el órgano o sujeto competente; la formulación del artículo 23 es «El Delegado de Gobierno»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "De conformidad con el artículo 154 de la Constitución, un Delegado nombrado por el Gobierno la dirigirá y la coordinará, cuando proceda, con la Administración propia de la Comunidad Autónoma. La consecuencia concreta es «El Gobierno».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 23 exige «Gobierno», no «Rey».",
        "b": "«Lehendakari» altera el órgano o sujeto competente; la formulación del artículo 23 es «Gobierno»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "Las competencias del País Vasco se regulan en el Título I del Estatuto de Autonomía.",
      "descartes": {
        "a": "La diferencia relevante está en «Preliminar»: el apartado «Título I. De las competencias del País Vasco» emplea «Primero» y ese matiz cambia el alcance de la regla.",
        "c": "«Segundo» sustituye el elemento previsto por la norma, que en el apartado «Título I. De las competencias del País Vasco» es «Primero»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El Título I presenta sus artículos de forma continua y no se divide en capítulos; por eso el número es ninguno.",
      "descartes": {
        "a": "El apartado «Título I. De las competencias del País Vasco» fija «Ninguno»; «3» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El apartado «Título I. De las competencias del País Vasco» fija «Ninguno»; «2» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "El artículo 23 sitúa al delegado dentro de la Administración civil del Estado, pero no contiene una mención expresa a los subdelegados. Se conserva «Pertenecen a la Administración Estatal» como solución registrada sin atribuirle apoyo directo a la ficha.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «Pertenecen a la Administración Autonómica»; se descarta únicamente frente a la solución registrada, «Pertenecen a la Administración Estatal».",
        "c": "«Pertenecen a la Administración Local» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
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
    "etiqueta": "Artículo 20",
    "articulos": [
      20
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 20",
    "articulos": [
      20
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 20",
    "articulos": [
      20
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 20",
    "articulos": [
      20
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 20",
    "articulos": [
      20
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 20",
    "articulos": [
      20
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 21",
    "articulos": [
      21
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 21",
    "articulos": [
      21
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 22",
    "articulos": [
      22
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 23",
    "articulos": [
      23
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 23",
    "articulos": [
      23
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 23",
    "articulos": [
      23
    ]
  },
  "23": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Título I. De las competencias del País Vasco",
    "bloqueId": "distribucion-competencias"
  },
  "24": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Título I. De las competencias del País Vasco",
    "bloqueId": "distribucion-competencias"
  },
  "25": {
    "tipo": "articulos",
    "alcance": "contextual",
    "etiqueta": "Artículo 23",
    "articulos": [
      23
    ]
  }
},
});
