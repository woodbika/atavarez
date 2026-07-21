import {
  DEFAULT_PREFERENCES,
  clearPreferences,
  loadPreferences,
  normalizePreferences,
  savePreferences,
} from "../utils/preferences.js";
import {
  MAX_SECONDS_PER_QUESTION,
  MIN_SECONDS_PER_QUESTION,
  SECONDS_PER_QUESTION,
} from "../utils/test-timer.js";
import { SidePanelController } from "./side-panel-controller.js";

const TEST_SETTING_KEYS = [
  "questionMap",
  "liveResponse",
  "autoAdvance",
  "timerEnabled",
  "timerSecondsPerQuestion",
  "focusMode",
  "fontSize",
];

export class SettingsController extends SidePanelController {
  constructor({ trigger, panel, backdrop, themeController }) {
    super({
      trigger,
      panel,
      backdrop,
      bodyClass: "settings-open",
      closeSelector: "[data-settings-close]",
      blockedBy: ["updates-open"],
    });
    this.themeController = themeController;
    try {
      this.storage = window.localStorage;
    } catch {
      this.storage = null;
    }
    this.preferences = loadPreferences(this.storage);
  }

  start() {
    super.start();
    this.panel.querySelector("[data-settings-reset]")?.addEventListener("click", () => {
      this.resetPreferences();
    });
    this.panel.querySelectorAll("[data-theme-mode]").forEach((button) => {
      button.addEventListener("click", () => this.setMode(button.dataset.themeMode));
    });
    this.panel.querySelectorAll("[data-palette]").forEach((button) => {
      button.addEventListener("click", () => this.setPalette(button.dataset.palette));
    });
    this.panel.querySelectorAll("[data-test-setting]").forEach((control) => {
      control.addEventListener("change", () => {
        const value = control.type === "checkbox" ? control.checked : control.value;
        this.updateTestSetting(control.dataset.testSetting, value);
        if (control.dataset.testSetting === "timerEnabled") {
          this.setTimerOptionsVisible(Boolean(value));
        }
      });
    });
    this.panel.querySelectorAll("[data-timer-duration]").forEach((control) => {
      control.addEventListener("change", () => {
        if (control.checked) this.setTimerDurationMode(control.value);
      });
    });
    this.panel.querySelector("[data-timer-custom-seconds]")?.addEventListener(
      "change",
      (event) => this.updateCustomTimerDuration(event.target),
    );
    this.applyPreferences();
    return this;
  }

  getTestPreferences() {
    return Object.fromEntries(
      TEST_SETTING_KEYS.map((key) => [key, this.preferences[key]]),
    );
  }

  applyPreferences({ emit = false } = {}) {
    this.setMode(this.preferences.themeMode, { persist: false });
    this.setPalette(this.preferences.palette, { persist: false });
    this.panel.querySelectorAll("[data-test-setting]").forEach((control) => {
      const value = this.preferences[control.dataset.testSetting];
      if (control.type === "checkbox") control.checked = Boolean(value);
      else if (control.type === "radio") control.checked = control.value === value;
    });

    const durationMode = this.preferences.timerDurationMode;
    this.panel.querySelectorAll("[data-timer-duration]").forEach((control) => {
      control.checked = control.value === durationMode;
    });
    const customInput = this.panel.querySelector("[data-timer-custom-seconds]");
    if (customInput) customInput.value = String(this.preferences.timerSecondsPerQuestion);
    this.setTimerOptionsVisible(this.preferences.timerEnabled);
    this.setCustomTimerVisible(durationMode === "custom");

    if (emit) {
      TEST_SETTING_KEYS.forEach((key) => this.emitSetting(key, this.preferences[key]));
    }
  }

  setMode(mode, { persist = true } = {}) {
    this.preferences.themeMode = mode === "dark" ? "dark" : "light";
    this.themeController.applyMode(this.preferences.themeMode);
    this.panel.querySelectorAll("[data-theme-mode]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.themeMode === this.preferences.themeMode),
      );
    });
    if (persist) this.persist();
  }

  setPalette(palette, { persist = true } = {}) {
    this.preferences.palette = ["forest", "mist", "clay"].includes(palette)
      ? palette
      : DEFAULT_PREFERENCES.palette;
    this.themeController.applyPalette(this.preferences.palette);
    this.panel.querySelectorAll("[data-palette]").forEach((button) => {
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.palette === this.preferences.palette),
      );
    });
    if (persist) this.persist();
  }

  updateTestSetting(key, value, { persist = true, emit = true } = {}) {
    if (!TEST_SETTING_KEYS.includes(key)) return;
    this.preferences = normalizePreferences({ ...this.preferences, [key]: value });
    if (persist) this.persist();
    if (emit) this.emitSetting(key, this.preferences[key]);
  }

  emitSetting(key, value) {
    if (key === "focusMode" && value && document.querySelector(".test-shell")) {
      this.close();
    }
    window.dispatchEvent(new CustomEvent("testsettingchange", { detail: { key, value } }));
  }

  setTimerOptionsVisible(visible) {
    const options = this.panel.querySelector("#timer-duration-settings");
    if (options) options.hidden = !visible;
  }

  setCustomTimerVisible(visible) {
    const customField = this.panel.querySelector(".settings-custom-time");
    if (customField) customField.hidden = !visible;
  }

  setTimerDurationMode(mode) {
    const isCustom = mode === "custom";
    const customInput = this.panel.querySelector("[data-timer-custom-seconds]");
    this.preferences.timerDurationMode = isCustom ? "custom" : "default";
    this.setCustomTimerVisible(isCustom);
    if (isCustom && customInput) {
      this.updateCustomTimerDuration(customInput);
      return;
    }
    this.updateTestSetting("timerSecondsPerQuestion", SECONDS_PER_QUESTION);
  }

  updateCustomTimerDuration(input) {
    const seconds = Math.min(
      MAX_SECONDS_PER_QUESTION,
      Math.max(
        MIN_SECONDS_PER_QUESTION,
        Math.round(Number(input.value) || SECONDS_PER_QUESTION),
      ),
    );
    input.value = String(seconds);
    this.preferences.timerDurationMode = "custom";
    this.updateTestSetting("timerSecondsPerQuestion", seconds);
  }

  persist() {
    savePreferences(this.storage, this.preferences);
  }

  resetPreferences() {
    clearPreferences(this.storage);
    this.preferences = { ...DEFAULT_PREFERENCES };
    this.applyPreferences({ emit: true });
    const status = this.panel.querySelector("[data-settings-status]");
    if (status) status.textContent = "Preferencias restablecidas.";
  }
}
