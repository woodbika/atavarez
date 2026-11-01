import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-normalizacion-linguistica-articulos-22-a-25",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El perfil lingüístico determina los niveles de competencia en euskera necesarios para proveer y desempeñar cada puesto de trabajo.",
      descartes: {
        b: "Cada puesto debe tener un perfil asignado; la fecha de preceptividad se añade cuando corresponda.",
        c: "El instrumento previsto para hacer constar el perfil es la relación de puestos de trabajo, que tiene un alcance distinto de la plantilla.",
        d: "Las opciones B y C modifican elementos esenciales de la regulación.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El perfil reúne capacidades de un nivel comunicativo y se valora mediante cuatro destrezas: dos receptivas y dos productivas. Por eso son correctas las tres afirmaciones.",
      descartes: {
        a: "La definición es correcta, pero se completa con las características recogidas en B y C.",
        b: "La evaluación mediante cuatro destrezas es correcta y no excluye las demás afirmaciones.",
        c: "La distribución entre destrezas receptivas y productivas también es correcta, junto con A y B.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La asignación atiende tanto a las necesidades comunicativas del puesto como a las destrezas exigibles para cumplir sus funciones y tareas.",
      descartes: {
        a: "Las características comunicativas son relevantes, pero no constituyen el único criterio.",
        b: "Las destrezas exigibles también cuentan, junto con las necesidades descritas en A.",
        d: "Los dos criterios aparecen expresamente en el artículo 22.3.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Los niveles deben ajustarse al Marco Común Europeo conforme a lo establecido por la persona titular del departamento competente en euskaldunización de personas adultas.",
      descartes: {
        a: "El artículo no atribuye esta concreción al Parlamento Vasco.",
        b: "Tampoco la reserva al Consejo de Gobierno.",
        d: "La opción C identifica expresamente el órgano competente.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El perfil es simétrico cuando el puesto exige el mismo nivel en expresión y comprensión, tanto escrita como oral.",
      descartes: {
        b: "La igualdad solo en las destrezas de expresión no basta para que el perfil sea simétrico.",
        c: "Tampoco basta con que coincida únicamente el nivel de comprensión.",
        d: "El artículo 22.6 regula expresamente los perfiles simétricos.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La exención de las destrezas que no puedan evaluarse requiere el informe del órgano competente en valoración y diagnóstico de discapacidad.",
      descartes: {
        b: "El departamento de euskaldunización de personas adultas no valora la discapacidad a estos efectos.",
        c: "La competencia tampoco corresponde al departamento de normalización lingüística.",
        d: "La opción A reproduce el órgano exigido por el artículo 22.8.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Acreditar el perfil correspondiente permite reconocer la capacitación necesaria para desempeñar en euskera las funciones del puesto.",
      descartes: {
        b: "Vencida la fecha de preceptividad, el perfil es una exigencia obligatoria, no un mérito preferente.",
        c: "Ese deber puede fijarse en los Criterios de Uso de las Lenguas Oficiales, no en los planes estratégicos.",
        d: "Las opciones B y C alteran la regulación del artículo 23.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El personal con discapacidad tiene derecho a una formación en euskera adaptada, accesible, adecuada e inclusiva.",
      descartes: {
        a: "La formación en euskera se configura como un derecho, no como un deber de todo el personal.",
        b: "Las medidas corresponden al área responsable de la formación del personal, no a un área denominada de euskaldunización.",
        d: "Las imprecisiones de A y B impiden considerar correctas todas las respuestas.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "La formación en euskera puede exigirse en puestos cuyos perfiles incluyan destrezas escritas de nivel C1 o C2 y cuya fecha de preceptividad haya vencido.",
      descartes: {
        a: "El supuesto se refiere a destrezas escritas, no a las orales.",
        c: "La opción A no coincide con la condición prevista por el artículo 23.4.",
        d: "La opción B reproduce el ámbito concreto de esta medida.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Con carácter general, al vencer la fecha de preceptividad el perfil se convierte en requisito indispensable, sin perjuicio de las excepciones previstas en el decreto.",
      descartes: {
        a: "La expresión «en todo caso» ignora las excepciones que contempla la propia norma.",
        c: "La exigencia es la regla general, no una situación excepcional.",
        d: "No queda limitada a las unidades administrativas en euskera.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La fecha es única, afecta al perfil completo incluso si es asimétrico y, una vez vencida, obliga a actuar conforme a los Criterios de Uso. Las tres afirmaciones son correctas.",
      descartes: {
        a: "La unicidad es correcta, pero no excluye las reglas recogidas en B y C.",
        b: "La vinculación al conjunto del perfil también es correcta y se combina con las otras dos afirmaciones.",
        c: "El deber de seguir los Criterios de Uso es correcto, junto con A y B.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Las fechas se fijan al aprobar el plan estratégico de cada período y, excepcionalmente, cuando cambian las dotaciones y resulta necesario adecuarlas al índice de obligado cumplimiento.",
      descartes: {
        a: "La regla general es correcta, pero existe además el supuesto excepcional de B.",
        b: "La modificación de dotaciones también permite fijarlas de manera excepcional y complementa la regla general.",
        d: "Ambos supuestos aparecen expresamente en el artículo 24.4.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "El índice de obligado cumplimiento se calcula sumando el porcentaje de euskaldunes y la mitad del porcentaje de cuasi euskaldunes.",
      descartes: {
        a: "El índice determina los puestos que deben tener un perfil preceptivo; la opción omite ese carácter obligatorio.",
        c: "Se emplean los últimos datos oficiales disponibles del censo o estadística correspondiente; no una estadística anual del INE en los términos indicados.",
        d: "Las unidades desconcentradas con ámbito más limitado aplican el índice de su propio ámbito territorial específico.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-08-normalizacion-linguistica",
  references: referencesFromQuestionRanges([
    { from: 1, to: 6, reference: articleReference(22) },
    { from: 7, to: 9, reference: articleReference(23) },
    { from: 10, to: 12, reference: articleReference(24) },
    { from: 13, reference: articleReference(25) },
  ]),
});
