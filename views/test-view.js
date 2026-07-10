import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { metadata } from "./layout.js";

export function renderTest(root, session, { backHref, backLabel, orderMode, showOrder }) {
  const { test, currentQuestion: question, currentIndex } = session;
  const total = test.preguntas.length;
  const selected = session.selectedAnswer(question.id);
  const progress = ((currentIndex + 1) / total) * 100;

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
          <span>${session.answeredCount()} respondidas</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Progreso del test" aria-valuemin="1" aria-valuemax="${total}" aria-valuenow="${currentIndex + 1}">
          <span style="width: ${progress}%"></span>
        </div>
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
        ${
          currentIndex < total - 1
            ? '<button class="button button-primary" type="button" data-action="next">Siguiente</button>'
            : '<button class="button button-primary" type="button" data-action="finish">Ver resultados</button>'
        }
      </nav>
      ${currentIndex < total - 1 ? '<button class="finish-link" type="button" data-action="finish">Finalizar test</button>' : ""}
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
