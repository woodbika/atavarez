import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-espacio-europeo-ii",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Los Tratados son negociados por», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «El Consejo Europeo».",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «Los Presidentes y/o Primeros Ministros de todos los países de la Unión Europea»; se descarta únicamente frente a la solución registrada, «El Consejo Europeo».",
        "c": "«Los Parlamentos de cada Estado» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Los Parlamentos de cada Estado» en «Los Tratados son ratificados al final por». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «El Consejo Europeo»; se descarta únicamente frente a la solución registrada, «Los Parlamentos de cada Estado».",
        "b": "«Los Presidentes y/o Primeros Ministros de todos los países de la Unión Europea» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Los Presidentes y/o Primeros Ministros de todos los países de la Unión Europea». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «El Consejo Europeo»; se descarta únicamente frente a la solución registrada, «Los Presidentes y/o Primeros Ministros de todos los países de la Unión Europea».",
        "c": "La teoría disponible no permite comparar «Los Parlamentos de cada Estado» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Hoy en día la estructura institucional de la Unión Europea es», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Ambas respuestas son correctas».",
      "descartes": {
        "a": "El bloque consultado tampoco aporta un dato con el que sostener «El Tratado constitutivo de la Comunidad Europea (TCE)».",
        "b": "La teoría disponible no permite comparar «El Tratado de la Unión Europea (TUE)» con la solución registrada de esta pregunta."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "TRATADO DE ROMA Tratado constitutivo de la Comunidad Económica Europea El 25 de marzo de 1957 se firmaron dos tratados.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el apartado «Tratados de la UE» exige «constitutivo de la Comunidad Europea (TCE)», no «de la Unión Europea (TUE)».",
        "c": "No son válidas las dos afirmaciones: «El Tratado constitutivo de la Comunidad Europea (TCE)» se ajusta a la teoría, mientras que «El Tratado de la Unión Europea (TUE)» no."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "TRATADO DE NIZA El objetivo del Tratado de Niza era reformar la estructura institucional de la Unión Europea para hacer frente a los retos que planteaba la nueva ampliación.",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el apartado «Tratados de la UE» exige «de la Unión Europea (TUE)», no «constitutivo de la Comunidad Europea (TCE)».",
        "c": "No son válidas las dos afirmaciones: «El Tratado de la Unión Europea (TUE)» se ajusta a la teoría, mientras que «El Tratado constitutivo de la Comunidad Europea (TCE)» no."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «En 2004 se firmo el “Tratado Constitucional” que fracaso al decir que NO en el refrendo», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Francia y Países Bajos».",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «España y Francia» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«Ninguna es correcta» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Ambas respuestas son correctas» en «En 2007 se firmó el Tratado de Lisboa que modifica». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "«El Tratado constitutivo de la Comunidad Europea (TCE)» integra la respuesta conjunta registrada, pero la ficha no contiene detalle suficiente para validarla por separado.",
        "b": "La clave conjunta incluye «El Tratado de la Unión Europea (TUE)»; el marco teórico disponible no permite comprobar esta afirmación de forma aislada."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "TRATADO DE LA UE/TRATADO DE MAASTRICHT Conforme a dicho Tratado, la Unión se fundamenta en las Comunidades Europeas (primer pilar), con dos ámbitos de cooperación adicionales (segundo y tercer pilar). El elemento que completa la regla es «El Tercer Pilar».",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el apartado «Tratados de la UE» exige «Tercer», no «Primer».",
        "b": "«Segundo» altera el término que delimita la respuesta; la formulación del apartado «Tratados de la UE» es «Tercer»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La Política Exterior y de Seguridad Común (PESC) y el ámbito de Justicia y Asuntos de Interior (JAI).",
      "descartes": {
        "a": "La alternativa modifica el término que delimita la respuesta: el apartado «Tratados de la UE» exige «Segundo», no «Primer».",
        "c": "«Tercer» altera el término que delimita la respuesta; la formulación del apartado «Tratados de la UE» es «Segundo»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "TRATADO DE LA UE/TRATADO DE MAASTRICHT Conforme a dicho Tratado, la Unión se fundamenta en las Comunidades Europeas (primer pilar), con dos ámbitos de cooperación adicionales (segundo y tercer pilar). La categoría que completa la definición es «El Primer Pilar».",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el apartado «Tratados de la UE» exige «Primer», no «Segundo».",
        "c": "«Tercer» altera el término que delimita la respuesta; la formulación del apartado «Tratados de la UE» es «Primer»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» sitúa el marco institucional, pero no concreta esta atribución. Se mantiene «El Primer Pilar» como clave del test con ese límite.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «El Segundo Pilar»; se descarta únicamente frente a la solución registrada, «El Primer Pilar».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «El Tercer Pilar»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Las elecciones al Parlamento Europeo se celebran cada cinco años desde 1979, según la ficha teórica.",
      "descartes": {
        "a": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» fija «cinco»; «cuatro» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» fija «cinco»; «seis» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "Desde 1979 el Parlamento está compuesto por representantes de los ciudadanos elegidos por sufragio universal directo.",
      "descartes": {
        "b": "La redacción del apartado «Parlamento europeo: la representación de los ciudadanos europeos» mantiene «Los ciudadanos»; sustituirlo por «El Consejo de la Unión Europea» cambia el sentido.",
        "c": "«La Comisión Europea» altera el órgano o sujeto competente; la formulación del apartado «Parlamento europeo: la representación de los ciudadanos europeos» es «Los ciudadanos»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El esquema y el diálogo institucional de la UE se aproxima más a la estructura tripartita de poderes de un Estado de Derecho (legislativo, ejecutivo y judicial) que la propia de una organización internacional clásica.",
      "descartes": {
        "b": "La alternativa modifica el término que delimita la respuesta: el apartado «Breve panorama de las instituciones» exige «Legislativo», no «Ejecutivo».",
        "c": "«Judicial» sustituye el elemento previsto por la norma, que en el apartado «Breve panorama de las instituciones» es «Legislativo»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El Consejo y el Parlamento Europeo aprueban conjuntamente el presupuesto anual de la Unión a partir de la propuesta de ingresos y gastos presentada por la Comisión.",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el apartado «El consejo de la UE: institución de decisión y co-legislador» exige «Consejo», no «Tribunal Europeo».",
        "c": "«La Comisión» altera el órgano o sujeto competente; la formulación del apartado «El consejo de la UE: institución de decisión y co-legislador» es «El Consejo»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «París (Francia)» en «El Parlamento Europeo no tiene como lugar de trabajo». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «Bruselas (Bélgica)» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«Luxemburgo» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» recoge «El Parlamento aprueba la legislación europea conjuntamente con el Consejo» como formulación aplicable a este supuesto.",
      "descartes": {
        "a": "«El Parlamento aprueba la legislación europea unilateralmente» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Es correcto señalar».",
        "c": "«Caben ambas posibilidades» sustituye el elemento previsto por la norma, que en el apartado «Parlamento europeo: la representación de los ciudadanos europeos» es «El Parlamento aprueba la legislación europea conjuntamente con el Consejo»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La codecisión se amplía a nuevos ámbitos y pasa a denominarse «procedimiento legislativo ordinario».",
      "descartes": {
        "a": "La alternativa modifica el órgano o sujeto competente: el apartado «Tratados de la UE» exige «codecisión», no «aprobación unilateral por el Parlamento».",
        "b": "«aprobación unilateral por el Consejo» altera el órgano o sujeto competente; la formulación del apartado «Tratados de la UE» es «codecisión»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "Aprueba con el Consejo de la UE Además del procedimiento legislativo ordinario, otro sistema de diálogo entre el Consejo y el Parlamento es el que se denomina “procedimiento legislativo especial”, debido a que ambas instituciones no actúan en paridad, ni adoptan el acto jurídico final conjuntamente.",
      "descartes": {
        "b": "«Pone al Parlamento y a la Comisión en un plano de igualdad en determinados ámbitos» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «El procedimiento de la codecisión».",
        "c": "«Ninguna es correcta» no procede, porque el apartado «Parlamento europeo: la representación de los ciudadanos europeos» respalda «Pone al Parlamento y al Consejo en un plano de igualdad en determinados ámbitos»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Los candidatos a la Comisión comparecen ante comisiones parlamentarias y el conjunto de designados se somete al voto de aprobación del Parlamento Europeo.",
      "descartes": {
        "a": "La diferencia relevante está en «Elige a»: el apartado «Parlamento europeo: la representación de los ciudadanos europeos» emplea «Aprueba o rechaza el nombramiento de» y ese matiz cambia el alcance de la regla.",
        "c": "«Censura a» sustituye el elemento previsto por la norma, que en el apartado «Parlamento europeo: la representación de los ciudadanos europeos» es «Aprueba o rechaza el nombramiento de»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "El Parlamento Europeo puede aprobar una moción de censura contra la Comisión. Si prospera con la mayoría exigida, toda la Comisión debe dimitir; por eso encaja «Censura a la Comisión Europea en su conjunto».",
      "descartes": {
        "a": "La censura no provoca el cese aislado de algunos comisarios: la consecuencia prevista es la dimisión colectiva de la Comisión.",
        "b": "El control parlamentario descrito recae sobre la Comisión, no sobre el Consejo Europeo."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «La Comisión remite informes al Parlamento como forma de control» en «Es correcto señalar». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "El bloque consultado tampoco aporta un dato con el que sostener «El Parlamento remite informes a la Comisión como forma de control».",
        "c": "No puede descartarse «El Consejo remite informes al Parlamento como forma de control» mediante una regla de la ficha; su exclusión depende de la clave que conserva el test."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» recoge tanto «Supervisa el trabajo del Consejo» como «Examina las peticiones de los ciudadanos creando comisiones de investigación». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Supervisa el trabajo del Consejo» es cierta, pero no basta por sí sola: «Examina las peticiones de los ciudadanos creando comisiones de investigación» también está prevista.",
        "b": "Elegir solo «Examina las peticiones de los ciudadanos creando comisiones de investigación» dejaría incompleta la respuesta, porque también se cumple «Supervisa el trabajo del Consejo»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «El Parlamento Europeo», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Es autoridad presupuestaria de la UE».",
      "descartes": {
        "b": "La ficha no contiene información que permita confirmar «El presupuesto anual de la Unión es decidido conjuntamente entre el Parlamento y la Comisión» en este punto; no puede justificarse desde la teoría disponible.",
        "c": "«Ambas respuestas son correctas» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Al Consejo de la Unión Europea» en «Se conoce comúnmente como Consejo de Ministros». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "a": "La ficha no contiene información que permita confirmar «Al Parlamento Europeo» en este punto; no puede justificarse desde la teoría disponible.",
        "b": "«A la Comisión Europea» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Representa los intereses de los Estados miembros». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Representa los intereses de la Unión Europea»; se descarta únicamente frente a la solución registrada, «Representa los intereses de los Estados miembros».",
        "c": "El bloque consultado tampoco aporta un dato con el que sostener «Ambas respuestas son correctas»."
      }
    },
    {
      "preguntaId": 28,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» trata la materia de «Es la principal instancia decisoria de la UE», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «El Consejo de la Unión Europea».",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «El Parlamento Europeo»; se descarta únicamente frente a la solución registrada, «El Consejo de la Unión Europea».",
        "c": "La teoría disponible no permite comparar «La Comisión Europea» con la solución registrada de esta pregunta."
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
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "6": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
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
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "10": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "11": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "12": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "13": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "14": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "15": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Breve panorama de las instituciones",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "16": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "17": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "18": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "19": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "20": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "21": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "22": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
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
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "25": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "26": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "27": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "28": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  }
},
});
