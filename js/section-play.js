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
  var openBtn      = document.getElementById('modal-open');
  var closeBtn     = document.getElementById('modal-close');
  var modal        = document.getElementById('modal');
  var row          = document.querySelector('.play__grid-modal-slide-wrapper');
  var progressGrid = document.querySelector('.play__grid-modal-slider-progress');
  var progressBars = document.querySelectorAll('.play__grid-modal-slider-progress-bar');

  var countdown      = null;
  var resetTimer     = null;
  var WIDTH          = 50;
  var IMGS_COUNT     = 4;
  var ANIMATION_TIME = 4;
  var myPosition     = 0;

  openBtn.addEventListener('click', throttle(_toggleModal, 2000));
  closeBtn.addEventListener('click', throttle(_toggleModal, 2000));
  progressGrid.addEventListener('click', _goToImg);

  function _toggleModal() {
    if (myClassAdmin.hasClass(modal, 'play__grid-modal--show')) {
      myClassAdmin.removeClass(modal, 'play__grid-modal--show');
      _resetModal();
      _clearBarAnination();
    } else {
      myClassAdmin.addClass(modal, 'play__grid-modal--show');
      _modalCountdown(1, WIDTH, ANIMATION_TIME, IMGS_COUNT);
    }
  }

  function _resetModal() {
    clearInterval(resetTimer);
    resetTimer = setTimeout(function() {
      row.style.transform = "";
    }, 500);
    clearInterval(countdown);
  }

  function _goToImg(e, auto) {
    if (auto) {
      _clearBarAnination();
      myClassAdmin.addClass(e, 'play__grid-modal-slider-progress-bar--animate-bg');
    } else {
      if (e.target.children.length === 1) {
        myPosition = e.target.children[0].dataset.position;
        myClassAdmin.addClass(e.target.children[0], 'play__grid-modal-slider-progress-bar--animate-bg');
        _modalCountdown(myPosition, WIDTH, ANIMATION_TIME, IMGS_COUNT);
        _clearBarAnination(myPosition);
      }
      if (e.target.children.length === 0) {
        myPosition = e.target.dataset.position;
        myClassAdmin.addClass(e.target, 'play__grid-modal-slider-progress-bar--animate-bg');
        _modalCountdown(e.target.dataset.position, WIDTH, ANIMATION_TIME, IMGS_COUNT);
        _clearBarAnination(myPosition);
      }
      e.stopPropagation();
    }
  }

  function _clearBarAnination(position) {
    if (position) {
        Array.prototype.forEach.call(progressBars, function(el) {
          myClassAdmin.removeClass(el, 'play__grid-modal-slider-progress-bar--animate-bg');
        });
        setTimeout(function() {
          myClassAdmin.addClass(progressBars[position - 1], 'play__grid-modal-slider-progress-bar--animate-bg');
        }, 1);
    } else {
        Array.prototype.forEach.call(progressBars, function(el) {
          myClassAdmin.removeClass(el, 'play__grid-modal-slider-progress-bar--animate-bg');
        });
      }
  }

  function _modalCountdown(position, width, seconds, imgCount) {
    clearInterval(countdown);
    clearInterval(resetTimer);
    row.style.transform = "translateX(-" + (width * (position - 1)) + "vw)";
    countdown = setInterval(_moveFrame, seconds * 1000);
    _goToImg(progressBars[position - 1], true);

    function _moveFrame() {
      if (position >= imgCount) {
        _toggleModal();
        _resetModal();
        return;
      }
      _goToImg(progressBars[position], true);
      row.style.transform = "translateX(-" + width * position + "vw)";
      position++;
    }
  }
})();
