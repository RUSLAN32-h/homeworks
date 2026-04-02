class Modal {
  constructor(options = {}) {
    this.modal = document.querySelector(".modal");
    this.modalWindow = null;
    this.isOpen = false;
    this.PAGE_BODY = options.PAGE_BODY || "page__body";
    this.PAGE_BODY_NO_SCROLL =
      options.PAGE_BODY_NO_SCROLL || "page__body--no-scroll";

    this.init();
  }

  init() {
    if (!this.modal) return;

    this.modalWindow = this.modal.querySelector("[data-modal-window]");

    this.modalButtons = document.querySelectorAll("[data-modal-button]");

    this.closeButton = this.modal.querySelector("[data-modal-close]");

    this.bindEvents();
  }

  bindEvents() {
    this.modalButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const modalId = button.getAttribute("data-modal-button");
        this.open(modalId);
      });
    });

    if (this.closeButton) {
      this.closeButton.addEventListener("click", () => this.close());
    }

    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) {
        this.close();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen) {
        this.close();
      }
    });
  }

  open(modalId) {
    if (this.isOpen) return;

    this.modal.classList.add("modal--open");

    const targetWindow = this.modal.querySelector(
      `[data-modal-window="${modalId}"]`,
    );
    if (targetWindow) {
      targetWindow.classList.add("modal__window--open");
      this.modalWindow = targetWindow;
    }

    document.body.classList.add(this.PAGE_BODY_NO_SCROLL);

    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) return;

    this.modal.classList.remove("modal--open");

    const allWindows = this.modal.querySelectorAll("[data-modal-window]");
    allWindows.forEach((window) => {
      window.classList.remove("modal__window--open");
    });

    document.body.classList.remove(this.PAGE_BODY_NO_SCROLL);

    this.isOpen = false;
  }
}

export default Modal;
