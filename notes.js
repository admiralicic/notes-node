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
    return fetchNotes();
}

const getNote = (title) => {
    let notes = fetchNotes();
    let filteredNotes = notes.filter((note) => note.title === title);
    return filteredNotes[0];
}

const removeNote = (title) => {
    let notes = fetchNotes();
    filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);

    return filteredNotes.length !== notes.length;
}

const logNote = (note) => {
    console.log('----------------');
    console.log(`Title: ${note.title}`);    
    console.log(`Body: ${note.body}`);
    console.log('----------------');  
}

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}