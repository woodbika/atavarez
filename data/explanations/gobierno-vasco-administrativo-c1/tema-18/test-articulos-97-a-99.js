import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-97-a-99",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El concurso es el procedimiento ordinario para proveer puestos entre personal que ya ha accedido a la función pública.",
      descartes: {
        b: "La libre designación queda reservada a puestos concretos de especial responsabilidad o confianza.",
        c: "La oposición selecciona para acceder al empleo público; no es un procedimiento de provisión de puestos.",
        d: "El concurso-oposición también pertenece al acceso y combina pruebas con méritos.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "Un concurso es específico cuando las tareas del puesto obligan a valorar conocimientos o destrezas particulares.",
      descartes: {
        a: "El concurso general se utiliza cuando las funciones no necesitan esa valoración especializada.",
        c: "La ley distingue concursos generales y específicos; no crea una categoría denominada «concretos».",
        d: "La modalidad específica está prevista precisamente para esta necesidad.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "El concurso combina la medición de conocimientos, destrezas, aptitudes y actitudes con la valoración de los méritos de las personas candidatas.",
      descartes: {
        a: "La medición competencial forma parte del procedimiento, pero no excluye el examen de méritos.",
        b: "Los méritos se valoran, aunque esa no es la única técnica que el artículo 97 permite emplear.",
        d: "Las dos descripciones parciales son compatibles y deben considerarse juntas.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Como regla, el concurso de traslados se convoca antes que el proceso selectivo de ingreso, salvo lo que disponga un plan de ordenación del empleo público.",
      descartes: {
        b: "Situarlo después invertiría el orden general previsto para que las vacantes se ofrezcan primero al personal existente.",
        c: "El artículo 97.4 sí fija una relación temporal entre ambos procedimientos.",
        d: "La prioridad es la regla de partida y el plan puede excepcionarla; no nace únicamente cuando el plan la declara.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Los concursos deben convocarse, con carácter general, como máximo cada tres años desde la convocatoria anterior, salvo justificación en el plan de ordenación.",
      descartes: {
        b: "Tres años es un tope de espera, no una periodicidad mínima que impida convocar antes.",
        c: "El plazo ordinario no alcanza cinco años.",
        d: "Además de usar cinco años, presenta el plazo como mínimo cuando la norma lo configura como máximo.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La convocatoria puede abarcar todos los puestos, un área especializada o vacantes vinculadas a uno o varios cuerpos, escalas o agrupaciones. Las tres configuraciones atienden a necesidades distintas.",
      descartes: {
        a: "Convocar la generalidad es posible, pero no impide delimitar un sector o determinados cuerpos.",
        b: "Un área especializada es un ámbito válido, junto con las otras fórmulas enumeradas.",
        c: "También pueden agruparse vacantes por cuerpos o escalas, sin que sea la única extensión admisible.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El artículo 98 permite delimitar el concurso por tipología de puestos o de méritos y también convocar un puesto individualizado si lo requieren las necesidades del servicio.",
      descartes: {
        a: "La tipología es un criterio correcto, aunque convive con la convocatoria individual.",
        b: "La individualización está autorizada, pero no excluye organizar el proceso por tipologías.",
        d: "Las dos modalidades aparecen en la enumeración legal.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Toda convocatoria de concurso debe incluir las vacantes ocupadas provisionalmente o mediante comisión de servicios, para que puedan cubrirse de forma definitiva.",
      descartes: {
        b: "Excluirlas siempre perpetuaría una cobertura temporal y contradice el mandato del artículo 98.2.",
        c: "La inclusión no depende de que un plan de ordenación la autorice.",
        d: "Un plan tampoco puede convertir en optativo el mandato formulado «en todo caso».",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Los requisitos de la convocatoria solo pueden ser los de la relación de puestos y, en su caso, los del instrumento complementario; el convocante no puede añadirlos discrecionalmente.",
      descartes: {
        a: "Denominación, localización, retribuciones y jornada sí ofrecen la información básica del puesto.",
        c: "El baremo, las pruebas específicas y su eventual puntuación mínima son contenidos obligatorios.",
        d: "La composición del órgano de valoración también debe conocerse desde la convocatoria.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El plazo para presentar solicitudes nunca puede ser inferior a diez días hábiles; la convocatoria puede conceder un período mayor.",
      descartes: {
        b: "Diez días no es un máximo, sino el mínimo garantizado.",
        c: "La ley no eleva el umbral obligatorio a quince días.",
        d: "Tampoco prohíbe que el plazo supere quince días.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La excedencia por interés particular exige cumplir el período mínimo de permanencia antes de poder participar; hasta entonces impide acudir a la convocatoria.",
      descartes: {
        a: "Quien está en servicios especiales puede participar en procedimientos de provisión.",
        b: "El servicio activo es la situación ordinaria desde la que se concursa.",
        d: "La excedencia para cuidado de familiares no recibe aquí la misma restricción temporal que la excedencia por interés particular.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Tanto el servicio en otras administraciones como la suspensión no firme permiten concursar una vez cumplido el tiempo de permanencia aplicable.",
      descartes: {
        a: "Esta situación permite participar, aunque la misma regla alcanza también a la suspensión no firme.",
        b: "La suspensión no firme no cierra definitivamente el acceso al concurso; cumplido el plazo, se suma al supuesto A.",
        d: "El artículo 98.4 menciona expresamente ambas situaciones.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Mientras permanezca en adscripción provisional, el personal está obligado a concursar a puestos de su cuerpo, escala o agrupación.",
      descartes: {
        b: "Si no participa, se le adjudica de oficio un puesto definitivo según la convocatoria; no pasa a excedencia forzosa.",
        c: "La prohibición de volver a concursar dura dos años, no tres.",
        d: "Al ser incorrectas B y C, solo puede mantenerse la obligación expresada en A.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "El límite de dos años no se aplica cuando se pierde el puesto por remoción o por supresión; en ambos casos la salida no responde a una elección ordinaria de la persona.",
      descartes: {
        a: "La renuncia aceptada no figura entre las excepciones al período de permanencia.",
        b: "La remoción sí libera del límite, pero la supresión de la opción C produce el mismo efecto.",
        c: "La supresión es una excepción válida, aunque la respuesta completa debe incluir también la remoción.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Se negocian los puestos incluidos, el peso de los factores y la información de la convocatoria. Así la representación del personal interviene tanto en el alcance como en las reglas de valoración.",
      descartes: {
        a: "La determinación de puestos se negocia, pero no es el único aspecto sujeto a este trámite.",
        b: "La proporción de cada factor también se negocia junto con el contenido y la extensión de la convocatoria.",
        c: "La información exigida forma parte de la negociación, sin desplazar los otros dos elementos.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "Varias administraciones públicas vascas pueden acordar un proceso unitario de provisión, a propuesta de la Comisión de Coordinación del Empleo Público de Euskadi.",
      descartes: {
        b: "La Comisión formula la propuesta, pero el acuerdo corresponde a las administraciones participantes.",
        c: "El Consejo de Gobierno Vasco no decide por sí solo un proceso que puede afectar a varias administraciones autónomas.",
        d: "El artículo 99 atribuye expresamente esta facultad a las administraciones públicas vascas.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 5 }, (_, index) => [index + 1, articleReference(97)]),
    ...Array.from({ length: 10 }, (_, index) => [index + 6, articleReference(98)]),
    [16, articleReference(99)],
  ]),
});
