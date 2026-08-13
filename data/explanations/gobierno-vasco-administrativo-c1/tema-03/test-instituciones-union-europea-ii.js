import { defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-instituciones-union-europea-ii",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Las elecciones al Parlamento Europeo tienen lugar cada cinco años; ese es también el período de renovación de la institución.",
      "descartes": {
        "a": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» fija «cinco»; «cuatro» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» fija «cinco»; «seis» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "Desde 1979 el Parlamento está compuesto por representantes de los ciudadanos elegidos por sufragio universal directo.",
      "descartes": {
        "b": "La diferencia relevante está en «El Consejo de la Unión Europea»: el apartado «Parlamento europeo: la representación de los ciudadanos europeos» emplea «Los ciudadanos» y ese matiz cambia el alcance de la regla.",
        "c": "«La Comisión Europea» sustituye el elemento previsto por la norma, que en el apartado «Parlamento europeo: la representación de los ciudadanos europeos» es «Los ciudadanos»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El esquema y el diálogo institucional de la UE se aproxima más a la estructura tripartita de poderes de un Estado de Derecho (legislativo, ejecutivo y judicial) que la propia de una organización internacional clásica.",
      "descartes": {
        "b": "La diferencia relevante está en «Ejecutivo»: el apartado «Breve panorama de las instituciones» emplea «Legislativo» y ese matiz cambia el alcance de la regla.",
        "c": "El poder judicial corresponde al Tribunal de Justicia de la Unión Europea, no al Parlamento."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El Consejo y el Parlamento Europeo aprueban conjuntamente el presupuesto anual de la Unión a partir de la propuesta de ingresos y gastos presentada por la Comisión.",
      "descartes": {
        "a": "El Tribunal de Justicia ejerce el control judicial de la Unión; no comparte con el Parlamento la aprobación presupuestaria.",
        "c": "La Comisión presenta la propuesta de ingresos y gastos, pero la aprobación corresponde conjuntamente al Parlamento y al Consejo."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "La solución registrada por el test es «Bruselas (Bélgica)». Se conserva sin cambios, aunque la teoría sitúa allí parte de la actividad parlamentaria.",
      "descartes": {
        "b": "La diferencia relevante está en «Luxemburgo»: el apartado «Parlamento europeo: la representación de los ciudadanos europeos» emplea «Bruselas (Bélgica)» y ese matiz cambia el alcance de la regla.",
        "c": "«París (Francia)» sustituye el elemento previsto por la norma, que en el apartado «Parlamento europeo: la representación de los ciudadanos europeos» es «Bruselas (Bélgica)»."
      },
      "notaRevision": {
        "tipo": "discrepancia-teorica",
        "titulo": "La solución del test contradice la teoría",
        "texto": "La teoría sitúa la actividad del Parlamento Europeo en Bruselas, Estrasburgo y Luxemburgo. París no figura entre sus lugares de trabajo. Por tanto, el contenido teórico apunta a la opción C, aunque aquí se mantiene la opción A registrada en el test."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» recoge «El Parlamento aprueba la legislación europea conjuntamente con el Consejo» como formulación aplicable a este supuesto.",
      "descartes": {
        "a": "«El Parlamento aprueba la legislación europea unilateralmente» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Es correcto señalar».",
        "c": "«Caben ambas posibilidades» sustituye el elemento previsto por la norma, que en el apartado «Parlamento europeo: la representación de los ciudadanos europeos» es «El Parlamento aprueba la legislación europea conjuntamente con el Consejo»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "La codecisión se amplía a nuevos ámbitos y pasa a denominarse «procedimiento legislativo ordinario».",
      "descartes": {
        "a": "La diferencia relevante está en «aprobación unilateral por el Parlamento»: el apartado «Tratados de la UE» emplea «codecisión» y ese matiz cambia el alcance de la regla.",
        "b": "«aprobación unilateral por el Consejo» sustituye el elemento previsto por la norma, que en el apartado «Tratados de la UE» es «codecisión»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "Aprueba con el Consejo de la UE Además del procedimiento legislativo ordinario, otro sistema de diálogo entre el Consejo y el Parlamento es el que se denomina “procedimiento legislativo especial”, debido a que ambas instituciones no actúan en paridad, ni adoptan el acto jurídico final conjuntamente.",
      "descartes": {
        "b": "«Pone al Parlamento y a la Comisión en un plano de igualdad en determinados ámbitos» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «El procedimiento de la codecisión».",
        "c": "El apartado «Parlamento europeo: la representación de los ciudadanos europeos» sí regula la cuestión y ofrece una respuesta concreta: «Pone al Parlamento y al Consejo en un plano de igualdad en determinados ámbitos»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "El Parlamento Europeo puede aprobar una moción de censura contra la Comisión. Si prospera con la mayoría exigida, toda la Comisión debe dimitir; por eso encaja «Censura a la Comisión Europea en su conjunto».",
      "descartes": {
        "a": "La diferencia relevante está en «los Comisarios»: el apartado «Parlamento europeo: la representación de los ciudadanos europeos» emplea «la Comisión Europea en su conjunto» y ese matiz cambia el alcance de la regla.",
        "b": "«Censura al Consejo Europeo en su conjunto» reúne a los jefes de Estado o de Gobierno y fija la orientación política general; «Censura a la Comisión Europea en su conjunto», en cambio, promueve el interés general, propone normas y ejerce funciones ejecutivas."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La Comisión debe presentar informes al Parlamento, uno de los mecanismos mediante los que rinde cuentas y queda sometida a control político.",
      "descartes": {
        "a": "Invierte la relación de control: es la Comisión la que presenta informes al Parlamento y rinde cuentas ante él.",
        "c": "El deber de remitir estos informes recae en la Comisión, no en el Consejo."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "La solución registrada por el test es «Examina las peticiones de los ciudadanos creando comisiones de investigación». Se conserva sin cambios, con el matiz recogido en la nota.",
      "descartes": {
        "a": "La diferencia relevante está en «Supervisa el trabajo del Consejo»: el apartado «Parlamento europeo: la representación de los ciudadanos europeos» emplea «Examina las peticiones de los ciudadanos creando comisiones de investigación» y ese matiz cambia el alcance de la regla.",
        "c": "La respuesta conjunta también daría por válida «Supervisa el trabajo del Consejo», pero el apartado «Parlamento europeo: la representación de los ciudadanos europeos» solo respalda «Examina las peticiones de los ciudadanos creando comisiones de investigación»."
      },
      "notaRevision": {
        "tipo": "discrepancia-teorica",
        "titulo": "La solución del test no coincide plenamente con la teoría",
        "texto": "La teoría distingue tres mecanismos: el control del Consejo mediante preguntas e información, el examen de peticiones a través de la comisión de peticiones y las comisiones temporales de investigación para estudiar infracciones o casos de mala administración. La opción B mezcla los dos últimos mecanismos. Se mantiene, no obstante, como solución registrada por el test."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El apartado «Panorama histórico e institucional de la Unión Europea» aporta contexto sobre la materia, aunque no contiene el dato preciso que confirma «Al Consejo de la Unión Europea». La clave del test se mantiene con esa salvedad.",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Al Parlamento Europeo»; se descarta únicamente frente a la solución registrada, «Al Consejo de la Unión Europea».",
        "b": "«A la Comisión Europea» queda fuera de la clave del test. La ficha encuadra la materia, pero no ofrece una regla independiente con la que verificar esta alternativa."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "El apartado «El consejo de la UE: institución de decisión y co-legislador» recoge «Representa los intereses de los Estados miembros» como formulación aplicable a este supuesto.",
      "descartes": {
        "a": "La diferencia relevante está en «la Unión Europea»: el apartado «El consejo de la UE: institución de decisión y co-legislador» emplea «los Estados miembros» y ese matiz cambia el alcance de la regla.",
        "c": "La respuesta conjunta también daría por válida «Representa los intereses de la Unión Europea», pero el apartado «El consejo de la UE: institución de decisión y co-legislador» solo respalda «Representa los intereses de los Estados miembros»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El Consejo ha sido tradicionalmente la principal institución de decisión y adopción de actos jurídicos de la Unión.",
      "descartes": {
        "a": "«El Parlamento Europeo» representa a la ciudadanía y ejerce funciones legislativas, presupuestarias y de control; por ello no se le atribuye «Es la principal instancia decisoria de la UE».",
        "c": "«La Comisión Europea» promueve el interés general, propone normas y ejerce funciones ejecutivas; esa función institucional es distinta de la que se examina aquí."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El Consejo se compone de un representante de rango ministerial por cada Estado miembro; por ello asiste un ministro de cada gobierno nacional.",
      "descartes": {
        "a": "«Detenta importantes potestades ejecutivas cuyo ejercicio delega automáticamente al Parlamento» regula una posibilidad diferente; en este caso, el apartado «El consejo de la UE: institución de decisión y co-legislador» establece «A sus reuniones asiste un ministro de cada uno de los gobiernos nacionales de la UE».",
        "c": "La alternativa añade o cambia una condición que el apartado «El consejo de la UE: institución de decisión y co-legislador» no contempla. La formulación aplicable es «A sus reuniones asiste un ministro de cada uno de los gobiernos nacionales de la UE»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El apartado «El consejo de la UE: institución de decisión y co-legislador» recoge tanto «Puede comprometer a su gobierno, es decir que su firma es la firma de todo el gobierno» como «Es responsable ante su parlamento nacional y sus ciudadanos». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Puede comprometer a su gobierno, es decir que su firma es la firma de todo el gobierno» es correcta, pero incompleta: también debe incluirse «Es responsable ante su parlamento nacional y sus ciudadanos».",
        "b": "«Es responsable ante su parlamento nacional y sus ciudadanos» es correcta, pero incompleta: también debe incluirse «Puede comprometer a su gobierno, es decir que su firma es la firma de todo el gobierno»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El Consejo Europeo se reúne ordinariamente dos veces por semestre, lo que equivale a hasta cuatro reuniones ordinarias al año.",
      "descartes": {
        "a": "El apartado «Consejo Europeo» fija «cuatro»; «cinco» altera el plazo, la cifra o la mayoría exigida.",
        "c": "El apartado «Consejo Europeo» fija «cuatro»; «tres» altera el plazo, la cifra o la mayoría exigida."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "Las cumbres del Consejo Europeo fijan las grandes líneas de dirección política y proporcionan impulso al proceso de integración. Las dos afirmaciones describen esas funciones.",
      "descartes": {
        "a": "«Se establece la política global de la UE y se analizan las grandes cuestiones europeas» es correcta, pero incompleta: también debe incluirse «Se da a la Unión los impulsos necesarios y se definen sus prioridades y se orientan las políticas generales».",
        "b": "El impulso y la definición de prioridades también son correctos, aunque deben unirse a la orientación general de las grandes cuestiones europeas."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El apartado «Consejo Europeo» trata la materia de «El Consejo Europeo», aunque no desarrolla la regla necesaria para confirmarla. La solución registrada sigue siendo «Carece de cualquier potestad (legislativa, ejecutiva o judicial)».",
      "descartes": {
        "a": "El material teórico no aporta un criterio suficiente para aceptar «Carece de potestad legislativa»; se descarta únicamente frente a la solución registrada, «Carece de cualquier potestad (legislativa, ejecutiva o judicial)».",
        "b": "El bloque consultado tampoco aporta un dato con el que sostener «Carece de potestad ejecutiva»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El Coreper reúne a los representantes permanentes de los Estados y prepara las reuniones y buena parte del trabajo previo del Consejo.",
      "descartes": {
        "a": "Cada Estado dispone efectivamente de una representación permanente, pero esa afirmación se completa con la condición de embajador de su responsable.",
        "b": "El jefe de la representación actúa como embajador ante la Unión; la otra afirmación explica el equipo permanente que encabeza."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "La Comisión representa el interés general de la Unión y actúa con independencia de los gobiernos nacionales.",
      "descartes": {
        "b": "La diferencia relevante está en «Su función es representar y defender los intereses de cada Estado miembro»: el apartado «La comisión europea: institución que representa el interés común» emplea «Es independiente de los gobiernos nacionales» y ese matiz cambia el alcance de la regla.",
        "c": "La respuesta conjunta también daría por válida «Su función es representar y defender los intereses de cada Estado miembro», pero el apartado «La comisión europea: institución que representa el interés común» solo respalda «Es independiente de los gobiernos nacionales»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La solución registrada por el test es «Está formado por un Presidente y sus Ministros (los Comisarios)». Se conserva sin cambios, aunque la teoría introduce el matiz indicado en la nota.",
      "descartes": {
        "a": "La diferencia relevante está en «Es el gobierno europeo ostenta el poder legislativo»: el apartado «La comisión europea: institución que representa el interés común» emplea «Está formado por un Presidente y sus Ministros (los Comisarios)» y ese matiz cambia el alcance de la regla.",
        "c": "La alternativa añade o cambia una condición que el apartado «La comisión europea: institución que representa el interés común» no contempla. La formulación aplicable es «Está formado por un Presidente y sus Ministros (los Comisarios)»."
      },
      "notaRevision": {
        "tipo": "discrepancia-teorica",
        "titulo": "La solución del test no coincide plenamente con la teoría",
        "texto": "La teoría describe a la Comisión como un colegio formado por una Presidencia y comisarios, no por ministros. Además, le atribuye la iniciativa legislativa, la vigilancia del cumplimiento de los Tratados y la adopción de iniciativas para el desarrollo de la Unión. Por ello, el contenido teórico se aproxima más a la opción C, aunque aquí se mantiene la opción B registrada en el test."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "La Comisión propone la legislación, pero su aprobación corresponde al Consejo y al Parlamento. Por eso aprobarla junto con ambas instituciones no es una función de la Comisión.",
      "descartes": {
        "b": "La diferencia relevante está en «Hacer cumplir la legislación europea»: el apartado «La comisión europea: institución que representa el interés común» emplea «Aprobar legislación europea junto con el Parlamento y el Consejo» y ese matiz cambia el alcance de la regla.",
        "c": "La respuesta conjunta también daría por válida «Hacer cumplir la legislación europea», pero el apartado «La comisión europea: institución que representa el interés común» solo respalda «Aprobar legislación europea junto con el Parlamento y el Consejo»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "La opción mezcla dos tareas distintas: la Comisión sí gestiona y aplica políticas, pero no aprueba el presupuesto, que adoptan el Parlamento y el Consejo. Considerada en conjunto, no describe correctamente una función de la Comisión.",
      "descartes": {
        "b": "«Representar a la UE en los foros internacionales» regula una posibilidad diferente; en este caso, el apartado «La comisión europea: institución que representa el interés común» establece «Aprobar el presupuesto de la UE y gestionar y aplicar las políticas de la UE».",
        "c": "La respuesta conjunta también daría por válida «Representar a la UE en los foros internacionales», pero el apartado «La comisión europea: institución que representa el interés común» solo respalda «Aprobar el presupuesto de la UE y gestionar y aplicar las políticas de la UE»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "El apartado «El tribunal de justicia de la UE: el control de legalidad» recoge tanto «Garantiza que los Estados miembros y las instituciones de la UE cumplan la ley» como «Tiene poder para resolver conflictos legales entre Estados, instituciones de la UE, empresas y particulares». Las dos afirmaciones completan la respuesta.",
      "descartes": {
        "a": "«Garantiza que los Estados miembros y las instituciones de la UE cumplan la ley» es correcta, pero incompleta: también debe incluirse «Tiene poder para resolver conflictos legales entre Estados, instituciones de la UE, empresas y particulares».",
        "b": "«Tiene poder para resolver conflictos legales entre Estados, instituciones de la UE, empresas y particulares» es correcta, pero incompleta: también debe incluirse «Garantiza que los Estados miembros y las instituciones de la UE cumplan la ley»."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "El contenido del apartado «Panorama histórico e institucional de la Unión Europea» no basta para comprobar «Creado en 1975, sede en Luxemburgo, se encarga de comprobar que el presupuesto de la UE se ejecute correctamente» en «El Tribunal de Cuentas Europeo». Se respeta la solución almacenada sin atribuirle apoyo directo a esta ficha.",
      "descartes": {
        "b": "El material teórico no aporta un criterio suficiente para aceptar «Está compuesto por un miembro de cada país, designado por la Comisión por un periodo renovable de 5 años. Ellos a su vez eligen a un presidente para tres años»; se descarta únicamente frente a la solución registrada, «Creado en 1975, sede en Luxemburgo, se encarga de comprobar que el presupuesto de la UE se ejecute correctamente».",
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
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
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
    "etiqueta": "Breve panorama de las instituciones",
    "bloqueId": "breve-panorama-de-las-instituciones"
  },
  "4": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
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
    "etiqueta": "Tratados de la UE",
    "bloqueId": "tratados-de-la-ue"
  },
  "8": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "9": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "10": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
  },
  "11": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Parlamento europeo: la representación de los ciudadanos europeos",
    "bloqueId": "parlamento-europeo-la-representacion-de-los-ciudadanos-europeos"
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
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
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
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "17": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Consejo Europeo",
    "bloqueId": "el-consejo-europeo-institucion-de-impulso-y-direccion-politica"
  },
  "18": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "Consejo Europeo",
    "bloqueId": "el-consejo-europeo-institucion-de-impulso-y-direccion-politica"
  },
  "19": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Consejo Europeo",
    "bloqueId": "el-consejo-europeo-institucion-de-impulso-y-direccion-politica"
  },
  "20": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El consejo de la UE: institución de decisión y co-legislador",
    "bloqueId": "el-consejo-de-la-ue-institucion-de-decision-y-co-legislador"
  },
  "21": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "22": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "23": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "24": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "La comisión europea: institución que representa el interés común",
    "bloqueId": "la-comision-europea-institucion-que-representa-el-interes-comun"
  },
  "25": {
    "tipo": "bloque",
    "alcance": "directa",
    "etiqueta": "El tribunal de justicia de la UE: el control de legalidad",
    "bloqueId": "el-tribunal-de-justicia-de-la-ue-el-control-de-legalidad"
  },
  "26": {
    "tipo": "bloque",
    "alcance": "contextual",
    "etiqueta": "Panorama histórico e institucional de la Unión Europea",
    "bloqueId": "breve-panorama-de-las-instituciones"
  }
},
});
