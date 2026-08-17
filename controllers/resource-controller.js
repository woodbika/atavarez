import { parseQuestionRange } from "../utils/test-order.js";
import {
  availableQuestionOrders,
  buildTestLaunchRoute,
} from "../utils/test-launch.js";
import { formatDisplayTitle } from "../utils/text.js";
import { renderResources } from "../views/portal-view.js";
import { openExplanationModal } from "../views/explanation-view.js";
import { openSummaryModal } from "../views/summary-view.js";
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
      if (this.openTestLaunch(event)) return;
      this.openTheory(event);
      this.openSummary(event);
      this.openExplanation(event);
    });
    resourceList.addEventListener("submit", (event) => {
      this.createRangeTest(event);
    });
    resourceList.addEventListener("input", (event) => {
      this.clearRangeError(event);
    });
    this.prepareLaunchDialog();

    if (resources.length) {
      this.testControls.showSearch("Buscar recursos", (searchQuery) => {
        query = searchQuery;
        applyFilters();
      });
    }
  }

  prepareLaunchDialog() {
    this.launchDialog = this.root.querySelector("#test-launch-dialog");
    this.launchForm = this.launchDialog?.querySelector("[data-test-launch-form]");
    this.launchState = null;
    if (!this.launchDialog || !this.launchForm) return;

    this.launchDialog.querySelectorAll("[data-test-launch-close]").forEach((button) => {
      button.addEventListener("click", () => this.closeLaunchDialog());
    });
    this.launchForm.addEventListener("submit", (event) => {
      this.startConfiguredTest(event);
    });
    this.launchDialog.addEventListener("cancel", () => {
      this.launchState = null;
    });
  }

  openTestLaunch(event) {
    const trigger = event.target.closest("[data-test-launch]");
    if (!trigger) return false;
    const resource = this.repository.getById(trigger.dataset.testLaunch);
    if (resource?.type === "test") {
      this.showLaunchDialog(resource, { trigger });
    }
    return true;
  }

  showLaunchDialog(resource, { trigger, selection = "" } = {}) {
    if (!this.launchDialog || !this.launchForm) return;
    const questionOrderModes = availableQuestionOrders(resource);
    const defaultQuestionOrder = questionOrderModes.includes(resource.defaultOrder)
      ? resource.defaultOrder
      : questionOrderModes[0];

    this.launchState = { resource, selection, trigger };
    this.launchDialog.querySelector("[data-test-launch-title]").textContent =
      formatDisplayTitle(resource.title);
    this.launchForm.querySelectorAll("[data-question-order-option]").forEach((option) => {
      const input = option.querySelector("input");
      const isAvailable = questionOrderModes.includes(input.value);
      option.hidden = !isAvailable;
      input.disabled = !isAvailable;
      input.checked = isAvailable && input.value === defaultQuestionOrder;
    });
    const naturalAnswers = this.launchForm.querySelector(
      '[name="answer-order"][value="natural"]',
    );
    if (naturalAnswers) naturalAnswers.checked = true;

    if (typeof this.launchDialog.showModal === "function") {
      this.launchDialog.showModal();
    } else {
      this.launchDialog.setAttribute("open", "");
    }
    this.launchForm.querySelector('input[name="question-order"]:checked')
      ?.focus({ preventScroll: true });
  }

  closeLaunchDialog() {
    if (!this.launchDialog?.open) return;
    if (typeof this.launchDialog.close === "function") this.launchDialog.close();
    else this.launchDialog.removeAttribute("open");
    const trigger = this.launchState?.trigger;
    this.launchState = null;
    trigger?.focus?.({ preventScroll: true });
  }

  startConfiguredTest(event) {
    event.preventDefault();
    if (!this.launchState) return;

    const formData = new FormData(this.launchForm);
    const questionOrder = formData.get("question-order") === "aleatorio"
      ? "aleatorio"
      : "natural";
    const answerOrder = formData.get("answer-order") === "aleatorio"
      ? "aleatorio"
      : "natural";
    const { resource, selection } = this.launchState;
    const route = buildTestLaunchRoute(resource, {
      questionOrder,
      answerOrder,
      selection,
    });

    this.closeLaunchDialog();
    location.hash = route;
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

  openSummary(event) {
    const trigger = event.target.closest("[data-summary-resource]");
    if (!trigger) return;
    const resource = this.repository.getById(trigger.dataset.summaryResource);
    if (resource?.type === "resumen") {
      openSummaryModal(this.root, resource, trigger);
    }
  }

  openExplanation(event) {
    const trigger = event.target.closest("[data-explanation-resource]");
    if (!trigger) return;
    const resource = this.repository.getById(
      trigger.dataset.explanationResource,
    );
    if (resource?.type === "explicacion") {
      openExplanationModal(this.root, resource, trigger);
    }
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
    const resource = this.repository.getById(form.dataset.testId);
    if (resource?.type === "test") {
      this.showLaunchDialog(resource, {
        trigger: form.querySelector('button[type="submit"]'),
        selection: `${range.from}-${range.to}`,
      });
    }
  }

  clearRangeError(event) {
    const input = event.target.closest("[data-question-range]");
    if (!input) return;
    input.removeAttribute("aria-invalid");
    const error = input.form?.querySelector("[data-range-error]");
    if (error) error.hidden = true;
  }
}
