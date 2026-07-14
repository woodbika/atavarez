import { formatCountdown, testDurationSeconds } from "../utils/test-timer.js";

const TICK_INTERVAL = 250;

export class TestTimerController {
  constructor(root, { onExpire, onPause, now = () => performance.now() } = {}) {
    this.root = root;
    this.onExpire = onExpire;
    this.onPause = onPause;
    this.now = now;
    this.enabled = false;
    this.paused = false;
    this.remainingMs = 0;
    this.totalMs = 0;
    this.lastTickAt = null;
    this.intervalId = null;
    this.onKeydown = this.onKeydown.bind(this);
  }

  start(questionCount, enabled, secondsPerQuestion = 40) {
    this.reset();
    this.enabled = Boolean(enabled);
    this.totalMs = testDurationSeconds(questionCount, secondsPerQuestion) * 1000;
    this.remainingMs = this.totalMs;
    if (this.enabled) this.run();
  }

  setEnabled(enabled, questionCount, secondsPerQuestion = 40) {
    const shouldEnable = Boolean(enabled);
    if (shouldEnable === this.enabled) return;
    if (!shouldEnable) {
      this.reset();
      return;
    }
    this.start(questionCount, true, secondsPerQuestion);
  }

  run() {
    if (!this.enabled || this.paused || this.remainingMs <= 0) return;
    this.lastTickAt = this.now();
    window.clearInterval(this.intervalId);
    this.intervalId = window.setInterval(() => this.tick(), TICK_INTERVAL);
    this.updateView();
  }

  tick() {
    if (!this.enabled || this.paused || this.lastTickAt === null) return;
    const currentTime = this.now();
    this.remainingMs = Math.max(0, this.remainingMs - (currentTime - this.lastTickAt));
    this.lastTickAt = currentTime;
    this.updateView();
    if (this.remainingMs > 0) return;
    this.stopInterval();
    this.enabled = false;
    this.setPausedUi(false);
    this.onExpire?.();
  }

  pause() {
    if (!this.enabled || this.paused) return;
    this.tick();
    if (!this.enabled) return;
    this.paused = true;
    this.stopInterval();
    this.onPause?.();
    this.setPausedUi(true);
    this.updateView();
    this.root.querySelector("[data-timer-resume]")?.focus({ preventScroll: true });
  }

  resume() {
    if (!this.enabled || !this.paused) return;
    this.paused = false;
    this.setPausedUi(false);
    this.run();
    this.root.querySelector("[data-timer-toggle]")?.focus({ preventScroll: true });
  }

  attach() {
    if (!this.enabled) return;
    this.root.querySelector("[data-timer-toggle]")?.addEventListener("click", () => {
      this.pause();
    });
    this.root.querySelector("[data-timer-resume]")?.addEventListener("click", () => {
      this.resume();
    });
    this.setPausedUi(this.paused);
    this.updateView();
  }

  snapshot() {
    const remainingSeconds = Math.ceil(this.remainingMs / 1000);
    return {
      enabled: this.enabled,
      paused: this.paused,
      remainingSeconds,
      totalSeconds: Math.ceil(this.totalMs / 1000),
      label: formatCountdown(remainingSeconds),
    };
  }

  updateView() {
    if (!this.enabled) return;
    const state = this.snapshot();
    const isLow = state.remainingSeconds <= Math.min(60, state.totalSeconds * 0.1);
    this.root.querySelectorAll("[data-timer-value]").forEach((element) => {
      element.textContent = state.label;
      element.setAttribute("datetime", `PT${state.remainingSeconds}S`);
    });
    const toggle = this.root.querySelector("[data-timer-toggle]");
    if (toggle) {
      toggle.classList.toggle("is-low", isLow);
      toggle.setAttribute(
        "aria-label",
        `Pausar el test. Tiempo restante: ${state.label}`,
      );
    }
    this.root.querySelector(".timer-pause-dialog")?.classList.toggle("is-low", isLow);
  }

  stopInterval() {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
    this.lastTickAt = null;
  }

  reset() {
    this.stopInterval();
    this.enabled = false;
    this.paused = false;
    this.remainingMs = 0;
    this.totalMs = 0;
    this.setPausedUi(false);
  }

  onKeydown(event) {
    if (!this.paused) return;
    event.preventDefault();
    event.stopImmediatePropagation();
    this.root.querySelector("[data-timer-resume]")?.focus({ preventScroll: true });
  }

  setPausedUi(paused) {
    document.body.classList.toggle("timer-paused", paused);
    document.querySelector(".site-header")?.toggleAttribute("inert", paused);
    document.querySelector("#app-scroll-top")?.toggleAttribute("inert", paused);
    [...this.root.children].forEach((element) => {
      if (!element.classList.contains("timer-pause-layer")) {
        element.toggleAttribute("inert", paused);
      }
    });
    const layer = this.root.querySelector(".timer-pause-layer");
    layer?.setAttribute("aria-hidden", String(!paused));
    document.removeEventListener("keydown", this.onKeydown, true);
    if (paused) document.addEventListener("keydown", this.onKeydown, true);
  }
}
