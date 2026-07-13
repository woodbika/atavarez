const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "input:not([disabled])",
  "a[href]",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export class SettingsController {
  constructor({ trigger, panel, backdrop, themeController }) {
    this.trigger = trigger;
    this.panel = panel;
    this.backdrop = backdrop;
    this.themeController = themeController;
    this.previouslyFocused = null;
    this.onKeydown = this.onKeydown.bind(this);
  }

  start() {
    this.trigger.addEventListener("click", () => this.open());
    this.panel.querySelector("[data-settings-close]").addEventListener("click", () => {
      this.close();
    });
    this.backdrop.addEventListener("click", () => this.close());
    this.panel.querySelectorAll("[data-theme-mode]").forEach((button) => {
      button.addEventListener("click", () => this.setMode(button.dataset.themeMode));
    });
    this.panel.querySelectorAll("[data-palette]").forEach((button) => {
      button.addEventListener("click", () => this.setPalette(button.dataset.palette));
    });
    this.panel.querySelectorAll("[data-test-setting]").forEach((control) => {
      control.addEventListener("change", () => {
        const value = control.type === "checkbox" ? control.checked : control.value;
        this.emitSetting(control.dataset.testSetting, value);
      });
    });
    this.setMode("light");
    this.setPalette("forest");
    return this;
  }

  open() {
    if (document.body.classList.contains("settings-open")) return;
    this.previouslyFocused = document.activeElement;
    document.body.classList.add("settings-open");
    this.trigger.setAttribute("aria-expanded", "true");
    this.panel.setAttribute("aria-hidden", "false");
    this.backdrop.setAttribute("aria-hidden", "false");
    document.addEventListener("keydown", this.onKeydown);
    this.panel.querySelector("[data-settings-close]").focus({ preventScroll: true });
  }

  close() {
    if (!document.body.classList.contains("settings-open")) return;
    document.body.classList.remove("settings-open");
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

  setMode(mode) {
    this.themeController.applyMode(mode);
    this.panel.querySelectorAll("[data-theme-mode]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.themeMode === mode));
    });
  }

  setPalette(palette) {
    this.themeController.applyPalette(palette);
    this.panel.querySelectorAll("[data-palette]").forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.palette === palette));
    });
  }

  emitSetting(key, value) {
    if (key === "focusMode" && value && document.querySelector(".test-shell")) {
      this.close();
    }
    window.dispatchEvent(new CustomEvent("testsettingchange", { detail: { key, value } }));
  }
}
