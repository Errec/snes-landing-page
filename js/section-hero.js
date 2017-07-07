var retractHero = (function() {
  heroDiv  = document.getElementById('hero');
  heroLogo = document.getElementById('hero-logo');

  window.addEventListener('scroll', throttle(_checkHeroPosition, 150));

  function _checkHeroPosition() {
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
