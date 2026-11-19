import { blockReference, defineExplanationSet, EXPLANATION_REFERENCE_SCOPES } from "../../explanation-schema.js";

const contextualReference = blockReference(
  "capitulo-iii-derechos-obligaciones",
  "Derechos y obligaciones preventivas (artículos 14 a 29)",
  { scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL },
);

const explanations = {
  testId: "test-ley-31-1995-comite-seguridad-salud",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La teoría aportada no contiene las facultades frente a la Inspección de Trabajo. Se conserva contextualmente que pueden recurrir tanto los trabajadores como sus representantes.",
      descartes: { a: "La plantilla puede acudir a la Inspección, sin excluir la iniciativa representativa.", b: "Los representantes también pueden recurrir y comparten esta facultad con los trabajadores." },
    },
    {
      preguntaId: 2,
      justificacion: "La ficha no reproduce el protocolo de una visita inspectora. La solución contextual mantiene la comunicación al empresario y persona inspeccionada, y también a los órganos preventivos o representantes.",
      descartes: { a: "La dirección y la persona inspeccionada deben ser informadas, junto con los sujetos de B.", b: "Comité, delegado o representación legal también reciben la comunicación en el orden previsto." },
    },
    {
      preguntaId: 3,
      justificacion: "El material teórico no detalla los destinatarios del resultado inspector. Según la solución contextual, se informa a los Delegados de Prevención y al empresario.",
      descartes: { a: "Los delegados reciben información sobre resultados y medidas, pero no son los únicos destinatarios.", b: "El empresario también debe ser informado y no desplaza a la representación preventiva." },
    },
    {
      preguntaId: 4,
      justificacion: "La ficha disponible no contiene la planificación de la Inspección. Se mantiene contextualmente la consulta previa a organizaciones representativas para todos sus planes de actuación.",
      descartes: { b: "La consulta no se limita a programas de empresas con menos de seis personas.", c: "Tampoco queda restringida a programas para plantillas superiores a seis." },
    },
    {
      preguntaId: 5,
      justificacion: "La teoría no desarrolla las facultades del Comité. La batería conserva contextualmente su acceso a documentos e informes sobre condiciones de trabajo y actividad del servicio de prevención.",
      descartes: { a: "El Comité conoce e informa sobre la memoria del servicio, pero la opción le atribuye su aprobación.", b: "Puede conocer directamente la situación preventiva; no necesita hacerlo únicamente a través de los delegados." },
    },
    {
      preguntaId: 6,
      justificacion: "El bloque teórico no recoge la coordinación entre comités de distintas empresas. Se conserva contextualmente la posibilidad de reuniones conjuntas de comités o, en su defecto, de delegados y empresarios.",
      descartes: { a: "Las reuniones entre comités son posibles y se complementan con la alternativa subsidiaria de B.", b: "En ausencia de comités pueden reunirse delegados y empresarios, sin excluir el supuesto principal." },
    },
    {
      preguntaId: 7,
      justificacion: "La ficha no concreta composición y funcionamiento del Comité. Se mantiene contextualmente la participación de responsables técnicos con voz y sin voto.",
      descartes: { a: "La composición paritaria se establece con Delegados de Prevención, no con Delegados Sindicales.", c: "La reunión ordinaria es trimestral, no mensual, además de las convocadas a solicitud de una representación." },
    },
    {
      preguntaId: 8,
      justificacion: "El material disponible no reproduce la definición y el umbral del Comité. Se conserva la constitución obligatoria en empresas o centros con cincuenta o más trabajadores.",
      descartes: { a: "La ley lo define como órgano paritario y colegiado; «equilibrado» no es el término normativo empleado.", c: "La imprecisión conceptual de A impide considerar válidas ambas alternativas." },
    },
    {
      preguntaId: 9,
      justificacion: "La teoría local no detalla estas facultades del Comité. La solución contextual mantiene que conoce y analiza los daños para valorar causas y proponer medidas.",
      descartes: { a: "Conocer los daños es una facultad y se completa con el análisis preventivo de B.", b: "El análisis causal y las propuestas también corresponden al Comité, junto con el conocimiento previo." },
    },
    {
      preguntaId: 10,
      justificacion: "La ficha no contiene el catálogo de competencias del Comité. Se conservan contextualmente su participación en planes y programas y la promoción de iniciativas preventivas.",
      descartes: { a: "Participar en elaboración, aplicación y evaluación es una competencia, junto con la iniciativa de B.", b: "Proponer mejoras y corregir deficiencias también corresponde al Comité y complementa A." },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-11-gobierno-vasco",
  referenceForQuestion: () => contextualReference,
});
