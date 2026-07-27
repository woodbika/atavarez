import { formatDisplayTitle } from "../utils/text.js";

export function buildStudyContextItems({ opposition, theme, test } = {}) {
  if (!opposition) return [];

  const oppositionContext =
    `${formatDisplayTitle(opposition.administration)} · ` +
    formatDisplayTitle(opposition.title);
  const items = [
    {
      key: "opposition",
      label: "Oposición",
      value: oppositionContext,
      compactValue: oppositionContext,
    },
  ];

  if (theme) {
    const isNumberedTheme = opposition.navigation?.showUnitNumber !== false;
    items.push({
      key: "theme",
      label: isNumberedTheme ? "Tema" : "Apartado",
      value: isNumberedTheme ? `Tema ${theme.numero}` : theme.titulo,
      compactValue: isNumberedTheme ? `Tema ${theme.numero}` : theme.titulo,
      title: theme.titulo,
    });
  }

  if (test) {
    const title = formatDisplayTitle(test.titulo);
    items.push({
      key: "test",
      label: "Test",
      value: title,
      compactValue: title,
    });
  }

  return items;
}

export class StudyContextController {
  constructor(element) {
    this.element = element;
    this.list = element?.querySelector(".study-context-list") ?? null;
  }

  hide() {
    if (!this.element || !this.list) return;
    this.element.hidden = true;
    delete this.list.dataset.depth;
    this.list.replaceChildren();
  }

  show(location) {
    if (!this.element || !this.list) return;
    const items = buildStudyContextItems(location);
    if (!items.length) {
      this.hide();
      return;
    }

    const fragment = document.createDocumentFragment();
    items.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.className = `study-context-item study-context-${item.key}`;
      listItem.setAttribute("aria-label", `${item.label}: ${item.value}`);
      listItem.title = item.title ?? item.value;

      const label = document.createElement("span");
      label.className = "study-context-key";
      label.setAttribute("aria-hidden", "true");
      label.textContent = item.label;

      const value = document.createElement("span");
      value.className = "study-context-value study-context-value-wide";
      value.setAttribute("aria-hidden", "true");
      value.textContent = item.value;

      const compactValue = document.createElement("span");
      compactValue.className = "study-context-value study-context-value-compact";
      compactValue.setAttribute("aria-hidden", "true");
      compactValue.textContent = item.compactValue;

      listItem.append(label, value, compactValue);
      fragment.append(listItem);
    });

    this.list.replaceChildren(fragment);
    this.list.dataset.depth = String(items.length);
    this.element.hidden = false;
  }
}
