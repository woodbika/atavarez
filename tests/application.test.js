import test from "node:test";
import assert from "node:assert/strict";

import { resources } from "../data/resources.js";
import { tests } from "../data/tests.js";
import { updates } from "../data/updates.js";
import { ResourceRepository } from "../models/resource-repository.js";
import { validateResources } from "../models/resource-validator.js";
import { validateUpdates } from "../models/update-validator.js";
import { TestSession } from "../models/test-session.js";
import { formatDisplayTitle } from "../utils/text.js";
import { orderTestQuestions } from "../utils/test-order.js";
import {
  DEFAULT_PREFERENCES,
  PREFERENCES_STORAGE_KEY,
  clearPreferences,
  loadPreferences,
  normalizePreferences,
  savePreferences,
} from "../utils/preferences.js";
import { parseHashRoute } from "../utils/router.js";
import { formatCountdown, testDurationSeconds } from "../utils/test-timer.js";

test("el registro contiene todos los tests con un formato válido", () => {
  const registeredTests = resources.filter((resource) => resource.type === "test");

  assert.deepEqual(validateResources(resources), []);
  assert.equal(tests.length, registeredTests.length);
  assert.deepEqual(
    tests.map((item) => item.id),
    registeredTests.map((resource) => resource.id),
  );
  assert.equal(new Set(tests.map((item) => item.id)).size, tests.length);

  tests.forEach((item) => {
    assert.equal(item.schemaVersion, 1);
    assert.ok(item.id);
    assert.deepEqual(item.autor, { id: "ivot", nombre: "IVOT" });
    assert.ok(item.titulo);
    assert.ok(item.clasificacion.tema.numero);
    assert.ok(item.clasificacion.tema.titulo);
    assert.ok(
      item.clasificacion.partes === undefined || Array.isArray(item.clasificacion.partes),
    );
    assert.ok(item.preguntas.length > 0);

    item.preguntas.forEach((question) => {
      assert.ok(question.enunciado);
      assert.ok(question.opciones.some((option) => option.id === question.respuestaCorrecta));
    });
  });
});

test("el tema 01 incluye un recurso teórico válido y estructurado", () => {
  const theory = resources.find((resource) => resource.id === "tema-01-constitucion-espanola");

  assert.ok(theory);
  assert.equal(theory.type, "teoria");
  assert.equal(theory.title, "La Constitución Española de 1978");
  assert.equal(theory.classification.tema.numero, "01");
  assert.equal(theory.data.fuente.paginas, 8);
  assert.ok(theory.data.bloques.some((block) => block.tipo === "estructura"));
  assert.ok(theory.data.bloques.some((block) => block.tipo === "titulo"));
  assert.deepEqual(validateResources(resources), []);
});

test("el tema 02 relaciona solo los tests con un intervalo teórico directo", () => {
  const theory = resources.find(
    (resource) => resource.id === "tema-02-organizacion-territorial-del-estado",
  );
  const themeTests = resources.filter(
    (resource) =>
      resource.type === "test" && resource.classification.tema.numero === "02",
  );

  assert.ok(theory);
  assert.equal(theory.type, "teoria");
  assert.equal(theory.title, "La organización territorial del Estado.");
  assert.equal(theory.classification.tema.numero, "02");
  assert.equal(theory.data.fuente.archivo, "tema-02-organizacion-territorial.pdf");
  assert.equal(theory.data.fuente.paginas, 10);
  assert.ok(theory.data.bloques.some((block) => block.tipo === "titulo"));
  const expectedSelections = new Map([
    ["test-organizacion-territorial-del-estado-numero-1", { from: 137, to: 142 }],
    ["test-organizacion-territorial-del-estado-numero-4-competencias", { from: 148, to: 149 }],
  ]);
  expectedSelections.forEach((articles, resourceId) => {
    const resource = themeTests.find((item) => item.id === resourceId);
    assert.equal(resource.relatedTheory.resourceId, theory.id);
    assert.deepEqual(resource.relatedTheory.selection, { articles });
    assert.equal(resource.theoryNotice, undefined);
  });
  [
    "test-organizacion-territorial-del-estado-numero-2",
    "test-organizacion-territorial-del-estado-numero-3",
  ].forEach((resourceId) => {
    const resource = themeTests.find((item) => item.id === resourceId);
    assert.equal(resource.relatedTheory, undefined);
    assert.equal(resource.theoryNotice, "Sin vínculo teórico directo");
  });
  assert.deepEqual(validateResources(resources), []);
});

