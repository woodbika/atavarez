import test from "node:test";
import assert from "node:assert/strict";

import { resources } from "../data/resources.js";
import { tests } from "../data/tests.js";
import { ResourceRepository } from "../models/resource-repository.js";
import { TestSession } from "../models/test-session.js";
import { formatDisplayTitle } from "../utils/text.js";

test("el registro contiene todos los tests con un esquema válido", () => {
  assert.equal(tests.length, 6);
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

test("el portal agrupa oposiciones, temas y recursos", () => {
  const repository = new ResourceRepository(resources);
  const [opposition] = repository.getOppositions();
  const [theme] = repository.getThemes(opposition.id);
  const themeResources = repository.getResources(opposition.id, theme.numero);
  const completeTest = themeResources.find((resource) => resource.variant === "complete");

  assert.equal(repository.getOppositions().length, 1);
  assert.equal(opposition.themeCount, 1);
  assert.equal(theme.resourceCount, 7);
  assert.equal(themeResources.length, 7);
  assert.equal(completeTest.data.preguntas.length, 121);
  assert.equal(new Set(completeTest.data.preguntas.map((question) => question.id)).size, 121);
  assert.deepEqual(completeTest.orderModes, ["natural", "aleatorio"]);
  assert.equal(completeTest.defaultOrder, "natural");
  assert.equal(repository.searchThemes([theme], "tema 01").length, 1);
  assert.equal(repository.searchThemes([theme], "constitucion").length, 1);
  assert.ok(repository.searchResources(themeResources, "constitucion").length > 0);
  assert.equal(repository.searchResources(themeResources, "IVOT").length, 6);
  assert.ok(
    repository
      .searchResources(themeResources, "CAPÍTULO V")
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
