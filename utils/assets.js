export function assetUrl(path, baseUrl = globalThis.document?.baseURI) {
  const relativePath = String(path).replace(/^\.?\//, "");
  if (!baseUrl) return `./${relativePath}`;
  return new URL(relativePath, baseUrl).href;
}

export function coverImageUrl(filename, baseUrl) {
  return assetUrl(`assets/images/${filename}`, baseUrl);
}
