import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { metadata } from "./layout.js";

export function renderTest(root, session, { backHref, backLabel, orderMode, showOrder }) {
  const { test, currentQuestion: question, currentIndex } = session;
  const total = test.preguntas.length;
  const selected = session.selectedAnswer(question.id);
  const answeredCount = session.answeredCount();
  const progress = total ? (answeredCount / total) * 100 : 0;

  root.innerHTML = `
    <a class="back-link test-back-link" href="${backHref}" data-action="leave">← ${escapeHtml(backLabel)}</a>
    <section class="test-shell" aria-labelledby="test-title">
      <header class="test-heading">
        <p class="eyebrow">Tema ${escapeHtml(test.clasificacion.tema.numero)}${showOrder ? ` · Orden ${orderMode === "aleatorio" ? "aleatorio" : "natural"}` : ""}</p>
        <h1 id="test-title">${escapeHtml(formatDisplayTitle(test.titulo))}</h1>
        ${metadata(test)}
      </header>

      <div class="progress-block">
        <div class="progress-label">
          <span>Pregunta ${currentIndex + 1} de ${total}</span>
          <span>${answeredCount} respondidas</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Preguntas respondidas" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${answeredCount}">
          <span style="width: ${progress}%"></span>
        </div>
        <nav class="question-map" aria-label="Navegar por las preguntas">
          <span class="question-map-label">Preguntas</span>
          <div class="question-map-scroll">
            ${test.preguntas
              .map((item, index) => {
                const answered = Boolean(session.selectedAnswer(item.id));
                const current = index === currentIndex;
                const state = answered ? "respondida" : "sin responder";
                return `
                  <button
                    class="question-pill ${answered ? "is-answered" : ""} ${current ? "is-current" : ""}"
                    type="button"
                    data-question-index="${index}"
                    aria-label="Pregunta ${index + 1}, ${state}"
                    ${current ? 'aria-current="step"' : ""}
                    ${current ? "" : 'tabindex="-1"'}
                  >
                    <span>${index + 1}</span>
                    ${answered ? '<span class="question-pill-status" aria-hidden="true">✓</span>' : ""}
                  </button>
                `;
              })
              .join("")}
          </div>
        </nav>
      </div>

      <form id="question-form" class="question-card" tabindex="-1">
        <fieldset>
          <legend><span class="sr-only">Pregunta ${currentIndex + 1}: </span>${escapeHtml(question.enunciado)}</legend>
          <div class="options-list">
            ${question.opciones
              .map(
                (answer) => `
                  <label class="option ${selected === answer.id ? "is-selected" : ""}">
                    <input type="radio" name="answer" value="${escapeHtml(answer.id)}" ${selected === answer.id ? "checked" : ""}>
                    <span class="option-letter" aria-hidden="true">${escapeHtml(answer.id)}</span>
                    <span>${escapeHtml(answer.texto)}</span>
                  </label>
                `,
              )
              .join("")}
          </div>
        </fieldset>
      </form>

      <nav class="test-navigation" aria-label="Navegación entre preguntas">
        <button class="button button-secondary" type="button" data-action="previous" ${currentIndex === 0 ? "disabled" : ""}>Anterior</button>
        <div class="test-navigation-end">
          <button class="button button-secondary" type="button" data-action="next" ${currentIndex === total - 1 ? "disabled" : ""}>Siguiente</button>
          <button class="button button-primary" type="button" data-action="finish">Finalizar test</button>
        </div>
      </nav>
    </section>

    <dialog id="incomplete-dialog" class="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-message">
      <form method="dialog">
        <h2 id="confirm-title"></h2>
        <p id="confirm-message"></p>
        <div class="confirm-actions">
          <button class="button button-secondary" type="submit" value="cancel">Seguir con el test</button>
          <button class="button button-primary" type="button" data-confirm-action></button>
        </div>
      </form>
    </dialog>
  `;
}
