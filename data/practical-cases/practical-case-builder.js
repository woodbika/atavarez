const optionIds = ["a", "b", "c", "d"];

export function practicalQuestion(
  id,
  enunciado,
  opciones,
  respuestaCorrecta,
  explicacion,
) {
  return {
    id,
    enunciado,
    opciones: opciones.map((texto, index) => ({
      id: optionIds[index],
      texto,
    })),
    respuestaCorrecta,
    explicacion,
  };
}

export function buildPracticalCase(definition) {
  const preguntas = definition.casos.flatMap((caso) =>
    caso.preguntas.map((question) => ({
      ...question,
      caso: {
        id: caso.id,
        numero: caso.numero,
        ...(caso.articulo ? { articulo: caso.articulo } : {}),
        ...(caso.articulos ? { articulos: caso.articulos } : {}),
        titulo: caso.titulo,
        supuesto: caso.supuesto,
      },
    })),
  );

  return {
    ...definition,
    preguntas,
  };
}
