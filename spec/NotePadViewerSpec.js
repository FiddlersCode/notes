(function() {
  console.log('Unit test: There is a NotePad Viewer');
  var notepadviewer;
  notepadviewer = new NotePadViewer();
  
  assert.isConstructedFrom(notepadviewer, NotePadViewer);
})();
