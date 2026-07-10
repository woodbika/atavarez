import { TestSession } from "../models/test-session.js";
import { renderNotFound } from "../views/layout.js";
import { renderOppositions, renderResources, renderThemes } from "../views/portal-view.js";
import { renderResults } from "../views/results-view.js";
import { renderReview } from "../views/review-view.js";
import { renderTest } from "../views/test-view.js";

export class AppController {
  constructor({ root, repository, store }) {
    this.root = root;
    this.repository = repository;
    this.store = store;
    this.session = null;
    this.headerSearch = document.querySelector("#header-search");
    this.headerSearchInput = document.querySelector("#resource-search");
    this.headerSearchLabel = this.headerSearch.querySelector("label");
    this.onRouteChange = this.onRouteChange.bind(this);
  }

  start() {
    this.headerSearch.addEventListener("submit", (event) => event.preventDefault());
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
    const progressById = {};
    resources.forEach((resource) => {
      if (resource.type !== "test") return;
      progressById[resource.id] = this.store.getProgress(resource.id);
    });

    const view = renderResources(this.root, {
      opposition,
      theme,
      resources,
      progressById,
    });

    this.showHeaderSearch("Buscar recursos", (query) => {
      view.updateList(this.repository.searchResources(resources, query));
    });
  }

  showTest(id, requestedOrder = "") {
    const resource = this.repository.getById(id);
    const test = this.repository.getTestById(id);
    if (!test) return renderNotFound(this.root, "El test solicitado no existe.");
    const isComplete = resource.variant === "complete";
    const savedProgress = this.store.getProgress(id);
    const orderMode = isComplete && requestedOrder === "aleatorio"
      ? "aleatorio"
      : isComplete && !requestedOrder && savedProgress?.orderMode
        ? savedProgress.orderMode
        : "natural";

    if (!this.session || this.session.test.id !== id || this.sessionOrder !== orderMode) {
      const canResume = savedProgress?.orderMode === orderMode ||
        (!savedProgress?.orderMode && orderMode === "natural");
      const orderedTest = this.orderTestQuestions(
        test,
        orderMode,
        canResume ? savedProgress?.questionOrder : null,
      );
      this.session = new TestSession(orderedTest, canResume ? savedProgress : null);
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

    form.addEventListener("change", (event) => {
      if (event.target.name !== "answer") return;
      this.session.selectAnswer(event.target.value);
      this.saveSession();
      form.querySelectorAll(".option").forEach((option) => option.classList.remove("is-selected"));
      event.target.closest(".option").classList.add("is-selected");
      this.updateAnsweredLabel();
    });

    this.root.querySelectorAll("[data-action]").forEach((control) => {
      control.addEventListener("click", (event) => {
        if (control.dataset.action === "leave") event.preventDefault();
        this.handleTestAction(control.dataset.action, control);
      });
    });
  }

  updateAnsweredLabel() {
    const labels = this.root.querySelectorAll(".progress-label span");
    if (labels[1]) labels[1].textContent = `${this.session.answeredCount()} respondidas`;
  }

  handleTestAction(action, control) {
    if (action === "leave") return this.confirmLeaveTest(control.getAttribute("href"));
    if (action === "previous" && this.session.currentIndex > 0) this.session.currentIndex -= 1;
    if (action === "next" && this.session.currentIndex < this.session.test.preguntas.length - 1) this.session.currentIndex += 1;
    if (action === "finish") return this.finishTest();
    this.saveSession();
    this.renderCurrentQuestion();
    this.root.querySelector(".question-card")?.focus({ preventScroll: true });
  }

  saveSession() {
    this.store.saveProgress(this.session.test.id, {
      ...this.session.toProgress(),
      orderMode: this.sessionOrder,
      questionOrder: this.session.test.preguntas.map((question) => String(question.id)),
    });
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
    this.store.saveResult(this.session.test.id, result);
    location.hash = `#/resultados/${encodeURIComponent(this.session.test.id)}`;
  }

  confirmLeaveTest(destination) {
    const unanswered = this.session.unansweredCount();
    const message = unanswered
      ? `${unanswered === 1 ? "Queda 1 pregunta" : `Quedan ${unanswered} preguntas`} sin responder. Tus respuestas se conservarán solo mientras no recargues la página.`
      : "Vas a salir del test. Tus respuestas se conservarán solo mientras no recargues la página.";

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
    const result = this.store.getResult(id);
    if (!test) return renderNotFound(this.root, "El test solicitado no existe.");
    if (!result) return renderNotFound(this.root, "El resultado ya no está disponible. Completa de nuevo el test para consultarlo.");

    this.session = null;
    renderResults(this.root, test, result, this.resourceContext(test));
    this.root.querySelector('[data-action="repeat"]').addEventListener("click", () => {
      this.store.clearProgress(id);
      this.session = null;
      const orderPath = result.orderMode === "aleatorio" ? "/aleatorio" : "/natural";
      location.hash = `#/test/${encodeURIComponent(id)}${orderPath}`;
    });
  }

  showReview(id) {
    const test = this.repository.getTestById(id);
    const result = this.store.getResult(id);
    if (!test) return renderNotFound(this.root, "El test solicitado no existe.");
    if (!result) return renderNotFound(this.root, "El resultado ya no está disponible. Completa de nuevo el test para revisarlo.");
    this.session = null;
    const orderedTest = this.orderTestQuestions(test, result.orderMode, result.questionOrder);
    renderReview(this.root, orderedTest, result, this.resourceContext(test));
  }
}
