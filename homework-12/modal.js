export class Modal {
  static overlay = document.querySelector('.overlay');

  constructor(modalSelector) {
    this.modal = document.querySelector(modalSelector);

    if (!this.modal) {
      console.warn(`Modal: элемент "${modalSelector}" не найден`);
      return;
    }

    this.closeButton = this.modal.querySelector('.close-modal');
  
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
    this.handleCloseClick = this.handleCloseClick.bind(this);

    this.initCloseButton();
  }

  open() {
    if (!this.modal || !Modal.overlay) return;

    this.modal.classList.add('modal-showed');
    Modal.overlay.classList.add('overlay-showed');

    // Добавляем слушатель при открытии
    Modal.overlay.addEventListener('click', this.handleOverlayClick);
  }

  close() {
    if (!this.modal || !Modal.overlay) return;

    this.modal.classList.remove('modal-showed');
    Modal.overlay.classList.remove('overlay-showed');

    //снимаем слушатель
    Modal.overlay.removeEventListener('click', this.handleOverlayClick);
  }

  handleOverlayClick() {
    this.close();
  }

  handleCloseClick() {
    this.close();
  }

  initCloseButton() {
    if (!this.closeButton) return;

    this.closeButton.addEventListener('click', this.handleCloseClick);
  }
}