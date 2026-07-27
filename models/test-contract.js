const SUPPORTED_ANSWER_STATUSES = new Set([
  "soluciones-provisionales",
  "soluciones-revisadas",
  "soluciones-oficiales",
]);

export function isSupportedAnswerStatus(status) {
  return SUPPORTED_ANSWER_STATUSES.has(status);
}
