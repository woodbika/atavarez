import { authors } from "../data/authors.js";
import { questionBanks } from "../data/question-banks/index.js";
import { resources } from "../data/resources.js";
import { oppositions } from "../data/oppositions.js";
import { updates } from "../data/updates.js";
import { validateAuthors } from "../models/author-validator.js";
import { validateOppositions } from "../models/opposition-validator.js";
import { validateQuestionBanks } from "../models/question-bank-validator.js";
import { auditResources } from "../models/resource-auditor.js";
import { validateResources } from "../models/resource-validator.js";
import { validateUpdates } from "../models/update-validator.js";

const errors = [
  ...validateAuthors(authors),
  ...validateOppositions(oppositions),
  ...validateQuestionBanks(questionBanks, oppositions, authors),
  ...validateResources(resources, oppositions, authors, questionBanks),
  ...validateUpdates(updates),
];
const notices = auditResources(resources);

if (errors.length) {
  console.error(`El catálogo contiene ${errors.length} error(es):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exitCode = 1;
} else {
  const questionCount = resources
    .filter((resource) => resource.type === "test")
    .reduce((total, resource) => total + resource.data.preguntas.length, 0);
  const sourceQuestionCollections = [
    ...resources
      .filter(
        (resource) =>
          resource.type === "test" && resource.questionBankId === undefined,
      )
      .map((resource) => resource.data.preguntas),
    ...questionBanks.map((bank) => bank.preguntas),
  ];
  const sourceQuestionCount = sourceQuestionCollections.reduce(
    (total, questions) => total + questions.length,
    0,
  );
  const updateLabel = updates.length === 1 ? "novedad validada" : "novedades validadas";
  const oppositionLabel =
    oppositions.length === 1 ? "oposición validada" : "oposiciones validadas";
  const questionBankLabel =
    questionBanks.length === 1 ? "banco de preguntas" : "bancos de preguntas";
  console.log(
    `${oppositions.length} ${oppositionLabel}, ${authors.length} autores, ` +
      `${questionBanks.length} ${questionBankLabel}, ` +
      `${resources.length} recursos, ` +
      `${sourceQuestionCount} preguntas de origen, ${questionCount} asignaciones ` +
      `a recursos y ${updates.length} ${updateLabel}.`,
  );
  if (notices.length) {
    console.log(
      `${notices.length} posible(s) duplicado(s) detectado(s) para revisión manual.`,
    );
  }
}
