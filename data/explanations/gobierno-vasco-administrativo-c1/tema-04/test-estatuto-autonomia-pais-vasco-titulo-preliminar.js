import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-estatuto-autonomia-pais-vasco-titulo-preliminar",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El apartado «Principios generales del Estatuto de Autonomía» trata la materia de «El Estatuto de Autonomía es la siguiente Ley», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Ley Orgánica 3/1979, de 18 de diciembre».",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «Ley Ordinaria 3/1979, de 18 de diciembre» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«Real Decreto 3/1979, de 18 de diciembre» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El contenido del apartado «Principios generales del Estatuto de Autonomía» no basta para comprobar «4» en «Además del Título Preliminar, el Estatuto de Autonomía cuenta con el siguiente número de Títulos». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «2»; se descarta únicamente frente a la solución registrada, «4».",
        "b": "«3» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El Pueblo Vasco o Euskal-Herria, como expresión de su nacionalidad, y para acceder a su autogobierno, se constituye en Comunidad Autónoma dentro del Estado Español bajo la denominación de Euskadi o País Vasco, de acuerdo con la Constitución y con el presente Estatuto, que es su norma institucional básica.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 1 exige «Constitución y con el presente Estatuto de Autonomía», no «Estatuto de Autonomía y con la Constitución española».",
        "c": "La alternativa añade o cambia una condición que el artículo 1 no contempla. La formulación aplicable es «El Pueblo Vasco o Euskal Herria, como expresión de su nacionalidad, y para acceder a su autogobierno, se constituye en Comunidad Autónoma dentro del Estado español bajo la denomin…»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "Álava, Guipúzcoa y Vizcaya, así como Navarra, tienen derecho a formar parte de la Comunidad Autónoma del País Vasco.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 2 exige «Gipuzkoa, así como Navarra», no «y Gipuzkoa».",
        "c": "«Navarra así como el territorio vasco francés» altera el término que delimita la respuesta; la formulación del artículo 2 es «así como Navarra»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El territorio de la Comunidad Autónoma del País Vasco quedará integrado por los Territorios Históricos que coinciden con las provincias, en sus actuales límites, de Álava.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 2 exige «y Gipuzkoa», no «Gipuzkoa, así como Navarra».",
        "c": "«Gipuzkoa, Navarra así como el territorio vasco francés» sustituye el elemento previsto por la norma, que en el artículo 2 es «y Gipuzkoa»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "Guipúzcoa y Vizcaya, así como la de Navarra, en el supuesto de que esta última decida su incorporación de acuerdo con el procedimiento establecido en la disposición transitoria cuarta de la Constitución.",
      "descartes": {
        "a": "El artículo 2 fija «4ª»; «2ª» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El artículo 2 fija «4ª»; «3ª» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "Cada uno de los Territorios Históricos que integran el País Vasco podrá, en el seno del mismo, conservar o, en su caso, restablecer y actualizar su organización e instituciones privativas de autogobierno.",
      "descartes": {
        "a": "La diferencia relevante está en «municipios»: el artículo 3 emplea «Territorios Históricos» y ese matiz cambia el alcance de la regla.",
        "c": "«las Provincias» altera el término que delimita la respuesta; la formulación del artículo 3 es «los Territorios Históricos»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "La designación de la sede de las instituciones comunes de la Comunidad Autónoma del País Vasco se hará mediante Ley del Parlamento Vasco y dentro del territorio de la Comunidad Autónoma.",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 4 exige «Las respuestas b y a son correctas», no «Mediante Ley del Parlamento Vasco y dentro del territorio de la Comunidad Autónoma».",
        "b": "La alternativa añade o cambia una condición que el artículo 4 no contempla. La formulación aplicable es «Las respuestas b y a son correctas»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "La bandera del País Vasco es la bicrucífera, compuesta de aspa verde, cruz blanca superpuesta y fondo rojo.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 5 exige «verde, cruz blanca», no «blanca, cruz verde».",
        "c": "«roja, cruz blanca superpuesta y fondo verde» altera el término que delimita la respuesta; la formulación del artículo 5 es «verde, cruz blanca superpuesta y fondo rojo»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "Asimismo, se reconocen las banderas y enseñas propias de los Territorios Históricos que integran la Comunidad Autónoma.",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 5 exige «Los Territorios Históricos que integran la Comunidad Autónoma», no «El Estado».",
        "c": "«Municipios» altera el término que delimita la respuesta; la formulación del artículo 5 es «Territorios Históricos»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El euskera, lengua propia del Pueblo Vasco, tendrá, como el castellano, carácter de lengua oficial en Euskadi, y todos sus habitantes tienen el derecho a conocer y usar ambas lenguas. En este caso debe aplicarse «El Pueblo Vasco».",
      "descartes": {
        "a": "La diferencia relevante está en «Español»: el artículo 6 emplea «Vasco» y ese matiz cambia el alcance de la regla.",
        "c": "La alternativa añade o cambia una condición que el artículo 6 no contempla. La formulación aplicable es «El Pueblo Vasco»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El euskera, lengua propia del Pueblo Vasco, tendrá, como el castellano, carácter de lengua oficial en Euskadi, y todos sus habitantes tienen el derecho a conocer y usar ambas lenguas. La formulación que conserva ese alcance es «Dos lenguas oficiales, el euskera y el castellano».",
      "descartes": {
        "a": "El artículo 6 fija «Dos lenguas oficiales, el euskera y»; «Una lengua oficial,» altera el plazo, la cifra o la mayoría exigida.",
        "b": "El artículo 6 fija «Dos lenguas oficiales, el euskera y el castellano»; «Una lengua oficial, el euskera» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El euskera, lengua propia del Pueblo Vasco, tendrá, como el castellano, carácter de lengua oficial en Euskadi, y todos sus habitantes tienen el derecho a conocer y usar ambas lenguas. La consecuencia concreta es «El derecho de conocer y usar».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el artículo 6 exige «derecho», no «deber».",
        "c": "La alternativa añade o cambia una condición que el artículo 6 no contempla. La formulación aplicable es «El derecho de conocer y usar»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "Las instituciones comunes de la Comunidad Autónoma, teniendo en cuenta la diversidad socio-lingüística del País Vasco, garantizarán el uso de ambas lenguas, regulando su carácter oficial, y arbitrarán y regularán las medidas y medios necesarios para asegurar su conocimiento.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el artículo 6 exige «comunes de», no «de los Territorios Históricos que integran».",
        "c": "«de los Ayuntamientos que configuran» altera el término que delimita la respuesta; la formulación del artículo 6 es «comunes de»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "La Real Academia de la Lengua Vasca-Euskaltzaindia es institución consultiva oficial en lo referente al euskera.",
      "descartes": {
        "b": "«La Academia de La Lengua Vasca-Euskaltzaindia» regula una posibilidad diferente; en este caso, el artículo 6 establece «La Real Academia de La Lengua Vasca-Euskaltzaindia».",
        "c": "«Se pueden utilizar ambos nombres indistintamente» sustituye el elemento previsto por la norma, que en el artículo 6 es «La Real Academia de La Lengua Vasca-Euskaltzaindia»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 6 trata la materia de «La Comunidad Autónoma del País Vasco podrá solicitar la celebración de tratados o convenios que permitan el establecimiento de relaciones culturales con los Es…», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «El Gobierno español».",
      "descartes": {
        "b": "La ficha no contiene información que permita confirmar «Las Cortes Generales» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«El Tribunal Superior de Justicia del País Vasco» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa. En este caso, el artículo 6 conduce a «El Gobierno español»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El contenido del artículo 6 no basta para comprobar «Las Cortes Generales» en «En ocasiones, la celebración de esos tratados exige la autorización de». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «El Gobierno español» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«El Tribunal Superior de Justicia del País Vasco» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa. Aquí debe conservarse «Las Cortes Generales», conforme a el artículo 6."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "A los efectos del presente Estatuto tendrán la condición política de vascos quienes tengan la vecindad administrativa de acuerdo con las Leyes Generales del Estado, en cualquiera de los municipios integrados en el territorio de la Comunidad Autónoma.",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el artículo 7 exige «del Estado,», no «autonómicas,».",
        "c": "La alternativa añade o cambia una condición que el artículo 7 no contempla. La formulación aplicable es «Quienes tengan la vecindad administrativa, de acuerdo con las leyes del Estado, en cualquiera de los municipios integrados en el territorio de la Comunidad Autónoma»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "Los residentes en el extranjero, así como sus descendientes, si así lo solicitaren, gozarán de idénticos derechos políticos que los residentes en el País Vasco, si hubieran tenido su última vecindad administrativa en Euskadi, siempre que conserven la nacionalidad española.",
      "descartes": {
        "a": "La alternativa invierte o absolutiza la regla: el artículo 7 establece «siempre que conserven», no «independientemente de que conserven o no».",
        "b": "La alternativa invierte o absolutiza la regla: el artículo 7 establece «hubieran tenido su última vecindad administrativa en Euskadi, siempre que conserven», no «mantienen la vecindad administrativa en Euskadi, independientemente de que conserven o no»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "Que soliciten la incorporación el Ayuntamiento o la mayoría de los Ayuntamientos interesados, y que se oiga a la Comunidad o provincia a la que pertenezcan los Territorios o Municipios a agregar.",
      "descartes": {
        "b": "«Que lo acuerden los habitantes de dicho municipio o territorio mediante referéndum expresamente convocado» regula una posibilidad diferente; en este caso, el artículo 8 establece «Que soliciten la incorporación el Ayuntamiento o la mayoría de los Ayuntamientos interesados, y que se oiga a la Comunidad o provincia a la que pertenezcan los Territorios o Munic…».",
        "c": "La alternativa añade o cambia una condición que el artículo 8 no contempla. La formulación aplicable es «Que soliciten la incorporación el Ayuntamiento o la mayoría de los Ayuntamientos interesados, y que se oiga a la Comunidad o provincia a la que pertenezcan los Territorios o Munic…»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Que los aprueben el Parlamento del País Vasco y, posteriormente, las Cortes Generales del Estado, mediante Ley Orgánica.",
      "descartes": {
        "a": "«Que soliciten la incorporación el Ayuntamiento o la mayoría de los Ayuntamientos interesados, y que se oiga a la Comunidad o provincia a la que pertenezcan los Territorios o…» regula una posibilidad diferente; en este caso, el artículo 8 establece «Que lo aprueben el Parlamento Vasco y posteriormente las Cortes Generales del Estado mediante Ley Orgánica».",
        "b": "La alternativa añade o cambia una condición que el artículo 8 no contempla. La formulación aplicable es «Que lo aprueben el Parlamento Vasco y posteriormente las Cortes Generales del Estado mediante Ley Orgánica»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-04-organizacion-politica-administrativa-capv",
  references: {
  "1": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Principios generales del Estatuto de Autonomía",
    "bloqueId": "principios-generales"
  },
  "2": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Principios generales del Estatuto de Autonomía",
    "bloqueId": "principios-generales"
  },
  "3": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 1",
    "articulos": [
      1
    ]
  },
  "4": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 2",
    "articulos": [
      2
    ]
  },
  "5": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 2",
    "articulos": [
      2
    ]
  },
  "6": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 2",
    "articulos": [
      2
    ]
  },
  "7": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 3",
    "articulos": [
      3
    ]
  },
  "8": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 4",
    "articulos": [
      4
    ]
  },
  "9": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 5",
    "articulos": [
      5
    ]
  },
  "10": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 5",
    "articulos": [
      5
    ]
  },
  "11": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 6",
    "articulos": [
      6
    ]
  },
  "12": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 6",
    "articulos": [
      6
    ]
  },
  "13": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 6",
    "articulos": [
      6
    ]
  },
  "14": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 6",
    "articulos": [
      6
    ]
  },
  "15": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 6",
    "articulos": [
      6
    ]
  },
  "16": {
    "tipo": "articulos",
    "alcance": "contextual",
    "etiqueta": "Artículo 6",
    "articulos": [
      6
    ]
  },
  "17": {
    "tipo": "articulos",
    "alcance": "contextual",
    "etiqueta": "Artículo 6",
    "articulos": [
      6
    ]
  },
  "18": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 7",
    "articulos": [
      7
    ]
  },
  "19": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 7",
    "articulos": [
      7
    ]
  },
  "20": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 8",
    "articulos": [
      8
    ]
  },
  "21": {
    "tipo": "articulos",
    "alcance": "directa",
    "etiqueta": "Artículo 8",
    "articulos": [
      8
    ]
  }
},
});
