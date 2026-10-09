import {
  articleReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-competencias-de-igualdad-articulos-4-a-8",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El artículo 4.1 atribuye a las instituciones comunes de Euskadi la competencia legislativa, el desarrollo normativo y la acción directa en materia de igualdad.",
      descartes: {
        b: "Los órganos forales ejecutan las normas en su ámbito, pero no reciben la competencia legislativa general ni la acción directa autonómica.",
        c: "La Administración local participa en la ejecución de las políticas de igualdad, no en la potestad legislativa de la Comunidad Autónoma.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La acción directa es la ejecución de funciones o servicios que, por su interés general o condiciones, deben prestarse unitariamente en toda Euskadi.",
      descartes: {
        a: "La acción positiva consiste en medidas temporales contra desigualdades de hecho y no define una competencia territorial de ejecución.",
        c: "Acción directa y acción positiva responden a conceptos distintos, por lo que sus nombres no pueden intercambiarse.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Sin perjuicio de la acción directa autonómica, la ejecución corresponde también a los órganos forales y a la Administración local.",
      descartes: {
        a: "Los órganos forales son competentes, pero comparten la ejecución territorial con la Administración local.",
        b: "La Administración local ejecuta estas normas, aunque no es el único nivel territorial al que el artículo 4.3 atribuye esa función.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "La adecuación y creación de estructuras para integrar la perspectiva de género figura entre las funciones autonómicas, forales y locales.",
      descartes: {
        a: "La Administración autonómica tiene esta función, pero los artículos 6 y 7 la reproducen para los niveles foral y local.",
        b: "Las administraciones territoriales también deben adaptar estructuras, sin que ello excluya la misma obligación en la Administración autonómica.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "La planificación y coordinación general, junto con las normas y directrices generales, corresponden a la Administración de la Comunidad Autónoma.",
      descartes: {
        b: "Los niveles foral y local planifican dentro de sus territorios y del marco general, pero no elaboran la planificación general de Euskadi.",
        c: "La competencia general queda centralizada en la Administración autonómica; no es una atribución común de los tres niveles.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "El artículo 5.c reserva a la Administración autonómica el diseño y ejecución de acciones positivas que deban realizarse unitariamente en toda Euskadi.",
      descartes: {
        b: "Las administraciones forales y locales ejecutan medidas en su territorio, pero la opción no recoge el diseño unitario propio del nivel autonómico.",
        c: "La formulación completa de diseño y ejecución unitaria pertenece a la Administración autonómica, aunque otros niveles ejecuten sus propias medidas.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La evaluación de las políticas de igualdad en el conjunto de la Comunidad Autónoma se asigna a la Administración autonómica.",
      descartes: {
        b: "Los niveles foral y local realizan seguimiento y estudios en sus ámbitos, pero el artículo 5.d sitúa la evaluación general en el nivel autonómico.",
        c: "La función evaluadora de alcance autonómico no se atribuye de manera conjunta a todas las administraciones territoriales.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "Evaluar el grado de cumplimiento de toda la ley aparece unido a la evaluación autonómica de las políticas de igualdad en el artículo 5.d.",
      descartes: {
        b: "Las administraciones forales y locales controlan su normativa y actuación, no el cumplimiento global de la ley en toda la Comunidad Autónoma.",
        c: "El control general de cumplimiento se confía al nivel autonómico y no se formula como responsabilidad compartida de los tres niveles.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Las condiciones mínimas, básicas y comunes sobre funciones y capacitación del personal de los órganos de igualdad se fijan desde la Administración autonómica.",
      descartes: {
        b: "Las administraciones territoriales organizan sus unidades, pero no establecen los mínimos comunes aplicables a todas ellas.",
        c: "El carácter básico y común de esas condiciones explica que la ley las atribuya a un solo nivel, el autonómico.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "La metodología general para adecuar las estadísticas al principio de igualdad es una función de la Administración autonómica conforme al artículo 5.g.",
      descartes: {
        b: "Los niveles foral y local mantienen estadísticas de sus ámbitos, pero no diseñan la metodología general para toda Euskadi.",
        c: "La producción territorial de datos puede ser compartida; el diseño metodológico general preguntado no lo es.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "Los artículos 5, 6 y 7 contemplan estudios e investigaciones sobre la situación de mujeres y hombres, con distinto alcance territorial en cada administración.",
      descartes: {
        a: "La Administración autonómica realiza investigaciones unitarias, pero los niveles foral y local estudian también sus respectivos territorios.",
        b: "Las administraciones forales y locales tienen esa tarea territorial, junto a los estudios de alcance general que corresponden al nivel autonómico.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "La sensibilización frente a la desigualdad se distribuye entre los tres niveles, variando únicamente el alcance autonómico, foral o local de las actividades.",
      descartes: {
        a: "El nivel autonómico organiza campañas unitarias, pero no monopoliza la sensibilización en materia de igualdad.",
        b: "Las actuaciones territoriales de diputaciones y entidades locales se suman a las que la Administración autonómica desarrolla para toda Euskadi.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "El seguimiento de la normativa autonómica y de su aplicación conforme a la igualdad corresponde específicamente a la Administración autonómica.",
      descartes: {
        b: "Las administraciones forales y locales siguen su propia normativa territorial, no la normativa autonómica como función propia.",
        c: "Cada nivel controla su ordenamiento; por eso el seguimiento de normas autonómicas no es una competencia conjunta.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "La asistencia técnica especializada a entidades locales, otros poderes públicos e iniciativa privada figura en el artículo 5.k como función autonómica.",
      descartes: {
        b: "Las administraciones forales apoyan a las entidades locales mediante medidas de fomento, pero la asistencia técnica general descrita se asigna al nivel autonómico.",
        c: "El artículo no reproduce esta asistencia especializada como competencia común de la administración autonómica, foral y local.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "La Administración autonómica establece los requisitos mínimos, básicos y comunes para homologar entidades prestadoras de servicios de igualdad.",
      descartes: {
        b: "Las administraciones correspondientes realizan homologaciones concretas, pero no fijan por separado el marco mínimo común.",
        c: "La determinación de requisitos generales se centraliza para asegurar homogeneidad y no se reparte entre todos los niveles.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "El artículo 5.m atribuye a la Administración autonómica el fomento de recursos para que empresas y organizaciones desarrollen planes y actividades de igualdad.",
      descartes: {
        b: "El fomento foral se orienta expresamente a ayuntamientos y entidades locales, no a la dotación general de empresas y organizaciones.",
        c: "La finalidad dirigida al tejido empresarial y organizativo se recoge como función autonómica, no como atribución idéntica de los tres niveles.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "El ejercicio de la potestad sancionadora se incluye expresamente entre las funciones de la Administración autonómica en el artículo 5.q.",
      descartes: {
        b: "Los listados de funciones forales y locales no contienen una atribución equivalente de potestad sancionadora general en esta materia.",
        c: "La ley no presenta esta potestad como una competencia compartida entre todas las administraciones vascas.",
      },
    },
    {
      preguntaId: 18,
      justificacion: "La investigación y detección de situaciones discriminatorias se formula en el artículo 5.p como función autonómica, junto a las medidas para erradicarlas.",
      descartes: {
        b: "Los niveles territoriales detectan discriminaciones en su ámbito, pero la función que combina investigación y detección se expresa para la Administración autonómica.",
        c: "La redacción preguntada no aparece de forma coincidente en los tres catálogos competenciales de los artículos 5 a 7.",
      },
    },
    {
      preguntaId: 19,
      justificacion: "La prestación de programas para facilitar derechos a mujeres con discriminación múltiple existe en los tres niveles, según su alcance unitario, supramunicipal o municipal.",
      descartes: {
        a: "La Administración autonómica presta los servicios de alcance unitario, pero los ámbitos foral y local atienden sus escalas territoriales.",
        b: "Diputaciones y entidades locales cuentan con funciones propias en esta materia, sin excluir los programas autonómicos para toda Euskadi.",
      },
    },
    {
      preguntaId: 20,
      justificacion: "Los recursos de conciliación corresponsable se asignan a cada nivel administrativo en función de que deban prestarse para toda Euskadi, supramunicipalmente o en el municipio.",
      descartes: {
        a: "El nivel autonómico cubre los recursos unitarios, pero no absorbe los servicios que por su naturaleza son forales o municipales.",
        b: "Las administraciones forales y locales intervienen en sus escalas, junto con la competencia autonómica para prestaciones de alcance general.",
      },
    },
    {
      preguntaId: 21,
      justificacion: "La Administración autonómica ejecuta acciones positivas unitarias y las administraciones forales y locales las desarrollan en sus respectivos ámbitos territoriales.",
      descartes: {
        a: "La Administración autonómica participa cuando la medida exige carácter unitario, pero no es el único nivel que ejecuta acciones positivas.",
        b: "La ejecución territorial foral y local está prevista, sin perjuicio de las acciones que deben desarrollarse para toda la Comunidad Autónoma.",
      },
    },
    {
      preguntaId: 22,
      justificacion: "La planificación territorial dentro del marco general del Gobierno corresponde a las administraciones forales y, en el marco adicional foral, a las locales.",
      descartes: {
        a: "La Administración autonómica elabora la planificación general; no planifica como nivel subordinado dentro de su propio marco territorial.",
        c: "La pregunta distingue la planificación territorial de la general, por lo que no puede atribuirse indistintamente a todos los niveles.",
      },
    },
    {
      preguntaId: 23,
      justificacion: "Las tres administraciones deben mantener estadísticas actualizadas sobre las diferencias entre mujeres y hombres, cada una respecto de sus ámbitos de intervención.",
      descartes: {
        a: "La Administración autonómica conserva datos generales, pero los artículos 6 y 7 imponen una tarea equivalente en los ámbitos foral y local.",
        b: "Los niveles foral y local actualizan sus estadísticas, mientras que el nivel autonómico hace lo propio para sus políticas y diseña la metodología general.",
      },
    },
    {
      preguntaId: 24,
      justificacion: "Impulsar la colaboración entre las actuaciones de las distintas administraciones públicas vascas es una función autonómica prevista en el artículo 5.e.",
      descartes: {
        b: "Los niveles foral y local colaboran con entidades de su territorio, pero no reciben la función general de articular la colaboración interadministrativa.",
        c: "La coordinación del conjunto de administraciones se atribuye al nivel autonómico y no a todas ellas de forma indistinta.",
      },
    },
    {
      preguntaId: 25,
      justificacion: "Los tres catálogos competenciales contemplan relaciones y cauces de participación con entidades públicas y privadas, adaptados a su alcance territorial.",
      descartes: {
        a: "La Administración autonómica establece estos cauces, pero las administraciones forales y locales también lo hacen en sus territorios.",
        b: "La colaboración territorial no excluye las relaciones que el artículo 5 atribuye al nivel autonómico dentro y fuera de Euskadi.",
      },
    },
    {
      preguntaId: 26,
      justificacion: "El seguimiento de la legislación foral y de su aplicación conforme al principio de igualdad corresponde a cada administración foral.",
      descartes: {
        a: "La Administración autonómica sigue la normativa autonómica, no la aplicación ordinaria de la legislación foral.",
        c: "La Administración local controla su propia normativa; la legislación foral pertenece al ámbito de las diputaciones.",
      },
    },
    {
      preguntaId: 27,
      justificacion: "El artículo 7.g encomienda a la Administración local seguir su normativa y comprobar su aplicación de acuerdo con la igualdad de mujeres y hombres.",
      descartes: {
        a: "El nivel autonómico realiza el seguimiento de sus propias normas, no de la regulación local como función ordinaria.",
        b: "Las administraciones forales supervisan la legislación foral; la normativa municipal se controla desde el nivel local.",
      },
    },
    {
      preguntaId: 28,
      justificacion: "Los ayuntamientos pueden ejercer estas funciones individualmente o mediante mancomunidades, cuadrillas u otras agrupaciones constituidas con esa finalidad.",
      descartes: {
        a: "El ejercicio individual está permitido, pero no impide que varios municipios organicen conjuntamente sus funciones de igualdad.",
        b: "La actuación mancomunada es posible, aunque la ley mantiene igualmente la capacidad de cada ayuntamiento para actuar por sí solo.",
      },
    },
    {
      preguntaId: 29,
      justificacion: "El artículo 6.h atribuye a las administraciones forales medidas de fomento para dotar de recursos a ayuntamientos y otras entidades locales.",
      descartes: {
        a: "La Administración autonómica ofrece asistencia y fija condiciones comunes, pero esta medida de fomento dirigida a municipios se incluye en el catálogo foral.",
        c: "Las entidades locales son destinatarias de los recursos en este supuesto, no la administración encargada de concedérselos a sí misma.",
      },
    },
    {
      preguntaId: 30,
      justificacion: "Informar y orientar a la ciudadanía sobre recursos de igualdad y servicios para mujeres con discriminación múltiple es una función local del artículo 7.h.",
      descartes: {
        a: "El nivel autonómico presta asistencia técnica y servicios generales, pero esta atención directa a la ciudadanía se encomienda al municipio.",
        b: "Las diputaciones desarrollan programas supramunicipales; la información y orientación cercana descrita corresponde a la Administración local.",
      },
    },
    {
      preguntaId: 31,
      justificacion: "Se conserva la solución A, aunque el artículo 7.2 establece que las administraciones locales contarán con asistencia de la Administración autonómica y de las correspondientes administraciones forales.",
      descartes: {
        b: "La asistencia foral aparece expresamente junto a la autonómica, de manera que esta alternativa también refleja una parte de la regla vigente.",
        c: "Esta respuesta conjunta es la que concuerda con el artículo 7.2, pese a que el test mantiene almacenada exclusivamente la opción A.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto: "La teoría indica que las administraciones locales recibirán asistencia tanto de la Administración de la Comunidad Autónoma como de las administraciones forales correspondientes, especialmente cuando tengan menor capacidad. Esto conduce a la opción C, aunque se mantiene la opción A registrada.",
      },
    },
    {
      preguntaId: 32,
      justificacion: "El fomento de recursos materiales, económicos y personales para ayuntamientos se atribuye a las administraciones forales en el artículo 6.h.",
      descartes: {
        a: "La Administración autonómica presta asistencia a los municipios, pero la medida de fomento descrita para dotarlos de recursos figura en el catálogo foral.",
        c: "La teoría diferencia la asistencia autonómica de las medidas forales de fomento, por lo que no las presenta como una misma atribución conjunta.",
      },
    },
    {
      preguntaId: 33,
      justificacion: "La homologación previa corresponde a la administración pública que concierta el servicio, que puede ser autonómica, foral o local.",
      descartes: {
        a: "El nivel autonómico puede homologar entidades cuando contrata el servicio, pero no concentra todas las homologaciones posibles.",
        b: "Las administraciones forales y locales también homologan en sus conciertos, junto con la Administración autonómica cuando sea la competente.",
      },
    },
    {
      preguntaId: 34,
      justificacion: "El Gobierno Vasco debe fijar reglamentariamente los requisitos y condiciones mínimas comunes para homologar entidades privadas de servicios de igualdad.",
      descartes: {
        b: "Las administraciones forales y locales aplican la homologación correspondiente, pero no establecen el marco reglamentario común.",
        c: "La potestad para aprobar esos requisitos básicos se atribuye al Gobierno Vasco, no simultáneamente a todos los niveles administrativos.",
      },
    },
  ],
};

const references = {};
for (let id = 1; id <= 3; id += 1) references[id] = articleReference(4);
for (let id = 4; id <= 25; id += 1) references[id] = articleReference([5, 6, 7]);
references[26] = articleReference(6);
references[27] = articleReference(7);
references[28] = articleReference(7);
references[29] = articleReference(6);
references[30] = articleReference(7);
references[31] = articleReference(7);
references[32] = articleReference([6, 7]);
references[33] = articleReference(8);
references[34] = articleReference(8);

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-06-igualdad",
  references,
});