test("el tema 09 relaciona cada test con su intervalo de teoría", () => {
  const theory = resources.find(
    (resource) => resource.id === "tema-09-personal-al-servicio-administraciones-publicas-vascas",
  );
  const expectedSelections = new Map([
    ["test-ley-11-2022-empleo-publico-vasco-articulos-26-a-30", { from: 26, to: 30 }],
    ["test-ley-11-2022-empleo-publico-vasco-articulos-161-y-162", { from: 161, to: 162 }],
    ["test-ley-11-2022-empleo-publico-vasco-articulos-161-a-166", { from: 161, to: 166 }],
    ["test-ley-11-2022-empleo-publico-vasco-articulos-167-a-171", { from: 167, to: 171 }],
  ]);

  assert.ok(theory);
  assert.equal(theory.type, "teoria");
  assert.equal(theory.title, "Ley 11/2022, de 1 de diciembre, de Empleo Público Vasco.");
  assert.equal(theory.classification.tema.numero, "09");
  assert.equal(theory.data.fuente.archivo, "tema-09-personal-servicio-publico.pdf");
  assert.equal(theory.data.fuente.paginas, 8);
  assert.equal(theory.data.bloques.filter((block) => block.tipo === "titulo").length, 2);
  expectedSelections.forEach((articles, resourceId) => {
    const resource = resources.find((item) => item.id === resourceId);
    assert.equal(resource.relatedTheory.resourceId, theory.id);
    assert.deepEqual(resource.relatedTheory.selection, { articles });
  });
  assert.deepEqual(validateResources(resources), []);
});

test("las novedades tienen identificadores y fechas válidas", () => {
  assert.deepEqual(validateUpdates(updates), []);
  assert.equal(new Set(updates.map((update) => update.id)).size, updates.length);
  assert.ok(updates.every((update) => Number.isFinite(Date.parse(update.publishedAt))));

  const invalidUpdates = [
    { ...updates[0], publishedAt: "fecha-no-válida" },
    { ...updates[0] },
  ];
  const errors = validateUpdates(invalidUpdates);
  assert.ok(errors.some((error) => error.includes("publishedAt")));
  assert.ok(errors.some((error) => error.includes("duplicado")));
});

test("la validación del catálogo informa de soluciones y recursos no válidos", () => {
  const invalidResource = structuredClone(
    resources.find((resource) => resource.type === "test"),
  );
  invalidResource.data.preguntas[0].respuestaCorrecta = "opcion-inexistente";
  const errors = validateResources([invalidResource, invalidResource]);

  assert.ok(errors.some((error) => error.includes("respuestaCorrecta")));
  assert.ok(errors.some((error) => error.includes("está duplicado")));
});

test("la validación exige que autor y clasificación coincidan con el test", () => {
  const invalidResource = structuredClone(
    resources.find((resource) => resource.type === "test"),
  );
  invalidResource.data.autor = { id: "ivot", nombre: "Autor distinto" };
  invalidResource.data.clasificacion = {
    ...invalidResource.data.clasificacion,
    tema: { ...invalidResource.data.clasificacion.tema, numero: "999" },
  };
  const errors = validateResources([invalidResource]);

  assert.ok(errors.some((error) => error.includes(".author")));
  assert.ok(errors.some((error) => error.includes(".classification")));
});

