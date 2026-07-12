import { escapeHtml } from "../utils/text.js";

export function metadata(test) {
  const { clasificacion } = test;
  return `
    <ul class="meta-list" aria-label="Datos del test">
      <li>Tema ${escapeHtml(clasificacion.tema.numero)}</li>
      <li>${escapeHtml(clasificacion.tema.titulo)}</li>
      <li>${test.preguntas.length} preguntas</li>
    </ul>
  `;
}

export function renderNotFound(root, message = "No hemos encontrado esta página.") {
  root.innerHTML = `
    <section class="empty-state" aria-labelledby="not-found-title">
      <p class="eyebrow">Error 404</p>
      <h1 id="not-found-title">Contenido no disponible</h1>
      <p>${escapeHtml(message)}</p>
      <a class="button button-primary" href="#/">Volver a oposiciones</a>
    </section>
  `;
}

export function renderApplicationError(root) {
  root.innerHTML = `
    <section class="empty-state" aria-labelledby="startup-error-title">
      <p class="eyebrow">Error de configuración</p>
      <h1 id="startup-error-title">No se puede iniciar OPOSAKETAK</h1>
      <p>Los datos de estudio no han superado la validación. Revisa la consola durante el desarrollo para localizar el recurso afectado.</p>
    </section>
  `;
}
