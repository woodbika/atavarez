import { escapeHtml } from "../utils/text.js";

function formatSummaryText(value) {
  return escapeHtml(value).replace(
    /(\b\d+(?:[.,]\d+)?\s*%|\b\d+(?:\.º)?\s+(?:días?(?:\s+naturales?)?|meses?|años?|mensualidades?|grado)\b)/giu,
    '<strong class="summary-value">$1</strong>',
  );
}

function renderSummaryList(value) {
  const items = String(value)
    .split(/;\s+|(?<=[.!?])\s+(?=[A-ZÁÉÍÓÚÑ])/u)
    .filter(Boolean);
  return `
    <ul class="summary-cell-list">
      ${items.map((item) => `<li>${formatSummaryText(item)}</li>`).join("")}
    </ul>
  `;
}

function renderSummaryCell(row, column, isFirstColumn) {
  return `
    <td data-label="${escapeHtml(column.titulo)}">
      ${isFirstColumn
        ? `<strong>${escapeHtml(row[column.id])}</strong><small>${escapeHtml(row.articulos)}</small>`
        : renderSummaryList(row[column.id])}
    </td>
  `;
}

function renderSummaryTable(summary) {
  return `
    <div class="summary-table-shell" tabindex="0" role="region" aria-label="Tabla comparativa de situaciones administrativas">
      <table class="summary-table">
        <caption class="sr-only">${escapeHtml(summary.descripcion)}</caption>
        <thead>
          <tr>
            ${summary.columnas
              .map((column) => `<th scope="col">${escapeHtml(column.titulo)}</th>`)
              .join("")}
          </tr>
        </thead>
        <tbody>
          ${summary.filas
            .map((row) => `
              <tr>
                ${summary.columnas
                  .map((column, index) => renderSummaryCell(row, column, index === 0))
                  .join("")}
              </tr>
            `)
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function renderSummaryCards(summary) {
  const detailColumns = summary.columnas.slice(1);
  return `
    <div class="summary-card-list">
      ${summary.filas
        .map((row) => `
          <article>
            <header>
              <strong>${escapeHtml(row.situacion)}</strong>
              <small>${escapeHtml(row.articulos)}</small>
            </header>
            <dl>
              ${detailColumns
                .map((column) => `
                  <div>
                    <dt>${escapeHtml(column.titulo)}</dt>
                    <dd>${renderSummaryList(row[column.id])}</dd>
                  </div>
                `)
                .join("")}
            </dl>
          </article>
        `)
        .join("")}
    </div>
  `;
}

function renderSummaryNotes(title, eyebrow, notes) {
  return `
    <section class="summary-notes" aria-labelledby="summary-${escapeHtml(eyebrow)}-title">
      <header>
        <span>${escapeHtml(eyebrow)}</span>
        <h3 id="summary-${escapeHtml(eyebrow)}-title">${escapeHtml(title)}</h3>
      </header>
      <div>
        ${notes
          .map((note) => `
            <article>
              <div>
                <strong>${escapeHtml(note.titulo)}</strong>
                <small>${escapeHtml(note.articulos)}</small>
              </div>
              <p>${formatSummaryText(note.texto)}</p>
            </article>
          `)
          .join("")}
      </div>
    </section>
  `;
}

function renderReentryPriority(priority) {
  return `
    <section class="summary-priority" aria-labelledby="summary-priority-title">
      <header>
        <div>
          <span>${escapeHtml(priority.articulos)}</span>
          <h3 id="summary-priority-title">${escapeHtml(priority.titulo)}</h3>
        </div>
        <p>${escapeHtml(priority.introduccion)}</p>
      </header>
      <ol>
        ${priority.situaciones
          .map((situation) => `<li>${formatSummaryText(situation)}</li>`)
          .join("")}
      </ol>
    </section>
  `;
}

export function openSummaryModal(root, resource, trigger) {
  root.querySelector("#summary-modal")?.remove();
  const summary = resource.data;

  root.insertAdjacentHTML("beforeend", `
    <dialog id="summary-modal" class="theory-modal summary-modal" aria-labelledby="summary-modal-title" aria-describedby="summary-modal-description">
      <div class="theory-modal-shell">
        <header class="theory-modal-heading">
          <div>
            <p class="eyebrow">Resumen comparativo · Tema ${escapeHtml(summary.clasificacion.tema.numero)}</p>
            <h2 id="summary-modal-title">${escapeHtml(summary.titulo)}</h2>
            <p id="summary-modal-description">${escapeHtml(summary.descripcion)}</p>
          </div>
          <button class="theory-modal-close" type="button" data-summary-close aria-label="Cerrar resumen" title="Cerrar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>
          </button>
        </header>
        <div class="summary-modal-body">
          <aside class="summary-scope-note">
            <strong>Cómo leer este resumen</strong>
            <p>La tabla sintetiza el contenido de los artículos indicados. Para consultar todos los requisitos y excepciones, utiliza el recurso de teoría del tema.</p>
          </aside>
          ${renderSummaryTable(summary)}
          ${renderSummaryCards(summary)}
          ${renderSummaryNotes("Reglas que afectan a varias situaciones", "reglas-comunes", summary.reglasComunes)}
          ${renderReentryPriority(summary.prioridadReingreso)}
          ${renderSummaryNotes("Ámbito personal", "ambito-personal", summary.alcance)}
        </div>
      </div>
    </dialog>
  `);

  const dialog = root.querySelector("#summary-modal");
  const close = () => dialog.close();
  dialog.querySelectorAll("[data-summary-close]").forEach((button) => {
    button.addEventListener("click", close);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener("close", () => {
    dialog.remove();
    trigger?.focus({ preventScroll: true });
  }, { once: true });
  dialog.showModal();
}
