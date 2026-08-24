import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-11-2022-empleo-publico-vasco-articulos-40-a-44",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "La regulación del artículo 40 comprende «Es a unidad básica de estructuración del empleo público» y «Podrá disponer de una o más dotaciones, tantas como su carga de trabajo o la interdependencia de estas lo exija». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Es a unidad básica de estructuración del empleo público», pero resulta incompleta porque también debe incluirse «Podrá disponer de una o más dotaciones, tantas como su carga de trabajo o la interdependencia de estas lo exija».",
        "b": "La alternativa B recoge «Podrá disponer de una o más dotaciones, tantas como su carga de trabajo o la interdependencia de estas lo exija», pero resulta incompleta porque también debe incluirse «Es a unidad básica de estructuración del empleo público»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 40 es cada administración pública establecerá los niveles de responsabilidad en los que; en función de sus necesidades de organización; se estructuran los puestos de trabajo atendiendo a los requisitos de complejidad y coordinación exigidos para su desempeño. En este supuesto se ajusta a «Cada administración pública».",
      "descartes": {
        "b": "En «Los niveles de responsabilidad en los que se estructuran los puestos de trabajo son establecidos por», la alternativa B introduce «La Ley 11/2022 de Empleo Público Vasco» donde la norma dispone «Cada administración pública».",
        "c": "En «Los niveles de responsabilidad en los que se estructuran los puestos de trabajo son establecidos por», la alternativa C introduce «El Estatuto básico del Empleado Público» donde la norma dispone «Cada administración pública»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 40 dispone que cada administración pública establecerá los niveles de responsabilidad en los que. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Atendiendo a los requisitos de», la alternativa B introduce «e idoneidad exigidos para su desempeño, a las funciones asumidas y al grupo o subgrupo» donde la norma dispone «y coordinación exigidos para su desempeño, a las funciones asumidas y al grado o grados».",
        "c": "En «Atendiendo a los requisitos de», la alternativa C introduce «Idoneidad exigida para su desempeño, al grado o grados requeridos y al grupo o subgrupo» donde la norma dispone «Complejidad y coordinación exigidos para su desempeño, a las funciones asumidas y al grado o grados»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "Según el artículo 40, las administraciones públicas vascas adaptarán el puesto de trabajo en condiciones de accesibilidad universal, incorporando las adaptaciones necesarias con el fin de que las personas empleadas públicas con discapacidad puedan desarrollar sus funciones. La opción «La Administración no podrá modificar las funciones y tareas de los puestos de trabajo» no respeta ese criterio y es la que debe descartarse.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 40: en el ejercicio de su capacidad de autoorganización, la Administración podrá crear y suprimir puestos de trabajo.",
        "c": "La alternativa C sí concuerda con el artículo 40: las administraciones públicas vascas adaptarán el puesto de trabajo en condiciones de accesibilidad universal con el fin de que las personas empleadas públicas con discapacidad puedan desarrollar sus funciones."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 41, las administraciones públicas vascas podrán asignar provisionalmente a su personal funciones y tareas distintas a las correspondientes al puesto de trabajo que desempeñen. Por eso encaja «siempre que resulten adecuadas a su clasificación».",
      "descartes": {
        "a": "En «la afirmación correcta», la alternativa A introduce «aunque no» donde la norma dispone «siempre que».",
        "b": "En «la afirmación correcta», la alternativa B introduce «con la consiguiente» donde la norma dispone «y sin»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del artículo 41 es conllevará el consiguiente incremento retributivo por el período en el que se desempeñen. En este supuesto se ajusta a «Conllevará el consiguiente incremento retributivo por el período en el que se desempeñen».",
      "descartes": {
        "b": "En «Si la asignación provisional de funciones y tareas implica que estas son propias de un puesto con mayores…», la alternativa B introduce «incluso cuando vuelvan al puesto de trabajo anterior» donde la norma dispone «por el período en el que se desempeñen».",
        "c": "En «Si la asignación provisional de funciones y tareas implica que estas son propias de un puesto con mayores…», la alternativa C introduce «No conllevará incremento retributivo alguno al empleado público» donde la norma dispone «Conllevará el consiguiente incremento retributivo por el período en el que se desempeñen»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 42 dispone que las administraciones públicas vascas podrán agrupar sus puestos de trabajo en función de los conocimientos o destrezas exigidos para su desempeño, con el objeto de racionalizar la gestión de recursos humanos. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Las administraciones públicas vascas podrán agrupar sus puestos de trabajo en función de», la alternativa B introduce «La capacidad de autoorganización» donde la norma dispone «Los conocimientos o destrezas exigidos para su desempeño».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «La capacidad de autoorganización» no expresa la regla que el artículo 42 aplica a «Las administraciones públicas vascas podrán agrupar sus puestos de trabajo en función de»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 42 recoge tanto «Instrumentos para la ordenación de los procesos de selección de personal y de provisión de puestos de trabajo» como «Instrumentos para la formación y la carrera profesional». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Instrumentos para la ordenación de los procesos de selección de personal y de provisión de puestos de trabajo», pero resulta incompleta porque también debe incluirse «Instrumentos para la formación y la carrera profesional».",
        "b": "La alternativa B recoge «Instrumentos para la formación y la carrera profesional», pero resulta incompleta porque también debe incluirse «Instrumentos para la ordenación de los procesos de selección de personal y de provisión de puestos de trabajo»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 42, en el ámbito de la Administración general e institucional de la Comunidad Autónoma de Euskadi, el instrumento organizativo mediante el que se agrupan los puestos de trabajo se denominará «área funcional». Por eso encaja «Área funcional».",
      "descartes": {
        "a": "En «En el ámbito de la Administración general e institucional de la Comunidad Autónoma de Euskadi», la alternativa A introduce «de responsabilidad» donde la norma dispone «funcional».",
        "c": "En «En el ámbito de la Administración general e institucional de la Comunidad Autónoma de Euskadi», la alternativa C introduce «alternativa de puestos de trabajo» donde la norma dispone «funcional»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 42 es la determinación de las áreas funcionales de la Administración general e institucional de la Comunidad Autónoma de Euskadi se realizará de acuerdo con lo previsto en el artículo 17 de esta ley. En este supuesto se ajusta a «Lo previsto en el artículo 17 de la Ley de Empleo Público Vasco».",
      "descartes": {
        "a": "En «La determinación dichas áreas de la Administración general e institucional de la Comunidad Autónoma de…», la alternativa A introduce «respectivos convenios colectivos» donde la norma dispone «el artículo 17 de la Ley de Empleo Público Vasco».",
        "b": "Para «La determinación dichas áreas de la Administración general e institucional de la Comunidad Autónoma de…», la alternativa B utiliza «69», pero la previsión aplicable fija «17»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 43 dispone que cada puesto de trabajo se clasificará, según la naturaleza de las funciones asignadas, como reservado únicamente a personal funcionario, laboral, eventual o, en su caso, a directivo público profesional. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Cada puesto de trabajo se clasificará», la alternativa A introduce «El criterio de cada Administración pública» donde la norma dispone «La naturaleza de las funciones asignadas».",
        "c": "En «Cada puesto de trabajo se clasificará», la alternativa C introduce «Lo dispuesto en la legislación de régimen local» donde la norma dispone «La naturaleza de las funciones asignadas»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 44 establece que los puestos de trabajo de las administraciones públicas vascas serán desempeñados, con carácter general, por personal funcionario público. Esa previsión conduce a «Con carácter general, por personal funcionario público».",
      "descartes": {
        "a": "En «Los puestos de trabajo de las Administraciones Públicas vascas serán desempeñados», la alternativa A introduce «Siempre,» donde la norma dispone «Con carácter general,».",
        "c": "En «Los puestos de trabajo de las Administraciones Públicas vascas serán desempeñados», la alternativa C introduce «Excepcionalmente,» donde la norma dispone «Con carácter general,»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 44, especialmente, con carácter general, en las administraciones públicas vascas quedarán reservadas a personal funcionario aquellas funciones cuyo ejercicio implique la participación directa o indirecta en el ejercicio de las potestades públicas o la. La opción «Los puestos en el extranjero con funciones auxiliares» no respeta ese criterio y es la que debe descartarse.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 44: la contabilidad.",
        "c": "La alternativa C sí concuerda con el artículo 44: el ejercicio de la potestad arbitral y de mediación."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 44 es empleos propios de tareas o que únicamente conlleven tareas de vigilancia, recepción, información, custodia y transporte de documentos, reproducción de documentos o tareas de apoyo a las antes citadas. En este supuesto se ajusta a «Empleos propios de tareas o que únicamente conlleven tareas de vigilancia».",
      "descartes": {
        "b": "La alternativa B vincula «siempre que se circunscriban a los siguientes ámbitos» con «Concesión de ayudas y subvenciones»; el artículo 44 lo relaciona con «Empleos propios de tareas o que únicamente conlleven tareas de vigilancia».",
        "c": "La alternativa C vincula «siempre que se circunscriban a los siguientes ámbitos» con «La gestión de emergencias y protección civil»; el artículo 44 lo relaciona con «Empleos propios de tareas o que únicamente conlleven tareas de vigilancia»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 44 recoge las dos previsiones: «Docentes y personal auxiliar y especialista de centros educativos que no pertenezcan al sistema de educación reglada o…» y «Los puestos de trabajo que satisfagan necesidades de carácter periódico y discontinuo». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «Docentes y personal auxiliar y especialista de centros educativos que no pertenezcan al sistema de educación reglada o universitaria y…», pero resulta incompleta porque también debe incluirse «Los puestos de trabajo que satisfagan necesidades de carácter periódico y discontinuo».",
        "b": "La alternativa B recoge «Los puestos de trabajo que satisfagan necesidades de carácter periódico y discontinuo», pero resulta incompleta porque también debe incluirse «Docentes y personal auxiliar y especialista de centros educativos que no pertenezcan al sistema de educación reglada o universitaria y…»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "Según el artículo 44, especialmente, con carácter general, en las administraciones públicas vascas quedarán reservadas a personal funcionario aquellas funciones cuyo ejercicio implique la participación directa o indirecta en el ejercicio de las potestades públicas o la. La opción «Los empleos de carácter instrumental correspondientes a las áreas de mantenimiento y conservación de edificios» no respeta ese criterio y es la que debe descartarse.",
      "descartes": {
        "b": "La alternativa B sí concuerda con el artículo 44: el control y fiscalización de la gestión económico-financiera y presupuestaria.",
        "c": "La alternativa C sí concuerda con el artículo 44: la fe pública."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 44, especialmente, con carácter general, en las administraciones públicas vascas quedarán reservadas a personal funcionario aquellas funciones cuyo ejercicio implique la participación directa o indirecta en el ejercicio de las potestades públicas o la. Por eso encaja «La instrucción o la elaboración de propuestas de resolución de expedientes administrativos».",
      "descartes": {
        "b": "En «Especialmente, con carácter general, en las administraciones públicas vascas quedarán reservadas a personal…», la alternativa B introduce «Personal docente de Religión de la enseñanza reglada primaria y secundaria» donde la norma dispone «La instrucción o la elaboración de propuestas de resolución de expedientes administrativos».",
        "c": "La alternativa C vincula «Especialmente, con carácter general, en las administraciones públicas vascas quedarán reservadas a personal…» con «Docentes y personal auxiliar y especialista de centros educativos que no pertenezcan al sistema de educación reglada o universitaria y de…»; el artículo 44 lo relaciona con «La instrucción o la elaboración de propuestas de resolución de expedientes administrativos»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 44 es si, siempre que se justifique de manera fehaciente que en dichos puestos se ejercen potestades públicas. En este supuesto se ajusta a «Si, siempre que se justifique de manera fehaciente que en dichos puestos se ejercen potestades públicas».",
      "descartes": {
        "a": "En «Los empleos vinculados únicamente con funciones de protocolo y organización de eventos o congresos», la alternativa A introduce «No, están reservados a personal laboral» donde la norma dispone «Si, siempre que se justifique de manera fehaciente que en dichos puestos se ejercen potestades públicas».",
        "c": "La alternativa C vincula «Los empleos vinculados únicamente con funciones de protocolo y organización de eventos o congresos» con «Sí, siempre que sea por naturaleza coyuntural o temporal para la ejecución de programas temporales o para hacer frente a las cargas de…»; el artículo 44 lo relaciona con «Si, siempre que se justifique de manera fehaciente que en dichos puestos se ejercen potestades públicas»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El artículo 44 dispone que salvo cuando la correspondiente ley de creación disponga lo contrario; el personal al servicio de los entes públicos sometidos a derecho privado; mancomunidades y fundaciones públicas tendrá la condición de personal laboral. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Salvo cuando la correspondiente ley de creación disponga lo contrario», la alternativa B introduce «funcionario público» donde la norma dispone «laboral».",
        "c": "En «Salvo cuando la correspondiente ley de creación disponga lo contrario», la alternativa C introduce «directivo público profesional» donde la norma dispone «laboral»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 44 establece que de las sociedades públicas; mancomunidades y fundaciones públicas tendrá la condición de personal laboral; serán en todo caso puestos de trabajo reservados a personal funcionario aquellos que supongan ejercicio de autoridad o de potestades públicas. Esa previsión conduce a «Estarán reservados a personal funcionario, en todo caso».",
      "descartes": {
        "b": "La alternativa B vincula «Los puestos de trabajo que supongan ejercicio de autoridad o de potestades públicas» con «Estarán reservados a personal funcionario o a personal laboral, en todo caso»; el artículo 44 lo relaciona con «Estarán reservados a personal funcionario, en todo caso».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Estarán reservados a personal funcionario o a personal laboral, en todo caso» no expresa la regla que el artículo 44 aplica a «Los puestos de trabajo que supongan ejercicio de autoridad o de potestades públicas»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-17-empleo-publico-vasco",
  references: {
    "1": articleReference(40),
    "2": articleReference(40),
    "3": articleReference(40),
    "4": articleReference(40),
    "5": articleReference(41),
    "6": articleReference(41),
    "7": articleReference(42),
    "8": articleReference(42),
    "9": articleReference(42),
    "10": articleReference(42),
    "11": articleReference(43),
    "12": articleReference(44),
    "13": articleReference(44),
    "14": articleReference(44),
    "15": articleReference(44),
    "16": articleReference(44),
    "17": articleReference(44),
    "18": articleReference(44),
    "19": articleReference(44),
    "20": articleReference(44),
  },
});
