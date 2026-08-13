import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-instituciones-union-europea-i",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "El apartado «El consejo de la UE: institución de decisión y co-legislador» recoge «Consejo de la Unión Europea» como formulación aplicable a este supuesto.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Representa los intereses de cada Estado».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Representa los intereses de cada Estado»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "Desde 1979 el Parlamento está compuesto por representantes de los ciudadanos elegidos por sufragio universal directo. En este caso debe aplicarse «Parlamento Europeo».",
      "descartes": {
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Representa a los ciudadanos de la UE».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Representa a los ciudadanos de la UE»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El apartado «La comisión europea: institución que representa el interés común» recoge «Comisión de la UE» como formulación aplicable a este supuesto. La formulación que conserva ese alcance es «Comisión de la UE».",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Representa los intereses de la UE».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Representa los intereses de la UE»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "Como institución ejecutiva y gestora de los asuntos europeos, la Comisión es responsable políticamente ante el Parlamento.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Es el poder ejecutivo de la UE».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Es el poder ejecutivo de la UE»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Desde 1979 el Parlamento está compuesto por representantes de los ciudadanos elegidos por sufragio universal directo. El elemento que completa la regla es «Parlamento Europeo».",
      "descartes": {
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Es elegido por los ciudadanos».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Es elegido por los ciudadanos»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» atribuye la actuación descrita a «Parlamento Europeo».",
      "descartes": {
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Ejerce el control democrático».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Ejerce el control democrático»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "Los Estados miembros coordinan sus políticas económicas nacionales a través del Consejo, en particular mediante el Ecofin.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Coordina las políticas económicas de los países de la UE».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Coordina las políticas económicas de los países de la UE»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "La Comisión posee la iniciativa legislativa y formula propuestas de normas al Consejo y al Parlamento Europeo.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Propone nueva legislación».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Propone nueva legislación»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "La ficha explica la participación del Parlamento en la aprobación de determinados acuerdos, pero no desarrolla de forma suficiente el procedimiento de entrada de nuevos países. Se conserva «Parlamento Europeo» como solución registrada sin atribuirle una prueba directa.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «Consejo de la Unión Europea»; se descarta únicamente frente a la solución registrada, «Parlamento Europeo».",
        "c": "«Comisión de la UE» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La Comisión aplica las políticas de la Unión y lleva a la práctica las decisiones y la legislación aprobadas por el Consejo y el Parlamento.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Hace cumplir la legislación de la UE».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Hace cumplir la legislación de la UE»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "Anualmente, el Parlamento analiza si aprueba o no la gestión financiera de la Comisión.",
      "descartes": {
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Examina la gestión del presupuesto y en su caso la aprueba».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Examina la gestión del presupuesto y en su caso la aprueba»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El Consejo concluye los acuerdos internacionales y el ministro del Estado que ejerce la Presidencia los firma en nombre de la Unión.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Firma los acuerdos internacionales».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Firma los acuerdos internacionales»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El control parlamentario incluye las preguntas que los eurodiputados pueden dirigir a los miembros de la Comisión.",
      "descartes": {
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Realiza preguntas a los comisarios».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Realiza preguntas a los comisarios»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El Consejo ejecuta las orientaciones de política exterior, defensa y seguridad mediante su formación de ministros competentes.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Es el responsable de la política exterior y de defensa».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Es el responsable de la política exterior y de defensa»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El apartado «La comisión europea: institución que representa el interés común» recoge «Comisión de la UE» como formulación aplicable a este supuesto. En este caso debe aplicarse «Comisión de la UE».",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Representa a la UE en la escena internacional».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Representa a la UE en la escena internacional»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "Con el previo mandato del Consejo, la Comisión es la que negocia los acuerdos internacionales con la delegación o delegaciones de los países terceros.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Negocia los acuerdos internacionales».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Negocia los acuerdos internacionales»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "La Comisión gestiona y ejecuta el presupuesto de la Unión mediante su estructura administrativa y técnica.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Gestiona el presupuesto».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Gestiona el presupuesto»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La Comisión gestiona el dinero europeo y supervisa la ejecución de los fondos, pero la ficha no contiene una atribución formulada como «asigna fondos». Se conserva esa solución con alcance contextual.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Parlamento Europeo»; se descarta únicamente frente a la solución registrada, «Comisión de la UE».",
        "b": "«Consejo de la Unión Europea» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La Comisión presenta al Consejo y al Parlamento la propuesta de ingresos y gastos del presupuesto anual de la Unión.",
      "descartes": {
        "a": "«Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Propone el presupuesto».",
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Propone el presupuesto»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "La teoría distingue las sesiones plenarias del Parlamento Europeo y el trabajo de sus comisiones parlamentarias. Por tanto, la institución que funciona en Pleno y comisiones es el «Parlamento Europeo».",
      "descartes": {
        "b": "«Consejo de la Unión Europea» representa a los gobiernos de los Estados miembros y comparte la función legislativa; por ello no se le atribuye «Funciona en Pleno y comisiones».",
        "c": "«Comisión de la UE» promueve el interés general, propone normas y ejerce funciones ejecutivas; por ello no se le atribuye «Funciona en Pleno y comisiones»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-03-union-europea",
  references: {
  "1": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "2": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "3": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "4": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "5": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "6": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "7": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "8": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "9": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "10": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "11": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "12": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
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
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "15": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "16": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "17": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "18": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "19": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "20": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  }
},
});
