console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes');

// var user = os.userInfo();

// fs.appendFile('greetings.txt', `Hello ${user.username}!`, function (err) {
//     if (err) {
//         console.log('Unable to write to file.');``
//     }
// });

let res = notes.addNote();
console.log(res);

let added = notes.add(5, 10);
console.log(added);