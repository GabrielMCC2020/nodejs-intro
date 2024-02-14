const http = require('http');

const servidor = http.createServer((req, res) => {
    // console.log('=====> req (solicitud)');
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log('=====> res (respuesta)');
    // console.log(res.statusCode);
    // res.statusCode = 404;
    // console.log(res.statusCode);

    res.setHeader('Content-Type', 'application/json');
    console.log(res.getHeaders('Content-Type'));

    res.end('Hola, Mundo!');
});

const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`); 
});

