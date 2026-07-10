import { TestSession } from "../models/test-session.js";
import { renderNotFound } from "../views/layout.js";
import { renderOppositions, renderResources, renderThemes } from "../views/portal-view.js";
import { renderResults } from "../views/results-view.js";
import { renderReview } from "../views/review-view.js";
import { renderTest } from "../views/test-view.js";

export class AppController {
  constructor({ root, repository }) {
    this.root = root;
    this.repository = repository;
    this.session = null;
    this.currentResult = null;
    this.headerSearch = document.querySelector("#header-search");
    this.headerSearchInput = document.querySelector("#resource-search");
    this.headerSearchLabel = this.headerSearch.querySelector("label");
    this.focusToggle = document.querySelector("#focus-toggle");
    this.focusToggleLabel = this.focusToggle.querySelector(".focus-toggle-label");
    this.testFontControls = document.querySelector("#test-font-controls");
    this.testFontStatus = this.testFontControls.querySelector(".test-font-status");
    this.testFontLevel = 1;
    this.focusBackdrop = document.querySelector("#focus-backdrop");
    this.focusTransitionTimer = null;
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  start() {
    this.headerSearch.addEventListener("submit", (event) => event.preventDefault());
    this.focusToggle.addEventListener("click", () => {
      const isActive =
        document.body.classList.contains("focus-mode") &&
        !document.body.classList.contains("focus-mode-exiting");
      this.setFocusMode(!isActive);
    });
    this.focusBackdrop.addEventListener("click", () => {
      const canDismissFromBackdrop = window.matchMedia("(min-width: 901px)").matches;
      const isActive =
        document.body.classList.contains("focus-mode") &&
        !document.body.classList.contains("focus-mode-exiting");
      if (canDismissFromBackdrop && isActive) this.setFocusMode(false);
    });
    this.testFontControls.addEventListener("click", (event) => {
      const action = event.target.closest("[data-font-action]")?.dataset.fontAction;
      if (!action) return;
      this.setTestFontLevel(this.testFontLevel + (action === "increase" ? 1 : -1));
    });
    window.addEventListener("hashchange", this.onRouteChange);
    this.onRouteChange();
  }

  route() {
    const path = location.hash.replace(/^#\/?/, "");
    return path.split("/").map((segment) => {
      try {
        return decodeURIComponent(segment);
      } catch {
        return segment;
      }
    });
  }

  onRouteChange() {
    this.hideHeaderSearch();
    const [section = "", id = "", subsection = "", subId = ""] = this.route();
    const isTestRoute = section === "test" && Boolean(id);
    this.focusToggle.hidden = !isTestRoute;
    this.testFontControls.hidden = !isTestRoute;
    if (!isTestRoute) {
      this.setFocusMode(false, { immediate: true });
      this.setTestFontLevel(1);
    }
    const keepsCurrentResult =
      (section === "resultados" || section === "revision") &&
      this.currentResult?.testId === id;
    if (!keepsCurrentResult) this.currentResult = null;
    if (!section) this.showOppositions();
    else if (section === "oposiciones" && id && !subsection) this.showThemes(id);
    else if (section === "oposiciones" && id && subsection === "temas" && subId) {
      this.showResources(id, subId);
    } else if (section === "test" && id) this.showTest(id, subsection);
    else if (section === "resultados" && id) this.showResults(id);
    else if (section === "revision" && id) this.showReview(id);
    else renderNotFound(this.root);

    document.title = `${this.root.querySelector("h1")?.textContent ?? "OPOSAKETAK"} · OPOSAKETAK`;
    this.root.focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "auto" });
  }

  hideHeaderSearch() {
    this.headerSearch.hidden = true;
    this.headerSearchInput.value = "";
    this.headerSearchInput.oninput = null;
  }

