import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-149-a-152",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La expectativa de destino aparece cuando una reasignación de efectivos no ha podido proporcionar todavía un nuevo destino a la persona afectada.",
      descartes: {
        b: "«Racionalización de recursos humanos» no es la denominación del procedimiento que activa esta situación en el artículo 149.",
        c: "Un plan puede estar en el origen de las medidas, pero la causa inmediata prevista es el proceso concreto de reasignación.",
        d: "La movilidad forzosa tiene su propio régimen y no conduce por sí sola a expectativa de destino.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "En expectativa se cobran retribuciones básicas, complemento de carrera o grado consolidado y el 50 % del complemento del puesto anterior.",
      descartes: {
        a: "Las retribuciones básicas se mantienen, junto con los dos componentes complementarios.",
        b: "La carrera o grado consolidado también se abona, además de A y C.",
        c: "La mitad del complemento del puesto anterior completa la protección económica.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Debe desempeñar temporalmente puestos similares cuando lo exija el servicio; ese desempeño interrumpe el cómputo del año máximo en expectativa.",
      descartes: {
        a: "Los destinos similares deben aceptarse en el territorio histórico, no solo en el municipio de procedencia.",
        c: "La obligación de concursar también se extiende al territorio histórico y no queda limitada al municipio.",
        d: "A y C reducen indebidamente el ámbito espacial fijado por la ley.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La expectativa dura como máximo un año; agotado ese período se pasa a excedencia forzosa temporal.",
      descartes: {
        a: "Tras el primer año no se salta directamente a excedencia forzosa ordinaria.",
        c: "El plazo no alcanza cinco años y, además, existe antes una fase temporal.",
        d: "Acierta en la situación posterior, pero multiplica por cinco la duración máxima.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Para los efectos que el artículo no regula de manera especial, la expectativa se equipara al servicio activo.",
      descartes: {
        b: "La excedencia forzosa temporal es la situación posterior, no el patrón general de equiparación.",
        c: "La excedencia forzosa llega después de la fase temporal y tampoco sirve como referencia residual.",
        d: "El interés particular carece de las garantías retributivas y de cómputo propias de la expectativa.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La supresión del puesto puede iniciar una reasignación, pero no figura por sí sola como causa directa de excedencia forzosa temporal.",
      descartes: {
        a: "Agotar el año máximo en expectativa sí provoca el paso a esta excedencia.",
        b: "Incumplir las obligaciones de expectativa es la otra causa establecida.",
        d: "La opción C no está en la enumeración del artículo 150.1.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La excedencia forzosa temporal puede mantenerse como máximo tres años y después se transforma en excedencia forzosa.",
      descartes: {
        a: "La duración no se reduce a un año.",
        b: "Además de usar un plazo erróneo, conduce a una excedencia voluntaria que la ley no prevé aquí.",
        d: "Tras tres años se pasa a excedencia forzosa, no a interés particular.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Este tiempo computa para trienios, derechos pasivos y, cuando proceda, consolidación del grado o nivel de carrera.",
      descartes: {
        a: "Se perciben básicas y complemento de carrera o grado consolidado; no el complemento del puesto anterior en los términos propuestos.",
        c: "La opción A atribuye una retribución que no corresponde y no puede unirse al cómputo correcto de B.",
        d: "El artículo 150.3 sí reconoce los efectos indicados en B.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Se pasa a excedencia forzosa si debía producirse una adscripción provisional y no existe vacante compatible o no se cumplen sus requisitos.",
      descartes: {
        b: "La norma se refiere a suspensión firme, no provisional, y exige que no se reúnan los requisitos; la opción altera ambos elementos.",
        c: "Desde expectativa se pasa primero a excedencia forzosa temporal, no directamente a la ordinaria.",
        d: "B y C describen de forma incorrecta las otras vías de acceso a esta situación.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "La excedencia forzosa mantiene las básicas y la mitad de carrera o grado; además computa para carrera, trienios y Seguridad Social.",
      descartes: {
        a: "La protección retributiva está bien expresada y se acompaña del cómputo de B.",
        b: "El tiempo computable también es correcto y debe sumarse a la retribución.",
        d: "Las dos garantías aparecen juntas en el artículo 151.2.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La asignación derivada de un plan genera indemnización cuando obliga a cambiar de residencia, porque ese es el perjuicio que se compensa.",
      descartes: {
        a: "No toda asignación da derecho automáticamente a indemnización.",
        c: "El encuadre profesional no es el criterio indemnizable mencionado; la reasignación debe respetar sus propios requisitos.",
        d: "Sí existe compensación cuando concurre el desplazamiento residencial.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "El órgano de función pública puede obligar a participar en formación evaluada para adaptar competencias a futuros puestos.",
      descartes: {
        a: "La obligación de concursar no se limita al territorio histórico de los servicios anteriores.",
        c: "El reingreso obligatorio tampoco queda restringido a vacantes dentro de ese territorio histórico.",
        d: "A y C introducen una limitación geográfica ausente del artículo 152.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Hay que cumplir las obligaciones y reincorporarse en treinta días si se ordena; el incumplimiento lleva a interés particular durante un mínimo de dos años.",
      descartes: {
        a: "El plazo y la obligación son correctos, junto con las consecuencias B y C.",
        b: "La declaración de oficio también procede, sin excluir el plazo ni la permanencia mínima.",
        c: "Los dos años completan la secuencia prevista en el artículo 152.3.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Los dos años empiezan al día siguiente de acabar el plazo para concursar, de la última fecha de formación obligatoria o del plazo de treinta días para reincorporarse.",
      descartes: {
        a: "El cierre de solicitudes es uno de los tres momentos posibles.",
        b: "La última fecha de formación también inicia el cómputo en su supuesto.",
        c: "El fin del plazo de reincorporación completa las tres alternativas legales.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "La incompatibilidad se limita al sector público, incluidos puestos eventuales y directivos; puede trabajarse en el sector privado si se respetan las demás normas aplicables.",
      descartes: {
        a: "Un puesto público obligaría a pasar a la situación administrativa que correspondiera.",
        b: "La prohibición menciona expresamente puestos eventuales y de dirección pública.",
        d: "El sector privado no está incluido en la prohibición del artículo 152.4.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 5 }, (_, index) => [index + 1, articleReference(149)]),
    ...Array.from({ length: 3 }, (_, index) => [index + 6, articleReference(150)]),
    ...Array.from({ length: 3 }, (_, index) => [index + 9, articleReference(151)]),
    ...Array.from({ length: 4 }, (_, index) => [index + 12, articleReference(152)]),
  ]),
});
