export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);

    if (!this.form) {
      throw new Error(`Форма с id "${formId}" не найдена`);
    }

    this.inputs = Array.from(
      this.form.querySelectorAll('input')
    );
  }

  // I. Получение всех значений формы
  getValues() {
    const values = {};

    this.inputs.forEach((input) => {
      if (input.id) {
        values[input.id] = input.value.trim();
      }
    });

    return values;
  }

  // II. Проверка валидности формы
  isValid() {
    return this.inputs.every((input) => input.checkValidity());
  }

  // III. Сброс значений формы
  reset() {
    this.form.reset();
  }
}