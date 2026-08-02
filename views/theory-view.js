import { escapeHtml, formatDisplayTitle } from "../utils/text.js";

function renderTextContent(node) {
  const paragraphs = [];
  if (node.texto) paragraphs.push(`<p>${escapeHtml(node.texto)}</p>`);
  (node.parrafos ?? []).forEach((paragraph) => {
    paragraphs.push(`<p>${escapeHtml(paragraph)}</p>`);
  });

  const subsections = (node.apartados ?? []).length
    ? `<ol class="theory-subsections">
        ${node.apartados.map((section) => `
          <li>
            <span class="theory-subsection-number">${escapeHtml(section.numero)}</span>
            <div>
              ${renderTextContent(section)}
            </div>
          </li>
        `).join("")}
      </ol>`
    : "";

  const letters = (node.letras ?? []).length
    ? `<ol class="theory-letters">
        ${node.letras.map((item) => `
          <li>
            <span>${escapeHtml(item.letra)})</span>
            <div>${renderTextContent(item)}</div>
          </li>
        `).join("")}
      </ol>`
    : "";

  const ordinals = (node.ordinales ?? []).length
    ? `<ol class="theory-ordinals">
        ${node.ordinales.map((item) => `
          <li>
            <span>${escapeHtml(item.ordinal)}</span>
            <div>${renderTextContent(item)}</div>
          </li>
        `).join("")}
      </ol>`
    : "";

  const numerals = (node.numerales ?? []).length
    ? `<ol class="theory-numerals">
        ${node.numerales.map((item) => `
          <li>
            <span>${escapeHtml(item.numero)}.</span>
            <div>${renderTextContent(item)}</div>
          </li>
        `).join("")}
      </ol>`
    : "";

  return `${paragraphs.join("")}${letters}${ordinals}${numerals}${subsections}`;
}

function legalScope(item, parentScope = "") {
  const kind = item.tipo ?? "articulo";
  const identity = String(item.numero ?? item.titulo ?? "contenido")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return [parentScope, kind, identity].filter(Boolean).join("-");
}

function legalTarget(item, parentScope = "") {
  return `theory-${legalScope(item, parentScope)}`;
}

function isLegalArticle(item) {
  return item.tipo === "articulo" || item.numero !== undefined && !item.tipo;
}

function articleMatchesSelection(articleNumber, selection) {
  if (selection.articleNumbers) {
    return selection.articleNumbers.includes(articleNumber);
  }
  const range = selection.articles;
  return articleNumber >= range.from && articleNumber <= range.to;
}

function filterLegalItem(item, selection) {
  if (isLegalArticle(item)) {
    const articleNumber = Number(item.numero);
    return articleMatchesSelection(articleNumber, selection) ? item : null;
  }

  const childKey = Array.isArray(item.contenido) ? "contenido" : "articulos";
  const children = (item[childKey] ?? [])
    .map((child) => filterLegalItem(child, selection))
    .filter(Boolean);
  return children.length ? { ...item, [childKey]: children } : null;
}

function selectedTheory(theory, selection) {
  if (!selection) return theory;
  let blocks = theory.bloques;
  if (selection.blockIds) {
    const blockIds = new Set(selection.blockIds);
    blocks = blocks.filter((block) => blockIds.has(block.id));
  }
  if (!selection.articles && !selection.articleNumbers) return { ...theory, bloques };
  return {
    ...theory,
    bloques: blocks
      .filter((block) => block.tipo === "titulo" || block.tipo === "apartado-tematico")
      .map((block) => ({
        ...block,
        contenido: block.contenido
          .map((item) => filterLegalItem(item, selection))
          .filter(Boolean),
      }))
      .filter((block) => block.contenido.length),
  };
}

function selectionTitle(selection) {
  if (selection?.blockIds?.includes("estructura")) return "Estructura de la Constitución Española";
  if (selection?.articleNumbers) {
    const numbers = selection.articleNumbers;
    if (numbers.length === 1) return `Artículo ${numbers[0]}`;
    return `Artículos ${numbers.slice(0, -1).join(", ")} y ${numbers.at(-1)}`;
  }
  const range = selection?.articles;
  if (!range) return "";
  return range.from === range.to
    ? `Artículo ${range.from}`
    : `Artículos del ${range.from} al ${range.to}`;
}

function legalItemLabel(item) {
  if (isLegalArticle(item)) return `Artículo ${item.numero}`;
  if (item.tipo === "capitulo" && item.numero != null) return `Capítulo ${item.numero}`;
  if (item.tipo === "titulo" && item.numero != null) return `Título ${item.numero}`;
  if (item.tipo === "seccion" && item.numero != null) return `Sección ${item.numero}`;
  return item.titulo ?? "";
}

