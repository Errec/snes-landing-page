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
