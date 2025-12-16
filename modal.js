export class Modal {
  constructor(modalId) {
    this.modal = document.getElementById(modalId);
    this.closeButton = this.modal.querySelector('.close-modal');

    this.initCloseListeners();
  }

  open() {
    this.modal.classList.add('modal-showed');
  }

  close() {
    this.modal.classList.remove('modal-showed');
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  // IV. Подписка на кнопку закрытия
  initCloseListeners() {
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => {
        this.close();
      });
    }
  }
}
console.log('Modal class loaded');