import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-146-a-148",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Durante los seis primeros meses de excedencia por violencia terrorista se reservan puesto y destino, y ese tiempo cuenta para antigüedad, carrera y Seguridad Social.",
      descartes: {
        a: "No se exige haber prestado cinco años ni ningún otro tiempo mínimo previo.",
        b: "Tampoco existe una permanencia mínima obligatoria de dos años.",
        d: "Las prórrogas son de tres meses, aunque el límite total sí alcanza dieciocho.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Se mantienen íntegramente las retribuciones durante seis meses, después se cobran básicas y trienios otros seis, y el reingreso requiere solicitud. Las tres afirmaciones forman la secuencia completa.",
      descartes: {
        a: "El primer tramo retributivo está bien descrito, pero no agota el régimen posterior ni el retorno.",
        b: "Las retribuciones del segundo semestre son correctas y se suman a A y C.",
        c: "La solicitud es necesaria para reingresar, junto con las garantías económicas anteriores.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Puede solicitar esta excedencia quien está en reasignación, expectativa de destino o excedencia forzosa como consecuencia de planes de ordenación del empleo público.",
      descartes: {
        a: "La reasignación es uno de los tres ámbitos personales admitidos.",
        b: "La expectativa de destino también permite solicitarla, sin excluir A ni C.",
        c: "La excedencia forzosa derivada del plan completa la enumeración.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El paso a excedencia incentivada exige una solicitud individual y voluntaria; la administración no puede imponerla como consecuencia automática del plan.",
      descartes: {
        b: "La ley fija una duración de cinco años, no la formula como un máximo libremente reducible en los términos de la opción.",
        c: "La incompatibilidad afecta a puestos del sector público, no impide trabajar también en el sector privado.",
        d: "B matiza mal la duración y C amplía indebidamente la prohibición laboral.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Si no se solicita el reingreso en plazo, se declara de oficio la excedencia por interés particular.",
      descartes: {
        a: "El plazo disponible es de treinta días naturales, no veinte.",
        c: "La permanencia mínima posterior es de dos años, no cinco.",
        d: "La opción C altera la duración y no puede unirse a B.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La indemnización equivale a una mensualidad por cada año de servicios efectivos, con un máximo de veinticuatro mensualidades.",
      descartes: {
        a: "Si no hay vacante, la persona continúa en excedencia incentivada hasta que aparezca; no pasa a interés particular.",
        b: "Se excluyen los complementos ligados a objetivos de gestión y las gratificaciones extraordinarias, no el complemento de destino en general.",
        d: "A y B describen de forma incorrecta la espera del reingreso y la base de la indemnización.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "No reserva puesto, no computa para carrera, trienios o Seguridad Social y admite renuncia con devolución proporcional de la indemnización. Son tres efectos coherentes con su carácter incentivado.",
      descartes: {
        a: "La pérdida de reserva es cierta y debe reunirse con B y C.",
        b: "La ausencia de cómputo también forma parte del régimen completo.",
        c: "La renuncia anticipada es posible, pero obliga a reintegrar la parte no justificada de la compensación.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La excedencia por servicios en el sector público abarca personal funcionario de carrera o interino, estatutario fijo o temporal y laboral fijo o temporal en otra plaza o entidad pública.",
      descartes: {
        a: "Las situaciones funcionariales están incluidas, junto con las estatutarias y laborales.",
        b: "El personal estatutario también puede originar la excedencia, sin excluir A ni C.",
        c: "La relación laboral pública completa el conjunto de vínculos admitidos.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Se declara de oficio al pasar a otro cuerpo, escala, agrupación o puesto laboral dentro de la misma administración o entidad pública.",
      descartes: {
        b: "Fuera de ese supuesto interno, la declaración se realiza a instancia de la persona interesada.",
        c: "No siempre se solicita: los cambios dentro de la misma administración operan de oficio.",
        d: "La opción omite el trabajo laboral en la misma administración, que también activa la declaración automática.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Al cesar en la relación que motivó la excedencia hay treinta días naturales para pedir el reingreso.",
      descartes: {
        a: "Puede mantenerse mientras dure la relación de servicios; no existe un máximo general de cinco años.",
        c: "La falta de solicitud lleva a excedencia por interés particular durante al menos dos años, no a continuar en esta modalidad.",
        d: "A y C contradicen la duración vinculada al servicio y la consecuencia del incumplimiento.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La persona conserva su condición de funcionaria de carrera en la administración de origen aunque preste servicios en otra entidad.",
      descartes: {
        b: "No mantiene reserva de puesto ni destino, incluso si el nuevo servicio pertenece al mismo sector público.",
        c: "Se aplica el régimen de la administración de destino efectivo, no el de origen.",
        d: "B y C invierten dos consecuencias del artículo 148.5.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "El cómputo de trienios y carrera y la participación en provisión sin renunciar al nuevo puesto se reconocen en el caso especial de entidades instrumentales creadas o dotadas con personal mediante programas o convenios.",
      descartes: {
        a: "No es una garantía general para cualquier excedencia por servicio público.",
        b: "Sí existe en los supuestos organizativos descritos por el artículo 148.6.",
        d: "La opción C delimita correctamente cuándo se aplica este tratamiento favorable.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Si la entidad deja de pertenecer al sector público por cambiar su naturaleza, la persona pasa a excedencia voluntaria por interés particular.",
      descartes: {
        a: "La expectativa de destino no responde a la salida de la entidad del perímetro público.",
        c: "No se convierte en excedencia forzosa, porque el artículo establece una modalidad voluntaria concreta.",
        d: "La relación con la entidad continúa fuera del sector público y no permite mantener el servicio activo funcionarial.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "En ese cambio no se exige un período mínimo previo y el retorno sigue las reglas de la excedencia para prestar servicios en el sector público.",
      descartes: {
        a: "La dispensa del período mínimo es cierta y se acompaña del régimen especial de B.",
        b: "Las reglas de permanencia y reingreso también se conservan, junto con la dispensa.",
        d: "Ambas garantías aparecen en el cierre del artículo 148.7.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 2 }, (_, index) => [index + 1, articleReference(146)]),
    ...Array.from({ length: 5 }, (_, index) => [index + 3, articleReference(147)]),
    ...Array.from({ length: 7 }, (_, index) => [index + 8, articleReference(148)]),
  ]),
});
