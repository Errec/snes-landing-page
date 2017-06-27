var showGridImgs = (function() {
  var grids = document.querySelectorAll('.play__grid-imgs');

  window.addEventListener('scroll', debounce(_showGridImg, 100));

  function _showGridImg() {
    Array.from(grids).forEach(function(grid) {
      var currentPosition  = (window.scrollY + window.innerHeight) - grid.parentElement.clientHeight / 2;
      var gridBottom = grid.parentElement.offsetTop + grid.parentElement.clientHeight;
      if(currentPosition > grid.parentElement.offsetTop && window.scrollY < gridBottom) {
        Array.from(grid.children).forEach(function(wrapper) {
          Array.from(wrapper.children).forEach(function(img) {
            if (img.dataset.effect !== 'no') {
            myClassAdmin.addClass(img, 'play__grid--img-effec');
            }
          });
        });
      }
    });
  }
})();

var fadeText = (function() {
  var texts = document.querySelectorAll('.text-effect');

  window.addEventListener('scroll', debounce(_fadeTextCheck, 50));

  function _fadeTextCheck() {
    Array.from(texts).forEach(function(text) {
      var currentPosition  = (window.scrollY + window.innerHeight) - text.parentElement.clientHeight / 2;
      var gridBottom = text.parentElement.offsetTop + text.parentElement.clientHeight;
      if(currentPosition > text.parentElement.offsetTop && window.scrollY < gridBottom) {
        myClassAdmin.addClass(text, 'play--show-text');
      } else {
        myClassAdmin.removeClass(text, 'play--show-text');
      }
    });
  }
})();

var modal = (function() {
  var openBtn  = document.getElementById('modal-open');
  var closeBtn = document.getElementById('modal-close');
  var modal    = document.getElementById('modal');
  var row      = document.querySelector('.play__grid-modal-slide-wrapper');

  var countdown  = null;
  var resetTimer = null;
  var WIDTH      = 50;
  var IMGS_COUNT = 4;

  openBtn.addEventListener('click', throttle(_toggleModal, 3000));
  closeBtn.addEventListener('click', throttle(_toggleModal, 2000));

  function _toggleModal() {
    if (myClassAdmin.hasClass(modal, 'play__grid-modal--show')) {
      myClassAdmin.removeClass(modal, 'play__grid-modal--show');
      _resetModal();
    } else {
      myClassAdmin.addClass(modal, 'play__grid-modal--show');
      _modalCountdown(1, WIDTH, 4, IMGS_COUNT);
    }

  }

  function _resetModal() {
    clearInterval(resetTimer);
    resetTimer = setTimeout(function() {
      row.style.transform = "";
    }, 500);
    clearInterval(countdown);
  }

  function _modalCountdown(position, WIDTH, seconds, IMGS_COUNT) {
    clearInterval(countdown);
    clearInterval(resetTimer);
    row.style.transform = "translateX(-" + (WIDTH * (position - 1)) + "vw)";
    countdown = setInterval(_moveFrame, seconds * 1000);

    function _moveFrame() {
      if (position >= IMGS_COUNT) {
        _toggleModal();
        _resetModal();
        return;
      }
      row.style.transform = "translateX(-" + WIDTH * position + "vw)";
      position++;
    }
  }
})();
