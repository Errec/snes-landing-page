var animateHeroCurtain = (function() {
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

var retractHero = (function() {
  heroDiv  = document.getElementById('hero');
  heroLogo = document.getElementById('hero-logo');

  window.addEventListener('scroll', throttle(_checkHeroPosition, 150));

  function _checkHeroPosition() {
    console.log(window.scrollY);
    if (window.scrollY > 50) {
      myClassAdmin.addClass(heroDiv, 'hero--retract');
      myClassAdmin.addClass(heroLogo, 'hero__logo--fade');
    }
    if (window.scrollY < 50 && myClassAdmin.hasClass(heroDiv, 'hero--retract')) {
      myClassAdmin.removeClass(heroDiv, 'hero--retract');
      myClassAdmin.removeClass(heroLogo, 'hero__logo--fade');
    }
  }
})();

var clickHeroArrow = (function() {
  var arrow = document.getElementById('hero-arrow');

  arrow.addEventListener('click', _scrollDown);

  function _scrollDown() {
    window.scrollBy({ top: 340, left: 0, behavior: 'smooth' });
  }
})();
