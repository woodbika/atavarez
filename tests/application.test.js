import test from "node:test";
import assert from "node:assert/strict";

import { authors } from "../data/authors.js";
import {
  osakidetzaCommonQuestionBank,
  osakidetzaSpecificQuestionBank,
  questionBanks,
} from "../data/question-banks/index.js";
import { resources } from "../data/resources.js";
import { oppositions } from "../data/oppositions.js";
import {
  GOBIERNO_VASCO_THEME_CATEGORIES,
  gobiernoVascoThemeCategory,
} from "../data/opposition-sections.js";
import { createOppositionResourceFactory } from "../data/resource-factory.js";
import { updates } from "../data/updates.js";
import { ResourceRepository } from "../models/resource-repository.js";
import { validateAuthors } from "../models/author-validator.js";
import { buildStudyContextItems } from "../controllers/study-context-controller.js";
import {
  auditResources,
  findDuplicateQuestions,
} from "../models/resource-auditor.js";
import {
  createTestAttempt,
  restoreTestAttempt,
} from "../models/test-attempt.js";
import { validateOppositions } from "../models/opposition-validator.js";
import { validateQuestionBanks } from "../models/question-bank-validator.js";
import { validateResources } from "../models/resource-validator.js";
import { validateUpdates } from "../models/update-validator.js";
import { TestSession } from "../models/test-session.js";
import { formatDisplayTitle } from "../utils/text.js";
import { assetUrl, coverImageUrl } from "../utils/assets.js";
import {
  orderTestQuestions,
  parseQuestionRange,
  selectQuestionRange,
  selectQuestionsByOrder,
  selectRandomQuestions,
} from "../utils/test-order.js";
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
import { renderReview } from "../views/review-view.js";

const tests = resources
  .filter((resource) => resource.type === "test")
  .map((resource) => resource.data);

test("las portadas se resuelven desde la raíz real de la aplicación", () => {
  const pageUrl = "https://woodbika.github.io/atavarez/index.html";

  assert.equal(
    assetUrl("./assets/images/portada-oposiciones.jpg", pageUrl),
    "https://woodbika.github.io/atavarez/assets/images/portada-oposiciones.jpg",
  );
  assert.equal(
    coverImageUrl("portada-recursos.jpg", pageUrl),
    "https://woodbika.github.io/atavarez/assets/images/portada-recursos.jpg",
  );
});

test("el registro contiene todos los tests con un formato válido", () => {
  const registeredTests = resources.filter((resource) => resource.type === "test");

  assert.deepEqual(
    validateResources(resources, oppositions, authors, questionBanks),
    [],
  );
  assert.deepEqual(validateAuthors(authors), []);
  assert.deepEqual(validateQuestionBanks(questionBanks, oppositions, authors), []);
  assert.deepEqual(validateOppositions(oppositions), []);
  assert.equal(tests.length, registeredTests.length);
  assert.deepEqual(
    tests.map((item) => item.id),
    registeredTests.map((resource) => resource.id),
  );
  assert.equal(new Set(tests.map((item) => item.id)).size, tests.length);

  tests.forEach((item) => {
    assert.equal(item.schemaVersion, 1);
    assert.ok(item.id);
    assert.ok(item.autor?.id);
    assert.ok(item.autor?.nombre);
    assert.ok(item.titulo);
    assert.ok(item.clasificacion.tema.numero);
    assert.ok(item.clasificacion.tema.titulo);
    assert.ok(item.preguntas.length > 0);

    item.preguntas.forEach((question) => {
      assert.ok(question.enunciado);
      assert.ok(question.opciones.some((option) => option.id === question.respuestaCorrecta));
    });
  });
});

test("todos los tests del Tema 1 explican sus respuestas", () => {
  const themeResources = resources.filter(
    (resource) =>
      resource.type === "test" &&
      resource.opposition.id === "gobierno-vasco-administrativo-c1" &&
      resource.classification.tema.numero === "01",
  );

  assert.equal(themeResources.length, 6);
  assert.equal(
    themeResources.reduce(
      (total, resource) => total + resource.data.preguntas.length,
      0,
    ),
    121,
  );
  themeResources.forEach((resource) => {
    const explanations = resource.data.explicaciones;
    const explanationByQuestionId = new Map(
      explanations.preguntas.map((item) => [String(item.preguntaId), item]),
    );

    assert.equal(explanations.schemaVersion, 1);
    assert.equal(explanations.testId, resource.id);
    assert.equal(explanations.preguntas.length, resource.data.preguntas.length);
    resource.data.preguntas.forEach((question) => {
      const explanation = explanationByQuestionId.get(String(question.id));
      const discardedOptionIds = question.opciones
        .map((option) => option.id)
        .filter((optionId) => optionId !== question.respuestaCorrecta)
        .sort();

      assert.ok(explanation?.justificacion);
      assert.deepEqual(
        Object.keys(explanation.descartes).sort(),
        discardedOptionIds,
      );
      Object.values(explanation.descartes).forEach((discard) => {
        assert.doesNotMatch(discard, /^La opción [A-D] (?:reproduce|coincide)/);
      });
    });
  });
});

test("todos los tests del Tema 2 explican sus respuestas", () => {
  const themeResources = resources.filter(
    (resource) =>
      resource.type === "test" &&
      resource.opposition.id === "gobierno-vasco-administrativo-c1" &&
      resource.classification.tema.numero === "02",
  );

  assert.equal(themeResources.length, 4);
  assert.equal(
    themeResources.reduce(
      (total, resource) => total + resource.data.preguntas.length,
      0,
    ),
    146,
  );
  themeResources.forEach((resource) => {
    const explanations = resource.data.explicaciones;
    const explanationByQuestionId = new Map(
      explanations.preguntas.map((item) => [String(item.preguntaId), item]),
    );

    assert.equal(explanations.schemaVersion, 1);
    assert.equal(explanations.testId, resource.id);
    assert.equal(explanations.preguntas.length, resource.data.preguntas.length);
    resource.data.preguntas.forEach((question) => {
      const explanation = explanationByQuestionId.get(String(question.id));
      const discardedOptionIds = question.opciones
        .map((option) => option.id)
        .filter((optionId) => optionId !== question.respuestaCorrecta)
        .sort();

      assert.match(
        explanation?.justificacion ?? "",
        /^(La clave está en|Aquí conviene recordar|En este caso)/,
      );
      assert.deepEqual(
        Object.keys(explanation.descartes).sort(),
        discardedOptionIds,
      );
      Object.values(explanation.descartes).forEach((discard) => {
        assert.ok(discard);
      });
    });
  });
});

