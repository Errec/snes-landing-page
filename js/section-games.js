var changeBg = (function() {
  var bg = document.querySelector('.games__bg-characters');
  var bgChildrenCount = bg.children.length;
  var bgArr = [];
  var index = 0;

  for(var i = bgChildrenCount - 1; i >= 0; i--) {
    bgArr[i] = i;
  }

  setInterval(_changeBg, 5000);

  function _changeBg() {
    myClassAdmin.removeClass(bg.children[index % bgChildrenCount], 'games__bg-character--show');
    myClassAdmin.addClass(bg.children[++index % bgChildrenCount], 'games__bg-character--show');
  }
})();
