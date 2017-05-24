(function() {
  console.log('Unit test: There is a NotePad Viewer');
  var notepadviewer;
  notepadviewer = new NotePadViewer();
  assert.isConstructedFrom(notepadviewer, NotePadViewer);
})();

(function() {
  console.log('Unit test: NotePadViewer displays outputs notes in HTML');
  var notepad_viewer, notepad_model, note;

  notepad_model = new NotePad();
  notepad_viewer = new NotePadViewer();

  notepad_model.createNote("hi");

  note = notepad_model.getNote(0);

  assert.isEqual('<li><div>hi</div></li>', notepad_viewer.wrapNote(note.text()));
})();

(function() {
  console.log('Unit test: NotePadViewer can output multiple notes in HTML');

  var notepad_viewer, notepad_model, note;

  notepad_model = new NotePad();
  notepad_viewer = new NotePadViewer();

  notepad_model.createNote("Yo");
  notepad_model.createNote("Bonga");

  assert.isEqual(notepad_viewer.displayAll(notepad_model), '<ul><li><div>Yo</div></li><li><div>Bonga</div></li></ul>');

})();

(function() {
  console.log('Unit test: NotePadViewer can handle empty notes');

  var notepad_viewer, notepad_model;

  notepad_model = new NotePad();
  notepad_viewer = new NotePadViewer();

  assert.isEqual(notepad_viewer.displayAll(notepad_model), '<ul><li><div>no notes to display</div></li></ul>');
})();
