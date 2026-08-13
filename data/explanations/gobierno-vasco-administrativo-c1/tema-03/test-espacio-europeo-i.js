import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-espacio-europeo-i",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Surgió entre diversos países una iniciativa de cooperación interna con el fin de que no se produjeran nuevos conflictos y guerras», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Al finalizar la Segunda Guerra Mundial».",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «Al finalizar la Primera Guerra Mundial» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«Al finalizar la Tercera Guerra Mundial» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «La recuperación económica de Europa tras los estragos de la guerra» en «Otro de los objetivos de esta cooperación era». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «La recuperación social de Europa tras los estragos de la guerra»; se descarta únicamente frente a la solución registrada, «La recuperación económica de Europa tras los estragos de la guerra».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «La recuperación política de Europa tras los estragos de la guerra»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» sirve para encuadrar la cuestión, pero no confirma por separado las afirmaciones combinadas. Se conserva la respuesta conjunta registrada en el test. En esta cuestión, la formulación relevante es «Ambas respuestas son correctas». En esta cuestión, la formulación relevante es «Ambas respuestas son correctas». En esta cuestión, la formulación relevante es «Ambas respuestas son correctas». La formulación que conserva ese alcance es «Ambas respuestas son correctas».",
      "descartes": {
        "a": "«Fue entre Bélgica, Países Bajos y Luxemburgo» forma parte de la respuesta conjunta registrada, pero la ficha no aporta detalle suficiente para validarla aisladamente.",
        "b": "El bloque consultado tampoco aporta un dato con el que sostener «Es el primer antecedente de la unión aduanera europea y nos sitúa en 1948»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Tratado de París», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Con él se materializo la creación de la CECA».",
      "descartes": {
        "a": "El bloque consultado tampoco aporta un dato con el que sostener «Por el cual se creaba un único mercado común europeo para la energía atómica».",
        "b": "La teoría disponible no permite comparar «Fue firmado por los mismos países que los de la Convención del Benelux» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «En 1955 los ministros de Asuntos Exteriores de los Seis se reunieron en la Conferencia de Messina» en «Es correcto señalar». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "b": "No puede descartarse «En 1957 en el Tratado de Roma se creaba la CEE y la CECA» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test.",
        "c": "La ficha no contiene información que permita confirmar «El EURATOM nació con el objetivo de crear las condiciones para el óptimo desarrollo de la dañada industria atómica de estos años» en este punto; no puede justificarse desde la teoría disponible."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Tuvo mucha menos importancia el EURATOM que la CEE, de hecho el Tratado de Roma se asocia casi en exclusiva a la creación de la CEE». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Tuvo mucha más importancia el EURATOM que la CEE, de hecho el Tratado de Roma se asocia casi en exclusiva a la creación del EURATOM»; se descarta únicamente frente a la solución registrada, «Tuvo mucha menos importancia el EURATOM que la CEE, de hecho el Tratado de Roma se asocia casi en exclusiva a la creación de la CEE».",
        "c": "«Tuvo mucha más importancia el EURATOM que la CEE, de hecho el Tratado de París se asocia casi en exclusiva a la creación del EURATOM» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La ficha ofrece el contexto histórico de la CEE, pero no desarrolla su evolución desde el proyecto político hasta la unión aduanera. Se conserva la respuesta conjunta registrada sin presentarla como verificada por este material.",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «La CEE nació con un claro carácter político» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«La realidad demostró que la CEE más que una unión política, fue una unión aduanera, de hecho coloquialmente a esta Comunidad se la denomina Mercado Común» forma parte de la respuesta conjunta registrada, pero la ficha no aporta detalle suficiente para validarla aisladamente."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «En el Acta Única de 1986 y con entrada en vigor en el 87, impulsará definitivamente el libre movimiento de personas, servicios y capitales» en «Es correcto señalar». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «La CEE recoge la libre circulación de personas, bienes y servicios»; se descarta únicamente frente a la solución registrada, «En el Acta Única de 1986 y con entrada en vigor en el 87, impulsará definitivamente el libre movimiento de personas, servicios y capitales».",
        "c": "«En el Acta Única de 1986 y con entrada en vigor en el 87, se establecerá definitivamente el libre movimiento de personas, servicios y capitales» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Dinamarca, Irlanda y Gran Bretaña». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "b": "El bloque consultado tampoco aporta un dato con el que sostener «Alemania Federal, Francia e Italia».",
        "c": "La teoría disponible no permite comparar «Finlandia, Austria y Suecia» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Es correcto señalar», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «La CEE va a protagonizar un crecimiento económico espectacular desde su fundación hasta la crisis del petróleo de 1973».",
      "descartes": {
        "b": "La ficha no contiene información que permita confirmar «En el año 1975 se produjeron las primeras elecciones al Parlamento Europeo y en 1979 se formó el Consejo Europeo que tomaba grandes decisiones» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«En 1986 se incorporan a la Comunidad Europea Grecia, España y Portugal» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Finlandia, Austria y Suecia» en «En 1995 se incorporan». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «Dinamarca, Irlanda y Gran Bretaña» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«Alemania Federal, Francia e Italia» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Rumania y Bulgaria». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «República Checa y Chipre»; se descarta únicamente frente a la solución registrada, «Rumania y Bulgaria».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «Eslovaquia y Eslovenia»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Estonia, Hungría, Letonia, Lituania, Malta y Polonia entran en», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «2004».",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «2002»; se descarta únicamente frente a la solución registrada, «2004».",
        "c": "La teoría disponible no permite comparar «2007» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Institucionalmente reconoce al Consejo de Europa como el Parlamento Europeo» en «Acta Única Europea de 1986». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "b": "La teoría disponible no permite comparar «Económicamente se establece un único mercado para personas, bienes, servicios y capitales» con la solución registrada de esta pregunta.",
        "c": "No puede descartarse «Además establece la moneda única» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» sirve para encuadrar la cuestión, pero no confirma por separado las afirmaciones combinadas. Se conserva la respuesta conjunta registrada en el test. En esta cuestión, la formulación relevante es «Ambas respuestas son correctas». En esta cuestión, la formulación relevante es «Ambas respuestas son correctas». En esta cuestión, la formulación relevante es «Ambas respuestas son correctas». En este caso debe aplicarse «Ambas respuestas son correctas».",
      "descartes": {
        "a": "La teoría disponible no permite comparar «Se aprueban medidas encaminadas a la integración social de sus miembros en materias de derechos humanos, sanidad, medio ambiente, investigación y tecnología» con la solución registrada de esta pregunta.",
        "b": "No puede descartarse «Se crean los Fondos Estructurales, fondos que buscan el apoyar financieramente a los países que lo necesiten en base a la solidaridad» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "EL ACTA ÚNICA EUROPEA El Acta Única Europea modifica los Tratados constitutivos de las Comunidades Europeas y establece la cooperación política europea.",
      "descartes": {
        "a": "«Da al proceso de unión europea un claro sentido económico y de hecho pasa de llamarse CEE y aparece la Unión Europea» regula una posibilidad diferente; en este caso, el apartado «Tratados de la UE» establece «Completa el Tratado de París, Roma y el Acta Única Europea».",
        "b": "La alternativa añade o cambia una condición que el apartado «Tratados de la UE» no contempla. La formulación aplicable es «Completa el Tratado de París, Roma y el Acta Única Europea»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "TRATADO DE LA UE/TRATADO DE MAASTRICHT Conforme a dicho Tratado, la Unión se fundamenta en las Comunidades Europeas (primer pilar), con dos ámbitos de cooperación adicionales (segundo y tercer pilar).",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el apartado «Tratados de la UE» exige «Los gobiernos integrantes aumentan poderes por la cesión paulatina de las instituciones europeas», no «Se reconoce la ciudadanía europea que implica iguales derechos en todos los países».",
        "b": "«Se establece la creación de una moneda única, el euro» altera el término que delimita la respuesta; la formulación del apartado «Tratados de la UE» es «Los gobiernos integrantes aumentan poderes por la cesión paulatina de las instituciones europeas»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Crea Europol, embrión de una futura policía europea». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «Hace que entre en circulación el euro desde enero de 2000»; se descarta únicamente frente a la solución registrada, «Crea Europol, embrión de una futura policía europea».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «Se establece una Política Exterior y de Seguridad común para aquellos países que lo deseen»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Tratado de Ámsterdam (aprobado en 1997 y con entrada en vigor en 1999)», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Prevé pasos y medidas que puede adoptar la UE contra un Estado que haya vulnerado derechos fundamentales».",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Este tratado se basa en la libertad de circulación económica»; se descarta únicamente frente a la solución registrada, «Prevé pasos y medidas que puede adoptar la UE contra un Estado que haya vulnerado derechos fundamentales».",
        "c": "La teoría disponible no permite comparar «En él se ve reforzado las funciones del Tribunal de Cuentas, del Comité Económico y Social, del Comité económico y del Comité de las Regiones y ampliado las del Consejo…» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Ambas respuestas son correctas» en «Tratado de Ámsterdam». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «La UE puede intervenir en la salud y en la seguridad de los trabajadores, sus condiciones, y la igualdad de trato entre hombres y mujeres» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«Se establece el principio de no discriminación y de igualdad de oportunidades, se refuerzan las garantías de protección de los datos personales y se apela a la cooperación po…» forma parte de la respuesta conjunta registrada, pero la ficha no aporta detalle suficiente para validarla aisladamente."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Las Instituciones de la Unión Europea son los organismos políticos e instituciones en los que los Estados miembros delegan parte de sus poderes y soberanía». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «A través de las instituciones de la Unión Europea se incrementa el poder de los órganos nacionales de cada país»; se descarta únicamente frente a la solución registrada, «Las Instituciones de la Unión Europea son los organismos políticos e instituciones en los que los Estados miembros delegan parte de sus poderes y soberanía».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «Ninguna es correcta»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "El panorama teórico describe las instituciones de la Unión, pero no formula la comparación con la estructura de un Estado que plantean las opciones. Se mantiene la respuesta conjunta del test con esa limitación expresa.",
      "descartes": {
        "a": "«La Unión Europea dispone de un Parlamento, un Ejecutivo y un Poder Judicial independiente» forma parte de la respuesta conjunta registrada, pero la ficha no aporta detalle suficiente para validarla aisladamente.",
        "b": "El bloque consultado tampoco aporta un dato con el que sostener «La Unión Europea tiene instituciones que respaldan al resto de instituciones que tiene igual que cualquier Estado»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-03-union-europea",
  references: {
  "1": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "2": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "3": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "4": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "5": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "6": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "7": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "8": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "9": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "10": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "11": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "12": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "13": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "14": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "15": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "16": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "17": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "18": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "19": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "20": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "21": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "22": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  }
},
});
