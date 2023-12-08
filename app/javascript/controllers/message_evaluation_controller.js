import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["evaluationInput", "evaluationButton"];
  static values = { editing: Boolean };

  connect() {
    this.setEvaluationButtonVisibility();
  }

  setEvaluationButtonVisibility() {
    if (this.editingValue) {
      this.evaluationButtonTarget.classList.remove("is-hidden");
    } else {
      this.evaluationButtonTarget.classList.add("is-hidden");
    }
  }

  increaseEvaluation() {
    console.log("Increase Evaluation called");
    this.evaluationInputTarget.value =
      parseInt(this.evaluationInputTarget.value, 10) + 1;
    this.editingValue = true;
    this.setEvaluationButtonVisibility();
  }

  decreaseEvaluation() {
    console.log("Decrease Evaluation called");
    this.evaluationInputTarget.value =
      parseInt(this.evaluationInputTarget.value, 10) - 1;
    this.editingValue = true;
    this.setEvaluationButtonVisibility();
  }
}
