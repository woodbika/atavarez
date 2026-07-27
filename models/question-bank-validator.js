import { isNonEmptyString, isStableId } from "../utils/validation.js";
import { validateQuestions } from "./question-validator.js";
import { isSupportedAnswerStatus } from "./test-contract.js";

export function validateQuestionBanks(
  questionBanks,
  oppositions = [],
  authors = [],
) {
  if (!Array.isArray(questionBanks) || questionBanks.length === 0) {
    return ["questionBanks: debe contener al menos un banco de preguntas."];
  }

  const errors = [];
  const bankIds = new Set();
  const oppositionById = new Map(
    oppositions.map((opposition) => [opposition?.id, opposition]),
  );
  const authorById = new Map(authors.map((author) => [author?.id, author]));

  questionBanks.forEach((bank, index) => {
    const path = `questionBanks[${index}]`;
    if (!bank || typeof bank !== "object") {
      errors.push(`${path}: debe ser un objeto.`);
      return;
    }
    if (bank.kind !== "question-bank") {
      errors.push(`${path}.kind: debe ser question-bank.`);
    }
    if (bank.schemaVersion !== 1) {
      errors.push(`${path}.schemaVersion: debe ser 1.`);
    }
    if (!isStableId(bank.id)) {
      errors.push(`${path}.id: debe ser un identificador estable.`);
    } else if (bankIds.has(bank.id)) {
      errors.push(`${path}.id: está duplicado.`);
    } else {
      bankIds.add(bank.id);
    }
    if (!isNonEmptyString(bank.titulo)) {
      errors.push(`${path}.titulo: debe contener texto.`);
    }

    if (!isStableId(bank.autor?.id)) {
      errors.push(`${path}.autor.id: debe ser un identificador estable.`);
    } else if (!isNonEmptyString(bank.autor?.nombre)) {
      errors.push(`${path}.autor.nombre: debe contener texto.`);
    } else if (authorById.size) {
      const author = authorById.get(bank.autor.id);
      if (!author) {
        errors.push(`${path}.autor.id: no existe en el catálogo de autores.`);
      } else if (bank.autor.nombre !== author.name) {
        errors.push(`${path}.autor.nombre: no coincide con el catálogo.`);
      }
    }

    if (!isSupportedAnswerStatus(bank.estado)) {
      errors.push(`${path}.estado: debe identificar el estado de las soluciones.`);
    }
    if (
      !isNonEmptyString(bank.fuente?.archivo) ||
      !/\.pdf$/iu.test(bank.fuente.archivo) ||
      /\.pdf\.pdf$/iu.test(bank.fuente.archivo)
    ) {
      errors.push(`${path}.fuente.archivo: debe identificar un documento PDF.`);
    }
    if (!Number.isInteger(bank.fuente?.paginas) || bank.fuente.paginas < 1) {
      errors.push(`${path}.fuente.paginas: debe ser un entero positivo.`);
    }

    const oppositionId = bank.clasificacion?.oposicionId;
    if (!isStableId(oppositionId)) {
      errors.push(`${path}.clasificacion.oposicionId: debe ser estable.`);
    } else if (oppositionById.size) {
      const opposition = oppositionById.get(oppositionId);
      if (!opposition) {
        errors.push(`${path}.clasificacion.oposicionId: no existe en el catálogo.`);
      } else {
        const themeNumber = String(bank.clasificacion?.tema?.numero ?? "");
        const section = opposition.sections?.find(
          (item) => String(item.id) === themeNumber,
        );
        if (!section) {
          errors.push(`${path}.clasificacion.tema.numero: no existe en la oposición.`);
        } else if (bank.clasificacion.tema.titulo !== section.title) {
          errors.push(`${path}.clasificacion.tema.titulo: no coincide con el catálogo.`);
        }
      }
    }

    validateQuestions(bank.preguntas, `${path}.preguntas`, errors);
  });

  return errors;
}

export function assertValidQuestionBanks(
  questionBanks,
  oppositions = [],
  authors = [],
) {
  const errors = validateQuestionBanks(questionBanks, oppositions, authors);
  if (!errors.length) return;
  throw new AggregateError(
    errors.map((message) => new Error(message)),
    "Catálogo de bancos de preguntas no válido",
  );
}
