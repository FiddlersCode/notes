(function(exports) {
  function changeGreeting(text) {
    console.log(text);
    var elem = document.getElementById("app");
    elem.textContent = text;
    console.log(elem);
    console.log(elem.textContent);

  }

  exports.changeGreeting = changeGreeting;
})(this);
