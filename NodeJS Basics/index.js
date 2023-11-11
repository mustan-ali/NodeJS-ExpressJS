/*
----Global Objects----
    setTimeout()
    clearTimeout()
    setInterval()
    clearInterval()
    __dirname    // path to current directory
    __filename   // file name of current file
*/

//Using the exported module
const pm = require('./PeopleModule');

console.log(pm.people, pm.ages);
pm.sayHi('John');

//Using the built-in module
const os = require('os');

console.log(os);
console.log(os.platform(), os.homedir());