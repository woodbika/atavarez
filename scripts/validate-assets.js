import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";

import { oppositions } from "../data/oppositions.js";
import { resources } from "../data/resources.js";

const projectRoot = new URL("../", import.meta.url);
const references = [
  ...oppositions.flatMap((opposition) =>
    Object.entries(opposition.covers ?? {}).map(([kind, filename]) => ({
      label: `oppositions.${opposition.id}.covers.${kind}`,
      path: `assets/images/${filename}`,
    })),
  ),
  ...resources
    .filter((resource) => resource.type === "teoria")
    .map((resource) => ({
      label: `resources.${resource.id}.source.url`,
      path: resource.source?.url,
    })),
];

const missingReferences = references.filter(({ path }) => {
  if (typeof path !== "string" || !path.trim()) return true;
  const relativePath = path.replace(/^\.\//, "");
  return !existsSync(fileURLToPath(new URL(relativePath, projectRoot)));
});

if (missingReferences.length) {
  console.error(
    `Faltan ${missingReferences.length} archivo(s) referenciado(s) por el catálogo:`,
  );
  missingReferences.forEach(({ label, path }) => {
    console.error(`- ${label}: ${path ?? "ruta no definida"}`);
  });
  process.exitCode = 1;
} else {
  console.log(`${references.length} portadas y documentos referenciados validados.`);
}
