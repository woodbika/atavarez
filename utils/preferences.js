import {
  MAX_SECONDS_PER_QUESTION,
  MIN_SECONDS_PER_QUESTION,
  SECONDS_PER_QUESTION,
} from "./test-timer.js";

export const PREFERENCES_STORAGE_KEY = "oposaketak:preferences:v1";

export const DEFAULT_PREFERENCES = Object.freeze({
  themeMode: "light",
  palette: "forest",
  questionMap: true,
  liveResponse: false,
  autoAdvance: false,
  timerEnabled: false,
  timerDurationMode: "default",
  timerSecondsPerQuestion: SECONDS_PER_QUESTION,
  focusMode: false,
  fontSize: "medium",
});

function booleanOrDefault(value, fallback) {
  return typeof value === "boolean" ? value : fallback;
}

export function normalizePreferences(value = {}) {
  const input = value && typeof value === "object" ? value : {};
  const seconds = Number(input.timerSecondsPerQuestion);
  return {
    themeMode: input.themeMode === "dark" ? "dark" : "light",
    palette: ["forest", "mist", "clay"].includes(input.palette)
      ? input.palette
      : DEFAULT_PREFERENCES.palette,
    questionMap: booleanOrDefault(input.questionMap, DEFAULT_PREFERENCES.questionMap),
    liveResponse: booleanOrDefault(
      input.liveResponse,
      DEFAULT_PREFERENCES.liveResponse,
    ),
    autoAdvance: booleanOrDefault(input.autoAdvance, DEFAULT_PREFERENCES.autoAdvance),
    timerEnabled: booleanOrDefault(input.timerEnabled, DEFAULT_PREFERENCES.timerEnabled),
    timerDurationMode: input.timerDurationMode === "custom" ? "custom" : "default",
    timerSecondsPerQuestion: Number.isFinite(seconds)
      ? Math.min(
          MAX_SECONDS_PER_QUESTION,
          Math.max(MIN_SECONDS_PER_QUESTION, Math.round(seconds)),
        )
      : DEFAULT_PREFERENCES.timerSecondsPerQuestion,
    focusMode: booleanOrDefault(input.focusMode, DEFAULT_PREFERENCES.focusMode),
    fontSize: ["small", "medium", "large"].includes(input.fontSize)
      ? input.fontSize
      : DEFAULT_PREFERENCES.fontSize,
  };
}

export function loadPreferences(storage) {
  if (!storage) return { ...DEFAULT_PREFERENCES };
  try {
    const stored = storage.getItem(PREFERENCES_STORAGE_KEY);
    return stored ? normalizePreferences(JSON.parse(stored)) : { ...DEFAULT_PREFERENCES };
  } catch {
    return { ...DEFAULT_PREFERENCES };
  }
}

export function savePreferences(storage, preferences) {
  if (!storage) return false;
  try {
    storage.setItem(
      PREFERENCES_STORAGE_KEY,
      JSON.stringify(normalizePreferences(preferences)),
    );
    return true;
  } catch {
    return false;
  }
}

export function clearPreferences(storage) {
  if (!storage) return false;
  try {
    storage.removeItem(PREFERENCES_STORAGE_KEY);
    return true;
  } catch {
    return false;
  }
}
