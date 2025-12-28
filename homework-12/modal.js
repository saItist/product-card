export class Modal {
  static overlay = document.querySelector('.overlay');

  constructor(modalSelector) {
    this.modal = document.querySelector(modalSelector);

    if (!this.modal) {
      console.warn(`Modal: элемент "${modalSelector}" не найден`);
      return;
    }

    this.closeButton = this.modal.querySelector('.close-modal');
  }

  open() {
    if (!this.modal || !Modal.overlay) return;

    this.modal.classList.add('modal-showed');
    Modal.overlay.classList.add('overlay-showed');

    this.#initCloseHandlers();
  }

  close() {
    if (!this.modal || !Modal.overlay) return;

    this.modal.classList.remove('modal-showed');
    Modal.overlay.classList.remove('overlay-showed');

    this.#removeCloseHandlers();
  }

  // 🔒 приватный обработчик
  #handleClose() {
    this.close();
  }

  // 🔒 приватные методы
  #initCloseHandlers() {
    Modal.overlay.addEventListener('click', this.#handleClose);

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.#handleClose);
    }
  }

  #removeCloseHandlers() {
    Modal.overlay.removeEventListener('click', this.#handleClose);

    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.#handleClose);
    }
  }
}