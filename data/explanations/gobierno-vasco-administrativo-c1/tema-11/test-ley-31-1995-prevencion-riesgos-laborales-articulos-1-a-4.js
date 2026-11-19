import { articleReference, defineExplanationSet, referencesFromQuestionRanges } from "../../explanation-schema.js";

const explanations = {
  testId: "test-ley-31-1995-prevencion-riesgos-laborales-articulos-1-a-4",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La norma estudiada es la Ley 31/1995, de 8 de noviembre, de Prevención de Riesgos Laborales.",
      descartes: {
        b: "La numeración 30/1995 no corresponde a la ley identificada en la ficha teórica.",
        c: "Tampoco es la Ley 29/1995.",
        d: "La opción A reproduce la identificación correcta de la norma.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La normativa preventiva comprende la Ley 31/1995, sus disposiciones de desarrollo o complementarias y las demás normas legales o convencionales con prescripciones preventivas laborales.",
      descartes: {
        a: "La ley forma parte del conjunto, pero no lo agota.",
        b: "Las disposiciones de desarrollo también se integran en él, junto con las fuentes de A y C.",
        c: "Las restantes normas preventivas están incluidas, sin excluir la ley ni sus disposiciones complementarias.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "El objeto legal es promover conjuntamente la seguridad y la salud de las personas trabajadoras mediante medidas y actividades preventivas.",
      descartes: {
        a: "La seguridad es uno de los dos bienes protegidos y debe completarse con la salud.",
        b: "La salud también integra el objeto, junto con la seguridad mencionada en A.",
        d: "Las dos primeras opciones recogen componentes expresos del artículo 2.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Los principios generales abarcan la prevención y protección, la eliminación o reducción del riesgo y la información, consulta, participación y formación preventiva.",
      descartes: {
        a: "La prevención para proteger seguridad y salud es correcta, pero constituye solo una parte del conjunto.",
        b: "Eliminar o disminuir riesgos también es un principio, acompañado de los demás elementos.",
        c: "Información, participación y formación completan, pero no sustituyen, las reglas de A y B.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Para alcanzar sus fines, la ley regula actuaciones de las Administraciones públicas, empresarios, trabajadores y sus respectivas organizaciones representativas.",
      descartes: {
        a: "Las Administraciones intervienen, aunque no son los únicos sujetos regulados.",
        b: "Empresarios y su representación están incluidos junto con Administraciones y trabajadores.",
        c: "Los trabajadores y sus organizaciones también aparecen, en un marco que abarca a todos los sujetos enumerados.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Las disposiciones laborales son derecho necesario mínimo indisponible: los convenios colectivos pueden mejorarlas y desarrollarlas.",
      descartes: {
        b: "Un convenio no puede empeorar ese nivel mínimo de protección.",
        c: "Mejorar y empeorar no son posibilidades equivalentes frente a una norma mínima indisponible.",
        d: "La facultad de mejora convencional está expresamente reconocida.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La ley se aplica tanto a las relaciones laborales del Estatuto de los Trabajadores como a las relaciones administrativas o estatutarias del personal al servicio de las Administraciones.",
      descartes: {
        a: "El ámbito laboral ordinario está incluido, pero no excluye al empleo público.",
        b: "Las relaciones administrativas o estatutarias también están cubiertas con sus peculiaridades.",
        d: "Los dos ámbitos figuran en el artículo 3.1.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Cuando sus particularidades impiden aplicar la ley, quedan fuera determinadas funciones públicas, entre ellas policía y seguridad y ciertos servicios operativos de protección civil y peritaje forense.",
      descartes: {
        a: "Policía, seguridad y resguardo aduanero forman parte de las exclusiones, junto con el supuesto de B.",
        b: "La excepción para protección civil y peritaje se limita a grave riesgo, catástrofe o calamidad, y acompaña a la de A.",
        d: "Ambos supuestos están enumerados en el artículo 3.2.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "En centros y establecimientos militares se aplica la Ley 31/1995 con las particularidades previstas en su normativa específica.",
      descartes: {
        a: "La ley resulta aplicable, pero debe atenderse también a las particularidades de B.",
        b: "La normativa específica modula la aplicación sin desplazar por completo la ley preventiva.",
        d: "Las dos primeras afirmaciones se complementan conforme al artículo 3.3.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Prevención es el conjunto de actividades o medidas adoptadas o previstas en todas las fases de la empresa para evitar o disminuir riesgos laborales.",
      descartes: {
        a: "Esa formulación define una condición de trabajo.",
        b: "Probabilidad y severidad se utilizan para valorar la gravedad de un riesgo laboral.",
        d: "Esta alternativa repite la definición de condición de trabajo y no la de prevención.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Riesgo laboral es la posibilidad de que una persona trabajadora sufra un daño determinado derivado del trabajo.",
      descartes: {
        a: "La materialización probable e inmediata de un daño grave define el riesgo grave e inminente.",
        b: "La ausencia de medidas preventivas caracteriza procesos o equipos potencialmente peligrosos.",
        d: "Las opciones A y B corresponden a conceptos diferentes del riesgo laboral general.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Condición de trabajo es cualquier característica capaz de influir significativamente en la generación de riesgos para la seguridad y la salud.",
      descartes: {
        b: "Máquinas, aparatos o instalaciones utilizados en el trabajo constituyen equipos de trabajo.",
        c: "Enfermedades, patologías o lesiones son daños derivados del trabajo.",
        d: "El equipo llevado para proteger frente a riesgos es un equipo de protección individual.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "La definición incluye las características de locales y equipos, los agentes presentes y los procedimientos de utilización que influyen en la generación del riesgo.",
      descartes: {
        a: "Las características del centro están incluidas, junto con agentes y procedimientos.",
        b: "La naturaleza y presencia de agentes también cuenta, sin excluir las restantes condiciones.",
        c: "Los procedimientos de utilización son otro componente de la misma enumeración.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-11-gobierno-vasco",
  references: referencesFromQuestionRanges([
    { from: 1, to: 2, reference: articleReference(1) },
    { from: 3, to: 6, reference: articleReference(2) },
    { from: 7, to: 9, reference: articleReference(3) },
    { from: 10, to: 13, reference: articleReference(4) },
  ]),
});
