import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-143-a-145",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La agrupación familiar parte de que el cónyuge o pareja de hecho reside en otra localidad por un puesto definitivo de personal funcionario de carrera o laboral fijo.",
      descartes: {
        b: "La alternativa admite también un puesto temporal, pero el artículo 143.1 exige que sea definitivo.",
        c: "No pueden unirse ambas porque B rebaja la estabilidad exigida al puesto de la otra persona.",
        d: "La residencia en otra localidad sí es el presupuesto territorial de esta excedencia.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "No se exige haber trabajado previamente un período mínimo en la Administración para solicitar esta modalidad por agrupación familiar.",
      descartes: {
        a: "La duración mínima es de dos años, no de cinco.",
        c: "No existe reserva del puesto, tampoco durante los primeros años.",
        d: "Además de no haber retribuciones, el tiempo no computa para carrera, trienios ni Seguridad Social.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Si no se solicita el reingreso a tiempo, la excedencia pasa a ser por interés particular y debe mantenerse al menos dos años desde el día siguiente al fin del plazo.",
      descartes: {
        a: "El plazo para pedir el reingreso es de treinta días naturales, no veinte.",
        b: "La nueva situación es excedencia voluntaria por interés particular, no excedencia forzosa.",
        d: "A y B alteran tanto el plazo como la situación resultante.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El cuidado de cada hija o hijo permite hasta tres años, sea por naturaleza, adopción o acogimiento, contados desde el nacimiento o la resolución correspondiente.",
      descartes: {
        a: "El límite de tres años es correcto y debe integrarse con los orígenes y el inicio del cómputo.",
        b: "Naturaleza y adopción están incluidas, además del acogimiento y las otras reglas de la pregunta.",
        c: "La resolución marca el inicio en adopción o acogimiento; para nacimiento se atiende a su propia fecha.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El cuidado de un familiar puede justificar una excedencia de hasta tres años, la misma duración máxima prevista para hijos e hijas.",
      descartes: {
        b: "El parentesco alcanza hasta el segundo grado de consanguinidad o afinidad, no solo el primero.",
        c: "La ley exige que el familiar no desempeñe actividad retribuida; «no tenga retribución alguna» no expresa con precisión ese requisito de actividad.",
        d: "Las opciones B y C no reproducen correctamente el alcance personal y económico de la norma.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Cuando un nuevo sujeto causante abre otra excedencia, esta comienza y pone fin a la que se estaba disfrutando por el anterior.",
      descartes: {
        a: "El disfrute fraccionado solo es posible si resulta compatible con las necesidades del servicio, no «en todo caso».",
        c: "La condición omitida en A impide unirla con la regla correcta de B.",
        d: "El efecto del nuevo sujeto causante aparece expresamente en el artículo 144.2.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Es un derecho individual, pero si dos personas lo ejercen por el mismo familiar la Administración puede limitar la simultaneidad por razones justificadas de funcionamiento del servicio.",
      descartes: {
        a: "El carácter individual no elimina la limitación organizativa excepcional de B.",
        b: "La limitación simultánea es válida y convive con la titularidad individual del derecho.",
        d: "Ambas afirmaciones se complementan en el artículo 144.3.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El período por cuidado computa para trienios, Seguridad Social y carrera profesional; la protección evita que atender a la familia frene esos derechos.",
      descartes: {
        a: "Los trienios computan, junto con los otros dos efectos.",
        b: "La Seguridad Social también mantiene el cómputo y no excluye A ni C.",
        c: "La carrera profesional se conserva durante la excedencia, además de trienios y protección social.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El puesto y destino inmediatamente anteriores quedan reservados durante los tres años completos de la excedencia por cuidado.",
      descartes: {
        a: "La protección no se limita al primer año.",
        b: "Tampoco termina al cumplirse dos años; alcanza la duración máxima de tres.",
        d: "Sí existe reserva, salvo para los puestos especiales que indica el artículo.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "La reserva de tres años no se aplica si el puesto estaba reservado a personal eventual o a personal directivo público profesional.",
      descartes: {
        a: "El puesto eventual es una excepción válida, pero comparte el tratamiento con el directivo.",
        b: "El puesto directivo también queda fuera de la reserva y se suma a A.",
        d: "Las dos excepciones están expresamente identificadas en el artículo 144.4.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Durante esta situación se puede participar en los cursos de formación convocados por la Administración, facilitando la actualización antes del retorno.",
      descartes: {
        b: "Al concluir se produce la reincorporación al puesto reservado previa solicitud; no se obliga a concursar a puestos similares.",
        c: "La falta de reingreso lleva a excedencia por interés particular, no forzosa.",
        d: "B y C cambian las consecuencias del mantenimiento de la reserva.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Una actividad remunerada debe respetar incompatibilidades y no puede obstaculizar el cuidado que justifica la excedencia.",
      descartes: {
        a: "El régimen de incompatibilidades se aplica, junto con el límite material de B.",
        b: "La atención familiar no puede quedar menoscabada, aunque también debe cumplirse A.",
        d: "Los dos límites están previstos de forma acumulativa.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "La víctima de violencia de género puede solicitar la excedencia sin que se le imponga un período mínimo de permanencia.",
      descartes: {
        a: "Tampoco se exige haber completado tres años de servicios previos.",
        c: "La reserva inicial dura seis meses, no dos.",
        d: "El cómputo protector se refiere al período de reserva regulado, que la opción previa cifra incorrectamente en dos meses; la respuesta inequívoca pedida es B.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Si lo requieren las actuaciones judiciales, la reserva se prorroga en tramos de tres meses hasta un máximo de dieciocho, conservando los mismos efectos.",
      descartes: {
        a: "Los tramos son correctos, pero el límite no se queda en doce meses.",
        c: "Ni la duración de cada prórroga ni el máximo coinciden con la ley.",
        d: "Aunque acierta en dieciocho meses, reduce indebidamente cada tramo a dos.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Durante los seis primeros meses se perciben las retribuciones íntegras y, cuando proceda, las prestaciones familiares por hijos e hijas.",
      descartes: {
        a: "La protección económica íntegra no termina al segundo mes.",
        b: "Tampoco se limita a tres meses.",
        d: "Después de seis meses cambia la composición retributiva, por lo que no se mantienen íntegramente durante doce.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "En los seis meses siguientes se perciben las retribuciones básicas más los trienios; entre las opciones, «retribuciones básicas» recoge el componente principal que continúa.",
      descartes: {
        b: "El complemento específico no forma parte del régimen económico de ese segundo semestre.",
        c: "Tampoco se mantiene el complemento de destino.",
        d: "Sí existe una continuidad retributiva básica, acompañada de los trienios reconocidos.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 3 }, (_, index) => [index + 1, articleReference(143)]),
    ...Array.from({ length: 9 }, (_, index) => [index + 4, articleReference(144)]),
    ...Array.from({ length: 4 }, (_, index) => [index + 13, articleReference(145)]),
  ]),
});