test("la evaluación distingue aciertos, errores y preguntas sin responder", () => {
  const source = tests[0];
  const sample = { ...source, preguntas: source.preguntas.slice(0, 3) };
  const session = new TestSession(sample);

  session.answers[String(sample.preguntas[0].id)] = sample.preguntas[0].respuestaCorrecta;
  session.answers[String(sample.preguntas[1].id)] = sample.preguntas[1].opciones.find(
    (option) => option.id !== sample.preguntas[1].respuestaCorrecta,
  ).id;

  const result = session.calculateResult();
  assert.equal(result.correct, 1);
  assert.equal(result.incorrect, 1);
  assert.equal(result.unanswered, 1);
  assert.equal(result.total, 3);
  assert.equal(result.score, 2.22);
});

test("la cuenta atrás asigna 40 segundos por pregunta y formatea su duración", () => {
  assert.equal(testDurationSeconds(1), 40);
  assert.equal(testDurationSeconds(18), 720);
  assert.equal(testDurationSeconds(18, 60), 1080);
  assert.equal(testDurationSeconds(3, 25), 90);
  assert.equal(testDurationSeconds(2, 10), 60);
  assert.equal(testDurationSeconds(2, 600), 600);
  assert.equal(testDurationSeconds(0), 0);
  assert.equal(formatCountdown(40), "00:40");
  assert.equal(formatCountdown(720), "12:00");
  assert.equal(formatCountdown(3661), "01:01:01");
});

test("las preferencias se validan, guardan y restablecen localmente", () => {
  const memory = new Map();
  const storage = {
    getItem: (key) => memory.get(key) ?? null,
    setItem: (key, value) => memory.set(key, value),
    removeItem: (key) => memory.delete(key),
  };
  const custom = normalizePreferences({
    themeMode: "dark",
    palette: "mist",
    questionMap: false,
    timerEnabled: true,
    timerDurationMode: "custom",
    timerSecondsPerQuestion: 500,
    fontSize: "large",
  });

  assert.equal(custom.timerSecondsPerQuestion, 300);
  assert.equal(savePreferences(storage, custom), true);
  assert.deepEqual(loadPreferences(storage), custom);
  assert.equal(clearPreferences(storage), true);
  assert.deepEqual(loadPreferences(storage), DEFAULT_PREFERENCES);
  storage.setItem(PREFERENCES_STORAGE_KEY, "contenido no válido");
  assert.deepEqual(loadPreferences(storage), DEFAULT_PREFERENCES);
});

test("la sesión mantiene respuestas durante el intento y permite navegar", () => {
  const source = tests[0];
  const question = source.preguntas[1];
  const session = new TestSession(source);

  session.currentIndex = 1;
  session.selectAnswer(question.opciones[0].id);
  assert.equal(session.currentIndex, 1);
  assert.equal(session.selectedAnswer(question.id), question.opciones[0].id);
  session.clearCurrentAnswer();
  assert.equal(session.selectedAnswer(question.id), null);
  session.selectAnswer(question.opciones[0].id);
  session.currentIndex += 1;
  assert.equal(session.currentQuestion, source.preguntas[2]);
});

test("la respuesta en vivo corrige y bloquea la pregunta respondida", () => {
  const source = tests[0];
  const sample = { ...source, preguntas: source.preguntas.slice(0, 2) };
  const session = new TestSession(sample);
  const firstQuestion = sample.preguntas[0];
  const incorrectAnswer = firstQuestion.opciones.find(
    (option) => option.id !== firstQuestion.respuestaCorrecta,
  ).id;

  session.setLiveResponseEnabled(true);
  assert.equal(session.selectAnswer(incorrectAnswer), true);
  assert.equal(session.isLiveAnswerLocked(firstQuestion.id), true);
  assert.equal(session.selectAnswer(firstQuestion.respuestaCorrecta), false);
  assert.equal(session.clearCurrentAnswer(), false);
  assert.equal(session.selectedAnswer(firstQuestion.id), incorrectAnswer);

  session.currentIndex = 1;
  assert.equal(session.isLiveAnswerLocked(sample.preguntas[1].id), false);
  session.setLiveResponseEnabled(false);
  session.selectAnswer(sample.preguntas[1].opciones[0].id);
  assert.equal(session.isLiveAnswerLocked(sample.preguntas[1].id), false);
  session.setLiveResponseEnabled(true);
  assert.equal(session.isLiveAnswerLocked(sample.preguntas[1].id), true);
  session.setLiveResponseEnabled(false);
  session.currentIndex = 0;
  assert.equal(session.isLiveAnswerLocked(firstQuestion.id), true);
});

