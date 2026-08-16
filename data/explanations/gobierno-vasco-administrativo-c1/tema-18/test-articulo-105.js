import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulo-105",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El cese en libre designación conduce a adscripción provisional cuando no se conserva un puesto obtenido por concurso. La opción mantiene la reserva y, por tanto, describe el supuesto contrario.",
      descartes: {
        a: "La remoción de un destino logrado por concurso sí es una causa expresa de adscripción provisional.",
        c: "No son dos supuestos válidos, porque la reserva indicada en B impide acudir a la adscripción provisional.",
        d: "La remoción de la opción A sí activa este mecanismo, de modo que tampoco puede negarse ambas.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La renuncia aceptada, la llegada definitiva o reincorporación de la persona titular y la supresión del puesto y destino son causas de adscripción provisional. Las tres aparecen en el artículo 105.1.",
      descartes: {
        a: "La renuncia produce el efecto descrito cuando la acepta el órgano que efectuó el nombramiento, pero no es la única causa de la lista.",
        b: "La provisión definitiva o reincorporación del titular desplaza a quien ocupaba temporalmente el puesto y también exige otra adscripción.",
        c: "La supresión elimina el destino disponible, salvo la excepción de reasignación prevista en el artículo 112; se suma a A y B.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "La rehabilitación posterior a una jubilación por incapacidad permanente revisable permite reincorporarse definitivamente al puesto reservado; no genera adscripción provisional.",
      descartes: {
        a: "La rehabilitación tras perder la nacionalidad sí puede dar lugar a adscripción provisional, previa solicitud.",
        b: "También la rehabilitación tras una pena de inhabilitación integra los supuestos provisionales del artículo 105.",
        d: "La incapacidad revisable se diferencia de las otras dos porque existe un puesto reservado al que volver.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El reingreso desde una situación que no conserva puesto ni destino obliga a localizar provisionalmente un puesto compatible.",
      descartes: {
        a: "Cuando existe reserva, la persona puede reincorporarse al puesto conservado y no necesita esta vía.",
        c: "Las situaciones con y sin reserva producen efectos distintos; solo la segunda está incluida.",
        d: "El artículo 105.1.f regula de forma expresa el reingreso sin reserva.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El nuevo destino debe pertenecer al cuerpo, escala o agrupación correspondiente, la persona ha de cumplir sus requisitos y la asignación debe respetar su sistema de carrera y garantías.",
      descartes: {
        a: "El encuadre profesional es correcto, pero no basta sin acreditar requisitos y respetar el sistema de carrera.",
        b: "Reunir las condiciones de acceso es imprescindible, junto con los límites organizativos de A y las garantías de C.",
        c: "La carrera profesional ordena la asignación, pero también han de cumplirse las condiciones de las dos primeras opciones.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "El artículo 105.2 fija el día siguiente tanto para remoción, cese, supresión o desplazamiento como para la renuncia desde que es aceptada. Se conserva la opción A registrada, aunque la teoría también hace cierta la B.",
      descartes: {
        b: "Esta afirmación también coincide con la ley: en una renuncia, el efecto comienza el día siguiente a su aceptación, no a su mera presentación.",
        c: "La teoría conduce a considerar verdaderas A y B; por ello esta opción conjunta encajaría mejor que la clave almacenada.",
        d: "Existe regulación expresa del inicio de efectos para ambos grupos de causas.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto: "El artículo 105.2 aplica el día siguiente a los supuestos de la opción A y también a la renuncia aceptada de la opción B. La respuesta conjunta C sería coherente con la teoría, pero se mantiene la opción A registrada.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Durante la adscripción se garantizan, en todo caso, las retribuciones ligadas al grado personal o al nivel de desarrollo profesional ya consolidado.",
      descartes: {
        a: "Las retribuciones complementarias son las del puesto provisional que se desempeña, no las del puesto anterior como regla general.",
        c: "La opción A atribuye complementos del destino previo y no puede combinarse con la garantía correcta de B.",
        d: "El artículo 105.4 protege expresamente la retribución correspondiente al grado o desarrollo consolidado.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El complemento por diferencia retributiva se reserva al cese por supresión o a la remoción causada por una alteración sobrevenida del contenido del puesto.",
      descartes: {
        a: "No se reconoce en cualquier adscripción provisional; depende de las dos causas protegidas por el apartado 5.",
        c: "Una renuncia aceptada es voluntaria y no genera esta garantía retributiva específica.",
        d: "La renuncia no puede sumarse a la supresión o remoción protegidas.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El complemento transitorio permanece mientras no se obtenga un destino definitivo; no caduca automáticamente al cabo de unos meses.",
      descartes: {
        a: "La ley no fija una duración de tres meses.",
        b: "Tampoco establece un plazo de cuatro meses para extinguir la diferencia.",
        c: "Seis meses no es el criterio: lo decisivo es lograr un nuevo destino definitivo.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Para conservar el complemento hay que participar en todos los concursos admisibles y pedir la totalidad de destinos que puedan adjudicarse. No basta con una participación meramente formal.",
      descartes: {
        a: "Concursar es obligatorio, pero debe acompañarse de la solicitud completa indicada en B.",
        b: "Solicitar todos los destinos es la segunda condición y se suma a participar en los concursos correspondientes.",
        d: "El mantenimiento del complemento está sujeto expresamente a ambas cargas.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La preferencia por una sola vez en el siguiente concurso protege a quien perdió su puesto por supresión o por una alteración sobrevenida que motivó la remoción.",
      descartes: {
        a: "El derecho no acompaña a toda adscripción provisional, sino únicamente a las causas especialmente protegidas.",
        c: "La renuncia aceptada no concede preferencia sobre vacantes de la misma localidad.",
        d: "Solo B recoge los dos orígenes que permiten ejercer este derecho preferente.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "La adscripción termina si vuelve quien tenía reservado el puesto, si este se cubre definitivamente o se suprime, y si la persona pasa a otro puesto o deja el servicio activo.",
      descartes: {
        a: "La reincorporación de quien conserva la reserva es una causa válida, pero existen también las de B y C.",
        b: "La cobertura definitiva o supresión extingue la adscripción, junto con los demás supuestos enumerados.",
        c: "Cambiar de puesto o situación administrativa también la deja sin efecto, sin excluir A ni B.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  referenceForQuestion: () => articleReference(105),
});
