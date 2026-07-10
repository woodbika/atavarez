export class TestSession {
  constructor(test) {
    this.test = test;
    this.answers = {};
    this.currentIndex = 0;
    this.liveResponseEnabled = false;
    this.liveLockedQuestions = new Set();
  }

  get currentQuestion() {
    return this.test.preguntas[this.currentIndex];
  }

  selectAnswer(optionId) {
    const questionId = String(this.currentQuestion.id);
    if (this.liveLockedQuestions.has(questionId)) return false;
    this.answers[questionId] = optionId;
    if (this.liveResponseEnabled) this.liveLockedQuestions.add(questionId);
    return true;
  }

  clearCurrentAnswer() {
    const questionId = String(this.currentQuestion.id);
    if (this.liveLockedQuestions.has(questionId)) return false;
    delete this.answers[questionId];
    return true;
  }

  selectedAnswer(questionId) {
    return this.answers[String(questionId)] ?? null;
  }

  setLiveResponseEnabled(enabled) {
    this.liveResponseEnabled = enabled;
    if (enabled) {
      Object.keys(this.answers).forEach((questionId) => {
        this.liveLockedQuestions.add(questionId);
      });
    }
  }

  isLiveAnswerLocked(questionId) {
    return this.liveLockedQuestions.has(String(questionId));
  }

  answeredCount() {
    return this.test.preguntas.filter((question) => this.selectedAnswer(question.id)).length;
  }

  unansweredCount() {
    return this.test.preguntas.length - this.answeredCount();
  }

  calculateResult() {
    let correct = 0;
    let incorrect = 0;

    this.test.preguntas.forEach((question) => {
      const answer = this.selectedAnswer(question.id);
      if (!answer) return;
      if (answer === question.respuestaCorrecta) correct += 1;
      else incorrect += 1;
    });

    const total = this.test.preguntas.length;
    const netCorrect = correct - incorrect / 3;
    const score = total ? Number(((netCorrect / total) * 10).toFixed(2)) : 0;
    return {
      testId: this.test.id,
      answers: { ...this.answers },
      total,
      correct,
      incorrect,
      unanswered: total - correct - incorrect,
      percentage: total ? Math.round((correct / total) * 100) : 0,
      score,
      questionOrder: this.test.preguntas.map((question) => String(question.id)),
    };
  }
}
