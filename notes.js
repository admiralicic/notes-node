console.log('Starting notes!');

const fs = require('fs');

const fetchNotes = () => {
    try {
        let notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);
    } catch (error) {
        notes = [];
    }

    return notes;
}

const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    }

    

    var duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

}

const getAll = () => {
    console.log('Listing notes');
}

const getNote = (title) => {
    console.log('Reading', title);
}

const removeNote = (title) => {
    console.log('Removing', title);
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote
}