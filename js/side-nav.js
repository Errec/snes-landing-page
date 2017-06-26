var sideNavScroll = (function() {
  var btTop         = document.getElementById('side-item-0');
  var btPlay        = document.getElementById('side-item-1');
  var btPeripherals = document.getElementById('side-item-2');
  var btController  = document.getElementById('side-item-3');
  var btGames       = document.getElementById('side-item-4');

  var divPlay        = document.querySelector('.play__grid-top');
  var divPeripherals = document.querySelector('.peripherals');
  var divController  = document.querySelector('.controller');
  var divGames       = document.querySelector('.games');

  btTop.addEventListener('click', _scrollTop);
  btPlay.addEventListener('click', _scrollPlay);
  btPeripherals.addEventListener('click', _scrollPeripherals);
  btController.addEventListener('click', _scrollController);
  btGames.addEventListener('click', _scrollGames);

  function _scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  function _scrollPlay() {
    divPlay.scrollIntoView({behavior: 'smooth' });
  }

  function _scrollPeripherals() {
    window.scroll({ top: divPeripherals.offsetTop + 5, left: 0, behavior: 'smooth' });
  }

  function _scrollController() {
    window.scroll({ top: divController.offsetTop + 5, left: 0, behavior: 'smooth' });
  }
  function _scrollGames() {
    divGames.scrollIntoView({behavior: 'smooth' });
  }
})();

var checkNavItem = (function() {
  var navGrid        = document.querySelector('.side-nav__grid');

  var divHero        = document.querySelector('.hero');
  var divPlaySlogan  = document.querySelector('.play__slogan');
  var divPlay_top    = document.querySelector('.play__grid-top');
  var divPlay        = document.querySelector('.play');
  var divPeripherals = document.querySelector('.peripherals');
  var divController  = document.querySelector('.controller');
  var divGames       = document.querySelector('.games');

  var regexClassName  = new RegExp(/side-nav__grid--check-\d/g);

  _checkYPosition();

  window.addEventListener('scroll', throttle(_checkYPosition, 300), false);

  function _checkYPosition(){
    var top = window.scrollY;
    switch (true) {
      case  top - divHero.offsetTop >= -50 && top < divPlaySlogan.offsetTop + divPlaySlogan.clientHeight:
        if (!myClassAdmin.hasClass(navGrid, 'side-nav__grid--check-1')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-1');
        }
        break;
      case  top - divPlay_top.offsetTop >= -50 && top < divPlay.offsetTop + divPlay.clientHeight:
        if (!myClassAdmin.hasClass(navGrid, 'side-nav__grid--check-2')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-2');
        }
        break;
      case  top - divPeripherals.offsetTop >= -50 && top < divPeripherals.offsetTop + divPeripherals.clientHeight:
        if (!myClassAdmin.hasClass(navGrid, 'side-nav__grid--check-3')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-3');
        }
        break;
      case  top - divController.offsetTop >= -50 && top < divController.offsetTop + divController.clientHeight:
        if (!myClassAdmin.hasClass(navGrid, 'side-nav__grid--check-4')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-4');
        }
        break;
      case  top - divGames.offsetTop >= -50 && top < divGames.offsetTop + divGames.clientHeight:
        if (!myClassAdmin.hasClass(navGrid, 'side-nav__grid--check-5')) {
          myClassAdmin.replaceClass(navGrid, regexClassName, 'side-nav__grid--check-5');
        }
        break;
    }
  }
})();