  showHeaderSearch(label, onSearch) {
    this.headerSearch.hidden = false;
    this.headerSearchLabel.textContent = label;
    this.headerSearchInput.placeholder = label;
    this.headerSearchInput.oninput = () => onSearch(this.headerSearchInput.value);
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

  setTestFontLevel(level) {
    const levels = ["small", "medium", "large"];
    const levelLabels = ["pequeño", "medio", "grande"];
    this.testFontLevel = Math.min(Math.max(level, 0), levels.length - 1);
    document.body.dataset.testFontSize = levels[this.testFontLevel];
    this.testFontControls.querySelector('[data-font-action="decrease"]').disabled =
      this.testFontLevel === 0;
    this.testFontControls.querySelector('[data-font-action="increase"]').disabled =
      this.testFontLevel === levels.length - 1;
    this.testFontStatus.textContent = `Tamaño de texto ${levelLabels[this.testFontLevel]}`;
  }

  showOppositions() {
    this.session = null;
    renderOppositions(this.root, this.repository.getOppositions());
  }

  showThemes(oppositionId) {
    this.session = null;
    const opposition = this.repository.getOpposition(oppositionId);
    if (!opposition) return renderNotFound(this.root, "La oposición solicitada no existe.");
    const themes = this.repository.getThemes(oppositionId);
    const view = renderThemes(this.root, opposition, themes);
    this.showHeaderSearch("Buscar temas", (query) => {
      view.updateList(this.repository.searchThemes(themes, query));
    });
  }

  showResources(oppositionId, themeNumber) {
    this.session = null;
    const opposition = this.repository.getOpposition(oppositionId);
    const theme = this.repository.getTheme(oppositionId, themeNumber);
    if (!opposition) return renderNotFound(this.root, "La oposición solicitada no existe.");
    if (!theme) return renderNotFound(this.root, "El tema solicitado no existe.");

    const resources = this.repository.getResources(oppositionId, themeNumber);

    const view = renderResources(this.root, {
      opposition,
      theme,
      resources,
    });

    let query = "";
    let onlyIvotTests = false;
    const filterButton = this.root.querySelector("#ivot-tests-filter");
    const applyResourceFilters = () => {
      const matchingResources = this.repository.searchResources(resources, query);
      view.updateList(
        onlyIvotTests
          ? matchingResources.filter(
              (resource) => resource.type === "test" && resource.author?.id === "ivot",
            )
          : matchingResources,
      );
    };

    filterButton.addEventListener("click", () => {
      onlyIvotTests = !onlyIvotTests;
      filterButton.setAttribute("aria-pressed", String(onlyIvotTests));
      filterButton.classList.toggle("is-active", onlyIvotTests);
      applyResourceFilters();
    });

    this.showHeaderSearch("Buscar recursos", (searchQuery) => {
      query = searchQuery;
      applyResourceFilters();
    });
  }

  showTest(id, requestedOrder = "") {
    const resource = this.repository.getById(id);
    const test = this.repository.getTestById(id);
    if (!test) {
      this.focusToggle.hidden = true;
      this.testFontControls.hidden = true;
      this.setFocusMode(false, { immediate: true });
      return renderNotFound(this.root, "El test solicitado no existe.");
    }
    const isComplete = resource.variant === "complete";
    const orderMode = isComplete && requestedOrder === "aleatorio"
      ? "aleatorio"
      : "natural";

    if (!this.session || this.session.test.id !== id || this.sessionOrder !== orderMode) {
      const orderedTest = this.orderTestQuestions(test, orderMode);
      this.session = new TestSession(orderedTest);
      this.sessionOrder = orderMode;
    }
    this.renderCurrentQuestion();
  }

  orderTestQuestions(test, orderMode, savedOrder = null) {
    let preguntas = [...test.preguntas];
    if (savedOrder?.length) {
      const positions = new Map(savedOrder.map((id, index) => [String(id), index]));
      preguntas.sort(
        (a, b) => (positions.get(String(a.id)) ?? Infinity) - (positions.get(String(b.id)) ?? Infinity),
      );
    } else if (orderMode === "aleatorio") {
      for (let index = preguntas.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [preguntas[index], preguntas[randomIndex]] = [preguntas[randomIndex], preguntas[index]];
      }
    }
    return { ...test, preguntas };
  }

  resourceContext(test) {
    const oppositionId = this.repository.getOppositionForResource(test.id);
    const themeNumber = String(test.clasificacion.tema.numero);
    return {
      backHref: `#/oposiciones/${encodeURIComponent(oppositionId)}/temas/${encodeURIComponent(themeNumber)}`,
      backLabel: "Recursos del tema",
    };
  }

  renderCurrentQuestion() {
    const resource = this.repository.getById(this.session.test.id);
    renderTest(this.root, this.session, {
      ...this.resourceContext(this.session.test),
      orderMode: this.sessionOrder,
      showOrder: resource?.variant === "complete",
    });
    const form = this.root.querySelector("#question-form");
    const liveAnswerToggle = this.root.querySelector("#live-answer-toggle");

    liveAnswerToggle.addEventListener("change", (event) => {
      this.session.setLiveResponseEnabled(event.target.checked);
      this.renderCurrentQuestion();
      this.root.querySelector("#live-answer-toggle")?.focus({ preventScroll: true });
    });

    form.addEventListener("click", (event) => {
      if (event.target.name !== "answer") return;
      const selected = this.session.selectedAnswer(this.session.currentQuestion.id);
      if (selected !== event.target.value) return;
      if (!this.session.clearCurrentAnswer()) return;
      event.target.checked = false;
      event.target.closest(".option").classList.remove("is-selected");
      this.updateAnsweredLabel();
      this.updateCurrentQuestionPill();
    });

    form.addEventListener("change", (event) => {
      if (event.target.name !== "answer") return;
      if (!this.session.selectAnswer(event.target.value)) return;
      if (this.session.isLiveAnswerLocked(this.session.currentQuestion.id)) {
        this.renderCurrentQuestion();
        this.root.querySelector(".question-card")?.focus({ preventScroll: true });
        return;
      }
      form.querySelectorAll(".option").forEach((option) => option.classList.remove("is-selected"));
      event.target.closest(".option").classList.add("is-selected");
      this.updateAnsweredLabel();
      this.updateCurrentQuestionPill();
    });

    this.root.querySelectorAll("[data-action]").forEach((control) => {
      control.addEventListener("click", (event) => {
        if (control.dataset.action === "leave") event.preventDefault();
        this.handleTestAction(control.dataset.action, control);
      });
    });

    this.root.querySelectorAll("[data-question-index]").forEach((button) => {
      button.addEventListener("click", () => {
        this.navigateToQuestion(Number(button.dataset.questionIndex));
      });
      button.addEventListener("keydown", (event) => {
        const total = this.session.test.preguntas.length;
        const current = this.session.currentIndex;
        const targetByKey = {
          ArrowLeft: Math.max(0, current - 1),
          ArrowRight: Math.min(total - 1, current + 1),
          Home: 0,
          End: total - 1,
        };
        if (!(event.key in targetByKey)) return;
        event.preventDefault();
        this.navigateToQuestion(targetByKey[event.key], true);
      });
    });

    this.centerCurrentQuestionPill();
  }

  navigateToQuestion(index, keepMapFocus = false) {
    this.session.currentIndex = index;
    this.renderCurrentQuestion();
    const focusTarget = keepMapFocus
      ? this.root.querySelector(".question-pill.is-current")
      : this.root.querySelector(".question-card");
    focusTarget?.focus({ preventScroll: true });
  }

  updateAnsweredLabel() {
    const answeredCount = this.session.answeredCount();
    const labels = this.root.querySelectorAll(".progress-label span");
    if (labels[1]) labels[1].textContent = `${answeredCount} respondidas`;
    const progressbar = this.root.querySelector(".progress-track");
    const progressValue = progressbar?.querySelector("span");
    const total = this.session.test.preguntas.length;
    if (progressbar) progressbar.setAttribute("aria-valuenow", String(answeredCount));
    if (progressValue) {
      progressValue.style.width = `${total ? (answeredCount / total) * 100 : 0}%`;
    }
  }

  updateCurrentQuestionPill() {
    const pill = this.root.querySelector(
      `[data-question-index="${this.session.currentIndex}"]`,
    );
    if (!pill) return;
    const answered = Boolean(
      this.session.selectedAnswer(this.session.currentQuestion.id),
    );
    pill.classList.toggle("is-answered", answered);
    pill.setAttribute(
      "aria-label",
      `Pregunta ${this.session.currentIndex + 1}, ${answered ? "respondida" : "sin responder"}`,
    );
  }

  centerCurrentQuestionPill() {
    const container = this.root.querySelector(".question-map-scroll");
    const pill = container?.querySelector(".question-pill.is-current");
    if (!container || !pill) return;
    const top = pill.offsetTop - container.clientHeight / 2 + pill.offsetHeight / 2;
    container.scrollTop = Math.max(0, top);
  }

  handleTestAction(action, control) {
    if (action === "leave") return this.confirmLeaveTest(control.getAttribute("href"));
    if (action === "previous" && this.session.currentIndex > 0) this.session.currentIndex -= 1;
    if (action === "next" && this.session.currentIndex < this.session.test.preguntas.length - 1) this.session.currentIndex += 1;
    if (action === "finish") return this.finishTest();
    this.renderCurrentQuestion();
    this.root.querySelector(".question-card")?.focus({ preventScroll: true });
  }

  finishTest() {
    const unanswered = this.session.unansweredCount();
    if (unanswered > 0) {
      const pending = unanswered === 1
        ? "Queda 1 pregunta sin responder."
        : `Quedan ${unanswered} preguntas sin responder.`;
      this.openConfirmation({
        title: "Test incompleto",
        message: `${pending} Las preguntas en blanco no suman ni restan.`,
        confirmLabel: "Finalizar de todas formas",
        onConfirm: () => this.completeTest(),
      });
      return;
    }

    this.completeTest();
  }

  completeTest() {
    const result = this.session.calculateResult();
    result.orderMode = this.sessionOrder;
    this.currentResult = result;
    location.hash = `#/resultados/${encodeURIComponent(this.session.test.id)}`;
  }

  confirmLeaveTest(destination) {
    const unanswered = this.session.unansweredCount();
    const message = unanswered
      ? `${unanswered === 1 ? "Queda 1 pregunta" : `Quedan ${unanswered} preguntas`} sin responder. Al salir se descartarán todas tus respuestas.`
      : "Al salir se descartarán todas tus respuestas.";

    this.openConfirmation({
      title: "¿Volver a los recursos?",
      message,
      confirmLabel: "Volver a los recursos",
      onConfirm: () => {
        location.hash = destination;
      },
    });
  }

  openConfirmation({ title, message, confirmLabel, onConfirm }) {
    const dialog = this.root.querySelector("#incomplete-dialog");
    const confirmButton = dialog.querySelector("[data-confirm-action]");
    dialog.querySelector("#confirm-title").textContent = title;
    dialog.querySelector("#confirm-message").textContent = message;
    confirmButton.textContent = confirmLabel;
    confirmButton.onclick = () => {
      dialog.close("confirm");
      onConfirm();
    };

    if (typeof dialog.showModal === "function") dialog.showModal();
    else if (window.confirm(message)) onConfirm();
  }

  showResults(id) {
    const test = this.repository.getTestById(id);
    const result = this.currentResult?.testId === id ? this.currentResult : null;
    if (!test) return renderNotFound(this.root, "El test solicitado no existe.");
    if (!result) return renderNotFound(this.root, "El resultado ya no está disponible. Completa de nuevo el test para consultarlo.");

    this.session = null;
    renderResults(this.root, test, result, this.resourceContext(test));
    this.root.querySelector('[data-action="repeat"]').addEventListener("click", () => {
      this.currentResult = null;
      this.session = null;
      const orderPath = result.orderMode === "aleatorio" ? "/aleatorio" : "/natural";
      location.hash = `#/test/${encodeURIComponent(id)}${orderPath}`;
    });
  }

  showReview(id) {
    const test = this.repository.getTestById(id);
    const result = this.currentResult?.testId === id ? this.currentResult : null;
    if (!test) return renderNotFound(this.root, "El test solicitado no existe.");
    if (!result) return renderNotFound(this.root, "El resultado ya no está disponible. Completa de nuevo el test para revisarlo.");
    this.session = null;
    const orderedTest = this.orderTestQuestions(test, result.orderMode, result.questionOrder);
    renderReview(this.root, orderedTest, result, this.resourceContext(test));
  }
}
