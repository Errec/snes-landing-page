var insetCart = (function() {
  var imageWrapper = document.getElementById('peripherals-hero');
  var gbCart       = document.getElementById('gb-cart');

  var _checkWrapperPosition = throttle(function() {
    var currentPosition = (window.scrollY + window.innerHeight) - imageWrapper.clientHeight / 2;
    var elementBottom   = imageWrapper.offsetTop + imageWrapper.clientHeight;

    if(currentPosition > imageWrapper.offsetTop && window.scrollY < elementBottom) {
      myClassAdmin.addClass(gbCart, 'peripherals__img--insert-cart');
      window.removeEventListener('scroll', _checkWrapperPosition);
    }
  }, 400);

  window.addEventListener('scroll', _checkWrapperPosition);

})();


var peripheralsSlider = (function() {
  var imgs0 = document.querySelectorAll('.peripherals__slider-img-0');
  var imgs1 = document.querySelectorAll('.peripherals__slider-img-1');
  var imgs2 = document.querySelectorAll('.peripherals__slider-img-2');

  var classPosition0 = 'peripherals__slider-img--position-0';
  var classPosition1 = 'peripherals__slider-img--position-1';
  var classPosition2 = 'peripherals__slider-img--position-2';

  var time = 4500;
  for (var i = 0; i < imgs0.length; i++) {
    _moveFrames(imgs0[i], imgs1[i], imgs2[i]);
    setInterval(function(j) {
      _moveFrames(imgs0[j], imgs1[j], imgs2[j]);
    }, 3 * time, i);
  }

  function _moveFrames(frameElement0, frameElement1, frameElement2) {
    setTimeout(function() {
      myClassAdmin.replaceClass(frameElement0, classPosition2, classPosition0);
      myClassAdmin.replaceClass(frameElement1, classPosition0, classPosition1);
      myClassAdmin.replaceClass(frameElement2, classPosition1, classPosition2);
    }, 1 * time);

    setTimeout(function() {
      myClassAdmin.replaceClass(frameElement0, classPosition0, classPosition1);
      myClassAdmin.replaceClass(frameElement1, classPosition1, classPosition2);
      myClassAdmin.replaceClass(frameElement2, classPosition2, classPosition0);
    }, 2 * time);

    setTimeout(function() {
      myClassAdmin.replaceClass(frameElement0, classPosition1, classPosition2);
      myClassAdmin.replaceClass(frameElement1, classPosition2, classPosition0);
      myClassAdmin.replaceClass(frameElement2, classPosition0, classPosition1);
    }, 3 * time);
  }
})();
