import { parseQuestionRange } from "../utils/test-order.js";
import { renderResources } from "../views/portal-view.js";
import { openTheoryModal } from "../views/theory-view.js";

export class ResourceController {
  constructor({ root, repository, testControls }) {
    this.root = root;
    this.repository = repository;
    this.testControls = testControls;
  }

  show(opposition, theme, resources) {
    const view = renderResources(this.root, {
      opposition,
      theme,
      resources,
    });
    let query = "";
    let authorFilter = "";
    const filterButtons = [
      ...this.root.querySelectorAll("[data-author-filter]"),
    ];
    const applyFilters = () => {
      const matchingResources = this.repository.searchResources(resources, query);
      view.updateList(
        authorFilter
          ? matchingResources.filter(
              (resource) =>
                resource.type === "test" &&
                resource.author?.id === authorFilter,
            )
          : matchingResources,
      );
    };

    filterButtons.forEach((filterButton) => {
      filterButton.addEventListener("click", (event) => {
        const requestedAuthor = filterButton.dataset.authorFilter;
        authorFilter = authorFilter === requestedAuthor ? "" : requestedAuthor;
        filterButtons.forEach((button) => {
          const isActive = button.dataset.authorFilter === authorFilter;
          button.setAttribute("aria-pressed", String(isActive));
          button.classList.toggle("is-active", isActive);
        });
        applyFilters();
        if (event.detail > 0 && window.matchMedia("(hover: none)").matches) {
          filterButton.blur();
        }
      });
    });

    const resourceList = this.root.querySelector("#resource-list");
    resourceList.addEventListener("click", (event) => {
      this.openTheory(event);
    });
    resourceList.addEventListener("submit", (event) => {
      this.createRangeTest(event);
    });
    resourceList.addEventListener("input", (event) => {
      this.clearRangeError(event);
    });

    if (resources.length) {
      this.testControls.showSearch("Buscar recursos", (searchQuery) => {
        query = searchQuery;
        applyFilters();
      });
    }
  }

  openTheory(event) {
    const trigger = event.target.closest(
      "[data-theory-resource], [data-related-theory]",
    );
    if (!trigger) return;
    if (trigger.dataset.theoryResource) {
      const resource = this.repository.getById(trigger.dataset.theoryResource);
      if (resource?.type === "teoria") {
        openTheoryModal(this.root, resource, trigger);
      }
      return;
    }

    const testResource = this.repository.getById(trigger.dataset.relatedTheory);
    const reference = testResource?.relatedTheory;
    const theoryResource = reference
      ? this.repository.getById(reference.resourceId)
      : null;
    if (!testResource || theoryResource?.type !== "teoria") return;
    openTheoryModal(this.root, theoryResource, trigger, {
      selection: reference.selection,
      contextTitle: testResource.title,
    });
  }

  createRangeTest(event) {
    const form = event.target.closest("[data-range-test-form]");
    if (!form) return;
    event.preventDefault();
    const input = form.querySelector("[data-question-range]");
    const error = form.querySelector("[data-range-error]");
    const range = parseQuestionRange(
      input.value,
      Number(form.dataset.totalQuestions),
    );
    if (!range) {
      input.setAttribute("aria-invalid", "true");
      error.hidden = false;
      input.focus();
      return;
    }

    input.removeAttribute("aria-invalid");
    error.hidden = true;
    location.hash =
      `#/test/${encodeURIComponent(form.dataset.testId)}/rango/${range.from}-${range.to}`;
  }

  clearRangeError(event) {
    const input = event.target.closest("[data-question-range]");
    if (!input) return;
    input.removeAttribute("aria-invalid");
    const error = input.form?.querySelector("[data-range-error]");
    if (error) error.hidden = true;
  }
}
