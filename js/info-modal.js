var showInfoModal = (function() {
  var infoModal  = document.querySelector('.info-modal');
  var closeModal = document.querySelector('.info-modal__close');

  var modifierShowClass = 'info-modal--show';
  var modifierHideClass = 'info-modal--hide';

  closeModal.addEventListener('click', function() {
    myClassAdmin.addClass(infoModal, modifierHideClass);
  });
  window.addEventListener('scroll', _checkPosition);

  function _checkPosition() {
    if (window.scrollY > 450) {
      myClassAdmin.addClass(infoModal, modifierShowClass);
      window.removeEventListener('scroll', _checkPosition);
    }
  }
})();
