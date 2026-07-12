export function parseHashRoute(hash = "") {
  const path = String(hash).replace(/^#\/?/, "");
  if (!path) return [];
  return path.split("/").map((segment) => {
    try {
      return decodeURIComponent(segment);
    } catch {
      return segment;
    }
  });
}
