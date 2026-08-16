import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-136-a-138",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "Una situación distinta del servicio activo comienza en la fecha que indique la resolución que la concede; no existe un aplazamiento automático al día o al mes siguiente.",
      descartes: {
        b: "El día siguiente solo sería aplicable si la resolución lo fijara, no como regla general.",
        c: "La ley tampoco demora necesariamente los efectos hasta el mes posterior.",
        d: "El artículo 136.2 sí determina cómo se fija el inicio de la situación.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Quien prolonga voluntariamente el servicio más allá de la edad ordinaria de jubilación no puede obtener ninguna modalidad de excedencia voluntaria.",
      descartes: {
        a: "La excedencia forzosa no es una modalidad voluntaria y queda fuera de esta prohibición concreta.",
        b: "La expectativa de destino es otra situación administrativa, no una excedencia voluntaria.",
        c: "El interés particular está prohibido, pero también lo están las restantes modalidades voluntarias; la opción se queda corta.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Si al alcanzar la edad ordinaria se está en excedencia voluntaria, no se concede la prórroga del servicio activo y la jubilación ordinaria se declara de oficio.",
      descartes: {
        a: "La imposibilidad de prorrogar es cierta, pero debe completarse con la consecuencia administrativa de B.",
        b: "La declaración de oficio también procede, junto con la negativa a prolongar el servicio.",
        d: "Las dos reglas aparecen unidas en el artículo 136.4.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Es incorrecto exigir un reingreso previo: si se cumplen los requisitos, puede pasarse directamente de una situación administrativa a otra.",
      descartes: {
        a: "El órgano competente en empleo público resuelve el cambio de situación.",
        b: "La anotación en el registro de personal garantiza que el historial administrativo quede actualizado.",
        c: "Reunir los requisitos propios de la nueva situación es una condición necesaria para el cambio.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La posibilidad de participar tanto en provisión como en promoción corresponde a quien permanece en una situación con reserva de puesto.",
      descartes: {
        a: "La ley no extiende esta garantía indistintamente a situaciones sin reserva.",
        c: "La participación no se limita a la provisión; también comprende la promoción profesional.",
        d: "La promoción es solo una de las dos vías que la persona puede utilizar.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Los cambios de situación deben anotarse en el registro de personal. En este caso los acuerda la administración de origen y se comunican a la de destino.",
      descartes: {
        a: "La administración de destino no efectúa el cambio mientras la persona no se haya integrado en ella.",
        b: "La comunicación viaja a la administración de destino, no a la de origen que ya dictó el cambio.",
        d: "A y B invierten el reparto de funciones entre origen y destino.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Se mantiene el servicio activo cualquiera que sea la administración u organismo de destino, siempre que la ley no obligue a declarar otra situación.",
      descartes: {
        a: "La definición incluye destinos provisionales y definitivos; limitarla a los definitivos deja fuera una parte de la regla.",
        c: "La opción A contiene esa restricción indebida y no puede combinarse con B.",
        d: "La cláusula general de B forma parte del artículo 137.1.a.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El plazo posesorio entre el cese en un puesto y la toma de posesión del siguiente se considera servicio activo.",
      descartes: {
        b: "La ley se refiere a servicios en el sector público cuando una disposición lo establezca, no al sector privado.",
        c: "Incluye incapacidad temporal, embarazo y lactancia, pero no una incapacidad permanente, que puede conducir a jubilación.",
        d: "Las imprecisiones de B y C impiden reunir las tres opciones.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El artículo 137.2 reconoce todos los derechos de la condición funcionarial y somete a sus deberes; además aplica la ley, su desarrollo y las condiciones de la entidad de servicio. Se conserva la opción D registrada, aunque A y B sí coinciden con la teoría.",
      descartes: {
        a: "Esta afirmación reproduce la primera parte del artículo 137.2 y, por tanto, está respaldada por la ficha teórica.",
        b: "También coincide con la segunda parte del precepto sobre las normas y condiciones de trabajo aplicables.",
        c: "Al ser ciertas A y B, esta opción conjunta sería la coherente con el artículo, en contraste con la clave almacenada.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto: "Las opciones A y B reproducen las dos oraciones del artículo 137.2, por lo que la teoría apunta a la respuesta conjunta C. Se mantiene la opción D registrada en el test.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "En servicios especiales se cobran las retribuciones del cargo realmente ejercido, no las del puesto funcionarial de origen, sin perder por ello los trienios reconocidos.",
      descartes: {
        b: "La garantía expresa alcanza a los trienios, no a todas las retribuciones básicas en bloque.",
        c: "Los trienios los paga normalmente la administración de destino; solo si legalmente no puede, responde la que declaró los servicios especiales.",
        d: "B amplía la garantía y C invierte el orden de las administraciones pagadoras.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "El tiempo cuenta para carrera, trienios, promoción interna y Seguridad Social, salvo para quien transfiera sus derechos al incorporarse a instituciones europeas o asimiladas.",
      descartes: {
        a: "El cómputo general está bien descrito y debe integrarse con la excepción de B.",
        b: "La transferencia europea impide reconocer esos mismos efectos, completando la regla general.",
        d: "El artículo 138.4 contiene tanto el cómputo como su excepción.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "La administración debe garantizar el reingreso conforme a los derechos consolidados y al sistema de carrera de la administración de pertenencia.",
      descartes: {
        a: "Existe reserva del puesto obtenido por concurso, pero no un derecho preferente general a ganar el siguiente concurso.",
        c: "La preferencia inventada en A impide considerar correctas ambas opciones.",
        d: "La garantía de reingreso está regulada de forma expresa en el artículo 138.5.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Entre la pérdida de la causa de servicios especiales y el reingreso efectivo, la persona continúa formalmente en servicios especiales para evitar un vacío de situación.",
      descartes: {
        a: "El plazo para solicitar el reingreso es de treinta días naturales, no veinte.",
        b: "La excedencia declarada por incumplimiento exige dos años mínimos, no tres.",
        d: "Solo C coincide con la teoría; A y B alteran dos plazos distintos.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Quien pierde el mandato parlamentario por disolución o finalización puede seguir en servicios especiales hasta que se constituya la nueva cámara.",
      descartes: {
        b: "La declaración es de oficio cuando la causa nace en la misma administración; en los demás casos se solicita y se acredita, no se aplica siempre un único cauce.",
        c: "Los efectos comienzan cuando se produce el supuesto que origina la situación, no necesariamente en la fecha posterior de la resolución.",
        d: "B y C omiten el régimen dual y desplazan indebidamente la fecha de efectos.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 6 }, (_, index) => [index + 1, articleReference(136)]),
    ...Array.from({ length: 3 }, (_, index) => [index + 7, articleReference(137)]),
    ...Array.from({ length: 5 }, (_, index) => [index + 10, articleReference(138)]),
  ]),
});
