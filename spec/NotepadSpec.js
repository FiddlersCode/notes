(function() {
  console.log('Unit test: NotePad can store and retrieve a note');
  var notepad, note;
  notepad = new NotePad();
  note = new Note('positive');

  assert.isConstructedFrom(notepad, NotePad);
  notepad.addNote(note);
  assert.isConstructedFrom(notepad.getNote(), Note);
  assert.isEqual(notepad.getNote().text(),'positive');
  console.log('Unit test passed');
})();

(function() {
  console.log('Unit test: NotePad can store and retrieve several notes');
  var notepad, note;
  notepad = new NotePad();
  note = new Note('positive');

  var addNotes = function(note, n) {
    for (var i = 0; i < n; i++) {
        notepad.addNote(note);
    }
  };

  addNotes(note, 5);

  assert.isEqual(notepad.getAllNotes().length, 5);
  console.log('Unit test passed');
})();
