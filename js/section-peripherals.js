var insetCart = (function() {
  var imageWrapper = document.getElementById('peripherals-hero');
  var gbCart       = document.getElementById('gb-cart');

  window.addEventListener('scroll', debounce(_checkWrapperPosition, 50));

  function _checkWrapperPosition() {
    var currentPosition = (window.scrollY + window.innerHeight) - imageWrapper.clientHeight / 2;
    var elementBottom   = imageWrapper.offsetTop + imageWrapper.clientHeight;

    if(currentPosition > imageWrapper.offsetTop && window.scrollY < elementBottom) {
      myClassAdmin.addClass(gbCart, 'peripherals__img--insert-cart');
    }
  }
})();
