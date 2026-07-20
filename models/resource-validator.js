function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function validateClassification(classification, path, errors) {
  if (!classification || typeof classification !== "object") {
    errors.push(`${path}: falta la clasificación.`);
    return;
  }

  ["administracion", "oposicion", "grupo", "escala"].forEach((field) => {
    if (!isNonEmptyString(classification[field])) {
      errors.push(`${path}.clasificacion.${field}: debe contener texto.`);
    }
  });

  if (!classification.tema || typeof classification.tema !== "object") {
    errors.push(`${path}.clasificacion.tema: es obligatorio.`);
    return;
  }
  if (!isNonEmptyString(String(classification.tema.numero ?? ""))) {
    errors.push(`${path}.clasificacion.tema.numero: es obligatorio.`);
  }
  if (!isNonEmptyString(classification.tema.titulo)) {
    errors.push(`${path}.clasificacion.tema.titulo: debe contener texto.`);
  }
  if (classification.partes !== undefined && !Array.isArray(classification.partes)) {
    errors.push(`${path}.clasificacion.partes: debe ser una lista.`);
  } else if (
    Array.isArray(classification.partes) &&
    classification.partes.some((part) => !isNonEmptyString(part))
  ) {
    errors.push(`${path}.clasificacion.partes: solo puede contener texto.`);
  }
}

function classificationsMatch(resourceClassification, testClassification) {
  if (!resourceClassification || !testClassification) return false;
  const fields = ["administracion", "oposicion", "grupo", "escala"];
  const sameFields = fields.every(
    (field) => resourceClassification[field] === testClassification[field],
  );
  const sameTheme =
    String(resourceClassification.tema?.numero ?? "") ===
      String(testClassification.tema?.numero ?? "") &&
    resourceClassification.tema?.titulo === testClassification.tema?.titulo;
  const resourceParts = resourceClassification.partes;
  const testParts = testClassification.partes;
  const bothOmitParts = resourceParts === undefined && testParts === undefined;
  const sameParts = bothOmitParts || (
    Array.isArray(resourceParts) &&
    Array.isArray(testParts) &&
    resourceParts.length === testParts.length &&
    resourceParts.every((part, index) => part === testParts[index])
  );
  return sameFields && sameTheme && sameParts;
}

function validateTest(resource, path, errors) {
  const test = resource.data;
  if (!test || typeof test !== "object") {
    errors.push(`${path}.data: falta el contenido del test.`);
    return;
  }
  if (test.schemaVersion !== 1) errors.push(`${path}.data.schemaVersion: debe ser 1.`);
  if (test.id !== resource.id) errors.push(`${path}.data.id: debe coincidir con el recurso.`);
  if (!isNonEmptyString(test.titulo)) errors.push(`${path}.data.titulo: debe contener texto.`);
  if (!isNonEmptyString(test.autor?.id) || !isNonEmptyString(test.autor?.nombre)) {
    errors.push(`${path}.data.autor: debe incluir id y nombre.`);
  }
  if (test.titulo !== resource.title) {
    errors.push(`${path}.title: debe coincidir con el título del test.`);
  }
  if (
    test.autor?.id !== resource.author?.id ||
    test.autor?.nombre !== resource.author?.nombre
  ) {
    errors.push(`${path}.author: debe coincidir con el autor del test.`);
  }
  if (!classificationsMatch(resource.classification, test.clasificacion)) {
    errors.push(`${path}.classification: debe coincidir con la clasificación del test.`);
  }
  validateClassification(test.clasificacion, `${path}.data`, errors);
  if (!Array.isArray(test.preguntas) || test.preguntas.length === 0) {
    errors.push(`${path}.data.preguntas: debe contener al menos una pregunta.`);
    return;
  }

  const questionIds = new Set();
  test.preguntas.forEach((question, questionIndex) => {
    const questionPath = `${path}.data.preguntas[${questionIndex}]`;
    const questionId = String(question?.id ?? "");
    if (!questionId) errors.push(`${questionPath}.id: es obligatorio.`);
    else if (questionIds.has(questionId)) errors.push(`${questionPath}.id: está duplicado.`);
    else questionIds.add(questionId);

    if (!isNonEmptyString(question?.enunciado)) {
      errors.push(`${questionPath}.enunciado: debe contener texto.`);
    }
    if (!Array.isArray(question?.opciones) || question.opciones.length < 2) {
      errors.push(`${questionPath}.opciones: debe contener al menos dos opciones.`);
      return;
    }

    const optionIds = new Set();
    question.opciones.forEach((option, optionIndex) => {
      const optionPath = `${questionPath}.opciones[${optionIndex}]`;
      const optionId = option?.id;
      if (!isNonEmptyString(optionId)) errors.push(`${optionPath}.id: debe ser texto.`);
      else if (optionIds.has(optionId)) errors.push(`${optionPath}.id: está duplicado.`);
      else optionIds.add(optionId);
      if (!isNonEmptyString(option?.texto)) {
        errors.push(`${optionPath}.texto: debe contener texto.`);
      }
    });

    if (!optionIds.has(question.respuestaCorrecta)) {
      errors.push(`${questionPath}.respuestaCorrecta: no coincide con ninguna opción.`);
    }
  });
}

export function validateResources(resources) {
  const errors = [];
  if (!Array.isArray(resources) || resources.length === 0) {
    return ["resources: debe contener al menos un recurso."];
  }

  const resourceIds = new Set();
  resources.forEach((resource, index) => {
    const path = `resources[${index}]`;
    if (!resource || typeof resource !== "object") {
      errors.push(`${path}: debe ser un objeto.`);
      return;
    }
    if (!isNonEmptyString(resource.id)) errors.push(`${path}.id: es obligatorio.`);
    else if (resourceIds.has(resource.id)) errors.push(`${path}.id: está duplicado.`);
    else resourceIds.add(resource.id);
    if (!isNonEmptyString(resource.type)) errors.push(`${path}.type: es obligatorio.`);
    if (!isNonEmptyString(resource.title)) errors.push(`${path}.title: debe contener texto.`);
    validateClassification(resource.classification, path, errors);
    if (resource.type === "test") validateTest(resource, path, errors);
  });

  return errors;
}

export function assertValidResources(resources) {
  const errors = validateResources(resources);
  if (!errors.length) return;
  throw new AggregateError(errors.map((message) => new Error(message)), "Catálogo no válido");
}
