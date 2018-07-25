console.log('Starting notes!');

const addNote = (title, body) => {
    console.log('Adding', title, body);
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