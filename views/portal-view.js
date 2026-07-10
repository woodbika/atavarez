import { escapeHtml, formatDisplayTitle } from "../utils/text.js";

function plural(count, singular, pluralForm) {
  return `${count} ${count === 1 ? singular : pluralForm}`;
}

export function renderOppositions(root, oppositions) {
  root.innerHTML = `
    <section class="hero hero-compact" aria-labelledby="oppositions-title">
      <p class="eyebrow">Punto de entrada</p>
      <h1 id="oppositions-title">Oposiciones disponibles</h1>
      <p class="hero-copy">Elige una oposición para consultar sus temas y acceder a los recursos disponibles.</p>
    </section>

    <section class="catalog-section" aria-labelledby="opposition-list-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Convocatorias</p>
          <h2 id="opposition-list-title">Selecciona una oposición</h2>
        </div>
        <p class="result-count">${plural(oppositions.length, "oposición", "oposiciones")}</p>
      </div>
      <div class="navigation-grid">
        ${oppositions
          .map(
            (opposition) => `
              <article class="navigation-card">
                <p class="card-kicker">${escapeHtml(formatDisplayTitle(opposition.administration))}</p>
                <h3>${escapeHtml(formatDisplayTitle(opposition.title))}</h3>
                <dl class="card-details">
                  <div><dt>Grupo</dt><dd>${escapeHtml(opposition.group)}</dd></div>
                  <div><dt>Escala</dt><dd>${escapeHtml(opposition.scale)}</dd></div>
                </dl>
                <p class="card-summary">${plural(opposition.themeCount, "tema", "temas")} · ${plural(opposition.resourceCount, "recurso", "recursos")}</p>
                <a class="card-link" href="#/oposiciones/${encodeURIComponent(opposition.id)}">
                  Ver temas <span aria-hidden="true">→</span>
                </a>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderThemes(root, opposition, themes) {
  root.innerHTML = `
    <a class="back-link" href="#/">← Oposiciones</a>
    <section class="page-heading" aria-labelledby="opposition-title">
      <p class="eyebrow">${escapeHtml(formatDisplayTitle(opposition.administration))}</p>
      <h1 id="opposition-title">${escapeHtml(formatDisplayTitle(opposition.title))}</h1>
      <p class="hero-copy">${escapeHtml(opposition.group)} · ${escapeHtml(opposition.scale)}</p>
    </section>

    <section class="catalog-section" aria-labelledby="themes-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Temario</p>
          <h2 id="themes-title">Temas disponibles</h2>
        </div>
        <p id="theme-results-count" class="result-count" aria-live="polite"></p>
      </div>
      <div id="theme-list" class="navigation-grid"></div>
    </section>
  `;

  const list = root.querySelector("#theme-list");
  const count = root.querySelector("#theme-results-count");

  function updateList(filteredThemes) {
    count.textContent = plural(filteredThemes.length, "tema", "temas");
    if (!filteredThemes.length) {
      list.innerHTML = `<div class="empty-card"><h3>Sin temas</h3><p>Prueba con otra búsqueda.</p></div>`;
      return;
    }

    list.innerHTML = filteredThemes
          .map(
            (theme) => `
              <article class="navigation-card theme-card">
                <span class="topic-number" aria-label="Tema ${escapeHtml(theme.numero)}">${escapeHtml(theme.numero)}</span>
                <p class="card-kicker">Tema ${escapeHtml(theme.numero)}</p>
                <h3>${escapeHtml(theme.titulo)}</h3>
                <p class="card-summary">${plural(theme.resourceCount, "recurso disponible", "recursos disponibles")}</p>
                <a class="card-link" href="#/oposiciones/${encodeURIComponent(opposition.id)}/temas/${encodeURIComponent(theme.numero)}">
                  Ver recursos <span aria-hidden="true">→</span>
                </a>
              </article>
            `,
          )
          .join("");
  }

  updateList(themes);
  return { updateList };
}

export function renderResources(
  root,
  { opposition, theme, resources, progressById },
) {
  root.innerHTML = `
    <nav class="breadcrumbs" aria-label="Migas de pan">
      <a href="#/">Oposiciones</a><span aria-hidden="true">/</span>
      <a href="#/oposiciones/${encodeURIComponent(opposition.id)}">${escapeHtml(formatDisplayTitle(opposition.title))}</a><span aria-hidden="true">/</span>
      <span aria-current="page">Tema ${escapeHtml(theme.numero)}</span>
    </nav>

    <section class="page-heading" aria-labelledby="theme-title">
      <p class="eyebrow">Tema ${escapeHtml(theme.numero)}</p>
      <h1 id="theme-title">${escapeHtml(theme.titulo)}</h1>
      <p class="hero-copy">Consulta los materiales disponibles para este tema.</p>
    </section>

    <section class="catalog-section" aria-labelledby="resources-title">
      <div class="section-heading">
        <div>
          <p class="eyebrow">Materiales</p>
          <h2 id="resources-title">Recursos disponibles</h2>
        </div>
        <p id="results-count" class="result-count" aria-live="polite"></p>
      </div>

      <div id="resource-list" class="resource-grid"></div>
    </section>
  `;

  const list = root.querySelector("#resource-list");
  const count = root.querySelector("#results-count");

  function updateList(filteredResources) {
    count.textContent = plural(filteredResources.length, "recurso", "recursos");
    if (!filteredResources.length) {
      list.innerHTML = `<div class="empty-card"><h3>Sin resultados</h3><p>Prueba a cambiar la búsqueda o el filtro.</p></div>`;
      return;
    }

    list.innerHTML = filteredResources
      .map((resource) => {
        const test = resource.data;
        const isComplete = resource.variant === "complete";
        const progress = progressById[resource.id];
        const answered = progress ? Object.keys(progress.answers ?? {}).length : 0;
        const href = resource.type === "test" ? `#/test/${encodeURIComponent(resource.id)}` : resource.href;
        const actionLabel = resource.type === "test"
          ? progress
            ? "Continuar test"
            : "Empezar test"
          : resource.actionLabel ?? "Abrir recurso";
        return `
          <article class="resource-card ${isComplete ? "resource-card-complete" : ""}">
            <div class="card-topline">
              <span class="resource-type ${isComplete ? "resource-type-complete" : ""}">${isComplete ? "Test completo" : resource.type === "test" ? "Test" : escapeHtml(resource.type)}</span>
              ${resource.type === "test" ? `<span class="question-count">${test.preguntas.length} preguntas</span>` : ""}
            </div>
            <h3>${escapeHtml(formatDisplayTitle(resource.title))}</h3>
            ${isComplete
              ? '<p class="complete-description">Reúne todas las preguntas disponibles de este tema.</p>'
              : `<p class="parts"><span class="parts-label">Incluye</span> ${(resource.classification.partes ?? []).map((part) => escapeHtml(formatDisplayTitle(part))).join(" · ")}</p>`}
            ${progress ? `<p class="saved-note">En curso · ${answered} de ${test.preguntas.length} respondidas${isComplete ? ` · Orden ${progress.orderMode === "aleatorio" ? "aleatorio" : "natural"}` : ""}</p>` : ""}
            ${isComplete
              ? `<div class="order-selector" role="group" aria-label="Orden de las preguntas">
                  <span>Elige el orden</span>
                  <div class="order-actions">
                    <a class="order-choice ${progress?.orderMode === "natural" ? "is-current" : ""}" href="${escapeHtml(href)}/natural">Orden natural</a>
                    <a class="order-choice ${progress?.orderMode === "aleatorio" ? "is-current" : ""}" href="${escapeHtml(href)}/aleatorio">Orden aleatorio</a>
                  </div>
                </div>`
              : `<a class="button ${progress ? "button-primary" : "button-secondary"}" href="${escapeHtml(href)}">${escapeHtml(actionLabel)}</a>`}
          </article>
        `;
      })
      .join("");
  }

  updateList(resources);
  return { updateList };
}
