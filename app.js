const { tabalHastaN }= require('./helpers/multiplicar');
const colors = require('colors');
const argv = require("./config/yargs");

console.clear();
console.log(argv);

tabalHastaN(argv.b, argv.l, argv.h)
           .then(nom => console.log(nom.rainbow, 'creado'))
           .catch( err => console.log(err)); 