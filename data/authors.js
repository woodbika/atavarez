export const IVOT = Object.freeze({
  id: "ivot",
  name: "IVOT",
});

export const OSAKIDETZA = Object.freeze({
  id: "osakidetza",
  name: "OSAKIDETZA",
});

export const authors = Object.freeze([
  IVOT,
  OSAKIDETZA,
]);

const authorById = new Map(authors.map((author) => [author.id, author]));

export function getAuthorById(id) {
  return authorById.get(id) ?? null;
}
