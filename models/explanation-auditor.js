const DISCOURAGED_PATTERNS = [
  [/\baltera la formulación aplicable\b/i, "fórmula genérica: «altera la formulación aplicable»"],
  [/\bel dato que resuelve la pregunta\b/i, "fórmula genérica: «el dato que resuelve la pregunta»"],
  [/\bes el dato decisivo\b/i, "fórmula genérica: «es el dato decisivo»"],
  [/\b(obviamente|evidentemente|simplemente)\b/i, "tono poco pedagógico"],
  [/\bsu contenido, aplicado\b/i, "fórmula mecánica: «su contenido, aplicado…»"],
  [/\bese criterio se aplica aquí\b/i, "repetición mecánica del enunciado"],
  [/\besta opción atribuye la respuesta a\b/i, "fórmula impersonal de atribución"],
  [/\bsustituye el matiz\b/i, "comparación genérica de opciones"],
  [/\bno coincide con el criterio establecido\b/i, "descarte genérico"],
  [/\bla alternativa cambia un elemento esencial\b/i, "comparación mecánica de alternativas"],
  [/\bdescribe un supuesto distinto\b/i, "descarte sin matiz específico"],
  [/\bpara lo preguntado\b/i, "aplicación genérica"],
  [/\bla ficha teórica tampoco permite comprobar\b/i, "limitación contextual repetitiva"],
  [/\bpermite identificar\b/i, "aplicación mecánica de la referencia"],
  [/\bla opción indicada\b/i, "referencia impersonal a la respuesta"],
];

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function longestSharedWordSequence(left, right) {
  const leftWords = normalize(left).split(/\s+/).filter(Boolean);
  const rightWords = normalize(right).split(/\s+/).filter(Boolean);
  const previous = new Array(rightWords.length + 1).fill(0);
  let longest = 0;
  leftWords.forEach((leftWord) => {
    const current = new Array(rightWords.length + 1).fill(0);
    rightWords.forEach((rightWord, index) => {
      if (leftWord === rightWord) {
        current[index + 1] = previous[index] + 1;
        longest = Math.max(longest, current[index + 1]);
      }
    });
    previous.splice(0, previous.length, ...current);
  });
  return longest;
}

function narrativeText(value) {
  return String(value ?? "")
    .replace(/«[^»]*»/g, " ")
    .replace(/\b(?:el|los)\s+artículos?\s+[\d.,\sy]+/gi, " referencia ")
    .replace(/\b(?:el|los)\s+apartados?\s+«[^»]*»/gi, " referencia ");
}

function repeatedTexts(entries) {
  const byText = new Map();
  entries.forEach((entry) => {
    const key = normalize(entry.text);
    if (!key) return;
    if (!byText.has(key)) byText.set(key, []);
    byText.get(key).push(entry);
  });
  return [...byText.values()].filter((matches) => {
    if (matches.length < 2) return false;
    if (matches.every((match) => match.repeatable)) return false;
    return new Set(matches.map((match) => normalize(match.context))).size > 1;
  });
}

function isClassificationDrill(question) {
  const options = question?.opciones ?? [];
  return (
    options.every((option) => /^(?:el\s+)?artículo\s+\d+/i.test(option.texto)) ||
    options.every((option) => /derecho individual/i.test(option.texto)) ||
    (options.length === 2 &&
      options.some((option) => /comunidades autónomas podrán asumir/i.test(option.texto)) &&
      options.some((option) => /competencia exclusiva del estado/i.test(option.texto)))
  );
}

function textQualityErrors(text, path) {
  const errors = [];
  const length = String(text ?? "").trim().length;
  if (length < 20) errors.push(`${path}: es demasiado breve para resultar didáctica.`);
  if (length > 700) errors.push(`${path}: supera 700 caracteres; debe ser más concisa.`);
  DISCOURAGED_PATTERNS.forEach(([pattern, description]) => {
    if (pattern.test(text)) errors.push(`${path}: utiliza ${description}.`);
  });
  return errors;
}

