var sideNavScroll = (function() {
  var btPlay        = document.getElementById('side-item-0');
  var btPeripherals = document.getElementById('side-item-1');
  var btController  = document.getElementById('side-item-2');
  var btGames       = document.getElementById('side-item-3');

  var divPlay        = document.querySelector('.play__grid-playing');
  var divPeripherals = document.querySelector('.peripherals');
  var divController  = document.querySelector('.controller');
  var divRelease     = document.querySelector('.main-footer');

  btPlay.addEventListener('click', _scrollPlay);
  btPeripherals.addEventListener('click', _scrollPeripherals);
  btController.addEventListener('click', _scrollController);
  btGames.addEventListener('click', _scrollRelease);

  function _scrollPlay() {
    window.scroll({ top: divPlay.offsetTop - 605, left: 0, behavior: 'smooth' });
  }

  function _scrollPeripherals() {
    window.scroll({ top: divPeripherals.offsetTop + 5, left: 0, behavior: 'smooth' });
  }

  function _scrollController() {
    window.scroll({ top: divController.offsetTop + 5, left: 0, behavior: 'smooth' });
  }
  function _scrollRelease() {
    divRelease.scrollIntoView({behavior: 'smooth' });
  }
})();

var checkNavItem = (function() {
  var navGrid        = document.querySelector('.side-nav__grid');
  var nav            = document.querySelector('.side-nav__grid-wrapper');

  var divPlaySlogan  = document.querySelector('.play__slogan');
  var divPlay_top    = document.querySelector('.play__grid-playing');
  var divPlay        = document.querySelector('.play');
  var divPeripherals = document.querySelector('.peripherals');
  var divController  = document.querySelector('.controller');
  var divRelease     = document.querySelector('.main-footer');

  var regexClassName  = new RegExp(/side-nav__grid--check-\d/g);

  _checkYPosition();

  window.addEventListener('scroll', throttle(_checkYPosition, 300), false);

  function _checkYPosition(){
    var top = window.scrollY;
    var hideNav = true;
    switch (true) {
      case  top < 50:
          hideNav = true;
          myClassAdmin.addClass(nav, 'side-nav--hide');
        if (!myClassAdmin.hasClass(nav, 'side-nav__grid--check-0')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-0');
        }
        break;
      case  top >= 50 && top < divPlay.offsetTop + divPlay.clientHeight - 200:
        if (!myClassAdmin.hasClass(nav, 'side-nav__grid--check-1')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-1');
        }
        hideNav ? myClassAdmin.removeClass(nav, 'side-nav--hide') : '';
        break;
      case  top - divPeripherals.offsetTop + 200 >= -50 && top < divPeripherals.offsetTop + divPeripherals.clientHeight - 200:
        if (!myClassAdmin.hasClass(nav, 'side-nav__grid--check-2')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-2');
          hideNav ? myClassAdmin.removeClass(nav, 'side-nav--hide') : '';
        }
        break;
      case  top - divController.offsetTop + 200 >= -50 && top < divController.offsetTop + divController.clientHeight - 200:
        if (!myClassAdmin.hasClass(nav, 'side-nav__grid--check-3')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-3');
          hideNav ? myClassAdmin.removeClass(nav, 'side-nav--hide') : '';
        }
        break;
      case  top - divRelease.offsetTop + 200 >= -50 && top < divRelease.offsetTop + divRelease.clientHeight:
        if (!myClassAdmin.hasClass(nav, 'side-nav__grid--check-4')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-4');
          hideNav ? myClassAdmin.removeClass(nav, 'side-nav--hide') : '';
        }
        break;
    }
  }
})();
