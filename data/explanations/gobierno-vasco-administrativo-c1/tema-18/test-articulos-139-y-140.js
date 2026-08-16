import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-139-y-140",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Obtener un puesto en otra administración por concurso o libre designación conduce a la situación de servicio en otras administraciones públicas.",
      descartes: {
        a: "El concurso está incluido, pero la opción excluye sin razón la libre designación.",
        b: "La libre designación también sirve, aunque no desplaza al concurso como vía válida.",
        d: "El artículo 139.1.a reúne expresamente los dos sistemas.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La integración como personal propio puede derivar de un proceso de transferencias o de una disposición legal de la administración de destino.",
      descartes: {
        a: "La transferencia es un supuesto correcto, junto con la integración legal de B.",
        b: "La disposición legal también puede producirla y se suma al proceso de transferencia.",
        d: "Ambas causas aparecen en el artículo 139.1.b.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La reasignación de efectivos y la movilidad interadministrativa, cuando derivan del convenio y plan correspondientes, pueden integrar a la persona en otra administración.",
      descartes: {
        a: "La reasignación es una vía válida, pero no la única de las dos propuestas.",
        b: "La movilidad interadministrativa también está contemplada y debe reunirse con A.",
        d: "El artículo 139.1.c reconoce ambos supuestos.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El reingreso se garantiza conforme a la carrera vigente en la administración a la que la persona pertenece, es decir, la de origen.",
      descartes: {
        a: "La administración de destino regula el servicio efectivo, pero no sustituye el sistema de carrera de pertenencia al reingresar.",
        c: "La garantía de retorno aparece expresamente en el artículo 139.2.",
        d: "La norma no deja indeterminado el sistema: remite al de la administración de pertenencia.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Mientras sirve fuera, conserva la condición en origen, no reserva puesto ni destino y se somete al régimen de la administración donde trabaja efectivamente.",
      descartes: {
        a: "La condición funcionarial se conserva, pero la pregunta incorpora además las consecuencias de B y C.",
        b: "La ausencia de reserva es correcta y convive con el mantenimiento de la condición y el régimen de destino.",
        c: "La administración de destino regula el servicio efectivo, sin invalidar los otros dos efectos.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Al reingresar se reconocen los progresos de carrera y sus efectos retributivos, siguiendo los convenios o instrumentos de movilidad aplicables.",
      descartes: {
        a: "El tiempo se computa como servicio prestado en la administración de origen, no en la de destino.",
        c: "La administración de reingreso reconoce en defecto de convenio; la expresión «en todo caso» elimina indebidamente la prioridad de los instrumentos de colaboración.",
        d: "A y C alteran el lugar de cómputo y el carácter subsidiario del reconocimiento.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La declaración se realiza de oficio cuando la situación nace de un proceso de transferencias; en los demás supuestos la solicita la persona interesada.",
      descartes: {
        a: "No todos los accesos a otra administración se tramitan de oficio.",
        b: "Obtener voluntariamente un puesto por provisión requiere una declaración a instancia de la persona.",
        c: "La reasignación no integra la excepción específica que el artículo reserva a las transferencias.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Tras cesar en destino hay treinta días naturales para pedir el reingreso en la administración de origen.",
      descartes: {
        b: "La falta de solicitud lleva a excedencia por interés particular, pero el mínimo es de dos años y no de tres.",
        c: "Los dos años se cuentan desde el día siguiente a finalizar el plazo, no desde ese mismo día.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Conserva el derecho a concursar en origen quien está fuera por haber obtenido un puesto mediante los sistemas de provisión previstos en la ley.",
      descartes: {
        b: "La transferencia integra plenamente a la persona en destino y no se encuadra en esta garantía de participación.",
        c: "La movilidad o reasignación integradoras tienen el régimen específico del apartado 9, distinto del acceso voluntario por provisión.",
        d: "El artículo 139.8 limita el derecho al supuesto de la opción A.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Tanto la transferencia como la movilidad integradora sitúan plenamente al personal en la administración de destino y en servicio activo dentro de ella.",
      descartes: {
        a: "La transferencia produce ese efecto, pero la movilidad de B también puede hacerlo.",
        b: "La movilidad incluida en el artículo 139.1.c comparte la consecuencia de integración plena.",
        d: "Las dos vías están expresamente reguladas en el apartado 9.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La integración respeta los derechos económicos ligados a la posición de carrera que ya se hubiera adquirido.",
      descartes: {
        b: "No pierde sus derechos en origen; la ley dispone que los mantiene como si siguiera en activo allí.",
        c: "La administración de destino debe respetar el grupo o subgrupo de procedencia.",
        d: "B y C niegan dos garantías expresas del personal transferido.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Si el puesto transferido cesa o se suprime, la persona permanece en destino y esa administración debe asignarle otro conforme a su sistema de carrera y provisión.",
      descartes: {
        a: "La transferencia produjo integración plena y no se deshace automáticamente por perder el puesto concreto.",
        c: "La permanencia no queda a una decisión discrecional de destino; es una consecuencia legal.",
        d: "La administración de origen tampoco decide el retorno de una persona ya integrada.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Quien ocupa un puesto directivo pasa a la situación específica de servicio como personal directivo profesional, salvo que el cargo encaje en los supuestos de servicios especiales.",
      descartes: {
        a: "La prestación en el sector público no es la excepción que menciona el artículo 140.1.",
        b: "Tampoco se exceptúa por prestar servicios en otro cuerpo o escala.",
        c: "El interés particular es voluntario y no sustituye la situación correspondiente al ejercicio directivo.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Esta situación conserva la reserva del puesto obtenido por concurso o tras el acceso, tanto si ya se tenía como si se obtiene durante su permanencia.",
      descartes: {
        b: "El reingreso se rige por la carrera de la administración de pertenencia, no la de destino.",
        c: "La condición de personal funcionario de carrera se mantiene en la administración de origen.",
        d: "B y C contradicen dos efectos expresos del artículo 140.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Al reingresar se reconocen los avances de carrera conforme a los instrumentos de movilidad y, si no existen, decide la administración en la que se produce el reingreso.",
      descartes: {
        a: "El cauce convencional es correcto y debe completarse con la solución subsidiaria de B.",
        b: "La administración de reingreso actúa en defecto de instrumentos, junto con la regla principal de A.",
        d: "Las dos afirmaciones reproducen el orden del artículo 140.4.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "El tiempo sí cuenta para antigüedad y carrera en origen, y se conserva el derecho a participar en sus convocatorias. Por eso ninguna de las dos negaciones es correcta.",
      descartes: {
        a: "Niega un cómputo que el artículo 140.4 reconoce expresamente.",
        b: "La participación en provisión de la administración de origen se mantiene durante esta situación.",
        c: "Ambas afirmaciones son falsas y no pueden convertirse en una respuesta conjunta válida.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "Hay treinta días naturales para volver; el incumplimiento lleva de oficio a excedencia por interés particular durante al menos dos años desde el día siguiente al fin del plazo.",
      descartes: {
        a: "El plazo de treinta días es correcto, pero debe completarse con las consecuencias de B y C.",
        b: "La declaración de oficio también procede, junto con duración y cómputo.",
        c: "Los dos años y su día inicial están bien formulados, sin excluir las otras dos reglas.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 12 }, (_, index) => [index + 1, articleReference(139)]),
    ...Array.from({ length: 5 }, (_, index) => [index + 13, articleReference(140)]),
  ]),
});
