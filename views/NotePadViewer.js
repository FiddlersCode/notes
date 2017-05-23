(function(exports) {
  function NotePadViewer() {
    this._notesHTML = ['<ul><li><div>hi</div></li></ul>'];
  }

  NotePadViewer.prototype.displayNotesHTML = function (){
    return '<ul><li><div>hi</div></li></ul>';
  };

  exports.NotePadViewer = NotePadViewer;
})(this);
