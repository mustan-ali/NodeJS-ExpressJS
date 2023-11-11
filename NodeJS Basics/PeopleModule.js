// Creating a module
const people = ['John', 'Jane', 'Bob'];
const ages = [20, 30, 40];

const sayHi = (name) => {
    console.log(`Hello ${name}`)
}

//Exporting the module to be used in another file
module.exports = {
    people,
    ages,
    sayHi
};