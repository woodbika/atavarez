export function practicalCaseArticleLabel(item) {
  const articles = item.articulos ?? [item.articulo];

  if (articles.length === 1) return `Artículo ${articles[0]}`;

  const isConsecutive = articles.every(
    (article, index) => index === 0 || article === articles[index - 1] + 1,
  );

  if (isConsecutive && articles.length > 2) {
    return `Artículos ${articles[0]} a ${articles.at(-1)}`;
  }

  if (articles.length === 2) {
    return `Artículos ${articles[0]} y ${articles[1]}`;
  }

  return `Artículos ${articles.slice(0, -1).join(", ")} y ${articles.at(-1)}`;
}
