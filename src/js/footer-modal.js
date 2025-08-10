const closeButton = document.querySelector('#footer__modal__close');
const footerModal = document.querySelector('#footer__modal');
closeButton.addEventListener('click', () => {
  footerModal.classList.remove('active');
});
