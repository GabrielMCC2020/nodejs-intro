//const saludos = require("./saludos.js");
const {saludar, saludarHolaMundo} = require("./saludos.js");

//console.log(saludos.saludarHolaMundo());
//console.log(saludos.saludar("freeCodeCamp"));
console.log(saludarHolaMundo());
console.log(saludar("freeCodeCamp"));
console.log('Hola Mundo');
console.warn('Ocurrio un error');
console.error('Error');
console.error(new Error('Error de tipo Error'));


console.log(proccess.env);