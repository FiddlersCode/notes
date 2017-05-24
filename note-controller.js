(function (exports) {
  function changeGreeting(text) {
    var elem = document.getElementById("app").textContent = text;

  }

  exports.changeGreeting = changeGreeting;
});
