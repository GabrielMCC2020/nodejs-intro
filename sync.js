const fs = require('fs')

const archivo = fs.readFileSync('index.html', 'utf8');
console.log(archivo);

fs.renameSync('index.html', 'main.html', (err) => {
    if (err) {
        console.log(err);
    } else {
    console.log('Nombre cambiado exitosamente');
    }
});

fs.appendFileSync('index.html', '<p>Hola Mundo</p>', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Archivo actualizado.');
    }
})

fs.writeFileSync('index.html', '<p>Contenido Nuevo</p>', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Contenido reemplazado exitosamente');
    }
})

fs.unlinkSync('index.html', (err) => {
    if (err) {
        throw err;
    } else {
        console.log('Archivo eliminado.');
    }
});




