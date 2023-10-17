const argv = require('yargs')
        .option('b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe:'Base de la tabla de multiplicar'
        })
        .option('l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe:'Lista la tabla '
        })
        .option('h', {
            alias: 'hasta',
            type: 'number',
            describe: 'Numero de iteraciones por tabla',
            default: 10
        })
        .check((argv, options) => {
            if( isNaN(argv.base) ){
                throw 'La base debe ser un numero'
            }
            if( isNaN(argv.hasta) ){
                throw 'La base debe ser un numero'
            }
            return true;
        })
        .argv;

module.exports = argv;
