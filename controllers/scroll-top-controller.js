export class ScrollTopController {
  constructor(button, { viewportThreshold = 0.25 } = {}) {
    this.button = button;
    this.viewportThreshold = viewportThreshold;
    this.onViewportChange = this.onViewportChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  start() {
    if (!this.button) return this;
    this.button.addEventListener("click", this.onClick);
    window.addEventListener("scroll", this.onViewportChange, { passive: true });
    window.addEventListener("resize", this.onViewportChange);
    this.onViewportChange();
    return this;
  }

  onClick() {
    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth";
    window.scrollTo({ top: 0, behavior });
  }

  onViewportChange() {
    if (this.button) {
      this.button.hidden = window.scrollY < window.innerHeight * this.viewportThreshold;
    }
  }
}
