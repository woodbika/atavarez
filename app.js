import { resources } from "./data/resources.js";
import { updates } from "./data/updates.js";
import { AppController } from "./controllers/app-controller.js";
import { ThemeController } from "./controllers/theme-controller.js";
import { SettingsController } from "./controllers/settings-controller.js";
import { UpdatesController } from "./controllers/updates-controller.js";
import { ResourceRepository } from "./models/resource-repository.js";
import { assertValidResources } from "./models/resource-validator.js";
import { assertValidUpdates } from "./models/update-validator.js";
import { renderApplicationError } from "./views/layout.js";

const root = document.querySelector("#contenido");

const themeController = new ThemeController({
  themeColor: document.querySelector('meta[name="theme-color"]'),
}).start();

try {
  assertValidUpdates(updates);
  assertValidResources(resources);
  new UpdatesController({
    trigger: document.querySelector("#updates-toggle"),
    panel: document.querySelector("#updates-panel"),
    backdrop: document.querySelector("#updates-backdrop"),
    updates,
  }).start();
  const settingsController = new SettingsController({
    trigger: document.querySelector("#settings-toggle"),
    panel: document.querySelector("#settings-panel"),
    backdrop: document.querySelector("#settings-backdrop"),
    themeController,
  }).start();
  const controller = new AppController({
    root,
    repository: new ResourceRepository(resources),
    testPreferences: settingsController.getTestPreferences(),
  });
  controller.start();
} catch (error) {
  console.error("No se ha podido iniciar OPOSAKETAK.", error);
  renderApplicationError(root);
}
