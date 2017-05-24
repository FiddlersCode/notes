(function(exports) {
  function NotePadViewer() {
  }

  NotePadViewer.prototype.wrapNote = function(string){
    return `<li><div>${string}</div></li>`;
  };

  NotePadViewer.prototype.displayAll = function(notePad) {
    var htmlNotes = ['<ul>'];
    notePad._notes.forEach(function(notes) {
      console.log(this.NotePadViewer);
      htmlNotes.push(this.NotePadViewer.wrapNote(notes));
    });
    htmlNotes.push('</ul>');
    return htmlNotes.join("");
  };

  exports.NotePadViewer = NotePadViewer;
})(this);
