(function() {
  console.log('Unit test: There is a NotePad Viewer');
  var notepadviewer;
  notepadviewer = new NotePadViewer();
  assert.isConstructedFrom(notepadviewer, NotePadViewer);
})();

(function() {
  console.log('Unit test: NotePadViewer displays outputs notes in HTML');
  var notepadviewer, notepadmodel;

  var notepadmodel = new NotePad();
  var notepadviewer = new NotePadViewer();

  notepadmodel.createNote("hi");
  notepadmodel.createNote("bye");
  assert.isEqual('<ul><li><div>hi</div></li></ul>', notepadviewer.displayNotesHTML());
})();
