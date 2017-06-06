var animateHeroCurtain = (function(){
  var heroCurtain = document.getElementById('hero-curtain');

  var classCurtainHide = "hero__curtain--hide";
  var classCurtainShow = "hero__curtain--show";

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
    _swapCurtain();
  }, 5000);
}
})();
