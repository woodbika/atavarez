import { escapeHtml, formatDisplayTitle } from "../utils/text.js";
import { coverImageUrl } from "../utils/assets.js";
import { backLink } from "./layout.js";

function plural(count, singular, pluralForm) {
  return `${count} ${count === 1 ? singular : pluralForm}`;
}

function navigationLabels(opposition) {
  return {
    collectionSingular: "tema",
    collectionPlural: "temas",
    collectionTitle: "Temas disponibles",
    searchPlaceholder: "Buscar temas",
    showUnitNumber: true,
    cardAction: "Ver recursos",
    backLabel: "Volver a temas",
    resourceBackLabel: "Recursos del tema",
    ...opposition.navigation,
  };
}

export function renderOppositions(root, oppositions) {
  root.innerHTML = `
    <section class="hero hero-home view-heading view-heading-cover" aria-labelledby="oppositions-title">
      <p class="eyebrow">Inicio</p>
      <h1 id="oppositions-title">Oposiciones disponibles</h1>
      <p class="hero-copy">Elige una oposición para consultar su temario y acceder a los recursos disponibles.</p>
    </section>

    <section class="catalog-section view-layout view-layout-wide" aria-labelledby="opposition-list-title">
      <div class="section-heading view-section-heading">
        <div>
          <p class="eyebrow">Convocatorias</p>
          <h2 id="opposition-list-title">Selecciona una oposición</h2>
        </div>
        <p class="result-count">${plural(oppositions.length, "oposición", "oposiciones")}</p>
      </div>
      <div class="navigation-grid">
        ${oppositions
          .map(
            (opposition) => {
              const isComingSoon = opposition.status === "coming-soon";
              const labels = navigationLabels(opposition);
              return `
              <article class="navigation-card ${isComingSoon ? "navigation-card-upcoming" : ""}">
                <p class="card-kicker">${escapeHtml(formatDisplayTitle(opposition.administration))}</p>
                <h3>${escapeHtml(formatDisplayTitle(opposition.title))}</h3>
                <dl class="card-details">
                  <div><dt>Grupo</dt><dd>${escapeHtml(opposition.group)}</dd></div>
                  <div><dt>Escala</dt><dd>${escapeHtml(opposition.scale)}</dd></div>
                </dl>
                <p class="card-summary">${isComingSoon
                  ? "Contenido en preparación"
                  : `${plural(opposition.themeCount, labels.collectionSingular, labels.collectionPlural)} · ${plural(opposition.resourceCount, "recurso", "recursos")}`}</p>
                ${isComingSoon
                  ? '<span class="card-link card-link-status">Próximamente</span>'
                  : `<a class="card-link" href="#/oposiciones/${encodeURIComponent(opposition.id)}">
                      Ver temario <span aria-hidden="true">→</span>
                    </a>`}
              </article>
            `;
            },
          )
          .join("")}
      </div>
    </section>
  `;
}

export function renderThemes(root, opposition, themes) {
  const labels = navigationLabels(opposition);
  const coverStyle = opposition.covers.themes
    ? ` style="--opposition-cover-image: url('${escapeHtml(coverImageUrl(opposition.covers.themes))}')"`
    : "";

  root.innerHTML = `
    ${backLink("#/", "Oposiciones")}
    <section class="page-heading view-heading view-heading-cover opposition-hero" aria-labelledby="opposition-title"${coverStyle}>
      <p class="eyebrow">${escapeHtml(formatDisplayTitle(opposition.administration))}</p>
      <h1 id="opposition-title">${escapeHtml(formatDisplayTitle(opposition.title))}</h1>
      <p class="hero-copy">${escapeHtml(opposition.group)} · ${escapeHtml(opposition.scale)}</p>
    </section>

    <section class="catalog-section view-layout view-layout-wide" aria-labelledby="themes-title">
      <div class="section-heading view-section-heading">
        <div>
          <p class="eyebrow">Temario</p>
          <h2 id="themes-title">${escapeHtml(labels.collectionTitle)}</h2>
        </div>
        <p id="theme-results-count" class="result-count" aria-live="polite"></p>
      </div>
      <div id="theme-list" class="navigation-grid"></div>
      <div class="portal-back-action">
        <a class="button button-secondary portal-back-button" href="#/">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
          Volver a oposiciones
        </a>
      </div>
    </section>
  `;

  const list = root.querySelector("#theme-list");
  const count = root.querySelector("#theme-results-count");

  function updateList(filteredThemes) {
    count.textContent = plural(
      filteredThemes.length,
      labels.collectionSingular,
      labels.collectionPlural,
    );
    if (!filteredThemes.length) {
      list.innerHTML = `<div class="empty-card"><h3>Sin ${escapeHtml(labels.collectionPlural)}</h3><p>Prueba con otra búsqueda.</p></div>`;
      return;
    }

    list.innerHTML = filteredThemes
          .map((theme) => `
              <article class="navigation-card theme-card">
                ${labels.showUnitNumber
                  ? `<span class="topic-number" aria-label="Tema ${escapeHtml(theme.numero)}">${escapeHtml(theme.numero)}</span>`
                  : ""}
                <h3 class="theme-card-title">${escapeHtml(theme.titulo)}</h3>
                <p class="card-summary">${plural(theme.resourceCount, "recurso disponible", "recursos disponibles")}</p>
                <a class="card-link" href="#/oposiciones/${encodeURIComponent(opposition.id)}/temas/${encodeURIComponent(theme.numero)}">
                  ${escapeHtml(labels.cardAction)} <span aria-hidden="true">→</span>
                </a>
              </article>
            `)
          .join("");
  }

  updateList(themes);
  return { updateList };
}

