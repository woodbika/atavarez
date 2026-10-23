import {
  articleReference,
  defineExplanationSet,
  referencesFromQuestionRanges,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-40-2015-funcionamiento-electronico-sector-publico-articulos-38-a-46",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La sede electrónica puede pertenecer a una Administración Pública o a uno o varios organismos públicos o entidades de Derecho Público. La opción B recoge uno de esos titulares admitidos.",
      descartes: {
        a: "La Administración Pública también puede ser titular, pero no de forma exclusiva como afirma esta alternativa.",
        c: "El artículo 38 menciona entidades de Derecho Público, no entidades públicas sometidas al Derecho privado.",
        d: "Sí existe una respuesta válida: los organismos públicos y las entidades de Derecho Público pueden ser titulares de una sede electrónica.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El artículo 38.2 responsabiliza al titular de la sede de la integridad, veracidad y actualización de la información y de los servicios accesibles a través de ella. Esa es exactamente la obligación recogida en la opción A.",
      descartes: {
        b: "Determinar las condiciones e instrumentos de creación corresponde a cada Administración Pública; el precepto no lo presenta como responsabilidad general de cualquier titular.",
        c: "Las dos alternativas no son correctas: la opción B atribuye al titular una función que el artículo 38.3 reserva a cada Administración Pública.",
        d: "La teoría sí contiene una regla aplicable: la responsabilidad sobre la integridad, veracidad y actualización.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Se mantiene la respuesta C del test. El artículo 38.3 exige los principios enumerados en la opción A e identificar al órgano titular, pero denomina el segundo cauce «sugerencias y quejas», no «sugerencias y reclamaciones».",
      descartes: {
        a: "La relación de principios coincide sustancialmente con la teoría y constituye una exigencia de creación de la sede.",
        b: "La identificación del órgano titular sí es obligatoria, pero la opción sustituye las «quejas» del precepto por «reclamaciones».",
        d: "El artículo establece requisitos expresos para crear una sede electrónica, por lo que no puede afirmarse que ninguna alternativa sea correcta.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide plenamente con la teoría",
        texto: "La opción B no reproduce con precisión el artículo 38.3: la norma exige medios para formular «sugerencias y quejas», mientras el test indica «sugerencias y reclamaciones». Por ello la teoría respalda la opción A, aunque se conserva la respuesta C registrada.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La publicación electrónica debe respetar la accesibilidad y el uso mediante estándares abiertos y, cuando proceda, otros de uso generalizado por la ciudadanía. Las dos medidas forman parte del artículo 38.5.",
      descartes: {
        a: "Los estándares abiertos son obligatorios, pero la norma contempla además los de uso generalizado cuando resulten aplicables.",
        b: "Los estándares de uso generalizado pueden emplearse, aunque con el matiz «en su caso» y junto a los estándares abiertos.",
        d: "Ambos tipos de estándares aparecen expresamente en el precepto, por lo que sí hay respuestas válidas.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El portal de internet es un punto de acceso de una Administración, organismo público o entidad de Derecho Público que permite consultar información publicada y, en su caso, acceder a la sede electrónica. Por eso las opciones A y B se complementan.",
      descartes: {
        a: "La titularidad está bien descrita, pero la definición también exige atender a la función de acceso del portal.",
        b: "La función de acceso es correcta, aunque por sí sola omite quién puede ser titular del portal.",
        d: "Las dos primeras alternativas reproducen elementos de la definición legal.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "El artículo 40 permite a las Administraciones Públicas identificarse mediante un sello electrónico basado en un certificado reconocido o cualificado. Se trata de una posibilidad, no de una obligación general.",
      descartes: {
        b: "El precepto utiliza «podrán» y no impone la identificación obligatoria formulada en esta opción.",
        c: "La regla específica de identificación administrativa se refiere al sello electrónico, no a una firma electrónica genérica.",
        d: "Además de convertir la facultad en deber, esta alternativa sustituye el sello previsto legalmente por una firma electrónica.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El NIF y la denominación deben figurar en el certificado. La identidad de la persona titular solo se incluye, en su caso, cuando se trate de sellos de órganos administrativos; por tanto, no es un contenido obligatorio en todos ellos.",
      descartes: {
        a: "El número de identificación fiscal aparece entre los datos que el certificado debe incluir.",
        b: "La denominación correspondiente también integra el contenido exigido con carácter general.",
        d: "La identidad personal está condicionada al tipo de sello, de modo que no todos los elementos son siempre obligatorios.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Cada Administración debe publicar la relación de sus sellos, con los datos de los certificados y prestadores, y adoptar medidas que permitan verificarlos. Las opciones A y B recogen deberes distintos y simultáneos.",
      descartes: {
        a: "La publicidad de los sellos es necesaria, pero no agota las obligaciones porque también debe facilitarse su verificación.",
        b: "Facilitar la verificación es obligatorio, junto con mantener pública y accesible la relación de sellos utilizados.",
        d: "El artículo 40 establece expresamente las dos actuaciones descritas.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Una actuación realizada íntegramente por medios electrónicos dentro de un procedimiento y sin intervención directa de un empleado público recibe el nombre de actuación administrativa automatizada.",
      descartes: {
        a: "«Actuación administrativa electrónica» es una expresión genérica y no la denominación definida por el artículo 41.",
        c: "La ley no utiliza «actuación administrativa telemática» para este supuesto automatizado.",
        d: "La ausencia de intervención directa de una persona no crea la categoría «actuación administrativa no personal».",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El sello electrónico basado en certificado reconocido o cualificado es uno de los sistemas admitidos para la actuación automatizada. La opción B no es válida porque sitúa la comprobación en el portal de internet en lugar de la sede electrónica.",
      descartes: {
        b: "El código seguro de verificación es admisible, pero la integridad debe poder comprobarse accediendo a la sede electrónica correspondiente.",
        c: "No pueden aceptarse ambas alternativas porque la B altera el lugar de comprobación previsto por la norma.",
        d: "La opción A reproduce uno de los sistemas enumerados en el artículo 42.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Cuando una Administración actúa por medios electrónicos, la firma puede corresponder tanto al titular del órgano como a un empleado público. El artículo 43 contempla expresamente las dos posibilidades.",
      descartes: {
        a: "El titular del órgano puede firmar, pero no es la única persona habilitada por la norma.",
        b: "El empleado público también puede hacerlo, sin excluir la firma del titular del órgano.",
        d: "Las dos primeras alternativas están previstas legalmente.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Los sistemas de firma del personal pueden identificar conjuntamente a quien ocupa el puesto o cargo y a la Administración u órgano donde presta servicio. La pertenencia administrativa forma parte, por tanto, de la identificación ordinaria.",
      descartes: {
        a: "La identificación no se limita únicamente a la persona titular del puesto o cargo; puede incorporar también la Administración u órgano.",
        c: "El número de identificación profesional se admite por razones de seguridad pública, no en todo caso.",
        d: "La opción B sí encuentra apoyo en el artículo 43.2.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Si en el entorno cerrado participan distintas Administraciones, las condiciones y garantías del intercambio deben fijarse mediante un convenio suscrito entre ellas.",
      descartes: {
        a: "Cuando todos los participantes pertenecen a una misma Administración, es esta quien determina las condiciones y garantías sin requerirse el convenio preguntado.",
        c: "El convenio se exige entre Administraciones distintas, no en los dos escenarios.",
        d: "La opción B reproduce la regla del artículo 44.3.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "La seguridad del entorno cerrado y la protección de los datos deben garantizarse en todo caso. La obligación alcanza tanto a comunicaciones internas de una Administración como a intercambios entre Administraciones distintas.",
      descartes: {
        a: "El deber existe en el ámbito de una misma Administración, pero también cuando intervienen Administraciones diferentes.",
        b: "La comunicación interadministrativa queda cubierta, sin que sea el único supuesto protegido.",
        d: "El artículo 44.4 impone expresamente esta garantía con carácter general.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "La superposición del sello se contempla cuando concurren dos circunstancias: se utiliza un sistema de firma distinto del basado en certificado reconocido o cualificado y la documentación se remite o facilita a otros sujetos públicos.",
      descartes: {
        a: "El uso de otro sistema de firma es necesario, pero la regla se activa en el contexto de remisión o puesta a disposición de la documentación.",
        b: "El envío a otros órganos o Administraciones no basta por sí solo; también debe emplearse un sistema de firma distinto del certificado indicado.",
        d: "Las circunstancias de A y B, consideradas conjuntamente, están previstas en el artículo 45.2.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "Los soportes de archivo deben incorporar medidas acordes con el Esquema Nacional de Seguridad que garanticen integridad, autenticidad, confidencialidad, calidad, protección y conservación. La opción C reproduce esa exigencia.",
      descartes: {
        a: "La regla es almacenar electrónicamente todos los documentos salvo que no sea posible, no solo cuando se ordene expresamente.",
        b: "Los documentos electrónicos con actos que afecten a derechos o intereses deberán conservarse en soportes electrónicos; no es una mera posibilidad.",
        d: "Las opciones A y B cambian obligaciones legales, por lo que no pueden considerarse correctas todas las alternativas.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-07-administracion-electronica",
  references: referencesFromQuestionRanges([
    { from: 1, to: 4, reference: articleReference(38) },
    { from: 5, reference: articleReference(39) },
    { from: 6, to: 8, reference: articleReference(40) },
    { from: 9, reference: articleReference(41) },
    { from: 10, reference: articleReference(42) },
    { from: 11, to: 12, reference: articleReference(43) },
    { from: 13, to: 14, reference: articleReference(44) },
    { from: 15, reference: articleReference(45) },
    { from: 16, reference: articleReference(46) },
  ]),
});