function renderLegalItem(item, parentScope) {
  const itemScope = legalScope(item, parentScope);
  if (isLegalArticle(item)) {
    return `
      <article id="${legalTarget(item, parentScope)}" class="theory-article">
        <h4>
          <span>Artículo ${escapeHtml(item.numero)}</span>
          ${item.titulo ? `<strong>${escapeHtml(item.titulo)}</strong>` : ""}
        </h4>
        ${renderTextContent(item)}
      </article>
    `;
  }

  const label = legalItemLabel(item);
  const showTitle = item.titulo && item.titulo !== label;
  const children = item.contenido ?? item.articulos ?? [];
  return `
    <section id="${legalTarget(item, parentScope)}" class="theory-legal-group theory-${escapeHtml(item.tipo)}">
      <header>
        ${label ? `<span>${escapeHtml(label)}</span>` : ""}
        ${showTitle ? `<h3>${escapeHtml(item.titulo)}</h3>` : ""}
      </header>
      <div class="theory-legal-content">
        ${children.map((child) => renderLegalItem(child, itemScope)).join("")}
      </div>
    </section>
  `;
}

function theoryNavigationItems(items, parentScope, depth = 0) {
  return items.flatMap((item) => {
    const isArticle = isLegalArticle(item);
    const children = item.contenido ?? item.articulos ?? [];
    const includeItem = !isArticle || depth === 0;
    const itemScope = legalScope(item, parentScope);
    return [
      ...(includeItem ? [{ item, target: legalTarget(item, parentScope) }] : []),
      ...theoryNavigationItems(children, itemScope, depth + 1),
    ];
  });
}

function descendantArticleNumbers(item) {
  const isArticle = isLegalArticle(item);
  if (isArticle) return [Number(item.numero)];
  const children = item.contenido ?? item.articulos ?? [];
  return children.flatMap(descendantArticleNumbers).filter(Number.isFinite);
}

function articleRange(item) {
  const numbers = descendantArticleNumbers(item);
  if (!numbers.length) return "";
  const first = Math.min(...numbers);
  const last = Math.max(...numbers);
  return first === last
    ? `[Artículo ${first}]`
    : `[Artículos del ${first} al ${last}]`;
}

function renderTheoryNavItem({ item, target }) {
  const isArticle = isLegalArticle(item);
  const label = legalItemLabel(item);
  const range = isArticle ? "" : articleRange(item);
  return `
    <li>
      <button type="button" data-theory-target="${target}">
        <span>${escapeHtml(label)}</span>
        ${item.titulo && item.titulo !== label ? `<small>${escapeHtml(item.titulo)}</small>` : ""}
        ${range ? `<em>${escapeHtml(range)}</em>` : ""}
      </button>
    </li>
  `;
}

function renderTheorySideNav(theory) {
  const legalBlocks = theory.bloques.filter((block) => block.tipo !== "estructura");
  if (!legalBlocks.length) return "";
  return `
    <aside class="theory-side-nav" aria-label="Navegar por el contenido de la teoría">
      ${legalBlocks.map((block) => {
        const isThematic = block.tipo === "contenido-tematico";
        return `
          <div>
            <span>${block.tipo === "titulo" && block.numero != null
              ? `Título ${escapeHtml(block.numero)}`
              : "Bloque temático"}</span>
            <strong>${escapeHtml(formatDisplayTitle(block.titulo))}</strong>
          </div>
          <ul>${isThematic
            ? `<li>
                <button type="button" data-theory-target="theory-block-${escapeHtml(block.id)}">
                  <span>Consultar apartado</span>
                </button>
              </li>`
            : theoryNavigationItems(block.contenido, block.id).map(renderTheoryNavItem).join("")}</ul>
        `;
      }).join("")}
    </aside>
  `;
}

function renderStructureItem(item) {
  const detail = item.articulos
    ? `Artículos ${item.articulos}`
    : item.cantidad !== undefined
      ? `${item.cantidad}`
      : "";
  return `
    <li>
      <div class="theory-structure-line">
        <span>
          <strong>${escapeHtml(item.titulo)}</strong>
          ${item.subtitulo ? `<small>${escapeHtml(item.subtitulo)}</small>` : ""}
        </span>
        ${detail ? `<em>${escapeHtml(detail)}</em>` : ""}
      </div>
      ${(item.elementos ?? []).length
        ? `<ol>${item.elementos.map(renderStructureItem).join("")}</ol>`
        : ""}
    </li>
  `;
}

function thematicMarker(item) {
  if (item.tipo === "elemento-numerado") return `${item.numero}.`;
  if (item.tipo === "elemento-letra" || item.tipo === "elemento-mayuscula") {
    return `${item.letra})`;
  }
  return "•";
}

