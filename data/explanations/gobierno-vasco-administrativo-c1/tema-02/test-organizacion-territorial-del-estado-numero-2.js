import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-organizacion-territorial-del-estado-numero-2",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Determina qué territorios pueden acceder a la autonomía y exige la iniciativa de las Diputaciones u órganos interinsulares y de dos tercios de los municipios, dentro de seis meses; si fracasa, deben pasar cinco años. El elemento que completa la regla es «Las provincias limítrofes con características históricas, culturales y económicas comunes».",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 143 exige «culturales», no «sociales».",
        "c": "No son válidas las dos afirmaciones: «Las provincias limítrofes con características históricas, culturales y económicas comunes» se ajusta a la teoría, mientras que «Las provincias limítrofes con características históricas, sociales y económicas comunes» no."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "Determina qué territorios pueden acceder a la autonomía y exige la iniciativa de las Diputaciones u órganos interinsulares y de dos tercios de los municipios, dentro de seis meses; si fracasa, deben pasar cinco años. En este caso debe aplicarse «Los territorios insulares».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 143 exige «insulares», no «interinsulares».",
        "c": "No son válidas las dos afirmaciones: «Los territorios insulares» se ajusta a la teoría, mientras que «Los territorios interinsulares» no."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "Determina qué territorios pueden acceder a la autonomía y exige la iniciativa de las Diputaciones u órganos interinsulares y de dos tercios de los municipios, dentro de seis meses; si fracasa, deben pasar cinco años. La formulación que conserva ese alcance es «Las provincias con entidad regional histórica».",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 143 exige «histórica», no «cultural».",
        "c": "«social» altera el término que delimita la respuesta; la formulación del artículo 143 es «histórica»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "Permite a las Cortes Generales actuar mediante ley orgánica, por interés nacional, respecto de territorios provinciales sin las condiciones ordinarias, territorios no integrados en provincias o la sustitución de la iniciativa local. La consecuencia concreta es «Los territorios cuyo ámbito territorial no supere la provincia y carezca de entidad regional».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 144 exige «la provincia», no «el de un municipio».",
        "c": "No son válidas las dos afirmaciones: «Los territorios cuyo ámbito territorial no supere la provincia y carezca de entidad regional» se ajusta a la teoría, mientras que «Los territorios cuyo ámbito territorial no supere el de un municipio y carezca de entidad regional» no."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Permite a las Cortes Generales actuar mediante ley orgánica, por interés nacional, respecto de territorios provinciales sin las condiciones ordinarias, territorios no integrados en provincias o la sustitución de la iniciativa local. El elemento que completa la regla es «Los territorios que no estén integrados en la organización provincial».",
      "descartes": {
        "a": "La alternativa modifica el ámbito territorial de la regla: el artículo 144 exige «provincial», no «municipal».",
        "c": "«autonómica» sustituye el elemento previsto por la norma, que en el artículo 144 es «provincial»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 143 recoge tanto «Las 2/3 partes de las Diputaciones u órganos interinsulares correspondientes» como «Las ¾ partes de las Diputaciones u órganos interinsulares correspondientes». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "b": "El artículo 143 fija «Todas»; «Las 2/3 partes de» altera el plazo, la cifra o la mayoría exigida.",
        "c": "«Las ¾ partes de» sustituye el elemento previsto por la norma, que en el artículo 143 es «Todas»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "Determina qué territorios pueden acceder a la autonomía y exige la iniciativa de las Diputaciones u órganos interinsulares y de dos tercios de los municipios, dentro de seis meses; si fracasa, deben pasar cinco años. La competencia o actuación consultada recae en «Las 2/3 partes de los municipios».",
      "descartes": {
        "a": "El artículo 143 fija «Las 2/3 partes de»; «Todos» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 143 fija «2/3»; «¾» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "Determina qué territorios pueden acceder a la autonomía y exige la iniciativa de las Diputaciones u órganos interinsulares y de dos tercios de los municipios, dentro de seis meses; si fracasa, deben pasar cinco años. La consecuencia concreta es «A la mayoría del censo electoral de esa provincia».",
      "descartes": {
        "a": "El artículo 143 fija «la mayoría del»; «todo el» altera el plazo, la cifra o la mayoría exigida.",
        "b": "«absoluta de la población de la» altera el término que delimita la respuesta; la formulación del artículo 143 es «del censo electoral de esa»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Determina qué territorios pueden acceder a la autonomía y exige la iniciativa de las Diputaciones u órganos interinsulares y de dos tercios de los municipios, dentro de seis meses; si fracasa, deben pasar cinco años. La cifra o condición que debe aplicarse es «6 meses».",
      "descartes": {
        "b": "El artículo 143 fija «6 meses»; «1 año» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 143 fija «6 meses»; «5 años» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El artículo 143 trata la materia de «el caso de que no prospere no podrá reiterarse hasta que no pasen», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «5 años».",
      "descartes": {
        "a": "No puede descartarse «6 meses» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test.",
        "b": "La ficha no contiene información que permita confirmar «1 año» en este punto; no puede justificarse desde la teoría disponible."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "Permite a las Cortes Generales actuar mediante ley orgánica, por interés nacional, respecto de territorios provinciales sin las condiciones ordinarias, territorios no integrados en provincias o la sustitución de la iniciativa local. En este caso debe aplicarse «Son las Cortes Generales».",
      "descartes": {
        "a": "La diferencia relevante está en «Es el Gobierno del Estado»: el artículo 144 emplea «Son las Cortes Generales» y ese matiz cambia el alcance de la regla.",
        "c": "«los Gobiernos Autonómicos junto con el del Estado» altera el órgano o sujeto competente; la formulación del artículo 144 es «las Cortes Generales»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 151 recoge tanto «Las 2/3 partes de las Diputaciones u órganos interinsulares correspondientes» como «Las ¾ partes de las Diputaciones u órganos interinsulares correspondientes». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "b": "El artículo 151 fija «Todas»; «Las 2/3 partes de» altera el plazo, la cifra o la mayoría exigida.",
        "c": "«Las ¾ partes de» sustituye el elemento previsto por la norma, que en el artículo 151 es «Todas»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. La competencia o actuación consultada recae en «Las ¾ partes de los municipios».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 151 exige «Las ¾ partes de», no «Todos».",
        "b": "El artículo 151 fija «¾»; «2/3» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. El elemento que completa la regla es «Por mayoría absoluta».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 151 exige «absoluta», no «simple».",
        "c": "El artículo 151 fija «Por mayoría absoluta»; «No hay referéndum» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El apartado «La disposición transitoria segunda» recoge tanto «Tienen que haber plebiscitado afirmativamente un Estatuto de Autonomía en el pasado» como «Tienen que haber contado en el momento de aprobación de la CE con regímenes provisionales de autonomía». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Tienen que haber plebiscitado afirmativamente un Estatuto de Autonomía en el pasado» es correcta, pero incompleta: también debe incluirse «Tienen que haber contado en el momento de aprobación de la CE con regímenes provisionales de autonomía».",
        "b": "«Tienen que haber contado en el momento de aprobación de la CE con regímenes provisionales de autonomía» es correcta, pero incompleta: también debe incluirse «Tienen que haber plebiscitado afirmativamente un Estatuto de Autonomía en el pasado»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "Permite iniciar inmediatamente el procedimiento reforzado a los territorios que cumplan sus antecedentes de autonomía y exige el acuerdo por mayoría absoluta de sus órganos preautonómicos colegiados.",
      "descartes": {
        "a": "La atribución planteada corresponde a «Al órgano preautonómico que adopta un acuerdo por mayoría absoluta y lo comunica al gobierno». «A los mismos que cuando se ejerce a través del artículo 151» no es el sujeto indicado por el apartado «La disposición transitoria segunda».",
        "c": "«a las Cortes Generales» altera el órgano o sujeto competente; la formulación del apartado «La disposición transitoria segunda» es «al gobierno»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El artículo 146 recoge tanto «Una asamblea formada por miembros de las Diputaciones u órganos interinsulares» como «Una asamblea formada por diputados y senadores elegidos en las provincias». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Una asamblea formada por miembros de las Diputaciones u órganos interinsulares» es cierta, pero no basta por sí sola: «Una asamblea formada por diputados y senadores elegidos en las provincias» también está prevista.",
        "b": "Elegir solo «Una asamblea formada por diputados y senadores elegidos en las provincias» dejaría incompleta la respuesta, porque también se cumple «Una asamblea formada por miembros de las Diputaciones u órganos interinsulares»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El proyecto de Estatuto se elabora en una asamblea formada por representantes provinciales y parlamentarios y se eleva a las Cortes Generales para tramitarlo como ley.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 146 exige «su tramitación como ley», no «que sea aprobado por un voto de ratificación».",
        "c": "«someterá a referéndum» altera el órgano o sujeto competente; la formulación del artículo 146 es «elevará a las Cortes Generales para su tramitación como ley»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "Los Estatutos son la norma institucional básica de cada comunidad, forman parte del ordenamiento estatal, tienen un contenido mínimo y su reforma requiere aprobación mediante ley orgánica.",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 147 exige «Requieren ley orgánica de las Cortes Generales», no «Requiere referéndum».",
        "c": "«Se seguirá el procedimiento señalado en la Constitución» altera el órgano o sujeto competente; la formulación del artículo 147 es «Requieren ley orgánica de las Cortes Generales»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 151 recoge tanto «Los territorios que se hayan constituido en Comunidad Autónoma por el artículo 151» como «Los territorios que se hayan constituido en Comunidad Autónoma por la Disposición Transitoria Segunda». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Los territorios que se hayan constituido en Comunidad Autónoma por el artículo 151» es correcta, pero incompleta: también debe incluirse «Los territorios que se hayan constituido en Comunidad Autónoma por la Disposición Transitoria Segunda».",
        "b": "«Los territorios que se hayan constituido en Comunidad Autónoma por la Disposición Transitoria Segunda» es correcta, pero incompleta: también debe incluirse «Los territorios que se hayan constituido en Comunidad Autónoma por el artículo 151»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. La formulación que conserva ese alcance es «Una asamblea formada por diputados y senadores elegidos en las provincias».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 151 exige «diputados y senadores elegidos en las provincias», no «miembros de las Diputaciones u órganos interinsulares».",
        "c": "No son válidas las dos afirmaciones: «Una asamblea formada por diputados y senadores elegidos en las provincias» se ajusta a la teoría, mientras que «Una asamblea formada por miembros de las Diputaciones u órganos interinsulares» no."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. La consecuencia concreta es «El Gobierno».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 151 exige «El Gobierno», no «Las Cortes Generales».",
        "c": "«Rey» altera el órgano o sujeto competente; la formulación del artículo 151 es «Gobierno»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. El elemento que completa la regla es «Mayoría absoluta».",
      "descartes": {
        "a": "El artículo 151 fija «Mayoría absoluta»; «Unanimidad» altera el plazo, la cifra o la mayoría exigida.",
        "c": "«simple» altera el término que delimita la respuesta; la formulación del artículo 151 es «absoluta»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. En este caso debe aplicarse «La Comisión Constitucional del Congreso de los Diputados».",
      "descartes": {
        "a": "«La Comisión Constitucional de las Cortes Generales» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Después se remitirá a».",
        "c": "«La Comisión Constitucional del Senado» promueve el interés general, propone normas y ejerce funciones ejecutivas; «La Comisión Constitucional del Congreso de los Diputados», en cambio, promueve el interés general, propone normas y ejerce funciones ejecutivas."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. La formulación que conserva ese alcance es «En el plazo de 2 meses».",
      "descartes": {
        "a": "El artículo 151 fija «2 meses»; «1 mes» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 151 fija «2»; «6» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. La consecuencia concreta es «Se someterá a referéndum que deberá aprobarlo por mayoría de los votos».",
      "descartes": {
        "a": "El artículo 151 fija «someterá a referéndum que deberá aprobarlo por mayoría de los votos»; «elevará a las Cortes Generales para su tramitación como ley» altera el plazo, la cifra o la mayoría exigida.",
        "b": "La alternativa añade o cambia una condición que el artículo 151 no contempla. La formulación aplicable es «Se someterá a referéndum que deberá aprobarlo por mayoría de los votos»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. El elemento que completa la regla es «Se elevará a las Cortes Generales para su tramitación como ley».",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 151 exige «su tramitación como ley», no «que lo aprueben con un voto de ratificación».",
        "c": "El artículo 151 fija «elevará a las Cortes Generales para su tramitación como ley»; «someterá a referéndum que deberá aprobarlo por mayoría de los votos» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "Regula la iniciativa autonómica reforzada y la elaboración del Estatuto mediante asamblea, Comisión Constitucional, referéndum, Cortes Generales y sanción y promulgación del Rey. La categoría que completa la definición es «El Rey, promulgándolo y sancionándolo».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 151 exige «El Rey, promulgándolo y sancionándolo», no «Las Cortes Generales, aprobándolo».",
        "b": "«Pueblo a través del referéndum» altera el término que delimita la respuesta; la formulación del artículo 151 es «Rey, promulgándolo y sancionándolo»."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "Configura la Asamblea Legislativa, el Consejo de Gobierno, la Presidencia y el Tribunal Superior de Justicia, y exige referéndum para la reforma de los Estatutos aprobados por ese procedimiento.",
      "descartes": {
        "a": "La diferencia relevante está en «Lo mismo que los Estatutos que se han aprobado por la otra vía»: el artículo 152 emplea «Se requiere referéndum» y ese matiz cambia el alcance de la regla.",
        "c": "La respuesta conjunta también daría por válida «Lo mismo que los Estatutos que se han aprobado por la otra vía», pero el artículo 152 solo respalda «Se requiere referéndum»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-02-organizacion-territorial-del-estado",
  references: {
  "1": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 144",
    "articulos": [
      144
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 144",
    "articulos": [
      144
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "contextual",
    "etiqueta": "Artículo 143",
    "articulos": [
      143
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 144",
    "articulos": [
      144
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "15": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La disposición transitoria segunda",
    "bloqueId": "titulo-viii"
  },
  "16": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La disposición transitoria segunda",
    "bloqueId": "titulo-viii"
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 146",
    "articulos": [
      146
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 146",
    "articulos": [
      146
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 147",
    "articulos": [
      147
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "23": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "24": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "25": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "26": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "27": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "28": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 151",
    "articulos": [
      151
    ]
  },
  "29": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 152",
    "articulos": [
      152
    ]
  }
},
});
