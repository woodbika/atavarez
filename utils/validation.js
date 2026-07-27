const STABLE_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim().length > 0;
}

export function isStableId(value) {
  return isNonEmptyString(value) && STABLE_ID_PATTERN.test(value);
}
