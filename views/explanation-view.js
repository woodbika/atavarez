import { escapeHtml } from "../utils/text.js";

function renderParagraphs(paragraphs = []) {
  return paragraphs
    .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
    .join("");
}

function renderPoints(points = []) {
  if (!points.length) return "";
  return `
    <ul class="explanation-points">
      ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
    </ul>
  `;
}

function renderExamples(examples = []) {
  if (!examples.length) return "";
  const numbered = examples.length > 1;
  return `
    <div class="explanation-examples">
      ${examples
        .map(
          (example, index) => `
            <aside>
              <span>Ejemplo${numbered ? ` ${index + 1}` : ""}</span>
              <p>${escapeHtml(example)}</p>
            </aside>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderCases(cases = []) {
  if (!cases.length) return "";
  return `
    <ol class="explanation-case-list">
      ${cases
        .map(
          (item) => `
            <li>
              <div class="explanation-case-copy">
                <h4>${escapeHtml(item.titulo)}</h4>
                <p>${escapeHtml(item.texto)}</p>
                <aside class="explanation-case-example">
                  <span>Ejemplo</span>
                  <p>${escapeHtml(item.ejemplo)}</p>
                </aside>
              </div>
            </li>
          `,
        )
        .join("")}
    </ol>
  `;
}

function renderSection(section) {
  return `
    <section id="explanation-section-${escapeHtml(section.id)}" class="explanation-section">
      <header>
        <span>Artículo 105</span>
        <h3>${escapeHtml(section.titulo)}</h3>
        ${section.introduccion ? `<p>${escapeHtml(section.introduccion)}</p>` : ""}
      </header>
      <div class="explanation-section-body">
        ${renderParagraphs(section.parrafos)}
        ${renderPoints(section.puntos)}
        ${renderCases(section.casos)}
        ${renderExamples(section.ejemplos)}
      </div>
    </section>
  `;
}

function renderNavigation(explanation) {
  return `
    <aside class="theory-side-nav explanation-side-nav" aria-label="Navegar por la explicación">
      <div>
        <span>Guía práctica</span>
        <strong>Artículo ${escapeHtml(explanation.fuente.articulos.join(", "))}</strong>
      </div>
      <ul>
        ${explanation.secciones
          .map(
            (section) => `
              <li>
                <button type="button" data-explanation-target="explanation-section-${escapeHtml(section.id)}">
                  <span>${escapeHtml(section.titulo)}</span>
                </button>
              </li>
            `,
          )
          .join("")}
      </ul>
    </aside>
  `;
}

export function openExplanationModal(root, resource, trigger) {
  root.querySelector("#explanation-modal")?.remove();
  const explanation = resource.data;

  root.insertAdjacentHTML(
    "beforeend",
    `
      <dialog id="explanation-modal" class="theory-modal explanation-modal" aria-labelledby="explanation-modal-title" aria-describedby="explanation-modal-description">
        <div class="theory-modal-shell">
          <header class="theory-modal-heading">
            <div>
              <p class="eyebrow">Explicación práctica · Tema ${escapeHtml(explanation.clasificacion.tema.numero)}</p>
              <h2 id="explanation-modal-title">${escapeHtml(explanation.titulo)}</h2>
              <p id="explanation-modal-description">${escapeHtml(explanation.descripcion)}</p>
            </div>
            <button class="theory-modal-close" type="button" data-explanation-close aria-label="Cerrar explicación" title="Cerrar">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>
            </button>
          </header>
          <div class="theory-modal-body">
            <main class="theory-modal-content explanation-modal-content">
              <aside class="explanation-introduction">
                <span>Idea principal</span>
                <p>${escapeHtml(explanation.introduccion)}</p>
              </aside>
              ${explanation.secciones.map(renderSection).join("")}
              <aside class="explanation-closing">
                <span>Para recordarlo</span>
                <p>${escapeHtml(explanation.cierre)}</p>
              </aside>
            </main>
            ${renderNavigation(explanation)}
          </div>
        </div>
      </dialog>
    `,
  );

  const dialog = root.querySelector("#explanation-modal");
  const close = () => dialog.close();
  dialog.querySelectorAll("[data-explanation-close]").forEach((button) => {
    button.addEventListener("click", close);
  });
  dialog.querySelectorAll("[data-explanation-target]").forEach((button) => {
    button.addEventListener("click", () => {
      dialog.querySelector(`#${button.dataset.explanationTarget}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) close();
  });
  dialog.addEventListener(
    "close",
    () => {
      dialog.remove();
      trigger?.focus({ preventScroll: true });
    },
    { once: true },
  );
  dialog.showModal();
}
