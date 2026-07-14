import { TestSession } from "../models/test-session.js";
import { parseHashRoute } from "../utils/router.js";
import { orderTestQuestions } from "../utils/test-order.js";
import { renderNotFound } from "../views/layout.js";
import { renderOppositions, renderResources, renderThemes } from "../views/portal-view.js";
import { renderResults } from "../views/results-view.js";
import { renderReview } from "../views/review-view.js";
import { renderTest } from "../views/test-view.js";
import { ReviewController } from "./review-controller.js";
import { ScrollTopController } from "./scroll-top-controller.js";
import { TestControlsController } from "./test-controls-controller.js";
import { TestTimerController } from "./test-timer-controller.js";

export class AppController {
  constructor({ root, repository, testPreferences = {} }) {
    this.root = root;
    this.repository = repository;
    this.session = null;
    this.currentResult = null;
    this.testControls = new TestControlsController(root);
    this.testTimer = new TestTimerController(root, {
      onPause: () => this.clearAutoAdvance(),
      onExpire: () => this.completeTest(),
    });
    this.reviewController = null;
    this.scrollTopController = new ScrollTopController(
      document.querySelector("#app-scroll-top"),
    );
    this.autoAdvanceTimer = null;
    this.restoreOptionHover = null;
    this.testPreferences = {
      questionMap: true,
      liveResponse: false,
      autoAdvance: false,
      focusMode: false,
      fontSize: "medium",
      timerEnabled: false,
      timerSecondsPerQuestion: 40,
      ...testPreferences,
    };
    this.onRouteChange = this.onRouteChange.bind(this);
    this.onTestSettingChange = this.onTestSettingChange.bind(this);
  }

  start() {
    this.testControls.start();
    this.scrollTopController.start();
    window.addEventListener("hashchange", this.onRouteChange);
    window.addEventListener("testsettingchange", this.onTestSettingChange);
    this.onRouteChange();
  }

  route() {
    return parseHashRoute(location.hash);
  }

  onRouteChange() {
    this.clearAutoAdvance();
    this.restoreOptionHover?.();
    this.reviewController?.destroy();
    this.reviewController = null;
    const [section = "", id = "", subsection = "", subId = ""] = this.route();
    if (section !== "test") this.testTimer.reset();
    this.testControls.hideSearch();
    this.preloadRouteCover(section, subsection, subId);
    const isTestRoute = section === "test" && Boolean(id);
    this.testControls.setTestRouteActive(isTestRoute);
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
    this.scrollTopController.onViewportChange();
  }

