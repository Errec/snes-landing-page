var animateHeroCurtain = (function(){
  var heroCurtain = document.getElementById('hero-curtain');
  var heroCovers  = document.querySelectorAll('.hero__cover');

  var classCurtainHide = "hero__curtain--hide";
  var classCurtainShow = "hero__curtain--show";
  var curtainIndex     = 0;

  _swapCurtain();
  _curtainTimeOut();

  setInterval(function() {
    _curtainTimeOut();
  }, 6000);

  function _swapCurtain() {
    if (!myClassAdmin.hasClass(heroCurtain, classCurtainHide) &&
        !myClassAdmin.hasClass(heroCurtain, classCurtainShow)) {
      myClassAdmin.addClass(heroCurtain, classCurtainHide);
    } else {
        myClassAdmin.hasClass(heroCurtain, classCurtainShow) ?
        myClassAdmin.replaceClass(heroCurtain, classCurtainShow, classCurtainHide) :
        myClassAdmin.replaceClass(heroCurtain, classCurtainHide, classCurtainShow);
    }
  }

  function _curtainTimeOut(){
    setTimeout(function() {
      _swapCurtain();
    }, 4000);
    setTimeout(function() {
      _swapCover();
      _swapCurtain();
    }, 5000);
  }

  function _swapCover() {
    myClassAdmin.addClass(heroCovers[curtainIndex % 4], 'hero__cover--hide');
    curtainIndex++;
    myClassAdmin.removeClass(heroCovers[curtainIndex % 4], 'hero__cover--hide');
  }
})();
