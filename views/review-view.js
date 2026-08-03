import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { backLink, questionCount, themeDisclosure } from "./layout.js";

function stateFor(question, selected) {
  if (!selected) return { key: "unanswered", label: "Sin responder" };
  if (selected === question.respuestaCorrecta) return { key: "correct", label: "Correcta" };
  return { key: "incorrect", label: "Incorrecta" };
}

function statusIcon(state) {
  if (state === "correct") {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"></path></svg>';
  }
  if (state === "incorrect") {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 7 10 10M17 7 7 17"></path></svg>';
  }
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 12h10"></path></svg>';
}

function theoryNoteIcon() {
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 8v5M12 17h.01"></path><circle cx="12" cy="12" r="9"></circle></svg>';
}

function renderTheoryNote(note) {
  if (!note) return "";
  return `
    <aside class="review-theory-note" aria-label="Advertencia sobre la teoría">
      <span class="review-theory-note-icon">${theoryNoteIcon()}</span>
      <div>
        <p class="review-theory-note-title">${escapeHtml(note.titulo)}</p>
        <p>${escapeHtml(note.texto)}</p>
      </div>
    </aside>
  `;
}

function renderTheoryReference(reference) {
  if (!reference) return "";
  const prefix = reference.alcance === "contextual"
    ? "Contexto teórico"
    : "Referencia teórica";
  return `
    <p class="review-explanation-reference">
      <span>${prefix}</span>
      ${escapeHtml(reference.etiqueta)}
    </p>
  `;
}

function renderOptions(question, selected) {
  return `
    <ol class="review-options" aria-label="Opciones de la pregunta">
      ${question.opciones.map((option) => {
        const isCorrect = option.id === question.respuestaCorrecta;
        const isSelected = option.id === selected;
        const isSelectedIncorrect = isSelected && !isCorrect;
        const stateClass = isCorrect
          ? "is-correct"
          : isSelectedIncorrect
            ? "is-selected-incorrect"
            : "";
        const stateIcon = isCorrect
          ? statusIcon("correct")
          : isSelectedIncorrect
            ? statusIcon("incorrect")
            : "";
        const stateLabel = isCorrect
          ? "Respuesta correcta"
          : isSelectedIncorrect
            ? "Tu respuesta"
            : "";
        return `
          <li class="review-option ${stateClass}">
            <span class="review-option-letter" aria-hidden="true">${escapeHtml(String(option.id).toLocaleUpperCase("es"))}</span>
            <span class="review-option-text">${escapeHtml(option.texto)}</span>
            ${stateIcon
              ? `<span class="review-option-state" aria-label="${stateLabel}" title="${stateLabel}">${stateIcon}</span>`
              : ""}
          </li>
        `;
      }).join("")}
    </ol>
  `;
}

function renderExplanation(question, explanation) {
  if (!explanation) return "";
  const discardedOptions = question.opciones.filter(
    (option) => option.id !== question.respuestaCorrecta,
  );
  return `
    <details class="review-explanation">
      <summary>
        <span>Mostrar explicación</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 10 4 4 4-4"></path></svg>
      </summary>
      <div class="review-explanation-content">
        ${renderTheoryReference(explanation.referencia)}
        ${renderTheoryNote(explanation.notaRevision)}
        <p class="review-explanation-label">Motivo de la respuesta correcta</p>
        <p>${escapeHtml(explanation.justificacion)}</p>
        <p class="review-explanation-label">Por qué no son correctas las demás</p>
        <ul>
          ${discardedOptions.map((option) => `
            <li>
              <span class="review-answer-key">${escapeHtml(String(option.id).toLocaleUpperCase("es"))}</span>
              <div>
                <strong>${escapeHtml(option.texto)}</strong>
                <p>${escapeHtml(explanation.descartes[option.id])}</p>
              </div>
            </li>
          `).join("")}
        </ul>
      </div>
    </details>
  `;
}

export function renderReview(root, test, result, { backHref }) {
  const explanationByQuestionId = new Map(
    (test.explicaciones?.preguntas ?? []).map((explanation) => [
      String(explanation.preguntaId),
      explanation,
    ]),
  );
  root.innerHTML = `
    ${backLink(`#/resultados/${encodeURIComponent(test.id)}`, "Volver al resultado", { className: "view-back-link" })}
    <section class="review-shell view-layout view-layout-wide" aria-labelledby="review-title">
      <header class="review-heading review-hero study-heading view-heading view-heading-cover">
        <p class="eyebrow">Revisión completa</p>
        <h1 id="review-title">Revisa tus respuestas</h1>
        ${themeDisclosure(test)}
        <p class="study-heading-context">${escapeHtml(formatDisplayTitle(test.titulo))}</p>
        ${questionCount(test)}
      </header>

      <div class="resource-filter-bar review-filter-bar" role="group" aria-label="Filtrar respuestas revisadas">
        <span>Filtrar por</span>
        <div class="resource-filter-list">
          <button class="filter-button is-active" type="button" data-review-filter="all" aria-pressed="true">Todas</button>
          <button class="filter-button" type="button" data-review-filter="incorrect" aria-pressed="false">Incorrectas</button>
          <button class="filter-button" type="button" data-review-filter="unanswered" aria-pressed="false">Sin responder</button>
        </div>
        <span id="review-filter-status" class="sr-only" aria-live="polite"></span>
      </div>

      <ol class="review-list">
        ${test.preguntas
          .map((question, index) => {
            const selected = result.answers[String(question.id)] ?? null;
            const state = stateFor(question, selected);
            const explanation = explanationByQuestionId.get(String(question.id));
            const hasTheoryNote = Boolean(explanation?.notaRevision);
            return `
              <li class="review-summary-row${hasTheoryNote ? " has-theory-note" : ""}" data-review-state="${state.key}">
                <div class="review-summary-heading">
                  <span class="review-question-number">Pregunta ${index + 1}</span>
                  <span class="review-summary-statuses">
                    ${hasTheoryNote
                      ? `<span class="review-theory-flag">${theoryNoteIcon()} Revisar teoría</span>`
                      : ""}
                    <span class="review-outcome review-outcome-${state.key}">
                      ${statusIcon(state.key)}
                      ${state.label}
                    </span>
                  </span>
                </div>
                <h2 class="review-question-text">${escapeHtml(question.enunciado)}</h2>
                ${renderOptions(question, selected)}
                ${renderExplanation(question, explanation)}
              </li>
            `;
          })
          .join("")}
      </ol>
      <p id="review-empty" class="review-empty" hidden></p>
      <div class="view-actions view-actions-two">
        <a class="button button-primary" href="#/resultados/${encodeURIComponent(test.id)}">Volver al resultado</a>
        <a class="button button-secondary" href="${backHref}">Volver a los recursos</a>
      </div>
    </section>
  `;
}
