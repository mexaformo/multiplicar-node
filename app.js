const crearArchivo = require("./multiplicar/multiplicando");

const argv = require('./config/yargs');

const { crearArchivo: crearArchiv0 } = require('./multiplicar/multiplicando');

let comando = argv._[0];

console.log( argv );

switch( comando ){
    case 'listar':
        console.log('listar');
        break;

    case 'crear':
        crearArchiv0( argv.base )
            .then( archivo => console.log(`Archivo creado ${ archivo }`));          
        break;
    
            
}
console.log('Limite: ', argv.limite );




// let base = 5;

// crearArchiv0( base )
//     .then( archivo => console.log(`Archivo creado ${ archivo }`));  