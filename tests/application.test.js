import test from "node:test";
import assert from "node:assert/strict";

import { resources } from "../data/resources.js";
import { tests } from "../data/tests.js";
import { ResourceRepository } from "../models/resource-repository.js";
import { validateResources } from "../models/resource-validator.js";
import { TestSession } from "../models/test-session.js";
import { formatDisplayTitle } from "../utils/text.js";
import { orderTestQuestions } from "../utils/test-order.js";
import { parseHashRoute } from "../utils/router.js";

test("el registro contiene todos los tests con un esquema válido", () => {
  assert.deepEqual(validateResources(resources), []);
  assert.equal(tests.length, 10);
  assert.equal(new Set(tests.map((item) => item.id)).size, tests.length);

  tests.forEach((item) => {
    assert.equal(item.schemaVersion, 1);
    assert.ok(item.id);
    assert.deepEqual(item.autor, { id: "ivot", nombre: "IVOT" });
    assert.ok(item.titulo);
    assert.ok(item.clasificacion.tema.numero);
    assert.ok(item.clasificacion.tema.titulo);
    assert.ok(Array.isArray(item.clasificacion.partes));
    assert.ok(item.preguntas.length > 0);

    item.preguntas.forEach((question) => {
      assert.ok(question.enunciado);
      assert.ok(question.opciones.some((option) => option.id === question.respuestaCorrecta));
    });
  });
});

test("la validación del catálogo informa de soluciones y recursos no válidos", () => {
  const invalidResource = structuredClone(resources[0]);
  invalidResource.data.preguntas[0].respuestaCorrecta = "opcion-inexistente";
  const errors = validateResources([invalidResource, invalidResource]);

  assert.ok(errors.some((error) => error.includes("respuestaCorrecta")));
  assert.ok(errors.some((error) => error.includes("está duplicado")));
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
  const [opposition] = repository.getOppositions();
  const themes = repository.getThemes(opposition.id);
  const theme01 = themes.find((theme) => theme.numero === "01");
  const theme17 = themes.find((theme) => theme.numero === "17");
  const theme01Resources = repository.getResources(opposition.id, theme01.numero);
  const theme17Resources = repository.getResources(opposition.id, theme17.numero);
  const completeTest01 = theme01Resources.find((resource) => resource.variant === "complete");
  const completeTest17 = theme17Resources.find((resource) => resource.variant === "complete");

  assert.equal(repository.getOppositions().length, 1);
  assert.equal(opposition.themeCount, 2);
  assert.equal(theme01.resourceCount, 7);
  assert.equal(theme17.resourceCount, 5);
  assert.equal(theme01Resources.length, 7);
  assert.equal(theme17Resources.length, 5);
  assert.equal(completeTest01.data.preguntas.length, 121);
  assert.equal(completeTest17.data.preguntas.length, 97);
  assert.equal(new Set(completeTest01.data.preguntas.map((question) => question.id)).size, 121);
  assert.equal(new Set(completeTest17.data.preguntas.map((question) => question.id)).size, 97);
  assert.deepEqual(completeTest01.orderModes, ["natural", "aleatorio"]);
  assert.deepEqual(completeTest17.orderModes, ["natural", "aleatorio"]);
  assert.equal(completeTest01.defaultOrder, "natural");
  assert.equal(completeTest17.defaultOrder, "natural");
  assert.equal(repository.searchThemes(themes, "tema 17").length, 1);
  assert.equal(repository.searchThemes(themes, "empleo publico").length, 1);
  assert.ok(repository.searchResources(theme01Resources, "constitucion").length > 0);
  assert.ok(repository.searchResources(theme17Resources, "empleo publico").length > 0);
  assert.equal(repository.searchResources(theme01Resources, "IVOT").length, 6);
  assert.equal(repository.searchResources(theme17Resources, "IVOT").length, 4);
  assert.ok(
    repository
      .searchResources(theme01Resources, "CAPÍTULO V")
      .every((item) => item.classification.partes.includes("CAPÍTULO V")),
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
