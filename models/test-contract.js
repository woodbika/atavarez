const SUPPORTED_ANSWER_STATUSES = new Set([
  "soluciones-revisadas",
  "soluciones-definitivas",
  "soluciones-oficiales",
]);

export function isSupportedAnswerStatus(status) {
  return SUPPORTED_ANSWER_STATUSES.has(status);
}