function renderThematicContent(items) {
  const fragments = [];
  let index = 0;

  while (index < items.length) {
    const item = items[index];
    if (item.tipo === "parrafo") {
      fragments.push(`<p>${escapeHtml(item.texto)}</p>`);
      index += 1;
      continue;
    }
    if (item.tipo === "subtitulo") {
      fragments.push(`<h4>${escapeHtml(formatDisplayTitle(item.texto))}</h4>`);
      index += 1;
      continue;
    }
    if (item.tipo === "dato") {
      fragments.push(`<aside class="theory-thematic-data">${escapeHtml(item.texto)}</aside>`);
      index += 1;
      continue;
    }

    const listType = item.tipo;
    const listItems = [];
    while (items[index]?.tipo === listType) {
      listItems.push(items[index]);
      index += 1;
    }
    fragments.push(`
      <ul class="theory-thematic-list">
        ${listItems.map((entry) => `
          <li>
            <span>${escapeHtml(thematicMarker(entry))}</span>
            <p>${escapeHtml(entry.texto)}</p>
          </li>
        `).join("")}
      </ul>
    `);
  }

  return fragments.join("");
}

function renderTheoryBlock(block) {
  if (block.tipo === "estructura") {
    return `
      <section id="theory-block-${escapeHtml(block.id)}" class="theory-block theory-structure-block">
        <header class="theory-block-heading">
          <span>Visión general</span>
          <h3>${escapeHtml(block.titulo)}</h3>
          <p>${escapeHtml(block.introduccion)}</p>
        </header>
        <ol class="theory-structure-tree">
          ${block.elementos.map(renderStructureItem).join("")}
        </ol>
        ${block.promulgacion
          ? `<aside class="theory-note"><strong>Fechas esenciales</strong><p>${escapeHtml(block.promulgacion)}</p></aside>`
          : ""}
      </section>
    `;
  }

  if (block.tipo === "contenido-tematico") {
    return `
      <section id="theory-block-${escapeHtml(block.id)}" class="theory-block theory-thematic-block">
        <header class="theory-block-heading">
          <span>Bloque temático</span>
          <h3>${escapeHtml(formatDisplayTitle(block.titulo))}</h3>
        </header>
        <div class="theory-thematic-content">
          ${renderThematicContent(block.contenido)}
        </div>
      </section>
    `;
  }

  return `
    <section id="theory-block-${escapeHtml(block.id)}" class="theory-block theory-law-block">
      <header class="theory-block-heading">
        <span>${block.tipo === "titulo" && block.numero != null
          ? `Título ${escapeHtml(block.numero)}`
          : "Bloque temático"}</span>
        <h3>${escapeHtml(block.titulo)}</h3>
      </header>
      <div class="theory-law-content">
        ${block.contenido.map((item) => renderLegalItem(item, block.id)).join("")}
      </div>
    </section>
  `;
}

export function openTheoryModal(root, resource, trigger, options = {}) {
  root.querySelector("#theory-modal")?.remove();
  const theory = resource.data;
  const displayedTheory = selectedTheory(theory, options.selection);
  const contextualTitle = selectionTitle(options.selection);
  const hasSideNavigation = displayedTheory.bloques.some((block) => block.tipo !== "estructura");
  root.insertAdjacentHTML("beforeend", `
    <dialog id="theory-modal" class="theory-modal" aria-labelledby="theory-modal-title" aria-describedby="theory-modal-subtitle">
      <div class="theory-modal-shell">
        <header class="theory-modal-heading">
          <div>
            <p class="eyebrow">${options.selection ? "Teoría relacionada" : "Teoría"} · Tema ${escapeHtml(theory.clasificacion.tema.numero)}</p>
            <h2 id="theory-modal-title">${escapeHtml(contextualTitle || resource.title)}</h2>
            <p id="theory-modal-subtitle">${escapeHtml(options.contextTitle || theory.titulo)}</p>
          </div>
          <button class="theory-modal-close" type="button" data-theory-close aria-label="Cerrar teoría" title="Cerrar">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"></path></svg>
          </button>
        </header>
        <div class="theory-modal-body ${hasSideNavigation ? "" : "theory-modal-body-wide"}">
          <div class="theory-modal-content">
            ${displayedTheory.bloques.map(renderTheoryBlock).join("")}
          </div>
          ${renderTheorySideNav(displayedTheory)}
        </div>
      </div>
    </dialog>
  `);

  const dialog = root.querySelector("#theory-modal");
  const close = () => dialog.close();
  dialog.querySelectorAll("[data-theory-close]").forEach((button) => {
    button.addEventListener("click", close);
  });
  dialog.querySelectorAll("[data-theory-target]").forEach((button) => {
    button.addEventListener("click", () => {
      dialog.querySelector(`#${button.dataset.theoryTarget}`)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
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
