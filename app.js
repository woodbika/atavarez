import { resources } from "./data/resources.js";
import { AppController } from "./controllers/app-controller.js";
import { ThemeController } from "./controllers/theme-controller.js";
import { ResourceRepository } from "./models/resource-repository.js";
import { assertValidResources } from "./models/resource-validator.js";
import { renderApplicationError } from "./views/layout.js";

const root = document.querySelector("#contenido");

new ThemeController({
  button: document.querySelector("#theme-toggle"),
  themeColor: document.querySelector('meta[name="theme-color"]'),
}).start();

try {
  assertValidResources(resources);
  const controller = new AppController({
    root,
    repository: new ResourceRepository(resources),
  });
  controller.start();
} catch (error) {
  console.error("No se ha podido iniciar OPOSAKETAK.", error);
  renderApplicationError(root);
}
