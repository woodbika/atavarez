function releaseTouchFocus(event, button) {
  if (event.detail > 0 && window.matchMedia("(hover: none)").matches) button.blur();
}

export class ReviewController {
  constructor(root) {
    this.root = root;
  }

  start() {
    this.filterButtons = [...this.root.querySelectorAll("[data-review-filter]")];
    this.reviewRows = [...this.root.querySelectorAll("[data-review-state]")];
    this.reviewList = this.root.querySelector(".review-list");
    this.emptyState = this.root.querySelector("#review-empty");
    this.filterStatus = this.root.querySelector("#review-filter-status");
    this.filterButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        this.applyFilter(button.dataset.reviewFilter, button);
        releaseTouchFocus(event, button);
      });
    });
    return this;
  }

  applyFilter(filter, activeButton) {
    let visibleCount = 0;
    this.filterButtons.forEach((button) => {
      const isActive = button === activeButton;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
    this.reviewRows.forEach((row) => {
      const isVisible = filter === "all" || row.dataset.reviewState === filter;
      row.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });
    this.reviewList.hidden = visibleCount === 0;
    this.emptyState.hidden = visibleCount > 0;
    this.emptyState.textContent = filter === "unanswered"
      ? "No hay preguntas sin responder."
      : "No hay respuestas incorrectas.";
    this.filterStatus.textContent = `${visibleCount} ${
      visibleCount === 1 ? "respuesta mostrada" : "respuestas mostradas"
    }`;
  }

  destroy() {
  }
}
