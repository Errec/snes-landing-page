var scrollToTop = (function() {
  var arrow = document.getElementById('arrow-up');

  arrow.addEventListener('click', _scrollTop);

  function _scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }
})();
