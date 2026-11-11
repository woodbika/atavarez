/**
 * Datos extraídos de "TEST LEY 3-2018 DE PROTECCIÓN DE DATOS ART. 13 A 18.pdf".
 * El contenido de las preguntas, opciones y soluciones se conserva sin interpretaciones.
 */
const test = {
  schemaVersion: 1,
  id: "test-ley-organica-3-2018-proteccion-datos-articulos-13-a-18",
  autor: { id: "ivot", nombre: "IVOT" },
  titulo: "Test de Protección de Datos. Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales. Artículos 13 a 18.",
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
  fuente: { archivo: "TEST LEY 3-2018 DE PROTECCIÓN DE DATOS ART. 13 A 18.pdf", paginas: 3 },
  preguntas: [
    {
      id: 1,
      enunciado: "Derecho de acceso. Cuando el responsable trate una gran cantidad de datos relativos al afectado y este ejercite su derecho de acceso sin especificar si se refiere a todos o a una parte de los datos:",
      opciones: [{ id: "a", texto: "El responsable del tratamiento podrá negarle el ejercicio del derecho." }, { id: "b", texto: "El responsable del tratamiento podrá solicitarle que el afectado especifique los datos o actividades de tratamiento a los que se refiere la solicitud." }, { id: "c", texto: "Ambas respuestas son correctas, son dos opciones distintas." }],
      respuestaCorrecta: "b",
    },
    {
      id: 2,
      enunciado: "El derecho de acceso. No es correcto señalar:",
      opciones: [{ id: "a", texto: "Se entenderá otorgado si el responsable del tratamiento facilitara al afectado un sistema de acceso remoto, directo y seguro a los datos personales." }, { id: "b", texto: "El sistema de acceso remoto, directo y seguro a los datos personales, de la respuesta anterior, garantizará el acceso por una vez a su totalidad." }, { id: "c", texto: "La comunicación por el responsable al afectado del modo en que este podrá acceder a dicho sistema bastará para tener por atendida la solicitud de ejercicio del derecho." }],
      respuestaCorrecta: "b",
    },
    {
      id: 3,
      enunciado: "Respecto a la pregunta anterior:",
      opciones: [{ id: "a", texto: "El interesado podrá solicitar del responsable cierta información que no se incluyese en el sistema de acceso remoto." }, { id: "b", texto: "El interesado no podrá solicitar del responsable información que no se incluyese en el sistema de acceso remoto." }, { id: "c", texto: "La ley no regula nada relativo a esa cuestión." }],
      respuestaCorrecta: "a",
    },
    {
      id: 4,
      enunciado: "Se podrá considerar repetitivo el ejercicio del derecho de acceso en más de una ocasión durante el plazo de:",
      opciones: [{ id: "a", texto: "3 meses." }, { id: "b", texto: "6 meses." }, { id: "c", texto: "12 meses." }],
      respuestaCorrecta: "b",
    },
    {
      id: 5,
      enunciado: "Cuando el afectado elija un medio distinto al que se le ofrece que suponga un coste desproporcionado:",
      opciones: [{ id: "a", texto: "La solicitud será considerada excesiva." }, { id: "b", texto: "El responsable podrá denegar el ejercicio del derecho." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "a",
    },
    {
      id: 6,
      enunciado: "Derecho de rectificación.",
      opciones: [{ id: "a", texto: "El afectado deberá indicar en su solicitud a qué datos se refiere y la corrección que haya de realizarse." }, { id: "b", texto: "Deberá acompañar, en todo caso, la documentación justificativa de la inexactitud o carácter incompleto de los datos objeto de tratamiento." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "a",
    },
    {
      id: 7,
      enunciado: "Derecho de supresión:",
      opciones: [{ id: "a", texto: "Cuando se derive del ejercicio del derecho de oposición el responsable deberá suprimir todos los datos sin excepción alguna." }, { id: "b", texto: "Cuando se derive del ejercicio del derecho de oposición el responsable podrá conservar los datos identificativos del afectado necesarios para tratamientos futuros para fines de mercadotecnia directa." }, { id: "c", texto: "Cuando se derive del ejercicio del derecho de oposición el responsable podrá conservar los datos identificativos del afectado necesarios para evitar tratamientos futuros para fines de mercadotecnia directa." }],
      respuestaCorrecta: "c",
    },
    {
      id: 8,
      enunciado: "Derecho a la limitación del tratamiento:",
      opciones: [{ id: "a", texto: "De acuerdo a la presente ley, el hecho de que el tratamiento de los datos personales esté limitado debe constar claramente en los sistemas de información del responsable." }, { id: "b", texto: "De acuerdo a la presente ley, el hecho de que el tratamiento de los datos personales esté limitado debe constar claramente en los sistemas de información del encargado del tratamiento." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "a",
    },
  ],
};

export { test };
export default test;
