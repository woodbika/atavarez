import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-80-a-82",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El artículo 80 exige conexión entre las pruebas y las funciones reales de los puestos que se cubrirán; así la selección mide capacidades útiles para el trabajo.",
      descartes: {
        b: "La relación de instrumentos es abierta y adaptable, no una lista taxativa que impida utilizar otros medios adecuados.",
        c: "La regulación de los sistemas de acreditación lingüística no se atribuye genéricamente al órgano de función pública en los términos de la opción.",
        d: "Solo la conexión funcional de las pruebas se ajusta al artículo; las otras dos afirmaciones añaden límites o competencias incorrectos.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Los órganos de selección actúan con objetividad, imparcialidad, autonomía funcional y profesionalidad. Esta combinación protege su independencia técnica.",
      descartes: {
        b: "La abstención es el deber que corresponde a la propia persona cuando concurre una causa; la recusación la promueve una parte interesada.",
        c: "La responsabilidad sobre el contenido, confidencialidad y cumplimiento de las bases recae en el órgano de selección, no en el órgano general de función pública.",
        d: "Las opciones B y C confunden mecanismos y responsabilidades, por lo que no pueden sumarse a la primera.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "En órganos de más de cuatro integrantes existe representación equilibrada cuando cada sexo alcanza al menos el 40 %.",
      descartes: {
        a: "La composición equilibrada se procura con la salvedad de que existan razones fundadas y objetivas que lo impidan; «en todo caso» elimina esa excepción.",
        c: "En órganos más pequeños también debe atenderse al equilibrio mediante el criterio legal aplicable, no se dispensa sin más.",
        d: "La opción B es la única que expresa correctamente el umbral para órganos de más de cuatro miembros.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Todas las personas integrantes necesitan capacitación adecuada y, además, al menos una debe aportar formación o experiencia específica en selección.",
      descartes: {
        b: "La norma fija una presencia mínima de una persona especializada, no de dos.",
        c: "No exige que todo el órgano tenga formación o experiencia selectiva específica, aunque sí competencia para la función encomendada.",
        d: "El artículo 81 contiene una exigencia concreta y coincide con la opción A.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Al menos la mitad del órgano debe tener una titulación de la misma área de conocimientos que la requerida para el ingreso.",
      descartes: {
        a: "Una sola persona no garantiza el mínimo de la mitad cuando el órgano tiene varios integrantes.",
        c: "La coincidencia de área no se exige a la totalidad; el umbral legal es del 50 %.",
        d: "La ley sí cuantifica esta condición: el umbral exigido es la mitad del órgano.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Todas las personas del órgano de selección deben poseer un nivel académico igual o superior al exigido para ingresar.",
      descartes: {
        a: "La exigencia de nivel académico no se satisface con una única persona integrante.",
        b: "El requisito alcanza al órgano completo, a diferencia de la coincidencia de área, que sí se exige al menos a la mitad.",
        d: "El artículo 81 fija expresamente la totalidad, de modo que existe una alternativa válida.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Quedan excluidos el personal de elección o designación política, el eventual y el funcionario interino o laboral temporal. La independencia del órgano requiere reunir las tres exclusiones.",
      descartes: {
        a: "La exclusión del personal político es cierta, pero no es la única incluida en la pregunta.",
        b: "El personal eventual tampoco puede participar, junto con los otros colectivos enumerados.",
        c: "La temporalidad funcionarial o laboral impide formar parte del órgano, aunque la respuesta completa incluye además A y B.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "No puede integrarse en el órgano quien actúe en representación o por cuenta de sindicatos, asociaciones de personal funcionario o colegios profesionales.",
      descartes: {
        a: "La incompatibilidad por preparar aspirantes se refiere al período y condiciones que establece la ley; la formulación de dos años de esta opción no coincide con ella.",
        c: "No son válidas las dos propuestas, porque la primera altera el plazo legal aplicable a quienes preparan aspirantes.",
        d: "La representación de organizaciones profesionales sí constituye una exclusión expresa.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El órgano que convoca el proceso es quien nombra a las personas integrantes del órgano de selección.",
      descartes: {
        b: "La competencia general en función pública no desplaza al órgano convocante en este nombramiento concreto.",
        c: "La ley no establece una designación conjunta con el órgano competente en hacienda y economía.",
        d: "La atribución está expresamente regulada, por lo que no existe el silencio que afirma la opción.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El tribunal puede incorporar asesoramiento para una o varias pruebas; esas personas se ciñen a su especialidad y respetan objetividad, imparcialidad y confidencialidad.",
      descartes: {
        a: "La incorporación es posible, pero debe leerse junto con los límites técnicos y principios que completan su régimen.",
        b: "El asesoramiento se restringe a la especialidad, aunque también son ciertas su posible incorporación y las garantías de actuación.",
        c: "Los principios citados se aplican al personal asesor, pero esta es solo una parte de la regulación conjunta.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Las resoluciones técnicas vinculan al órgano competente para nombrar, sin perjuicio de que puedan revisarse por los cauces previstos en el ordenamiento.",
      descartes: {
        a: "La vinculación no convierte las resoluciones en irrevisables; siguen sometidas a los mecanismos legales de revisión.",
        c: "Negar todo efecto vinculante vaciaría la autonomía funcional reconocida al órgano de selección.",
        d: "La ley sí determina el efecto de estas resoluciones y admite su revisión jurídica.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "La composición de los órganos permanentes debe atender al equilibrio entre mujeres y hombres, igual que los demás órganos de selección.",
      descartes: {
        a: "No se impone solicitar al IVAP una persona funcionaria, y menos indistintamente de carrera o interina, pues el personal interino no puede integrar estos órganos.",
        b: "La creación de un órgano permanente es una posibilidad organizativa en los términos legales, no un deber absoluto para todas las administraciones.",
        d: "Las dos primeras afirmaciones contienen obligaciones que el artículo 82 no establece.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Los órganos permanentes coordinan criterios y gestionan los procesos con agilidad; su regulación sigue los criterios de coordinación y negociación, y sus integrantes deben conocer las técnicas de selección.",
      descartes: {
        a: "La finalidad está bien descrita, pero la pregunta incorpora además reglas sobre regulación y preparación de sus integrantes.",
        b: "Los criterios comunes y la negociación forman parte del marco, sin excluir la finalidad ni la cualificación exigida.",
        c: "La formación o experiencia selectiva es necesaria, aunque no resume por sí sola todo lo afirmado.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "El IVAP puede organizar u homologar la formación; en el sector público autonómico, el órgano permanente lo designa el departamento de empleo público y queda adscrito al IVAP.",
      descartes: {
        a: "La competencia formativa del IVAP es correcta, pero convive con las reglas orgánicas de las otras dos opciones.",
        b: "La designación departamental se ajusta al artículo 82 y debe completarse con la adscripción y la función formativa.",
        c: "La adscripción al IVAP también es cierta, sin invalidar las afirmaciones A y B.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    [1, articleReference(80)],
    ...Array.from({ length: 10 }, (_, index) => [index + 2, articleReference(81)]),
    ...Array.from({ length: 3 }, (_, index) => [index + 12, articleReference(82)]),
  ]),
});
