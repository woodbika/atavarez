import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-normalizacion-linguistica-articulos-11-y-12",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Se conserva la solución A registrada porque reproduce el protocolo del artículo 11.4: si quien atiende desconoce el euskera, debe recabar la ayuda de otra persona empleada bilingüe.",
      descartes: {
        b: "El personal no puede pedir a la ciudadanía que cambie de lengua oficial.",
        c: "La teoría exige que el personal de atención directa tenga capacidad en ambas lenguas; pese a su redacción defectuosa, esta alternativa también refleja esa garantía.",
        d: "La opción B contradice expresamente la libertad lingüística de la ciudadanía.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La teoría admite otra opción además de la solución registrada",
        texto: "El artículo 11.4 respalda la respuesta A, pero también la idea sustantiva de la opción C sobre la capacitación bilingüe del personal de atención directa. Se mantiene la solución A registrada.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Las respuestas escritas siguen la lengua elegida, los documentos sin destinatario se redactan en ambas lenguas y los modelos se ofrecen en euskera o en formato bilingüe.",
      descartes: {
        a: "Responder en la lengua utilizada por la ciudadanía es obligatorio, junto con las previsiones B y C.",
        b: "El bilingüismo de los documentos sin destinatario es correcto, pero no agota las reglas escritas.",
        c: "Las dos versiones de modelos están previstas y se suman a las obligaciones anteriores.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La entidad puede separar los modelos en euskera y castellano por razones de extensión o complejidad, advirtiendo siempre de la existencia de la otra versión.",
      descartes: {
        a: "La extensión es una causa válida, pero no la única.",
        b: "La complejidad también permite separar los modelos, junto con la extensión.",
        d: "El enunciado coincide con la previsión del artículo 11.6.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Los sistemas automatizados deben diseñarse para garantizar que las personas interesadas puedan elegir lengua oficial.",
      descartes: {
        b: "El orden legal coloca primero el euskera y después el castellano, no al revés.",
        c: "La opción B altera la prioridad lingüística, por lo que no pueden ser correctas ambas.",
        d: "La garantía de elección descrita en A aparece expresamente en el artículo 11.7.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La documentación puede consultarse en su lengua original tanto dentro de procedimientos concretos como al ejercer el derecho de acceso a la información pública.",
      descartes: {
        a: "La consulta por personas interesadas está contemplada, pero también el supuesto de acceso público de B.",
        b: "El derecho de acceso permite consultar el original, junto con la consulta en procedimientos concretos.",
        d: "Los dos escenarios figuran en el artículo 11.8.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Se conserva la opción B: el artículo 11.9 impulsa que las escrituras públicas y su inscripción registral se realicen al menos en euskera.",
      descartes: {
        a: "El artículo 11.8 también ordena impulsar la normalización del euskera en la publicidad activa.",
        c: "La teoría respalda tanto la publicidad activa como las escrituras y registros, por lo que esta combinación describe mejor el contenido completo.",
        d: "Existen dos previsiones expresas de impulso del euskera.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La teoría respalda conjuntamente dos alternativas",
        texto: "Los apartados 8 y 9 del artículo 11 confirman las opciones A y B; por ello la teoría apunta a C, aunque se conserva la respuesta B registrada.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Euskera y castellano son lenguas oficiales de trabajo, ambas tienen plena validez interna y la planificación debe normalizar el uso laboral del euskera.",
      descartes: {
        a: "La cooficialidad laboral es cierta, pero se completa con la validez y la planificación indicadas.",
        b: "La plena validez de ambas lenguas es correcta, junto con las demás reglas.",
        c: "El objetivo de normalizar el euskera forma parte del mismo apartado y no excluye A ni B.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Los arnasgunes pueden ser zonas geográficas o sociofuncionales con más del 80 % de población euskaldun y uso social normal del euskera.",
      descartes: {
        a: "La capacitación interna se impulsa en toda la entidad, con atención particular —no exclusiva— a los arnasgunes.",
        b: "El umbral es superior al 80 %, no al 60 %.",
        d: "Las opciones A y B contienen límites que no figuran en la norma.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Las actuaciones internas que no requieren notificación ni publicación pueden realizarse y redactarse también en euskera conforme a los criterios de cada entidad.",
      descartes: {
        b: "El precepto destaca la posibilidad de usar también el euskera, no formula esta regla específica respecto del castellano.",
        c: "La pregunta reproduce una medida de normalización dirigida al euskera, por lo que no combina ambas alternativas.",
        d: "La opción A está prevista expresamente en el artículo 12.1.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Cada entidad determina en sus propios Criterios de Uso la lengua normal de comunicación con las demás entidades del sector público vasco.",
      descartes: {
        b: "La regla no remite a unos criterios únicos de las instituciones comunes, sino a los de cada entidad.",
        c: "Solo la opción A identifica el instrumento competente.",
        d: "El artículo 12.1 contiene una remisión expresa a los criterios de cada entidad.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Una sesión colegiada puede desarrollarse en euskera cuando todas las personas intervinientes sean vascohablantes.",
      descartes: {
        a: "La norma lo permite bajo determinadas condiciones, pero no lo impone en toda sesión.",
        b: "La mera mayoría no basta para aplicar esta regla general.",
        d: "La opción C coincide literalmente con el artículo 12.2.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "La reunión puede celebrarse principalmente en euskera si todas las personas comprenden esa lengua, aunque alguna no pueda expresarse con facilidad en ella.",
      descartes: {
        a: "Si alguna persona tampoco comprende el euskera, falta la condición común de comprensión.",
        c: "La norma se refiere a que no todas puedan expresarse, no a una mayoría incapaz.",
        d: "La opción B reproduce las condiciones previstas.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Se conserva la opción B porque las entidades deben promover la capacitación de las personas electas en ambas lenguas.",
      descartes: {
        a: "El verbo empleado para la capacitación es «promover», no garantizar un resultado formativo.",
        c: "La teoría también garantiza a las personas electas la posibilidad de realizar cursos de aprendizaje y perfeccionamiento.",
        d: "La teoría respalda conjuntamente B y C, aunque la solución almacenada selecciona solo B.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La teoría respalda conjuntamente dos alternativas",
        texto: "El artículo 12.2 ordena promover la capacitación y garantizar la posibilidad de realizar cursos; por ello apunta a la opción D, aunque se conserva B como respuesta registrada.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "En las sesiones públicas la ciudadanía puede utilizar cualquiera de las lenguas oficiales sin asumir la traducción a la otra.",
      descartes: {
        b: "No puede exigirse a la ciudadanía traducir o explicar su intervención en la lengua no elegida.",
        c: "Si hace falta traducción, corresponde a la entidad y no a la persona interviniente.",
        d: "Las opciones B y C contradicen la garantía lingüística.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Las entidades deben combinar un uso racional de traducción e interpretación con el fomento de nuevas tecnologías de traducción automática.",
      descartes: {
        a: "La racionalización es correcta, pero se acompaña de la medida tecnológica de B.",
        b: "El fomento tecnológico también es obligatorio, junto con el uso racional de recursos.",
        d: "Ambas medidas aparecen en el artículo 12.3.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "El software específico debe poder utilizarse en euskera sin perjuicio de que también funcione en castellano.",
      descartes: {
        a: "La disponibilidad en euskera es necesaria, pero no excluye el castellano.",
        b: "El castellano puede utilizarse, junto con la adaptación obligatoria al euskera.",
        d: "Las dos lenguas están contempladas para el software de la entidad.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "Las necesidades de funcionamiento en euskera y castellano deben considerarse desde la fase de concepción del programa.",
      descartes: {
        b: "Evitar desarrollar primero en castellano es una pauta «en la medida de lo posible», no una prohibición absoluta en todo caso.",
        c: "La norma ordena adaptar las aplicaciones al derecho de opción lingüística sin introducir el límite formulado en esta alternativa.",
      },
    },
    {
      preguntaId: 18,
      justificacion: "La web general debe consultarse en ambas lenguas; los contenidos no generales pueden mantenerse en el original y el acceso inicial debe abrir por defecto la versión en euskera.",
      descartes: {
        a: "La consulta bilingüe es correcta, pero se completa con las reglas B y C.",
        b: "Mantener la lengua original es posible para contenidos no dirigidos a informar con carácter general.",
        c: "La página inicial en euskera con enlaces a otras lenguas también es una exigencia expresa.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-08-normalizacion-linguistica",
  references: referencesFromQuestionRanges([
    { from: 1, to: 6, reference: articleReference(11) },
    { from: 7, to: 18, reference: articleReference(12) },
  ]),
});
