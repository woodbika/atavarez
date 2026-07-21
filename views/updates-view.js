import { escapeHtml } from "../utils/text.js";

const updateDateFormatter = new Intl.DateTimeFormat("es-ES", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Europe/Madrid",
});

export function renderUpdates(root, updates) {
  root.innerHTML = updates.length
    ? updates.map((update) => `
        <li class="update-entry">
          <div class="update-entry-meta">
            <span>${escapeHtml(update.category)}</span>
            <time datetime="${escapeHtml(update.publishedAt)}">${escapeHtml(updateDateFormatter.format(new Date(update.publishedAt)))}</time>
          </div>
          <h3>${escapeHtml(update.title)}</h3>
          <p>${escapeHtml(update.description)}</p>
        </li>
      `).join("")
    : '<li class="updates-empty">No hay novedades publicadas.</li>';
}
