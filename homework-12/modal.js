export class Modal {
  static overlay = document.querySelector('.overlay');

  constructor(selector) {
    this.modal = document.querySelector(selector);

    if (!this.modal) {
      console.warn(`Modal "${selector}" not found`);
      return;
    }

    this.closeButton = this.modal.querySelector('.close-modal');
  }

  open() {
    if (!Modal.overlay) return;

    this.modal.classList.add('modal-showed');
    Modal.overlay.classList.add('overlay-showed');

    this.#addCloseListeners();
  }

  close() {
    if (!Modal.overlay) return;

    this.modal.classList.remove('modal-showed');
    Modal.overlay.classList.remove('overlay-showed');

    this.#removeCloseListeners();
  }

  #handleClose = () => {
    this.close();
  };

  #addCloseListeners() {
    Modal.overlay.addEventListener('click', this.#handleClose);

    if (this.closeButton) {
      this.closeButton.addEventListener('click', this.#handleClose);
    }
  }

  #removeCloseListeners() {
    Modal.overlay.removeEventListener('click', this.#handleClose);

    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.#handleClose);
    }
  }
}