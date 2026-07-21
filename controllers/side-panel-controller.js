const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "a[href]",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

const DEFAULT_INERT_SELECTORS = [
  ".site-header",
  ".test-view-tools",
  "#contenido",
  "#app-scroll-top",
];

export class SidePanelController {
  constructor({
    trigger,
    panel,
    backdrop,
    bodyClass,
    closeSelector,
    blockedBy = [],
  }) {
    this.trigger = trigger;
    this.panel = panel;
    this.backdrop = backdrop;
    this.bodyClass = bodyClass;
    this.closeSelector = closeSelector;
    this.blockedBy = blockedBy;
    this.previouslyFocused = null;
    this.managedInertTargets = [];
    this.inertTargets = DEFAULT_INERT_SELECTORS
      .map((selector) => document.querySelector(selector))
      .filter(Boolean);
    this.onKeydown = this.onKeydown.bind(this);
  }

  start() {
    this.trigger.addEventListener("click", () => this.open());
    this.panel.querySelector(this.closeSelector).addEventListener("click", () => {
      this.close();
    });
    this.backdrop.addEventListener("click", () => this.close());
    return this;
  }

  open() {
    if (
      document.body.classList.contains(this.bodyClass) ||
      this.blockedBy.some((className) => document.body.classList.contains(className))
    ) return;

    this.previouslyFocused = document.activeElement;
    this.managedInertTargets = this.inertTargets.filter(
      (element) => !element.hasAttribute("inert"),
    );
    this.managedInertTargets.forEach((element) => element.setAttribute("inert", ""));
    document.body.classList.add(this.bodyClass);
    this.panel.removeAttribute("inert");
    this.trigger.setAttribute("aria-expanded", "true");
    this.panel.setAttribute("aria-hidden", "false");
    this.backdrop.setAttribute("aria-hidden", "false");
    document.addEventListener("keydown", this.onKeydown);
    this.panel.querySelector(this.closeSelector).focus({ preventScroll: true });
  }

  close() {
    if (!document.body.classList.contains(this.bodyClass)) return;
    document.body.classList.remove(this.bodyClass);
    this.managedInertTargets.forEach((element) => element.removeAttribute("inert"));
    this.managedInertTargets = [];
    this.panel.setAttribute("inert", "");
    this.trigger.setAttribute("aria-expanded", "false");
    this.panel.setAttribute("aria-hidden", "true");
    this.backdrop.setAttribute("aria-hidden", "true");
    document.removeEventListener("keydown", this.onKeydown);
    this.previouslyFocused?.focus?.({ preventScroll: true });
  }

  onKeydown(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = [...this.panel.querySelectorAll(FOCUSABLE_SELECTOR)];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
