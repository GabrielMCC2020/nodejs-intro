let infoCurso = {
    "titulo": "Aprende Node.JS",
    "numVistas": 45642,
    "numLikes": 21123,
    "temas": [
        "Javascript",
        "Node.js"
    ],
    "esPublico": true
};
//console.log(infoCurso);

// Objeto de JavaScript -> Cadena de caracteres con formato JSON para enviar al servidor
// Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);
console.log(infoCursoJSON);
console.log(typeof infoCursoJSON);
console.log(infoCursoJSON.titulo);

// Cadena de caracteres en formato JSON -> Objeto de JavaScript
let infoCursoObjeto = JSON.parse(infoCursoJSON);
console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);