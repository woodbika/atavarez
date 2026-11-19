import { blockReference, defineExplanationSet, EXPLANATION_REFERENCE_SCOPES } from "../../explanation-schema.js";

const contextualReference = blockReference(
  "capitulo-iii-derechos-obligaciones",
  "Derechos y obligaciones preventivas (artículos 14 a 29)",
  { scope: EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL },
);

const explanations = {
  testId: "test-ley-31-1995-consulta-participacion-trabajadores",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La ficha confirma el derecho general de consulta, pero no contiene la enumeración posterior de decisiones consultables. Con ese límite contextual, se mantiene que el empresario consulta con antelación determinadas decisiones.",
      descartes: { a: "La consulta previa no alcanza indiscriminadamente a todas las decisiones empresariales.", c: "La participación no se canaliza siempre de forma exclusiva mediante representantes." },
    },
    {
      preguntaId: 2,
      justificacion: "El material disponible no reproduce la lista específica de consultas. La solución contextual conserva tanto la designación preventiva como la relativa a medidas de emergencia.",
      descartes: { a: "La designación preventiva es uno de los asuntos consultables, junto con el supuesto de B.", b: "La elección de responsables de emergencia también se consulta y no excluye A." },
    },
    {
      preguntaId: 3,
      justificacion: "La teoría local no detalla las decisiones del artículo posterior. Se mantiene contextualmente que debe consultarse el proyecto y la organización de la formación preventiva.",
      descartes: { b: "La alternativa sustituye la formación prevista en esta consulta concreta por la organización de la información.", c: "La diferencia entre formación e información impide aceptar ambas." },
    },
    {
      preguntaId: 4,
      justificacion: "La ficha no contiene el catálogo concreto de consultas; el test conserva con alcance contextual la planificación del trabajo y los procedimientos de información y documentación.",
      descartes: { a: "La planificación y las nuevas tecnologías se consultan por sus efectos preventivos, junto con B.", b: "Los procedimientos informativos y documentales también forman parte de la consulta." },
    },
    {
      preguntaId: 5,
      justificacion: "El marco teórico reconoce la participación, pero no concreta el umbral de plantilla. Se mantiene contextualmente su canalización representativa desde seis trabajadores.",
      descartes: { a: "La regla preguntada no se extiende en esos términos a todos los centros con independencia de plantilla.", c: "Cincuenta trabajadores es el umbral del Comité de Seguridad y Salud, no el indicado para esta participación." },
    },
    {
      preguntaId: 6,
      justificacion: "La ficha no detalla los órganos representativos competentes. Según la solución contextual del test, la defensa corresponde tanto a comités y delegados de personal como a representantes sindicales.",
      descartes: { a: "Comités y delegados intervienen, sin excluir a la representación sindical.", b: "Los representantes sindicales también participan, junto con los órganos de A." },
    },
    {
      preguntaId: 7,
      justificacion: "El material teórico no desarrolla estas facultades representativas. La batería mantiene contextualmente información, consulta y negociación, además de vigilancia, control y acciones.",
      descartes: { a: "Las facultades informativas y negociadoras son parte del conjunto, no su totalidad.", b: "Vigilancia y acciones también se reconocen y complementan A." },
    },
    {
      preguntaId: 8,
      justificacion: "La ficha no ofrece la adaptación sectorial de la participación. Se conserva como dato contextual que puede articularse en ámbitos sectoriales y descentralizados dentro de las Administraciones públicas.",
      descartes: { b: "La adaptación descrita se formula específicamente para el ámbito público, no como regla del Estatuto de los Trabajadores.", c: "La opción no se refiere al régimen particular de cooperativas con socios trabajadores." },
    },
    {
      preguntaId: 9,
      justificacion: "Aunque la teoría sitúa el derecho participativo, no detalla esta figura especializada. El test identifica contextualmente a los Delegados de Prevención.",
      descartes: { a: "Los delegados de personal son representantes generales; la función preventiva específica corresponde a otra figura.", c: "Ambas denominaciones responden a funciones distintas y no son intercambiables." },
    },
    {
      preguntaId: 10,
      justificacion: "La ficha disponible no contiene el sistema de designación. Se mantiene contextualmente que los Delegados de Prevención son designados por y entre los representantes del personal.",
      descartes: { a: "La designación parte de los representantes, pero además debe recaer entre ellos.", b: "Ser elegido entre representantes es correcto y se completa con la atribución electora de A." },
    },
    {
      preguntaId: 11,
      justificacion: "El bloque teórico no recoge la escala numérica de delegados. La solución del test conserva con alcance contextual siete Delegados de Prevención para una plantilla de 3.500 personas.",
      descartes: { a: "Seis delegados corresponden a un tramo inferior de plantilla.", c: "Ocho se reserva al tramo superior al aplicable a 3.500 trabajadores." },
    },
    {
      preguntaId: 12,
      justificacion: "La teoría local no detalla las reglas de representación por tamaño. Se mantiene contextualmente que hasta treinta trabajadores el Delegado de Personal asume la función preventiva.",
      descartes: { a: "El límite no se fija en seis trabajadores.", c: "Entre 31 y 49 se aplica una modalidad de elección distinta, tratada en la pregunta siguiente." },
    },
    {
      preguntaId: 13,
      justificacion: "La ficha no reproduce el tramo específico. Se conserva contextualmente que entre 31 y 49 trabajadores se elige un Delegado de Prevención por y entre los Delegados de Personal.",
      descartes: { a: "El tramo hasta seis no es el previsto para esta elección.", b: "Hasta treinta trabajadores la función recae directamente en el Delegado de Personal." },
    },
    {
      preguntaId: 14,
      justificacion: "El material aportado no concreta el cómputo contractual. La respuesta contextual considera fijos de plantilla a quienes tienen contratos de duración superior a un año.",
      descartes: { b: "La ley no eleva el umbral a más de tres años.", c: "Tampoco exige una vinculación superior a cinco años." },
    },
    {
      preguntaId: 15,
      justificacion: "La ficha teórica no contiene esta fórmula de cómputo. Se conserva contextualmente un trabajador adicional por cada doscientos días trabajados o fracción.",
      descartes: { a: "El módulo aplicable no es de cien días.", c: "Trescientos días supera el divisor utilizado para el cálculo." },
    },
    {
      preguntaId: 16,
      justificacion: "La teoría disponible no desarrolla los sistemas convencionales de designación. La solución contextual mantiene que el convenio no puede alterar la facultad de designación de representantes o trabajadores.",
      descartes: { a: "El sistema convencional no puede desplazar la titularidad de la facultad de designación.", c: "Sí pueden establecerse otros sistemas; la limitación afecta a quién conserva la facultad." },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-11-gobierno-vasco",
  referenceForQuestion: () => contextualReference,
});
