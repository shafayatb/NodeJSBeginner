const path = require('path');

//Base File Name
console.log(path.basename(__filename));

//Directory name
console.log(path.dirname(__filename));

//File extention
console.log(path.extname(__filename));

//Create path name
console.log(path.parse(__filename).base);

//Concatenate path

console.log(path.join(__dirname, 'test', 'hello.html'));