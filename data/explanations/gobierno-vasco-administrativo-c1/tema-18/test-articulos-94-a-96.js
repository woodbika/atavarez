import { articleReference, defineExplanationSet } from "../../explanation-schema.js";

const explanations = {
  testId: "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-94-a-96",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "La provisión debe respetar igualdad, mérito, capacidad, publicidad y transparencia. La idoneidad puede valorarse en otros procedimientos, pero no figura en esta enumeración de principios del artículo 94.",
      descartes: {
        a: "La igualdad sí preside el acceso a los puestos y evita diferencias de trato injustificadas.",
        c: "La capacidad forma parte expresa de los principios que han de regir la provisión.",
        d: "Publicidad y transparencia permiten conocer y controlar las reglas del procedimiento; ambas aparecen en la lista legal.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La provisión definitiva se realiza por concurso o libre designación. El concurso-oposición selecciona personal para acceder al empleo público, pero no provee definitivamente un puesto a quien ya es funcionario.",
      descartes: {
        a: "El concurso es el procedimiento ordinario de provisión definitiva y, por tanto, sí pertenece a esta categoría.",
        c: "La libre designación permite proveer definitivamente los puestos que la relación de puestos reserva a ese sistema.",
        d: "No todos los sistemas citados son de provisión: el concurso-oposición queda fuera.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "El concurso tiene carácter definitivo. La adscripción provisional, la comisión de servicios y la movilidad por salud o acoso sí son procedimientos temporales.",
      descartes: {
        a: "La propia denominación y el régimen de la adscripción provisional muestran que no consolida definitivamente el puesto.",
        b: "La comisión de servicios cubre necesidades limitadas en el tiempo y figura en la relación legal de procedimientos temporales.",
        d: "La movilidad por salud y por acoso laboral o sexual está incluida expresamente en el artículo 94.3.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "Las tres modalidades enumeradas —violencia de género o terrorista, movilidad entre administraciones y traslado forzoso disciplinario— tienen consideración de provisión temporal.",
      descartes: {
        a: "Es una modalidad temporal válida, pero la pregunta exige reconocer que las otras dos también lo son.",
        b: "La movilidad interadministrativa figura en la misma lista y no puede aislarse como única respuesta.",
        c: "El traslado forzoso derivado de una sanción también se clasifica como procedimiento temporal.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La reasignación y la redistribución de efectivos son procedimientos de provisión. En cambio, el reingreso conduce como regla a una adscripción provisional, no definitiva.",
      descartes: {
        b: "El artículo 94.5 prevé adscripción provisional al reingresar, salvo que se obtenga destino por concurso o libre designación.",
        c: "La segunda afirmación es falsa, por lo que no puede combinarse con la primera.",
        d: "La opción A reproduce una clasificación expresa del artículo 94.4.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "Tras revisar una jubilación por incapacidad permanente, la persona se reincorpora definitivamente al puesto que conservaba reservado.",
      descartes: {
        a: "La rehabilitación por pérdida de nacionalidad da lugar a adscripción provisional, no definitiva.",
        b: "La rehabilitación posterior a una inhabilitación también desemboca en adscripción provisional.",
        d: "Los tres supuestos no producen el mismo efecto: solo la incapacidad permanente revisable mantiene un puesto reservado al que volver.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "Se exigen los requisitos de la relación de puestos o del instrumento complementario, salvo excepciones de provisión temporal fijadas por cada administración o las previstas en un plan de ordenación del empleo público.",
      descartes: {
        a: "La expresión «en todo caso» ignora las dos excepciones admitidas por el propio artículo.",
        b: "La excepción en provisión temporal es correcta, pero no excluye la que pueda contener un plan de ordenación.",
        c: "El plan también puede exceptuar requisitos, aunque la respuesta queda incompleta si omite la facultad de cada administración para la provisión temporal.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Las convocatorias y las resoluciones que finalizan los procedimientos de provisión se publican en el boletín oficial correspondiente.",
      descartes: {
        a: "El desarrollo de estos procedimientos se efectúa por decreto del Gobierno Vasco, no mediante orden departamental.",
        c: "Una convocatoria abierta a otras administraciones se publica además en el Boletín Oficial del País Vasco, no necesariamente en el BOE.",
        d: "Las opciones A y C alteran el instrumento normativo y el diario oficial aplicables.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Todas las convocatorias de concursos deben publicarse en la sede electrónica de la administración pública vasca correspondiente.",
      descartes: {
        b: "La obligación no se limita a la Administración autonómica; alcanza a cada administración pública vasca.",
        c: "Las convocatorias abiertas a personal externo tienen publicidad adicional, pero la sede electrónica no se reserva solo para ellas.",
        d: "El artículo 94.9 contiene una regla expresa de publicación electrónica.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "La relación funcionarial es estable, pero ocupar un puesto concreto no genera un derecho adquirido a conservarlo indefinidamente.",
      descartes: {
        a: "La obtención de una plaza se vincula a la condición funcionarial; el artículo distingue esa estabilidad de la ocupación de un puesto determinado.",
        c: "La norma solo niega el derecho adquirido respecto del puesto, no equipara plaza y puesto a estos efectos.",
        d: "La opción B reproduce de forma directa el límite establecido en el artículo 94.10.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "La renuncia solo provoca la pérdida de la adscripción definitiva cuando el órgano que nombró la acepta. Sin aceptación, no produce por sí sola ese efecto.",
      descartes: {
        a: "La remoción de un puesto obtenido por concurso sí hace perder la adscripción definitiva.",
        b: "El cese en un puesto de libre designación figura entre las causas de pérdida.",
        d: "La supresión elimina el puesto al que estaba adscrita la persona y obliga a buscar una nueva adscripción.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Tanto el paso a una situación sin reserva como el nombramiento definitivo en otro puesto extinguen la adscripción anterior.",
      descartes: {
        a: "Es una causa válida, pero debe reunirse con el nuevo nombramiento definitivo de la opción B.",
        b: "Al consolidar otro destino definitivo se pierde necesariamente la adscripción al puesto previo; aun así, no es la única causa mostrada.",
        d: "Las dos circunstancias están incluidas en la lista del artículo 95.1.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Como regla asociada a la pérdida del puesto, se adjudica otro provisionalmente mientras se cumplen los requisitos y las garantías del sistema de carrera.",
      descartes: {
        a: "La pérdida no concede automáticamente un nuevo destino definitivo.",
        c: "El artículo 95 prevé adscripción provisional para los supuestos a los que se refiere la pregunta, con las excepciones propias del pase sin reserva y del nuevo nombramiento.",
        d: "La consecuencia está regulada y no queda sin respuesta legal.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Cambiar el sistema de provisión no expulsa a quien ocupa definitivamente el puesto: continúa desempeñándolo.",
      descartes: {
        a: "La modificación organizativa no es una causa autónoma de pérdida de la adscripción definitiva.",
        c: "Si llega el cese, se aplican las reglas del sistema por el que fue nombrado, no las del sistema nuevo.",
        d: "La continuidad es correcta, pero la regla de cese de la opción C invierte el criterio temporal de la ley.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "Para el personal laboral rigen primero los convenios colectivos y, cuando estos no regulen la cuestión, se aplica el sistema de provisión y movilidad funcionarial de la ley.",
      descartes: {
        a: "El convenio es la fuente principal, aunque no agota el régimen porque existe una aplicación supletoria.",
        b: "La ley opera en defecto de previsión convencional; esta segunda regla no desplaza la primacía del convenio.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-18-acceso-empleo-publico-provision-puestos",
  references: Object.fromEntries([
    ...Array.from({ length: 10 }, (_, index) => [index + 1, articleReference(94)]),
    ...Array.from({ length: 4 }, (_, index) => [index + 11, articleReference(95)]),
    [15, articleReference(96)],
  ]),
});
