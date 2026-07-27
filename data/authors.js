export const IVOT = Object.freeze({
  id: "ivot",
  name: "IVOT",
});

export const OSAKIDETZA = Object.freeze({
  id: "osakidetza",
  name: "OSAKIDETZA",
});

export const THEME_COMPILATION = Object.freeze({
  id: "recopilacion-tema",
  name: "Recopilación del tema",
});

export const authors = Object.freeze([
  IVOT,
  OSAKIDETZA,
  THEME_COMPILATION,
]);

const authorById = new Map(authors.map((author) => [author.id, author]));

export function getAuthorById(id) {
  return authorById.get(id) ?? null;
}
