import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { practicalCaseArticleLabel } from "../utils/practical-case.js";
import { backLink, themeDisclosure } from "./layout.js";

function renderQuestion(question, questionNumber, selected) {
  return `
    <li class="practical-question" data-practical-question="${escapeHtml(question.id)}">
      <fieldset>
        <legend>
          <span class="question-number">Pregunta ${questionNumber}</span>
          <span>${escapeHtml(question.enunciado)}</span>
        </legend>
        <div class="practical-options">
          ${question.opciones.map((option) => `
            <label class="practical-option${selected === option.id ? " is-selected" : ""}">
              <input
                type="radio"
                name="answer-${escapeHtml(question.id)}"
                value="${escapeHtml(option.id)}"
                data-practical-answer
                data-question-id="${escapeHtml(question.id)}"
                ${selected === option.id ? "checked" : ""}
              >
              <span class="practical-option-letter" aria-hidden="true">${escapeHtml(option.id.toLocaleUpperCase("es"))}</span>
              <span>${escapeHtml(option.texto)}</span>
            </label>
          `).join("")}
        </div>
      </fieldset>
    </li>
  `;
}

export function renderPracticalCase(root, session, { backHref, backLabel }) {
  const practicalCase = session.test;
  const total = practicalCase.preguntas.length;
  let questionNumber = 0;

  root.innerHTML = `
    ${backLink(backHref, backLabel, {
      className: "practical-case-back-link",
      action: "leave-practical-case",
    })}
    <section class="practical-case-shell view-layout view-layout-wide" aria-labelledby="practical-case-title">
      <header class="practical-case-heading study-heading view-heading">
        <div class="study-heading-kicker">
          ${themeDisclosure(practicalCase)}
        </div>
        <h1 id="practical-case-title">${escapeHtml(formatDisplayTitle(practicalCase.titulo))}</h1>
        <p class="study-question-count">${practicalCase.casos.length} casos · ${total} preguntas</p>
      </header>

      <div class="practical-progress" aria-live="polite">
        <div class="progress-label">
          <span>${practicalCase.casos.length} supuestos</span>
          <span data-practical-answered>${session.answeredCount()} de ${total} respondidas</span>
        </div>
        <div class="progress-track" role="progressbar" aria-label="Preguntas respondidas" aria-valuemin="0" aria-valuemax="${total}" aria-valuenow="${session.answeredCount()}">
          <span data-practical-progress style="width: ${total ? (session.answeredCount() / total) * 100 : 0}%"></span>
        </div>
      </div>

      <form id="practical-case-form" class="practical-case-form">
        ${practicalCase.casos.map((item) => `
          <article class="practical-case-block" aria-labelledby="${escapeHtml(item.id)}-title">
            <header class="practical-case-block-heading">
              <div>
                <p class="eyebrow">Caso ${item.numero} · ${escapeHtml(practicalCaseArticleLabel(item))}</p>
                <h2 id="${escapeHtml(item.id)}-title">${escapeHtml(item.titulo)}</h2>
              </div>
              <span>${item.preguntas.length} ${item.preguntas.length === 1 ? "pregunta" : "preguntas"}</span>
            </header>
            <div class="practical-case-statement">
              <p class="practical-case-statement-label">Supuesto práctico</p>
              <p>${escapeHtml(item.supuesto)}</p>
            </div>
            <ol class="practical-question-list">
              ${item.preguntas.map((question) => {
                questionNumber += 1;
                return renderQuestion(
                  question,
                  questionNumber,
                  session.selectedAnswer(question.id),
                );
              }).join("")}
            </ol>
          </article>
        `).join("")}

        <div class="practical-case-finish">
          <p>Cuando termines, podrás consultar la puntuación y revisar las respuestas.</p>
          <button class="button button-primary" type="button" data-practical-finish>Ver resultados</button>
        </div>
      </form>
    </section>

    <dialog id="incomplete-dialog" class="confirm-dialog" aria-labelledby="confirm-title" aria-describedby="confirm-message">
      <form method="dialog">
        <h2 id="confirm-title">Actividad incompleta</h2>
        <p id="confirm-message"></p>
        <div class="confirm-actions">
          <button class="button button-secondary" type="submit" value="cancel">Seguir respondiendo</button>
          <button class="button button-primary" type="button" data-confirm-action>Finalizar de todas formas</button>
        </div>
      </form>
    </dialog>
  `;
}
