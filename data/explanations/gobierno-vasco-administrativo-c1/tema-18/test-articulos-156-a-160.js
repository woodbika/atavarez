import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-156-a-160",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El órgano competente acuerda el reingreso por resolución y fija la fecha en que debe producirse y comienzan sus efectos económicos.",
      descartes: {
        a: "Cada situación administrativa tiene su propio plazo; no existe uno único establecido para todas.",
        c: "La falta injustificada de toma de posesión lleva a excedencia voluntaria por interés particular, no forzosa.",
        d: "A generaliza el plazo y C identifica mal la situación resultante.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El retorno exige respetar incompatibilidades, se dirige a una dotación sin titular adecuada al perfil y no puede ocupar puestos ya comprometidos individualmente en selección o provisión.",
      descartes: {
        a: "El régimen de incompatibilidades es una condición válida y se suma a B y C.",
        b: "La adecuación profesional de la vacante también es necesaria, junto con los otros límites.",
        c: "La protección de los procesos ya convocados completa las tres garantías del artículo 156.4.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Cuando existe reserva, el reingreso debe pedirse y efectuarse dentro del plazo específico de la situación de procedencia.",
      descartes: {
        b: "Los efectos comienzan en la fecha de notificación, no al día siguiente.",
        c: "El plazo máximo para materializarlo es de tres días, no diez.",
        d: "B y C alteran respectivamente el inicio y la duración del plazo.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Quien perdió la reserva durante esa situación y después cesa por una causa legal reingresa mediante adscripción provisional en su administración de origen hasta obtener destino definitivo.",
      descartes: {
        b: "La misma localidad es preferente, pero si no es posible puede utilizarse el mismo territorio histórico.",
        c: "El nivel puede ser hasta dos niveles inferior al anterior, no solo uno.",
        d: "B convierte una preferencia en obligación y C reduce el margen de nivel.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Sin reserva también puede reingresarse por adscripción provisional a una vacante compatible hasta lograr un destino definitivo por provisión ordinaria.",
      descartes: {
        a: "Concurso y libre designación son la vía preferente, no la única posible «en todo caso».",
        c: "El puesto provisional puede quedar hasta dos niveles por debajo del grado consolidado, no solo uno.",
        d: "A excluye la alternativa provisional y C altera su límite de nivel.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "El orden de prelación reúne, en ese orden, las doce situaciones enumeradas en las tres opciones, desde excedencia forzosa temporal hasta suspensión de funciones.",
      descartes: {
        a: "Los cuatro primeros puestos de prioridad están correctamente ordenados y se completan con B y C.",
        b: "El bloque intermedio conserva el orden legal entre excedencias protectoras y familiares.",
        c: "Las cuatro situaciones finales cierran la prelación sin desplazar los bloques anteriores.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La excedencia forzosa procede tanto cuando falta una vacante presupuestada compatible como cuando existe pero la persona no cumple sus requisitos de acceso.",
      descartes: {
        a: "La ausencia de vacante es una causa válida, junto con el incumplimiento de requisitos de B.",
        b: "La falta de requisitos también impide reingresar y se suma a A.",
        d: "Las dos circunstancias aparecen expresamente en el artículo 158.4.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Al personal interino se le aplican servicio activo y suspensión de funciones, adaptados a la temporalidad de su vínculo.",
      descartes: {
        a: "El interés particular no forma parte de las situaciones generales reconocidas al personal interino.",
        b: "Combina correctamente la suspensión con una excedencia que no le corresponde.",
        d: "La opción C reproduce las dos situaciones del artículo 159.1.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Además, puede acogerse con reserva a excedencia por cuidado familiar y por violencia de género o terrorista.",
      descartes: {
        b: "Estas excedencias sí mantienen inicialmente la reserva del puesto.",
        c: "La agrupación familiar no está entre las modalidades adicionales del personal interino.",
        d: "Además de introducir una situación no prevista, elimina la reserva reconocida por la ley.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "La reserva termina si el puesto se cubre reglamentariamente con personal de carrera, desaparece la causa del nombramiento interino o concurre otra causa legal de cese.",
      descartes: {
        a: "La provisión por personal de carrera extingue la reserva, junto con B y C.",
        b: "Si desaparece la necesidad temporal tampoco puede mantenerse el puesto reservado.",
        c: "Las demás causas de cese del personal interino completan el conjunto.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "El personal laboral se rige por el Estatuto de los Trabajadores y por el convenio colectivo que resulte aplicable.",
      descartes: {
        a: "El título funcionarial no se aplica directamente y en bloque al personal laboral.",
        c: "Son los convenios los que pueden extender reglas compatibles con el Estatuto, no el Estatuto el que remite en los términos de la opción.",
        d: "La opción B identifica las dos fuentes principales del régimen laboral.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: {
    1: articleReference(156), 2: articleReference(156),
    3: articleReference(157), 4: articleReference(157),
    5: articleReference(158), 6: articleReference(158), 7: articleReference(158),
    8: articleReference(159), 9: articleReference(159), 10: articleReference(159),
    11: articleReference(160),
  },
});
