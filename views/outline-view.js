import { escapeHtml, formatDisplayTitle } from "../utils/text.js";

function renderItems(items = []) {
  if (!items.length) return "";
  return `
    <ul class="outline-items">
      ${items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function renderSection(section, level = 1) {
  const nestedSections = section.sections ?? [];
  return `
    <details class="outline-section outline-level-${level}" open>
      <summary>
        <span>${escapeHtml(section.title)}</span>
        ${section.meta ? `<small>${escapeHtml(section.meta)}</small>` : ""}
      </summary>
      <div class="outline-section-body">
        ${renderItems(section.items)}
        ${nestedSections.length
          ? `<div class="outline-branches">${nestedSections
              .map((child) => renderSection(child, level + 1))
              .join("")}</div>`
          : ""}
      </div>
    </details>
  `;
}

function renderOutlineContent(resource) {
  return `
    <div class="outline-root">
      <span class="outline-root-label">${escapeHtml(resource.data.rootTitle)}</span>
      <div class="outline-sections">
        ${resource.data.sections.map((section) => renderSection(section)).join("")}
      </div>
    </div>
  `;
}

export function renderOutline(root, resource) {
  const theme = resource.classification.tema;
  root.innerHTML = `
    <header class="outline-heading view-heading" aria-labelledby="outline-title">
      <p class="eyebrow">Tema ${escapeHtml(theme.numero)}</p>
      <h1 id="outline-title">${escapeHtml(formatDisplayTitle(resource.title))}</h1>
      <p>${escapeHtml(resource.data.introduction)}</p>
    </header>

    <section class="outline-view view-layout view-layout-wide" aria-label="Contenido del esquema">
      ${renderOutlineContent(resource)}
    </section>
  `;
}

export function openOutlineModal(root, resource, { href }) {
  root.querySelector("#outline-modal")?.remove();
  const theme = resource.classification.tema;
  root.insertAdjacentHTML("beforeend", `
    <dialog id="outline-modal" class="outline-modal" aria-labelledby="outline-modal-title">
      <div class="outline-modal-shell">
        <header class="outline-modal-heading">
          <div>
            <p class="eyebrow">Tema ${escapeHtml(theme.numero)}</p>
            <h2 id="outline-modal-title">${escapeHtml(formatDisplayTitle(resource.title))}</h2>
            <p>${escapeHtml(resource.data.introduction)}</p>
          </div>
          <button class="outline-modal-close" type="button" data-outline-close aria-label="Cerrar esquema" title="Cerrar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>
          </button>
        </header>
        <div class="outline-modal-content">
          ${renderOutlineContent(resource)}
        </div>
        <footer class="outline-modal-actions">
          <button class="button button-secondary" type="button" data-outline-close>Cerrar</button>
          <a class="button button-primary" href="${escapeHtml(href)}" target="_blank" rel="noopener">
            Abrir en otra pestaña <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </dialog>
  `);

  const dialog = root.querySelector("#outline-modal");
  const close = () => dialog.close();
  dialog.querySelectorAll("[data-outline-close]").forEach((button) => {
    button.addEventListener("click", close);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener("close", () => dialog.remove(), { once: true });
  if (typeof dialog.showModal === "function") dialog.showModal();
  else dialog.setAttribute("open", "");
}