export function renderResources(
  root,
  { opposition, theme, resources },
) {
  const labels = navigationLabels(opposition);
  const currentUnitLabel = labels.showUnitNumber
    ? `Tema ${theme.numero}`
    : theme.titulo;
  const testAuthors = new Map(
    resources
      .filter(
        (resource) =>
          resource.type === "test" &&
          resource.variant !== "complete" &&
          resource.author?.id &&
          resource.author?.nombre,
      )
      .map((resource) => [resource.author.id, resource.author.nombre]),
  );
  const coverStyle = opposition.covers.resources
    ? ` style="--resource-cover-image: url('${escapeHtml(coverImageUrl(opposition.covers.resources))}')"`
    : "";
  root.innerHTML = `
    <nav class="breadcrumbs" aria-label="Migas de pan">
      <a href="#/">Oposiciones</a><span aria-hidden="true">/</span>
      <a href="#/oposiciones/${encodeURIComponent(opposition.id)}">${escapeHtml(formatDisplayTitle(opposition.title))}</a><span aria-hidden="true">/</span>
      <span aria-current="page">${escapeHtml(currentUnitLabel)}</span>
    </nav>

    <section class="page-heading resource-hero view-heading view-heading-cover" aria-labelledby="theme-title"${coverStyle}>
      <p class="eyebrow">${escapeHtml(currentUnitLabel)}</p>
      <h1 id="theme-title">${escapeHtml(theme.titulo)}</h1>
    </section>

    <section class="catalog-section view-layout view-layout-wide" aria-labelledby="resources-title">
      <div class="section-heading view-section-heading">
        <div>
          <p class="eyebrow">Materiales</p>
          <h2 id="resources-title">Recursos disponibles</h2>
        </div>
        <p id="results-count" class="result-count" aria-live="polite"></p>
      </div>

      ${testAuthors.size
        ? `<div class="resource-filter-bar" role="group" aria-label="Filtrar por autor del test">
            <span>Filtrar por</span>
            <div class="resource-filter-list">
              ${[...testAuthors]
                .map(([authorId, authorName]) => `
                  <button class="filter-button" type="button" data-author-filter="${escapeHtml(authorId)}" aria-pressed="false">
                    Tests ${escapeHtml(formatDisplayTitle(authorName))}
                  </button>
                `)
                .join("")}
            </div>
          </div>`
        : ""}

      <div id="resource-list" class="resource-grid"></div>
      <div class="portal-back-action">
        <a class="button button-secondary portal-back-button" href="#/oposiciones/${encodeURIComponent(opposition.id)}">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"></path></svg>
          ${escapeHtml(labels.backLabel)}
        </a>
      </div>
    </section>
  `;

  const list = root.querySelector("#resource-list");
  const count = root.querySelector("#results-count");

  function updateList(filteredResources) {
    count.textContent = plural(filteredResources.length, "recurso", "recursos");
    if (!filteredResources.length) {
      list.innerHTML = resources.length
        ? `<div class="empty-card"><h3>Sin resultados</h3><p>Prueba a cambiar la búsqueda o el filtro.</p></div>`
        : `<div class="empty-card"><h3>Contenido en preparación</h3><p>Todavía no hay recursos disponibles en este apartado.</p></div>`;
      return;
    }

    list.innerHTML = filteredResources
      .map((resource) => {
        const test = resource.data;
        const isComplete = resource.variant === "complete";
        const hasOrderSelector = (resource.orderModes?.length ?? 0) > 1;
        const isRangeBuilder = resource.questionSelection?.type === "range";
        const isTheory = resource.type === "teoria";
        const hasRelatedTheory = Boolean(resource.relatedTheory);
        const theoryNotice = resource.theoryNotice;
        const usesLightTestTitle = resource.type === "test" && !isComplete;
        const resourceTypeLabel = isComplete
          ? "Test completo"
          : resource.type === "test" && resource.author?.nombre
            ? `Test ${formatDisplayTitle(resource.author.nombre)}`
            : resource.type === "test"
              ? "Test"
              : isTheory
                ? "Teoría"
                : resource.type;
        const href = resource.type === "test"
          ? `#/test/${encodeURIComponent(resource.id)}`
          : resource.href;
        const directHref =
          resource.defaultOrder && resource.defaultOrder !== "natural"
            ? `${href}/${encodeURIComponent(resource.defaultOrder)}`
            : href;
        const actionLabel = resource.type === "test"
          ? resource.actionLabel ?? "Empezar test"
          : isTheory
            ? "Consultar teoría"
            : resource.actionLabel ?? "Abrir recurso";
        return `
          <article class="resource-card ${isComplete ? "resource-card-complete" : ""} ${isTheory ? "resource-card-theory" : ""}">
            <div class="card-topline">
              <span class="resource-type ${isComplete ? "resource-type-complete" : ""} ${isTheory ? "resource-type-theory" : ""}">${escapeHtml(resourceTypeLabel)}</span>
              ${resource.type === "test"
                ? `<span class="question-count">${escapeHtml(resource.questionCountLabel ?? `${test.preguntas.length} preguntas`)}</span>`
                : ""}
            </div>
            <h3 class="${usesLightTestTitle ? "resource-test-title" : ""}">${escapeHtml(formatDisplayTitle(resource.title))}</h3>
            ${isComplete
              ? '<p class="complete-description">Reúne todas las preguntas disponibles de este tema.</p>'
              : isTheory
                ? '<p class="complete-description">Consulta el contenido del tema en formato de lectura estructurada o accede al PDF original.</p>'
                : resource.description
                  ? `<p class="complete-description">${escapeHtml(resource.description)}</p>`
                  : ""}
            ${isRangeBuilder
              ? `<form class="range-test-builder" data-range-test-form data-test-id="${escapeHtml(resource.id)}" data-total-questions="${test.preguntas.length}" novalidate>
                  <label for="range-${escapeHtml(resource.id)}">Rango de preguntas</label>
                  <div class="range-test-controls">
                    <input id="range-${escapeHtml(resource.id)}" data-question-range type="text" inputmode="numeric" autocomplete="off" placeholder="Ej. 10-50" aria-describedby="range-help-${escapeHtml(resource.id)} range-error-${escapeHtml(resource.id)}">
                    <button class="resource-action" type="submit">Crear test</button>
                  </div>
                  <p id="range-help-${escapeHtml(resource.id)}" class="range-test-help">Desde la pregunta 1 hasta la ${test.preguntas.length}.</p>
                  <p id="range-error-${escapeHtml(resource.id)}" class="range-test-error" data-range-error role="alert" hidden>Escribe un rango válido, por ejemplo 10-50.</p>
                </form>`
              : hasOrderSelector
              ? `<div class="order-selector" role="group" aria-label="Orden de las preguntas">
                  <span>Elige el orden</span>
                  <div class="order-actions">
                    <a class="resource-action" href="${escapeHtml(href)}/natural">Orden natural</a>
                    <a class="resource-action" href="${escapeHtml(href)}/aleatorio">Orden aleatorio</a>
                  </div>
                </div>`
              : isTheory
                ? `<div class="resource-card-theory-actions">
                    <button class="resource-action" type="button" data-theory-resource="${escapeHtml(resource.id)}">${escapeHtml(actionLabel)}</button>
                    <a class="theory-pdf-link" href="${escapeHtml(resource.source.url)}" target="_blank" rel="noopener" aria-label="Abrir el PDF de la teoría en otra pestaña" title="Abrir PDF">
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M7 3.75h6.8L18 7.95v12.3H7z"></path>
                        <path d="M13.5 3.75V8.2H18M9.5 15.6h5M9.5 12.5h5"></path>
                      </svg>
                      <span>PDF</span>
                    </a>
                  </div>`
                : `<div class="resource-card-actions">
                    ${hasRelatedTheory
                      ? `<button class="resource-theory-action" type="button" data-related-theory="${escapeHtml(resource.id)}">Consultar teoría</button>`
                      : theoryNotice
                        ? `<span class="resource-theory-notice">${escapeHtml(theoryNotice)}</span>`
                      : ""}
                    <a class="resource-action" href="${escapeHtml(directHref)}">${escapeHtml(actionLabel)}</a>
                  </div>`}
          </article>
        `;
      })
      .join("");
  }

  updateList(resources);
  return { updateList };
}
