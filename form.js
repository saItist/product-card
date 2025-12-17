export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);

    if (!this.form) {
      throw new Error(`Форма с id "${formId}" не найдена`);
    }
  }

  getValues() {
    const formData = new FormData(this.form);
    const values = {};

    for (const [name, value] of formData.entries()) {
      values[name] = value.trim();
    }

    return values;
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}