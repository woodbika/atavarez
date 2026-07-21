function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateUpdates(updates) {
  if (!Array.isArray(updates)) return ["updates: debe ser una lista."];
  const errors = [];
  const ids = new Set();

  updates.forEach((update, index) => {
    const path = `updates[${index}]`;
    if (!update || typeof update !== "object") {
      errors.push(`${path}: debe ser un objeto.`);
      return;
    }
    if (!isNonEmptyString(update.id)) errors.push(`${path}.id: debe contener texto.`);
    else if (ids.has(update.id)) errors.push(`${path}.id: está duplicado.`);
    else ids.add(update.id);
    ["category", "title", "description"].forEach((field) => {
      if (!isNonEmptyString(update[field])) {
        errors.push(`${path}.${field}: debe contener texto.`);
      }
    });
    if (!isNonEmptyString(update.publishedAt) || !Number.isFinite(Date.parse(update.publishedAt))) {
      errors.push(`${path}.publishedAt: debe contener una fecha ISO válida.`);
    }
  });

  return errors;
}

export function assertValidUpdates(updates) {
  const errors = validateUpdates(updates);
  if (!errors.length) return;
  throw new AggregateError(errors.map((message) => new Error(message)), "Novedades no válidas");
}
