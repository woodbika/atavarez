import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-ley-11-2022-empleo-publico-vasco-articulos-53-a-62",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el artículo 53, la Administración de la Comunidad Autónoma de Euskadi; las diputaciones forales y las administraciones locales; así como la Universidad del País Vasco. Por eso encaja «La Administración de la Comunidad Autónoma de Euskadi».",
      "descartes": {
        "a": "La alternativa A vincula este supuesto con «Las diputaciones forales y las administraciones locales»; el artículo 53 lo relaciona con «La Administración de la Comunidad Autónoma de Euskadi».",
        "b": "La alternativa B vincula este supuesto con «La Universidad del País Vasco»; el artículo 53 lo relaciona con «La Administración de la Comunidad Autónoma de Euskadi»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del artículo 53 es a la Agencia Vasca de Protección de Datos. En este supuesto se ajusta a «A la Agencia Vasca de Protección de Datos».",
      "descartes": {
        "a": "En «La creación de dichos registros se notificará», la alternativa A introduce «Al Consejo Vasco del Empleo Público» donde la norma dispone «A la Agencia Vasca de Protección de Datos».",
        "c": "En «La creación de dichos registros se notificará», la alternativa C introduce «Al Parlamento Vasco» donde la norma dispone «A la Agencia Vasca de Protección de Datos»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El artículo 53 dispone que garantizar la constancia registral de los expedientes personales del personal en él inscrito, como garantía para las interesadas e interesados y como instrumento de ayuda a la gestión de los recursos humanos comprendidos dentro de su ámbito de aplicación. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula «Los registros de personal tendrán las siguientes finalidades: Señala la respuesta correcta» con «Disponer de la información sobre los recursos humanos del sector público del Estado en la Comunidad Autónoma del País Vasco que los órganos…»; el artículo 53 lo relaciona con «Garantizar la constancia registral de los expedientes personales del personal en él inscrito».",
        "c": "La alternativa C vincula «Los registros de personal tendrán las siguientes finalidades: Señala la respuesta correcta» con «Determinar las retribuciones que pueden ser objeto de inclusión en la nómina de cada empleado público»; el artículo 53 lo relaciona con «Garantizar la constancia registral de los expedientes personales del personal en él inscrito»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El artículo 53 establece que las distintas entidades que componen el sector público de cada una de las administraciones públicas vascas dispondrán de un registro de personal que será gestionado directamente por cada una de las entidades. Esa previsión conduce a «Cada una de las entidades».",
      "descartes": {
        "a": "En «Las distintas entidades que componen el sector público de cada una de las administraciones públicas vascas…», la alternativa A introduce «La Agencia Vasca de Protección de Datos» donde la norma dispone «Cada una de las entidades».",
        "c": "En «Las distintas entidades que componen el sector público de cada una de las administraciones públicas vascas…», la alternativa C introduce «Comisión de Coordinación del Empleo Público de Euskadi» donde la norma dispone «Cada una de las entidades»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el artículo 53, las distintas entidades que componen el sector público de cada una de las administraciones públicas vascas dispondrán de un registro de personal que será gestionado directamente por cada una de las entidades. Por eso encaja «El registro general de personal de cada administración».",
      "descartes": {
        "b": "En «Los registros de las distintas entidades que componen el sector público de cada una de las administraciones…», la alternativa B introduce «del Parlamento Vasco» donde la norma dispone «de cada administración».",
        "c": "En «Los registros de las distintas entidades que componen el sector público de cada una de las administraciones…», la alternativa C introduce «la Comisión de Coordinación del Empleo Público de Euskadi» donde la norma dispone «cada administración»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "El artículo 53 establece que a efectos estadísticos y de elaboración de estudios e informes referidos al empleo público. La formulación «En los registros no se podrán inscribir los datos a que se refiere el artículo 16 de la Ley 4/2005» se aparta de esa regulación y es la afirmación incorrecta.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 53: a efectos estadísticos y de elaboración de estudios e informes referidos al empleo público, se creará en el registro de personal de la Administración de la Comunidad Autónoma de Euskadi una sección en la que se recogerá la información de datos agregados referida a todo el personal que integra las distintas administraciones públicas vascas, incluido el personal de su respectivo sector público.",
        "c": "La alternativa C sí concuerda con el artículo 53: en los registros se inscribirán los datos relativos a la variable de discapacidad y deberá garantizarse que los datos registrados permitan conocer la situación y condiciones de las personas empleadas públicas con discapacidad en las administraciones públicas vascas."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El artículo 53 dispone que el registro de personal de la Administración de la Comunidad Autónoma de Euskadi estará adscrito al departamento del Gobierno Vasco competente en materia de empleo público. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «El registro de personal de la Administración de la Comunidad Autónoma de Euskadi estará adscrito», la alternativa A introduce «A la Comisión de Coordinación del Empleo Público de Euskadi» donde la norma dispone «Al departamento del Gobierno Vasco competente en materia de empleo público».",
        "b": "En «El registro de personal de la Administración de la Comunidad Autónoma de Euskadi estará adscrito», la alternativa B introduce «A la Agencia Vasca de Protección de Datos» donde la norma dispone «Al departamento del Gobierno Vasco competente en materia de empleo público»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El artículo 53 establece que la Comisión de Coordinación del Empleo Público de Euskadi. Esa previsión conduce a «La Comisión de Coordinación del Empleo Público de Euskadi».",
      "descartes": {
        "a": "En «Establecerá los criterios que permitan el intercambio homogéneo de información entre las diferentes…», la alternativa A introduce «Agencia Vasca de Protección de Datos» donde la norma dispone «Comisión de Coordinación del Empleo Público de Euskadi».",
        "b": "En «Establecerá los criterios que permitan el intercambio homogéneo de información entre las diferentes…», la alternativa B introduce «El departamento del Gobierno Vasco competente en materia de empleo público» donde la norma dispone «La Comisión de Coordinación del Empleo Público de Euskadi»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el artículo 54, a estos efectos, la evaluación del desempeño es un instrumento que posibilita la evaluación y la valoración de la conducta profesional y el rendimiento o el logro de resultados. Por eso encaja «La evaluación del desempeño es un instrumento que posibilita la evaluación y la valoración de la conducta profesional y el rendimiento o el logro de resultados».",
      "descartes": {
        "a": "En «respecto de la evaluación del desempeño», la alternativa A introduce «organización y gestión de recursos humanos por parte de la Administración pública» donde la norma dispone «conducta profesional y el rendimiento o el logro de resultados».",
        "b": "La alternativa B vincula «respecto de la evaluación del desempeño» con «Las características y criterios de aplicación de los instrumentos habilitados para llevar a efecto la evaluación del desempeño deberán ser…»; el artículo 54 lo relaciona con «La evaluación del desempeño es un instrumento que posibilita la evaluación y la valoración de la conducta profesional y el rendimiento o el…»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del artículo 54 es los sistemas de evaluación del desempeño se adecuarán; a criterios de relevancia de los contenidos; fiabilidad de los instrumentos. En este supuesto se ajusta a «Relevancia de los contenidos, fiabilidad de los instrumentos, imparcialidad, objetividad de las medidas, transparencia y no discriminación».",
      "descartes": {
        "a": "En «Los sistemas de evaluación del desempeño se adecuarán, en todo caso, a criterios de», la alternativa A introduce «Eficiencia, relevancia de los contenidos, fiabilidad de los instrumentos, eficacia, mérito e imparcialidad» donde la norma dispone «Relevancia de los contenidos».",
        "c": "En «Los sistemas de evaluación del desempeño se adecuarán, en todo caso, a criterios de», la alternativa C introduce «validez, objetividad y eficacia» donde la norma dispone «imparcialidad, objetividad de las medidas, transparencia y no discriminación»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El artículo 54 dispone que los objetivos principales de los sistemas de evaluación del desempeño estarán relacionados con la mejora del rendimiento, la motivación y la formación del personal empleado público. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Los objetivos principales de los sistemas de evaluación del desempeño estarán relacionados con», la alternativa B introduce «puesto de trabajo y de las condiciones» donde la norma dispone «rendimiento, la motivación y la formación».",
        "c": "En «Los objetivos principales de los sistemas de evaluación del desempeño estarán relacionados con», la alternativa C introduce «Las mejoras tanto del puesto de trabajo como de las condiciones y motivación» donde la norma dispone «La mejora del rendimiento, la motivación y la formación»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El artículo 54 recoge las dos previsiones: «En la revisión de los distintos puestos de trabajo» y «En el diseño y revisión de los procesos de formación, provisión y selección». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «En la revisión de los distintos puestos de trabajo», pero resulta incompleta porque también debe incluirse «En el diseño y revisión de los procesos de formación, provisión y selección».",
        "b": "La alternativa B recoge «En el diseño y revisión de los procesos de formación, provisión y selección», pero resulta incompleta porque también debe incluirse «En la revisión de los distintos puestos de trabajo»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el artículo 54, los efectos de la evaluación del desempeño sobre la carrera profesional. Por eso encaja «La Comisión de Coordinación del Empleo Público de Euskadi».",
      "descartes": {
        "a": "En «Los efectos de la evaluación del desempeño sobre la carrera profesional», la alternativa A introduce «El Consejo Vasco del Empleo Público» donde la norma dispone «La Comisión de Coordinación del Empleo Público de Euskadi».",
        "b": "En «Los efectos de la evaluación del desempeño sobre la carrera profesional», la alternativa B introduce «Cada una de las administraciones públicas» donde la norma dispone «La Comisión de Coordinación del Empleo Público de Euskadi»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La regla del artículo 54 es la evaluación será efectuada a través de las comisiones técnicas de evaluación, que garantizarán la objetividad del proceso de evaluación del desempeño. En este supuesto se ajusta a «Las comisiones técnicas de evaluación».",
      "descartes": {
        "a": "En «La evaluación será efectuada a través de», la alternativa A introduce «Una comisión de representantes de los trabajadores y del Consejo Vasco del Empleo Público» donde la norma dispone «Las comisiones técnicas de evaluación».",
        "b": "En «La evaluación será efectuada a través de», la alternativa B introduce «El Gobierno Vasco, previo informe del Consejo Vasco del Empleo Público» donde la norma dispone «Las comisiones técnicas de evaluación»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El artículo 55 dispone que suministrar información tanto del trabajo, en relación con las tareas de los puestos, como del personal que lo desempeña. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «El análisis de puestos de trabajo se configura como una herramienta necesaria para», la alternativa A introduce «sistemas de evaluación del desempeño de su personal empleado» donde la norma dispone «información tanto del trabajo, en relación con las tareas de los puestos, como del personal que lo desempeña».",
        "c": "En «El análisis de puestos de trabajo se configura como una herramienta necesaria para», la alternativa C introduce «La evaluación y la valoración de la conducta de las administraciones públicas» donde la norma dispone «Suministrar información tanto del trabajo, en relación con las tareas de los puestos, como del personal que lo desempeña»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "El artículo 55 establece que la información contenida en los análisis de puestos de trabajo deberá cumplir con los criterios de relevancia, fiabilidad, validez, objetividad y transparencia. Esa previsión conduce a «Relevancia, fiabilidad, validez, objetividad y transparencia».",
      "descartes": {
        "b": "En «La información contenida en los análisis de puestos de trabajo deberá cumplir con los criterios de», la alternativa B introduce «de los contenidos, fiabilidad de los instrumentos, imparcialidad, objetividad de las medidas y eficacia» donde la norma dispone «fiabilidad, validez, objetividad y transparencia».",
        "c": "En «La información contenida en los análisis de puestos de trabajo deberá cumplir con los criterios de», la alternativa C introduce «Imparcialidad, credibilidad, validez, transparencia y no discriminación» donde la norma dispone «Relevancia, fiabilidad, validez, objetividad y transparencia»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el artículo 55, la información resultante de los análisis de puestos de trabajo residirá en el órgano competente de empleo público de cada administración, y deberá estar a disposición del personal empleado público de la misma. Por eso encaja «El órgano competente de empleo público de cada administración».",
      "descartes": {
        "b": "En «La información resultante de los análisis de puestos de trabajo residirá en», la alternativa B introduce «La Comisión de Coordinación del Empleo Público de Euskadi» donde la norma dispone «El órgano competente de empleo público de cada administración».",
        "c": "En «La información resultante de los análisis de puestos de trabajo residirá en», la alternativa C introduce «La Agencia Vasca de Protección de Datos» donde la norma dispone «El órgano competente de empleo público de cada administración»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del artículo 55 es la administración pública que se proponga aplicar dicho instrumento deberá negociarlo con la representación de personal. En este supuesto se ajusta a «La representación de personal».",
      "descartes": {
        "a": "En «La administración pública que se proponga aplicar la información resultante de los análisis de puestos de…», la alternativa A introduce «Comisión de Coordinación del Empleo Público de Euskadi» donde la norma dispone «representación de personal».",
        "b": "En «La administración pública que se proponga aplicar la información resultante de los análisis de puestos de…», la alternativa B introduce «Agencia Vasca de Protección de Datos» donde la norma dispone «representación de personal»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La regulación del artículo 56 comprende «En cuerpos, en escalas y en especialidades» y «En la agrupación profesional de personal de apoyo». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «En cuerpos, en escalas y en especialidades», pero resulta incompleta porque también debe incluirse «En la agrupación profesional de personal de apoyo».",
        "b": "La alternativa B recoge «En la agrupación profesional de personal de apoyo», pero resulta incompleta porque también debe incluirse «En cuerpos, en escalas y en especialidades»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El artículo 57 establece que el personal funcionario de la Administración de la Comunidad Autónoma de Euskadi se agrupa por cuerpos en razón a las características de los procedimientos selectivos para el acceso a la condición de personal funcionario. Esa previsión conduce a «Los procedimientos selectivos para el acceso a la condición de personal funcionario».",
      "descartes": {
        "b": "La alternativa B vincula «El personal funcionario de la Administración de la Comunidad Autónoma de Euskadi se agrupa por cuerpos en…» con «Una cualificación profesional que abarque contenidos susceptibles de ser desempeñados por diversas titulaciones académicas»; el artículo 57 lo relaciona con «Los procedimientos selectivos para el acceso a la condición de personal funcionario».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Una cualificación profesional que abarque contenidos susceptibles de ser desempeñados por diversas…» no expresa la regla que el artículo 57 aplica a «El personal funcionario de la Administración de la Comunidad Autónoma de Euskadi se agrupa por cuerpos en…»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "Según el artículo 57, en el ámbito de la Administración de la Comunidad Autónoma de Euskadi, las referencias que en esta ley se contienen a cuerpos y escala, se entenderán hechas a cuerpos, escalas y opciones. Por eso encaja «Cuerpos, escalas y opciones».",
      "descartes": {
        "a": "En «En el ámbito de la Administración de la Comunidad Autónoma de Euskadi», la alternativa A introduce «Clases y especialidades,» donde la norma dispone «Cuerpos, escalas y opciones».",
        "c": "En «En el ámbito de la Administración de la Comunidad Autónoma de Euskadi», la alternativa C introduce «Escalas y subescalas» donde la norma dispone «Cuerpos, escalas y opciones»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del artículo 58 es en las administraciones públicas vascas, dentro de los cuerpos, podrán existir escalas cuando las funciones a desempeñar exijan una cualificación profesional que abarque contenidos susceptibles de ser desempeñados por diversas titulaciones académicas. En este supuesto se ajusta a «Cuando las funciones a desempeñar exijan una cualificación profesional que abarque contenidos susceptibles de ser desempeñados por diversas titulaciones académicas».",
      "descartes": {
        "a": "La alternativa A vincula «En las administraciones públicas vascas, dentro de los cuerpos, podrán existir escalas» con «En razón a las características de los procedimientos selectivos para el acceso a la condición de personal funcionario»; el artículo 58 lo relaciona con «Cuando las funciones a desempeñar exijan una cualificación profesional que abarque contenidos susceptibles de ser desempeñados por diversas…».",
        "c": "La alternativa C vincula «En las administraciones públicas vascas, dentro de los cuerpos, podrán existir escalas» con «En razón al nivel de titulación exigido para el acceso»; el artículo 58 lo relaciona con «Cuando las funciones a desempeñar exijan una cualificación profesional que abarque contenidos susceptibles de ser desempeñados por diversas…»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El artículo 59 recoge tanto «Grado universitario» como «Técnico superior o técnico». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Grado universitario», pero resulta incompleta porque también debe incluirse «Técnico superior o técnico».",
        "b": "La alternativa B recoge «Técnico superior o técnico», pero resulta incompleta porque también debe incluirse «Grado universitario»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El artículo 60 establece que cuando el contenido técnico y particularizado de determinados puestos de trabajo exija como requisito para su desempeño una mayor especialización de conocimientos para ejercer las funciones de cuerpos y escalas, podrán crearse especialidades. Esa previsión conduce a «Cuando el contenido técnico y particularizado de determinados puestos de trabajo exija como requisito para su desempeño una mayor especialización de conocimientos…».",
      "descartes": {
        "a": "La alternativa A vincula «Podrán crearse especialidades» con «Cuando las funciones a desempeñar exijan una cualificación profesional que abarque contenidos susceptibles de ser desempeñados por diversas…»; el artículo 60 lo relaciona con «Cuando el contenido técnico y particularizado de determinados puestos de trabajo exija como requisito para su desempeño una mayor…».",
        "b": "La alternativa B vincula «Podrán crearse especialidades» con «Debido al carácter homogéneo de las funciones a realizar»; el artículo 60 lo relaciona con «Cuando el contenido técnico y particularizado de determinados puestos de trabajo exija como requisito para su desempeño una mayor…»."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "Según el artículo 61, los puestos de trabajo a un determinado cuerpo. La opción «La adscripción a uno o varios cuerpos» no respeta ese criterio y es la que debe descartarse.",
      "descartes": {
        "a": "La alternativa A sí concuerda con el artículo 61: podrán adscribirse, con carácter exclusivo, los puestos de trabajo a un determinado cuerpo, escala o agrupación profesional sin requisito de titulación cuando tal adscripción se derive de la naturaleza de las funciones a desarrollar en ellos.",
        "c": "La alternativa C sí concuerda con el artículo 61: los puestos de trabajo podrán estar adscritos a varios cuerpos o escalas cuando las funciones atribuidas a aquellos sean comunes a varios cuerpos o escalas."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La regla del artículo 62 es el personal laboral se clasificará de conformidad con lo previsto en la legislación labora. En este supuesto se ajusta a «La legislación laboral».",
      "descartes": {
        "b": "La alternativa B vincula «El personal laboral se clasificará de conformidad con lo previsto en» con «El Real Decreto Legislativo 5/2015»; el artículo 62 lo relaciona con «La legislación laboral».",
        "c": "En «El personal laboral se clasificará de conformidad con lo previsto en», la alternativa C introduce «Ley 11/2022 de Empleo Público Vasco» donde la norma dispone «legislación laboral»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-17-empleo-publico-vasco",
  references: {
    "1": articleReference(53),
    "2": articleReference(53),
    "3": articleReference(53),
    "4": articleReference(53),
    "5": articleReference(53),
    "6": articleReference(53),
    "7": articleReference(53),
    "8": articleReference(53),
    "9": articleReference(54),
    "10": articleReference(54),
    "11": articleReference(54),
    "12": articleReference(54),
    "13": articleReference(54),
    "14": articleReference(54),
    "15": articleReference(55),
    "16": articleReference(55),
    "17": articleReference(55),
    "18": articleReference(55),
    "19": articleReference(56),
    "20": articleReference(57),
    "21": articleReference(57),
    "22": articleReference(58),
    "23": articleReference(59),
    "24": articleReference(60),
    "25": articleReference(61),
    "26": articleReference(62),
  },
});
