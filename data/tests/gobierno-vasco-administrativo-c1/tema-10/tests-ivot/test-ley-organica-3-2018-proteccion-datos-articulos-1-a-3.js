/**
 * Datos extraídos de "TEST LEY 3-2018 DE PROTECCIÓN DE DATOS ART. 1 A 3.pdf".
 * El contenido de las preguntas, opciones y soluciones se conserva sin interpretaciones.
 */
const test = {
  schemaVersion: 1,
  id: "test-ley-organica-3-2018-proteccion-datos-articulos-1-a-3",
  autor: { id: "ivot", nombre: "IVOT" },
  titulo: "Test de Protección de Datos. Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales. Artículos 1 a 3.",
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "10",
      titulo: "Aspectos básicos de la protección de datos personales: conceptos, principios y bases de legitimación del tratamiento de datos, derechos de las personas. Categorías especiales de datos.",
    },
  },
  fuente: { archivo: "TEST LEY 3-2018 DE PROTECCIÓN DE DATOS ART. 1 A 3.pdf", paginas: 3 },
  preguntas: [
    {
      id: 1,
      enunciado: "Es objeto de esta ley:",
      opciones: [{ id: "a", texto: "Adaptar el ordenamiento jurídico español al Reglamento UE 2016/679, de 27 de abril de 2016, relativo a la protección de personas físicas en lo que respecta al tratamiento de sus datos personales y a la libre circulación de estos datos." }, { id: "b", texto: "Completar las disposiciones del Reglamento UE 2016/679, de 27 de abril de 2016, relativo a la protección de personas físicas en lo que respecta al tratamiento de sus datos personales y a la libre circulación de estos datos." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 2,
      enunciado: "El Reglamento anterior fue aprobado por:",
      opciones: [{ id: "a", texto: "El Parlamento Europeo y el Consejo de la Unión Europea." }, { id: "b", texto: "El Parlamento Europeo y Comisión Europea." }, { id: "c", texto: "El Consejo de la UE y Comisión Europea." }],
      respuestaCorrecta: "a",
    },
    {
      id: 3,
      enunciado: "Se ejercerá de acuerdo al Reglamento de la UE y a esta Ley Orgánica:",
      opciones: [{ id: "a", texto: "El derecho fundamental de las personas físicas a la protección de datos, amparado por el el artículo 18.4 de la CE." }, { id: "b", texto: "El derecho fundamental de las personas jurídicas a la protección de datos, amparado por el artículo 18.4 de la CE." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "a",
    },
    {
      id: 4,
      enunciado: "Esta ley tiene por objeto:",
      opciones: [{ id: "a", texto: "Reconocer los derechos digitales de la ciudadanía conforme al mandato del artículo 18.4 de la CE." }, { id: "b", texto: "Garantizar los derechos digitales de la ciudadanía conforme al mandato del artículo 18.4 de la CE." }, { id: "c", texto: "Limitar los derechos digitales de la ciudadanía conforme al mandato del artículo 18. 4 de la CE." }],
      respuestaCorrecta: "b",
    },
    {
      id: 5,
      enunciado: "El artículo 2 de la presente ley regula el ámbito de aplicación de:",
      opciones: [{ id: "a", texto: "Toda la ley." }, { id: "b", texto: "De los Títulos I al IX." }, { id: "c", texto: "De los Títulos I al IX y de los artículos 89 a 94." }],
      respuestaCorrecta: "c",
    },
    {
      id: 6,
      enunciado: "Lo señalado en la pregunta anterior se aplica a:",
      opciones: [{ id: "a", texto: "Los tratamientos automatizados total o parcialmente de datos personales." }, { id: "b", texto: "Los tratamientos no automatizados de datos personales." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 7,
      enunciado: "Dichos datos personales:",
      opciones: [{ id: "a", texto: "Deben estar contenidos en un fichero." }, { id: "b", texto: "Deber estar destinados a ser incluidos en un fichero." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 8,
      enunciado: "Esta ley orgánica no será de aplicación:",
      opciones: [{ id: "a", texto: "A los tratamientos excluidos del ámbito de aplicación del Reglamento de la UE." }, { id: "b", texto: "A los tratamientos de las personas vinculadas familiarmente o de hecho a personas fallecidas." }, { id: "c", texto: "A los tratamientos sometidos a la normativa sobre la protección de la salud." }],
      respuestaCorrecta: "a",
    },
    {
      id: 9,
      enunciado: "Los tratamientos a los que no sea directamente aplicable el Reglamento de la UE por afectar a actividades no comprendidas en el ámbito de aplicación del Derecho de la UE:",
      opciones: [{ id: "a", texto: "Se regirán por esta Ley Orgánica y subsidiariamente por el Reglamento de la UE." }, { id: "b", texto: "Se regirán por su Legislación específica y subsidiariamente por el Reglamento de la UE y esta Ley Orgánica." }, { id: "c", texto: "No se regirán en ningún caso por el Reglamento de la UE." }],
      respuestaCorrecta: "b",
    },
    {
      id: 10,
      enunciado: "Se encuentran en esta situación, entre otros, los tratamientos:",
      opciones: [{ id: "a", texto: "Realizados al amparo de la legislación orgánica del régimen electoral general." }, { id: "b", texto: "Los tratamientos realizados en el ámbito de la Administración de Justicia." }, { id: "c", texto: "Los tratamientos derivados del Padrón Municipal y del Censo Promocional." }],
      respuestaCorrecta: "a",
    },
    {
      id: 11,
      enunciado: "El tratamiento de datos llevado a cabo con ocasión de la tramitación por los órganos judiciales de los procesos de los que sean competentes, así como el realizado dentro de la gestión de la Oficina Judicial, se regirán por:",
      opciones: [{ id: "a", texto: "El Reglamento UE 2016/679 y la presente Ley orgánica." }, { id: "b", texto: "La Ley Orgánica 6/1985, de 1 de julio, del Poder Judicial" }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 12,
      enunciado: "Podrán acceder a los datos personales de una persona fallecida y, en su caso, rectificar o suprimir dichos datos:",
      opciones: [{ id: "a", texto: "Las personas vinculadas al fallecido por razones familiares o de hecho." }, { id: "b", texto: "Sus herederos." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 13,
      enunciado: "Como excepción, las personas de la pregunta anterior no podrán ejercer dichos derechos:",
      opciones: [{ id: "a", texto: "Si la persona lo ha prohibido expresa o tácitamente." }, { id: "b", texto: "Cuando así lo señale una ley." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "b",
    },
    {
      id: 14,
      enunciado: "Se regularán las condiciones, validez de las instrucciones dadas por la persona fallecida cuando quiere que una persona o institución acceda a sus datos, los rectifique y, en su caso, suprima:",
      opciones: [{ id: "a", texto: "Por Ley orgánica." }, { id: "b", texto: "Por norma con rango de Ley." }, { id: "c", texto: "Por Real Decreto." }],
      respuestaCorrecta: "c",
    },
    {
      id: 15,
      enunciado: "Si la persona fallecida es menor, dichas facultades corresponden:",
      opciones: [{ id: "a", texto: "Al Ministerio Fiscal." }, { id: "b", texto: "A titulares de la patria potestad o tutela." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 16,
      enunciado: "¿Y si era una persona con discapacidad?",
      opciones: [{ id: "a", texto: "Los de la pregunta anterior." }, { id: "b", texto: "La persona que hace funciones de apoyo." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
  ],
};

export { test };
export default test;
