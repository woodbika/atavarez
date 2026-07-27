import { isNonEmptyString, isStableId } from "../utils/validation.js";

export function validateAuthors(authors) {
  if (!Array.isArray(authors) || authors.length === 0) {
    return ["authors: debe contener al menos un autor."];
  }

  const errors = [];
  const ids = new Set();
  authors.forEach((author, index) => {
    const path = `authors[${index}]`;
    if (!author || typeof author !== "object") {
      errors.push(`${path}: debe ser un objeto.`);
      return;
    }
    if (!isStableId(author.id)) {
      errors.push(`${path}.id: debe ser un identificador estable.`);
    } else if (ids.has(author.id)) {
      errors.push(`${path}.id: está duplicado.`);
    } else {
      ids.add(author.id);
    }
    if (!isNonEmptyString(author.name)) {
      errors.push(`${path}.name: debe contener texto.`);
    }
  });
  return errors;
}

export function assertValidAuthors(authors) {
  const errors = validateAuthors(authors);
  if (!errors.length) return;
  throw new AggregateError(
    errors.map((message) => new Error(message)),
    "Catálogo de autores no válido",
  );
}
