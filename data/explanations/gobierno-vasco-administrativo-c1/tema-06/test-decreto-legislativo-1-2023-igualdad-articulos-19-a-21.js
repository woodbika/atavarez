import {
  articleReference,
  defineExplanationSet,
} from "../../explanation-schema.js";

const explanations = {
  testId: "test-decreto-legislativo-1-2023-igualdad-articulos-19-a-21",
  preguntas: [
    {
      preguntaId: 1,
      justificacion: "El objetivo de igualdad debe estar presente en normas, planes y programas, contratos, subvenciones y actos administrativos. La enumeración comprende las tres alternativas.",
      descartes: {
        a: "Las normas e instrumentos de política pública están incluidos, pero el artículo 19.1 alcanza también a contratos, subvenciones y actos administrativos.",
        b: "La contratación y los programas subvencionales forman parte del mandato, sin agotar los restantes ámbitos de la actividad pública.",
        c: "Los actos administrativos deben considerar la igualdad, junto con la actividad normativa, planificadora, contractual y subvencional.",
      },
    },
    {
      preguntaId: 2,
      justificacion: "La competencia legislativa en igualdad corresponde a las instituciones comunes de la Comunidad Autónoma, sin perjuicio de las normas territoriales de ejecución.",
      descartes: {
        b: "Los órganos forales elaboran normas para adaptar los mandatos generales a su territorio, pero no ostentan la competencia legislativa autonómica.",
        c: "La Administración local ejerce potestades reglamentarias y de autoorganización; no recibe la competencia legislativa de la Comunidad Autónoma.",
        d: "La ley diferencia la potestad legislativa común de las facultades normativas forales y locales, por lo que no todas son equivalentes.",
      },
    },
    {
      preguntaId: 3,
      justificacion: "Las instituciones comunes legislan y los órganos forales y locales dictan sus normas de adaptación en el ejercicio de sus competencias. Todos producen regulación dentro de su ámbito.",
      descartes: {
        a: "Las instituciones comunes ejercen la potestad legislativa, pero no son el único nivel con capacidad normativa en materia de igualdad.",
        b: "Los órganos forales elaboran sus propias normas territoriales, aunque la Administración local también cuenta con esa facultad.",
        c: "Las entidades locales concretan los mandatos legales para la realidad municipal, junto con la actividad normativa común y foral.",
      },
    },
    {
      preguntaId: 4,
      justificacion: "El artículo 19.2 reconoce a órganos forales y Administración local potestad normativa derivada de sus competencias de ejecución, reglamentación y autoorganización.",
      descartes: {
        a: "La afirmación sobre los órganos forales es cierta, pero queda incompleta porque la misma previsión alcanza al nivel local.",
        b: "La Administración local puede dictar normas de adaptación, sin excluir la facultad equivalente de los órganos forales.",
        d: "Las dos administraciones territoriales aparecen expresamente en el precepto, por lo que sí existen respuestas válidas.",
      },
    },
    {
      preguntaId: 5,
      justificacion: "Los factores de discriminación múltiple deben considerarse tanto en la evaluación de impacto como al diseñar medidas correctoras y las demás actuaciones del capítulo.",
      descartes: {
        a: "La evaluación previa debe atender a esos factores, pero la obligación continúa en el diseño de medidas y actuaciones posteriores.",
        b: "Las medidas de igualdad han de incorporar el enfoque múltiple, además de la evaluación previa que permite detectar sus efectos.",
        d: "Ambos momentos están previstos expresamente en el artículo 19.3, así que no puede rechazarse toda la enumeración.",
      },
    },
    {
      preguntaId: 6,
      justificacion: "El uso inclusivo y no sexista alcanza a los documentos producidos directamente y también a los realizados mediante terceras personas o entidades.",
      descartes: {
        a: "La producción directa está sometida al mandato, pero externalizar el documento no libera al poder público de esta exigencia.",
        b: "Los soportes elaborados por terceros quedan incluidos, junto con aquellos que el propio poder público produce internamente.",
        d: "El artículo 19.4 contempla de forma expresa las dos vías de producción, de modo que ambas afirmaciones son válidas.",
      },
    },
    {
      preguntaId: 7,
      justificacion: "La evaluación del impacto potencial al elaborar una norma corresponde a las administraciones públicas vascas, a través del órgano promotor.",
      descartes: {
        a: "La categoría general de poderes públicos es más amplia que el sujeto concreto al que el artículo 20.1 encomienda este trámite normativo.",
        c: "El sector privado vinculado no asume la evaluación previa de los proyectos normativos de las administraciones públicas.",
        d: "El precepto identifica directamente a las administraciones públicas vascas, por lo que sí hay una alternativa correcta.",
      },
    },
    {
      preguntaId: 8,
      justificacion: "El proyecto normativo debe neutralizar impactos negativos, reducir o eliminar desigualdades y promover la igualdad. Las tres medidas pueden resultar necesarias.",
      descartes: {
        a: "Neutralizar efectos adversos es una finalidad legal, pero se acompaña de actuaciones para corregir desigualdades y avanzar en igualdad.",
        b: "Reducir o eliminar desigualdades es obligatorio cuando se detectan, junto con la prevención de impactos y la promoción positiva.",
        c: "Promover la igualdad forma parte del resultado buscado, sin desplazar las medidas destinadas a neutralizar daños y corregir brechas.",
      },
    },
    {
      preguntaId: 9,
      justificacion: "Las administraciones públicas vascas aprueban las normas o directrices de evaluación, a propuesta de su órgano especializado en igualdad.",
      descartes: {
        a: "El concepto de poderes públicos excede al sujeto que el artículo 20.3 designa expresamente para aprobar estas pautas.",
        c: "El órgano de igualdad propone las directrices, pero la aprobación corresponde a la administración pública respectiva.",
        d: "El Gobierno Vasco no aprueba en exclusiva las pautas de todas las administraciones; cada una debe establecer las suyas.",
      },
    },
    {
      preguntaId: 10,
      justificacion: "Los trámites de evaluación y sus resultados deben explicarse detalladamente en la memoria del proyecto de norma.",
      descartes: {
        b: "La referencia legal es a la memoria del proyecto durante su elaboración, no a una memoria posterior de la norma ya aprobada.",
        c: "La exposición de motivos cumple otra función y no sustituye la documentación detallada exigida en la memoria del proyecto.",
        d: "Las disposiciones adicionales forman parte del texto normativo y no son el lugar fijado para documentar el procedimiento de impacto.",
      },
    },
    {
      preguntaId: 11,
      justificacion: "El seguimiento de la efectividad corresponde al órgano administrativo promotor de la norma, que debe informar al órgano de igualdad de su administración.",
      descartes: {
        b: "El órgano de igualdad recibe la rendición de cuentas, pero el seguimiento operativo se encomienda al promotor de la norma.",
        c: "La ley no traslada esta tarea automáticamente al superior jerárquico del órgano que impulsó el proyecto.",
        d: "El control no se centraliza siempre en el organismo autonómico, pues cada administración cuenta con su estructura competente.",
      },
    },
    {
      preguntaId: 12,
      justificacion: "Emakunde informa los proyectos normativos elaborados en el ámbito de la Administración de la Comunidad Autónoma para verificar la aplicación del artículo 20.",
      descartes: {
        a: "Emakunde no informa necesariamente los proyectos de cualquier poder público; otras instituciones disponen de sus propios mecanismos.",
        b: "La intervención de Emakunde no se extiende de forma general a todas las administraciones públicas vascas.",
        d: "El control abarca proyectos normativos autonómicos diversos y no se limita a proyectos de ley remitidos al Parlamento.",
      },
    },
    {
      preguntaId: 13,
      justificacion: "Deben evaluarse los planes con naturaleza jurídica de disposición general, entre ellos los territoriales y urbanísticos, mediante un procedimiento adaptado a su especificidad.",
      descartes: {
        a: "No todos los planes quedan sometidos por esta regla, sino aquellos que tienen naturaleza de disposición general.",
        c: "Los planes territoriales y urbanísticos son ejemplos relevantes, pero la categoría obligada es más amplia que esos dos tipos.",
        d: "El artículo 20.7 establece una obligación expresa para los planes de carácter general, por lo que existe respuesta válida.",
      },
    },
    {
      preguntaId: 14,
      justificacion: "Los actos administrativos quedan fuera de estos trámites, salvo las convocatorias de ofertas públicas de empleo y los concursos de traslados.",
      descartes: {
        a: "La exclusión general es cierta, pero omite las dos excepciones expresas relacionadas con empleo público.",
        b: "La regla es justamente la no sujeción ordinaria de los actos administrativos, no su sometimiento general al procedimiento.",
        c: "Esta opción invierte la regla y las excepciones: las convocatorias y concursos son precisamente los casos que sí quedan sujetos.",
      },
    },
    {
      preguntaId: 15,
      justificacion: "El Parlamento Vasco debe articular la evaluación de impacto de las proposiciones de ley y las medidas para promover la igualdad.",
      descartes: {
        b: "El Gobierno impulsa proyectos de ley, pero la pregunta se refiere a proposiciones de ley tramitadas en el Parlamento.",
        c: "Las juntas generales realizan esta tarea respecto de proposiciones de normas forales, no de proposiciones de ley autonómica.",
        d: "Las diputaciones no son el órgano parlamentario encargado de establecer el procedimiento para las proposiciones de ley.",
      },
    },
    {
      preguntaId: 16,
      justificacion: "Cuando se trata de una proposición de norma foral, corresponde a las juntas generales adoptar las medidas de evaluación de impacto y promoción de igualdad.",
      descartes: {
        a: "El Parlamento Vasco actúa sobre proposiciones de ley, mientras que las normas forales pertenecen al ámbito institucional de cada territorio histórico.",
        b: "El Gobierno Vasco no sustituye a las juntas generales en la tramitación de proposiciones normativas forales.",
        d: "Las diputaciones forales son órganos ejecutivos; la previsión se dirige a las juntas generales como cámaras normativas.",
      },
    },
    {
      preguntaId: 17,
      justificacion: "La preferencia a favor de las mujeres con igual capacitación opera cuando su representación en el cuerpo, escala, nivel o categoría es inferior al 40 %.",
      descartes: {
        a: "El 60 % es el complemento matemático del umbral, pero no el porcentaje de infrarrepresentación fijado para activar la medida.",
        b: "La ley no exige que la presencia femenina baje de la mitad; establece un umbral específico inferior al 40 %.",
        d: "El artículo 21.1.a concreta el porcentaje, por lo que una de las cifras propuestas sí es correcta.",
      },
    },
    {
      preguntaId: 18,
      justificacion: "La prioridad puede ceder ante motivos no discriminatorios del otro candidato, como su pertenencia a colectivos con especiales dificultades de acceso y promoción.",
      descartes: {
        a: "La medida no es absoluta: el propio artículo 21 contempla una excepción basada en circunstancias objetivas del otro candidato.",
        c: "La norma no crea una excepción simétrica por infrarrepresentación masculina; la prioridad analizada se activa por baja presencia de mujeres.",
        d: "Solo la excepción relativa a otros colectivos está prevista, de modo que no pueden aceptarse conjuntamente B y C.",
      },
    },
    {
      preguntaId: 19,
      justificacion: "Los órganos competentes en función pública deben disponer de estadísticas actualizadas y fijar el ámbito usado para calcular la representación femenina.",
      descartes: {
        a: "Los órganos de igualdad pueden asesorar, pero esta obligación estadística se asigna específicamente a función pública.",
        c: "El órgano de gobierno no recibe directamente esta tarea técnica, que corresponde a las unidades competentes en empleo público.",
        d: "La ley identifica expresamente a los órganos de función pública, por lo que sí existe respuesta correcta.",
      },
    },
    {
      preguntaId: 20,
      justificacion: "Los tribunales de selección deben garantizar una representación equilibrada de mujeres y hombres con capacitación, competencia y preparación adecuadas.",
      descartes: {
        a: "La ley habla de equilibrio, que se define mediante umbrales, y no exige una composición exactamente paritaria.",
        c: "La composición del tribunal no se calcula reproduciendo la proporción del cuerpo o escala objeto del proceso.",
        d: "La cláusula de representación equilibrada está prevista de forma expresa y proporciona una respuesta válida.",
      },
    },
    {
      preguntaId: 21,
      justificacion: "El baremo debe valorar como experiencia la excedencia por cuidados o violencia, determinadas reducciones y permisos de conciliación, y los permisos por violencia de género.",
      descartes: {
        a: "La excedencia constituye uno de los periodos computables, pero no excluye las reducciones de jornada y otros permisos.",
        b: "Los tiempos de reducción y conciliación se valoran, junto con excedencias y permisos específicos por violencia de género.",
        c: "Los permisos de las empleadas por violencia de género están incluidos, aunque forman parte de una relación más extensa.",
      },
    },
    {
      preguntaId: 22,
      justificacion: "La protección de la maternidad en estos procesos abarca tanto el periodo prenatal como el posnatal.",
      descartes: {
        a: "La fase prenatal está protegida, pero el mandato continúa después del parto durante el periodo posnatal.",
        b: "El periodo posnatal forma parte de la garantía, sin dejar fuera las necesidades que pueden surgir antes del nacimiento.",
        d: "Los dos periodos aparecen expresamente en el artículo 21.1.d, por lo que sí hay opciones correctas.",
      },
    },
    {
      preguntaId: 23,
      justificacion: "Las medidas de protección a la maternidad deben observarse en los procesos de selección, provisión y promoción en el empleo público.",
      descartes: {
        a: "La selección está incluida, pero la protección legal también alcanza a la provisión y a la promoción.",
        b: "La provisión de puestos es uno de los ámbitos protegidos y no desplaza los procesos selectivos ni la promoción.",
        c: "La promoción debe respetar estas medidas, junto con las otras dos modalidades de gestión del empleo público.",
      },
    },
    {
      preguntaId: 24,
      justificacion: "Al organizar estas medidas debe considerarse la dificultad adicional que afrontan las familias monoparentales para conciliar.",
      descartes: {
        b: "El precepto no singulariza a las familias numerosas en esta regla concreta, sino a las monoparentales.",
        c: "La referencia expresa recae sobre un solo tipo de familia, por lo que no permite sumar las familias numerosas.",
        d: "La situación monoparental figura literalmente en el artículo 21.1.d y ofrece una alternativa correcta.",
      },
    },
    {
      preguntaId: 25,
      justificacion: "El embarazo, el parto y la lactancia debidamente acreditados pueden justificar cambios de tiempo o lugar cuando el proceso exige comparecencia mediante llamamiento único.",
      descartes: {
        a: "El embarazo puede justificar la adaptación, pero comparte este efecto con el parto y la lactancia acreditados.",
        b: "La situación de parto está prevista, sin ser la única circunstancia protegida en la organización de las pruebas.",
        c: "La lactancia también permite modificar las circunstancias, junto con embarazo y parto cuando impidan la comparecencia ordinaria.",
      },
    },
    {
      preguntaId: 26,
      justificacion: "Los jurados de premios promovidos o subvencionados por la Administración deben contar con representación equilibrada y preparación adecuada.",
      descartes: {
        a: "No se exige una paridad matemática, sino el equilibrio definido por la presencia mínima de cada sexo según el tamaño del órgano.",
        c: "La composición no reproduce la proporción del sector del premio; debe cumplir el criterio legal de representación equilibrada.",
        d: "La obligación está formulada expresamente para estos jurados y permite seleccionar una respuesta concreta.",
      },
    },
    {
      preguntaId: 27,
      justificacion: "Los órganos afines que adquieren fondos culturales o artísticos están sometidos a la misma regla de representación equilibrada que los jurados.",
      descartes: {
        a: "El texto no impone igualdad exacta de integrantes de ambos sexos, sino una presencia equilibrada conforme a sus umbrales.",
        c: "No se utiliza como referencia la proporción de un cuerpo o escala, pues se trata de un órgano cultural o artístico.",
        d: "El artículo 21.2 incluye expresamente estos órganos afines, de modo que la exigencia sí está determinada.",
      },
    },
    {
      preguntaId: 28,
      justificacion: "En tribunales, jurados u órganos afines con más de cuatro integrantes, cada sexo debe representar como mínimo el 40 %.",
      descartes: {
        a: "Exigir al menos un 60 % para cada sexo resultaría matemáticamente imposible y no es el umbral legal.",
        b: "El reparto exacto o mínimo del 50 % no es necesario; la ley permite composiciones equilibradas desde el 40 %.",
        d: "El porcentaje del 40 % aparece expresamente en el precepto y hace que una de las opciones sea correcta.",
      },
    },
    {
      preguntaId: 29,
      justificacion: "Cuando el órgano tiene cuatro integrantes o menos, la representación es equilibrada si están presentes personas de ambos sexos.",
      descartes: {
        a: "La ley mantiene una exigencia también para los órganos pequeños: no pueden quedar integrados por un solo sexo.",
        c: "El umbral porcentual del 40 % se reserva a órganos de más de cuatro integrantes y no se traslada al resto.",
        d: "La presencia de ambos sexos proporciona la regla aplicable, por lo que sí existe una respuesta correcta.",
      },
    },
  ],
};

const references = {};
for (let id = 1; id <= 6; id += 1) references[id] = articleReference(19);
for (let id = 7; id <= 16; id += 1) references[id] = articleReference(20);
for (let id = 17; id <= 29; id += 1) references[id] = articleReference(21);

export default defineExplanationSet(explanations, {
  theoryResourceId: "tema-06-igualdad",
  references,
});
