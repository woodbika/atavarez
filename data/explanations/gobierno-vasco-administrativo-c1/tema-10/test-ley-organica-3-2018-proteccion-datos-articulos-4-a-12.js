import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-organica-3-2018-proteccion-datos-articulos-4-a-12",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La inexactitud no se imputa al responsable si adoptó medidas razonables para rectificar o suprimir sin dilación y obtuvo los datos directamente de la persona afectada.",
      descartes: {
        b: "La limitación del tratamiento no figura entre los orígenes que exoneran de responsabilidad por inexactitud.",
        c: "La alternativa B introduce un supuesto distinto de los enumerados en el artículo 4.2.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "También opera la exoneración cuando los datos proceden de un mediador o intermediario cuya intervención está prevista por las normas del sector y se adoptan las medidas correctoras exigidas.",
      descartes: {
        a: "La ley menciona datos obtenidos de un registro público, no de cualquier fuente accesible al público.",
        c: "La amplitud de la opción A impide considerar válidas las dos alternativas.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Quienes intervienen en el tratamiento están sujetos al deber de confidencialidad y, cuando corresponda, al deber profesional de secreto que lo complementa.",
      descartes: {
        a: "El artículo configura la confidencialidad como obligación general y el secreto profesional como complemento, no al contrario.",
        c: "La opción B recoge los dos deberes y la relación establecida entre ellos.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La confidencialidad y el secreto profesional subsisten aunque haya terminado la relación con el responsable o el encargado.",
      descartes: {
        a: "La obligación no finaliza al extinguirse la relación profesional.",
        c: "El artículo 5.3 respalda expresamente la permanencia indicada en B.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El consentimiento debe ser libre, específico, informado e inequívoco; un consentimiento «general» no satisface la exigencia de especificidad.",
      descartes: {
        a: "La libertad sí es una característica necesaria del consentimiento.",
        b: "La persona también debe prestar el consentimiento de forma informada.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La aceptación inequívoca puede exteriorizarse mediante una declaración o mediante una acción afirmativa clara.",
      descartes: {
        a: "La declaración es una vía válida, pero comparte esta función con la acción afirmativa de B.",
        b: "La acción afirmativa también acredita la voluntad, sin excluir la declaración expresa.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El artículo exige identificar específicamente el consentimiento para cada finalidad y prohíbe condicionar el contrato a finalidades ajenas a la relación contractual. Ambas reglas son aplicables.",
      descartes: {
        a: "La prohibición contractual es correcta, aunque no agota las condiciones del consentimiento reguladas en el artículo.",
        b: "La especificación de todas las finalidades también es obligatoria y se suma a la regla contractual.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El menor puede fundar el tratamiento en su propio consentimiento cuando es mayor de catorce años.",
      descartes: {
        a: "La ley no sitúa el umbral general por encima de los doce años.",
        c: "El límite establecido es catorce años, no dieciséis.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El consentimiento del menor no basta cuando el acto o negocio jurídico exige la asistencia de quienes ejercen la patria potestad o tutela.",
      descartes: {
        b: "Si el negocio no requiere esa asistencia, no concurre la excepción descrita por el artículo 7.1.",
        c: "La opción A reproduce el supuesto exceptuado por la ley.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Una obligación legal puede legitimar el tratamiento si está prevista por una norma de la Unión Europea o por una norma con rango de ley.",
      descartes: {
        a: "La norma europea es una base válida, junto con la norma legal contemplada en B.",
        b: "La norma con rango de ley también legitima el tratamiento y no excluye la fuente europea.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La norma habilitante puede fijar condiciones generales, tipos de datos y cesiones, y también imponer condiciones especiales como medidas adicionales de seguridad.",
      descartes: {
        a: "Los elementos generales están previstos, pero pueden completarse con las condiciones especiales de B.",
        b: "Las medidas especiales también son posibles y se añaden al contenido general de la norma.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "El consentimiento por sí solo no levanta la prohibición cuando la finalidad principal es identificar ideología, afiliación sindical, religión, orientación sexual, creencias u origen racial o étnico.",
      descartes: {
        a: "La insuficiencia del consentimiento no se establece para toda categoría especial y en cualquier circunstancia, sino para la finalidad delimitada por el artículo 9.1.",
        c: "La ley niega expresamente que el consentimiento baste en ese supuesto de identificación.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Fuera de los fines penales enumerados, el tratamiento de estos datos requiere amparo en el Derecho de la Unión, en la propia ley orgánica o en otra norma con rango legal.",
      descartes: {
        b: "La supervisión de una autoridad pública no sustituye por sí sola la habilitación normativa exigida para este tratamiento.",
        c: "La intervención de abogados y procuradores es un supuesto específico del apartado 3, no la regla formulada en la pregunta.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Se conserva la solución B registrada, aunque el artículo 10.2 formula la regla de otro modo: el registro completo puede realizarse conforme a la regulación del Sistema de registros administrativos de apoyo a la Administración de Justicia.",
      descartes: {
        a: "La habilitación normativa de la opción A se refiere al tratamiento para fines distintos de los penales, no específicamente al registro completo.",
        c: "Abogados y procuradores pueden tratar datos facilitados por sus clientes en el supuesto del apartado 3, pero no forman junto a las autoridades el régimen del registro completo.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no reproduce la regla de la teoría",
        texto: "El artículo 10.2 no define el registro completo mediante la supervisión genérica de autoridades públicas, sino por remisión a la regulación del Sistema de registros administrativos de apoyo a la Administración de Justicia. Se mantiene la opción B registrada.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Ninguna de las dos fórmulas describe el sistema completo: se facilita primero la información básica y se indica un medio para acceder a la información restante.",
      descartes: {
        a: "La dirección electrónica da acceso a la información restante, no a la información básica que ya debe facilitarse.",
        b: "La ley distingue la información básica ya entregada de la restante; por eso no presenta el enlace como acceso inicial a toda la información.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "Cuando los datos se obtienen de la persona afectada, la información básica incluye la identidad del responsable y la posibilidad de ejercer derechos, pero no exige indicar la categoría de datos.",
      descartes: {
        a: "La identidad del responsable y, en su caso, de su representante forma parte del contenido mínimo.",
        c: "La posibilidad de ejercer los derechos de los artículos 15 a 22 del Reglamento también debe comunicarse.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "Si se elaboran perfiles, la información básica debe advertirlo e informar del derecho de oposición frente a determinadas decisiones individuales automatizadas.",
      descartes: {
        a: "La elaboración de perfiles debe comunicarse, junto con la información adicional de B.",
        b: "El derecho de oposición también debe explicarse cuando concurren los presupuestos reglamentarios.",
      },
    },
    {
      preguntaId: 18,
      justificacion: "Cuando los datos no proceden de la persona afectada, la información básica añade tanto sus categorías como las fuentes de procedencia.",
      descartes: {
        a: "Las categorías deben indicarse, pero no son el único dato adicional.",
        b: "También deben comunicarse las fuentes, junto con las categorías mencionadas en A.",
      },
    },
    {
      preguntaId: 19,
      justificacion: "No puede denegarse un derecho por el único motivo de que la persona elija un medio distinto; por eso la afirmación C es la que no resulta correcta.",
      descartes: {
        a: "Los derechos pueden ejercerse directamente o mediante representación legal o voluntaria.",
        b: "El responsable tiene el deber de informar sobre los medios disponibles para ejercerlos.",
      },
    },
    {
      preguntaId: 20,
      justificacion: "El encargado puede tramitar por cuenta del responsable las solicitudes de derechos cuando así se haya previsto en el contrato o acto jurídico que los vincula.",
      descartes: {
        a: "El responsable conserva sus obligaciones, pero la facultad condicionada que pregunta el enunciado se atribuye al encargado.",
        c: "La previsión contractual del artículo 12.3 identifica específicamente al encargado, no a ambos sujetos indistintamente.",
      },
    },
    {
      preguntaId: 21,
      justificacion: "Corresponde al responsable probar que cumplió el deber de responder a la solicitud de ejercicio de derechos.",
      descartes: {
        b: "La posible tramitación por el encargado no traslada a este la carga probatoria establecida en el artículo 12.4.",
        c: "La persona afectada formula la solicitud, pero no debe probar que el responsable la atendió.",
      },
    },
    {
      preguntaId: 22,
      justificacion: "Se conserva la solución C registrada, interpretándola como referencia a menores de catorce años, que es el grupo al que el artículo permite representar en el ejercicio de estos derechos.",
      descartes: {
        a: "La expresión «menores de edad» abarcaría también edades a partir de catorce años y excede el límite legal.",
        b: "El artículo no fija el umbral representativo en los dieciséis años.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La opción registrada presenta una redacción ambigua",
        texto: "La teoría habla de «menores de catorce años», mientras la opción C dice «de 14 años», expresión que puede entenderse como personas que ya tienen esa edad. Se conserva la opción C registrada con el sentido de menores de catorce.",
      },
    },
    {
      preguntaId: 23,
      justificacion: "La atención de estas solicitudes es gratuita con carácter general, aunque el artículo conserva las excepciones previstas por el Reglamento y la propia ley.",
      descartes: {
        a: "La gratuidad no opera «en todo caso» porque el precepto remite expresamente a varias excepciones.",
        c: "La gratuidad constituye la regla, no una medida excepcional.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-10-gobierno-vasco",
  references: referencesFromQuestionRanges([
    { from: 1, to: 2, reference: articleReference(4) },
    { from: 3, to: 4, reference: articleReference(5) },
    { from: 5, to: 7, reference: articleReference(6) },
    { from: 8, to: 9, reference: articleReference(7) },
    { from: 10, to: 11, reference: articleReference(8) },
    { from: 12, reference: articleReference(9) },
    { from: 13, to: 14, reference: articleReference(10) },
    { from: 15, to: 18, reference: articleReference(11) },
    { from: 19, to: 23, reference: articleReference(12) },
  ]),
});
