var sideNavScroll = (function() {
  // document.querySelector('.hello').scrollIntoView({ behavior: 'smooth' });
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
    divPeripherals.scrollIntoView({behavior: 'smooth' });
  }

  function _scrollController() {
    divController.scrollIntoView({behavior: 'smooth' });
  }
  function _scrollGames() {
    divGames.scrollIntoView({behavior: 'smooth' });
  }

})();
