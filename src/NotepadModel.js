function NotePad() {
  this._notes = [];
}

NotePad.prototype.addNote = function(note) {
  this._notes.push(note);
};

NotePad.prototype.getNote = function() {
  return this._notes[0];
};

NotePad.prototype.getAllNotes = function() {
  return this._notes;
};

NotePad.prototype.createNote = function(text) {
  var note = new Note(text);
  this._notes.push(note);
};