test("el test completo conserva todas las explicaciones con ids compuestos", () => {
  const repository = new ResourceRepository(resources, oppositions, questionBanks);
  const combinedTest = repository.getTestById(
    "test-completo-gobierno-vasco-administrativo-c1-tema-01",
  );

  assert.equal(combinedTest.explicaciones.preguntas.length, 121);
  assert.equal(
    combinedTest.explicaciones.preguntas.length,
    combinedTest.preguntas.length,
  );
  combinedTest.explicaciones.preguntas.forEach((explanation) => {
    assert.ok(
      combinedTest.preguntas.some(
        (question) => String(question.id) === String(explanation.preguntaId),
      ),
    );
  });
});

test("el test completo del Tema 2 conserva todas las explicaciones", () => {
  const repository = new ResourceRepository(resources, oppositions, questionBanks);
  const combinedTest = repository.getTestById(
    "test-completo-gobierno-vasco-administrativo-c1-tema-02",
  );

  assert.equal(combinedTest.explicaciones.preguntas.length, 146);
  assert.equal(
    combinedTest.explicaciones.preguntas.length,
    combinedTest.preguntas.length,
  );
  combinedTest.explicaciones.preguntas.forEach((explanation) => {
    assert.ok(
      combinedTest.preguntas.some(
        (question) => String(question.id) === String(explanation.preguntaId),
      ),
    );
  });
});

test("la validación rechaza explicaciones incompletas", () => {
  const invalidResource = structuredClone(
    resources.find(
      (item) => item.id === "test-estructura-constitucion-espanola",
    ),
  );
  delete invalidResource.data.explicaciones.preguntas[0].descartes.b;
  invalidResource.data.explicaciones.preguntas.pop();

  const errors = validateResources([invalidResource], oppositions, authors);

  assert.ok(
    errors.some((error) =>
      error.includes("debe explicar exactamente las opciones no elegidas"),
    ),
  );
  assert.ok(
    errors.some((error) => error.includes("debe explicar todas las preguntas")),
  );
});

test("cada recurso pertenece a una oposición estable del catálogo", () => {
  const knownOppositionIds = new Set(oppositions.map((opposition) => opposition.id));

  resources.forEach((resource) => {
    assert.ok(knownOppositionIds.has(resource.opposition.id));
    assert.equal(resource.classification.oposicionId, resource.opposition.id);
    assert.equal(resource.classification.administracion, resource.opposition.administration);
    assert.equal(resource.classification.oposicion, resource.opposition.title);
    assert.equal(resource.classification.grupo, resource.opposition.group);
    assert.equal(resource.classification.escala, resource.opposition.scale);
  });
});

test("los temas y autores visibles proceden de los catálogos centrales", () => {
  const authorById = new Map(authors.map((author) => [author.id, author]));
  const oppositionById = new Map(
    oppositions.map((opposition) => [opposition.id, opposition]),
  );

  resources.forEach((resource) => {
    const opposition = oppositionById.get(resource.opposition.id);
    const section = opposition.sections.find(
      (item) => String(item.id) === String(resource.classification.tema.numero),
    );
    assert.ok(section);
    assert.equal(resource.classification.tema.titulo, section.title);

    if (resource.type === "test") {
      const author = authorById.get(resource.author.id);
      assert.ok(author);
      assert.equal(resource.author.nombre, author.name);
      assert.equal(resource.data.autor.nombre, author.name);
    }
  });
});

test("la fábrica admite metadatos mínimos y los completa desde los catálogos", () => {
  const opposition = oppositions[0];
  const source = structuredClone(
    resources.find(
      (resource) =>
        resource.type === "test" &&
        resource.opposition.id === opposition.id,
    ).data,
  );
  source.autor = { id: source.autor.id };
  source.clasificacion = {
    oposicionId: opposition.id,
    tema: { numero: source.clasificacion.tema.numero },
  };

  const { testResource } = createOppositionResourceFactory(opposition);
  const resource = testResource(source);
  const section = opposition.sections.find(
    (item) => item.id === source.clasificacion.tema.numero,
  );

  assert.equal(resource.author.nombre, "IVOT");
  assert.equal(resource.classification.tema.titulo, section.title);
  assert.deepEqual(validateResources([resource], oppositions, authors), []);
});

test("el catálogo de autores exige ids y nombres únicos", () => {
  const errors = validateAuthors([
    authors[0],
    { ...authors[0] },
    { id: "Autor no estable", name: "" },
  ]);

  assert.ok(errors.some((error) => error.includes("duplicado")));
  assert.ok(errors.some((error) => error.includes("identificador estable")));
  assert.ok(errors.some((error) => error.includes(".name")));
});

test("las baterías de Osakidetza incorporan soluciones válidas", () => {
  [
    [osakidetzaCommonQuestionBank, 300, "soluciones-definitivas"],
    [osakidetzaSpecificQuestionBank, 200, "soluciones-definitivas"],
  ].forEach(([questionBank, questionCount, answerStatus]) => {
    assert.equal(questionBank.kind, "question-bank");
    assert.equal(questionBank.estado, answerStatus);
    assert.equal(questionBank.preguntas.length, questionCount);
    assert.deepEqual(
      questionBank.preguntas.map((question) => question.id),
      Array.from({ length: questionCount }, (_, index) => index + 1),
    );
    assert.ok(
      questionBank.preguntas.every(
        (question) =>
          question.opciones.length === 4 &&
          new Set(question.opciones.map((option) => option.id)).size === 4 &&
          question.opciones.some(
            (option) => option.id === question.respuestaCorrecta,
          ),
      ),
    );
  });
  const commonAnswerCounts = osakidetzaCommonQuestionBank.preguntas.reduce(
    (counts, question) => ({
      ...counts,
      [question.respuestaCorrecta]:
        (counts[question.respuestaCorrecta] ?? 0) + 1,
    }),
    {},
  );
  assert.deepEqual(commonAnswerCounts, { a: 65, b: 96, c: 90, d: 49 });
  assert.equal(
    osakidetzaCommonQuestionBank.preguntas
      .slice(0, 10)
      .map((question) => question.respuestaCorrecta)
      .join(""),
    "abcaaccabb",
  );
  assert.equal(
    osakidetzaCommonQuestionBank.preguntas
      .slice(-10)
      .map((question) => question.respuestaCorrecta)
      .join(""),
    "bcbcbbcacb",
  );
  assert.deepEqual(
    validateQuestionBanks(questionBanks, oppositions, authors),
    [],
  );
});

