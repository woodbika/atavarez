/**
 * Datos extraídos de "TEST DE PRESUPUESTOS. CLASIFICACIÓN DE LOS INGRESOS Y FASES DE EJECUCIÓN.pdf".
 * El contenido de las preguntas, opciones y soluciones se conserva sin interpretaciones.
 */
const test = {
  schemaVersion: 1,
  id: "test-presupuesto-ingresos-clasificacion-y-fases-ejecucion",
  autor: { id: "ivot", nombre: "IVOT" },
  titulo: "Test del presupuesto de ingresos: clasificación de los ingresos y fases de ejecución.",
  clasificacion: {
    administracion: "EUSKO JAURLARITZA / GOBIERNO VASCO",
    oposicion: "Cuerpo Administrativo",
    grupo: "C1",
    escala: "Escala Administrativa",
    tema: {
      numero: "16",
      titulo: "El presupuesto de ingresos. Tipos de ingresos. Fases de ejecución del presupuesto de ingresos: Derechos reconocidos, ingresos. Devolución de ingresos indebidos. Derechos reconocidos pendientes de cobro. Documentos contables de ingresos.",
    },
  },
  fuente: {
    archivo: "TEST DE PRESUPUESTOS. CLASIFICACIÓN DE LOS INGRESOS Y FASES DE EJECUCIÓN.pdf",
    paginas: 4,
  },
  preguntas: [
    {
      id: 1,
      enunciado: "Los estados de ingresos de los presupuestos de las entidades de la Administración de la C.A.E recogerán:",
      opciones: [
        { id: "a", texto: "El importe de los recursos financieros que, por todos los conceptos, se prevea liquidar como mínimo en el ejercicio." },
        { id: "b", texto: "El importe de los recursos financieros que, por todos los conceptos, se prevea liquidar como máximo en el ejercicio." },
        { id: "c", texto: "El importe de los recursos financieros que, por todos los conceptos, se prevea liquidar en el ejercicio." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 2,
      enunciado: "Los recursos financieros se recogen en:",
      opciones: [
        { id: "a", texto: "La Ley de Régimen Presupuestario de Euskadi." },
        { id: "b", texto: "La Ley de Principios Ordenadores de la Hacienda General del País Vasco." },
        { id: "c", texto: "Ninguna es correcta." },
      ],
      respuestaCorrecta: "b",
    },
    {
      id: 3,
      enunciado: "Los ingresos:",
      opciones: [
        { id: "a", texto: "Tienen el mismo carácter limitativo que los créditos." },
        { id: "b", texto: "Tienen carácter estimativo al igual que los créditos." },
        { id: "c", texto: "Tienen carácter estimativo a diferencia de los créditos." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 4,
      enunciado: "Los Derechos de la Hacienda General del País Vasco pueden ser:",
      opciones: [{ id: "a", texto: "De derecho público." }, { id: "b", texto: "De derecho privado." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 5,
      enunciado: "Los derivados de actividades en las que la Administración es titular de potestades públicas son derechos:",
      opciones: [{ id: "a", texto: "De derecho público." }, { id: "b", texto: "De derecho privado." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "a",
    },
    {
      id: 6,
      enunciado: "Los que corresponden a la Administración, derivados de actividades en las que ésta no es titular de potestades públicas:",
      opciones: [{ id: "a", texto: "De derecho público." }, { id: "b", texto: "De derecho privado." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "b",
    },
    {
      id: 7,
      enunciado: "Las aportaciones ¿quiénes las efectúan?",
      opciones: [{ id: "a", texto: "Los Ayuntamientos." }, { id: "b", texto: "Las Diputaciones Forales." }, { id: "c", texto: "El Estado." }],
      respuestaCorrecta: "b",
    },
    {
      id: 8,
      enunciado: "Son ingreso de:",
      opciones: [{ id: "a", texto: "De derecho público." }, { id: "b", texto: "De derecho privado." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "a",
    },
    {
      id: 9,
      enunciado: "Representan:",
      opciones: [{ id: "a", texto: "Menos del 20% del total de los ingresos." }, { id: "b", texto: "La mitad de los ingresos." }, { id: "c", texto: "Más del 80% de los ingresos." }],
      respuestaCorrecta: "c",
    },
    {
      id: 10,
      enunciado: "Por la expedición de licencias se paga:",
      opciones: [{ id: "a", texto: "Un precio público." }, { id: "b", texto: "Una tasa." }, { id: "c", texto: "Un impuesto." }],
      respuestaCorrecta: "b",
    },
    {
      id: 11,
      enunciado: "Por la venta de una publicación se paga:",
      opciones: [{ id: "a", texto: "Un precio público." }, { id: "b", texto: "Una tasa." }, { id: "c", texto: "Un impuesto." }],
      respuestaCorrecta: "a",
    },
    {
      id: 12,
      enunciado: "Por la venta de una vivienda se paga:",
      opciones: [{ id: "a", texto: "Un precio público." }, { id: "b", texto: "Una tasa." }, { id: "c", texto: "Un impuesto." }],
      respuestaCorrecta: "a",
    },
    {
      id: 13,
      enunciado: "Por matrículas se paga:",
      opciones: [{ id: "a", texto: "Un precio público." }, { id: "b", texto: "Una tasa." }, { id: "c", texto: "Un impuesto." }],
      respuestaCorrecta: "b",
    },
    {
      id: 14,
      enunciado: "Por servicios portuarios o aeroportuarios se paga:",
      opciones: [{ id: "a", texto: "Un precio público." }, { id: "b", texto: "Una tasa." }, { id: "c", texto: "Un impuesto." }],
      respuestaCorrecta: "b",
    },
    {
      id: 15,
      enunciado: "Por expedición de certificados o títulos:",
      opciones: [{ id: "a", texto: "Un precio público." }, { id: "b", texto: "Una tasa." }, { id: "c", texto: "Un impuesto." }],
      respuestaCorrecta: "b",
    },
    {
      id: 16,
      enunciado: "De otros entes públicos ¿qué pueden recibir?",
      opciones: [{ id: "a", texto: "Transferencias." }, { id: "b", texto: "Subvenciones." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 17,
      enunciado: "Los impuestos propios son:",
      opciones: [{ id: "a", texto: "Directos." }, { id: "b", texto: "Indirectos." }, { id: "c", texto: "Ambas respuestas son correctas." }],
      respuestaCorrecta: "c",
    },
    {
      id: 18,
      enunciado: "El único impuesto vigente es:",
      opciones: [{ id: "a", texto: "Impuesto sobre el bingo." }, { id: "b", texto: "Impuesto de Juego." }, { id: "c", texto: "El IRPF." }],
      respuestaCorrecta: "a",
    },
    {
      id: 19,
      enunciado: "Y el único recargo existente es sobre:",
      opciones: [{ id: "a", texto: "Impuesto sobre el bingo." }, { id: "b", texto: "Impuesto de Juego." }, { id: "c", texto: "El IRPF." }],
      respuestaCorrecta: "b",
    },
    {
      id: 20,
      enunciado: "Dentro del ingresos derivados del endeudamiento público no entra:",
      opciones: [{ id: "a", texto: "Deuda Pública." }, { id: "b", texto: "Operaciones de préstamo." }, { id: "c", texto: "Operaciones bursátiles." }],
      respuestaCorrecta: "c",
    },
    {
      id: 21,
      enunciado: "Las fases de ejecución del presupuesto de ingresos son:",
      opciones: [
        { id: "a", texto: "El reconocimiento, liquidación e ingreso." },
        { id: "b", texto: "El reconocimiento de los derechos, liquidación de los mismos, ingresos y recaudación." },
        { id: "c", texto: "El reconocimiento de los derechos e ingreso efectivo de los mismos." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 22,
      enunciado: "El acto por el cual se formaliza un derecho económico a favor de la Administración de la CAE es:",
      opciones: [{ id: "a", texto: "El reconocimiento del derecho." }, { id: "b", texto: "La autorización del derecho." }, { id: "c", texto: "El ingreso del derecho reconocido." }],
      respuestaCorrecta: "a",
    },
    {
      id: 23,
      enunciado: "El acto por el cual se constituye las personas físicas o jurídicas que deben satisfacer una determinada cantidad de dinero, en deudores de la misma es:",
      opciones: [{ id: "a", texto: "El reconocimiento del derecho." }, { id: "b", texto: "La autorización del derecho." }, { id: "c", texto: "El ingreso del derecho reconocido." }],
      respuestaCorrecta: "a",
    },
    {
      id: 24,
      enunciado: "Para reconocer contablemente un derecho a favor de la Hacienda General de País Vasco:",
      opciones: [
        { id: "a", texto: "Se tiene que tener constancia de que se ha producido un acontecimiento que haya dado lugar al nacimiento de un derecho a cobro." },
        { id: "b", texto: "Que el derecho de cobro tenga un valor cierto y determinado y que el deudor pueda ser determinado." },
        { id: "c", texto: "Ambas respuestas son correctas." },
      ],
      respuestaCorrecta: "c",
    },
    {
      id: 25,
      enunciado: "Como criterio general, los derechos se reconocen en el momento en que:",
      opciones: [{ id: "a", texto: "Se ingresan." }, { id: "b", texto: "Se liquidan." }, { id: "c", texto: "Los exige la Tesorería." }],
      respuestaCorrecta: "b",
    },
  ],
};

export { test };
export default test;
