import {
  EXPLANATION_REFERENCE_SCOPES,
  articleReference,
  blockReference,
  defineExplanationSet,
} from "../explanation-schema.js";
import { formatDisplayTitle } from "../../../utils/text.js";

const STOP_WORDS = new Set([
  "para", "como", "esta", "este", "estos", "estas", "desde", "entre", "sobre",
  "segun", "cuando", "donde", "cual", "cuales", "quien", "quienes", "porque",
  "puede", "pueden", "debe", "deben", "sera", "seran", "tiene", "tienen",
  "respuesta", "respuestas", "correcta", "correctas", "incorrecta", "incorrectas",
  "articulo", "apartado", "siguiente", "siguientes", "senalara", "senale",
  "cualquier", "mismo", "misma", "propio", "propia",
]);

function normalize(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokens(value) {
  return normalize(value)
    .split(/\s+/)
    .filter((token) => token.length >= 4 && !STOP_WORDS.has(token));
}

function cleanText(value) {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .replace(/^[•·–—-]+\s*/, "")
    .trim();
}

function cleanOptionText(value) {
  return cleanText(value).replace(/[.;:]$/, "");
}

function compactQuestionFocus(question, maxWords = 14) {
  const words = cleanOptionText(question.enunciado)
    .replace(/\bse puede nombra\b/i, "se puede nombrar")
    .replace(/^(señal(?:a|e)|indica|es correcto señalar)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean);
  const focus = words.slice(0, maxWords).join(" ");
  const result = words.length > maxWords ? `${focus}…` : focus;
  return /^(es correcto señalar|es incorrecto señalar|señalar la respuesta correcta)$/i.test(
    result,
  )
    ? ""
    : result;
}

function quotedSummary(value, maxLength = 140) {
  const text = cleanOptionText(value);
  return `«${text.length > maxLength ? `${text.slice(0, maxLength - 1).trimEnd()}…` : text}»`;
}

function applicationPhrase(focus) {
  return focus ? `aplicado a «${focus}»` : "aplicado al supuesto planteado";
}

function optionDifference(value, comparison) {
  const comparisonTokens = new Set(normalize(comparison).split(/\s+/));
  return cleanOptionText(value)
    .split(/\s+/)
    .filter((word) => {
      const normalizedWord = normalize(word);
      return (
        normalizedWord.length >= 3 &&
        !STOP_WORDS.has(normalizedWord) &&
        !comparisonTokens.has(normalizedWord)
      );
    })
    .slice(0, 7)
    .join(" ");
}

function sentenceCase(value) {
  return formatDisplayTitle(cleanText(value));
}

function collectTextEntries(node, entries = []) {
  if (Array.isArray(node)) {
    node.forEach((item) => collectTextEntries(item, entries));
    return entries;
  }
  if (!node || typeof node !== "object") return entries;

  if (typeof node.titulo === "string") entries.push(node.titulo);
  if (typeof node.texto === "string") entries.push(node.texto);
  Object.entries(node).forEach(([key, value]) => {
    if (key !== "titulo" && key !== "texto") collectTextEntries(value, entries);
  });
  return entries;
}

function collectTheoryCandidates(theory) {
  const candidates = [];

  function visit(
    node,
    blockTitle = "la teoría del tema",
    blockId = null,
  ) {
    if (Array.isArray(node)) {
      node.forEach((item) => visit(item, blockTitle, blockId));
      return;
    }
    if (!node || typeof node !== "object") return;

    const currentBlockTitle = node.titulo || blockTitle;
    const currentBlockId = node.id || blockId;
    if (Array.isArray(node.articulos)) {
      node.articulos.forEach((article) => {
        const articleNumber = Number(article.numero);
        const label = Number.isFinite(articleNumber)
          ? `el artículo ${articleNumber}`
          : `el apartado «${sentenceCase(currentBlockTitle)}»`;
        collectTextEntries(article).forEach((text) => {
          candidates.push({
            articleNumber,
            blockId: currentBlockId,
            blockTitle: currentBlockTitle,
            label,
            text: cleanText(text),
          });
        });
      });
      return;
    }

    if (Array.isArray(node.contenido)) {
      collectTextEntries(node.contenido).forEach((text) => {
        candidates.push({
          articleNumber: null,
          blockId: currentBlockId,
          blockTitle: currentBlockTitle,
          label: `el apartado «${sentenceCase(currentBlockTitle)}»`,
          text: cleanText(text),
        });
      });
      visit(node.contenido, currentBlockTitle, currentBlockId);
    }

    Object.entries(node).forEach(([key, value]) => {
      if (key !== "contenido" && key !== "titulo" && key !== "texto") {
        visit(value, currentBlockTitle, currentBlockId);
      }
    });
  }

  visit(theory.bloques || theory);
  return candidates.filter((candidate) => candidate.text);
}

function overlapScore(value, queryTokens) {
  const candidateTokens = new Set(tokens(value));
  return queryTokens.reduce(
    (score, token) => score + (candidateTokens.has(token) ? Math.min(token.length, 10) : 0),
    0,
  );
}

function asksForIncorrectAnswer(prompt) {
  return /incorrect|excepto|no es correcta|no son correctas|no corresponde|no tiene|no se (?:incorpora|incluye|considera)|no puede|no podra|no debe/.test(
    normalize(prompt),
  );
}

function scoreCandidate(candidate, queryText, explicitArticle) {
  if (explicitArticle && candidate.articleNumber !== explicitArticle) {
    return { score: -1, supported: false };
  }
  const candidateText = normalize(candidate.text);
  const correctText = normalize(queryText.correct);
  const promptTokens = tokens(queryText.prompt);
  const correctTokens = tokens(queryText.correct);
  const promptScore = overlapScore(candidate.text, promptTokens);
  const correctScore = overlapScore(candidate.text, correctTokens);
  const correctWeight = correctTokens.reduce(
    (total, token) => total + Math.min(token.length, 10),
    0,
  );
  const correctCoverage = correctWeight ? correctScore / correctWeight : 0;
  const exactCorrect = correctText.length >= 8 && candidateText.includes(correctText);
  const correctArticle = correctText.match(/^(?:articulo\s+)?(\d+)/);
  const answerTargetsArticle =
    correctText.startsWith("articulo ") ||
    /(?:en|a) que articulo|que articulo/.test(normalize(queryText.prompt));
  const labelMatches =
    answerTargetsArticle &&
    Boolean(correctArticle) &&
    candidate.articleNumber === Number(correctArticle?.[1]);
  let score = promptScore + correctScore * 2;

  if (exactCorrect) score += 120;
  if (labelMatches) score += 80;
  if (/\d/.test(queryText.correct)) {
    const numbers = normalize(queryText.correct).match(/\d+/g) || [];
    numbers.forEach((number) => {
      if (candidateText.split(" ").includes(number)) score += 18;
    });
  }
  return {
    exactCorrect,
    labelMatches,
    promptScore,
    correctScore,
    correctCoverage,
    score,
    supported:
      exactCorrect ||
      labelMatches ||
      (promptScore >= 8 && correctScore >= 8),
  };
}

function preferredInstitution(prompt) {
  const normalizedPrompt = normalize(prompt);
  const institutions = [
    ["tribunal de cuentas", ["tribunal", "cuentas"]],
    ["tribunal de justicia", ["tribunal", "justicia"]],
    ["consejo europeo", ["consejo", "europeo"]],
    ["comision", ["comision"]],
    ["parlamento", ["parlamento"]],
    ["banco central", ["banco", "central"]],
    ["consejo", ["consejo", "decision"]],
  ];
  return institutions.find(([name]) => normalizedPrompt.includes(name))?.[1] || null;
}

function findExplicitArticle(prompt, availableArticles) {
  const match = normalize(prompt).match(/articulo\s+(\d+)/);
  if (!match) return null;
  const articleNumber = Number(match[1]);
  return availableArticles.has(articleNumber) ? articleNumber : null;
}

function selectTheoryReference(
  question,
  correctOption,
  candidates,
  fallbackLabel,
  fallbackReference,
  fallbackScope,
) {
  const availableArticles = new Set(
    candidates.map((candidate) => candidate.articleNumber).filter(Number.isFinite),
  );
  const explicitArticle = findExplicitArticle(question.enunciado, availableArticles);
  const queryText = {
    prompt: question.enunciado,
    correct: correctOption.texto,
  };
  const correctCombinesOptions = /^(ambas|todas)/i.test(
    cleanOptionText(correctOption.texto),
  );
  const institutionKeywords = preferredInstitution(
    `${question.enunciado} ${correctOption.texto}`,
  );
  const institutionCandidates = institutionKeywords
    ? candidates.filter((candidate) => {
        const label = normalize(candidate.label);
        return institutionKeywords.every((keyword) => label.includes(keyword));
      })
    : [];
  const scopedCandidates = institutionCandidates.length ? institutionCandidates : candidates;
  const rankedCandidates = scopedCandidates
    .map((candidate) => {
      const assessment = scoreCandidate(candidate, queryText, explicitArticle);
      return { ...candidate, ...assessment };
    })
    .sort((left, right) => right.score - left.score);
  const reference = rankedCandidates[0];
  if (!reference || !reference.supported || correctCombinesOptions) {
    if (fallbackLabel) {
      const referenceScope =
        fallbackReference?.alcance ??
        fallbackScope ??
        EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL;
      return {
        ...(reference ?? {}),
        articleNumber: fallbackReference?.articulos?.[0] ?? reference?.articleNumber ?? null,
        label:
          referenceScope === EXPLANATION_REFERENCE_SCOPES.DIRECT && reference?.label
            ? reference.label
            : fallbackLabel,
        text: "",
        score: 0,
        explicitReference: fallbackReference,
        referenceScope,
      };
    }
    throw new Error(`No se ha encontrado apoyo teórico para la pregunta ${question.id}.`);
  }
  return reference;
}

function dataReference(reference) {
  if (reference.explicitReference) return reference.explicitReference;
  if (Number.isFinite(reference.articleNumber)) {
    return articleReference(reference.articleNumber, {
      scope: reference.referenceScope,
    });
  }
  if (reference.blockId) {
    return blockReference(
      reference.blockId,
      sentenceCase(reference.blockTitle || reference.label),
      { scope: reference.referenceScope },
    );
  }
  throw new Error(`La referencia «${reference.label}» no tiene un localizador verificable.`);
}

function compactEvidence(reference, question, correctOption) {
  const evidence = cleanText(reference.text);
  if (evidence.length <= 180) return evidence;

  const queryTokens = tokens(`${question.enunciado} ${correctOption.texto}`);
  const clauses = evidence
    .split(/(?<=[.;:])\s+|,\s+(?=[A-ZÁÉÍÓÚÑ])/)
    .map(cleanText)
    .filter((clause) => clause.length >= 24);
  const bestClause = clauses
    .map((clause) => ({
      clause,
      score: queryTokens.reduce(
        (score, token) => score + (normalize(clause).includes(token) ? token.length : 0),
        0,
      ),
    }))
    .sort((left, right) => right.score - left.score)[0]?.clause;
  if (bestClause && bestClause.length <= 200) return bestClause;
  return `La formulación relevante es «${cleanOptionText(correctOption.texto)}»`;
}

function sourceWithPreposition(label) {
  if (label.startsWith("el ")) return `del ${label.slice(3)}`;
  if (label.startsWith("la ")) return `de la ${label.slice(3)}`;
  if (label.startsWith("los ")) return `de los ${label.slice(4)}`;
  if (label.startsWith("las ")) return `de las ${label.slice(4)}`;
  return `de ${label}`;
}

function sourceVerb(label, singular, plural) {
  return /^(los|las)\s/.test(label) ? plural : singular;
}

function sourceIntroduction(label, index) {
  const introductions = [
    `La clave está en ${label}:`,
    `Aquí conviene fijarse en ${label}:`,
    `En este caso, ${label} ${sourceVerb(label, "da", "dan")} la pauta:`,
  ];
  return introductions[index % introductions.length];
}

function correctJustification(question, correctOption, reference, questionIndex) {
  const correct = cleanOptionText(correctOption.texto);
  const prompt = normalize(question.enunciado);
  const focus = compactQuestionFocus(question);
  if (!reference.text) {
    const answerReference = correct.length > 90 ? "la respuesta marcada" : `«${correct}»`;
    if (reference.referenceScope === EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL) {
      const subject = focus ? `«${focus}»` : "esta pregunta";
      return `La ficha teórica sitúa ${subject} en ${reference.label}, pero no reproduce literalmente su solución. El test registra ${answerReference}.`;
    }
    if (asksForIncorrectAnswer(prompt)) {
      return `${sourceIntroduction(reference.label, questionIndex)} su contenido, ${applicationPhrase(focus)}, muestra que ${answerReference} es la alternativa que no encaja.`;
    }
    return `${sourceIntroduction(reference.label, questionIndex)} su contenido, ${applicationPhrase(focus)}, conduce a ${answerReference}.`;
  }
  const evidence = compactEvidence(reference, question, correctOption).replace(/[.]$/, "");
  const asksForIncorrect = asksForIncorrectAnswer(prompt);

  if (asksForIncorrect) {
    const answerReference = correct.length > 90 ? "la respuesta marcada" : `«${correct}»`;
    if (evidence.startsWith("La formulación relevante es")) {
      return `La regulación ${sourceWithPreposition(reference.label)} es distinta en ${focus ? `«${focus}»` : "el supuesto planteado"}; por eso ${answerReference} debe señalarse como incorrecta.`;
    }
    return `${reference.label} establece una regulación distinta para ${focus ? `«${focus}»` : "el supuesto planteado"}: ${evidence}. Por eso debe señalarse ${answerReference}.`;
  }

  if (
    reference.exactCorrect ||
    reference.correctCoverage >= 0.75 ||
    evidence.startsWith("La formulación relevante es")
  ) {
    return `${sourceIntroduction(reference.label, questionIndex)} su contenido, ${applicationPhrase(focus)}, respalda «${correct}».`;
  }

  if (/^(ambas|todas)/i.test(correct)) {
    return `${reference.label} permite aceptar conjuntamente las afirmaciones planteadas${focus ? ` sobre «${focus}»` : ""}.`;
  }
  return `${sourceIntroduction(reference.label, questionIndex)} ${evidence}. Ese contenido, ${applicationPhrase(focus)}, conduce a «${correct}».`;
}

function discardedJustification(question, option, correctOption, reference) {
  const prompt = normalize(question.enunciado);
  const discarded = cleanOptionText(option.texto);
  const correct = cleanOptionText(correctOption.texto);
  const focus = compactQuestionFocus(question, 10);
  const focusContext = focus ? ` Ese criterio se aplica aquí a «${focus}».` : "";
  const discardedReference = quotedSummary(discarded);
  const correctReference = correct.length > 70 ? "la respuesta marcada" : `«${correct}»`;
  const asksForIncorrect = asksForIncorrectAnswer(prompt);
  const correctCombinesOptions = /^(ambas|todas)/i.test(correct);
  const discardedCombinesOptions = /^(ambas|todas)/i.test(discarded);
  const asksForAmount =
    /anos|meses|plazo|mayoria|porcentaje|partes|numero|cuant/.test(prompt) ||
    (/\d/.test(discarded) && /\d/.test(correct));
  const asksForAttribution =
    /quien|por quien|corresponde|compete|garantiz|atribu|ejerce|dirige|administra|elabora|aprueba|autoriza|control|nombra|designa/.test(
      prompt,
    );

  if (reference.referenceScope === EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL) {
    const subject = focus ? `para la cuestión «${focus}»` : "en esta pregunta";
    return `La ficha no aporta una regla directa para validar ${discardedReference}; ${subject}, el test la descarta frente a su solución registrada.`;
  }

  if (asksForIncorrect) {
    return `${discardedReference} sí es compatible con ${reference.label}; por eso no debe señalarse como incorrecta.${focusContext}`;
  }
  if (correctCombinesOptions) {
    return `${discardedReference} recoge solo una parte. La referencia permite aceptar conjuntamente las afirmaciones planteadas.${focusContext}`;
  }
  if (discardedCombinesOptions) {
    return `No pueden aceptarse todas las afirmaciones: ${reference.label} solo respalda ${correctReference}.${focusContext}`;
  }
  if (asksForAmount) {
    return `Para «${focus}», el valor ${discardedReference} no coincide con ${reference.label}; corresponde ${correctReference}.`;
  }
  if (asksForAttribution) {
    return `Esta opción atribuye la respuesta a ${discardedReference}, pero ${reference.label} ${sourceVerb(reference.label, "señala", "señalan")} ${correctReference}.${focusContext}`;
  }
  const normalizedDiscarded = normalize(discarded);
  const normalizedCorrect = normalize(correct);
  if (normalizedCorrect.includes(normalizedDiscarded)) {
    return `${discardedReference} es incompleta: omite una condición que sí exige ${reference.label}.${focusContext}`;
  }
  if (normalizedDiscarded.includes(normalizedCorrect)) {
    return `${discardedReference} añade una condición que ${reference.label} no exige.${focusContext}`;
  }
  const discardedDifference = optionDifference(discarded, correct);
  const correctDifference = optionDifference(correct, discarded);
  if (discardedDifference && correctDifference) {
    return `${discardedReference} sustituye el matiz «${correctDifference}» por «${discardedDifference}»; ese cambio no coincide con ${reference.label}.${focusContext}`;
  }
  return `${discardedReference} cambia uno de los elementos de la regla recogida en ${reference.label}.${focusContext}`;
}

export function createTheoryBasedExplanations(test, theory, options = {}) {
  const allowedArticles = options.articles
    ? new Set(
        Array.from(
          { length: options.articles.to - options.articles.from + 1 },
          (_, index) => options.articles.from + index,
        ),
      )
    : null;
  const candidates = collectTheoryCandidates(theory).filter(
    (candidate) =>
      !allowedArticles ||
      (Number.isFinite(candidate.articleNumber) &&
        allowedArticles.has(candidate.articleNumber)),
  );

  const references = {};
  const explanationSet = {
    testId: test.id,
    preguntas: test.preguntas.map((question, questionIndex) => {
      const explanationOverride = options.explanationOverrides?.[String(question.id)];
      const correctOption = question.opciones.find(
        (option) => option.id === question.respuestaCorrecta,
      );
      const forceFallback = options.fallbackQuestionIds?.includes(question.id);
      const explicitReference =
        explanationOverride?.referencia ??
        options.referenceOverrides?.[String(question.id)] ??
        options.fallbackReference;
      const reference = forceFallback
        ? {
            articleNumber: explicitReference?.articulos?.[0] ?? null,
            label:
              explicitReference?.tipo === "articulos"
                ? `el artículo ${explicitReference.articulos.join(", ")}`
                : options.fallbackLabel,
            text: "",
            score: 0,
            explicitReference,
            referenceScope:
              explicitReference?.alcance ??
              EXPLANATION_REFERENCE_SCOPES.CONTEXTUAL,
          }
        : selectTheoryReference(
            question,
            correctOption,
            candidates,
            options.fallbackLabel,
            explicitReference,
            options.fallbackScope,
          );
      references[String(question.id)] = dataReference(reference);
      const generatedDiscards = Object.fromEntries(
        question.opciones
          .filter((option) => option.id !== question.respuestaCorrecta)
          .map((option) => [
            option.id,
            discardedJustification(question, option, correctOption, reference),
          ]),
      );
      return {
        preguntaId: question.id,
        justificacion:
          explanationOverride?.justificacion ??
          correctJustification(question, correctOption, reference, questionIndex),
        descartes: {
          ...generatedDiscards,
          ...explanationOverride?.descartes,
        },
        ...(explanationOverride?.notaRevision
          ? { notaRevision: explanationOverride.notaRevision }
          : {}),
      };
    }),
  };
  return defineExplanationSet(explanationSet, {
    theoryResourceId: theory.id,
    references,
  });
}
