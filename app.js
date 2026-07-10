import { resources } from "./data/resources.js";
import { AppController } from "./controllers/app-controller.js";
import { ResourceRepository } from "./models/resource-repository.js";
import { SessionStore } from "./models/session-store.js";

const root = document.querySelector("#contenido");

const controller = new AppController({
  root,
  repository: new ResourceRepository(resources),
  store: new SessionStore(),
});

controller.start();
