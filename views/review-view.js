import { escapeHtml, formatDisplayTitle } from "../utils/text.js";

function stateFor(question, selected) {
  if (!selected) return { key: "unanswered", label: "Sin responder" };
  if (selected === question.respuestaCorrecta) return { key: "correct", label: "Correcta" };
  return { key: "incorrect", label: "Incorrecta" };
}

export function renderReview(root, test, result, { backHref }) {
  root.innerHTML = `
    <a class="back-link" href="#/resultados/${encodeURIComponent(test.id)}">← Volver al resultado</a>
    <section class="review-shell" aria-labelledby="review-title">
      <header class="review-heading">
        <p class="eyebrow">Revisión completa</p>
        <h1 id="review-title">Revisa tus respuestas</h1>
        <p>${escapeHtml(formatDisplayTitle(test.titulo))}</p>
      </header>

      <ol class="review-list">
        ${test.preguntas
          .map((question, index) => {
            const selected = result.answers[String(question.id)] ?? null;
            const state = stateFor(question, selected);
            return `
              <li class="review-card review-${state.key}">
                <div class="review-card-heading">
                  <span>Pregunta ${index + 1}</span>
                  <strong class="status status-${state.key}">${state.label}</strong>
                </div>
                <h2>${escapeHtml(question.enunciado)}</h2>
                <ul class="review-options">
                  ${question.opciones
                    .map((option) => {
                      const isSelected = selected === option.id;
                      const isCorrect = question.respuestaCorrecta === option.id;
                      const labels = [isSelected ? "Tu respuesta" : "", isCorrect ? "Respuesta correcta" : ""].filter(Boolean);
                      return `
                        <li class="review-option ${isCorrect ? "answer-correct" : ""} ${isSelected && !isCorrect ? "answer-incorrect" : ""}">
                          <span class="option-letter" aria-hidden="true">${escapeHtml(option.id)}</span>
                          <span class="review-option-text">${escapeHtml(option.texto)}${labels.length ? `<small>${labels.join(" · ")}</small>` : ""}</span>
                        </li>
                      `;
                    })
                    .join("")}
                </ul>
              </li>
            `;
          })
          .join("")}
      </ol>
      <div class="review-actions">
        <a class="button button-primary" href="#/resultados/${encodeURIComponent(test.id)}">Volver al resultado</a>
        <a class="button button-secondary" href="${backHref}">Volver a los recursos</a>
      </div>
    </section>
  `;
}
