function saludar(nombre) {
return `Hola, ${nombre}`;
}
//console.log(module.exports);

function saludarHolaMundo() {
return `!Hola, mundo!`;
}

//module.exports.saludar = saludar;
//module.exports.saludarHolaMundo = saludarHolaMundo;
//console.log(module.exports);
module.exports = {
    saludar: saludar,
    saludarHolaMundo: saludarHolaMundo
}
