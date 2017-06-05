//Modified from https://jaketrent.com/post/addremove-classes-raw-javascript/
var myClassAdmin = {
  hasClass: function(element, className) {
    if (element.classList) {
      return element.classList.contains(className);
    } else {
        return !!element.className.match(new RegExp('\\b' + className + '\\b'));
    }
  },
  addClass: function(element, className) {
    if (element.classList) {
      element.classList.add(className);
    } else if (!hasClass(element, className)) {
        element.className += " " + className;
      }
  },
  removeClass: function(element, className) {
    if (element.classList) {
      element.classList.remove(className);
    } else if (hasClass(element, className)) {
        var reg = new RegExp('\\b' + className + '\\b');
        element.className=element.className.replace(reg, ' ');
    }
  }
};
