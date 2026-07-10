export function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function normalizeText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .trim();
}

export function formatDisplayTitle(value) {
  const text = String(value ?? "").trim();
  const uppercaseCount = text.match(/\p{Lu}/gu)?.length ?? 0;
  const lowercaseCount = text.match(/\p{Ll}/gu)?.length ?? 0;
  const letterCount = uppercaseCount + lowercaseCount;
  const isMostlyUppercase = letterCount > 0 && uppercaseCount / letterCount >= 0.75;
  if (!isMostlyUppercase) return text;

  const lower = text.toLocaleLowerCase("es");
  const sentence = lower.replace(/^([^\p{L}]*)(\p{L})/u, (_, prefix, letter) =>
    `${prefix}${letter.toLocaleUpperCase("es")}`,
  );

  return sentence
    .replace(/\b(ce|ue|pdf|boe)\b/giu, (token) => token.toLocaleUpperCase("es"))
    .replace(/\b(i|ii|iii|iv|v|vi|vii|viii|ix|x)\b/giu, (token) =>
      token.toLocaleUpperCase("es"),
    );
}

export function formatDate(isoDate) {
  if (!isoDate) return "";
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(isoDate));
}
