(function() {
  console.log('Unit test: NotePad can store and retrieve a note');
  var notepad, note;
  notepad = new NotePad();
  // note = new Note('positive');

  assert.isConstructedFrom(notepad, NotePad);
  notepad.createNote('positive');
  assert.isConstructedFrom(notepad.getNote(0), Note);
  assert.isEqual(notepad.getNote(0).text(),'positive');
  console.log('Unit test passed');
})();

(function() {
  console.log('Unit test: NotePad can store and retrieve several notes');
  var notepad, note;
  notepad = new NotePad();
  note = new Note('positive');

  var addNotes = function(note, n) {
    for (var i = 0; i < n; i++) {
        notepad.createNote(note);
    }
  };

  addNotes(note, 5);

  assert.isEqual(notepad.getAllNotes().length, 5);
  console.log('Unit test passed');
})();

(function() {
  console.log('Unit test: NotePad can create a new note and add it to the ._notes array');
  var notepad;
  notepad = new NotePad();
  notepad.createNote('yolo');
  assert.isEqual(notepad.getAllNotes().length, 1);
  assert.isEqual(notepad.getNote(0).text(), 'yolo');
})();