test("la validación protege el contrato de los bancos de preguntas", () => {
  const invalidBank = structuredClone(osakidetzaSpecificQuestionBank);
  invalidBank.autor.nombre = "Autor no registrado";
  invalidBank.clasificacion.tema.numero = "apartado-inexistente";
  invalidBank.preguntas[0].respuestaCorrecta = "opcion-inexistente";

  const errors = validateQuestionBanks([invalidBank], oppositions, authors);

  assert.ok(errors.some((error) => error.includes("no coincide con el catálogo")));
  assert.ok(errors.some((error) => error.includes("no existe en la oposición")));
  assert.ok(errors.some((error) => error.includes("respuestaCorrecta")));
});

test("las modalidades de Osakidetza permanecen vinculadas a su propia batería", () => {
  questionBanks.forEach((questionBank) => {
    const presets = resources.filter(
      (resource) => resource.questionBankId === questionBank.id,
    );

    assert.equal(presets.length, 3);
    assert.ok(
      presets.every(
        (resource) =>
          resource.variant === "preset" &&
          resource.testPreset.kind === "test-preset" &&
          resource.data.preguntas === questionBank.preguntas,
      ),
    );
  });

  const [invalidSource] = resources.filter(
    (resource) =>
      resource.questionBankId === osakidetzaSpecificQuestionBank.id,
  );
  const invalidPreset = {
    ...invalidSource,
    defaultOrder: "aleatorio",
    questionBankId: "banco-inexistente",
    testPreset: {
      ...invalidSource.testPreset,
      questionBankId: "banco-inexistente",
    },
  };
  const errors = validateResources(
    [invalidPreset],
    oppositions,
    authors,
    questionBanks,
  );

  assert.ok(errors.some((error) => error.includes("modalidad declarada")));
  assert.ok(errors.some((error) => error.includes("no existe en el catálogo")));
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

test("el tema 03 identifica los tests sin vínculo teórico directo", () => {
  const theory = resources.find(
    (resource) => resource.id === "tema-03-union-europea",
  );
  const themeTests = resources.filter(
    (resource) =>
      resource.type === "test" && resource.classification.tema.numero === "03",
  );

  assert.ok(theory);
  assert.equal(theory.type, "teoria");
  assert.equal(
    theory.title,
    "El espacio europeo y las instituciones de la Unión Europea.",
  );
  assert.equal(theory.classification.tema.numero, "03");
  assert.equal(theory.data.fuente.archivo, "tema-03-union-europea.pdf");
  assert.equal(theory.data.fuente.paginas, 12);
  assert.equal(theory.data.bloques.length, 7);
  assert.ok(
    theory.data.bloques.every(
      (block) => block.tipo === "contenido-tematico",
    ),
  );
  assert.ok(themeTests.every((resource) => resource.relatedTheory === undefined));
  assert.ok(
    themeTests.every(
      (resource) => resource.theoryNotice === "Sin vínculo teórico directo",
    ),
  );
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

test("el tema 17 relaciona cada test con su intervalo de teoría", () => {
  const theory = resources.find(
    (resource) => resource.id === "tema-17-empleo-publico-vasco",
  );
  const expectedSelections = new Map([
    ["test-ley-11-2022-empleo-publico-vasco-articulos-40-a-44", { from: 40, to: 44 }],
    ["test-ley-11-2022-empleo-publico-vasco-articulos-45-a-50", { from: 45, to: 50 }],
    ["test-ley-11-2022-empleo-publico-vasco-articulos-51-y-52", { from: 51, to: 52 }],
    ["test-ley-11-2022-empleo-publico-vasco-articulos-53-a-62", { from: 53, to: 62 }],
  ]);

  assert.ok(theory);
  assert.equal(theory.type, "teoria");
  assert.equal(
    theory.title,
    "Estructura y organización del empleo en las administraciones públicas vascas.",
  );
  assert.equal(theory.classification.tema.numero, "17");
  assert.equal(theory.data.fuente.archivo, "tema-17-empleo-publico-vasco.pdf");
  assert.equal(theory.data.fuente.paginas, 16);
  assert.equal(theory.data.bloques.length, 1);
  expectedSelections.forEach((articles, resourceId) => {
    const resource = resources.find((item) => item.id === resourceId);
    assert.equal(resource.relatedTheory.resourceId, theory.id);
    assert.deepEqual(resource.relatedTheory.selection, { articles });
  });
  assert.deepEqual(validateResources(resources), []);
});

test("el tema 18 relaciona cada test con su intervalo de teoría", () => {
  const theory = resources.find(
    (resource) => resource.id === "tema-18-acceso-empleo-publico-provision-puestos",
  );
  const expectedSelections = new Map([
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-76-y-77", { from: 76, to: 77 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-78-y-79", { from: 78, to: 79 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-80-a-82", { from: 80, to: 82 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-94-a-96", { from: 94, to: 96 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-97-a-99", { from: 97, to: 99 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-100-y-101", { from: 100, to: 101 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-102-a-104", { from: 102, to: 104 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulo-105", { from: 105, to: 105 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-106-a-111", { from: 106, to: 111 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-112-y-113", { from: 112, to: 113 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-136-a-138", { from: 136, to: 138 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-139-y-140", { from: 139, to: 140 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-141-y-142", { from: 141, to: 142 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-143-a-145", { from: 143, to: 145 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-146-a-148", { from: 146, to: 148 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-149-a-152", { from: 149, to: 152 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-153-a-155", { from: 153, to: 155 }],
    ["test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-156-a-160", { from: 156, to: 160 }],
  ]);

  assert.ok(theory);
  assert.equal(theory.type, "teoria");
  assert.equal(
    theory.title,
    "Acceso al empleo público y la provisión de puestos de trabajo en las administraciones públicas vascas.",
  );
  assert.equal(theory.classification.tema.numero, "18");
  assert.equal(theory.data.fuente.archivo, "tema-18-empleo-publico-vasco.pdf");
  assert.equal(theory.data.fuente.paginas, 39);
  assert.equal(theory.data.bloques.length, 3);
  expectedSelections.forEach((articles, resourceId) => {
    const resource = resources.find((item) => item.id === resourceId);
    assert.equal(resource.relatedTheory.resourceId, theory.id);
    assert.deepEqual(resource.relatedTheory.selection, { articles });
  });
  assert.deepEqual(validateResources(resources), []);
});

test("el tema 18 incluye un resumen comparativo vinculado a su teoría", () => {
  const repository = new ResourceRepository(resources);
  const summary = resources.find(
    (resource) => resource.id === "resumen-tema-18-situaciones-administrativas",
  );
  const themeResources = repository.getResources(
    "gobierno-vasco-administrativo-c1",
    "18",
  );

  assert.ok(summary);
  assert.equal(summary.type, "resumen");
  assert.equal(summary.classification.tema.numero, "18");
  assert.equal(
    summary.data.fuente.resourceId,
    "tema-18-acceso-empleo-publico-provision-puestos",
  );
  assert.deepEqual(summary.data.fuente.articulos, { desde: 136, hasta: 160 });
  assert.equal(summary.data.columnas.length, 6);
  assert.equal(summary.data.filas.length, 16);
  assert.equal(summary.data.reglasComunes.length, 6);
  assert.equal(summary.data.prioridadReingreso.situaciones.length, 12);
  assert.equal(summary.data.alcance.length, 2);
  assert.equal(themeResources[0].type, "teoria");
  assert.equal(themeResources[1].id, summary.id);
  assert.deepEqual(validateResources(resources), []);
});

test("el tema 28 relaciona cada test con sus bloques teóricos", () => {
  const theory = resources.find(
    (resource) => resource.id === "tema-28-fuentes-derecho-administrativo",
  );
  const themeTests = resources.filter(
    (resource) =>
      resource.type === "test" && resource.classification.tema.numero === "28",
  );
  const expectedSelections = new Map([
    [
      "test-de-fuentes-del-derecho-1",
      [
        "jerarquia-y-enumeracion-de-las-fuentes-del-derecho-administrativo",
        "especial-referencia-a-la-ley",
      ],
    ],
    [
      "test-de-fuentes-del-derecho-2",
      [
        "especial-referencia-a-la-ley",
        "especial-referencia-al-reglamento",
        "el-principio-de-legalidad-en-la-administracion-publica",
      ],
    ],
  ]);

  assert.ok(theory);
  assert.equal(theory.type, "teoria");
  assert.equal(theory.title, "Fuentes del derecho administrativo.");
  assert.equal(theory.classification.tema.numero, "28");
  assert.equal(
    theory.data.fuente.archivo,
    "tema-28-fuentes-derecho-administrativo.pdf",
  );
  assert.equal(theory.data.fuente.paginas, 10);
  assert.equal(theory.data.bloques.length, 4);
  assert.ok(
    theory.data.bloques.every(
      (block) => block.tipo === "contenido-tematico",
    ),
  );
  assert.equal(themeTests.length, expectedSelections.size);
  themeTests.forEach((resource) => {
    assert.equal(resource.relatedTheory.resourceId, theory.id);
    assert.deepEqual(
      resource.relatedTheory.selection,
      { blockIds: expectedSelections.get(resource.id) },
    );
  });
  assert.deepEqual(validateResources(resources), []);
});

test("los temas 29 y 30 relacionan cada test con sus artículos teóricos", () => {
  const configurations = [
    {
      themeNumber: "29",
      theoryId: "tema-29-organizacion-administrativa",
      cardTitle: "Organización administrativa.",
      pdf: "tema-29-organizacion-administrativa.pdf",
      pages: 8,
      selections: new Map([
        ["test-de-la-ley-40-2015-articulos-5-a-7", { from: 5, to: 7 }],
        ["test-de-la-ley-40-2015-numero-2-articulos-8-y-9", { from: 8, to: 9 }],
        [
          "test-de-la-ley-40-2015-regimen-juridico-sector-publico-articulos-10-y-11",
          { from: 10, to: 11 },
        ],
        ["test-ley-40-2015-articulos-12-a-14", { from: 12, to: 14 }],
        ["test-ley-40-2015-articulos-15-a-18", { from: 15, to: 18 }],
      ]),
    },
    {
      themeNumber: "30",
      theoryId: "tema-30-acto-administrativo",
      cardTitle: "El acto administrativo.",
      pdf: "tema-30-acto-administrativo.pdf",
      pages: 10,
      selections: new Map([
        [
          "test-ley-39-2015-silencio-administrativo-articulos-24-y-25",
          { from: 24, to: 25 },
        ],
        ["test-ley-39-2015-articulos-34-a-40", { from: 34, to: 40 }],
        ["test-ley-39-2015-articulos-41-a-44", { from: 41, to: 44 }],
        ["test-ley-39-2015-articulos-45-y-46", { from: 45, to: 46 }],
        ["test-ley-39-2015-articulos-47-a-52", { from: 47, to: 52 }],
      ]),
    },
  ];

  configurations.forEach((configuration) => {
    const theory = resources.find(
      (resource) => resource.id === configuration.theoryId,
    );
    const themeResources = resources.filter(
      (resource) => resource.classification.tema.numero === configuration.themeNumber,
    );
    const themeTests = themeResources.filter((resource) => resource.type === "test");

    assert.ok(theory);
    assert.equal(theory.type, "teoria");
    assert.equal(theory.title, configuration.cardTitle);
    assert.equal(theory.data.fuente.archivo, configuration.pdf);
    assert.equal(theory.data.fuente.paginas, configuration.pages);
    assert.equal(themeTests.length, configuration.selections.size);
    assert.equal(themeResources[0].type, "teoria");
    themeTests.forEach((resource) => {
      assert.equal(resource.relatedTheory.resourceId, theory.id);
      assert.deepEqual(resource.relatedTheory.selection, {
        articles: configuration.selections.get(resource.id),
      });
    });
  });
  assert.deepEqual(validateResources(resources), []);
});

test("los temas 31 y 32 vinculan cada test con su selección teórica exacta", () => {
  const configurations = [
    {
      themeNumber: "31",
      theoryId: "tema-31-procedimiento-administrativo",
      cardTitle: "Procedimiento administrativo.",
      pdf: "tema-31-procedimiento-administrativo.pdf",
      pages: 10,
      selections: new Map([
        ["test-ley-39-2015-articulos-3-a-8", {
          blockIds: ["ley-39-2015-interesados"],
          articles: { from: 3, to: 8 },
        }],
        ["test-ley-39-2015-articulos-9-a-12", {
          blockIds: ["ley-39-2015-interesados"],
          articles: { from: 9, to: 12 },
        }],
        ["test-ley-40-2015-articulos-23-y-24", {
          blockIds: ["ley-40-2015-abstencion-recusacion"],
          articles: { from: 23, to: 24 },
        }],
      ]),
    },
    {
      themeNumber: "32",
      theoryId: "tema-32-fases-procedimiento-administrativo",
      cardTitle: "Fases del procedimiento administrativo.",
      pdf: "tema-32-fases-procedimiento-administrativo.pdf",
      pages: 23,
      selections: new Map([
        ["test-ley-39-2015-articulo-53", { articleNumbers: [53] }],
        ["test-ley-39-2015-articulos-55-a-62", { articles: { from: 55, to: 62 } }],
        ["test-ley-39-2015-articulos-62-a-66", { articles: { from: 62, to: 66 } }],
        ["test-ley-39-2015-articulos-67-y-68", { articleNumbers: [67, 68] }],
        ["test-ley-39-2015-articulos-67-69-y-70", { articleNumbers: [67, 69, 70] }],
        ["test-ley-39-2015-articulos-70-a-74", { articles: { from: 70, to: 74 } }],
        ["test-ley-39-2015-articulos-75-a-77", { articles: { from: 75, to: 77 } }],
        ["test-ley-39-2015-articulos-78-79-80-y-82", { articleNumbers: [78, 79, 80, 82] }],
        ["test-ley-39-2015-articulo-83", { articleNumbers: [83] }],
        ["test-ley-39-2015-articulos-85-y-86", { articleNumbers: [85, 86] }],
        ["test-ley-39-2015-articulos-87-y-88", { articleNumbers: [87, 88] }],
        ["test-ley-39-2015-articulos-89-y-90", { articleNumbers: [89, 90] }],
        ["test-ley-39-2015-articulos-91-a-95", { articles: { from: 91, to: 95 } }],
        ["test-ley-39-2015-articulo-96", { articleNumbers: [96] }],
      ]),
    },
  ];

  configurations.forEach((configuration) => {
    const theory = resources.find((resource) => resource.id === configuration.theoryId);
    const themeResources = resources.filter(
      (resource) => resource.classification.tema.numero === configuration.themeNumber,
    );
    const themeTests = themeResources.filter((resource) => resource.type === "test");

    assert.ok(theory);
    assert.equal(theory.type, "teoria");
    assert.equal(theory.title, configuration.cardTitle);
    assert.equal(theory.data.fuente.archivo, configuration.pdf);
    assert.equal(theory.data.fuente.paginas, configuration.pages);
    assert.equal(themeTests.length, configuration.selections.size);
    assert.equal(themeResources[0].type, "teoria");
    themeTests.forEach((resource) => {
      assert.equal(resource.relatedTheory.resourceId, theory.id);
      assert.deepEqual(
        resource.relatedTheory.selection,
        configuration.selections.get(resource.id),
      );
    });
  });
  assert.deepEqual(validateResources(resources), []);
});

test("los temas 33 y 34 relacionan cada test con sus artículos teóricos", () => {
  const configurations = [
    {
      themeNumber: "33",
      theoryId: "tema-33-revision-actos-recursos-administrativos",
      cardTitle: "Revisión de los actos administrativos.",
      pdf: "tema-33-revision-actos.pdf",
      pages: 9,
      selections: new Map([
        ["test-ley-39-2015-articulos-106-a-109", { from: 106, to: 109 }],
        ["test-ley-39-2015-articulos-112-a-120", { from: 112, to: 120 }],
        ["test-ley-39-2015-articulos-121-a-124", { from: 121, to: 124 }],
        ["test-ley-39-2015-articulos-125-y-126", { from: 125, to: 126 }],
      ]),
    },
    {
      themeNumber: "34",
      theoryId: "tema-34-responsabilidad-administraciones-publicas",
      cardTitle: "Responsabilidad de las Administraciones Públicas.",
      pdf: "tema-34-responsabilidad-administraciones.pdf",
      pages: 5,
      selections: new Map([
        ["test-ley-40-2015-articulos-32-y-33", { from: 32, to: 33 }],
        ["test-ley-40-2015-articulos-34-a-37", { from: 34, to: 37 }],
      ]),
    },
  ];

  configurations.forEach((configuration) => {
    const theory = resources.find((resource) => resource.id === configuration.theoryId);
    const themeResources = resources.filter(
      (resource) => resource.classification.tema.numero === configuration.themeNumber,
    );
    const themeTests = themeResources.filter((resource) => resource.type === "test");

    assert.ok(theory);
    assert.equal(theory.type, "teoria");
    assert.equal(theory.title, configuration.cardTitle);
    assert.equal(theory.data.fuente.archivo, configuration.pdf);
    assert.equal(theory.data.fuente.paginas, configuration.pages);
    assert.equal(themeTests.length, configuration.selections.size);
    assert.equal(themeResources[0].type, "teoria");
    themeTests.forEach((resource) => {
      assert.equal(resource.relatedTheory.resourceId, theory.id);
      assert.deepEqual(resource.relatedTheory.selection, {
        articles: configuration.selections.get(resource.id),
      });
    });
  });
  assert.deepEqual(validateResources(resources), []);
});

test("los recursos de teoría declaran un título breve estable para su ficha", () => {
  const theories = resources.filter((resource) => resource.type === "teoria");

  assert.ok(theories.length > 0);
  theories.forEach((resource) => {
    assert.equal(resource.title, resource.data.cardTitle);
    assert.equal(resource.data.numeroTema, undefined);
  });
});

test("las novedades tienen identificadores y fechas válidas", () => {
  assert.deepEqual(validateUpdates(updates), []);
  assert.equal(new Set(updates.map((update) => update.id)).size, updates.length);
  assert.ok(updates.every((update) => Number.isFinite(Date.parse(update.publishedAt))));

  const invalidUpdates = [
    { ...updates[0], publishedAt: "fecha-no-válida" },
    { ...updates[0] },
    { ...updates[0], id: "ID no estable" },
  ];
  const errors = validateUpdates(invalidUpdates);
  assert.ok(errors.some((error) => error.includes("identificador estable")));
  assert.ok(errors.some((error) => error.includes("publishedAt")));
  assert.ok(errors.some((error) => error.includes("duplicado")));
});

test("el catálogo de oposiciones exige identificadores y portadas válidos", () => {
  const duplicate = {
    ...oppositions[0],
    legacyIds: [],
  };
  const invalid = {
    ...oppositions[0],
    id: "Otra oposición",
    legacyIds: [oppositions[0].id],
    covers: { ...oppositions[0].covers, themes: "../portada.jpg" },
  };
  const invalidSections = {
    ...oppositions[1],
    sections: oppositions[1].sections.map((section) => ({
      ...section,
      order: 1,
    })),
  };
  const missingSections = {
    ...oppositions[0],
    id: "oposicion-sin-apartados",
    legacyIds: [],
    sections: undefined,
  };
  const errors = validateOppositions([
    duplicate,
    invalid,
    invalidSections,
    missingSections,
  ]);

  assert.ok(errors.some((error) => error.includes("formato estable")));
  assert.ok(errors.some((error) => error.includes("duplicado")));
  assert.ok(errors.some((error) => error.includes(".order")));
  assert.ok(errors.some((error) => error.includes("es obligatorio")));
  assert.ok(errors.some((error) => error.includes("nombre de archivo seguro")));
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
  invalidResource.sourceClassification = {
    ...invalidResource.sourceClassification,
    grupo: "Grupo distinto",
  };
  const errors = validateResources([invalidResource]);

  assert.ok(errors.some((error) => error.includes(".author")));
  assert.ok(errors.some((error) => error.includes(".classification")));
  assert.ok(errors.some((error) => error.includes(".sourceClassification")));
});

test("la validación vincula cada recurso con un apartado declarado", () => {
  const invalidResource = structuredClone(
    resources.find(
      (resource) =>
        resource.opposition.id ===
        "osakidetza-tecnico-especialista-informatica-c1",
    ),
  );
  invalidResource.classification.tema.numero = "apartado-inexistente";
  invalidResource.data.clasificacion.tema.numero = "apartado-inexistente";
  const errors = validateResources([invalidResource], oppositions);

  assert.ok(
    errors.some((error) =>
      error.includes("no existe en los apartados de la oposición"),
    ),
  );
});

test("la validación protege la configuración de los tests configurables", () => {
  const configurable = structuredClone(
    resources.find((resource) => resource.questionSelection?.type === "random-count"),
  );
  configurable.includeInCombinedTest = true;
  configurable.defaultOrder = "natural";
  configurable.questionSelection.count = configurable.data.preguntas.length + 1;
  const errors = validateResources([configurable]);

  assert.ok(errors.some((error) => error.includes("includeInCombinedTest")));
  assert.ok(errors.some((error) => error.includes("defaultOrder")));
  assert.ok(errors.some((error) => error.includes("questionSelection.count")));
});

test("la validación rechaza tipos, fuentes y estados de solución no soportados", () => {
  const source = structuredClone(
    resources.find((resource) => resource.type === "test"),
  );
  source.data.fuente.archivo = "documento.pdf.pdf";
  source.data.fuente.paginas = 0;
  source.data.estado = "pendiente";
  const unsupported = {
    ...structuredClone(source),
    id: "recurso-no-soportado",
    type: "video",
  };

  const errors = validateResources([source, unsupported]);

  assert.ok(errors.some((error) => error.includes(".type: no está soportado")));
  assert.ok(errors.some((error) => error.includes("extensión PDF repetida")));
  assert.ok(errors.some((error) => error.includes(".paginas")));
  assert.ok(errors.some((error) => error.includes(".estado")));
});

test("la auditoría informa de duplicados sin invalidar el catálogo", () => {
  const original = structuredClone(
    resources.find((resource) => resource.type === "test"),
  );
  original.data.preguntas = original.data.preguntas.slice(0, 1);
  const repeated = structuredClone(original);
  repeated.id = "test-duplicado-controlado";
  repeated.data.id = repeated.id;
  repeated.title = "Test duplicado controlado";
  repeated.data.titulo = repeated.title;

  const duplicates = findDuplicateQuestions([original, repeated]);
  const notices = auditResources([original, repeated]);

  assert.equal(duplicates.length, 1);
  assert.equal(notices.length, 1);
  assert.ok(
    notices[0].includes(`${original.id}#${original.data.preguntas[0].id}`),
  );
  assert.deepEqual(validateResources(resources, oppositions), []);
});

test("los tests completos derivados respetan el contrato de recursos", () => {
  const repository = new ResourceRepository(
    resources,
    oppositions,
    questionBanks,
  );
  const combined = repository.resources.filter(
    (resource) => resource.variant === "complete",
  );

  assert.ok(combined.length > 0);
  assert.ok(
    combined.every(
      (resource) =>
        resource.includeInCombinedTest === false &&
        resource.sourceClassification &&
        resource.data.fuente.tipo === "recopilacion",
    ),
  );
  assert.deepEqual(
    validateResources(
      repository.resources,
      oppositions,
      authors,
      questionBanks,
    ),
    [],
  );
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

test("la revisión presenta respuestas y explicaciones como un informe", () => {
  const source = tests.find(
    (candidate) => candidate.explicaciones?.preguntas?.length >= 3,
  );
  const testData = { ...source, preguntas: source.preguntas.slice(0, 3) };
  const incorrectOption = testData.preguntas[1].opciones.find(
    (option) => option.id !== testData.preguntas[1].respuestaCorrecta,
  );
  const result = {
    answers: {
      [String(testData.preguntas[0].id)]: testData.preguntas[0].respuestaCorrecta,
      [String(testData.preguntas[1].id)]: incorrectOption.id,
    },
  };
  const root = { innerHTML: "" };

  renderReview(root, testData, result, { backHref: "#/recursos" });

  assert.match(root.innerHTML, /data-review-filter="all"/);
  assert.match(root.innerHTML, /data-review-filter="incorrect"/);
  assert.match(root.innerHTML, /data-review-filter="unanswered"/);
  assert.match(root.innerHTML, /data-review-state="correct"/);
  assert.match(root.innerHTML, /data-review-state="incorrect"/);
  assert.match(root.innerHTML, /data-review-state="unanswered"/);
  assert.match(root.innerHTML, /class="review-option is-correct"/);
  assert.match(root.innerHTML, /class="review-option is-selected-incorrect"/);
  testData.preguntas.forEach((question) => {
    question.opciones.forEach((option) => {
      assert.ok(root.innerHTML.includes(option.texto));
    });
  });
  assert.match(root.innerHTML, /Mostrar explicación/);
  assert.match(root.innerHTML, /Motivo de la respuesta correcta/);
  assert.doesNotMatch(root.innerHTML, /Comprender la respuesta/);
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

test("los tests configurables de Osakidetza seleccionan preguntas sin alterar la batería", () => {
  questionBanks.forEach((source) => {
    const range = parseQuestionRange("103-109", source.preguntas.length);
    const rangedTest = selectQuestionRange(source, range);
    const randomTest = selectRandomQuestions(source, 50, () => 0);
    const restoredTest = selectQuestionsByOrder(
      source,
      randomTest.preguntas.map((question) => question.id),
    );

    assert.deepEqual(range, { from: 103, to: 109 });
    assert.equal(parseQuestionRange("109-103", source.preguntas.length), null);
    assert.equal(
      parseQuestionRange(`1-${source.preguntas.length + 1}`, source.preguntas.length),
      null,
    );
    assert.deepEqual(
      rangedTest.preguntas.map((question) => question.id),
      [103, 104, 105, 106, 107, 108, 109],
    );
    assert.equal(randomTest.preguntas.length, 50);
    assert.equal(new Set(randomTest.preguntas.map((question) => question.id)).size, 50);
    assert.deepEqual(
      restoredTest.preguntas.map((question) => question.id),
      randomTest.preguntas.map((question) => question.id),
    );
  });
});

test("la fábrica de intentos conserva selección, orden y ruta de repetición", () => {
  const repository = new ResourceRepository(
    resources,
    oppositions,
    questionBanks,
  );
  const randomResource = resources.find(
    (resource) => resource.questionSelection?.type === "random-count",
  );
  const rangeResource = resources.find(
    (resource) =>
      resource.questionSelection?.type === "range" &&
      resource.questionBankId === randomResource.questionBankId,
  );
  const randomAttempt = createTestAttempt(
    randomResource,
    randomResource.data,
    { random: () => 0 },
  );
  const rangeAttempt = createTestAttempt(rangeResource, rangeResource.data, {
    requestedOrder: "rango",
    requestedSelection: "103-109",
  });
  const invalidAttempt = createTestAttempt(rangeResource, rangeResource.data, {
    requestedOrder: "rango",
    requestedSelection: "109-103",
  });
  const restored = restoreTestAttempt(
    repository.getTestById(randomResource.id),
    randomAttempt.test.preguntas.map((question) => question.id),
  );

  assert.equal(randomAttempt.test.preguntas.length, 50);
  assert.equal(randomAttempt.orderMode, "aleatorio");
  assert.equal(randomAttempt.routeSuffix, "/aleatorio");
  assert.deepEqual(
    rangeAttempt.test.preguntas.map((question) => question.id),
    [103, 104, 105, 106, 107, 108, 109],
  );
  assert.equal(rangeAttempt.routeSuffix, "/rango/103-109");
  assert.ok(invalidAttempt.error);
  assert.deepEqual(
    restored.preguntas.map((question) => question.id),
    randomAttempt.test.preguntas.map((question) => question.id),
  );
});

test("las rutas hash se interpretan sin romper segmentos mal codificados", () => {
  assert.deepEqual(parseHashRoute("#/oposiciones/cuerpo%20administrativo"), [
    "oposiciones",
    "cuerpo administrativo",
  ]);
  assert.deepEqual(parseHashRoute("#/test/%E0%A4%A"), ["test", "%E0%A4%A"]);
  assert.deepEqual(parseHashRoute("#/"), []);
});

test("la cabecera contextual describe oposición, tema y test sin crear enlaces", () => {
  const repository = new ResourceRepository(
    resources,
    oppositions,
    questionBanks,
  );
  const government = repository.getOpposition(
    "gobierno-vasco-administrativo-c1",
  );
  const theme = repository.getTheme(government.id, "17");
  const resource = repository.getResources(government.id, "17")[0];
  const items = buildStudyContextItems({
    opposition: government,
    theme,
    test: resource.data,
  });

  assert.deepEqual(items.map((item) => item.key), [
    "opposition",
    "theme",
    "test",
  ]);
  assert.equal(
    items[0].value,
    "Eusko Jaurlaritza / Gobierno Vasco · Cuerpo Administrativo",
  );
  assert.equal(items[0].compactValue, items[0].value);
  assert.equal(items[1].value, "Tema 17");
  assert.equal(items[1].title, theme.titulo);
  assert.equal(items[2].value, formatDisplayTitle(resource.data.titulo));

  const osakidetza = repository.getOpposition(
    "osakidetza-tecnico-especialista-informatica-c1",
  );
  const osakidetzaItems = buildStudyContextItems({
    opposition: osakidetza,
    theme: repository.getTheme(osakidetza.id, "especifico"),
  });
  assert.equal(osakidetzaItems[1].label, "Apartado");
  assert.equal(osakidetzaItems[1].value, "Temario específico");
  assert.deepEqual(buildStudyContextItems(), []);
});

test("los temas del Gobierno Vasco se clasifican por áreas de contenido", () => {
  const ranges = [
    [1, 14, "Generales"],
    [15, 16, "Presupuesto y contabilidad"],
    [17, 18, "Personal"],
    [19, 22, "Organización y gestión administrativa"],
    [23, 26, "Atención a la ciudadanía"],
    [27, 27, "Biblioteca"],
    [28, 34, "Procedimiento administrativo"],
  ];

  assert.deepEqual(
    ranges.map(([, , category]) => category),
    GOBIERNO_VASCO_THEME_CATEGORIES,
  );
  ranges.forEach(([from, to, category]) => {
    for (let number = from; number <= to; number += 1) {
      assert.equal(gobiernoVascoThemeCategory(number), category);
    }
  });
  assert.equal(gobiernoVascoThemeCategory("comun"), undefined);

  const repository = new ResourceRepository(resources, oppositions, questionBanks);
  const opposition = repository.getOpposition("gobierno-vasco-administrativo-c1");
  const themes = repository.getThemes("gobierno-vasco-administrativo-c1");
  assert.deepEqual(opposition.themeCategories, GOBIERNO_VASCO_THEME_CATEGORIES);
  themes.forEach((theme) => {
    assert.equal(theme.category, gobiernoVascoThemeCategory(theme.numero));
  });
});

test("el portal agrupa oposiciones, temas y recursos", () => {
  const repository = new ResourceRepository(
    resources,
    oppositions,
    questionBanks,
  );
  const portalOppositions = repository.getOppositions();
  const expectedOppositionIds = new Set(
    oppositions.map((opposition) => opposition.id),
  );

  assert.equal(portalOppositions.length, expectedOppositionIds.size);

  portalOppositions.forEach((opposition) => {
    const oppositionResources = resources.filter(
      (resource) => repository.getOppositionForResource(resource.id) === opposition.id,
    );
    const themes = repository.getThemes(opposition.id);
    const expectedThemeNumbers = new Set(
      [
        ...(opposition.sections ?? []).map((section) => String(section.id)),
        ...oppositionResources.map(
          (resource) => String(resource.classification.tema.numero),
        ),
      ],
    );

    assert.equal(opposition.themeCount, expectedThemeNumbers.size);
    assert.equal(themes.length, expectedThemeNumbers.size);
    if (opposition.status === "coming-soon") {
      assert.equal(opposition.resourceCount, 0);
      assert.equal(opposition.themeCount, 0);
      return;
    }

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
        (total, resource) =>
          resource.includeInCombinedTest === false
            ? total
            : total + resource.data.preguntas.length,
        0,
      );
      const combinedResourceCount = expectedQuestionCount ? 1 : 0;

      assert.equal(theme.resourceCount, sourceResources.length + combinedResourceCount);
      assert.equal(themeResources.length, sourceResources.length + combinedResourceCount);
      if (!expectedQuestionCount) {
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

  const osakidetza = repository.getOpposition(
    "osakidetza-tecnico-especialista-informatica-c1",
  );
  assert.equal(osakidetza.administration, "Osakidetza");
  assert.equal(osakidetza.title, "Técnico/a Especialista Informática");
  assert.equal(osakidetza.group, "C1");
  assert.equal(osakidetza.scale, "Técnico/a Especialista profesional");
  assert.equal(osakidetza.status, "available");
  assert.deepEqual(
    repository.getThemes(osakidetza.id).map((section) => section.numero),
    ["comun", "especifico"],
  );
  const osakidetzaSpecificResources = repository.getResources(
    osakidetza.id,
    "especifico",
  );
  assert.equal(osakidetzaSpecificResources.length, 3);
  assert.ok(
    osakidetzaSpecificResources.every(
      (resource) =>
        resource.variant === "preset" &&
        resource.includeInCombinedTest === false,
    ),
  );
  const fullQuestionBank = osakidetzaSpecificResources.find(
    (resource) => resource.id === osakidetzaSpecificQuestionBank.id,
  );
  const randomFifty = osakidetzaSpecificResources.find(
    (resource) => resource.questionSelection?.type === "random-count",
  );
  const rangeBuilder = osakidetzaSpecificResources.find(
    (resource) => resource.questionSelection?.type === "range",
  );
  assert.deepEqual(
    fullQuestionBank.orderModes,
    ["natural", "aleatorio"],
  );
  assert.equal(randomFifty.questionSelection.count, 50);
  assert.deepEqual(randomFifty.orderModes, ["aleatorio"]);
  assert.equal(rangeBuilder.questionCountLabel, "200 disponibles");
  assert.equal(
    repository.getQuestionBankById(osakidetzaSpecificQuestionBank.id),
    osakidetzaSpecificQuestionBank,
  );
  assert.ok(
    osakidetzaSpecificResources.every(
      (resource) =>
        resource.questionBankId === osakidetzaSpecificQuestionBank.id &&
        resource.data.preguntas === osakidetzaSpecificQuestionBank.preguntas,
    ),
  );

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
  assert.equal(
    new Set(theme17SourceTests.map((resource) => resource.classification.tema.titulo)).size,
    1,
  );
});

test("el repositorio mantiene separadas dos oposiciones con temas coincidentes", () => {
  const source = resources.find((resource) => resource.type === "test");
  const secondOpposition = {
    id: "administracion-local-auxiliar-c2",
    legacyIds: [],
    administration: "Administración local",
    title: "Cuerpo Auxiliar",
    group: "C2",
    scale: "Escala Auxiliar",
    covers: {
      themes: "portada-temas-local.jpg",
      resources: "portada-recursos-local.jpg",
    },
  };
  const secondClassification = {
    oposicionId: secondOpposition.id,
    tema: {
      numero: "01",
      titulo: "Organización municipal",
    },
  };
  const secondTest = {
    ...source.data,
    id: "test-organizacion-municipal",
    titulo: "Organización municipal",
    clasificacion: secondClassification,
    preguntas: source.data.preguntas.slice(0, 2),
  };
  const { testResource } = createOppositionResourceFactory(secondOpposition);
  const secondResource = testResource(secondTest);
  const repository = new ResourceRepository([source, secondResource]);

  assert.equal(repository.getOppositions().length, 2);
  assert.ok(
    repository
      .getThemes(source.opposition.id)
      .some((theme) => theme.numero === "01"),
  );
  assert.equal(repository.getThemes(secondOpposition.id).length, 1);
  assert.equal(repository.getResources(source.opposition.id, "01").length, 2);
  assert.equal(repository.getResources(secondOpposition.id, "01").length, 2);
  assert.ok(
    repository
      .getResources(secondOpposition.id, "01")
      .every((resource) => resource.opposition.id === secondOpposition.id),
  );
});

test("los enlaces anteriores de la oposición siguen resolviéndose", () => {
  const repository = new ResourceRepository(resources);
  const [opposition] = oppositions;

  opposition.legacyIds.forEach((legacyId) => {
    assert.equal(repository.getOpposition(legacyId).id, opposition.id);
    assert.deepEqual(
      repository.getThemes(legacyId),
      repository.getThemes(opposition.id),
    );
  });
});

test("el tema 03 reúne sus cinco tests IVOT en un test completo", () => {
  const repository = new ResourceRepository(resources);
  const opposition = repository
    .getOppositions()
    .find((item) => repository.getTheme(item.id, "03"));
  assert.ok(opposition);
  const theme03 = repository.getTheme(opposition.id, "03");
  const theme03Resources = repository.getResources(opposition.id, "03");
  const sourceTests = theme03Resources.filter(
    (resource) => resource.type === "test" && resource.author?.id === "ivot",
  );
  const completeTest = theme03Resources.find((resource) => resource.variant === "complete");
  const expectedTestIds = [
    "test-espacio-europeo-i",
    "test-espacio-europeo-ii",
    "test-espacio-europeo-iii",
    "test-instituciones-union-europea-i",
    "test-instituciones-union-europea-ii",
  ];

  assert.ok(theme03);
  assert.ok(completeTest);
  assert.equal(sourceTests.length, 5);
  assert.equal(
    sourceTests.reduce(
      (total, resource) => total + resource.data.preguntas.length,
      0,
    ),
    121,
  );
  assert.deepEqual(
    sourceTests.map((resource) => resource.id),
    expectedTestIds,
  );
  assert.equal(completeTest.data.preguntas.length, 121);
  assert.deepEqual(
    new Set(completeTest.data.fuente.tests),
    new Set(expectedTestIds),
  );
  assert.equal(
    new Set(completeTest.data.preguntas.map((question) => question.id)).size,
    121,
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
    "./data/resources/gobierno-vasco-administrativo-c1/tema-04/teoria/tema-04-organizacion-politica-administrativa-capv.pdf",
  );
  requiredTestIds.forEach((id) => assert.ok(sourceTestIds.has(id)));
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
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-76-y-77",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-78-y-79",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-80-a-82",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-94-a-96",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-97-a-99",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-100-y-101",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-102-a-104",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulo-105",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-106-a-111",
    "test-de-la-ley-11-2022-de-empleo-publico-vasco-articulos-112-y-113",
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
  assert.equal(
    new Set(sourceTests.map((resource) => resource.classification.tema.titulo)).size,
    1,
  );
  assert.equal(sourceQuestionCount, 235);
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
  assert.equal(
    formatDisplayTitle("EUSKO JAURLARITZA / GOBIERNO VASCO"),
    "Eusko Jaurlaritza / Gobierno Vasco",
  );
  assert.equal(formatDisplayTitle("La Constitución Española"), "La Constitución Española");
});
