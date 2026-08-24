import { blockReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-de-fuentes-del-derecho-1",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el bloque «jerarquia y enumeracion de las fuentes del derecho administrativo», en este sentido, señalar la jerarquía de las fuentes es tanto como establecer el orden de aplicabilidad de las normas jurídicas a cada caso concreto y el criterio para solucionar las contradictorias prescripciones que se encuentren en normas de distinto rango. Por eso encaja «Normas jurídicas».",
      "descartes": {
        "b": "En «El ordenamiento jurídico es el conjunto de», la alternativa B introduce «Leyes» donde la norma dispone «Normas jurídicas».",
        "c": "En «El ordenamiento jurídico es el conjunto de», la alternativa C introduce «Ambas respuestas son lo mismo» donde la norma dispone «Normas jurídicas»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del bloque «especial referencia a la ley» es por lo demás, desde el punto de vista material, la Ley es una norma jurídica de carácter general y obligatorio. Y desde el punto de vista formal, es un acto emanado del Poder Legislativo. En este supuesto se ajusta a «Ley».",
      "descartes": {
        "b": "En «La norma jurídica que procede del poder legislativo se denomina», la alternativa B introduce «Reglamento» donde la norma dispone «Ley».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Reglamento» no expresa la regla que el bloque «especial referencia a la ley» aplica a «La norma jurídica que procede del poder legislativo se denomina»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El bloque «ESPECIAL REFERENCIA A LA LEY» dispone que locales. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «No existen leyes», la alternativa A introduce «Estatales» donde la norma dispone «Locales».",
        "b": "En «No existen leyes», la alternativa B introduce «Autonómicas» donde la norma dispone «Locales»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "La regulación del bloque «especial referencia a la ley» comprende «Orgánicas» y «Ordinarias». Elegir solo una dejaría la respuesta incompleta.",
      "descartes": {
        "a": "La alternativa A recoge «Orgánicas», pero resulta incompleta porque también debe incluirse «Ordinarias».",
        "b": "La alternativa B recoge «Ordinarias», pero resulta incompleta porque también debe incluirse «Orgánicas»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el bloque «especial referencia a la ley», la Constitución distingue básicamente entre Leyes Orgánicas y Leyes Ordinarias. Entre las leyes orgánicas y las ordinarias no hay jerarquía, se relacionan por materias. Por eso encaja «Ordinarias».",
      "descartes": {
        "a": "En «las leyes autonómicas pueden ser», la alternativa A introduce «Orgánicas» donde la norma dispone «Ordinarias».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Orgánicas» no expresa la regla que el bloque «especial referencia a la ley» aplica a «las leyes autonómicas pueden ser»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del bloque «especial referencia a la ley» es entre las leyes estatales y autonómicas no hay una relación de jerarquía, se basan en el principio de competencia. En este supuesto se ajusta a «Competencia».",
      "descartes": {
        "a": "En «Las leyes estatales y autonómicas se rela cionan por», la alternativa A introduce «Jerarquía» donde la norma dispone «Competencia».",
        "c": "En «Las leyes estatales y autonómicas se rela cionan por», la alternativa C introduce «Materias» donde la norma dispone «Competencia»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El bloque «ESPECIAL REFERENCIA A LA LEY» dispone que la sanción de las Leyes corresponde al Rey (art 62 CE) estableciendo el art 91 del texto constitucional que “el Rey sancionará en el plazo de quince días las Leyes aprobadas por las Cortes Generales y las promulgará y ordenará su inmediata publicación». La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Las leyes estatales las aprueba», la alternativa A introduce «El Gobierno de la Nación» donde la norma dispone «Las Cortes Generales».",
        "c": "En «Las leyes estatales las aprueba», la alternativa C introduce «El Congreso de los Diputados» donde la norma dispone «Las Cortes Generales»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "La ficha explica quiénes ejercen la potestad legislativa estatal, pero no detalla de quién parte un proyecto de ley. Por ello sirve como referencia contextual y se conserva la atribución al Gobierno que figura en el test.",
      "descartes": {
        "a": "En «Si se presenta un proyecto de ley. ¿Quién ha ejercido la iniciativa legislativa», la alternativa A introduce «Las Asambleas Legi slativas de las Comunidades Autónomas» donde la norma dispone «El Gobierno de la Nación».",
        "c": "En «Si se presenta un proyecto de ley. ¿Quién ha ejercido la iniciativa legislativa», la alternativa C introduce «Los miembros de las Cortes Generales» donde la norma dispone «El Gobierno de la Nación»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "La teoría exige mayoría absoluta del Congreso para la aprobación final de una ley orgánica, pero no desarrolla aquí toda la intervención del Senado en el procedimiento legislativo. La referencia es contextual para la respuesta conjunta registrada.",
      "descartes": {
        "a": "La alternativa A recoge «El Congreso de los Diputados», pero resulta incompleta porque también debe incluirse «El Senado».",
        "b": "La alternativa B recoge «El Senado», pero resulta incompleta porque también debe incluirse «El Congreso de los Diputados»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del bloque «especial referencia a la ley» es por lo demás, con respecto a las Leyes Ordinarias, las Orgánicas presentan una especialidad en su aprobación, modificación o derogación, al exigirse la mayoría absoluta del Congreso en votación final sobre el conjunto del Proyecto (art. 81,2.° CE). En este supuesto se ajusta a «El Congreso de los Diputados».",
      "descartes": {
        "b": "En «Una ley orgánica requiere mayoría absoluta en», la alternativa B introduce «Senado» donde la norma dispone «Congreso de los Diputados».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El Senado» no expresa la regla que el bloque «especial referencia a la ley» aplica a «Una ley orgánica requiere mayoría absoluta en»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El bloque «ESPECIAL REFERENCIA A LA LEY» dispone que entre las leyes estatales y autonómicas no hay una relación de jerarquía, se basan en el principio de competencia. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "La alternativa B vincula «¿Quién sanciona y promulga las leyes estatales» con «El Presidente del Gobierno en nombre del Rey»; el bloque «especial referencia a la ley» lo relaciona con «El Rey».",
        "c": "La alternativa C vincula «¿Quién sanciona y promulga las leyes estatales» con «El Presidente del Congreso de los Diputados en nombre del Rey»; el bloque «especial referencia a la ley» lo relaciona con «El Rey»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El bloque «ESPECIAL REFERENCIA A LA LEY» establece que la sanción de las Leyes corresponde al Rey (art 62 CE) estableciendo el art 91 del texto constitucional que “el Rey sancionará en el plazo de quince días las Leyes aprobadas por las Cortes Generales y las promulgará y ordenará su inmediata publicación». Esa previsión conduce a «15 días».",
      "descartes": {
        "a": "Para «Para ello tiene el siguiente plazo desde su aprobación», la alternativa A utiliza «10», pero la previsión aplicable fija «15».",
        "c": "Para «Para ello tiene el siguiente plazo desde su aprobación», la alternativa C utiliza «20», pero la previsión aplicable fija «15»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "La ficha indica que el Rey ordena la publicación inmediata de las leyes estatales, aunque no concreta el boletín en el que se realiza. El test identifica ese medio como el Boletín Oficial del Estado.",
      "descartes": {
        "b": "En «También ordena su publicación en el siguiente boletín oficial», la alternativa B introduce «En el de las Comunidades Autónomas» donde la norma dispone «BOE».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «En el de las Comunidades Autónomas» no expresa la regla que el bloque «especial referencia a la ley» aplica a «También ordena su publicación en el siguiente boletín oficial»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "La teoría reserva a ley orgánica los derechos fundamentales de los artículos 15 a 29 y considera ordinarias las materias restantes, pero no concreta dónde se sitúa el derecho de propiedad. La referencia solo aporta ese marco para la solución registrada.",
      "descartes": {
        "a": "La ley orgánica se reserva a las materias constitucionalmente enumeradas. La ficha no sitúa expresamente el derecho de propiedad dentro de esa reserva.",
        "c": "La alternativa C niega las dos categorías disponibles; el test clasifica la materia como ley ordinaria, aunque la ficha solo ofrece el marco general de la distinción."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "La teoría incluye expresamente los Estatutos de Autonomía entre las normas que se aprueban mediante ley orgánica. Esa calificación descarta su consideración como ley ordinaria.",
      "descartes": {
        "b": "En «Los Estatutos de Autonomía son», la alternativa B introduce «ordinaria» donde la norma dispone «orgánica».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Ley orgánica» sí está respaldada por el bloque «especial referencia a la ley»."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "La ficha reserva a ley orgánica el régimen electoral general, pero no concreta el rango del régimen electoral autonómico. La respuesta del test se conserva con una referencia únicamente contextual.",
      "descartes": {
        "a": "La teoría asocia la ley orgánica al régimen electoral general, no afirma que esa misma reserva se extienda al régimen electoral autonómico.",
        "c": "La alternativa C descarta cualquier rango legal; la solución registrada opta por la ley ordinaria, si bien la ficha no desarrolla expresamente este caso autonómico."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "Según el bloque «especial referencia a la ley», en particular, la Constitución prevé la necesidad de Ley Orgánica en las regulación de las siguientes materias. Por eso encaja «La Constitución».",
      "descartes": {
        "b": "En «Pueden reservar materias a ley orgánica», la alternativa B introduce «Las propias leyes orgánicas» donde la norma dispone «La Constitución».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Las propias leyes orgánicas» no expresa la regla que el bloque «especial referencia a la ley» aplica a «Pueden reservar materias a ley orgánica»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "La regla del bloque «especial referencia a la ley» es en lo que concierne a las Comunidades Autónomas, corresponde a sus respectivas Asambleas Legislativas. En este supuesto se ajusta a «Las Asambleas legislativas de las Comunidades Autónomas».",
      "descartes": {
        "b": "En «las leyes autonómicas son aprobadas por», la alternativa B introduce «El Parlamento Vasco en nuestro caso» donde la norma dispone «Las Asambleas legislativas de las Comunidades Autónomas».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El Parlamento Vasco en nuestro caso» no expresa la regla que el bloque «especial referencia a la ley» aplica a «las leyes autonómicas son aprobadas por»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "La teoría atribuye la potestad legislativa autonómica a las asambleas legislativas, pero no detalla quién presenta proyectos ante el Parlamento Vasco. La atribución al Gobierno se mantiene como solución registrada con alcance contextual.",
      "descartes": {
        "a": "En «Un proyecto de ley ante el Parlamento Vasco lo puede presentar», la alternativa A introduce «Los miembros del Parlamento» donde la norma dispone «El Gobierno».",
        "b": "En «Un proyecto de ley ante el Parlamento Vasco lo puede presentar», la alternativa B introduce «Las instituciones representativas de los Territorios Históricos» donde la norma dispone «El Gobierno»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "La ficha sitúa la legislación autonómica en sus respectivas asambleas, pero no desarrolla la iniciativa legislativa popular ante el Parlamento Vasco. La proposición de ley se mantiene como respuesta registrada con referencia contextual.",
      "descartes": {
        "a": "Para «El pueblo puede presentar ante el Parlamento Vasco», la alternativa A utiliza «Un», pero la previsión aplicable fija «Una».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Una proposición de ley» sí está respaldada por el bloque «especial referencia a la ley»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-28-fuentes-derecho-administrativo",
  references: {
    "1": blockReference("jerarquia-y-enumeracion-de-las-fuentes-del-derecho-administrativo", "JERARQUIA Y ENUMERACION DE LAS FUENTES DEL DERECHO ADMINISTRATIVO"),
    "2": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "3": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "4": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "5": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "6": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "7": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "8": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY", { scope: "contextual" }),
    "9": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY", { scope: "contextual" }),
    "10": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "11": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "12": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "13": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY", { scope: "contextual" }),
    "14": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY", { scope: "contextual" }),
    "15": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "16": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY", { scope: "contextual" }),
    "17": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "18": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "19": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY", { scope: "contextual" }),
    "20": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY", { scope: "contextual" }),
  },
});