test("el orden de preguntas admite una secuencia guardada y mezcla controlada", () => {
  const source = { ...tests[0], preguntas: tests[0].preguntas.slice(0, 3) };
  const reversedIds = [...source.preguntas].reverse().map((question) => String(question.id));
  const restored = orderTestQuestions(source, "natural", reversedIds);
  const shuffled = orderTestQuestions(source, "aleatorio", null, () => 0);

  assert.deepEqual(restored.preguntas.map((question) => String(question.id)), reversedIds);
  assert.notDeepEqual(
    shuffled.preguntas.map((question) => question.id),
    source.preguntas.map((question) => question.id),
  );
  assert.deepEqual(source.preguntas, tests[0].preguntas.slice(0, 3));
});

test("las rutas hash se interpretan sin romper segmentos mal codificados", () => {
  assert.deepEqual(parseHashRoute("#/oposiciones/cuerpo%20administrativo"), [
    "oposiciones",
    "cuerpo administrativo",
  ]);
  assert.deepEqual(parseHashRoute("#/test/%E0%A4%A"), ["test", "%E0%A4%A"]);
  assert.deepEqual(parseHashRoute("#/"), []);
});

test("el portal agrupa oposiciones, temas y recursos", () => {
  const repository = new ResourceRepository(resources);
  const oppositions = repository.getOppositions();
  const expectedOppositionIds = new Set(
    resources.map((resource) => repository.getOppositionForResource(resource.id)),
  );

  assert.equal(oppositions.length, expectedOppositionIds.size);

  oppositions.forEach((opposition) => {
    const oppositionResources = resources.filter(
      (resource) => repository.getOppositionForResource(resource.id) === opposition.id,
    );
    const themes = repository.getThemes(opposition.id);
    const expectedThemeNumbers = new Set(
      oppositionResources.map((resource) => String(resource.classification.tema.numero)),
    );

    assert.equal(opposition.themeCount, expectedThemeNumbers.size);
    assert.equal(themes.length, expectedThemeNumbers.size);

    themes.forEach((theme) => {
      const sourceResources = oppositionResources.filter(
        (resource) => String(resource.classification.tema.numero) === theme.numero,
      );
      const sourceTestResources = sourceResources.filter(
        (resource) => resource.type === "test",
      );
      const themeResources = repository.getResources(opposition.id, theme.numero);
      const completeTest = themeResources.find((resource) => resource.variant === "complete");
      const expectedQuestionCount = sourceTestResources.reduce(
        (total, resource) => total + resource.data.preguntas.length,
        0,
      );
      const combinedResourceCount = sourceTestResources.length ? 1 : 0;

      assert.equal(theme.resourceCount, sourceResources.length + combinedResourceCount);
      assert.equal(themeResources.length, sourceResources.length + combinedResourceCount);
      if (!sourceTestResources.length) {
        assert.equal(completeTest, undefined);
        return;
      }

      assert.ok(completeTest);
      assert.equal(completeTest.data.preguntas.length, expectedQuestionCount);
      assert.equal(
        new Set(completeTest.data.preguntas.map((question) => question.id)).size,
        expectedQuestionCount,
      );
      assert.deepEqual(completeTest.orderModes, ["natural", "aleatorio"]);
      assert.equal(completeTest.defaultOrder, "natural");
    });
  });

  const opposition = oppositions.find(
    (item) => repository.getTheme(item.id, "01") && repository.getTheme(item.id, "17"),
  );
  assert.ok(opposition);
  const themes = repository.getThemes(opposition.id);
  assert.equal(repository.searchThemes(themes, "tema 17").length, 1);
  assert.ok(
    repository.searchThemes(themes, "empleo publico").some((theme) => theme.numero === "17"),
  );

  const theme01Resources = repository.getResources(opposition.id, "01");
  const theme17Resources = repository.getResources(opposition.id, "17");
  const theme01Tests = theme01Resources.filter((resource) => resource.type === "test");
  const theme17SourceTests = theme17Resources.filter(
    (resource) => resource.type === "test" && resource.variant !== "complete",
  );
  assert.ok(repository.searchResources(theme01Resources, "constitucion").length > 0);
  assert.ok(repository.searchResources(theme17Resources, "empleo publico").length > 0);
  assert.equal(theme01Resources[0].type, "teoria");
  assert.ok(
    theme01Resources.slice(1, -1).every(
      (resource) => resource.type === "test" && resource.author?.id === "ivot",
    ),
  );
  assert.equal(theme01Resources.at(-1).variant, "complete");
  const expectedTheorySelections = new Map([
    ["test-estructura-constitucion-espanola", { blockIds: ["estructura"] }],
    ["test-constitucion-espanola-articulos-10-a-13", { articles: { from: 10, to: 13 } }],
    ["test-constitucion-espanola-articulos-14-a-29-2022", { articles: { from: 14, to: 29 } }],
    ["test-capitulo-ii-titulo-i-ce", { articles: { from: 30, to: 38 } }],
    ["capitulo-iii-titulo-i-ce-principios-rectores", { articles: { from: 39, to: 52 } }],
    ["test-constitucion-capitulo-iv-y-v", { articles: { from: 53, to: 55 } }],
  ]);
  expectedTheorySelections.forEach((selection, resourceId) => {
    const resource = repository.getById(resourceId);
    assert.equal(resource.relatedTheory.resourceId, "tema-01-constitucion-espanola");
    assert.deepEqual(resource.relatedTheory.selection, selection);
  });
  assert.ok(repository.searchResources(theme01Resources, "IVOT").length >= 6);
  assert.ok(repository.searchResources(theme17Resources, "IVOT").length >= 4);
  assert.ok(theme01Tests.every((resource) => resource.classification.partes === undefined));
  assert.ok(
    theme17SourceTests.every((resource) => resource.classification.partes === undefined),
  );
  assert.equal(
    new Set(theme17SourceTests.map((resource) => resource.classification.tema.titulo)).size,
    1,
  );
});

