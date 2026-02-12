const usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "María", edad: 25 },
];

const soloNombres = usuarios.map(toString => (toString.nombre));

console.log(soloNombres);