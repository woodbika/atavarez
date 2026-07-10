import { resources } from "./resources.js";

// Export de compatibilidad para pruebas y consumidores centrados en cuestionarios.
export const tests = resources
  .filter((resource) => resource.type === "test")
  .map((resource) => resource.data);
