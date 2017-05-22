(function() {
  var note = new Note('This is a note');
  assert.isConstructedFrom(note, Note);
  assert.isEqual(note.text(), "This is a note");
})();
