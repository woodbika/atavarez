import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { metadata } from "./layout.js";

function stateFor(question, selected) {
  if (!selected) return { key: "unanswered", label: "Sin responder" };
  if (selected === question.respuestaCorrecta) return { key: "correct", label: "Correcta" };
  return { key: "incorrect", label: "Incorrecta" };
}

export function renderReview(root, test, result, { backHref }) {
  root.innerHTML = `
    <a class="back-link view-back-link" href="#/resultados/${encodeURIComponent(test.id)}">← Volver al resultado</a>
    <section class="review-shell view-layout view-layout-wide" aria-labelledby="review-title">
      <header class="review-heading review-hero study-heading view-heading view-heading-cover">
        <p class="eyebrow">Revisión completa</p>
        <h1 id="review-title">Revisa tus respuestas</h1>
        <p class="study-heading-context">${escapeHtml(formatDisplayTitle(test.titulo))}</p>
        ${metadata(test)}
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
