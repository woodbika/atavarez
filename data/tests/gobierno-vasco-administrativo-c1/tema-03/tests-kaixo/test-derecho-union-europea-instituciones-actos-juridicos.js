/**
 * Datos extraídos del test web de Kaixo para Administrativo/a, Tema 3, OPE 2022.
 * El contenido de las preguntas, opciones y soluciones se conserva sin interpretaciones.
 */
const test = {
  schemaVersion: 1,
  id: "test-derecho-union-europea-instituciones-actos-juridicos-kaixo",
  autor: {
    id: "kaixo",
    nombre: "Kaixo",
  },
  titulo: "Derecho de la Unión Europea. Instituciones y actos jurídicos (OPE 2022)",
  convocatoria: {
    nombre: "OPE 2022",
    anio: 2022,
  },
  includeInCombinedTest: false,
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "03",
      titulo: "El espacio europeo: historia de la construcción europea. Instituciones europeas y sus competencias.",
    },
  },
  fuente: {
    tipo: "web",
    url: "https://www.kaixo.com/ope/index.php?aukera=ejadministrativo&hizk=1&tema=3",
    respuestasUrl: "https://www.kaixo.com/ope/index.php?aukera=ejadministrativo&aukera2=eran&hizk=1",
    preguntas: 21,
  },
  preguntas: [
    {
      id: 1,
      enunciado: "El Tribunal de Justicia de la Unión Europea es una institución:",
      opciones: [
        { id: "a", texto: "Dependiente del Parlamento Europeo." },
        { id: "b", texto: "Independiente respecto a los Estados, pero que depende de la Comisión y el Parlamento Europeo." },
        { id: "c", texto: "Independiente, cuyas resoluciones son obligatorias para los Estados miembros y las instituciones de la UE." },
        { id: "d", texto: "Independiente, cuyas resoluciones son obligatorias para los Estados miembros, pero no para las instituciones de la UE." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 2,
      enunciado: "El Tribunal de Justicia de la Unión Europea tiene su sede en:",
      opciones: [
        { id: "a", texto: "Luxemburgo." },
        { id: "b", texto: "Estrasburgo." },
        { id: "c", texto: "Bruselas, como el resto de las instituciones de la Unión." },
        { id: "d", texto: "La sede es rotatoria entre Luxemburgo y Estrasburgo." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 3,
      enunciado: "¿Cuál de estas afirmaciones relativas al Tribunal de Justicia es INCORRECTA?:",
      opciones: [
        { id: "a", texto: "El Tribunal está compuesto por un juez por cada Estado miembro, y está asistido por abogados generales." },
        { id: "b", texto: "Según establece el Tratado de la Unión Europea, el Tribunal de Justicia de la Unión Europea comprenderá: el Tribunal de Justicia, el Tribunal General y los tribunales especializados." },
        { id: "c", texto: "La actividad jurisdiccional del Tribunal de Justicia se desarrolla en Salas de tres o cinco jueces, en Gran Sala compuesta por 15 jueces y, excepcionalmente en Pleno." },
        { id: "d", texto: "Los jueces y abogados generales del Tribunal de Justicia ejercen su mandato por un periodo de cuatro años, pudiendo ser renovados una sola vez más." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 4,
      enunciado: "¿Cuál de los siguientes recursos o cuestiones NO se sustancia ante el Tribunal de Justicia de la UE?:",
      opciones: [
        { id: "a", texto: "La llamada «cuestión prejudicial» o reenvío prejudicial, un procedimiento que permite a un órgano jurisdiccional nacional, encargado de aplicar el Derecho de la Unión en un caso concreto, consultar al Tribunal de Justicia cualquier duda acerca de la interpretación o validez de la norma europea a aplicar en el caso." },
        { id: "b", texto: "El recurso por incumplimiento de los Estados miembros, que tiene por objeto controlar a los Estados en el cumplimiento de sus obligaciones como miembros de la UE." },
        { id: "c", texto: "El recurso de amparo ante el Tribunal de Justicia, un procedimiento en defensa de los derechos fundamentales de la UE." },
        { id: "d", texto: "Los recursos de anulación y por omisión, que se dirigen, respectivamente, contra la acción o inactividad de las instituciones." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 5,
      enunciado: "El llamado «Derecho derivado» de la UE:",
      opciones: [
        { id: "a", texto: "Consiste en un conjunto de normas jurídicas adoptadas por los Estados miembros siguiendo las directrices marcadas por la UE." },
        { id: "b", texto: "Consiste en un conjunto de normas jurídicas adoptadas por las instituciones de la UE y los Estados miembros." },
        { id: "c", texto: "Es el Derecho relativo a la Unión Europea que deriva de las Constituciones nacionales." },
        { id: "d", texto: "Deriva de los Tratados de la UE, teniendo un origen y naturaleza institucional. Son los actos jurídicos de la UE." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 6,
      enunciado: "Los actos jurídicos de la Unión:",
      opciones: [
        { id: "a", texto: "Se integran formal e inmediatamente en el Derecho nacional de los Estados miembros con su simple publicación en el Diario Oficial de la UE, sin necesidad de previa ratificación por el Estado." },
        { id: "b", texto: "Se integran formal e inmediatamente en el Derecho nacional de los Estados miembros con su simple publicación en el Diario Oficial de la UE, pero una vez sean ratificados por el Estado." },
        { id: "c", texto: "No se integran en el Derecho interno, y son aplicados por las instituciones de la Unión." },
        { id: "d", texto: "Se integran formal e inmediatamente en el Derecho nacional de los Estados miembros a través de su publicación en el BOE." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 7,
      enunciado: "Los reglamentos y las directivas de la UE:",
      opciones: [
        { id: "a", texto: "Son siempre actos jurídicamente vinculantes." },
        { id: "b", texto: "Pueden adoptarse bajo la categoría de actos legislativos o de actos delegados, pero no como actos de ejecución." },
        { id: "c", texto: "Se adoptan mediante procedimiento legislativo ordinario, pero no mediante procedimiento legislativo especial." },
        { id: "d", texto: "No pueden existir reglamentos y directivas de ejecución." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 8,
      enunciado: "De acuerdo con el Derecho de la Unión, puede decirse que:",
      opciones: [
        { id: "a", texto: "Los actos jurídicamente vinculantes de la Unión son los reglamentos, las directivas, las decisiones, las recomendaciones y los dictámenes." },
        { id: "b", texto: "Las decisiones no son jurídicamente vinculantes." },
        { id: "c", texto: "Los dictámenes son jurídicamente vinculantes para los Estados miembros." },
        { id: "d", texto: "Las recomendaciones no son jurídicamente vinculantes." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 9,
      enunciado: "En relación con la publicación de los actos jurídicos vinculantes en el Diario Oficial de la UE, puede decirse que:",
      opciones: [
        { id: "a", texto: "La publicación es un requisito formal esencial para que esos actos resulten exigibles en el Derecho interno de los Estados miembros." },
        { id: "b", texto: "La publicación es un requisito formal esencial en el caso de los actos legislativos, no en el de los actos de ejecución." },
        { id: "c", texto: "Los actos jurídicamente vinculantes de la Unión entran siempre en vigor el día de su publicación en el Diario Oficial de la UE." },
        { id: "d", texto: "Los actos vinculantes de la Unión se publican solo en las lenguas de los Estados miembros a los que les afecta el acto vinculante." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 10,
      enunciado: "De acuerdo con el Tratado de Funcionamiento de la UE, los actos jurídicos de la Unión:",
      opciones: [
        { id: "a", texto: "Deberán estar motivados, debiendo referirse a las propuestas, iniciativas, recomendaciones, peticiones o dictámenes previstos en los Tratados." },
        { id: "b", texto: "No tienen por qué estar motivados." },
        { id: "c", texto: "Deberán estar motivados solo en el caso de que afecten a los Estados." },
        { id: "d", texto: "Deberán estar motivados solo en el caso de que afecten a las instituciones." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 11,
      enunciado: "El reglamento de la Unión Europea es un tipo o categoría normativa:",
      opciones: [
        { id: "a", texto: "Que, debido a su potencia normativa, se utiliza únicamente en ámbitos de competencia exclusiva de la Unión Europea." },
        { id: "b", texto: "Se utiliza exclusivamente en ámbitos de competencia compartida entre la UE y los Estados miembros." },
        { id: "c", texto: "Es una norma directamente aplicable en el Estado miembro." },
        { id: "d", texto: "Es una norma directamente aplicable si el Estado miembro así lo admite." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 12,
      enunciado: "El reglamento de la Unión Europea es un tipo o categoría normativa que:",
      opciones: [
        { id: "a", texto: "Tiene un alcance general, si bien normalmente identifica destinatarios concretos." },
        { id: "b", texto: "Tiene un alcance general, pero no es obligatorio en todos sus elementos." },
        { id: "c", texto: "No tiene un alcance general sino específico, pero es obligatorio en todos sus elementos." },
        { id: "d", texto: "Tiene un alcance general, es obligatorio en todos sus elementos y es directamente aplicable en el Derecho interno de los Estados miembros." },
      ],
      respuestaCorrecta: "d",
    },
    {
      id: 13,
      enunciado: "Si comparamos el reglamento y la directiva, puede decirse que:",
      opciones: [
        { id: "a", texto: "Existe una relación de jerarquía entre el reglamento y la directiva, imponiéndose aquel a esta." },
        { id: "b", texto: "El reglamento se impone a la directiva si es de alcance general." },
        { id: "c", texto: "La directiva no es, a diferencia del reglamento, obligatoria en todos sus elementos, solo en cuanto al resultado que deba conseguirse." },
        { id: "d", texto: "La directiva se impone sobre el reglamento si este no tiene alcance general y solo vincula en cuanto al resultado." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 14,
      enunciado: "La directiva europea obliga al Estado miembro destinatario:",
      opciones: [
        { id: "a", texto: "Únicamente en cuanto al resultado que deba conseguirse y a la elección de la forma y de los medios para conseguirlo." },
        { id: "b", texto: "No obliga a los Estados miembros en cuanto al resultado a conseguir, solo en cuanto a la forma y los medios para obtenerlo." },
        { id: "c", texto: "No es, por definición, un tipo de norma directamente aplicable en el Derecho interno." },
        { id: "d", texto: "Es, por definición, un tipo de norma directamente aplicable en el Derecho interno, pues obliga en cuanto al resultado." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 15,
      enunciado: "Las directivas de la Unión Europea:",
      opciones: [
        { id: "a", texto: "No requieren de normas internas o estatales que incorporen los aspectos esenciales de su regulación y garanticen el resultado prescrito en ella." },
        { id: "b", texto: "Recogen un plazo de transposición, antes de cuyo término los Estados están obligados a adoptar las normas internas necesarias para obtener el resultado prescrito en la misma." },
        { id: "c", texto: "Son obligatorias para los Estados, pero no recogen un plazo de transposición de su contenido." },
        { id: "d", texto: "Son directamente obligatorias tanto para los Estados como para los ciudadanos." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 16,
      enunciado: "La Unión Europea es una organización:",
      opciones: [
        { id: "a", texto: "Compuesta, en la actualidad, por 28 Estados." },
        { id: "b", texto: "Fundamentada en la cesión de competencias por parte de los Estados miembros." },
        { id: "c", texto: "Internacional clásica, donde los Estados cooperan de forma intensa para conseguir unos objetivos comunes." },
        { id: "d", texto: "Regida, en la actualidad, por la Constitución Europea y el Tratado de la Comunidad Europea." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 17,
      enunciado: "¿Cuál de las siguientes entidades NO es una Institución de la Unión Europea?:",
      opciones: [
        { id: "a", texto: "El Consejo Europeo y la Comisión Europea." },
        { id: "b", texto: "El Consejo de Europa." },
        { id: "c", texto: "El Consejo de la Unión Europea." },
        { id: "d", texto: "El Banco Central Europeo." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 18,
      enunciado: "El Consejo Europeo:",
      opciones: [
        { id: "a", texto: "Está compuesto por los Jefes de Estado y/o de Gobierno de los Estados miembros, el Presidente del propio Consejo Europeo y el Presidente del Parlamento Europeo." },
        { id: "b", texto: "Está encargado de dar a la Unión los impulsos necesarios para su desarrollo, definir sus orientaciones y prioridades políticas generales, y ejercer la función legislativa de la Unión." },
        { id: "c", texto: "Está encargado de dar a la Unión los impulsos necesarios para su desarrollo y definir sus orientaciones y prioridades políticas generales, pero no puede ejercer función legislativa alguna." },
        { id: "d", texto: "Está compuesto por los Jefes de Estado y/o de Gobierno de los Estados miembros, el Presidente de la Comisión Europea y el Presidente del Parlamento Europeo." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 19,
      enunciado: "El Consejo de la Unión Europea:",
      opciones: [
        { id: "a", texto: "No es una institución europea, sino un órgano consultivo de la Comisión Europea." },
        { id: "b", texto: "Es el co-legislador de la Unión Europea, ejerciendo la función legislativa junto con el Parlamento Europeo." },
        { id: "c", texto: "Está compuesto por tres representantes por cada Estado miembro." },
        { id: "d", texto: "Representa directamente a los ciudadanos de la Unión e indirectamente a los Estados miembros." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 20,
      enunciado: "La Comisión de la Unión Europea:",
      opciones: [
        { id: "a", texto: "Es la institución que representa y garantiza el interés general de la Unión." },
        { id: "b", texto: "Tiene prácticamente el monopolio de la iniciativa legislativa, de manera que es, junto con el Parlamento Europeo, el co-legislador de la Unión Europea." },
        { id: "c", texto: "Como ejecutivo y gestor de los asuntos europeos, la Comisión es responsable políticamente ante el Parlamento Europeo, si bien este no puede votar una moción de censura contra la misma." },
        { id: "d", texto: "Sus miembros son designados y propuestos por los Gobiernos de los Estados miembros, siendo así el representante directo de los mismos." },
      ],
      respuestaCorrecta: "a",
    },
    {
      id: 21,
      enunciado: "¿Cuál de las siguientes afirmaciones sobre el Parlamento de la Unión Europea es INCORRECTA?:",
      opciones: [
        { id: "a", texto: "Es una institución elegida directamente por los ciudadanos europeos, a los que representa en el proceso de construcción política europea." },
        { id: "b", texto: "Ejerce conjuntamente con el Consejo la función legislativa y la función presupuestaria." },
        { id: "c", texto: "Tiene facultades de control político sobre la Comisión Europea." },
        { id: "d", texto: "Los diputados al Parlamento Europeo serán elegidos por sufragio universal directo, libre y secreto, para un mandato de cuatro años." },
      ],
      respuestaCorrecta: "d",
    },
  ],
};

export { test };
export default test;
