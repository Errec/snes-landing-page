var controllerAnimation = (function() {
  var imageWrapper = document.getElementById('controller-hero');
  var dPad         = document.getElementById('d-pad');
  var buttons      = document.getElementById('controller-buttons');

  window.addEventListener('scroll', debounce(_checkWrapperPosition, 50));

  function _checkWrapperPosition() {
    var currentPosition = (window.scrollY + window.innerHeight) - imageWrapper.clientHeight / 2;
    var elementBottom   = imageWrapper.offsetTop + imageWrapper.clientHeight;

    if(currentPosition > imageWrapper.offsetTop && window.scrollY < elementBottom) {
      myClassAdmin.addClass(dPad, 'controller__d-pad--translation');
      myClassAdmin.addClass(buttons, 'controller__buttons--translation');
    }
  }
})();
