import { escapeHtml } from "../utils/text.js";

export function backLink(href, label, { className = "", action = "" } = {}) {
  const classes = ["back-link", className].filter(Boolean).join(" ");
  return `
    <a class="${escapeHtml(classes)}" href="${escapeHtml(href)}"${action ? ` data-action="${escapeHtml(action)}"` : ""}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
      <span>${escapeHtml(label)}</span>
    </a>
  `;
}

export function themeDisclosure(test) {
  const { clasificacion } = test;
  return `
    <details class="theme-disclosure">
      <summary title="Mostrar el título completo del tema">
        <span>Tema ${escapeHtml(clasificacion.tema.numero)}</span>
        <span class="theme-disclosure-cue" aria-hidden="true">i</span>
      </summary>
      <div class="theme-disclosure-content" role="note">
        <span class="theme-disclosure-label">Título del tema</span>
        <span class="theme-disclosure-title">${escapeHtml(clasificacion.tema.titulo)}</span>
      </div>
    </details>
  `;
}

export function questionCount(test) {
  const count = test.preguntas.length;
  return `<p class="study-question-count">${count} ${count === 1 ? "pregunta" : "preguntas"}</p>`;
}

export function renderNotFound(root, message = "No hemos encontrado esta página.") {
  root.innerHTML = `
    <section class="empty-state view-layout view-layout-reading view-heading" aria-labelledby="not-found-title">
      <p class="eyebrow">Error 404</p>
      <h1 id="not-found-title">Contenido no disponible</h1>
      <p>${escapeHtml(message)}</p>
      <a class="button button-primary" href="#/">Volver a oposiciones</a>
    </section>
  `;
}

export function renderApplicationError(root) {
  root.innerHTML = `
    <section class="empty-state view-layout view-layout-reading view-heading" aria-labelledby="startup-error-title">
      <p class="eyebrow">Error de configuración</p>
      <h1 id="startup-error-title">No se puede iniciar OPOSAKETAK</h1>
      <p>Los datos de estudio no han superado la validación. Revisa la consola durante el desarrollo para localizar el recurso afectado.</p>
    </section>
  `;
}
