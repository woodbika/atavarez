import { isNonEmptyString } from "../utils/validation.js";

export function validateQuestions(questions, path, errors) {
  if (!Array.isArray(questions) || questions.length === 0) {
    errors.push(`${path}: debe contener al menos una pregunta.`);
    return;
  }

  const questionIds = new Set();
  questions.forEach((question, questionIndex) => {
    const questionPath = `${path}[${questionIndex}]`;
    const questionId = String(question?.id ?? "");
    if (!questionId) errors.push(`${questionPath}.id: es obligatorio.`);
    else if (questionIds.has(questionId)) {
      errors.push(`${questionPath}.id: está duplicado.`);
    } else {
      questionIds.add(questionId);
    }

    if (!isNonEmptyString(question?.enunciado)) {
      errors.push(`${questionPath}.enunciado: debe contener texto.`);
    }
    if (!Array.isArray(question?.opciones) || question.opciones.length < 2) {
      errors.push(`${questionPath}.opciones: debe contener al menos dos opciones.`);
      return;
    }

    const optionIds = new Set();
    question.opciones.forEach((option, optionIndex) => {
      const optionPath = `${questionPath}.opciones[${optionIndex}]`;
      const optionId = option?.id;
      if (!isNonEmptyString(optionId)) {
        errors.push(`${optionPath}.id: debe ser texto.`);
      } else if (optionIds.has(optionId)) {
        errors.push(`${optionPath}.id: está duplicado.`);
      } else {
        optionIds.add(optionId);
      }
      if (!isNonEmptyString(option?.texto)) {
        errors.push(`${optionPath}.texto: debe contener texto.`);
      }
    });

    if (!optionIds.has(question.respuestaCorrecta)) {
      errors.push(`${questionPath}.respuestaCorrecta: no coincide con ninguna opción.`);
    }
  });
}
