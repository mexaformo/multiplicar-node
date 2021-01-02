
const fs = require('fs');

let crearArchivo = async ( base ) => {

    let data = '';

    for (let index = 1; index <= 10; index++) { 
        data += `${ base } * ${ index } = ${ base * index }\n`;    
    }
    
    fs.writeFile(`./tablas/tabla-${ base }.txt`, data, (err) => {
        if (err) {
            throw err
        } 
//        console.log(`La tabla del ${ base } ha sido creada.`);
    });


    return `tabla-${ base }.txt`;

}

module.exports = {
    crearArchivo
}; 

  
