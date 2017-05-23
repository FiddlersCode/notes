// (function() {
//   console.log('Unit test: NotePad can store and retrieve a note');
//   var notepad, note;
//   notepad = new NotePad();
//   note = new Note('positive');
//
//   assert.isConstructedFrom(notepad, NotePad);
//   notepad.addNote(note);
//   assert.isConstructedFrom(notepad.getNote(), Note);
//   assert.isEqual(notepad.getNote().text(),'positive');
//   console.log('Unit test passed');
// })();

(function() {
  console.log('Unit test: NotePad can store and retrieve several notes');
  var notepad, note;
  notepad = new NotePad();
  note1 = new Note('positive');
  note2 = new Note('very positive');
  note3 = new Note('ur ok');
  console.log(note1.text());
  console.log(note2.text());
  console.log(note3.text());
  console.log(notepad);

  notepad.addNote(note1);
  notepad.addNote(note2);
  notepad.addNote(note3);
  console.log(notepad.getAllNotes());
  assert.isEqual(notepad.length === 3);
  assert.isEqual(notepad.getAllNotes(),['positive','very positive','ur ok']);
  console.log('Unit test passed');
})();