  preloadRouteCover(section, subsection, subId) {
    let filename = "portada-oposiciones.jpg";
    if (section === "oposiciones" && subsection === "temas" && subId) {
      filename = "portada-recursos.jpg";
    } else if (section === "oposiciones") {
      filename = "portada-temas-gobierno-vasco.jpg";
    } else if (section === "test" || section === "resultados") {
      filename = "portada-resultados.jpg";
    } else if (section === "revision") {
      filename = "portada-revision.jpg";
    } else if (section) {
      return;
    }

    const href = `./assets/images/${filename}`;
    const preload = document.querySelector("#cover-preload");
    if (preload?.getAttribute("href") !== href) preload?.setAttribute("href", href);
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
    this.testControls.showSearch("Buscar temas", (query) => {
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

    filterButton.addEventListener("click", (event) => {
      onlyIvotTests = !onlyIvotTests;
      filterButton.setAttribute("aria-pressed", String(onlyIvotTests));
      filterButton.classList.toggle("is-active", onlyIvotTests);
      applyResourceFilters();
      if (event.detail > 0 && window.matchMedia("(hover: none)").matches) {
        filterButton.blur();
      }
    });

    this.testControls.showSearch("Buscar recursos", (searchQuery) => {
      query = searchQuery;
      applyResourceFilters();
    });
  }

  showTest(id, requestedOrder = "") {
    const resource = this.repository.getById(id);
    const test = this.repository.getTestById(id);
    if (!test) {
      this.testTimer.reset();
      this.testControls.setTestRouteActive(false);
      return renderNotFound(this.root, "El test solicitado no existe.");
    }
    const isComplete = resource.variant === "complete";
    const orderMode = isComplete && requestedOrder === "aleatorio"
      ? "aleatorio"
      : "natural";

    const startsNewSession =
      !this.session || this.session.test.id !== id || this.sessionOrder !== orderMode;
    if (startsNewSession) {
      const orderedTest = orderTestQuestions(test, orderMode);
      this.session = new TestSession(orderedTest);
      this.session.setLiveResponseEnabled(this.testPreferences.liveResponse);
      this.session.setAutoAdvanceEnabled(this.testPreferences.autoAdvance);
      this.sessionOrder = orderMode;
      this.testTimer.start(
        orderedTest.preguntas.length,
        this.testPreferences.timerEnabled,
        this.testPreferences.timerSecondsPerQuestion,
      );
    }
    this.renderCurrentQuestion();
    if (startsNewSession) {
      const fontLevels = { small: 0, medium: 1, large: 2 };
      this.testControls.setFontLevel(fontLevels[this.testPreferences.fontSize] ?? 1);
      this.testControls.setFocusMode(this.testPreferences.focusMode);
    }
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
    this.clearAutoAdvance();
    const resource = this.repository.getById(this.session.test.id);
    renderTest(this.root, this.session, {
      ...this.resourceContext(this.session.test),
      orderMode: this.sessionOrder,
      showOrder: resource?.variant === "complete",
      showQuestionMap: this.testPreferences.questionMap,
      timer: this.testTimer.snapshot(),
    });
    const form = this.root.querySelector("#question-form");
    const liveAnswerToggle = this.root.querySelector("#live-answer-toggle");
    const autoAdvanceToggle = this.root.querySelector("#auto-advance-toggle");

    liveAnswerToggle.addEventListener("change", (event) => {
      this.session.setLiveResponseEnabled(event.target.checked);
      this.renderCurrentQuestion();
      this.root.querySelector("#live-answer-toggle")?.focus({ preventScroll: true });
    });

    autoAdvanceToggle.addEventListener("change", (event) => {
      this.session.setAutoAdvanceEnabled(event.target.checked);
      this.renderCurrentQuestion();
      this.root.querySelector("#auto-advance-toggle")?.focus({ preventScroll: true });
    });

    form.addEventListener("click", (event) => {
      if (event.target.name !== "answer") return;
      const selected = this.session.selectedAnswer(this.session.currentQuestion.id);
      if (selected !== event.target.value) return;
      if (!this.session.clearCurrentAnswer()) return;
      this.clearAutoAdvance();
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
        this.scheduleAutoAdvance();
        return;
      }
      form.querySelectorAll(".option").forEach((option) => option.classList.remove("is-selected"));
      event.target.closest(".option").classList.add("is-selected");
      this.updateAnsweredLabel();
      this.updateCurrentQuestionPill();
      this.scheduleAutoAdvance();
    });

    this.root.querySelectorAll("[data-action]").forEach((control) => {
      control.addEventListener("click", (event) => {
        if (control.dataset.action === "leave") event.preventDefault();
        this.handleTestAction(control.dataset.action, control);
      });
    });

    this.root.querySelectorAll("[data-question-index]").forEach((button) => {
      button.addEventListener("click", (event) => {
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

    this.testTimer.attach();
    this.centerCurrentQuestionPill();
  }

  onTestSettingChange(event) {
    const { key, value } = event.detail ?? {};
    if (!(key in this.testPreferences)) return;
    this.testPreferences[key] = value;
    const isTestRoute = this.route()[0] === "test" && Boolean(this.session);
    if (!isTestRoute) return;

    if (key === "questionMap") this.renderCurrentQuestion();
    else if (key === "liveResponse") {
      this.session.setLiveResponseEnabled(Boolean(value));
      this.renderCurrentQuestion();
    } else if (key === "autoAdvance") {
      this.session.setAutoAdvanceEnabled(Boolean(value));
      this.renderCurrentQuestion();
    } else if (key === "focusMode") {
      this.testControls.setFocusMode(Boolean(value));
    } else if (key === "fontSize") {
      const fontLevels = { small: 0, medium: 1, large: 2 };
      this.testControls.setFontLevel(fontLevels[value] ?? 1);
    } else if (key === "timerEnabled") {
      this.testTimer.setEnabled(
        Boolean(value),
        this.session.test.preguntas.length,
        this.testPreferences.timerSecondsPerQuestion,
      );
      this.renderCurrentQuestion();
    } else if (key === "timerSecondsPerQuestion" && this.testTimer.enabled) {
      this.testTimer.start(
        this.session.test.preguntas.length,
        true,
        Number(value),
      );
      this.renderCurrentQuestion();
    }
  }

  scheduleAutoAdvance() {
    this.clearAutoAdvance();
    const isLastQuestion =
      this.session.currentIndex >= this.session.test.preguntas.length - 1;
    if (!this.session.autoAdvanceEnabled || isLastQuestion) return;
    this.root.querySelector(".auto-advance-progress")?.classList.add("is-active");
    this.autoAdvanceTimer = window.setTimeout(() => {
      this.autoAdvanceTimer = null;
      this.navigateToQuestion(this.session.currentIndex + 1, false, true);
    }, 1300);
  }

  clearAutoAdvance() {
    window.clearTimeout(this.autoAdvanceTimer);
    this.autoAdvanceTimer = null;
    this.root.querySelector(".auto-advance-progress")?.classList.remove("is-active");
  }

  navigateToQuestion(index, keepMapFocus = false, suppressOptionHover = false) {
    this.session.currentIndex = index;
    this.renderCurrentQuestion();
    if (suppressOptionHover) this.suppressOptionHoverUntilInteraction();
    const focusTarget = keepMapFocus
      ? this.root.querySelector(".question-pill.is-current")
      : this.root.querySelector(".question-card");
    focusTarget?.focus({ preventScroll: true });
  }

  suppressOptionHoverUntilInteraction() {
    this.restoreOptionHover?.();
    const testShell = this.root.querySelector(".test-shell");
    if (!testShell) return;
    testShell.classList.add("suppress-option-hover");
    const restoreHover = () => {
      testShell.classList.remove("suppress-option-hover");
      window.removeEventListener("pointermove", restoreHover);
      window.removeEventListener("pointerdown", restoreHover);
      if (this.restoreOptionHover === restoreHover) this.restoreOptionHover = null;
    };
    this.restoreOptionHover = restoreHover;
    window.addEventListener("pointermove", restoreHover);
    window.addEventListener("pointerdown", restoreHover);
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
    this.testTimer.reset();
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
    const orderedTest = orderTestQuestions(test, result.orderMode, result.questionOrder);
    renderReview(this.root, orderedTest, result, this.resourceContext(test));
    this.reviewController = new ReviewController(this.root).start();
  }
}
