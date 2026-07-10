const LEGACY_STORAGE_KEY = "opotest:v1";

export class SessionStore {
  constructor() {
    this.progress = {};
    this.results = {};
    this.clearLegacyStorage();
  }

  clearLegacyStorage() {
    try {
      globalThis.localStorage?.removeItem(LEGACY_STORAGE_KEY);
    } catch {
      // El acceso puede estar bloqueado; la aplicación continúa solo en memoria.
    }
  }

  getProgress(testId) {
    return this.progress[testId] ?? null;
  }

  saveProgress(testId, progress) {
    this.progress[testId] = { ...progress };
  }

  clearProgress(testId) {
    delete this.progress[testId];
  }

  getResult(testId) {
    return this.results[testId] ?? null;
  }

  saveResult(testId, result) {
    this.results[testId] = result;
    this.clearProgress(testId);
  }
}
