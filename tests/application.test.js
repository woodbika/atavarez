import test from "node:test";
import assert from "node:assert/strict";

import { resources } from "../data/resources.js";
import { tests } from "../data/tests.js";
import { ResourceRepository } from "../models/resource-repository.js";
import { validateResources } from "../models/resource-validator.js";
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

test("el registro contiene todos los tests con un esquema válido", () => {
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

test("el tema 01 incluye un esquema HTML válido y consultable", () => {
  const outline = resources.find(
    (resource) => resource.id === "esquema-estructura-constitucion-espanola",
  );

  assert.ok(outline);
  assert.equal(outline.type, "esquema");
  assert.equal(outline.classification.tema.numero, "01");
  assert.ok(outline.data.sections.length >= 3);
  assert.ok(
    outline.data.sections.some((section) => section.title.includes("Título I")),
  );
  assert.deepEqual(validateResources(resources), []);
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
