(function() {
  console.log('Unit test: There is a NotePad Viewer');
  var notepadviewer;
  notepadviewer = new NotePadViewer();

  var notepadmodel = new NotePad();
  notepadmodel.createNote("hi");
  notepadmodel.createNote("bye");

  assert.isConstructedFrom(notepadviewer, NotePadViewer);
  assert.isEqual('<ul><li><div>hi</div></li></ul>', notepadviewer.displayNotesHTML());
})();
