import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { metadata } from "./layout.js";

export function renderTest(
  root,
  session,
  { backHref, backLabel, orderMode, showOrder, showQuestionMap = true, timer },
) {
  const { test, currentQuestion: question, currentIndex } = session;
  const total = test.preguntas.length;
  const selected = session.selectedAnswer(question.id);
  const liveAnswerLocked = session.isLiveAnswerLocked(question.id);
  const selectedIsCorrect = selected === question.respuestaCorrecta;
  const answeredCount = session.answeredCount();
  const progress = total ? (answeredCount / total) * 100 : 0;

  root.innerHTML = `
    <a class="back-link test-back-link" href="${backHref}" data-action="leave">← ${escapeHtml(backLabel)}</a>
    ${timer?.enabled ? `
      <button class="test-timer" type="button" data-timer-toggle aria-label="Pausar el test. Tiempo restante: ${escapeHtml(timer.label)}" title="Pausar cuenta atrás">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h12M6 21h12M7 3c0 4 1.5 6.3 5 9-3.5 2.7-5 5-5 9M17 3c0 4-1.5 6.3-5 9 3.5 2.7 5 5 5 9"></path></svg>
        <time data-timer-value datetime="PT${timer.remainingSeconds}S">${escapeHtml(timer.label)}</time>
      </button>
    ` : ""}
    <section class="test-shell view-layout view-layout-reading" aria-labelledby="test-title">
      <header class="test-heading study-heading view-heading">
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
        ${showQuestionMap ? `<nav class="question-map" aria-label="Navegar por las preguntas">
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
                  </button>
                `;
              })
              .join("")}
          </div>
        </nav>` : ""}
      </div>

      <div class="focus-content">
        <form id="question-form" class="question-card" tabindex="-1">
          <div class="live-answer-setting">
            <label class="live-answer-toggle" title="Corrige cada respuesta al momento y bloquea esa pregunta">
              <span>Respuesta en vivo</span>
              <input id="live-answer-toggle" type="checkbox" ${session.liveResponseEnabled ? "checked" : ""} aria-describedby="live-answer-help">
              <span class="live-answer-control" aria-hidden="true"></span>
            </label>
            <label class="live-answer-toggle" title="Avanza a la siguiente pregunta después de mostrar la corrección">
              <span>Responder y avanzar</span>
              <input id="auto-advance-toggle" type="checkbox" ${session.autoAdvanceEnabled ? "checked" : ""} aria-describedby="auto-advance-help">
              <span class="live-answer-control" aria-hidden="true"></span>
            </label>
            <span id="live-answer-help" class="sr-only">Al responder se mostrará el resultado y ya no se podrá cambiar esa pregunta.</span>
            <span id="auto-advance-help" class="sr-only">Después de responder, espera un momento y avanza a la siguiente pregunta.</span>
          </div>

          <fieldset>
            <legend>
              <span class="question-number">Pregunta ${currentIndex + 1}</span>
              <span>${escapeHtml(question.enunciado)}</span>
              <span class="auto-advance-progress" aria-hidden="true"><span></span></span>
            </legend>
            <div class="options-list">
              ${question.opciones
                .map((answer) => {
                  const isSelected = selected === answer.id;
                  const isCorrectAnswer = answer.id === question.respuestaCorrecta;
                  const liveIcon = liveAnswerLocked
                    ? isCorrectAnswer
                      ? '<span class="option-live-icon is-correct" role="img" aria-label="Respuesta correcta">✓</span>'
                      : isSelected
                        ? '<span class="option-live-icon is-incorrect" role="img" aria-label="Respuesta elegida, incorrecta">×</span>'
                        : ""
                    : "";
                  const liveState = liveAnswerLocked
                    ? isSelected
                      ? selectedIsCorrect
                        ? "is-live-correct"
                        : "is-live-incorrect"
                      : isCorrectAnswer
                        ? "is-live-solution"
                        : ""
                    : "";
                  return `
                    <label class="option ${isSelected ? "is-selected" : ""} ${liveState} ${liveAnswerLocked ? "is-locked" : ""}">
                      <input type="radio" name="answer" value="${escapeHtml(answer.id)}" ${isSelected ? "checked" : ""} ${liveAnswerLocked ? "disabled" : ""}>
                      <span class="option-letter" aria-hidden="true">${escapeHtml(answer.id)}</span>
                      <span>${escapeHtml(answer.texto)}</span>
                      ${liveIcon}
                    </label>
                  `;
                })
                .join("")}
            </div>
            ${liveAnswerLocked ? `<span class="sr-only" role="status">${selectedIsCorrect ? "Respuesta correcta" : "Respuesta incorrecta"}</span>` : ""}
          </fieldset>
        </form>

        <nav class="test-navigation" aria-label="Navegación entre preguntas">
          <button class="button button-secondary" type="button" data-action="previous" ${currentIndex === 0 ? "disabled" : ""}>Anterior</button>
          <div class="test-navigation-end">
            <button class="button button-secondary" type="button" data-action="next" ${currentIndex === total - 1 ? "disabled" : ""}>Siguiente</button>
            <button class="button button-primary" type="button" data-action="finish">Finalizar test</button>
          </div>
        </nav>
      </div>
    </section>

    ${timer?.enabled ? `
      <div class="timer-pause-layer" aria-hidden="${timer.paused ? "false" : "true"}">
        <button class="timer-pause-dialog" type="button" data-timer-resume aria-label="Reanudar el test. Tiempo restante: ${escapeHtml(timer.label)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="m10 8 6 4-6 4Z"></path></svg>
          <span>Test en pausa</span>
          <time data-timer-value datetime="PT${timer.remainingSeconds}S">${escapeHtml(timer.label)}</time>
          <small>Pulsa para continuar</small>
        </button>
      </div>
    ` : ""}

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
