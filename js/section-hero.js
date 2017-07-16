var retractHero = (function() {
  heroDiv  = document.getElementById('hero');
  heroLogo = document.getElementById('hero-logo');

  window.addEventListener('scroll', throttle(_checkHeroPosition, 150));

  if (window.scrollY < 50) {
    myClassAdmin.replaceClass(heroLogo,'hero__logo--fade' , 'hero__logo--show');
  }

  function _checkHeroPosition() {
    if (window.scrollY > 25) {
      myClassAdmin.addClass(heroDiv, 'hero--retract');
      myClassAdmin.replaceClass(heroLogo,'hero__logo--show' , 'hero__logo--fade');
    }
    if (window.scrollY < 25 && myClassAdmin.hasClass(heroDiv, 'hero--retract')) {
      myClassAdmin.replaceClass(heroLogo,'hero__logo--fade' , 'hero__logo--show');
      myClassAdmin.removeClass(heroDiv, 'hero--retract');
    }
  }
})();

var clickHeroArrow = (function() {
  var arrow    = document.getElementById('hero-arrow');
  var divPlay        = document.querySelector('.play');

  arrow.addEventListener('click', _scrollDown);

  function _scrollDown() {
    if (mqMobile.matches) {
        divPlay.scrollIntoView({behavior: 'smooth' });
    } else {
        window.scrollBy({ top: 300, left: 0, behavior: 'smooth' });
    }
  }
})();
