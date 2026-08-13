import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-estatuto-autonomia-pais-vasco-articulos-24-a-33",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Los poderes del País Vasco se ejercerán a través del Parlamento, del Gobierno y de su Presidente o Lendakari.",
      "descartes": {
        "a": "La enumeración queda incompleta porque omite al Lehendakari como una de las vías de ejercicio de los poderes del País Vasco.",
        "c": "Añade al Tribunal Superior de Justicia, que no forma parte de la enumeración del artículo 24.1."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La solución registrada por el test es «Lo que señalen ellos mismos». Se conserva sin cambios, aunque ninguna opción reproduce con exactitud el artículo 24.2.",
      "descartes": {
        "a": "El artículo 24.2 no remite genéricamente a las leyes del Parlamento Vasco.",
        "c": "El artículo 24.2 tampoco remite a los decretos del Gobierno."
      },
      "notaRevision": {
        "tipo": "discrepancia-teorica",
        "titulo": "Ninguna opción coincide con la teoría",
        "texto": "El artículo 24.2 establece que los Territorios Históricos conservarán y organizarán sus instituciones de conformidad con lo dispuesto en el artículo 3 del Estatuto. Ninguna de las tres opciones recoge esa remisión. Se mantiene la opción B porque es la solución registrada en el test."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 25 atribuye al Parlamento Vasco el ejercicio de la potestad legislativa.",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 25 exige «Parlamento», no «Gobierno». En este caso, el artículo 25 conduce a «El Parlamento Vasco».",
        "c": "«Lehendakari» altera el órgano o sujeto competente; la formulación del artículo 25 es «Parlamento Vasco». En este caso, el artículo 25 conduce a «El Parlamento Vasco»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 25 encomienda al Parlamento Vasco la aprobación de los presupuestos del País Vasco.",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 25 exige «Parlamento», no «Gobierno». Aquí debe conservarse «El Parlamento Vasco», conforme a el artículo 25.",
        "c": "«Lehendakari» altera el órgano o sujeto competente; la formulación del artículo 25 es «Parlamento Vasco». Aquí debe conservarse «El Parlamento Vasco», conforme a el artículo 25."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El Parlamento Vasco ejerce la potestad legislativa, aprueba sus presupuestos e impulsa y controla la acción del Gobierno Vasco, todo ello sin perjuicio de las competencias de las Instituciones a que se refiere el artículo 37 del presente Estatuto. El elemento que completa la regla es «El Parlamento Vasco».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 25 exige «Parlamento Vasco», no «Tribunal Superior de Justicia».",
        "c": "«Lehendakari» sustituye el elemento previsto por la norma, que en el artículo 25 es «Parlamento Vasco». En este caso, el artículo 25 conduce a «El Parlamento Vasco»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El Parlamento Vasco ejerce la potestad legislativa, aprueba sus presupuestos e impulsa y controla la acción del Gobierno Vasco, todo ello sin perjuicio de las competencias de las Instituciones a que se refiere el artículo 37 del presente Estatuto. En este caso debe aplicarse «El Parlamento Vasco».",
      "descartes": {
        "b": "La diferencia relevante está en «Gobierno»: el artículo 25 emplea «Parlamento» y ese matiz cambia el alcance de la regla.",
        "c": "«Lehendakari» sustituye el elemento previsto por la norma, que en el artículo 25 es «Parlamento Vasco». Aquí debe conservarse «El Parlamento Vasco», conforme a el artículo 25."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El Parlamento Vasco estará integrado por un número igual de representantes de cada Territorio Histórico elegidos por sufragio universal, libre, directo y secreto.",
      "descartes": {
        "b": "El artículo 26 fija «Distribuidos por igual número de cada Territorio Histórico»; «Distribuidos entre los Territorios Históricos en proporción por el número de habitantes» altera ese dato.",
        "c": "«entre los Territorios Históricos en proporción a su extensión» altera el término que delimita la respuesta; la formulación del artículo 26 es «por igual número de cada Territorio Histórico»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "La circunscripción electoral es el Territorio Histórico.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 26 exige «Territorio Histórico», no «municipio».",
        "c": "«La comarca o cuadrillas en el caso de Álava» altera el término que delimita la respuesta; la formulación del artículo 26 es «El Territorio Histórico»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El Parlamento Vasco será elegido por un período de cuatro años.",
      "descartes": {
        "a": "El artículo 26 fija «4»; «3» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 26 fija «4»; «5» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "Una Ley Electoral del Parlamento Vasco regulará la elección de sus miembros y fijará las causas de inelegibilidad e incompatibilidad que afecten a los puestos o cargos que se desempeñen dentro de su ámbito territorial. El elemento que completa la regla es «Una Ley electoral del Parlamento Vasco».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 26 exige «del Parlamento Vasco», no «de las Cortes Generales».",
        "c": "«Gobierno» sustituye el elemento previsto por la norma, que en el artículo 26 es «Parlamento»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "Una Ley Electoral del Parlamento Vasco regulará la elección de sus miembros y fijará las causas de inelegibilidad e incompatibilidad que afecten a los puestos o cargos que se desempeñen dentro de su ámbito territorial. En este caso debe aplicarse «La misma ley que regula la elección de los miembros del Parlamento Vasco».",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 26 exige «La misma ley que regula la elección de los miembros del Parlamento Vasco», no «Una Ley electoral de las Cortes Generales».",
        "c": "No son válidas las dos afirmaciones: «La misma ley que regula la elección de los miembros del Parlamento Vasco» se ajusta a la teoría, mientras que «Una Ley electoral de las Cortes Generales» no."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 26.6 declara inviolables a los miembros del Parlamento Vasco por los votos y opiniones emitidos en el ejercicio del cargo.",
      "descartes": {
        "a": "La diferencia relevante está en «Inmunes»: el artículo 26 emplea «Inviolables» y ese matiz cambia el alcance de la regla.",
        "c": "«Intocables» sustituye el elemento previsto por la norma, que en el artículo 26 es «Inviolables»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Durante su mandato y dentro de la Comunidad Autónoma, el artículo 26.6 solo permite detener o retener a los parlamentarios en caso de delito flagrante.",
      "descartes": {
        "a": "La diferencia relevante está en «políticos»: el artículo 26 emplea «flagrantes» y ese matiz cambia el alcance de la regla.",
        "b": "«de terrorismo» sustituye el elemento previsto por la norma, que en el artículo 26 es «flagrantes»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "Cuando el hecho se comete en el ámbito territorial vasco, el artículo 26.6 atribuye la inculpación, prisión, procesamiento y juicio al Tribunal Superior de Justicia del País Vasco.",
      "descartes": {
        "b": "La diferencia relevante está en «Supremo»: el artículo 26 emplea «Superior de Justicia» y ese matiz cambia el alcance de la regla.",
        "c": "«Constitucional» sustituye el elemento previsto por la norma, que en el artículo 26 es «Superior de Justicia»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "Fuera del País Vasco, la responsabilidad penal de los parlamentarios se exige ante la Sala de lo Penal del Tribunal Supremo.",
      "descartes": {
        "a": "La diferencia relevante está en «Superior de Justicia»: el artículo 26 emplea «Supremo» y ese matiz cambia el alcance de la regla.",
        "c": "«Constitucional» sustituye el elemento previsto por la norma, que en el artículo 26 es «Supremo»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 27.1 dispone que el Parlamento elige entre sus miembros una presidencia, una mesa y una diputación permanente.",
      "descartes": {
        "b": "La diferencia relevante está en «Gobierno»: el artículo 27 emplea «Parlamento» y ese matiz cambia el alcance de la regla. En este caso, el artículo 27 conduce a «El Parlamento Vasco».",
        "c": "«Lehendakari» sustituye el elemento previsto por la norma, que en el artículo 27 es «Parlamento Vasco»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Los miembros del Parlamento podrán, tanto en Pleno como en Comisiones, formular ruegos, preguntas, interpelaciones y mociones en los términos que reglamentariamente se establezcan.",
      "descartes": {
        "b": "La diferencia relevante está en «Gobierno»: el artículo 27 emplea «Parlamento» y ese matiz cambia el alcance de la regla. Aquí debe conservarse «El Parlamento Vasco», conforme a el artículo 27.",
        "c": "«Lehendakari» altera el órgano o sujeto competente; la formulación del artículo 27 es «Parlamento Vasco»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El Reglamento interno del Parlamento debe aprobarse por mayoría absoluta de sus miembros, conforme al artículo 27.1.",
      "descartes": {
        "a": "El artículo 27 fija «Mayoría absoluta de»; «Unanimidad entre» altera el plazo, la cifra o la mayoría exigida.",
        "c": "«simple» sustituye el elemento previsto por la norma, que en el artículo 27 es «absoluta de sus miembros»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 27.1 atribuye al Parlamento la aprobación de su presupuesto y del Estatuto de su personal. Ambas opciones forman parte de la respuesta.",
      "descartes": {
        "a": "El presupuesto está incluido, pero el mismo precepto añade también el Estatuto del personal.",
        "b": "El Estatuto del personal también se aprueba, aunque no es el único elemento: falta el presupuesto parlamentario."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "Los períodos ordinarios de sesiones durarán como mínimo ocho meses al año.",
      "descartes": {
        "b": "El artículo 27 fija «ocho meses al año»; «nueve meses» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El artículo 27 fija «mínimo ocho meses al año»; «máximo nueve meses» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "La Cámara podrá reunirse en sesión extraordinaria a petición del Gobierno, de la Diputación Permanente o de la tercera parte de sus miembros.",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 27 exige «La Diputación Permanente», no «Una décima parte de los miembros».",
        "c": "No son válidas las dos afirmaciones: «La Diputación Permanente» se ajusta a la teoría, mientras que «Una décima parte de los miembros» no."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "Las sesiones extraordinarias deberán convocarse con un orden del día determinado y serán clausuradas una vez que éste haya sido agotado.",
      "descartes": {
        "a": "El artículo 27 fija «se haya agotado todo el orden del día»; «transcurran 8 horas» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El artículo 27 fija «se haya agotado todo el orden del día»; «transcurran 12 horas» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "La iniciativa legislativa corresponde a los miembros del Parlamento, al Gobierno y a las Instituciones representativas a que se refiere el artículo 37 de este Estatuto, en los términos establecidos por la Ley.",
      "descartes": {
        "b": "La alternativa modifica el órgano o sujeto competente: el artículo 27 exige «El Parlamento Vasco», no «La Diputación Permanente».",
        "c": "«La Mesa del Parlamento Vasco» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «La iniciativa legislativa corresponde a»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 27 recoge tanto «En Pleno» como «En comisiones». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«En Pleno» es cierta, pero no basta por sí sola: «En comisiones» también está prevista.",
        "b": "Elegir solo «En comisiones» dejaría incompleta la respuesta, porque también se cumple «En Pleno»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "La iniciativa popular para la presentación de proposiciones de Ley, que hayan de ser tramitadas por el Parlamento Vasco, se regulará por éste mediante Ley, de acuerdo con lo que establezca la Ley Orgánica prevista en el artículo 83 de la Constitución.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 27 exige «Proposiciones», no «Proyectos».",
        "c": "«Ambos términos se pueden utilizar indistintamente» altera el término que delimita la respuesta; la formulación del artículo 27 es «Proposiciones de Ley»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La ficha sitúa la regulación de los poderes del País Vasco en el Título II del Estatuto de Autonomía.",
      "descartes": {
        "a": "La diferencia relevante está en «Preliminar»: el apartado «Título II. De los poderes del País Vasco» emplea «II» y ese matiz cambia el alcance de la regla.",
        "b": "«I» sustituye el elemento previsto por la norma, que en el apartado «Título II. De los poderes del País Vasco» es «II»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El Título II se organiza en un capítulo preliminar y otros cinco capítulos, tal como muestra la estructura de la ficha teórica.",
      "descartes": {
        "a": "El apartado «Título II. De los poderes del País Vasco» fija «cinco»; «tres» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El apartado «Título II. De los poderes del País Vasco» fija «cinco»; «cuatro» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "El Gobierno Vasco es el órgano colegiado que ostenta las funciones ejecutivas y administrativas del País Vasco.",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 29 exige «Gobierno», no «Parlamento».",
        "c": "«Lehendakari» altera el órgano o sujeto competente; la formulación del artículo 29 es «Gobierno Vasco»."
      }
    },
    {
      "preguntaId": 29,
      "justificacion": "El Presidente designa y separa los Consejeros del Gobierno, dirige su acción, ostentando a la vez la más alta representación del País Vasco y la ordinaria del Estado en este territorio.",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 33 exige «Lehendakari», no «Parlamento Vasco».",
        "b": "«Gobierno Vasco» altera el órgano o sujeto competente; la formulación del artículo 33 es «Lehendakari»."
      }
    },
    {
      "preguntaId": 30,
      "justificacion": "El apartado «Poderes del País Vasco» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «El Gobierno Vasco». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «El Parlamento Vasco»; se descarta únicamente frente a la solución registrada, «El Gobierno Vasco».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «El Lehendakari»."
      }
    },
    {
      "preguntaId": 31,
      "justificacion": "Las Leyes del Parlamento serán promulgadas por el Presidente del Gobierno Vasco, el cual ordenará la publicación de las mismas en el «Boletín Oficial del País Vasco» en el plazo de quince días de su aprobación y en el «Boletín Oficial del Estado».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 27 exige «Gobierno», no «Parlamento».",
        "c": "«Rey» altera el órgano o sujeto competente; la formulación del artículo 27 es «Presidente del Gobierno Vasco»."
      }
    },
    {
      "preguntaId": 32,
      "justificacion": "El artículo 28 permite al Parlamento designar a los senadores que representan al País Vasco, no a los diputados del Congreso. Esta última es la opción que no corresponde.",
      "descartes": {
        "b": "La diferencia relevante está en «Solicitar del Gobierno del Estado la adopción de un proyecto de ley»: el artículo 28 emplea «Designar a los Diputados del Congreso que han de representar al País Vasco» y ese matiz cambia el alcance de la regla.",
        "c": "«Remitir a la Mesa del Congreso una proposición de ley» sustituye el elemento previsto por la norma, que en el artículo 28 es «Designar a los Diputados del Congreso que han de representar al País Vasco»."
      }
    },
    {
      "preguntaId": 33,
      "justificacion": "Interponer el recurso de inconstitucionalidad.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 28 exige «un recurso de inconstitucionalidad», no «una cuestión de constitucionalidad».",
        "c": "«amparo» sustituye el elemento previsto por la norma, que en el artículo 28 es «inconstitucionalidad»."
      }
    },
    {
      "preguntaId": 34,
      "justificacion": "El artículo 30 dispone que las atribuciones y la organización del Gobierno, así como el Estatuto de sus miembros, serán regulados por el Parlamento.",
      "descartes": {
        "a": "La diferencia relevante está en «Gobierno»: el artículo 30 emplea «Parlamento» y ese matiz cambia el alcance de la regla.",
        "c": "«Las Cortes Generales» sustituye el elemento previsto por la norma, que en el artículo 30 es «El Parlamento Vasco»."
      }
    },
    {
      "preguntaId": 35,
      "justificacion": "El Gobierno Vasco cesa tras la celebración de elecciones del Parlamento, en el caso de pérdida de la confianza parlamentaria o por dimisión o fallecimiento de su Presidente.",
      "descartes": {
        "a": "La diferencia relevante está en «Antes de la celebración de elecciones del Parlamento»: el artículo 31 emplea «En el caso de la pérdida de la confianza parlamentaria» y ese matiz cambia el alcance de la regla.",
        "c": "«discapacidad del Presidente» altera el término que delimita la respuesta; la formulación del artículo 31 es «la pérdida de la confianza parlamentaria»."
      }
    },
    {
      "preguntaId": 36,
      "justificacion": "El Gobierno cesante continuará en funciones hasta la toma de posesión del nuevo Gobierno.",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 31 exige «La toma de posesión del nuevo Gobierno», no «Las elecciones al Parlamento Vasco».",
        "b": "El artículo 31 fija «La toma de posesión del nuevo Gobierno»; «Que transcurran de 30 a 60 días desde la elección al Parlamento Vasco» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 37,
      "justificacion": "El artículo 32 recoge tanto «Políticamente» como «De forma solidaria». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Políticamente» es cierta, pero no basta por sí sola: «De forma solidaria» también está prevista.",
        "b": "Elegir solo «De forma solidaria» dejaría incompleta la respuesta, porque también se cumple «Políticamente»."
      }
    },
    {
      "preguntaId": 38,
      "justificacion": "Durante el mandato y dentro de la Comunidad Autónoma, el artículo 32.2 solo permite detener o retener al presidente y a los miembros del Gobierno en caso de delito flagrante.",
      "descartes": {
        "a": "La diferencia relevante está en «políticos»: el artículo 32 emplea «flagrantes» y ese matiz cambia el alcance de la regla.",
        "b": "«de terrorismo» sustituye el elemento previsto por la norma, que en el artículo 32 es «flagrantes»."
      }
    },
    {
      "preguntaId": 39,
      "justificacion": "Para los hechos cometidos en el ámbito territorial vasco, el artículo 32.2 atribuye la inculpación, prisión, procesamiento y juicio al Tribunal Superior de Justicia del País Vasco.",
      "descartes": {
        "b": "La diferencia relevante está en «Supremo»: el artículo 32 emplea «Superior de Justicia» y ese matiz cambia el alcance de la regla.",
        "c": "«Constitucional» sustituye el elemento previsto por la norma, que en el artículo 32 es «Superior de Justicia»."
      }
    },
    {
      "preguntaId": 40,
      "justificacion": "Fuera del País Vasco, la responsabilidad penal del presidente y los miembros del Gobierno se exige ante la Sala de lo Penal del Tribunal Supremo.",
      "descartes": {
        "a": "La diferencia relevante está en «Superior de Justicia»: el artículo 32 emplea «Supremo» y ese matiz cambia el alcance de la regla.",
        "c": "«Constitucional» sustituye el elemento previsto por la norma, que en el artículo 32 es «Supremo»."
      }
    },
    {
      "preguntaId": 41,
      "justificacion": "El artículo 33 recoge tanto «Será designado por el Parlamento Vasco de entre sus miembros» como «Será nombrado por el Rey». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Será designado por el Parlamento Vasco de entre sus miembros» es cierta, pero no basta por sí sola: «Será nombrado por el Rey» también está prevista.",
        "b": "Elegir solo «Será nombrado por el Rey» dejaría incompleta la respuesta, porque también se cumple «Será designado por el Parlamento Vasco de entre sus miembros»."
      }
    },
    {
      "preguntaId": 42,
      "justificacion": "El Parlamento Vasco determinará por Ley la forma de elección del Presidente y sus atribuciones, así como las relaciones del Gobierno con el Parlamento.",
      "descartes": {
        "a": "«El Parlamento Vasco designa y separa los Consejeros del Gobierno» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Es correcto señalar».",
        "b": "La alternativa añade o cambia una condición que el artículo 33 no contempla. La formulación aplicable es «El Parlamento Vasco determinará por ley la forma de elección del Presidente y sus atribuciones, así como las relaciones del Gobierno con el Parlamento»."
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
    "etiqueta": "Artículo 24",
    "articulos": [
      24
    ]
  },
  "2": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 24",
    "articulos": [
      24
    ]
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 25",
    "articulos": [
      25
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 25",
    "articulos": [
      25
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 25",
    "articulos": [
      25
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 25",
    "articulos": [
      25
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 26",
    "articulos": [
      26
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "22": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "23": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "24": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "25": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "26": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Título II. De los poderes del País Vasco",
    "bloqueId": "poderes-pais-vasco"
  },
  "27": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Título II. De los poderes del País Vasco",
    "bloqueId": "poderes-pais-vasco"
  },
  "28": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 29",
    "articulos": [
      29
    ]
  },
  "29": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 33",
    "articulos": [
      33
    ]
  },
  "30": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Poderes del País Vasco",
    "bloqueId": "poderes-pais-vasco"
  },
  "31": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 27",
    "articulos": [
      27
    ]
  },
  "32": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "33": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 28",
    "articulos": [
      28
    ]
  },
  "34": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 30",
    "articulos": [
      30
    ]
  },
  "35": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 31",
    "articulos": [
      31
    ]
  },
  "36": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 31",
    "articulos": [
      31
    ]
  },
  "37": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 32",
    "articulos": [
      32
    ]
  },
  "38": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 32",
    "articulos": [
      32
    ]
  },
  "39": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 32",
    "articulos": [
      32
    ]
  },
  "40": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 32",
    "articulos": [
      32
    ]
  },
  "41": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 33",
    "articulos": [
      33
    ]
  },
  "42": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 33",
    "articulos": [
      33
    ]
  }
},
});
