const productos = ["laptop", "mouse", "teclado"];

const mensajes = productos.map(producto => `Producto: ${producto}`);

console.log(mensajes);
// Debe mostrar: ["Producto: laptop", "Producto: mouse", "Producto: teclado"]

