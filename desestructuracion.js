let persona = {
  edad: 22,
  nombre: "pepe",
};

// DOT NOTATION
console.log(persona.edad);

// BRACKET NOTATION
console.log(persona["edad"]);

// desestructurar un objeto

// no importa el orden pero si importa el nombre
let { nombre, edad } = persona;

console.log(edad);
console.log(nombre);

// desestructurar un array
console.log("------");
let personas = ["pepe", "juan", "carmen"];

console.log(personas[1]);
console.log(personas[2]);
console.log(personas[0]);
console.log("------");

// no importa el nombre , pero si el orden
let [u1, u2, u3] = personas;
console.log(u1);
