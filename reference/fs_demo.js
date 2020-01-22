const fs = require('fs');
const path = require('path');

//Create folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err;
//     console.log('Folder created...');
// });

//Create and write to file
// fs.writeFile(
//     path.join(__dirname, '/test', 'hello.txt'),
//     'Hello Beautiful',
//     err => {
//         if (err) throw err;
//         console.log('File written to...');

//         //File append
//         fs.appendFile(
//             path.join(__dirname, '/test', 'hello.txt'),
//             ' Do you wanna know how i got these scars?',
//             err => {
//                 if (err) throw err;
//                 console.log('File added to...');
//             });
//     });


//Read File
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'),
    path.join(__dirname, '/test', 'joker.txt'), 
    (err) => {
        if (err) throw err;
        console.log('File Renamed...');
    });

