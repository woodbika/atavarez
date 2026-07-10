import { escapeHtml, formatDate, formatDisplayTitle } from "../utils/text.js";
import { metadata } from "./layout.js";

export function renderResults(root, test, result, { backHref, backLabel }) {
  const circumference = 2 * Math.PI * 42;
  const visualScore = Math.min(Math.max(result.score, 0), 10);
  const dash = (visualScore / 10) * circumference;
  const formattedScore = result.score.toLocaleString("es-ES", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  root.innerHTML = `
    <a class="back-link" href="${backHref}">← ${escapeHtml(backLabel)}</a>
    <section class="results-shell" aria-labelledby="results-title">
      <header class="results-heading">
        <p class="eyebrow">Resultado</p>
        <h1 id="results-title">Resultados del intento</h1>
        <p class="results-test-title">${escapeHtml(formatDisplayTitle(test.titulo))}</p>
        ${metadata(test)}
      </header>

      <div class="score-layout">
        <div class="score-ring" role="img" aria-label="Puntuación: ${formattedScore} sobre 10">
          <svg viewBox="0 0 100 100" aria-hidden="true">
            <circle class="score-ring-bg" cx="50" cy="50" r="42"></circle>
            <circle class="score-ring-value" cx="50" cy="50" r="42" stroke-dasharray="${dash} ${circumference - dash}"></circle>
          </svg>
          <strong>${formattedScore}</strong>
          <span>sobre 10</span>
        </div>

        <div class="stats-panel">
          <div class="stats-heading">
            <span>Desglose</span>
            <details class="scoring-info">
              <summary aria-label="Información sobre el cálculo de la puntuación">
                <span aria-hidden="true">i</span>
              </summary>
              <div class="scoring-info-content">
                <p class="scoring-info-title">¿Cómo se calcula la nota?</p>
                <p>Cada respuesta influye así:</p>
                <ul>
                  <li><span class="scoring-value">+1</span> por cada respuesta correcta.</li>
                  <li><span class="scoring-value">−⅓</span> por cada respuesta incorrecta.</li>
                  <li><span class="scoring-value">0</span> por cada pregunta en blanco.</li>
                </ul>
                <p class="scoring-info-result">Has acertado el ${result.percentage}% de las preguntas.</p>
              </div>
            </details>
          </div>
          <dl class="stats-grid">
            <div><dt>Total</dt><dd>${result.total}</dd></div>
            <div class="stat-correct"><dt>Correctas</dt><dd>${result.correct}</dd></div>
            <div class="stat-incorrect"><dt>Incorrectas</dt><dd>${result.incorrect}</dd></div>
            <div><dt>Sin responder</dt><dd>${result.unanswered}</dd></div>
          </dl>
        </div>
      </div>

      <p class="completed-date">Finalizado el ${escapeHtml(formatDate(result.completedAt))}</p>
      <div class="result-actions">
        <a class="button button-primary" href="#/revision/${encodeURIComponent(test.id)}">Revisar respuestas</a>
        <button class="button button-secondary" type="button" data-action="repeat">Repetir test</button>
        <a class="button button-quiet" href="${backHref}">Volver a los recursos</a>
      </div>
    </section>
  `;
}