test("el tema 04 reúne sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "04"));
  assert.ok(opposition);
  const theme04 = repository.getTheme(opposition.id, "04");
  const theme04Resources = repository.getResources(opposition.id, "04");
  const sourceTests = theme04Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme04Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-estatuto-autonomia-pais-vasco-titulo-preliminar",
    "test-estatuto-autonomia-pais-vasco-competencias-numero-1",
    "test-estatuto-autonomia-pais-vasco-competencias-numero-2",
    "test-estatuto-autonomia-pais-vasco-competencias-numero-3",
    "test-estatuto-autonomia-pais-vasco-articulos-24-a-33",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme04);
  assert.ok(completeTest);
  assert.equal(theme04Resources[0].type, "teoria");
  assert.equal(theme04Resources[0].id, "tema-04-organizacion-politica-administrativa-capv");
  assert.equal(
    theme04Resources[0].source.url,
    "./data/resources/tema-04/teoria/tema-04-organizacion-politica-administrativa-capv.pdf",
  );
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  assert.equal(
    new Set(sourceTests.map((resource) => resource.classification.tema.titulo)).size,
    1,
  );
  assert.equal(sourceQuestionCount, 169);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(requiredTestIds),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
  const expectedTheorySelections = new Map([
    ["test-estatuto-autonomia-pais-vasco-titulo-preliminar", { articles: { from: 1, to: 9 } }],
    ["test-estatuto-autonomia-pais-vasco-competencias-numero-1", { articles: { from: 10, to: 12 } }],
    ["test-estatuto-autonomia-pais-vasco-competencias-numero-2", { articles: { from: 10, to: 20 } }],
    ["test-estatuto-autonomia-pais-vasco-competencias-numero-3", { articles: { from: 20, to: 23 } }],
    ["test-estatuto-autonomia-pais-vasco-articulos-24-a-33", { articles: { from: 24, to: 33 } }],
  ]);
  expectedTheorySelections.forEach((selection, resourceId) => {
    const resource = repository.getById(resourceId);
    assert.equal(resource.relatedTheory.resourceId, "tema-04-organizacion-politica-administrativa-capv");
    assert.deepEqual(resource.relatedTheory.selection, selection);
  });
});

