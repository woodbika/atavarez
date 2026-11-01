import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-normalizacion-linguistica-articulos-13-a-16",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La ejecución contractual debe preservar tanto la regulación de cooficialidad como los derechos lingüísticos de la ciudadanía; ambos límites encabezan el artículo 13.",
      descartes: {
        a: "La regulación de oficialidad debe respetarse, junto con los derechos lingüísticos indicados en B.",
        b: "La protección de los derechos ciudadanos es necesaria, sin desplazar el cumplimiento normativo de A.",
        d: "Las dos primeras afirmaciones están expresamente recogidas.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Las cláusulas deben asegurar que el objeto contractual cumpla la normativa de normalización lingüística que resulte aplicable.",
      descartes: {
        b: "El plan de atención lingüística solo se exige cuando la prestación se dirige o relaciona directamente con la ciudadanía, no en todos los contratos.",
        c: "La opción B generaliza una condición reservada a determinados procedimientos.",
        d: "La opción A reproduce una condición general del artículo 13.1.a.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Los pliegos administrativos y técnicos deben publicarse en las dos lenguas oficiales, con una excepción para documentos gráficos o técnicos.",
      descartes: {
        b: "La publicación ordinaria no puede limitarse a una sola lengua oficial.",
        c: "La ubicación en un arnasgune no sustituye la regla bilingüe de los pliegos.",
        d: "El artículo 13.2 regula expresamente la lengua de publicación.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Los estudios e informes pueden exigirse en ambas lenguas, salvo que la finalidad del contrato justifique una única lengua oficial.",
      descartes: {
        a: "La redacción bilingüe es posible, pero admite la excepción descrita en B.",
        b: "La finalidad puede justificar una sola lengua, dentro de la regla general de A.",
        d: "Las dos posibilidades están previstas en el artículo 13.3.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Según el objeto del convenio pueden incorporarse cláusulas de fomento del euskera y protección de derechos lingüísticos.",
      descartes: {
        a: "Los convenios pueden celebrarse con entidades públicas y también privadas.",
        b: "Deben redactarse al menos en euskera, no necesariamente en ambas lenguas.",
        d: "Las opciones A y B restringen o amplían indebidamente las reglas del artículo 14.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Los criterios de valoración lingüística proceden cuando guardan relación con la relevancia del euskera en la actividad subvencionada.",
      descartes: {
        a: "El fomento no se aplica indiscriminadamente a toda subvención, sino cuando la lengua sea relevante para su objeto.",
        c: "En las comunicaciones y publicaciones debe destacarse el euskera, no el castellano.",
        d: "Solo la opción B conserva las condiciones y la lengua previstas por el artículo 15.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Se conserva B: si la documentación en euskera se dirige fuera de Euskadi y de otros territorios donde sea oficial, debe remitirse también en castellano como traducción del original.",
      descartes: {
        a: "La teoría también establece que la documentación dirigida a territorios donde el euskera es oficial se curse al menos en euskera.",
        c: "Cuando la entidad receptora ha elegido relacionarse en euskera, la documentación se cursa en esa lengua, no necesariamente en bilingüe.",
        d: "La opción C contradice el artículo 16.2, por lo que no todas resultan válidas.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La teoría admite otra opción además de la solución registrada",
        texto: "El artículo 16 respalda la respuesta B y también la regla sustantiva de A, que resume el envío al menos en euskera dentro de su ámbito oficial. Se conserva B como solución registrada.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La respuesta en euskera, el impulso de su uso público y su presencia mínima en actos y comparecencias son tres medidas previstas para las relaciones institucionales.",
      descartes: {
        a: "Responder en euskera a escritos en esa lengua es correcto, junto con B y C.",
        b: "La comunicación institucional debe incentivar el euskera y se completa con las demás medidas.",
        c: "Los actos y comparecencias se realizan al menos en euskera, sin excluir las reglas anteriores.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-08-normalizacion-linguistica",
  references: referencesFromQuestionRanges([
    { from: 1, to: 4, reference: articleReference(13) },
    { from: 5, reference: articleReference(14) },
    { from: 6, reference: articleReference(15) },
    { from: 7, to: 8, reference: articleReference(16) },
  ]),
});
