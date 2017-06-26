var changeBg = (function() {
  var bg = document.querySelector('.games__bg-characters');
  var bgArr = ['1', '2', '3', '4', '5'];
  var index = 0;

  setInterval(_changeBg, 5000);

  function _changeBg() {
    myClassAdmin.replaceClass(bg, 'games__bg-characters--' + bgArr[index % 5],'games__bg-characters--' + bgArr[++index % 5]);
  }
})();
