import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-112-y-113",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Si un plan suprime el puesto, la reasignación alcanza tanto al personal funcionario de carrera como al laboral fijo, pues ambos mantienen una relación estable con la administración.",
      descartes: {
        a: "El personal funcionario de carrera está incluido, pero la protección se extiende también al laboral fijo.",
        b: "El personal laboral fijo también debe recibir otro puesto, sin excluir al colectivo de la opción A.",
        d: "Las dos clases de personal aparecen expresamente en el artículo 112.1.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El puesto obtenido mediante reasignación se ocupa con carácter definitivo, aunque el procedimiento general pueda contemplar otras reasignaciones temporales por necesidades organizativas.",
      descartes: {
        a: "La consecuencia inmediata de la supresión regulada en el apartado 1 no es una adscripción provisional.",
        c: "La forma de provisión del puesto eliminado no transforma en provisional el nuevo destino asignado.",
        d: "El carácter definitivo lo fija la ley y no queda a la elección de cada resolución.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La reasignación compensa el cambio de residencia, debe seguir criterios objetivos de experiencia, formación y cualificación y puede articularse temporalmente según las necesidades. Las tres reglas son compatibles.",
      descartes: {
        a: "La indemnización es una garantía cierta, pero no agota el contenido organizativo del artículo 112.",
        b: "El procedimiento objetivo también es obligatorio y convive con las previsiones A y C.",
        c: "La ley admite una reasignación temporal, sin eliminar las garantías de las otras opciones.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La redistribución nace de un plan o medida puntual, la impulsa el órgano de empleo público y puede afectar a personal de carrera o laboral fijo en puestos no singularizados.",
      descartes: {
        a: "El origen en una medida de ordenación es correcto, pero debe completarse con iniciativa y ámbito personal.",
        b: "La iniciativa corresponde al órgano indicado, junto con las condiciones descritas en A y C.",
        c: "El personal y los puestos afectados están bien delimitados, sin excluir las otras dos reglas.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Antes del traslado se oye a la persona, debe existir una necesidad de servicio u optimización y el destino ha de ser una vacante similar. Son garantías acumulativas.",
      descartes: {
        a: "La audiencia es necesaria, pero no basta sin causa organizativa y equivalencia del destino.",
        b: "La finalidad de servicio justifica la medida y se somete a las otras garantías.",
        c: "La similitud del puesto protege el contenido profesional, junto con audiencia y motivación funcional.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La similitud exige funciones equivalentes. Además, la ley compara el sistema de provisión —no el grado profesional— y limita la diferencia retributiva al 10 %, no al 20 %.",
      descartes: {
        b: "El criterio es la semejanza en la provisión de ambos puestos; el grado profesional no sustituye esa comparación.",
        c: "El margen permitido es de un 10 % por arriba o por abajo, de modo que el 20 % duplica el límite.",
        d: "Solo A supera el contraste con la definición legal de puesto similar.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Modificar el lugar de trabajo por redistribución da derecho a las indemnizaciones previstas, aunque no siempre suponga cambiar de municipio.",
      descartes: {
        a: "El cambio de municipio exige la conformidad de la persona afectada; no basta con que nadie más se ofrezca voluntariamente.",
        c: "El nuevo puesto conserva el tipo de adscripción del anterior, no adopta automáticamente el que tuviera la vacante.",
        d: "A y C modifican dos garantías del artículo 113 y no pueden considerarse correctas.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Los dos años se cuentan desde que se obtuvo definitivamente el puesto anterior a la redistribución; el traslado no reinicia ese período.",
      descartes: {
        b: "Una adscripción provisional previa no sirve como fecha inicial para el límite de permanencia del concurso.",
        c: "Tomar el nuevo puesto como inicio perjudicaría a la persona al borrar el tiempo ya consolidado en el anterior.",
        d: "Además de mirar al destino posterior, la opción admite una provisionalidad que el artículo 113.3 no contempla.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 3 }, (_, index) => [index + 1, articleReference(112)]),
    ...Array.from({ length: 5 }, (_, index) => [index + 4, articleReference(113)]),
  ]),
});
