import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-141-y-142",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Para pedir el reingreso desde la excedencia por interés particular hay que permanecer en ella al menos dos años continuados.",
      descartes: {
        a: "Los servicios efectivos previos exigidos son dos años, no cinco.",
        c: "Tras reingresar deben transcurrir tres años de servicios efectivos antes de una nueva excedencia, no cinco.",
        d: "Solo B conserva el plazo fijado por el artículo 141.1.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Servicios especiales, expectativa de destino y cuidado de familiares cuentan como servicios efectivos para completar los períodos requeridos.",
      descartes: {
        a: "Servicios especiales computa, pero también lo hacen las situaciones B y C.",
        b: "La expectativa de destino se incluye en el cómputo junto con las otras dos opciones.",
        c: "El cuidado de familiares también suma tiempo efectivo y no desplaza A ni B.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "También computan las excedencias por violencia de género o terrorista y las excedencias forzosa temporal y forzosa.",
      descartes: {
        a: "La protección por violencia de género es un período computable, junto con B y C.",
        b: "La excedencia por violencia terrorista recibe el mismo tratamiento favorable.",
        c: "Las dos modalidades forzosas cuentan, sin excluir las excedencias protectoras de A y B.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La suspensión firme de funciones no se considera servicio efectivo para calcular estos plazos, porque deriva de una sanción ya consolidada.",
      descartes: {
        b: "La suspensión provisional aún no es una sanción firme y no figura en la exclusión del artículo 141.1.",
        c: "La ley diferencia la suspensión firme de la provisional; no descuenta ambas.",
        d: "Existe una exclusión expresa y corresponde a la opción A.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La excedencia se solicita por la persona, depende de las necesidades temporales del servicio y una denegación debe explicar sus razones. Las tres garantías equilibran interés individual y organización.",
      descartes: {
        a: "La iniciativa corresponde a la persona, pero la concesión también queda sujeta a B y C.",
        b: "Las necesidades temporales condicionan la decisión, que además debe motivarse si es negativa.",
        c: "La motivación es obligatoria, junto con el carácter rogado y la valoración del servicio.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Se declara de oficio cuando termina la causa de otra situación y la persona no solicita el reingreso dentro del plazo legal.",
      descartes: {
        a: "No participar en concursos no activa por sí solo esta declaración general.",
        b: "La falta de asistencia a cursos tampoco aparece como causa de excedencia de oficio.",
        d: "Solo el incumplimiento de la obligación de reingresar figura en el artículo 141.3.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "En excedencia por interés particular no se devengan retribuciones mientras se mantiene suspendida la prestación de servicios.",
      descartes: {
        a: "No existe reserva del puesto, ni siquiera durante los dos primeros años.",
        c: "El tiempo tampoco computa para los derechos de Seguridad Social; la opción los conserva indebidamente.",
        d: "A y C contradicen la pérdida de reserva y la ausencia total de cómputo.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Si se pide el reingreso y no hay vacante, la persona continúa en la misma excedencia hasta que pueda producirse la reincorporación.",
      descartes: {
        a: "La falta de vacante no transforma automáticamente la situación en excedencia forzosa.",
        b: "Tampoco se pasa a expectativa de destino por esta sola circunstancia.",
        c: "La suspensión firme es una sanción y no guarda relación con la inexistencia de puestos libres.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "La excedencia con reserva dura entre seis meses y un año; durante ese intervalo se conserva el puesto y destino.",
      descartes: {
        a: "El requisito previo es de tres años continuados de servicios efectivos, no cinco.",
        c: "Una nueva solicitud exige acumular tres años desde el final del disfrute, no cinco.",
        d: "A y C elevan indebidamente los dos períodos de tres años.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "No puede concederse si existe expediente disciplinario o sanción pendiente, ni cuando un plan aprobado prevé suprimir o reducir puestos en la unidad. Ambos límites evitan obstaculizar decisiones ya en curso.",
      descartes: {
        a: "La circunstancia disciplinaria basta para impedirla, pero la restricción de B también opera.",
        b: "El plan de reducción es otra prohibición válida, junto con la situación disciplinaria.",
        d: "Las dos causas están expresamente previstas en el artículo 142.2.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Al terminar el período reservado hay treinta días naturales para solicitar el reingreso al servicio activo.",
      descartes: {
        a: "El plazo no se reduce a veinte días naturales.",
        c: "Tampoco se expresa en veinte días hábiles.",
        d: "Aunque acierta en treinta, la norma computa días naturales y no hábiles.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "No pedir el reingreso a tiempo provoca excedencia por interés particular de oficio, con una permanencia mínima de dos años desde el día siguiente al fin del plazo.",
      descartes: {
        a: "La declaración de oficio es correcta y debe completarse con la duración de B.",
        b: "El mínimo de dos años también es cierto, junto con el cambio de situación de A.",
        d: "Las dos consecuencias forman parte del artículo 142.4.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Esta excedencia impide trabajar en el sector público como personal funcionario, laboral, eventual o directivo, pero permite ejercer en el sector privado.",
      descartes: {
        a: "Cualquier relación funcionarial o contractual en el sector público es incompatible con el disfrute de la reserva.",
        b: "El personal eventual también presta servicios en el sector público y queda incluido en la prohibición.",
        c: "La dirección pública profesional está igualmente excluida durante la excedencia.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 8 }, (_, index) => [index + 1, articleReference(141)]),
    ...Array.from({ length: 5 }, (_, index) => [index + 9, articleReference(142)]),
  ]),
});
