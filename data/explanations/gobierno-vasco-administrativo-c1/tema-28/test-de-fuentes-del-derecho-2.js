import { blockReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  "testId": "test-de-fuentes-del-derecho-2",
  "preguntas": [
    {
      "preguntaId": 1,
      "justificacion": "Según el bloque «especial referencia a la ley», cuando en el nombre de la ley no aparezca orgánica es porque es ordinaria, por ejemplo ley de bases, sin embargo, tenemos como otro ejemplo ley orgánica de transferencia. Por eso encaja «Ordinaria».",
      "descartes": {
        "b": "En «La ley de bases es una ley», la alternativa B introduce «Orgánica» donde la norma dispone «Ordinaria».",
        "c": "En «La ley de bases es una ley», la alternativa C introduce «No entra dentro de esa calificación jurídica» donde la norma dispone «Ordinaria»."
      }
    },
    {
      "preguntaId": 2,
      "justificacion": "La regla del bloque «especial referencia a la ley» es en particular, la Constitución prevé la necesidad de Ley Orgánica en las regulación de las siguientes materias. En este supuesto se ajusta a «Orgánica».",
      "descartes": {
        "a": "En «La ley de transferencias es una ley», la alternativa A introduce «Ordinaria» donde la norma dispone «Orgánica».",
        "c": "En «La ley de transferencias es una ley», la alternativa C introduce «No entra dentro de esa calificación jurídica» donde la norma dispone «Orgánica»."
      }
    },
    {
      "preguntaId": 3,
      "justificacion": "El bloque «ESPECIAL REFERENCIA A LA LEY» dispone que cuando en el nombre de la ley no aparezca orgánica es porque es ordinaria, por ejemplo ley de bases, sin embargo, tenemos como otro ejemplo ley orgánica de transferencia. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «La ley de Marco es una l ey», la alternativa B introduce «Orgánica» donde la norma dispone «Ordinaria».",
        "c": "En «La ley de Marco es una l ey», la alternativa C introduce «No entra dentro de esa calificación jurídica» donde la norma dispone «Ordinaria»."
      }
    },
    {
      "preguntaId": 4,
      "justificacion": "El bloque «ESPECIAL REFERENCIA A LA LEY» establece que cuando en el nombre de la ley no aparezca orgánica es porque es ordinaria, por ejemplo ley de bases, sin embargo, tenemos como otro ejemplo ley orgánica de transferencia. Esa previsión conduce a «Ordinaria».",
      "descartes": {
        "b": "En «La ley de Armonización es una ley», la alternativa B introduce «Orgánica» donde la norma dispone «Ordinaria».",
        "c": "En «La ley de Armonización es una ley», la alternativa C introduce «No entra dentro de esa calificación jurídica» donde la norma dispone «Ordinaria»."
      }
    },
    {
      "preguntaId": 5,
      "justificacion": "Según el bloque «especial referencia al reglamento», para GARRIDO FALLA, el Reglamento es toda disposición jurídica de carácter general dictada por la Administración Pública y con valor subordinado a la Ley. Por eso encaja «Son normas de carácter general que emanan de la administración».",
      "descartes": {
        "a": "En «Los reglamentos», la alternativa A introduce «del poder legislativo» donde la norma dispone «de la administración».",
        "c": "En «Los reglamentos», la alternativa C introduce «disposiciones de carácter particular» donde la norma dispone «normas de carácter general»."
      }
    },
    {
      "preguntaId": 6,
      "justificacion": "La regla del bloque «especial referencia al reglamento» es tienen un valor jerárquico inferior a una ley. En este supuesto se ajusta a «Tienen un valor jerárquico inferior a una ley».",
      "descartes": {
        "a": "Para «Los reglamentos», la alternativa A utiliza «una», pero la previsión aplicable fija «un / una».",
        "c": "En «Los reglamentos», la alternativa C introduce «superior» donde la norma dispone «inferior»."
      }
    },
    {
      "preguntaId": 7,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» dispone que presidente del Gobierno del Estado: Real Decreto. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "La alternativa A vincula «El reglamento que dicta el Presidente del Gobierno del Estado se denomina» con «Decreto»; el bloque «especial referencia al reglamento» lo relaciona con «Real Decreto».",
        "b": "En «El reglamento que dicta el Presidente del Gobierno del Estado se denomina», la alternativa B introduce «Orden del Presidente del Gobierno» donde la norma dispone «Real Decreto»."
      }
    },
    {
      "preguntaId": 8,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» establece que consejo de Ministros: Real Decreto. Esa previsión conduce a «Real Decreto».",
      "descartes": {
        "a": "La alternativa A vincula «El reglamento que dicta el Consejo de Ministros se denomina» con «Decreto»; el bloque «especial referencia al reglamento» lo relaciona con «Real Decreto».",
        "b": "En «El reglamento que dicta el Consejo de Ministros se denomina», la alternativa B introduce «Orden del Presidente del Gobierno» donde la norma dispone «Real Decreto»."
      }
    },
    {
      "preguntaId": 9,
      "justificacion": "Según el bloque «jerarquia y enumeracion de las fuentes del derecho administrativo», reglamentos o normas de las Comisiones Delegadas del Gobierno, aprobadas por Orden del Ministro competente o del Ministro de la Presidencia, cuando la competencia corresponda a distintos Ministros. Por eso encaja «Ordenes del ministerio competente por razón de la materia».",
      "descartes": {
        "b": "En «Los reglamentos que dictan las Comisiones Delegadas de Gobierno se denominan», la alternativa B introduce «Orden del ministro de administraciones públicas si afecta a varias materias» donde la norma dispone «Ordenes del ministerio competente por razón de la materia».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Orden del ministro de administraciones públicas si afecta a varias materias» no expresa la regla que el bloque «jerarquia y enumeracion de las fuentes del derecho administrativo» aplica a «Los reglamentos que dictan las Comisiones Delegadas de Gobierno se denominan»."
      }
    },
    {
      "preguntaId": 10,
      "justificacion": "La regla del bloque «especial referencia al reglamento» es ordenes del ministerio competente por razón de la materia. En este supuesto se ajusta a «Ordenes del ministerio competente por razón de la materia».",
      "descartes": {
        "b": "En «Los reglamentos que dicta un Ministro se denominan», la alternativa B introduce «Orden del ministro de administraciones públicas si afecta a varias materias» donde la norma dispone «Ordenes del ministerio competente por razón de la materia».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Orden del ministro de administraciones públicas si afecta a varias materias» no expresa la regla que el bloque «especial referencia al reglamento» aplica a «Los reglamentos que dicta un Ministro se denominan»."
      }
    },
    {
      "preguntaId": 11,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» dispone que consejo de Gobierno autonómico: Decreto. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "b": "En «Los reglamentos que dicta el Consejo de Gobierno se denominan», la alternativa B introduce «Orden del Presidente del Gobierno» donde la norma dispone «Decreto».",
        "c": "La alternativa C vincula «Los reglamentos que dicta el Consejo de Gobierno se denominan» con «Real Decreto»; el bloque «especial referencia al reglamento» lo relaciona con «Decreto»."
      }
    },
    {
      "preguntaId": 12,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» establece que consejeras y consejeros: Orden de la Consejería. Esa previsión conduce a «Orden del Consejero».",
      "descartes": {
        "a": "En «Los reglamentos que dictan los Consejeros se denominan», la alternativa A introduce «Decreto» donde la norma dispone «Orden».",
        "c": "En «Los reglamentos que dictan los Consejeros se denominan», la alternativa C introduce «Los Consejeros no pueden dictar reglamentos» donde la norma dispone «Orden del Consejero»."
      }
    },
    {
      "preguntaId": 13,
      "justificacion": "Según el bloque «especial referencia al reglamento», el Alcalde. Por eso encaja «El Alcalde».",
      "descartes": {
        "b": "En «Los bandos los dicta», la alternativa B introduce «Presidente de la Diputación» donde la norma dispone «Alcalde».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «El Presidente de la Diputación» no expresa la regla que el bloque «especial referencia al reglamento» aplica a «Los bandos los dicta»."
      }
    },
    {
      "preguntaId": 14,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» recoge tanto «el Pleno de los Ayuntamientos» como «El Pleno de las Diputaciones Provinciales». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «el Pleno de los Ayuntamientos», pero resulta incompleta porque también debe incluirse «El Pleno de las Diputaciones Provinciales».",
        "b": "La alternativa B recoge «El Pleno de las Diputaciones Provinciales», pero resulta incompleta porque también debe incluirse «el Pleno de los Ayuntamientos»."
      }
    },
    {
      "preguntaId": 15,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» recoge las dos previsiones: «el Pleno de los Ayuntamientos» y «El Pleno de las Diputaciones Provinciales». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A menciona solo el reglamento interno del Ayuntamiento; falta el correspondiente a la Diputación Provincial.",
        "b": "La alternativa B recoge únicamente el reglamento interno de la Diputación Provincial y omite el ámbito municipal."
      }
    },
    {
      "preguntaId": 16,
      "justificacion": "La teoría atribuye expresamente eficacia externa a las ordenanzas y distingue los reglamentos internos por su eficacia interna. No concreta en esa misma clasificación la eficacia de los bandos, por lo que la respuesta conjunta queda apoyada solo de forma contextual.",
      "descartes": {
        "a": "La alternativa A recoge «Las Ordenanzas», pero resulta incompleta porque también debe incluirse «Los Bandos».",
        "b": "La alternativa B recoge «Los Bandos», pero resulta incompleta porque también debe incluirse «Las Ordenanzas»."
      }
    },
    {
      "preguntaId": 17,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» recoge tanto «Leyes orgánicas» como «Leyes ordinarias». La opción conjunta reúne los dos elementos exigidos.",
      "descartes": {
        "a": "La alternativa A recoge «Leyes orgánicas», pero resulta incompleta porque también debe incluirse «Leyes ordinarias».",
        "b": "La alternativa B recoge «Leyes ordinarias», pero resulta incompleta porque también debe incluirse «Leyes orgánicas»."
      }
    },
    {
      "preguntaId": 18,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» recoge las dos previsiones: «leyes» y «Disposiciones administrativas de rango superior». Por ello deben valorarse conjuntamente.",
      "descartes": {
        "a": "La alternativa A recoge «leyes», pero resulta incompleta porque también debe incluirse «Disposiciones administrativas de rango superior».",
        "b": "La alternativa B recoge «Disposiciones administrativas de rango superior», pero resulta incompleta porque también debe incluirse «leyes»."
      }
    },
    {
      "preguntaId": 19,
      "justificacion": "El bloque sobre los límites reglamentarios declara nulas de pleno derecho las disposiciones que vulneren la Constitución, las leyes u otras normas superiores. Ese efecto excluye tanto la anulabilidad como la mera irregularidad.",
      "descartes": {
        "b": "En «Una disposición administrativa que vulnere la Constitución», la alternativa B introduce «Anulable» donde la norma dispone «Nula de pleno derecho».",
        "c": "En «Una disposición administrativa que vulnere la Constitución», la alternativa C introduce «Irregular» donde la norma dispone «Nula de pleno derecho»."
      }
    },
    {
      "preguntaId": 20,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» establece que están recogidos en la LG; 2.° LRJAP y PAC establece que «también serán nulas de pleno derecho las disposiciones administrativas que vulneren la Constitución; las que regulen materias reservadas a la Ley. Esa previsión conduce a «Nula de pleno derecho».",
      "descartes": {
        "b": "En «Una disposición administrativa que regule materias reservadas a ley son», la alternativa B introduce «Anulable» donde la norma dispone «Nula de pleno derecho».",
        "c": "En «Una disposición administrativa que regule materias reservadas a ley son», la alternativa C introduce «Irregular» donde la norma dispone «Nula de pleno derecho»."
      }
    },
    {
      "preguntaId": 21,
      "justificacion": "La teoría incluye entre las disposiciones nulas las que establecen retroactividad de normas sancionadoras no favorables o restrictivas de derechos. La irretroactividad, en cambio, es la garantía que la norma protege.",
      "descartes": {
        "a": "En «Una disposición administrativa es nula de pleno derecho cuando», la alternativa A introduce «irretroactividad de disposiciones sancionadoras no favorables o restrictivas» donde la norma dispone «retroactividad de disposiciones sancionadoras no favorables o restrictiva s».",
        "c": "La alternativa C no puede descartar todas las respuestas, porque «Recoge la retroactividad de disposiciones sancionadoras no favorables o restrictiva s de derechos individuales» sí está respaldada por el bloque «especial referencia al reglamento»."
      }
    },
    {
      "preguntaId": 22,
      "justificacion": "La regla del bloque «especial referencia al reglamento» es establecer y exigir prestaciones personales obligatorias (el art. 31,3.° CE, dispone, al efecto, que «sólo podrá establecerse prestaciones personales o patrimoniales de carácter público con arreglo a la Ley). En este supuesto se ajusta a «No pueden establecer prestaciones personales ni patrimoniales».",
      "descartes": {
        "a": "En «Los reglamentos», la alternativa A introduce «penas pero si imponerlas» donde la norma dispone «prestaciones personales ni patrimoniales».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «No pueden establecer penas pero si imponerlas» no expresa la regla que el bloque «especial referencia al reglamento» aplica a «Los reglamentos»."
      }
    },
    {
      "preguntaId": 23,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» dispone que ministros: Orden Ministerial. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «Una orden ministerial respecto a un real decreto», la alternativa A introduce «derogar a ese real decreto pero si derogarla» donde la norma dispone «ni derogar ni modificar ese real decreto».",
        "c": "En «Una orden ministerial respecto a un real decreto», la alternativa C introduce «Puede modificar y derogar» donde la norma dispone «No puede ni derogar ni modificar»."
      }
    },
    {
      "preguntaId": 24,
      "justificacion": "El bloque «ESPECIAL REFERENCIA AL REGLAMENTO» establece que los Reglamentos Independientes no deben limitar derechos subjetivos ni situaciones jurídicas adquiridas por los particulares. Esa previsión conduce a «Un reglamento independiente no puede limitar derechos subjetivos ni situaciones jurídicas adquiridas por los particulares».",
      "descartes": {
        "a": "En este supuesto, la alternativa A introduce «excederse de lo que autoriza la ley que desarr ollan» donde la norma dispone «limitar derechos subjetivos ni situaciones jurídicas adquiridas por los particulares».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Un reglamento independiente no puede excederse de lo que autoriza la ley que desarr ollan» no expresa la regla que el bloque «especial referencia al reglamento» aplica a este supuesto."
      }
    },
    {
      "preguntaId": 25,
      "justificacion": "La teoría limita los reglamentos ejecutivos a la materia autorizada por la ley que desarrollan. Por eso no pueden exceder esa habilitación; la limitación de derechos adquiridos se formula específicamente para los reglamentos independientes.",
      "descartes": {
        "b": "En este supuesto, la alternativa B introduce «limitar derechos subjetivos ni situaciones jurídicas adquiridas por los particulares» donde la norma dispone «excederse de lo que autoriza la ley q ue desarrollan».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Un reglamento ejecutivo no puede limitar derechos subjetivos ni situaciones jurídicas adquiridas por los…» no expresa la regla que el bloque «especial referencia al reglamento» aplica a este supuesto."
      }
    },
    {
      "preguntaId": 26,
      "justificacion": "La regla del bloque «especial referencia al reglamento» es en general, los Reglamentos no deben regular cuestiones que, por su naturaleza, pertenezcan al campo jurídico—privado. En este supuesto se ajusta a «Privado».",
      "descartes": {
        "b": "En «Los reglamentos no pueden entrar en el campo jurídico», la alternativa B introduce «Público» donde la norma dispone «Privado».",
        "c": "La alternativa C no puede aceptar conjuntamente las respuestas: «Público» no expresa la regla que el bloque «especial referencia al reglamento» aplica a «Los reglamentos no pueden entrar en el campo jurídico»."
      }
    },
    {
      "preguntaId": 27,
      "justificacion": "El bloque «EL PRINCIPIO DE LEGALIDAD EN LA ADMINISTRACIÓN PÚBLICA» dispone que en su art. 103,1.° que «la Administración Pública sirve con objetividad los intereses generales y actúa de acuerdo con los principios de eficacia, jerarquía, descentralización, desconcentración y coordinación con sometimiento pleno a la Ley y al Derecho. La respuesta registrada recoge esa consecuencia.",
      "descartes": {
        "a": "En «¿Cuál de los siguientes principios no rige dentro de la administración», la alternativa A introduce «Coordinación» donde la norma dispone «Concentración».",
        "c": "En «¿Cuál de los siguientes principios no rige dentro de la administración», la alternativa C introduce «Eficacia» donde la norma dispone «Concentración»."
      }
    }
  ]
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-28-fuentes-derecho-administrativo",
  references: {
    "1": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "2": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "3": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "4": blockReference("especial-referencia-a-la-ley", "ESPECIAL REFERENCIA A LA LEY"),
    "5": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "6": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "7": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "8": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "9": blockReference("jerarquia-y-enumeracion-de-las-fuentes-del-derecho-administrativo", "JERARQUIA Y ENUMERACION DE LAS FUENTES DEL DERECHO ADMINISTRATIVO"),
    "10": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "11": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "12": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "13": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "14": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "15": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "16": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO", { scope: "contextual" }),
    "17": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "18": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "19": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "20": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "21": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "22": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "23": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "24": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "25": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "26": blockReference("especial-referencia-al-reglamento", "ESPECIAL REFERENCIA AL REGLAMENTO"),
    "27": blockReference("el-principio-de-legalidad-en-la-administracion-publica", "EL PRINCIPIO DE LEGALIDAD EN LA ADMINISTRACIÓN PÚBLICA"),
  },
});
