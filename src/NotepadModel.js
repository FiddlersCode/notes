function NotePad() {
  this._notes = [];
  this._allNotes = [];
}

NotePad.prototype.addNote = function(note) {
  this._notes.push(note);
};

// NotePad.prototype.getNote = function() {
//   return this._notes[0];
// };

NotePad.prototype.getAllNotes = function() {
  this._notes.forEach(function (note) {
    console.log(note);
    note.text();
    this._allNotes.push(note);
  });
};
