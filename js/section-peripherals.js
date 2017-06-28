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

var peripheralsSlider = (function() {
  var imgs0 = document.querySelectorAll('.peripherals__slider-img-0');
  var imgs1 = document.querySelectorAll('.peripherals__slider-img-1');
  var imgs2 = document.querySelectorAll('.peripherals__slider-img-2');
  var translateClass = 'peripherals__slider-img--translate';
  var animationTime = 4000;

var timer0 = null;
var timer1 = null;
var timer2 = null;

timer0 = setInterval(function(){_setMovOrder(imgs0, imgs1, imgs2);}, 1 * animationTime);
timer1 = setInterval(function(){_setMovOrder(imgs1, imgs2, imgs0);}, 2 * animationTime);
timer2 = setInterval(function(){_setMovOrder(imgs2, imgs0, imgs1);}, 3 * animationTime);

setInterval(function () {
  _slideImg();
}, (3 * animationTime + 1));

  function _slideImg() {
    clearInterval(timer0);
    clearInterval(timer1);
    clearInterval(timer2);
    _translateDiv(imgs0, imgs1, imgs2);
  }

  function _translateDiv(img0, img1, img2) {
    timer0 = setInterval(function(){_setMovOrder(imgs0, imgs1, imgs2);}, 1 * animationTime);
    timer1 = setInterval(function(){_setMovOrder(imgs1, imgs2, imgs0);}, 2 * animationTime);
    timer2 = setInterval(function(){_setMovOrder(imgs2, imgs0, imgs1);}, 3 * animationTime);
  }

  function _setMovOrder(currentImg, nextImg, lastImg) {
    for(var i = 0; i < currentImg.length; i++){
      currentImg[i].style.zIndex = '100';
      myClassAdmin.addClass(currentImg[i], translateClass);

      lastImg[i].style.zIndex = '0';
      nextImg[i].style.zIndex = '50';
      myClassAdmin.removeClass(lastImg[i], translateClass);
      myClassAdmin.removeClass(nextImg[i], translateClass);
    }
  }
})();
