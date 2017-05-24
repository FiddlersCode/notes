(function(exports) {
  function NotePadViewer() {
  }

  NotePadViewer.prototype.wrapNote = function(string){
    return `<li><div>${string}</div></li>`;
  };

  NotePadViewer.prototype.displayAll = function(notePad) {
    var htmlNotes = ['<ul>'];
    var notePadViewer = this;
    if (notePad._notes.length >= 1) {
      notePad._notes.forEach(function(notes) {
        htmlNotes.push(notePadViewer.wrapNote(notes.text()));
      });
    } else {htmlNotes.push(notePadViewer.wrapNote("no notes to display"));
  }

  htmlNotes.push('</ul>');
  return htmlNotes.join("");

};

exports.NotePadViewer = NotePadViewer;
})(this);
