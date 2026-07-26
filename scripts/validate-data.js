import { resources } from "../data/resources.js";
import { oppositions } from "../data/oppositions.js";
import { updates } from "../data/updates.js";
import { validateOppositions } from "../models/opposition-validator.js";
import { validateResources } from "../models/resource-validator.js";
import { validateUpdates } from "../models/update-validator.js";

const errors = [
  ...validateOppositions(oppositions),
  ...validateResources(resources, oppositions),
  ...validateUpdates(updates),
];

if (errors.length) {
  console.error(`El catálogo contiene ${errors.length} error(es):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  const questionCount = resources
    .filter((resource) => resource.type === "test")
    .reduce((total, resource) => total + resource.data.preguntas.length, 0);
  const updateLabel = updates.length === 1 ? "novedad validada" : "novedades validadas";
  const oppositionLabel =
    oppositions.length === 1 ? "oposición validada" : "oposiciones validadas";
  console.log(
    `${oppositions.length} ${oppositionLabel}, ${resources.length} recursos, ` +
      `${questionCount} preguntas y ${updates.length} ${updateLabel}.`,
  );
}
