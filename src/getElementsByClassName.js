// This function will return any elements of given `className` within the dom. It is a
// reimplementation of the native `getElementsByClassName`, intentionally using recursion
var getElementsByClassName = function(targetClassName) {

  // create a storage element
  var results = [];
  // check initial element for class name and if it matches targetClassName, push to storage
  function search(element) {
    if(element.className !== undefined) {
      var classNameList = element.className.split(' ');
      if(classNameList.indexOf(targetClassName) !== -1) {
        results.push(element);
      }
    }
  // check if element has children, if so, iterate last two steps for each of them.
    if (element.childNodes.length > 0) {
      for (var i = 0; i < element.childNodes.length; i++) {
        search(element.childNodes[i]);
      }
    }
  };

  search(document.body);
  // after iterating all children, return storage element
  return results;
};


