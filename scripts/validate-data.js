import { resources } from "../data/resources.js";
import { updates } from "../data/updates.js";
import { validateResources } from "../models/resource-validator.js";
import { validateUpdates } from "../models/update-validator.js";

const errors = [...validateResources(resources), ...validateUpdates(updates)];

if (errors.length) {
  console.error(`El catálogo contiene ${errors.length} error(es):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  const questionCount = resources
    .filter((resource) => resource.type === "test")
    .reduce((total, resource) => total + resource.data.preguntas.length, 0);
  const updateLabel = updates.length === 1 ? "novedad validada" : "novedades validadas";
  console.log(`${resources.length} recursos, ${questionCount} preguntas y ${updates.length} ${updateLabel}.`);
}
