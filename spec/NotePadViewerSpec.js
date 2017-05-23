(function() {
  console.log('Unit test: There is a NotePad Viewer');
  var notepadviewer;
  notepadviewer = new NotePadViewer();
  assert.isConstructedFrom(notepadviewer, NotePadViewer);
})();

(function() {
  console.log('Unit test: NotePadViewer displays outputs notes in HTML');
  var notepadviewer, notepadmodel, note;

  var notepad_model = new NotePad();
  var notepad_viewer = new NotePadViewer();

  notepad_model.createNote("hi");

  note = notepad_model.getNote(0);

  assert.isEqual('<ul><li><div>hi</div></li></ul>', notepad_viewer.displayNotesHTML(note.text()));
})();
