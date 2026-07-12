import { resources } from "../data/resources.js";
import { validateResources } from "../models/resource-validator.js";

const errors = validateResources(resources);

if (errors.length) {
  console.error(`El catálogo contiene ${errors.length} error(es):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  const questionCount = resources
    .filter((resource) => resource.type === "test")
    .reduce((total, resource) => total + resource.data.preguntas.length, 0);
  console.log(`${resources.length} recursos y ${questionCount} preguntas validados.`);
}
