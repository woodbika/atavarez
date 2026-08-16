import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-100-y-101",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El concurso presta una atención especial al ajuste entre las competencias de la persona candidata y el perfil funcional del puesto, sin convertirlo en el único elemento valorable.",
      descartes: {
        a: "«Únicamente» excluiría los méritos y demás factores que el propio artículo 100 ordena valorar.",
        c: "No es una comprobación excepcional, sino un eje destacado de todos los concursos.",
        d: "La intensidad de esta valoración aparece expresamente definida como especial.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La experiencia en puestos similares o de la misma área funcional se valora siempre porque permite contrastar la familiaridad con tareas próximas a las del destino.",
      descartes: {
        a: "La evaluación del desempeño se valora siempre que exista, no solo cuando el resultado sea positivo.",
        c: "Las titulaciones deben guardar relación con el puesto; no se exige que sean superiores a las previstas en la relación de puestos.",
        d: "El euskera se valora cuando no es requisito; si ya lo es, opera como condición de acceso al puesto y no como mérito adicional.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Se valoran tanto la formación adecuada al puesto como los grados de desarrollo profesional que no sean ya requisito para desempeñarlo.",
      descartes: {
        a: "Los cursos pertinentes son un mérito necesario, pero la pregunta añade otro factor igualmente obligatorio.",
        b: "La carrera profesional cuenta en la medida indicada, junto con la formación de la opción A.",
        d: "Ambos elementos figuran en la lista mínima del artículo 100.1.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Además de los méritos obligatorios, pueden valorarse idiomas, docencia e investigación, participación en proyectos o comisiones, formación y actividades de planes estratégicos.",
      descartes: {
        a: "Los idiomas son un mérito posible, pero no el único de los que recoge esta enumeración abierta.",
        b: "La actividad docente e investigadora puede aportar valor al perfil y se suma al resto de opciones.",
        c: "Los proyectos y actividades estratégicas también son valorables, sin excluir A ni B.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La ley permite remover por rendimiento notoriamente insuficiente solo cuando no comporte inhibición. La opción afirma lo contrario —que sí comporta inhibición— y por eso no reproduce una causa legal de remoción.",
      descartes: {
        a: "Una alteración sobrevenida del contenido que cambie las bases de la convocatoria sí puede justificar la remoción.",
        c: "La amortización por razones económicas, técnicas, organizativas o productivas también figura entre las causas.",
        d: "No todas son válidas: la opción B cambia el requisito negativo «no comporte inhibición».",
      },
    },
    {
      preguntaId: 6,
      justificacion: "La alteración sobrevenida del puesto debe quedar reflejada en la relación de puestos de trabajo o, cuando exista, en el instrumento complementario de gestión.",
      descartes: {
        a: "La plantilla presupuestaria no es el instrumento que el artículo 101 utiliza para formalizar este cambio funcional.",
        b: "La relación de puestos es válida, pero puede sustituirla el instrumento complementario en el supuesto previsto.",
        c: "El instrumento complementario también sirve, aunque no excluye la relación de puestos como cauce ordinario.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La inadaptación a los nuevos requerimientos debe acreditarse de forma fehaciente mediante la evaluación del desempeño.",
      descartes: {
        b: "Si las carencias pueden subsanarse con formación, todavía no concurre esta causa; se activa cuando no pueden corregirse o no se supera el proceso formativo.",
        c: "La opción B invierte la condición legal y no puede sumarse a la acreditación de A.",
        d: "El artículo 101.1.c sí establece un medio concreto para constatar la inadaptación.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Puede cesarse cuando se comprueba que el grado profesional no garantiza un desempeño eficaz y esa insuficiencia aparece tras la primera evaluación realizada desde la obtención del puesto.",
      descartes: {
        a: "La falta de garantía del grado es necesaria, pero debe verificarse en el momento evaluativo descrito en B.",
        b: "La primera evaluación aporta el marco de comprobación, aunque ha de arrojar el resultado sustantivo de A.",
        d: "Las dos condiciones integran conjuntamente la causa del artículo 101.1.d.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "La reasignación o redistribución de efectivos y la readscripción de puestos pueden conllevar la remoción cuando derivan de las medidas de ordenación previstas en la ley.",
      descartes: {
        a: "La reasignación y la redistribución sí cuentan, pero la readscripción también está incluida.",
        b: "La readscripción es otra medida válida y debe reunirse con las de la opción A.",
        d: "El artículo 101.1.f menciona expresamente ambas familias de procedimientos.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "La amortización del puesto sigue su propio procedimiento y queda fuera del expediente contradictorio común con audiencia y consulta al órgano de representación.",
      descartes: {
        a: "La alteración sobrevenida del contenido sí se tramita mediante el expediente contradictorio general.",
        c: "La insuficiencia del grado profesional requiere las garantías procedimentales descritas en el enunciado.",
        d: "La inadaptación funcional acreditada también se somete a resolución motivada, audiencia y participación representativa.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Si la persona removida no obtiene otro puesto por concurso o libre designación, queda adscrita provisionalmente hasta lograr un destino definitivo.",
      descartes: {
        b: "La remoción no determina automáticamente una excedencia forzosa.",
        c: "La expectativa de destino pertenece a otros procesos de ordenación y no es la consecuencia prevista aquí.",
        d: "Tampoco se presume una excedencia voluntaria, que exige una decisión y requisitos propios.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 4 }, (_, index) => [index + 1, articleReference(100)]),
    ...Array.from({ length: 7 }, (_, index) => [index + 5, articleReference(101)]),
  ]),
});
