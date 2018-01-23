var $ = function(selector) {
  var element = document.querySelectorAll(selector);
  var text = function(newText) {
    for (var i = 0; i < element.length; i++) {
      element[i].innerText = newText;
    }
  };

  var addClass = function(className) {
    for (var i = 0; i < element.length; i++) {
      element[i].classList.add(className);
    }
  };

  var removeClass = function(className) {
    for (var i = 0; i < element.length; i++) {
      element[i].classList.remove(className);
    }
  };

  var on = function(action, cb) {
    for (var i = 0; i < element.length; i++) {
      element[i].addEventListener(action, cb);
    }
  };

  //toggleClass
  var toggleClass = function(newClass) {
    for (var i = 0; i < element.length; i++) {
      var elemClassList = element[i].classList;
      console.log("hi");
      var isAlreadyAClass = false;
      for (var j = 0; j < elemClassList.length; j++) {
        if (elemClassList[j] === newClass) {
          isAlreadyAClass = true;
        }
      }
      if (isAlreadyAClass) {
        removeClass(newClass);
      } else {
        addClass(newClass);
      }
    }
  };

  //html
  var html = function(newHTML) {
    for (var i = 0; i < element.length; i++) {
      element[i].innerHTML = newHTML;
    }
  };

  var publicAPI = {
    element: element,
    text: text,
    addClass: addClass,
    removeClass: removeClass,
    on: on,
    html: html,
    toggleClass: toggleClass
  };

  return publicAPI;
};

