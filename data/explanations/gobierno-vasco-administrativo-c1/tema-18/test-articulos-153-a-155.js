import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-153-a-155",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La suspensión puede ser provisional o firme, priva del ejercicio y derechos con las excepciones provisionales, e impide prestar servicios en el sector público durante la pena o sanción.",
      descartes: {
        a: "Las dos clases están correctamente enumeradas y se integran con los efectos B y C.",
        b: "La privación general de funciones y derechos es cierta, sin borrar las garantías propias de la suspensión provisional.",
        c: "La prohibición de prestar servicios públicos completa el régimen de la situación.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La protección excepcional del interés público puede justificar suspensión provisional durante un procedimiento judicial o un expediente disciplinario.",
      descartes: {
        a: "La causa judicial es válida, junto con la disciplinaria de B.",
        b: "El expediente disciplinario también permite la medida cautelar y debe sumarse a A.",
        d: "Ambos procedimientos aparecen expresamente en el artículo 154.1.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "En un expediente disciplinario la suspensión provisional dura como máximo seis meses, salvo retraso imputable a la persona expedientada.",
      descartes: {
        a: "La declara el órgano competente para ordenar la incoación, no necesariamente el que resolverá el expediente.",
        c: "La atribución incorrecta de A impide unirla con el límite temporal de B.",
        d: "El plazo máximo y su excepción sí están regulados.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "En una causa penal la suspensión provisional puede extenderse durante toda su tramitación.",
      descartes: {
        b: "La prisión provisional u otra medida impeditiva mantiene la calificación de suspensión provisional, no la convierte en firme.",
        c: "La declara el órgano de función pública con efectos desde la decisión judicial; el juzgado no dicta la situación administrativa.",
        d: "B y C confunden la naturaleza de la medida y el órgano competente.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Se pierde el puesto si la medida cautelar supera seis meses porque el procedimiento quedó paralizado por causas imputables a la persona afectada.",
      descartes: {
        a: "Tres meses no es el umbral legal para esta consecuencia.",
        c: "La pérdida se produce antes de llegar a nueve meses si concurren los demás requisitos.",
        d: "Tampoco es necesario que transcurra un año completo.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La persona suspendida provisionalmente cobra básicas y prestaciones familiares, salvo incomparecencia o dilación imputable, casos en los que pierde toda retribución.",
      descartes: {
        a: "Las retribuciones básicas se mantienen, pero también pueden existir las prestaciones de B.",
        b: "La protección familiar es compatible con A y queda sujeta a la excepción indicada.",
        d: "La ausencia total de retribución solo aparece cuando el comportamiento de la persona provoca la excepción.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Si la suspensión no se vuelve firme, se abonan las cantidades dejadas de percibir y todo el tiempo cuenta como servicio activo, incluida carrera, trienios, promoción y Seguridad Social.",
      descartes: {
        a: "La reincorporación es al propio puesto de trabajo, no a cualquier vacante existente.",
        c: "La imprecisión sobre el destino de A impide combinarla con la reparación económica correcta.",
        d: "El artículo 154.6 reconoce de manera expresa los efectos de B.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La suspensión firme nace tanto de una sentencia penal como de una sanción disciplinaria que ya sea firme.",
      descartes: {
        a: "La sentencia es una fuente válida, junto con la sanción administrativa.",
        b: "La sanción disciplinaria firme también la impone y debe reunirse con A.",
        d: "Las dos vías figuran en el artículo 155.1.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El límite de seis años corresponde a la suspensión impuesta como sanción disciplinaria; la derivada de sentencia se cumple en los términos judiciales.",
      descartes: {
        a: "Una sentencia penal puede fijar la duración que corresponda a la condena y no queda sometida a este máximo administrativo.",
        c: "El tope no se aplica por igual a las dos fuentes.",
        d: "La sanción disciplinaria sí tiene un máximo legal de seis años.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "La sanción se cumple desde que adquiere firmeza en vía administrativa y descuenta el tiempo ya pasado en suspensión provisional.",
      descartes: {
        a: "El agotamiento de la vía administrativa expresa aquí la firmeza requerida y se completa con B.",
        b: "El cómputo de la cautelar evita duplicar el tiempo de suspensión y se suma a A.",
        d: "Ambas reglas están contenidas en el artículo 155.1.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Cuando la suspensión firme supera seis meses se pierden el puesto y el destino; hasta ese límite se conserva la reincorporación automática.",
      descartes: {
        a: "Tres meses no bastan para producir la pérdida.",
        c: "El efecto ya se activa al exceder seis y no espera a nueve.",
        d: "Un año está por encima del umbral fijado por el artículo 155.2.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Cumplida la sanción hay treinta días naturales para reingresar; si no se hace, se declara interés particular, y si duró como máximo seis meses el retorno al puesto anterior es automático.",
      descartes: {
        a: "El plazo es correcto y se integra con las consecuencias B y C.",
        b: "La excedencia de oficio también procede, sin excluir el plazo ni el retorno reservado.",
        c: "La conservación del destino en suspensiones breves completa la secuencia.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Si se pidió reingresar tras perder el puesto y durante seis meses no apareció vacante, se declara excedencia forzosa desde que terminó la responsabilidad penal o disciplinaria.",
      descartes: {
        b: "La situación aplicable es la excedencia forzosa ordinaria, no su modalidad temporal.",
        c: "La solicitud en plazo evita pasar a interés particular.",
        d: "La expectativa de destino no nace aquí y, además, los efectos se retrotraen a la extinción de la responsabilidad.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    [1, articleReference(153)],
    ...Array.from({ length: 6 }, (_, index) => [index + 2, articleReference(154)]),
    ...Array.from({ length: 6 }, (_, index) => [index + 8, articleReference(155)]),
  ]),
});
