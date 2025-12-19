export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal.querySelector('.close-modal');
    this.overlay = this.modal.querySelector('.overlay');

    this.initCloseListeners();
  }

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  // Подписка на закрытие
  initCloseListeners() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.close();
      });
    }

    if (this.overlay) {
      this.overlay.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
