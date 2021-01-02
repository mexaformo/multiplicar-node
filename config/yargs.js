const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require( 'yargs' )
                .command( 'listar', 'Imprime en la cónsola la tabla de multiplicar.', opts )
                .command( 'crear', 'Despliega en la cónsola la tabla de multiplicar.', opts )
                .help()
                .argv;


module.exports = argv;