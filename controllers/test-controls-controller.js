const FONT_LEVELS = [
  { key: "small", label: "pequeño" },
  { key: "medium", label: "medio" },
  { key: "large", label: "grande" },
];

export class TestControlsController {
  constructor(root) {
    this.root = root;
    this.search = document.querySelector("#header-search");
    this.searchInput = document.querySelector("#resource-search");
    this.searchLabel = this.search.querySelector("label");
    this.focusToggle = document.querySelector("#focus-toggle");
    this.focusToggleLabel = this.focusToggle.querySelector(".focus-toggle-label");
    this.fontControls = document.querySelector("#test-font-controls");
    this.testViewTools = document.querySelector(".test-view-tools");
    this.fontStatus = this.fontControls.querySelector(".test-font-status");
    this.focusBackdrop = document.querySelector("#focus-backdrop");
    this.fontLevel = 1;
    this.focusTransitionTimer = null;
    this.onDocumentKeydown = this.onDocumentKeydown.bind(this);
  }

  start() {
    this.search.addEventListener("submit", (event) => event.preventDefault());
    this.focusToggle.addEventListener("click", () => {
      const isActive =
        document.body.classList.contains("focus-mode") &&
        !document.body.classList.contains("focus-mode-exiting");
      this.setFocusMode(!isActive);
    });
    this.focusBackdrop.addEventListener("click", () => {
      const canDismiss = window.matchMedia("(min-width: 901px)").matches;
      const isActive =
        document.body.classList.contains("focus-mode") &&
        !document.body.classList.contains("focus-mode-exiting");
      if (canDismiss && isActive) this.setFocusMode(false);
    });
    this.fontControls.addEventListener("click", (event) => {
      const action = event.target.closest("[data-font-action]")?.dataset.fontAction;
      if (!action) return;
      this.setFontLevel(this.fontLevel + (action === "increase" ? 1 : -1));
    });
    document.addEventListener("keydown", this.onDocumentKeydown);
    this.setFontLevel(this.fontLevel);
  }

  onDocumentKeydown(event) {
    if (!document.body.classList.contains("focus-mode")) return;
    if (event.key === "Escape") {
      event.preventDefault();
      this.setFocusMode(false);
      this.focusToggle.focus({ preventScroll: true });
      return;
    }
    if (event.key !== "Tab") return;

    const focusables = [
      ...new Set([
        ...this.fontControls.querySelectorAll("button:not(:disabled)"),
        this.focusToggle,
        ...this.root.querySelectorAll(
          '.focus-content a[href], .focus-content button:not(:disabled), .focus-content input:not(:disabled), .focus-content [tabindex]:not([tabindex="-1"])',
        ),
      ]),
    ].filter((element) => !element.hidden);
    if (!focusables.length) return;

    const currentIndex = focusables.indexOf(document.activeElement);
    const shouldWrapForward = !event.shiftKey && currentIndex === focusables.length - 1;
    const shouldWrapBackward = event.shiftKey && currentIndex <= 0;
    if (!shouldWrapForward && !shouldWrapBackward && currentIndex >= 0) return;
    event.preventDefault();
    const target = shouldWrapBackward ? focusables.at(-1) : focusables[0];
    target.focus({ preventScroll: true });
  }

  setTestRouteActive(active) {
    document.body.classList.toggle("test-route-active", active);
    this.focusToggle.hidden = !active;
    this.fontControls.hidden = !active;
    if (active) return;
    this.releaseTestTools();
    this.setFocusMode(false, { immediate: true });
    this.setFontLevel(1);
  }

  releaseTestTools() {
    if (this.testViewTools.parentElement === document.body) return;
    this.focusBackdrop.before(this.testViewTools);
  }

  mountTestTools() {
    this.root.querySelector(".focus-content")?.prepend(this.testViewTools);
  }

  hideSearch() {
    this.search.hidden = true;
    this.searchInput.value = "";
    this.searchInput.oninput = null;
  }

  showSearch(label, onSearch) {
    this.search.hidden = false;
    this.searchLabel.textContent = label;
    this.searchInput.placeholder = label;
    this.searchInput.oninput = () => onSearch(this.searchInput.value);
  }

  setFocusMode(active, { immediate = false } = {}) {
    window.clearTimeout(this.focusTransitionTimer);
    this.focusTransitionTimer = null;
    const label = active ? "Salir del modo concentración" : "Activar modo concentración";
    this.focusToggle.setAttribute("aria-pressed", String(active));
    this.focusToggle.setAttribute("aria-label", label);
    this.focusToggle.setAttribute("title", label);
    this.focusToggleLabel.textContent = label;

    if (active) {
      document.body.classList.remove("focus-mode-exiting");
      document.body.classList.add("focus-mode", "focus-mode-entering");
      this.focusTransitionTimer = window.setTimeout(() => {
        document.body.classList.remove("focus-mode-entering");
        this.focusTransitionTimer = null;
      }, 220);
      this.root.querySelector(".question-card")?.focus({ preventScroll: true });
      return;
    }

    const finishTransition = () => {
      document.body.classList.remove(
        "focus-mode",
        "focus-mode-entering",
        "focus-mode-exiting",
      );
      this.focusTransitionTimer = null;
    };
    if (
      immediate ||
      !document.body.classList.contains("focus-mode") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      finishTransition();
      return;
    }
    document.body.classList.add("focus-mode-exiting");
    this.focusTransitionTimer = window.setTimeout(finishTransition, 200);
  }

  setFontLevel(level) {
    this.fontLevel = Math.min(Math.max(level, 0), FONT_LEVELS.length - 1);
    const currentLevel = FONT_LEVELS[this.fontLevel];
    document.body.dataset.testFontSize = currentLevel.key;
    this.fontControls.querySelector('[data-font-action="decrease"]').disabled =
      this.fontLevel === 0;
    this.fontControls.querySelector('[data-font-action="increase"]').disabled =
      this.fontLevel === FONT_LEVELS.length - 1;
    this.fontStatus.textContent = `Tamaño de texto ${currentLevel.label}`;
  }
}
