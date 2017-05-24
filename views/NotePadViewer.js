(function(exports) {
  function NotePadViewer() {
  }

  NotePadViewer.prototype.wrapNote = function(string){
    return `<ul><li><div>${string}</div></li></ul>`
  };

  exports.NotePadViewer = NotePadViewer;
})(this);