export function auditExplanations(resources) {
  const errors = [];
  const warnings = [];
  const stats = {
    tests: 0,
    questions: 0,
    directReferences: 0,
    contextualReferences: 0,
    theoryDiscrepancies: 0,
  };

  resources
    .filter((resource) => resource?.type === "test" && resource.data?.explicaciones)
    .forEach((resource) => {
      stats.tests += 1;
      const explanations = resource.data.explicaciones;
      const questionById = new Map(
        resource.data.preguntas.map((question) => [String(question.id), question]),
      );
      const justifications = [];
      const discards = [];

      explanations.preguntas.forEach((explanation, index) => {
        stats.questions += 1;
        const path = `${resource.id}.preguntas[${index}]`;
        const question = questionById.get(String(explanation.preguntaId));
        const repeatable = isClassificationDrill(question);
        const referenceScope = explanation.referencia?.alcance;
        if (referenceScope === "directa") stats.directReferences += 1;
        if (referenceScope === "contextual") stats.contextualReferences += 1;
        if (explanation.notaRevision) {
          stats.theoryDiscrepancies += 1;
          errors.push(
            ...textQualityErrors(
              explanation.notaRevision.texto,
              `${path}.notaRevision.texto`,
            ),
          );
        }

        errors.push(
          ...textQualityErrors(explanation.justificacion, `${path}.justificacion`),
        );
        justifications.push({
          text: explanation.justificacion,
          context: question?.enunciado,
          questionId: explanation.preguntaId,
          repeatable,
        });

        const questionDiscards = Object.entries(explanation.descartes ?? {});
        questionDiscards.forEach(([optionId, discard]) => {
          errors.push(...textQualityErrors(discard, `${path}.descartes.${optionId}`));
          discards.push({
            text: discard,
            context: `${question?.enunciado} ${optionId}`,
            questionId: explanation.preguntaId,
            repeatable,
          });
          if (
            longestSharedWordSequence(
              narrativeText(explanation.justificacion),
              narrativeText(discard),
            ) >= 16
          ) {
            errors.push(
              `${path}: la justificación y el descarte ${optionId} repiten una frase extensa.`,
            );
          }
        });

        questionDiscards.forEach(([leftId, leftText], leftIndex) => {
          questionDiscards.slice(leftIndex + 1).forEach(([rightId, rightText]) => {
            if (
              longestSharedWordSequence(
                narrativeText(leftText),
                narrativeText(rightText),
              ) >= 14
            ) {
              errors.push(
                `${path}: los descartes ${leftId} y ${rightId} reutilizan una explicación demasiado similar.`,
              );
            }
          });
        });

        if (
          referenceScope === "contextual" &&
          !/no (?:contiene|reproduce|detalla|desarrolla|recoge|permite|ofrece|aporta|confirma|concreta|formula)|no basta|referencia contextual/i.test(
            explanation.justificacion,
          )
        ) {
          errors.push(
            `${path}.justificacion: debe aclarar el límite de una referencia contextual.`,
          );
        }
        if (
          explanation.notaRevision &&
          !/(?:mantiene|conserva|solución registrada)/i.test(explanation.justificacion)
        ) {
          errors.push(
            `${path}.justificacion: una discrepancia debe indicar que se conserva la solución registrada.`,
          );
        }
      });

      repeatedTexts(justifications).forEach((matches) => {
        errors.push(
          `${resource.id}: repite la misma justificación en las preguntas ${matches.map((item) => item.questionId).join(", ")}.`,
        );
      });
      repeatedTexts(discards).forEach((matches) => {
        warnings.push(
          `${resource.id}: repite un descarte en las preguntas ${matches.map((item) => item.questionId).join(", ")}.`,
        );
      });
    });

  return { errors, warnings, stats };
}
