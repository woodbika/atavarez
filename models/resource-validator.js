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

function validateTheoryStructureItem(item, path, errors) {
  if (!item || typeof item !== "object") {
    errors.push(`${path}: debe ser un objeto.`);
    return;
  }
  if (!isNonEmptyString(item.titulo)) errors.push(`${path}.titulo: debe contener texto.`);
  if (item.elementos !== undefined && !Array.isArray(item.elementos)) {
    errors.push(`${path}.elementos: debe ser una lista.`);
    return;
  }
  (item.elementos ?? []).forEach((child, index) => {
    validateTheoryStructureItem(child, `${path}.elementos[${index}]`, errors);
  });
}

function validateTheoryTextContent(item, path, errors) {
  if (item.texto !== undefined && !isNonEmptyString(item.texto)) {
    errors.push(`${path}.texto: debe contener texto.`);
  }
  if (item.parrafos !== undefined && (
    !Array.isArray(item.parrafos) || item.parrafos.some((text) => !isNonEmptyString(text))
  )) {
    errors.push(`${path}.parrafos: solo puede contener texto.`);
  }
  if (item.apartados !== undefined) {
    if (!Array.isArray(item.apartados)) {
      errors.push(`${path}.apartados: debe ser una lista.`);
    } else {
      item.apartados.forEach((section, index) => {
        if (!section || typeof section !== "object") {
          errors.push(`${path}.apartados[${index}]: debe ser un objeto.`);
          return;
        }
        if (section.numero === undefined) {
          errors.push(`${path}.apartados[${index}].numero: es obligatorio.`);
        }
        validateTheoryTextContent(section, `${path}.apartados[${index}]`, errors);
      });
    }
  }
  [
    ["letras", "letra"],
    ["ordinales", "ordinal"],
    ["numerales", "numero"],
  ].forEach(([field, label]) => {
    if (item[field] === undefined) return;
    if (!Array.isArray(item[field])) {
      errors.push(`${path}.${field}: debe ser una lista.`);
      return;
    }
    item[field].forEach((entry, index) => {
      const entryPath = `${path}.${field}[${index}]`;
      if (!entry || typeof entry !== "object") {
        errors.push(`${entryPath}: debe ser un objeto.`);
        return;
      }
      if (!isNonEmptyString(String(entry[label] ?? ""))) {
        errors.push(`${entryPath}.${label}: es obligatorio.`);
      }
      const hasText = isNonEmptyString(entry.texto);
      const hasParagraphs = Array.isArray(entry.parrafos) &&
        entry.parrafos.some((paragraph) => isNonEmptyString(paragraph));
      if (!hasText && !hasParagraphs) {
        errors.push(`${entryPath}: debe contener texto o párrafos.`);
      }
      validateTheoryTextContent(entry, entryPath, errors);
    });
  });
}

function validateTheoryLegalItem(item, path, errors) {
  if (!item || typeof item !== "object") {
    errors.push(`${path}: debe ser un objeto.`);
    return;
  }
  if (item.numero === undefined && item.tipo !== "apartado-tematico") {
    errors.push(`${path}.numero: es obligatorio.`);
  }
  if (item.tipo && item.tipo !== "articulo" && !isNonEmptyString(item.titulo)) {
    errors.push(`${path}.titulo: debe contener texto.`);
  }
  ["contenido", "articulos"].forEach((field) => {
    if (item[field] === undefined) return;
    if (!Array.isArray(item[field])) {
      errors.push(`${path}.${field}: debe ser una lista.`);
      return;
    }
    item[field].forEach((child, index) => {
      validateTheoryLegalItem(child, `${path}.${field}[${index}]`, errors);
    });
  });
  validateTheoryTextContent(item, path, errors);
}

function validateTheory(resource, path, errors) {
  const theory = resource.data;
  if (!theory || typeof theory !== "object") {
    errors.push(`${path}.data: falta el contenido teórico.`);
    return;
  }
  if (theory.schemaVersion !== 1) errors.push(`${path}.data.schemaVersion: debe ser 1.`);
  if (theory.id !== resource.id) errors.push(`${path}.data.id: debe coincidir con el recurso.`);
  if (!isNonEmptyString(theory.titulo)) errors.push(`${path}.data.titulo: debe contener texto.`);
  if (!classificationsMatch(resource.classification, theory.clasificacion)) {
    errors.push(`${path}.classification: debe coincidir con la clasificación de la teoría.`);
  }
  validateClassification(theory.clasificacion, `${path}.data`, errors);
  if (!isNonEmptyString(theory.fuente?.archivo)) {
    errors.push(`${path}.data.fuente.archivo: debe contener texto.`);
  }
  if (!isNonEmptyString(theory.fuente?.url)) {
    errors.push(`${path}.data.fuente.url: debe contener la ruta del documento.`);
  }
  if (!Number.isInteger(theory.fuente?.paginas) || theory.fuente.paginas < 1) {
    errors.push(`${path}.data.fuente.paginas: debe ser un entero positivo.`);
  }
  if (!Array.isArray(theory.bloques) || theory.bloques.length === 0) {
    errors.push(`${path}.data.bloques: debe contener al menos un bloque.`);
    return;
  }
  theory.bloques.forEach((block, index) => {
    const blockPath = `${path}.data.bloques[${index}]`;
    if (!isNonEmptyString(block?.id)) errors.push(`${blockPath}.id: debe contener texto.`);
    if (!isNonEmptyString(block?.titulo)) errors.push(`${blockPath}.titulo: debe contener texto.`);
    if (block?.tipo === "estructura") {
      if (!Array.isArray(block.elementos) || block.elementos.length === 0) {
        errors.push(`${blockPath}.elementos: debe contener elementos.`);
      } else {
        block.elementos.forEach((item, itemIndex) => {
          validateTheoryStructureItem(item, `${blockPath}.elementos[${itemIndex}]`, errors);
        });
      }
    } else if (block?.tipo === "titulo" || block?.tipo === "apartado-tematico") {
      if (!Array.isArray(block.contenido) || block.contenido.length === 0) {
        errors.push(`${blockPath}.contenido: debe contener elementos.`);
      } else {
        block.contenido.forEach((item, itemIndex) => {
          validateTheoryLegalItem(item, `${blockPath}.contenido[${itemIndex}]`, errors);
        });
      }
    } else {
      errors.push(`${blockPath}.tipo: no está soportado.`);
    }
  });
}

