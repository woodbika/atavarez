/**
 * Datos extraídos de "TEST PREVENCIÓN RIESGOS LABORALES Nº1.pdf".
 * El contenido de las preguntas, opciones y soluciones se conserva sin interpretaciones.
 */
const test = {
  schemaVersion: 1,
  id: "test-prevencion-riesgos-laborales-pantallas-visualizacion-datos-numero-1",
  autor: { id: "ivot", nombre: "IVOT" },
  titulo: "TEST PREVENCIÓN RIESGOS LABORALES Nº1",
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "12",
      titulo: "Prevención de riesgos laborales: Pantallas de visualización de datos.",
    },
  },
  fuente: { archivo: "TEST PREVENCIÓN RIESGOS LABORALES Nº1.pdf", paginas: 3 },
  preguntas: [
    {
      id: 1,
      enunciado: "Según el Real Decreto 488/1997, ¿quién se considera inequívocamente «persona trabajadora usuaria» de PVD?",
      opciones: [{ id: "a", texto: "Aquella que supere las 2 horas diarias o 10 horas semanales de trabajo efectivo con PVD." }, { id: "b", texto: "Aquella que supere las 4 horas diarias o 20 horas semanales de trabajo efectivo con PVD." }, { id: "c", texto: "Cualquier persona que utilice un equipo informático de forma esporádica en su puesto." }, { id: "d", texto: "Exclusivamente el personal informático dedicado al desarrollo de programas." }],
      respuestaCorrecta: "b",
    },
    {
      id: 2,
      enunciado: "¿Qué norma establece las disposiciones mínimas de seguridad y salud relativas al trabajo con PVD?",
      opciones: [{ id: "a", texto: "La Ley 31/1995, de 8 de noviembre." }, { id: "b", texto: "El Real Decreto 39/1997, de 17 de enero." }, { id: "c", texto: "El Real Decreto 488/1997, de 14 de abril." }, { id: "d", texto: "La Guía Técnica del INSHT exclusivamente." }],
      respuestaCorrecta: "c",
    },
    {
      id: 3,
      enunciado: "Para incluir a un trabajador que realiza entre 2 y 4 horas diarias (o 10-20h/semana) con PVD como «usuario», ¿cuántos de los 7 requisitos de la Guía Técnica debe cumplir al menos?",
      opciones: [{ id: "a", texto: "Al menos 3 requisitos." }, { id: "b", texto: "Al menos 4 requisitos." }, { id: "c", texto: "Al menos 5 requisitos." }, { id: "d", texto: "La totalidad de los 7 requisitos." }],
      respuestaCorrecta: "c",
    },
    {
      id: 4,
      enunciado: "¿Sobre quién recae la responsabilidad de adoptar las medidas necesarias para garantizar que el uso de PVD no suponga riesgos para la salud?",
      opciones: [{ id: "a", texto: "Sobre el empresariado." }, { id: "b", texto: "Sobre el comité de seguridad y salud." }, { id: "c", texto: "Sobre el fabricante del equipo informático." }, { id: "d", texto: "Sobre la persona trabajadora de manera individual." }],
      respuestaCorrecta: "a",
    },
    {
      id: 5,
      enunciado: "En relación con la organización de las pausas en puestos de trabajo con PVD, es CORRECTO afirmar que:",
      opciones: [{ id: "a", texto: "Las pausas deben ser escasas y de larga duración para ser más efectivas." }, { id: "b", texto: "Las pausas deben ser introducidas antes de que sobrevenga la fatiga." }, { id: "c", texto: "El tiempo de pausa debe compensarse incrementando el ritmo de trabajo posterior." }, { id: "d", texto: "Las pausas deben realizarse frente a la pantalla en todo momento." }],
      respuestaCorrecta: "b",
    },
    {
      id: 6,
      enunciado: "A título orientativo general, ¿cuál es la pauta de pausas más recomendable durante la jornada de trabajo con PVD?",
      opciones: [{ id: "a", texto: "Pausas de 5 minutos cada 3 horas." }, { id: "b", texto: "Pausas de 10-15 minutos cada 90 minutos de trabajo con pantalla." }, { id: "c", texto: "Una sola pausa de 30 minutos a mitad de la jornada." }, { id: "d", texto: "Pausas de 20 minutos cada 4 horas continuadas." }],
      respuestaCorrecta: "b",
    },
    {
      id: 7,
      enunciado: "En tareas que requieran una elevada atención continuada en la pantalla, ¿qué frecuencia de pausa se aconseja?",
      opciones: [{ id: "a", texto: "Al menos una pausa de 10 minutos por cada hora de actividad." }, { id: "b", texto: "Una pausa de 15 minutos cada dos horas." }, { id: "c", texto: "Una pausa de 5 minutos al final del día." }, { id: "d", texto: "No se requieren pausas especiales si se dispone de una buena silla." }],
      respuestaCorrecta: "a",
    },
    {
      id: 8,
      enunciado: "¿Cuándo debe revisarse la evaluación de riesgos de un puesto de trabajo con PVD?",
      opciones: [{ id: "a", texto: "Únicamente cuando lo solicite formalmente la Inspección de Trabajo." }, { id: "b", texto: "Cuando se introduzcan cambios significativos o se hayan detectado daños en la salud." }, { id: "c", texto: "Obligatoriamente cada 5 años sin excepción." }, { id: "d", texto: "Solo cuando se cambie de sede física de la empresa." }],
      respuestaCorrecta: "b",
    },
    {
      id: 9,
      enunciado: "¿Cuál de los siguientes exámenes médicos NO forma parte de los tres tipos contemplados en la vigilancia de la salud para trabajadores con PVD?",
      opciones: [{ id: "a", texto: "Examen previo al inicio del trabajo con PVD." }, { id: "b", texto: "Examen específico periódico." }, { id: "c", texto: "Examen a demanda de la persona trabajadora." }, { id: "d", texto: "Examen psicotécnico de aptitud para la conducción de vehículos." }],
      respuestaCorrecta: "d",
    },
    {
      id: 10,
      enunciado: "En puestos de trabajo con riesgos significativos o pérdidas potenciales graves (ej. control de tráfico aéreo o plantas de energía):",
      opciones: [{ id: "a", texto: "Basta con la información suministrada por un test de evaluación básico de oficina." }, { id: "b", texto: "Es necesario realizar una evaluación de riesgos más detallada que el procedimiento estándar." }, { id: "c", texto: "No es aplicable la normativa de prevención de riesgos laborales." }, { id: "d", texto: "Se sustituye la evaluación por un seguro médico privado obligatorio." }],
      respuestaCorrecta: "b",
    },
  ],
};

export { test };
export default test;
