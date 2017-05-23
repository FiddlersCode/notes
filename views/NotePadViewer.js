(function(exports) {
  function NotePadViewer() {
    this._notesHTML = [];
  }

  NotePadViewer.prototype.displayNotesHTML = function(string){
    return `<ul><li><div>${string}</div></li></ul>`
  };

  exports.NotePadViewer = NotePadViewer;
})(this);