function validateRelatedTheory(reference, path, errors) {
  if (!reference || typeof reference !== "object") {
    errors.push(`${path}: debe ser un objeto.`);
    return;
  }
  if (!isNonEmptyString(reference.resourceId)) {
    errors.push(`${path}.resourceId: debe contener el id de una teoría.`);
  }
  const selection = reference.selection;
  if (!selection || typeof selection !== "object") {
    errors.push(`${path}.selection: debe definir el contenido relacionado.`);
    return;
  }
  const hasBlocks = Array.isArray(selection.blockIds) && selection.blockIds.length > 0;
  const { from, to } = selection.articles ?? {};
  const hasArticles = Number.isInteger(from) && Number.isInteger(to) && from > 0 && to >= from;
  if (hasBlocks === hasArticles) {
    errors.push(`${path}.selection: debe indicar bloques o un intervalo de artículos.`);
  }
  if (selection.blockIds !== undefined && (
    !Array.isArray(selection.blockIds) ||
    selection.blockIds.length === 0 ||
    selection.blockIds.some((id) => !isNonEmptyString(id))
  )) {
    errors.push(`${path}.selection.blockIds: debe contener ids de bloque válidos.`);
  }
  if (selection.articles !== undefined && !hasArticles) {
    errors.push(`${path}.selection.articles: debe contener un intervalo válido.`);
  }
}

function theoryArticleNumbers(theory) {
  const numbers = new Set();
  const visit = (item) => {
    const isArticle = item.tipo === "articulo" || item.numero !== undefined && !item.tipo;
    if (isArticle && Number.isInteger(Number(item.numero))) {
      numbers.add(Number(item.numero));
      return;
    }
    (item.contenido ?? item.articulos ?? []).forEach(visit);
  };
  theory.bloques
    .filter((block) => block.tipo !== "estructura")
    .forEach((block) => block.contenido.forEach(visit));
  return numbers;
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
    if (resource.theoryNotice !== undefined && !isNonEmptyString(resource.theoryNotice)) {
      errors.push(`${path}.theoryNotice: debe contener texto.`);
    }
    validateClassification(resource.classification, path, errors);
    if (resource.type === "test") validateTest(resource, path, errors);
    if (resource.type === "teoria") validateTheory(resource, path, errors);
    if (resource.relatedTheory !== undefined) {
      validateRelatedTheory(resource.relatedTheory, `${path}.relatedTheory`, errors);
    }
  });

  const resourcesById = new Map(resources.map((resource) => [resource?.id, resource]));
  resources.forEach((resource, index) => {
    if (!resource?.relatedTheory?.resourceId) return;
    const path = `resources[${index}].relatedTheory`;
    const theory = resourcesById.get(resource.relatedTheory.resourceId);
    if (theory?.type !== "teoria") {
      errors.push(`${path}.resourceId: no corresponde a un recurso de teoría.`);
      return;
    }
    if (!classificationsMatch(resource.classification, theory.classification)) {
      errors.push(`${path}: la teoría debe pertenecer al mismo tema que el test.`);
    }
    const selection = resource.relatedTheory.selection;
    if (!selection || typeof selection !== "object") return;
    (Array.isArray(selection.blockIds) ? selection.blockIds : []).forEach((blockId) => {
      if (!theory.data.bloques.some((block) => block.id === blockId)) {
        errors.push(`${path}.selection.blockIds: el bloque ${blockId} no existe.`);
      }
    });
    if (
      Number.isInteger(selection.articles?.from) &&
      Number.isInteger(selection.articles?.to) &&
      selection.articles.to >= selection.articles.from
    ) {
      const availableArticles = theoryArticleNumbers(theory.data);
      for (let number = selection.articles.from; number <= selection.articles.to; number += 1) {
        if (!availableArticles.has(number)) {
          errors.push(`${path}.selection.articles: el artículo ${number} no existe.`);
        }
      }
    }
  });

  return errors;
}

export function assertValidResources(resources) {
  const errors = validateResources(resources);
  if (!errors.length) return;
  throw new AggregateError(errors.map((message) => new Error(message)), "Catálogo no válido");
}
