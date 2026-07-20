const FOCUSABLE_SELECTOR = [
  "button:not([disabled])",
  "a[href]",
  '[tabindex]:not([tabindex="-1"])',
].join(",");
const RECENT_UPDATE_DURATION = 24 * 60 * 60 * 1000;

export class UpdatesController {
  constructor({ trigger, panel, backdrop }) {
    this.trigger = trigger;
    this.panel = panel;
    this.backdrop = backdrop;
    this.indicator = trigger.querySelector(".updates-indicator");
    this.recentUpdateTimer = null;
    this.previouslyFocused = null;
    this.inertTargets = [
      document.querySelector(".site-header"),
      document.querySelector(".test-view-tools"),
      document.querySelector("#contenido"),
      document.querySelector("#app-scroll-top"),
    ].filter(Boolean);
    this.onKeydown = this.onKeydown.bind(this);
  }

  start() {
    this.trigger.addEventListener("click", () => this.open());
    this.panel.querySelector("[data-updates-close]").addEventListener("click", () => {
      this.close();
    });
    this.backdrop.addEventListener("click", () => this.close());
    this.updateRecentIndicator();
    return this;
  }

  updateRecentIndicator() {
    window.clearTimeout(this.recentUpdateTimer);
    const latestUpdate = Math.max(
      ...[...this.panel.querySelectorAll("time[datetime]")]
        .map((element) => Date.parse(element.dateTime))
        .filter(Number.isFinite),
    );
    const remaining = latestUpdate + RECENT_UPDATE_DURATION - Date.now();
    const hasRecentUpdates = Number.isFinite(remaining) && remaining > 0;
    this.indicator.hidden = !hasRecentUpdates;
    this.trigger.classList.toggle("has-recent-updates", hasRecentUpdates);
    this.trigger.setAttribute(
      "aria-label",
      hasRecentUpdates ? "Abrir novedades, hay novedades recientes" : "Abrir novedades",
    );
    this.trigger.title = hasRecentUpdates ? "Novedades recientes" : "Novedades";
    if (hasRecentUpdates) {
      this.recentUpdateTimer = window.setTimeout(
        () => this.updateRecentIndicator(),
        remaining,
      );
    }
  }

  open() {
    if (
      document.body.classList.contains("updates-open") ||
      document.body.classList.contains("settings-open")
    ) return;
    this.previouslyFocused = document.activeElement;
    document.body.classList.add("updates-open");
    this.inertTargets.forEach((element) => element.setAttribute("inert", ""));
    this.panel.removeAttribute("inert");
    this.trigger.setAttribute("aria-expanded", "true");
    this.panel.setAttribute("aria-hidden", "false");
    this.backdrop.setAttribute("aria-hidden", "false");
    document.addEventListener("keydown", this.onKeydown);
    this.panel.querySelector("[data-updates-close]").focus({ preventScroll: true });
  }

  close() {
    if (!document.body.classList.contains("updates-open")) return;
    document.body.classList.remove("updates-open");
    this.inertTargets.forEach((element) => element.removeAttribute("inert"));
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
