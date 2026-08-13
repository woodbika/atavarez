import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-espacio-europeo-iii",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Es correcto señalar», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Ambas respuestas son correctas».",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «El Consejo de la Unión Europea al igual que el Parlamento fue creado por los tratados constitutivos en los años 50» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«Junto al Parlamento Europeo, ejerce el poder legislativo» forma parte de la respuesta conjunta registrada, pero la ficha no aporta detalle suficiente para validarla aisladamente."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «A sus reuniones asiste un ministro de cada uno de los gobiernos nacionales de la UE» en «El Consejo de la Unión Europea». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Detenta importantes potestades ejecutivas cuyo ejercicio delega automáticamente al Parlamento»; se descarta únicamente frente a la solución registrada, «A sus reuniones asiste un ministro de cada uno de los gobiernos nacionales de la UE».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «Los ministros que acuden son siempre los mismos independientemente del orden del día»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "Ejecución de la PESC a partir de las directrices del Consejo Europeo Las relaciones diplomáticas exteriores, incluidas las cuestiones de defensa y seguridad.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el apartado «El consejo de la UE: institución de decisión y co-legislador» exige «Generales», no «Internos».",
        "c": "«Ninguna es correcta» no procede, porque el apartado «El consejo de la UE: institución de decisión y co-legislador» respalda «Consejo de Asuntos Generales y Relaciones Exteriores»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «En total hay», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «9 configuraciones distintas del Consejo».",
      "descartes": {
        "a": "El bloque consultado tampoco aporta un dato con el que sostener «7 configuraciones distintas del Consejo».",
        "b": "La teoría disponible no permite comparar «8 configuraciones distintas del Consejo» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "El apartado «El consejo de la UE: institución de decisión y co-legislador» recoge tanto «Puede comprometer a su gobierno, es decir que su firma es la firma de todo el gobierno» como «Es responsable ante su parlamento nacional y sus ciudadanos». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Puede comprometer a su gobierno, es decir que su firma es la firma de todo el gobierno» es correcta, pero incompleta: también debe incluirse «Es responsable ante su parlamento nacional y sus ciudadanos».",
        "b": "«Es responsable ante su parlamento nacional y sus ciudadanos» es correcta, pero incompleta: también debe incluirse «Puede comprometer a su gobierno, es decir que su firma es la firma de todo el gobierno»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Hasta cuatro veces al año». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "a": "No puede descartarse «Hasta cinco veces al año» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test.",
        "c": "«Hasta tres veces al año» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «En estas “Cumbres”», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Ambas respuestas son correctas».",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «Se establece la política global de la UE y se analizan las grandes cuestiones europeas» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«Se da a la Unión los impulsos necesarios y se definen sus prioridades y se orientan las políticas generales» forma parte de la respuesta conjunta registrada, pero la ficha no aporta detalle suficiente para validarla aisladamente."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El contenido del apartado «Consejo Europeo» no basta para comprobar «Carece de cualquier potestad (legislativa, ejecutiva o judicial)» en «El Consejo Europeo». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Carece de potestad legislativa»; se descarta únicamente frente a la solución registrada, «Carece de cualquier potestad (legislativa, ejecutiva o judicial)».",
        "b": "«Carece de potestad ejecutiva» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Elaborar las leyes europeas». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "b": "El bloque consultado tampoco aporta un dato con el que sostener «Coordinar las políticas generales de los Estados miembros».",
        "c": "La teoría disponible no permite comparar «Concluir acuerdos internacionales entre la UE y otros países u organizaciones internacionales» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «El Consejo no tiene como función», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Desarrollar la Política Exterior y de Seguridad de cada Estado miembro».",
      "descartes": {
        "a": "No puede descartarse «Aprobar el Presupuesto de la UE, junto con el Parlamento» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test.",
        "c": "«Coordinar la cooperación entre los tribunales nacionales y la policía en materia penal» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Tiene su sede en Bruselas» en «Coreper». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «Tiene su sede en Luxemburgo» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«Tiene su sede en Estrasburgo» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» sirve para encuadrar la cuestión, pero no confirma por separado las afirmaciones combinadas. Se conserva la respuesta conjunta registrada en el test. En esta cuestión, la formulación relevante es «Ambas respuestas son correctas».",
      "descartes": {
        "a": "«Cada Estado miembro de la UE tiene un equipo permanente que le representa y defiende su interés nacional en el seno de la Unión» integra la respuesta conjunta registrada, pero la ficha no contiene detalle suficiente para validarla por separado.",
        "b": "La clave conjunta incluye «En la práctica, el jefe de cada representación es el Embajador de su país ante la UE»; el marco teórico disponible no permite comprobar esta afirmación de forma aislada."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «La presidencia del Consejo», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Es rotatoria».",
      "descartes": {
        "b": "El bloque consultado tampoco aporta un dato con el que sostener «Tiene una duración de 1 año en la que cada país de la UE se hace cargo de la agenda del Consejo».",
        "c": "La teoría disponible no permite comparar «Ambas respuestas son correctas» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El apartado «El consejo de la UE: institución de decisión y co-legislador» recoge «Media para lograr acuerdos entre los Estados miembros» como formulación aplicable a este supuesto.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el apartado «El consejo de la UE: institución de decisión y co-legislador» exige «Media para lograr acuerdos entre los Estados miembros», no «Preside todas las reuniones adoptando decisiones legislativas y políticas».",
        "c": "No son válidas las dos afirmaciones: «Media para lograr acuerdos entre los Estados miembros» se ajusta a la teoría, mientras que «Preside todas las reuniones adoptando decisiones legislativas y políticas» no."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El apartado «El consejo de la UE: institución de decisión y co-legislador» recoge tanto «La Presidencia cuenta con la asistencia de la Secretaría General» como «Prepara y garantiza el buen funcionamiento de la institución en todos los niveles». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«La Presidencia cuenta con la asistencia de la Secretaría General» es cierta, pero no basta por sí sola: «Prepara y garantiza el buen funcionamiento de la institución en todos los niveles» también está prevista.",
        "b": "Elegir solo «Prepara y garantiza el buen funcionamiento de la institución en todos los niveles» dejaría incompleta la respuesta, porque también se cumple «La Presidencia cuenta con la asistencia de la Secretaría General»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «La Comisión Europea», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Es independiente de los gobiernos nacionales».",
      "descartes": {
        "b": "La ficha no contiene información que permita confirmar «Su función es representar y defender los intereses de cada Estado miembro» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«Ambas respuestas son correctas» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "La solución registrada por el test es «Está formado por un Presidente y sus Ministros (los Comisarios)». Se conserva sin cambios, aunque la teoría introduce el matiz indicado en la nota.",
      "descartes": {
        "a": "La teoría no atribuye a la Comisión el poder legislativo: le reconoce la iniciativa para proponer legislación.",
        "c": "Esta opción sí coincide en buena medida con las funciones que la teoría atribuye a la Comisión."
      },
      "notaRevision": {
        "tipo": "discrepancia-teorica",
        "titulo": "La solución del test no coincide plenamente con la teoría",
        "texto": "La teoría describe a la Comisión como un colegio formado por una Presidencia y comisarios, no por ministros. Además, le atribuye la iniciativa legislativa, la vigilancia del cumplimiento de los Tratados y la adopción de iniciativas para el desarrollo de la Unión. Por ello, el contenido teórico se aproxima más a la opción C, aunque aquí se mantiene la opción B registrada en el test."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» sirve para encuadrar la cuestión, pero no confirma por separado las afirmaciones combinadas. Se conserva la respuesta conjunta registrada en el test. La cifra o condición que debe aplicarse es «Ambas respuestas son correctas».",
      "descartes": {
        "a": "«El Parlamento y el Consejo» integra la respuesta conjunta registrada, pero la ficha no contiene detalle suficiente para validarla por separado.",
        "b": "La clave conjunta incluye «La Comisión Europea»; el marco teórico disponible no permite comprobar esta afirmación de forma aislada."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "De este modo, asiste a todas las sesiones parlamentarias para justificar y explicar sus iniciativas y actuaciones, respondiendo a las preguntas orales y escritas que les hagan los eurodiputados.",
      "descartes": {
        "a": "«Asiste a todas las sesiones del Consejo Europeo para aclarar y justificar sus políticas» regula una posibilidad diferente; en este caso, el apartado «La comisión europea: institución que representa el interés común» establece «Contesta regularmente a las preguntas escritas y orales planteadas por los diputados».",
        "c": "La respuesta conjunta también daría por válida «Asiste a todas las sesiones del Consejo Europeo para aclarar y justificar sus políticas», pero el apartado «La comisión europea: institución que representa el interés común» solo respalda «Contesta regularmente a las preguntas escritas y orales planteadas por los diputados»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El contenido del apartado «La comisión europea: institución que representa el interés común» no basta para comprobar «Aprobar legislación europea junto con el Parlamento y el Consejo» en «La Comisión no tiene como función». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «Hacer cumplir la legislación europea»; se descarta únicamente frente a la solución registrada, «Aprobar legislación europea junto con el Parlamento y el Consejo».",
        "c": "«Ambas son funciones de la Comisión» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "El apartado «La comisión europea: institución que representa el interés común» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Aprobar el presupuesto de la UE y gestionar y aplicar las políticas de la UE». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «Representar a la UE en los foros internacionales»; se descarta únicamente frente a la solución registrada, «Aprobar el presupuesto de la UE y gestionar y aplicar las políticas de la UE».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «Ambas son funciones de la Comisión»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Es correcto señalar», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «La Comisión tiene representaciones en todos los países de la UE y delegaciones en muchas capitales del mundo».",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «La sede de la Comisión está en Luxemburgo»; se descarta únicamente frente a la solución registrada, «La Comisión tiene representaciones en todos los países de la UE y delegaciones en muchas capitales del mundo».",
        "b": "El bloque consultado tampoco aporta un dato con el que sostener «La Comisión tiene oficinas en Bruselas»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Su misión es velar por el cumplimiento de la legislación de la UE» en «El Tribunal de Justicia». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El bloque consultado tampoco aporta un dato con el que sostener «Fue creado en 1952 por el Tratado CECA y su sede en Estrasburgo».",
        "c": "No puede descartarse «El Tribunal está integrado por dos jueces de cada Estado para representar todos los ordenamientos jurídicos nacionales de la UE» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El apartado «El tribunal de justicia de la UE: el control de legalidad» recoge tanto «Garantiza que los Estados miembros y las instituciones de la UE cumplan la ley» como «Tiene poder para resolver conflictos legales entre Estados, instituciones de la UE, empresas y particulares». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Garantiza que los Estados miembros y las instituciones de la UE cumplan la ley» es correcta, pero incompleta: también debe incluirse «Tiene poder para resolver conflictos legales entre Estados, instituciones de la UE, empresas y particulares».",
        "b": "«Tiene poder para resolver conflictos legales entre Estados, instituciones de la UE, empresas y particulares» es correcta, pero incompleta: también debe incluirse «Garantiza que los Estados miembros y las instituciones de la UE cumplan la ley»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «El Tribunal de Cuentas Europeo», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Creado en 1975, sede en Luxemburgo, se encarga de comprobar que el presupuesto de la UE se ejecute correctamente».",
      "descartes": {
        "b": "La ficha no contiene información que permita confirmar «Está compuesto por un miembro de cada país, designado por la Comisión por un periodo renovable de 5 años. Ellos a su vez eligen a un presidente para tres años» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«Una de sus funciones es asistir al Parlamento y a la Comisión presentándoles cada dos años informes sobre los ejercicios presupuestarios anteriores» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
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
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "4": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "5": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
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
    "etiqueta": "Consejo Europeo",
    "bloqueId": "el-consejo-europeo-institucion-de-impulso-y-direccion-politica"
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
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "15": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "16": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "17": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Comisión Europea",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "18": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "19": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "20": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "21": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "22": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "23": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "24": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El tribunal de justicia de la UE: el control de legalidad",
    "bloqueId": "el-tribunal-de-justicia-de-la-ue-el-control-de-legalidad"
  },
  "25": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  }
},
});
