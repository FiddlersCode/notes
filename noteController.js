(function(exports) {
  function NoteController(notepad) {
    var notePad = notepad;
    notePad.createNote("test note");
    this.view = NotePadViewer.displayAll(notePad);
  }

  NoteController.prototype.changeGreeting = function () {
    var elem = document.getElementById("app");
    elem.textContent = this.view;
  }

  exports.NoteController = NoteController;
})(this);
