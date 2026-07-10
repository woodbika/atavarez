import { resources } from "./data/resources.js";
import { AppController } from "./controllers/app-controller.js";
import { ThemeController } from "./controllers/theme-controller.js";
import { ResourceRepository } from "./models/resource-repository.js";
import { SessionStore } from "./models/session-store.js";

const root = document.querySelector("#contenido");

new ThemeController({
  button: document.querySelector("#theme-toggle"),
  themeColor: document.querySelector('meta[name="theme-color"]'),
}).start();

const controller = new AppController({
  root,
  repository: new ResourceRepository(resources),
  store: new SessionStore(),
});

controller.start();
