import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const testId = "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-76-y-77";

const explanations = {
  testId,
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El artículo 76 establece como regla general que la selección da acceso a cuerpos, escalas, agrupaciones profesionales sin requisito de titulación, grupos profesionales u otros sistemas de agrupación del personal empleado público.",
      descartes: {
        b: "El acceso directo a puestos o áreas funcionales es una posibilidad excepcional que debe prever una ley; no constituye la regla general preguntada.",
        c: "Las dos alternativas no tienen el mismo carácter: la primera describe la vía general y la segunda una excepción legal.",
        d: "Sí hay una opción ajustada al artículo 76: la que enumera los sistemas ordinarios de agrupación profesional.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "El artículo 76 permite incluir, como mínimo, una prueba práctica o de desarrollo de supuestos prácticos para comprobar la capacidad de aplicar los conocimientos.",
      descartes: {
        a: "La ley exige una prueba práctica como mínimo, no dos; una convocatoria podría prever más, pero ese no es el umbral legal.",
        c: "La norma sí regula esta cuestión y fija expresamente el mínimo de una prueba de carácter práctico.",
        d: "No se limita a recomendar pruebas prácticas: concreta que podrá incluirse al menos una.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "El período de prácticas o de prueba es selectivo, puede incorporar formación y tiene los límites temporales indicados para el grupo A y el resto del personal. Por eso las tres afirmaciones forman la respuesta completa.",
      descartes: {
        a: "Describe correctamente su carácter selectivo, pero deja fuera la posible formación y los límites de duración que también pregunta el conjunto.",
        b: "La formación puede integrarse en el período, aunque esta afirmación aislada no recoge las otras dos reglas aplicables.",
        c: "Los límites temporales forman parte de la regulación, pero no agotan el contenido: también son ciertas las opciones A y B.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El IVAP organiza o certifica la formación incorporada al período y, cuando se imparte para administraciones forales o locales, se requiere el convenio correspondiente. Ambas afirmaciones son compatibles.",
      descartes: {
        a: "La función atribuida al IVAP es correcta, pero no excluye la exigencia adicional de convenio en el ámbito foral y local.",
        b: "La necesidad de convenio también es cierta, aunque por sí sola omite quién organiza o certifica los cursos.",
        d: "El artículo 76 respalda las dos previsiones, de modo que no procede negar ambas.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La supervisión corresponde a una persona superior jerárquica o a quien esta delegue, porque debe valorar el desempeño de la persona candidata durante el período selectivo.",
      descartes: {
        a: "El IVAP puede intervenir en la formación, pero la ley no le atribuye por ello la supervisión individual de las prácticas.",
        b: "Trabajar en el centro donde se realizan las prácticas no basta para asumir esta función; se exige la posición jerárquica o su delegación.",
        d: "La norma sí identifica a la persona responsable de supervisar el período.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Quien supervisa debe valorar la idoneidad mediante un informe y remitirlo al órgano técnico de selección. Son dos pasos consecutivos de la misma función.",
      descartes: {
        a: "El informe es obligatorio, pero la tarea no termina al redactarlo: también debe enviarse al órgano técnico.",
        b: "La remisión es necesaria, aunque presupone la elaboración previa del informe de idoneidad.",
        d: "Las dos actuaciones aparecen expresamente reguladas y no pueden descartarse.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "El desarrollo reglamentario común de las circunstancias y condiciones de estos períodos corresponde al Gobierno Vasco.",
      descartes: {
        b: "La Comisión de Coordinación puede intervenir en criterios comunes, pero no recibe esta potestad reglamentaria concreta.",
        c: "El Parlamento aprueba leyes; aquí se pregunta por el desarrollo reglamentario que la propia ley encomienda al Gobierno.",
        d: "Las administraciones aplican los períodos en su ámbito, pero la regulación general no se atribuye separadamente a cada una.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El artículo 77 exige que la selección de personal interino y laboral temporal sea ágil y respete igualdad, mérito, capacidad, publicidad y libre concurrencia.",
      descartes: {
        b: "La provisión temporal sí puede incorporar un período de prueba o de formación cuando el procedimiento lo establezca.",
        c: "También pueden utilizarse listas de personas que superaron procesos selectivos sin obtener plaza; la prohibición formulada no existe.",
        d: "Solo la primera afirmación es válida: las otras dos contradicen las vías que permite el artículo 77.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "El artículo 77 admite compartir bolsas, constituirlas conjuntamente y acudir a los servicios públicos de empleo si no existen candidaturas suficientes. Las tres medidas sirven para atender necesidades temporales.",
      descartes: {
        a: "La colaboración mediante bolsas propias es posible, pero no es la única alternativa contemplada por la norma.",
        b: "Crear bolsas conjuntas es correcto y debe sumarse a las otras soluciones previstas.",
        c: "Recurrir a los servicios públicos de empleo es válido en ausencia de candidaturas, aunque no agota la enumeración.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "El artículo 78 enumera tres sistemas selectivos de acceso: oposición, concurso y concurso-oposición.",
      descartes: {
        a: "La oposición es uno de los sistemas, pero la respuesta omite el concurso y el concurso-oposición.",
        b: "La enumeración queda incompleta porque también existe el concurso en los supuestos legalmente previstos.",
        d: "La libre designación es un sistema de provisión de puestos, no un sistema selectivo de acceso al empleo público.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Aunque existen tres sistemas, los ordinarios para acceder al empleo público son la oposición y el concurso-oposición.",
      descartes: {
        a: "La oposición no es la única vía ordinaria; el concurso-oposición comparte esa condición.",
        c: "El concurso solo puede emplearse de forma excepcional en los casos establecidos por ley, por eso no integra la relación ordinaria.",
        d: "La libre designación pertenece a la provisión de determinados puestos y no sustituye al concurso-oposición en esta clasificación.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: {
    1: articleReference(76), 2: articleReference(76), 3: articleReference(76),
    4: articleReference(76), 5: articleReference(76), 6: articleReference(76),
    7: articleReference(76), 8: articleReference(77), 9: articleReference(77),
    10: articleReference(78), 11: articleReference(78),
  },
});
