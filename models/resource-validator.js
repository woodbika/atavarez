import { isNonEmptyString, isStableId } from "../utils/validation.js";
import { validateQuestions } from "./question-validator.js";
import { isSupportedAnswerStatus } from "./test-contract.js";

const SUPPORTED_RESOURCE_TYPES = new Set(["test", "teoria", "resumen"]);

function validateAuthor(
  author,
  path,
  errors,
  { required = true, authorById = new Map() } = {},
) {
  if (author === undefined && !required) return;
  if (
    !author ||
    typeof author !== "object" ||
    !isNonEmptyString(author.id) ||
    !isNonEmptyString(author.nombre)
  ) {
    errors.push(`${path}: debe incluir id y nombre.`);
  } else if (!isStableId(author.id)) {
    errors.push(`${path}.id: debe ser un identificador estable.`);
  } else if (authorById.size) {
    const catalogAuthor = authorById.get(author.id);
    if (!catalogAuthor) {
      errors.push(`${path}.id: no existe en el catálogo de autores.`);
    } else if (author.nombre !== catalogAuthor.name) {
      errors.push(`${path}.nombre: no coincide con el catálogo de autores.`);
    }
  }
}

function validateSourceAuthor(author, path, errors, authorById) {
  if (!author || typeof author !== "object" || !isStableId(author.id)) {
    errors.push(`${path}: debe incluir un id de autor estable.`);
    return;
  }
  if (!authorById.size) return;
  const catalogAuthor = authorById.get(author.id);
  if (!catalogAuthor) {
    errors.push(`${path}.id: no existe en el catálogo de autores.`);
  } else if (
    author.nombre !== undefined &&
    author.nombre !== catalogAuthor.name
  ) {
    errors.push(`${path}.nombre: no coincide con el catálogo de autores.`);
  }
}

function validateDocumentSource(
  source,
  path,
  errors,
  { requireUrl = false } = {},
) {
  if (!source || typeof source !== "object") {
    errors.push(`${path}: debe definir la fuente documental.`);
    return;
  }

  if (source.tipo === "recopilacion") {
    if (
      !Array.isArray(source.tests) ||
      source.tests.length === 0 ||
      source.tests.some((id) => !isStableId(id)) ||
      new Set(source.tests).size !== source.tests.length
    ) {
      errors.push(`${path}.tests: debe contener ids de test únicos y estables.`);
    }
    return;
  }

  if (!isNonEmptyString(source.archivo)) {
    errors.push(`${path}.archivo: debe contener texto.`);
  } else if (/\.pdf\.pdf$/iu.test(source.archivo)) {
    errors.push(`${path}.archivo: contiene una extensión PDF repetida.`);
  } else if (!/\.pdf$/iu.test(source.archivo)) {
    errors.push(`${path}.archivo: debe identificar un documento PDF.`);
  }
  if (!Number.isInteger(source.paginas) || source.paginas < 1) {
    errors.push(`${path}.paginas: debe ser un entero positivo.`);
  }
  if (source.tipo !== undefined && source.tipo !== "pdf") {
    errors.push(`${path}.tipo: debe ser pdf.`);
  }
  if (requireUrl && !isNonEmptyString(source.url)) {
    errors.push(`${path}.url: debe contener la ruta del documento.`);
  } else if (source.url !== undefined && !isNonEmptyString(source.url)) {
    errors.push(`${path}.url: debe contener texto.`);
  }
}

