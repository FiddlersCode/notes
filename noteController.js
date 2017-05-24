(function(exports) {
  function NoteController(notepad) {
    var notePad = notepad;
    notePad.createNote("test note");
    var notePadViewer = new NotePadViewer();
    this.view = notePadViewer.displayAll(notePad);
  }

  NoteController.prototype.changeGreeting = function (text) {
    var elem = document.getElementById("app");
    elem.textContent = text;
  };

  exports.NoteController = NoteController;
})(this);
