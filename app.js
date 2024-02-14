// const EventEmitter = require('events');
// const { resolve } = require('path');
// //console.log(EventEmitter);

// const emisorProductos = new EventEmitter();

// emisorProductos.on('compra', (total, numProductos) => {
//     console.log(`Total de la compra: $${total}.`);
//     console.log(`Numero de productos: ${numProductos}.`);
// });

// emisorProductos.emit('compra', 500, 5);

// const promesaCumplida = false;

// const miPromesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (promesaCumplida) {
//             resolve('Promesa cumplida!!');
//         } else {
//             reject('Promesa rechazada..');
//         }
//     }, 3000);
// });

// const manejarPromesaCumplida = (valor) => {
//   console.log(valor);
// }

// const manejarPromesaRechazada = (razonRechazada) => {
//   console.log(razonRechazada);
// }

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);  

// const estatusPedido = () => {
//   return Math.random() < 0.8;
// };

// const miPedidoPizza = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (estatusPedido()) {
//       resolve('Pizza lista!! Su pizza esta en camino.');
//     } else {
//       reject('Ocurrio un error. Porfavor intente nuevamente.');
//     }
//   } , 3000);
// });

// const manejaPedido = (mensajeDeConfirmacion) => {
//   console.log(mensajeDeConfirmacion);
// };

// const rechazaPedido = (mensajeDeError) => {
//   console.log(mensajeDeError);
// };

// miPedidoPizza.then(manejaPedido, rechazaPedido);

// miPedidoPizza
//   .then((mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
//   })
//   .catch((mensajeDeError) => {
//     console.log(mensajeDeError);
//   });

//   const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
//   };
  
//   const manejarRechazo = (mensajeDeError) => {
//     console.log(mensajeDeError);
//   };
  
// miPedidoPizza.then(manejarPedido).catch(manejarRechazo);

// Promesas Asíncronas
function ordenarProducto(producto){
  return new Promise((resolve, reject) => {
    console.log(`Ordenando: ${producto} de freeCodeCamp.`);
    setTimeout(() => {
      if (producto === 'taza') {
        resolve('Ordenando una taza con el logo de FreeCodeCamp...');
      } else {
        reject('Este producto no esta disponible actualmente.');
      }
    }, 2000);
  });
}

function procesarPedido(respuesta) {
  return new Promise((resolve, reject) => {
    console.log('Procesando respuesta...');
    console.log(`La respuesta fue: "${respuesta}"`);
    setTimeout(() => {
      resolve('Gracias por tu compra. Disfruta tu producto de FreeCodeCamp.');
    }, 4000);
  });
}

// ordenarProducto('lapiz')
//   .then(respuesta => {
//     console.log('Respuesta recibida');
//     console.log(respuesta);
//     return procesarPedido(respuesta);  
//   })  
//   .then(respuestaProcesada => {
//       console.log(respuestaProcesada);
//   }) 
//   .catch(error => {
//     console.log(error);
//   });
  
async function realizarPedido(producto) {
  try {
    const respuesta = await ordenarProducto(producto);
    console.log('Respuesta recibida');
    console.log(respuesta);
    const respuestaProcesada = await procesarPedido(respuesta);
    console.log(respuestaProcesada);
    } catch (error) {
    console.log(error);
    }  
  }

  realizarPedido('lapiz');


