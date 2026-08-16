import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-78-y-79",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La oposición ordena a las personas aspirantes mediante pruebas que miden su idoneidad y capacidad; esa es exactamente la definición del enunciado.",
      descartes: {
        b: "El concurso compara méritos conforme a un baremo y no consiste, por definición, en celebrar pruebas selectivas.",
        c: "El concurso-oposición combina pruebas y valoración de méritos, mientras que aquí solo se describe la primera fase.",
        d: "La libre designación es una forma de provisión de puestos y no responde a esta definición de acceso.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La sucesión de pruebas selectivas y valoración de méritos caracteriza al concurso-oposición, que reúne las dos técnicas en un único proceso.",
      descartes: {
        a: "En la oposición se valoran las pruebas, pero no se añade necesariamente una fase de méritos como la descrita.",
        b: "El concurso se centra en los méritos y no incluye la celebración sucesiva de pruebas selectivas.",
        d: "La libre designación no combina estas dos fases ni es un sistema selectivo de acceso.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "En el concurso-oposición, los méritos deben tener un peso proporcionado, no pueden decidir por sí solos el resultado y su puntuación no supera el 45 % del máximo de la oposición.",
      descartes: {
        a: "La proporcionalidad es una garantía cierta, pero la pregunta reúne además el límite decisorio y el tope del 45 %.",
        b: "Que los méritos no decidan solos es correcto, aunque falta concretar su peso proporcionado y su máximo cuantitativo.",
        c: "El 45 % es el límite legal, pero no sustituye las otras dos garantías de la fase de concurso.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La ley permite usar excepcionalmente el concurso para personal investigador y para los demás puestos que otra ley determine.",
      descartes: {
        a: "La oposición se basa en pruebas y no es el sistema excepcional al que se refiere esta previsión.",
        c: "El concurso-oposición es ordinario y combina fases; el supuesto citado autoriza una valoración exclusivamente meritocrática.",
        d: "La libre designación no es uno de los sistemas de acceso enumerados en el artículo 78.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "El órgano de selección no puede proponer más personas aprobadas que plazas convocadas, salvo que la propia convocatoria haya previsto esa posibilidad.",
      descartes: {
        b: "La limitación legal opera frente al exceso de propuestas, no frente a que queden plazas sin cubrir por falta de personas aprobadas.",
        c: "Las dos afirmaciones no son equivalentes: únicamente la prohibición de superar el número de plazas refleja la norma.",
        d: "No siempre debe existir igualdad exacta; pueden quedar vacantes y cabe la excepción expresamente prevista en la convocatoria.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Cuando inicialmente se propone el mismo número de personas que plazas, el órgano convocante puede pedir una relación complementaria con quienes siguen en orden, superaron las pruebas y cumplen los requisitos.",
      descartes: {
        a: "Este presupuesto es necesario, pero por sí solo no identifica qué personas pueden integrar la relación complementaria.",
        b: "Describe correctamente a quienes siguen a las propuestas, aunque falta el contexto de igualdad entre propuestas y plazas convocadas.",
        d: "Ambas condiciones aparecen en el artículo 78 y funcionan conjuntamente.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La relación complementaria se utiliza ante renuncias previas al nombramiento o toma de posesión, excedencia sin reserva solicitada entonces o falta de toma de posesión efectiva.",
      descartes: {
        a: "La adjudicación de destino de la promoción interna no es el hecho que activa esta sustitución de personas seleccionadas.",
        c: "No son ciertos ambos supuestos: la situación descrita en la opción A queda fuera de la relación legal.",
        d: "La opción B reproduce los casos en los que el órgano convocante puede acudir a la lista complementaria.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "La oferta puede ampliarse hasta un 10 % con vacantes generadas desde su aprobación, lo que permite incorporarlas al proceso sin una nueva oferta.",
      descartes: {
        a: "El 5 % queda por debajo del margen adicional que autoriza el artículo 78.",
        c: "El 15 % rebasa el máximo legal y no puede justificarse por la mera aparición de nuevas vacantes.",
        d: "Existe una cifra expresa y es el 10 %, por lo que sí hay una respuesta correcta.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Las bases deben indicar las titulaciones y conocimientos exigidos para los puestos o agrupaciones vinculados a cada cuerpo, escala o grupo laboral convocado.",
      descartes: {
        a: "Invierte la clasificación: las referencias a cuerpo, escala o agrupación sin titulación corresponden al personal funcionario, no al laboral como afirma la opción.",
        b: "Los porcentajes propuestos no coinciden con la regulación de los cupos de promoción interna y discapacidad.",
        c: "Las medidas de acción positiva no se imponen con la fórmula absoluta «en todo caso» empleada en la alternativa.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Las bases identifican el perfil lingüístico y las plazas que exigen acreditarlo, de acuerdo con la relación de puestos de trabajo.",
      descartes: {
        b: "Debe determinarse la composición del órgano, pero la ley no exige publicar en las bases la identidad nominal de todas sus personas integrantes en esos términos.",
        c: "La referencia correcta es a la tasa o precio que proceda, no al hecho imponible formulado como contenido necesario de las bases.",
        d: "Al fallar las opciones B y C, no puede afirmarse que las tres sean correctas.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Las bases deben precisar los instrumentos y su peso, facilitar el modelo o acceso electrónico de solicitud y explicar cómo se publicará cada fase. Los tres contenidos garantizan reglas conocidas desde el inicio.",
      descartes: {
        a: "Es un contenido obligatorio, pero no el único de los tres que enumera la pregunta.",
        b: "El canal para presentar la solicitud también debe constar, junto con los instrumentos y el sistema de publicidad.",
        c: "La publicidad de las fases se regula en las bases, aunque elegir solo esta opción dejaría incompleta la respuesta.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Quien participa tiene derecho a conocer por medios electrónicos el calendario del proceso y sus distintas fases.",
      descartes: {
        b: "La publicidad no se plantea como una elección entre boletín oficial o sede electrónica: la convocatoria debe seguir los cauces y publicaciones que fija la norma.",
        c: "La ley permite difundir convocatorias y aspectos relevantes en medios de comunicación social; no lo prohíbe en todo caso.",
        d: "La negociación no queda limitada únicamente a los aspectos más relevantes con la rotundidad que introduce esta opción.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 8 }, (_, index) => [index + 1, articleReference(78)]),
    ...Array.from({ length: 4 }, (_, index) => [index + 9, articleReference(79)]),
  ]),
});