function validateClassification(classification, path, errors) {
  if (!classification || typeof classification !== "object") {
    errors.push(`${path}: falta la clasificación.`);
    return;
  }

  if (!isStableId(classification.oposicionId)) {
    errors.push(`${path}.clasificacion.oposicionId: debe contener un identificador estable.`);
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
  if (!isStableId(String(classification.tema.numero ?? ""))) {
    errors.push(
      `${path}.clasificacion.tema.numero: debe contener un identificador estable.`,
    );
  }
  if (!isNonEmptyString(classification.tema.titulo)) {
    errors.push(`${path}.clasificacion.tema.titulo: debe contener texto.`);
  }
  if (
    classification.tema.etiqueta !== undefined &&
    !isNonEmptyString(classification.tema.etiqueta)
  ) {
    errors.push(`${path}.clasificacion.tema.etiqueta: debe contener texto.`);
  }
}

function classificationsMatch(resourceClassification, testClassification) {
  if (!resourceClassification || !testClassification) return false;
  const fields = ["oposicionId", "administracion", "oposicion", "grupo", "escala"];
  const sameFields = fields.every(
    (field) => resourceClassification[field] === testClassification[field],
  );
  const sameTheme =
    String(resourceClassification.tema?.numero ?? "") ===
      String(testClassification.tema?.numero ?? "") &&
    resourceClassification.tema?.titulo === testClassification.tema?.titulo;
  return sameFields && sameTheme;
}

function validateResourceOpposition(resource, path, errors, oppositionById) {
  const opposition = resource.opposition;
  if (!opposition || typeof opposition !== "object") {
    errors.push(`${path}.opposition: falta la definición de la oposición.`);
    return;
  }
  ["id", "administration", "title", "group", "scale"].forEach((field) => {
    if (!isNonEmptyString(opposition[field])) {
      errors.push(`${path}.opposition.${field}: debe contener texto.`);
    }
  });
  const classification = resource.classification;
  const expected = {
    oposicionId: opposition.id,
    administracion: opposition.administration,
    oposicion: opposition.title,
    grupo: opposition.group,
    escala: opposition.scale,
  };
  Object.entries(expected).forEach(([field, value]) => {
    if (classification?.[field] !== value) {
      errors.push(`${path}.classification.${field}: no coincide con la oposición.`);
    }
  });
  if (oppositionById?.size) {
    const catalogOpposition = oppositionById.get(opposition.id);
    if (!catalogOpposition) {
      errors.push(`${path}.opposition.id: no existe en el catálogo de oposiciones.`);
    } else {
      ["administration", "title", "group", "scale"].forEach((field) => {
        if (opposition[field] !== catalogOpposition[field]) {
          errors.push(`${path}.opposition.${field}: no coincide con el catálogo.`);
        }
      });
      if (Array.isArray(catalogOpposition.sections)) {
        const section = catalogOpposition.sections.find(
          (item) =>
            String(item.id) === String(resource.classification?.tema?.numero),
        );
        if (!section) {
          errors.push(
            `${path}.classification.tema.numero: no existe en los apartados de la oposición.`,
          );
        } else if (section.title !== resource.classification?.tema?.titulo) {
          errors.push(
            `${path}.classification.tema.titulo: no coincide con el apartado de la oposición.`,
          );
        }
      }
    }
  }
}

function validateSourceClassification(resource, path, errors) {
  const source = resource.sourceClassification;
  if (!source || typeof source !== "object") {
    errors.push(`${path}.sourceClassification: falta la clasificación de origen.`);
    return;
  }
  const opposition = resource.opposition;
  if (!opposition || typeof opposition !== "object") return;
  const expected = {
    oposicionId: opposition.id,
    administracion: opposition.administration,
    oposicion: opposition.title,
    grupo: opposition.group,
    escala: opposition.scale,
  };
  Object.entries(expected).forEach(([field, value]) => {
    if (source[field] !== undefined && source[field] !== value) {
      errors.push(`${path}.sourceClassification.${field}: no coincide con la oposición.`);
    }
  });
  const sourceTheme = source.tema;
  const canonicalTheme = resource.classification?.tema;
  if (
    sourceTheme?.numero !== undefined &&
    String(sourceTheme.numero) !== String(canonicalTheme?.numero)
  ) {
    errors.push(`${path}.sourceClassification.tema.numero: no coincide con el catálogo.`);
  }
  if (
    sourceTheme?.titulo !== undefined &&
    sourceTheme.titulo !== canonicalTheme?.titulo
  ) {
    errors.push(`${path}.sourceClassification.tema.titulo: no coincide con el catálogo.`);
  }
}

function validateAnswerExplanations(test, path, errors) {
  const explanations = test.explicaciones;
  if (explanations === undefined) return;
  if (!explanations || typeof explanations !== "object") {
    errors.push(`${path}: debe ser un objeto.`);
    return;
  }
  if (explanations.schemaVersion !== 1) {
    errors.push(`${path}.schemaVersion: debe ser 1.`);
  }
  if (explanations.testId !== test.id) {
    errors.push(`${path}.testId: debe coincidir con el test.`);
  }
  if (!Array.isArray(explanations.preguntas)) {
    errors.push(`${path}.preguntas: debe ser una lista.`);
    return;
  }

  const questionById = new Map(
    (Array.isArray(test.preguntas) ? test.preguntas : []).map((question) => [
      String(question.id),
      question,
    ]),
  );
  const explainedIds = new Set();
  explanations.preguntas.forEach((explanation, index) => {
    const explanationPath = `${path}.preguntas[${index}]`;
    if (!explanation || typeof explanation !== "object") {
      errors.push(`${explanationPath}: debe ser un objeto.`);
      return;
    }
    const questionId = String(explanation.preguntaId ?? "");
    const question = questionById.get(questionId);
    if (!question) {
      errors.push(`${explanationPath}.preguntaId: no corresponde a una pregunta.`);
      return;
    }
    if (explainedIds.has(questionId)) {
      errors.push(`${explanationPath}.preguntaId: está duplicado.`);
    }
    explainedIds.add(questionId);
    if (!isNonEmptyString(explanation.justificacion)) {
      errors.push(`${explanationPath}.justificacion: debe contener texto.`);
    }
    if (
      !explanation.descartes ||
      typeof explanation.descartes !== "object" ||
      Array.isArray(explanation.descartes)
    ) {
      errors.push(`${explanationPath}.descartes: debe ser un objeto.`);
      return;
    }
    const expectedIds = question.opciones
      .map((option) => option.id)
      .filter((optionId) => optionId !== question.respuestaCorrecta)
      .sort();
    const discardIds = Object.keys(explanation.descartes).sort();
    if (
      expectedIds.length !== discardIds.length ||
      expectedIds.some((optionId, optionIndex) => optionId !== discardIds[optionIndex])
    ) {
      errors.push(
        `${explanationPath}.descartes: debe explicar exactamente las opciones no elegidas.`,
      );
    }
    discardIds.forEach((optionId) => {
      if (!isNonEmptyString(explanation.descartes[optionId])) {
        errors.push(`${explanationPath}.descartes.${optionId}: debe contener texto.`);
      }
    });
  });

  if (explainedIds.size !== questionById.size) {
    errors.push(`${path}.preguntas: debe explicar todas las preguntas del test.`);
  }
}

function validateTest(resource, path, errors, authorById) {
  const test = resource.data;
  if (!test || typeof test !== "object") {
    errors.push(`${path}.data: falta el contenido del test.`);
    return;
  }
  if (test.schemaVersion !== 1) errors.push(`${path}.data.schemaVersion: debe ser 1.`);
  if (test.id !== resource.id) errors.push(`${path}.data.id: debe coincidir con el recurso.`);
  if (!isNonEmptyString(test.titulo)) errors.push(`${path}.data.titulo: debe contener texto.`);
  validateAuthor(test.autor, `${path}.data.autor`, errors, { authorById });
  if (resource.sourceAuthor !== undefined) {
    validateSourceAuthor(
      resource.sourceAuthor,
      `${path}.sourceAuthor`,
      errors,
      authorById,
    );
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
  validateDocumentSource(test.fuente, `${path}.data.fuente`, errors);
  if (
    test.estado !== undefined &&
    !isSupportedAnswerStatus(test.estado)
  ) {
    errors.push(
      `${path}.data.estado: debe identificar un estado de soluciones soportado.`,
    );
  }
  validateQuestions(test.preguntas, `${path}.data.preguntas`, errors);
  validateAnswerExplanations(test, `${path}.data.explicaciones`, errors);
}

function validateTestConfiguration(resource, path, errors) {
  const allowedOrderModes = new Set(["natural", "aleatorio"]);
  if (
    resource.includeInCombinedTest !== undefined &&
    typeof resource.includeInCombinedTest !== "boolean"
  ) {
    errors.push(`${path}.includeInCombinedTest: debe ser booleano.`);
  }

  const orderModes = resource.orderModes;
  if (orderModes !== undefined) {
    if (
      !Array.isArray(orderModes) ||
      orderModes.length === 0 ||
      orderModes.some((mode) => !allowedOrderModes.has(mode)) ||
      new Set(orderModes).size !== orderModes.length
    ) {
      errors.push(
        `${path}.orderModes: debe contener modos únicos natural o aleatorio.`,
      );
    }
  }

  if (
    resource.defaultOrder !== undefined &&
    !allowedOrderModes.has(resource.defaultOrder)
  ) {
    errors.push(`${path}.defaultOrder: debe ser natural o aleatorio.`);
  } else if (
    Array.isArray(orderModes) &&
    resource.defaultOrder !== undefined &&
    !orderModes.includes(resource.defaultOrder)
  ) {
    errors.push(`${path}.defaultOrder: debe estar incluido en orderModes.`);
  }

  ["questionCountLabel", "description", "actionLabel"].forEach((field) => {
    if (resource[field] !== undefined && !isNonEmptyString(resource[field])) {
      errors.push(`${path}.${field}: debe contener texto.`);
    }
  });

  const selection = resource.questionSelection;
  if (selection === undefined) return;
  if (!selection || typeof selection !== "object") {
    errors.push(`${path}.questionSelection: debe ser un objeto.`);
    return;
  }
  if (!["random-count", "range"].includes(selection.type)) {
    errors.push(
      `${path}.questionSelection.type: debe ser random-count o range.`,
    );
    return;
  }
  if (resource.includeInCombinedTest !== false) {
    errors.push(
      `${path}.includeInCombinedTest: un test configurable no puede formar parte del test completo.`,
    );
  }
  if (selection.type === "random-count") {
    if (
      !Number.isInteger(selection.count) ||
      selection.count < 1 ||
      selection.count > resource.data.preguntas.length
    ) {
      errors.push(
        `${path}.questionSelection.count: debe ser un entero dentro de la batería.`,
      );
    }
    if (
      resource.defaultOrder !== "aleatorio" ||
      !Array.isArray(orderModes) ||
      !orderModes.includes("aleatorio")
    ) {
      errors.push(
        `${path}.questionSelection: la selección aleatoria debe usar orden aleatorio.`,
      );
    }
  }
  if (
    selection.type === "range" &&
    resource.defaultOrder !== undefined &&
    resource.defaultOrder !== "natural"
  ) {
    errors.push(
      `${path}.questionSelection: la selección por rango debe conservar el orden natural.`,
    );
  }
}

function validateTestPreset(resource, path, errors, questionBankById) {
  if (resource.variant !== "preset" && resource.questionBankId === undefined) {
    return;
  }
  if (resource.variant !== "preset") {
    errors.push(`${path}.variant: debe ser preset para usar un banco de preguntas.`);
  }
  if (!isStableId(resource.questionBankId)) {
    errors.push(`${path}.questionBankId: debe ser un identificador estable.`);
  }

  const preset = resource.testPreset;
  if (!preset || typeof preset !== "object") {
    errors.push(`${path}.testPreset: debe contener la modalidad declarada.`);
    return;
  }
  if (preset.kind !== "test-preset") {
    errors.push(`${path}.testPreset.kind: debe ser test-preset.`);
  }
  if (preset.schemaVersion !== 1) {
    errors.push(`${path}.testPreset.schemaVersion: debe ser 1.`);
  }
  if (preset.id !== resource.id) {
    errors.push(`${path}.testPreset.id: debe coincidir con el recurso.`);
  }
  if (preset.title !== resource.title) {
    errors.push(`${path}.testPreset.title: debe coincidir con el recurso.`);
  }
  if (preset.questionBankId !== resource.questionBankId) {
    errors.push(`${path}.testPreset.questionBankId: debe coincidir con el recurso.`);
  }
  [
    "includeInCombinedTest",
    "orderModes",
    "defaultOrder",
    "questionSelection",
    "questionCountLabel",
    "description",
    "actionLabel",
  ].forEach((field) => {
    if (
      JSON.stringify(preset[field]) !== JSON.stringify(resource[field])
    ) {
      errors.push(`${path}.${field}: debe coincidir con la modalidad declarada.`);
    }
  });

  if (!questionBankById.size) return;
  const questionBank = questionBankById.get(resource.questionBankId);
  if (!questionBank) {
    errors.push(`${path}.questionBankId: no existe en el catálogo de bancos.`);
    return;
  }
  if (resource.data.preguntas !== questionBank.preguntas) {
    errors.push(`${path}.data.preguntas: debe proceder del banco registrado.`);
  }
  if (resource.data.fuente !== questionBank.fuente) {
    errors.push(`${path}.data.fuente: debe proceder del banco registrado.`);
  }
  if (resource.data.estado !== questionBank.estado) {
    errors.push(`${path}.data.estado: debe coincidir con el banco registrado.`);
  }
  if (resource.sourceClassification !== questionBank.clasificacion) {
    errors.push(`${path}.sourceClassification: debe proceder del banco registrado.`);
  }
  if (resource.sourceAuthor !== questionBank.autor) {
    errors.push(`${path}.sourceAuthor: debe proceder del banco registrado.`);
  }
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

const SUPPORTED_THEMATIC_NODE_TYPES = new Set([
  "parrafo",
  "subtitulo",
  "dato",
  "elemento-numerado",
  "elemento-letra",
  "elemento-mayuscula",
  "elemento-lista",
]);

function validateTheoryThematicItem(item, path, errors) {
  if (!item || typeof item !== "object") {
    errors.push(`${path}: debe ser un objeto.`);
    return;
  }
  if (!SUPPORTED_THEMATIC_NODE_TYPES.has(item.tipo)) {
    errors.push(`${path}.tipo: no está soportado.`);
  }
  if (!isNonEmptyString(item.texto)) {
    errors.push(`${path}.texto: debe contener texto.`);
  }
  if (
    item.tipo === "elemento-numerado" &&
    !isNonEmptyString(String(item.numero ?? ""))
  ) {
    errors.push(`${path}.numero: es obligatorio.`);
  }
  if (
    (item.tipo === "elemento-letra" || item.tipo === "elemento-mayuscula") &&
    !isNonEmptyString(String(item.letra ?? ""))
  ) {
    errors.push(`${path}.letra: es obligatoria.`);
  }
}

function validateTheory(resource, path, errors, authorById) {
  const theory = resource.data;
  if (!theory || typeof theory !== "object") {
    errors.push(`${path}.data: falta el contenido teórico.`);
    return;
  }
  if (theory.schemaVersion !== 1) errors.push(`${path}.data.schemaVersion: debe ser 1.`);
  if (theory.id !== resource.id) errors.push(`${path}.data.id: debe coincidir con el recurso.`);
  if (!isNonEmptyString(theory.titulo)) errors.push(`${path}.data.titulo: debe contener texto.`);
  if (!isNonEmptyString(theory.cardTitle)) {
    errors.push(`${path}.data.cardTitle: debe contener el título breve de la ficha.`);
  } else if (theory.cardTitle.trim() !== resource.title) {
    errors.push(`${path}.title: debe coincidir con cardTitle.`);
  }
  if (!classificationsMatch(resource.classification, theory.clasificacion)) {
    errors.push(`${path}.classification: debe coincidir con la clasificación de la teoría.`);
  }
  validateClassification(theory.clasificacion, `${path}.data`, errors);
  validateDocumentSource(theory.fuente, `${path}.data.fuente`, errors, {
    requireUrl: true,
  });
  validateAuthor(theory.autor, `${path}.data.autor`, errors, {
    required: false,
    authorById,
  });
  if (resource.sourceAuthor !== undefined) {
    validateSourceAuthor(
      resource.sourceAuthor,
      `${path}.sourceAuthor`,
      errors,
      authorById,
    );
  }
  if (theory.derechos !== undefined && !isNonEmptyString(theory.derechos)) {
    errors.push(`${path}.data.derechos: debe contener texto.`);
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
    } else if (block?.tipo === "contenido-tematico") {
      if (!Array.isArray(block.contenido) || block.contenido.length === 0) {
        errors.push(`${blockPath}.contenido: debe contener elementos.`);
      } else {
        block.contenido.forEach((item, itemIndex) => {
          validateTheoryThematicItem(
            item,
            `${blockPath}.contenido[${itemIndex}]`,
            errors,
          );
        });
      }
    } else {
      errors.push(`${blockPath}.tipo: no está soportado.`);
    }
  });
}

function validateSummaryNotes(notes, path, errors) {
  if (!Array.isArray(notes)) {
    errors.push(`${path}: debe ser una lista.`);
    return;
  }
  notes.forEach((note, index) => {
    const notePath = `${path}[${index}]`;
    if (!note || typeof note !== "object") {
      errors.push(`${notePath}: debe ser un objeto.`);
      return;
    }
    ["titulo", "articulos", "texto"].forEach((field) => {
      if (!isNonEmptyString(note[field])) {
        errors.push(`${notePath}.${field}: debe contener texto.`);
      }
    });
  });
}

function validateSummary(resource, path, errors) {
  const summary = resource.data;
  if (!summary || typeof summary !== "object") {
    errors.push(`${path}.data: falta el contenido del resumen.`);
    return;
  }
  if (summary.schemaVersion !== 1) {
    errors.push(`${path}.data.schemaVersion: debe ser 1.`);
  }
  if (summary.id !== resource.id) {
    errors.push(`${path}.data.id: debe coincidir con el recurso.`);
  }
  if (!isNonEmptyString(summary.titulo)) {
    errors.push(`${path}.data.titulo: debe contener texto.`);
  } else if (summary.titulo.trim() !== resource.title) {
    errors.push(`${path}.title: debe coincidir con el título del resumen.`);
  }
  if (!isNonEmptyString(summary.descripcion)) {
    errors.push(`${path}.data.descripcion: debe contener texto.`);
  }
  if (!classificationsMatch(resource.classification, summary.clasificacion)) {
    errors.push(`${path}.classification: debe coincidir con la clasificación del resumen.`);
  }
  validateClassification(summary.clasificacion, `${path}.data`, errors);

  const source = summary.fuente;
  if (!source || typeof source !== "object") {
    errors.push(`${path}.data.fuente: debe identificar la teoría de origen.`);
  } else {
    if (!isStableId(source.resourceId)) {
      errors.push(`${path}.data.fuente.resourceId: debe ser un identificador estable.`);
    }
    const { desde, hasta } = source.articulos ?? {};
    if (
      !Number.isInteger(desde) ||
      !Number.isInteger(hasta) ||
      desde < 1 ||
      hasta < desde
    ) {
      errors.push(`${path}.data.fuente.articulos: debe definir un intervalo válido.`);
    }
  }

  if (!Array.isArray(summary.columnas) || summary.columnas.length < 2) {
    errors.push(`${path}.data.columnas: debe contener al menos dos columnas.`);
  }
  const columnIds = new Set();
  (summary.columnas ?? []).forEach((column, index) => {
    const columnPath = `${path}.data.columnas[${index}]`;
    if (!column || typeof column !== "object") {
      errors.push(`${columnPath}: debe ser un objeto.`);
      return;
    }
    if (!isStableId(column.id)) {
      errors.push(`${columnPath}.id: debe ser un identificador estable.`);
    } else if (columnIds.has(column.id)) {
      errors.push(`${columnPath}.id: está duplicado.`);
    } else {
      columnIds.add(column.id);
    }
    if (!isNonEmptyString(column.titulo)) {
      errors.push(`${columnPath}.titulo: debe contener texto.`);
    }
  });

  if (!Array.isArray(summary.filas) || summary.filas.length === 0) {
    errors.push(`${path}.data.filas: debe contener al menos una fila.`);
  }
  (summary.filas ?? []).forEach((row, index) => {
    const rowPath = `${path}.data.filas[${index}]`;
    if (!row || typeof row !== "object") {
      errors.push(`${rowPath}: debe ser un objeto.`);
      return;
    }
    if (!isNonEmptyString(row.articulos)) {
      errors.push(`${rowPath}.articulos: debe contener texto.`);
    }
    columnIds.forEach((columnId) => {
      if (!isNonEmptyString(row[columnId])) {
        errors.push(`${rowPath}.${columnId}: debe contener texto.`);
      }
    });
  });

  validateSummaryNotes(summary.reglasComunes, `${path}.data.reglasComunes`, errors);
  const priority = summary.prioridadReingreso;
  if (!priority || typeof priority !== "object") {
    errors.push(`${path}.data.prioridadReingreso: debe ser un objeto.`);
  } else {
    ["titulo", "articulos", "introduccion"].forEach((field) => {
      if (!isNonEmptyString(priority[field])) {
        errors.push(`${path}.data.prioridadReingreso.${field}: debe contener texto.`);
      }
    });
    if (
      !Array.isArray(priority.situaciones) ||
      priority.situaciones.length === 0 ||
      priority.situaciones.some((situation) => !isNonEmptyString(situation))
    ) {
      errors.push(
        `${path}.data.prioridadReingreso.situaciones: debe contener situaciones.`,
      );
    }
  }
  validateSummaryNotes(summary.alcance, `${path}.data.alcance`, errors);
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
  const hasArticleNumbers = Array.isArray(selection.articleNumbers) &&
    selection.articleNumbers.length > 0 &&
    selection.articleNumbers.every((number) => Number.isInteger(number) && number > 0);
  if (!hasBlocks && !hasArticles && !hasArticleNumbers) {
    errors.push(`${path}.selection: debe indicar bloques o artículos.`);
  }
  if (hasArticles && hasArticleNumbers) {
    errors.push(`${path}.selection: no puede combinar un intervalo y una lista de artículos.`);
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
  if (selection.articleNumbers !== undefined && !hasArticleNumbers) {
    errors.push(`${path}.selection.articleNumbers: debe contener artículos válidos.`);
  } else if (hasArticleNumbers && new Set(selection.articleNumbers).size !== selection.articleNumbers.length) {
    errors.push(`${path}.selection.articleNumbers: no debe contener artículos repetidos.`);
  }
}

function theoryArticleNumbers(theory, blockIds) {
  const numbers = new Set();
  const selectedBlockIds = blockIds?.length ? new Set(blockIds) : null;
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
    .filter((block) => !selectedBlockIds || selectedBlockIds.has(block.id))
    .forEach((block) => block.contenido.forEach(visit));
  return numbers;
}

export function validateResources(
  resources,
  oppositions = [],
  authors = [],
  questionBanks = [],
) {
  const errors = [];
  if (!Array.isArray(resources) || resources.length === 0) {
    return ["resources: debe contener al menos un recurso."];
  }

  const resourceIds = new Set();
  const oppositionById = new Map(
    oppositions.map((opposition) => [opposition?.id, opposition]),
  );
  const authorById = new Map(
    authors.map((author) => [author?.id, author]),
  );
  const questionBankById = new Map(
    questionBanks.map((bank) => [bank?.id, bank]),
  );
  resources.forEach((resource, index) => {
    const path = `resources[${index}]`;
    if (!resource || typeof resource !== "object") {
      errors.push(`${path}: debe ser un objeto.`);
      return;
    }
    if (!isNonEmptyString(resource.id)) errors.push(`${path}.id: es obligatorio.`);
    else if (!isStableId(resource.id)) {
      errors.push(`${path}.id: debe ser un identificador estable.`);
    } else if (resourceIds.has(resource.id)) {
      errors.push(`${path}.id: está duplicado.`);
    } else {
      resourceIds.add(resource.id);
    }
    if (!isNonEmptyString(resource.type)) errors.push(`${path}.type: es obligatorio.`);
    else if (!SUPPORTED_RESOURCE_TYPES.has(resource.type)) {
      errors.push(`${path}.type: no está soportado.`);
    }
    if (!isNonEmptyString(resource.title)) errors.push(`${path}.title: debe contener texto.`);
    if (resource.theoryNotice !== undefined && !isNonEmptyString(resource.theoryNotice)) {
      errors.push(`${path}.theoryNotice: debe contener texto.`);
    }
    validateResourceOpposition(resource, path, errors, oppositionById);
    validateSourceClassification(resource, path, errors);
    validateClassification(resource.classification, path, errors);
    if (resource.type === "test") {
      validateTest(resource, path, errors, authorById);
      validateTestConfiguration(resource, path, errors);
      validateTestPreset(resource, path, errors, questionBankById);
    }
    if (resource.type === "teoria") {
      validateTheory(resource, path, errors, authorById);
    }
    if (resource.type === "resumen") {
      validateSummary(resource, path, errors);
    }
    if (resource.relatedTheory !== undefined) {
      validateRelatedTheory(resource.relatedTheory, `${path}.relatedTheory`, errors);
    }
  });

  const resourcesById = new Map(resources.map((resource) => [resource?.id, resource]));
  resources.forEach((resource, index) => {
    if (resource?.type === "resumen") {
      const path = `resources[${index}].data.fuente`;
      const theory = resourcesById.get(resource.data?.fuente?.resourceId);
      if (theory?.type !== "teoria") {
        errors.push(`${path}.resourceId: no corresponde a un recurso de teoría.`);
      } else if (!classificationsMatch(resource.classification, theory.classification)) {
        errors.push(`${path}: la teoría debe pertenecer al mismo tema que el resumen.`);
      } else {
        const availableArticles = theoryArticleNumbers(theory.data);
        const { desde, hasta } = resource.data.fuente.articulos ?? {};
        if (Number.isInteger(desde) && Number.isInteger(hasta)) {
          for (let number = desde; number <= hasta; number += 1) {
            if (!availableArticles.has(number)) {
              errors.push(`${path}.articulos: el artículo ${number} no existe.`);
            }
          }
        }
      }
    }
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
      const availableArticles = theoryArticleNumbers(theory.data, selection.blockIds);
      for (let number = selection.articles.from; number <= selection.articles.to; number += 1) {
        if (!availableArticles.has(number)) {
          errors.push(`${path}.selection.articles: el artículo ${number} no existe.`);
        }
      }
    }
    if (Array.isArray(selection.articleNumbers)) {
      const availableArticles = theoryArticleNumbers(theory.data, selection.blockIds);
      selection.articleNumbers.forEach((number) => {
        if (!availableArticles.has(number)) {
          errors.push(`${path}.selection.articleNumbers: el artículo ${number} no existe.`);
        }
      });
    }
  });

  resources.forEach((resource, index) => {
    if (resource?.type !== "test" || resource.data?.fuente?.tipo !== "recopilacion") {
      return;
    }
    const path = `resources[${index}].data.fuente.tests`;
    resource.data.fuente.tests.forEach((resourceId) => {
      const sourceTest = resourcesById.get(resourceId);
      if (sourceTest?.type !== "test") {
        errors.push(`${path}: ${resourceId} no corresponde a un test registrado.`);
      } else if (!classificationsMatch(resource.classification, sourceTest.classification)) {
        errors.push(`${path}: ${resourceId} no pertenece al mismo tema.`);
      }
    });
  });

  return errors;
}

export function assertValidResources(
  resources,
  oppositions = [],
  authors = [],
  questionBanks = [],
) {
  const errors = validateResources(
    resources,
    oppositions,
    authors,
    questionBanks,
  );
  if (!errors.length) return;
  throw new AggregateError(errors.map((message) => new Error(message)), "Catálogo no válido");
}
