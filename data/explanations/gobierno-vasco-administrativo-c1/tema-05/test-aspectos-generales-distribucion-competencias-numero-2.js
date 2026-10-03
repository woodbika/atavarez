import {
  blockReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-aspectos-generales-distribucion-competencias-numero-2",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "La Ley 27/1983 es conocida como Ley de Territorios Históricos. Fue aprobada por el Parlamento Vasco para desarrollar el Estatuto y regula las competencias territoriales en sus artículos 7 a 10.",
      descartes: {
        a: "No es una ley de las Cortes Generales: procede del Parlamento Vasco y desarrolla el marco estatutario.",
        c: "Su objeto aquí es ordenar las competencias de los Territorios Históricos y sus relaciones con las instituciones comunes, no todas las competencias del País Vasco.",
        d: "Las opciones A y C atribuyen a la ley un origen y un alcance que la teoría no le reconoce.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El artículo 14 reconoce autonomía financiera y presupuestaria, exige coordinación con la Hacienda General vasca y prevé uniformidad en los elementos sustanciales de los impuestos. Las tres afirmaciones son correctas.",
      descartes: {
        a: "La autonomía financiera es cierta, pero constituye solo el primer apartado del régimen descrito.",
        b: "La coordinación de la actividad financiera también se exige, aunque no agota el contenido del artículo.",
        c: "La uniformidad tributaria aparece igualmente en la teoría, junto con las otras dos reglas.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "La Comunidad Autónoma y cada Territorio Histórico elaboran y aprueban anualmente sus respectivos presupuestos. Por ello resultan correctos los dos ámbitos institucionales.",
      descartes: {
        a: "La Comunidad Autónoma cumple esta obligación, pero no es la única: también alcanza a los Territorios Históricos.",
        b: "Los Territorios Históricos aprueban sus presupuestos, junto con la previsión equivalente para la Comunidad Autónoma.",
        d: "Ambas instituciones cuentan con una regla presupuestaria anual expresa, de modo que sí hay respuestas válidas.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "Cada Diputación Foral elabora el presupuesto de su Territorio Histórico y las Juntas Generales lo aprueban. La opción D diferencia correctamente ambas funciones.",
      descartes: {
        a: "El Gobierno Vasco elabora los Presupuestos Generales del País Vasco, pero su aprobación corresponde al Parlamento.",
        b: "El Parlamento Vasco aprueba esos presupuestos, aunque no asume también su elaboración.",
        c: "La Diputación Foral prepara el presupuesto territorial, pero no lo aprueba; esa decisión corresponde a las Juntas Generales.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "Las Diputaciones y sus entidades aplican criterios homogéneos, en la forma fijada por el Consejo Vasco de Finanzas Públicas, para consolidar informativamente el sector público vasco. Las tres proposiciones completan la regla.",
      descartes: {
        a: "La homogeneidad de procedimiento y contabilidad es cierta, pero falta quién determina su forma y para qué se aplica.",
        b: "El Consejo Vasco de Finanzas Públicas determina la forma, dentro de una previsión más amplia sobre criterios homogéneos.",
        c: "La consolidación informativa es la finalidad de la medida, no su único elemento normativo.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "Las aportaciones efectuadas por las Diputaciones Forales son ingresos ordinarios de la Hacienda General del País Vasco. La teoría las sitúa al comienzo de esa categoría.",
      descartes: {
        b: "Los impuestos propios deben ser establecidos por el Parlamento Vasco, no por el Gobierno Vasco como afirma la alternativa.",
        c: "Solo la primera afirmación respeta el órgano competente para establecer los recursos tributarios propios.",
        d: "Las aportaciones forales figuran expresamente entre los ingresos ordinarios, por lo que sí existe una opción válida.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "Las tasas pueden exigirse por usar bienes de dominio público, recibir servicios autonómicos o realizarse actividades que afecten o beneficien a particulares. Las tres causas están previstas.",
      descartes: {
        a: "La utilización del dominio público genera tasas, pero comparte la categoría con otros dos supuestos.",
        b: "La prestación de servicios de competencia autonómica también permite exigirlas, sin excluir las restantes causas.",
        c: "Las actividades que afecten o beneficien a particulares completan la enumeración, pero no son el único hecho previsto.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "Las obras públicas y el establecimiento o ampliación de servicios que generan un beneficio especial se financian mediante contribuciones especiales. Esa es la figura descrita en la pregunta.",
      descartes: {
        a: "La tasa responde al uso del dominio público, a servicios o a actividades administrativas, no a esta mejora por obra pública.",
        b: "El precio público no es la categoría que el artículo 17 asigna a la realización de obras o ampliación de servicios.",
        d: "La teoría denomina expresamente «contribuciones especiales» a este recurso, por lo que hay una respuesta definida.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "Las multas, las transferencias del Fondo de Compensación y otras asignaciones presupuestarias son ingresos ordinarios de la Hacienda General vasca. Las tres alternativas forman parte de la lista.",
      descartes: {
        a: "Las multas y sanciones son ingresos ordinarios, pero no constituyen la única modalidad señalada.",
        b: "El Fondo de Compensación Interterritorial también pertenece a esta categoría junto con otras fuentes.",
        c: "Las asignaciones de presupuestos estatales y de otros entes son igualmente ordinarias, sin excluir las anteriores.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Los rendimientos patrimoniales y los ingresos privados se clasifican como ordinarios. Por ello son la opción que no pertenece a los ingresos extraordinarios.",
      descartes: {
        b: "La enajenación de inversiones reales abre la relación de ingresos extraordinarios de la Hacienda General.",
        c: "La variación de activos financieros también se integra en el bloque de recursos extraordinarios.",
        d: "El endeudamiento y las variaciones de pasivos financieros completan esa misma categoría extraordinaria.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "Las Haciendas Forales consideran ordinarios los tributos concertados, sus tasas y determinados rendimientos locales recaudados por las Diputaciones. Las tres fuentes están incluidas.",
      descartes: {
        a: "Los impuestos y tasas fiscales del Concierto son ordinarios, aunque la relación contiene más recursos.",
        b: "Las tasas forales forman parte de los ingresos ordinarios, junto con los tributos concertados y locales.",
        c: "Los impuestos locales recaudados por las Diputaciones también se incluyen, pero no agotan la enumeración.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "Los rendimientos del patrimonio y los ingresos de Derecho privado aparecen entre los ingresos ordinarios de las Haciendas Forales. Esa clasificación determina la opción A.",
      descartes: {
        b: "Los ingresos extraordinarios se limitan a inversiones reales, activos financieros y pasivos financieros, no a rendimientos patrimoniales.",
        c: "La ley sí reconoce estos rendimientos como fuente de financiación de las Haciendas Forales.",
        d: "El artículo 18 los menciona expresamente, por lo que no existe silencio legal sobre su clasificación.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "Las transferencias y asignaciones forales pueden proceder de los presupuestos del Estado, de la Comunidad Autónoma y de otros entes públicos. La opción D reúne las tres procedencias.",
      descartes: {
        a: "Los Presupuestos Generales del Estado son una fuente posible, pero no la única contemplada.",
        b: "La Comunidad Autónoma también puede efectuar transferencias, junto con el Estado y otros entes.",
        c: "La referencia a otros entes públicos completa una lista que incluye además los dos niveles anteriores.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "Las Haciendas Forales comparten la clasificación extraordinaria de la Hacienda General: enajenación de inversiones y variaciones de activos y pasivos financieros. Todas las afirmaciones son compatibles.",
      descartes: {
        a: "La coincidencia general de categorías es cierta, pero las otras opciones concretan cuáles son esos ingresos.",
        b: "La enajenación de inversiones reales es extraordinaria, aunque no constituye por sí sola toda la categoría.",
        c: "Las variaciones de activos y pasivos también son extraordinarias y se suman a la enajenación de inversiones.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-05-gobierno-vasco",
  referenceForQuestion: () =>
    blockReference(
      "autonomia-financiera-haciendas-vascas",
      "Autonomía financiera y Haciendas vascas",
    ),
});
