import {
  blockReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-aspectos-generales-distribucion-competencias-numero-1",
  preguntas: [
    {
      preguntaId: 1,
      justificacion:
        "El modelo institucional vasco combina las instituciones comunes con las instituciones forales de los Territorios Históricos. Por eso las dos primeras opciones forman conjuntamente la respuesta.",
      descartes: {
        a: "Las instituciones comunes son una de las dos partes del modelo, pero faltan las instituciones forales.",
        b: "Las instituciones forales también integran el sistema, aunque no lo describen por sí solas.",
        d: "La teoría identifica expresamente ambos niveles institucionales, de modo que sí hay afirmaciones válidas.",
      },
    },
    {
      preguntaId: 2,
      justificacion:
        "El Gobierno Vasco y el Parlamento Vasco son las instituciones comunes de la Comunidad Autónoma. Las Diputaciones y las Juntas Generales pertenecen al nivel foral.",
      descartes: {
        b: "Las Diputaciones Forales y las Juntas Generales son instituciones de los Territorios Históricos, no instituciones comunes.",
        c: "Las dos parejas no comparten naturaleza: únicamente Gobierno y Parlamento tienen carácter común.",
        d: "La teoría sí ofrece una pareja correcta y la identifica como parte común del modelo vasco.",
      },
    },
    {
      preguntaId: 3,
      justificacion:
        "La teoría cita como fundamentos la Constitución, el Estatuto de Gernika, las Leyes de Territorios Históricos y el Concierto Económico. La ley del cupo no figura en esa relación.",
      descartes: {
        a: "La Constitución Española abre expresamente la lista de fundamentos del sistema institucional vasco.",
        b: "El Estatuto de Autonomía de Gernika forma parte del marco que distribuye las competencias.",
        c: "La Ley de Territorios Históricos desarrolla la relación entre instituciones comunes y forales.",
      },
    },
    {
      preguntaId: 4,
      justificacion:
        "La Constitución reparte competencias entre Estado y comunidades autónomas, garantiza la autonomía local y no enumera las competencias locales. Las tres afirmaciones son compatibles y completan la respuesta.",
      descartes: {
        a: "El reparto entre Estado y comunidades autónomas es cierto, pero no agota lo que afirma la teoría sobre las entidades locales.",
        b: "La garantía de autonomía local es correcta, aunque falta indicar dónde se concretan sus competencias.",
        c: "La ausencia de una enumeración constitucional también es cierta, pero es solo una parte de la explicación.",
      },
    },
    {
      preguntaId: 5,
      justificacion:
        "La Constitución garantiza la autonomía local, pero no enumera sus competencias. Esa concreción corresponde a la legislación básica de régimen local y, en Euskadi, a la ley de instituciones locales.",
      descartes: {
        b: "La Ley de Bases de Régimen Local sí contiene la regulación competencial de las entidades locales.",
        c: "La Ley de Instituciones Locales de Euskadi también concreta competencias dentro del marco vasco.",
        d: "No todas las fuentes enumeran competencias: la Constitución se limita a garantizar la autonomía local.",
      },
    },
    {
      preguntaId: 6,
      justificacion:
        "El Estatuto recoge las competencias asumidas por la CAPV: exclusivas, de desarrollo legislativo y ejecución, y de ejecución. Por tanto, la formulación general de la opción A es la completa.",
      descartes: {
        b: "El Estatuto no se limita a las competencias exclusivas del artículo 10; también contempla competencias compartidas.",
        c: "La enumeración queda incompleta porque omite las competencias de mera ejecución tratadas en el artículo 12.",
        d: "Sí existe una afirmación válida: el Estatuto determina las competencias asumidas por la Comunidad Autónoma.",
      },
    },
    {
      preguntaId: 7,
      justificacion:
        "El artículo 37 atribuye a cada Territorio Histórico la elaboración y aprobación de su propio presupuesto. No extiende esa competencia a los presupuestos municipales, por lo que la opción B excede el precepto.",
      descartes: {
        a: "La organización, el régimen y el funcionamiento de sus instituciones sí son competencia exclusiva foral.",
        c: "El régimen electoral municipal aparece expresamente entre las competencias exclusivas de los Territorios Históricos.",
        d: "No todas las opciones son competencias exclusivas, porque la relativa a presupuestos añade indebidamente los municipales.",
      },
    },
    {
      preguntaId: 8,
      justificacion:
        "El artículo 37.1 dispone que los órganos forales se rigen por el régimen jurídico privativo de cada Territorio Histórico. No remite su definición a una ley estatal o autonómica.",
      descartes: {
        a: "El Estatuto preserva el régimen privativo y no encarga al Parlamento Vasco que lo sustituya por otro.",
        c: "Las Cortes Generales tampoco determinan ese régimen jurídico propio de los órganos forales.",
        d: "La opción A no es compatible con la garantía del régimen privativo, por lo que no pueden ser correctas ambas.",
      },
    },
    {
      preguntaId: 9,
      justificacion:
        "El artículo 37 incluye el régimen de los bienes provinciales y municipales, tanto demaniales como patrimoniales, propios y comunales. Esa descripción coincide con la opción B.",
      descartes: {
        a: "La competencia estatutaria se refiere a demarcaciones supramunicipales que no excedan la provincia, no a ámbitos inferiores al municipio.",
        c: "La primera afirmación utiliza un ámbito territorial distinto del previsto, de modo que no son correctas las dos.",
        d: "La regulación de los bienes provinciales y municipales sí figura expresamente como competencia exclusiva.",
      },
    },
    {
      preguntaId: 10,
      justificacion:
        "Los Territorios Históricos asumen el desarrollo normativo y la ejecución en las materias que señale el Parlamento Vasco. La opción C conserva tanto el tipo de función como el órgano competente.",
      descartes: {
        a: "El Estatuto habla de desarrollo normativo, no de desarrollo legislativo, para esta atribución territorial.",
        b: "Además de emplear desarrollo legislativo, atribuye la decisión al Gobierno cuando corresponde al Parlamento.",
        d: "El desarrollo normativo es correcto, pero la materia debe señalarla el Parlamento Vasco, no el Gobierno.",
      },
    },
    {
      preguntaId: 11,
      justificacion:
        "Las circunscripciones deben procurar una representación adecuada de todas las zonas del territorio. La opción B reproduce esa garantía; la otra enumeración añade la igualdad, que no aparece en el texto recogido.",
      descartes: {
        a: "La teoría enumera sufragio universal, libre, directo y secreto, además de representación proporcional, pero no incorpora el término «igual».",
        c: "La opción conjunta no puede aceptarse porque la primera relación contiene un criterio añadido al precepto.",
        d: "La exigencia relativa a las circunscripciones sí está expresamente prevista y hace válida la opción B.",
      },
    },
    {
      preguntaId: 12,
      justificacion:
        "El artículo 41 sitúa el Concierto Económico como sistema regulador de las relaciones tributarias entre el Estado y el País Vasco. Ese es el vínculo institucional preguntado.",
      descartes: {
        b: "Las relaciones financieras internas entre la CAPV y sus Territorios Históricos se articulan por otras reglas, no por esta definición del Concierto.",
        c: "El artículo 41 no presenta el Concierto como una relación tributaria exclusivamente entre los tres Territorios Históricos.",
        d: "La relación Estado–País Vasco está expresamente recogida, por lo que no son incorrectas todas las opciones.",
      },
    },
    {
      preguntaId: 13,
      justificacion:
        "El régimen tributario foral debe atender a la estructura general impositiva del Estado. Esa condición aparece expresamente entre las bases del Concierto y sustenta la opción B.",
      descartes: {
        a: "La potestad de mantener, establecer y regular el régimen tributario corresponde a las instituciones competentes de los Territorios Históricos, no a las comunes.",
        c: "La coordinación con el Estado se contiene en el Concierto; el Parlamento Vasco dicta normas para esas finalidades dentro de la Comunidad Autónoma.",
        d: "Las opciones A y C confunden instituciones y fuentes normativas, así que no puede afirmarse que todas sean correctas.",
      },
    },
    {
      preguntaId: 14,
      justificacion:
        "El Estatuto establece que el Concierto Económico se aprobará por ley. Las demás alternativas atribuyen funciones o excepciones a instituciones distintas de las previstas.",
      descartes: {
        b: "La gestión y recaudación corresponde a las Diputaciones Forales; el texto no atribuye conjuntamente esa función a las Juntas Generales.",
        c: "Los tributos aduaneros y los antiguos monopolios fiscales se exceptúan de la gestión foral, pero no se asignan a las instituciones comunes vascas.",
        d: "Solo la aprobación legal del Concierto está formulada de acuerdo con la teoría; las otras dos afirmaciones no lo están.",
      },
    },
    {
      preguntaId: 15,
      justificacion:
        "Las Diputaciones Forales ejercen la gestión tributaria sin perjuicio de la colaboración con el Estado y de su alta inspección. Por tanto, esta última corresponde al Estado.",
      descartes: {
        b: "La teoría no atribuye la alta inspección tributaria al País Vasco, sino expresamente al Estado.",
        c: "La colaboración puede implicar a distintas instituciones, pero la alta inspección tiene un único titular estatal.",
        d: "La atribución está identificada de forma expresa, por lo que sí existe una respuesta correcta.",
      },
    },
    {
      preguntaId: 16,
      justificacion:
        "Los Territorios Históricos deben aplicar las normas fiscales excepcionales y coyunturales que el Estado decida para el territorio común, con el mismo periodo de vigencia.",
      descartes: {
        b: "La previsión no se refiere a decisiones del País Vasco, sino a medidas fiscales excepcionales adoptadas por el Estado.",
        c: "Solo se contempla la decisión estatal para el territorio común, por lo que no concurren ambas autoridades.",
        d: "La opción A reproduce el origen de las normas cuya aplicación deben acordar los Territorios Históricos.",
      },
    },
    {
      preguntaId: 17,
      justificacion:
        "La solución registrada B se mantiene, y es cierto que el cupo global integra los cupos territoriales. Sin embargo, la teoría también confirma las opciones A y C, por lo que el conjunto apunta a «Todas las respuestas son correctas».",
      descartes: {
        a: "La teoría confirma que el cupo global es la aportación del País Vasco al Estado; esta alternativa también resulta verdadera.",
        c: "El cupo contribuye a las cargas estatales no asumidas por la Comunidad Autónoma, de modo que esta opción también es válida.",
        d: "Esta opción reúne las tres características que la teoría atribuye al cupo global y sería la conclusión coherente con el bloque.",
      },
      notaRevision: {
        tipo: "discrepancia-teorica",
        titulo: "La solución del test no coincide con la teoría",
        texto:
          "La teoría define el cupo global como aportación del País Vasco al Estado, integrado por los cupos territoriales y destinado a las cargas estatales no asumidas. Por ello respalda la opción D, aunque se conserva la opción B registrada en el test.",
      },
    },
    {
      preguntaId: 18,
      justificacion:
        "La Comisión Mixta incluye un representante de cada Diputación Foral. A ellos se suman otros tantos representantes del Gobierno Vasco y un número igual por parte de la Administración del Estado.",
      descartes: {
        b: "No participa un único representante del Gobierno Vasco, sino tantos como representantes aportan las Diputaciones Forales.",
        c: "La representación estatal debe igualar al conjunto de la parte vasca; la teoría no fija una cifra de cuatro miembros.",
        d: "Las cifras de las opciones B y C no reflejan la composición paritaria descrita, por lo que no son correctas todas.",
      },
    },
    {
      preguntaId: 19,
      justificacion:
        "Tanto el Concierto Económico como el cupo acordado deben aprobarse por ley. La opción conjunta recoge las dos exigencias de aprobación legal.",
      descartes: {
        a: "El Concierto se aprueba por ley, pero la afirmación queda incompleta porque el cupo también requiere esa forma.",
        b: "La aprobación legal del cupo es cierta, aunque no excluye la misma exigencia para el Concierto Económico.",
        d: "Las dos figuras cuentan con previsión expresa de aprobación por ley, así que sí hay respuestas correctas.",
      },
    },
    {
      preguntaId: 20,
      justificacion:
        "El régimen de Concierto se aplica conforme al principio de solidaridad de los artículos 138 y 156 de la Constitución. Ese es el principio citado expresamente.",
      descartes: {
        a: "La cooperación puede formar parte de las relaciones institucionales, pero no es el principio constitucional mencionado en esta base.",
        b: "El bloque habla de colaboración en otros aspectos del Concierto, no como principio rector de su aplicación.",
        c: "La coordinación fiscal aparece en la regulación tributaria, mientras que esta cláusula remite específicamente a la solidaridad.",
      },
    },
  ],
};

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-05-gobierno-vasco",
  referenceForQuestion: () =>
    blockReference(
      "distribucion-general-competencias-capv",
      "Distribución de competencias y Concierto Económico",
    ),
});