test("el tema 09 reúne sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "09"));
  assert.ok(opposition);
  const theme09 = repository.getTheme(opposition.id, "09");
  const theme09Resources = repository.getResources(opposition.id, "09");
  const sourceTests = theme09Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme09Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-ley-11-2022-empleo-publico-vasco-articulos-26-a-30",
    "test-ley-11-2022-empleo-publico-vasco-articulos-161-y-162",
    "test-ley-11-2022-empleo-publico-vasco-articulos-161-a-166",
    "test-ley-11-2022-empleo-publico-vasco-articulos-167-a-171",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme09);
  assert.ok(completeTest);
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  assert.equal(
    new Set(sourceTests.map((resource) => resource.classification.tema.titulo)).size,
    1,
  );
  assert.equal(sourceQuestionCount, 82);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(requiredTestIds),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 18 reúne sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "18"));
  assert.ok(opposition);
  const theme18 = repository.getTheme(opposition.id, "18");
  const theme18Resources = repository.getResources(opposition.id, "18");
  const sourceTests = theme18Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme18Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-136-a-138",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-139-y-140",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-141-y-142",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-143-a-145",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-146-a-148",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-149-a-152",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-153-a-155",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-156-a-160",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme18);
  assert.ok(completeTest);
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  assert.equal(
    new Set(sourceTests.map((resource) => resource.classification.tema.titulo)).size,
    1,
  );
  assert.equal(sourceQuestionCount, 113);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(sourceTests.map((resource) => resource.id)),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 28 reúne sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "28"));
  assert.ok(opposition);
  const theme28 = repository.getTheme(opposition.id, "28");
  const theme28Resources = repository.getResources(opposition.id, "28");
  const sourceTests = theme28Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme28Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme28);
  assert.ok(completeTest);
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  assert.ok(sourceTestIds.has("test-de-fuentes-del-derecho-1"));
  assert.ok(sourceTestIds.has("test-de-fuentes-del-derecho-2"));
  assert.equal(sourceQuestionCount, 47);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(sourceTests.map((resource) => resource.id)),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 29 reúne sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "29"));
  assert.ok(opposition);
  const theme29 = repository.getTheme(opposition.id, "29");
  const theme29Resources = repository.getResources(opposition.id, "29");
  const sourceTests = theme29Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme29Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-de-la-ley-40-2015-articulos-5-a-7",
    "test-de-la-ley-40-2015-numero-2-articulos-8-y-9",
    "test-de-la-ley-40-2015-regimen-juridico-sector-publico-articulos-10-y-11",
    "test-ley-40-2015-articulos-12-a-14",
    "test-ley-40-2015-articulos-15-a-18",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme29);
  assert.ok(completeTest);
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.deepEqual(
    sourceTests.map((resource) => resource.id),
    requiredTestIds,
  );
  assert.equal(sourceQuestionCount, 92);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(sourceTests.map((resource) => resource.id)),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 30 reúne sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "30"));
  assert.ok(opposition);
  const theme30 = repository.getTheme(opposition.id, "30");
  const theme30Resources = repository.getResources(opposition.id, "30");
  const sourceTests = theme30Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme30Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-ley-39-2015-silencio-administrativo-articulos-24-y-25",
    "test-ley-39-2015-articulos-34-a-40",
    "test-ley-39-2015-articulos-41-a-44",
    "test-ley-39-2015-articulos-45-y-46",
    "test-ley-39-2015-articulos-47-a-52",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme30);
  assert.ok(completeTest);
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.equal(sourceQuestionCount, 96);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(sourceTests.map((resource) => resource.id)),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 31 reúne sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "31"));
  assert.ok(opposition);
  const theme31 = repository.getTheme(opposition.id, "31");
  const theme31Resources = repository.getResources(opposition.id, "31");
  const sourceTests = theme31Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme31Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-ley-39-2015-articulos-3-a-8",
    "test-ley-39-2015-articulos-9-a-12",
    "test-ley-40-2015-articulos-23-y-24",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme31);
  assert.ok(completeTest);
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.deepEqual(
    sourceTests.map((resource) => resource.id),
    requiredTestIds,
  );
  assert.equal(sourceQuestionCount, 65);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(sourceTests.map((resource) => resource.id)),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 32 reúne y ordena sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "32"));
  assert.ok(opposition);
  const theme32 = repository.getTheme(opposition.id, "32");
  const theme32Resources = repository.getResources(opposition.id, "32");
  const sourceTests = theme32Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme32Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-ley-39-2015-articulo-53",
    "test-ley-39-2015-articulos-55-a-62",
    "test-ley-39-2015-articulos-62-a-66",
    "test-ley-39-2015-articulos-67-y-68",
    "test-ley-39-2015-articulos-67-69-y-70",
    "test-ley-39-2015-articulos-70-a-74",
    "test-ley-39-2015-articulos-75-a-77",
    "test-ley-39-2015-articulos-78-79-80-y-82",
    "test-ley-39-2015-articulo-83",
    "test-ley-39-2015-articulos-85-y-86",
    "test-ley-39-2015-articulos-87-y-88",
    "test-ley-39-2015-articulos-89-y-90",
    "test-ley-39-2015-articulos-91-a-95",
    "test-ley-39-2015-articulo-96",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme32);
  assert.ok(completeTest);
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.deepEqual(
    sourceTests.map((resource) => resource.id),
    requiredTestIds,
  );
  assert.equal(sourceQuestionCount, 238);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(sourceTests.map((resource) => resource.id)),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 33 reúne y ordena sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "33"));
  assert.ok(opposition);
  const theme33 = repository.getTheme(opposition.id, "33");
  const theme33Resources = repository.getResources(opposition.id, "33");
  const sourceTests = theme33Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme33Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-ley-39-2015-articulos-106-a-109",
    "test-ley-39-2015-articulos-112-a-120",
    "test-ley-39-2015-articulos-121-a-124",
    "test-ley-39-2015-articulos-125-y-126",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme33);
  assert.ok(completeTest);
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.deepEqual(
    sourceTests.map((resource) => resource.id),
    requiredTestIds,
  );
  assert.equal(sourceQuestionCount, 117);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    completeTest.data.fuente.tests,
    requiredTestIds,
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("el tema 34 reúne y ordena sus tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "34"));
  assert.ok(opposition);
  const theme34 = repository.getTheme(opposition.id, "34");
  const theme34Resources = repository.getResources(opposition.id, "34");
  const sourceTests = theme34Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme34Resources.find((resource) => resource.variant === "complete");
  const sourceQuestionCount = sourceTests.reduce(
    (total, resource) => total + resource.data.preguntas.length,
    0,
  );
  const requiredTestIds = [
    "test-ley-40-2015-articulos-32-y-33",
    "test-ley-40-2015-articulos-34-a-37",
  ];
  const sourceTestIds = new Set(sourceTests.map((resource) => resource.id));

  assert.ok(theme34);
  assert.ok(completeTest);
  assert.ok(sourceTests.every((resource) => resource.classification.partes === undefined));
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
  assert.deepEqual(
    sourceTests.map((resource) => resource.id),
    requiredTestIds,
  );
  assert.equal(sourceQuestionCount, 35);
  assert.equal(completeTest.data.preguntas.length, sourceQuestionCount);
  assert.deepEqual(
    completeTest.data.fuente.tests,
    requiredTestIds,
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    sourceQuestionCount,
  );
});

test("los títulos en mayúsculas se presentan como frase sin perder siglas", () => {
  assert.equal(
    formatDisplayTitle("TEST DEL CAPÍTULO III DEL TÍTULO I DE LA CE"),
    "Test del capítulo III del título I de la CE",
  );
  assert.equal(
    formatDisplayTitle("TEST CONSTITUCIÓN CAPÍTULO IV y V"),
    "Test constitución capítulo IV y V",
  );
  assert.equal(formatDisplayTitle("La Constitución Española"), "La Constitución Española");
});
