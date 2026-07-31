import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { backLink, questionCount, themeDisclosure } from "./layout.js";

function stateFor(question, selected) {
  if (!selected) return { key: "unanswered", label: "Sin responder" };
  if (selected === question.respuestaCorrecta) return { key: "correct", label: "Correcta" };
  return { key: "incorrect", label: "Incorrecta" };
}

function renderExplanation(question, explanation) {
  if (!explanation) return "";
  const discardedOptions = question.opciones.filter(
    (option) => option.id !== question.respuestaCorrecta,
  );
  return `
    <details class="review-explanation">
      <summary>
        <span class="review-explanation-icon" aria-hidden="true">i</span>
        <span>Comprender la respuesta</span>
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m8 10 4 4 4-4"></path></svg>
      </summary>
      <div class="review-explanation-content">
        <section>
          <h3>Por qué es correcta</h3>
          <p>${escapeHtml(explanation.justificacion)}</p>
        </section>
        <section>
          <h3>Por qué no se eligen las demás</h3>
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
        </section>
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
            const selectedAnswer = question.opciones.find((option) => option.id === selected);
            const correctAnswer = question.opciones.find(
              (option) => option.id === question.respuestaCorrecta,
            );
            const selectedKey = selectedAnswer
              ? escapeHtml(String(selectedAnswer.id).toLocaleUpperCase("es"))
              : "—";
            const correctKey = escapeHtml(
              String(question.respuestaCorrecta).toLocaleUpperCase("es"),
            );
            return `
              <li class="review-summary-row" data-review-state="${state.key}">
                <div class="review-summary-heading">
                  <span class="review-question-number">Pregunta ${index + 1}</span>
                  <span class="status status-${state.key}">${state.label}</span>
                </div>
                <p class="review-question-text">${escapeHtml(question.enunciado)}</p>
                <dl class="review-answer-details">
                  <div>
                    <dt>Tu respuesta</dt>
                    <dd class="${state.key === "incorrect" ? "answer-incorrect" : state.key === "correct" ? "answer-correct" : "answer-unanswered"}">
                      <span class="review-answer-key">${selectedKey}</span>
                      <span>${selectedAnswer ? escapeHtml(selectedAnswer.texto) : "Sin responder"}</span>
                    </dd>
                  </div>
                  <div>
                    <dt>Respuesta correcta</dt>
                    <dd class="answer-correct">
                      <span class="review-answer-key">${correctKey}</span>
                      <span>${correctAnswer ? escapeHtml(correctAnswer.texto) : "No disponible"}</span>
                    </dd>
                  </div>
                </dl>
                ${renderExplanation(
                  question,
                  explanationByQuestionId.get(String(question.id)),
                )}
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
