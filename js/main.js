//Modified from https://jaketrent.com/post/addremove-classes-raw-javascript/
var myClassAdmin = {
  hasClass: function(element, myClassName) {
    if (element.classList) {
      return element.classList.contains(myClassName);
    } else {
        return !!element.className.match(new RegExp('\\b' + myClassName + '\\b'));
    }
  },
  addClass: function(element, myClassName) {
    if (element.classList) {
      element.classList.add(myClassName);
    } else if (!hasClass(element, myClassName)) {
        element.className += " " + myClassName;
      }
  },
  removeClass: function(element, myClassName) {
    if (element.classList) {
      element.classList.remove(myClassName);
    } else if (hasClass(element, myClassName)) {
        var reg = new RegExp('\\b' + myClassName + '\\b');
        element.className=element.className.replace(reg, ' ');
    }
  },
  replaceClass: function(element, myOldClass, myNewClass) {
    if (element.classList) {
      element.classList.remove(myOldClass);
      element.classList.add(myNewClass);
    } else {
      element.className.replace(myOldClass, myNewClass);
    }
  }
};
