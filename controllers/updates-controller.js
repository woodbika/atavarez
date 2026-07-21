import { SidePanelController } from "./side-panel-controller.js";
import { renderUpdates } from "../views/updates-view.js";

const RECENT_UPDATE_DURATION = 24 * 60 * 60 * 1000;

export class UpdatesController extends SidePanelController {
  constructor({ trigger, panel, backdrop, updates }) {
    super({
      trigger,
      panel,
      backdrop,
      bodyClass: "updates-open",
      closeSelector: "[data-updates-close]",
      blockedBy: ["settings-open"],
    });
    this.indicator = trigger.querySelector(".updates-indicator");
    this.updates = updates;
    this.recentUpdateTimer = null;
  }

  start() {
    renderUpdates(this.panel.querySelector("[data-updates-list]"), this.updates);
    super.start();
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

}
