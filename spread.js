// COPIAR POR VALOR VS COPIA POR REFERENCIA

let a = 1;
let b = a;

console.log(a);
console.log(b);

a += 1;

console.log(a);
console.log(b);

const auto = {
  modelo: 2024,
  marca: "audi",
};

// let copiaAuto = auto;

// console.log(auto);
// console.log(copiaAuto);

// auto.marca = "toyota";

// console.log(auto);
// console.log(copiaAuto);

// copiaAuto.modelo = 2023;

// console.log(auto);
// console.log(copiaAuto);

let copiaPorValorAuto = { ...auto };

auto.marca = "toyota";
console.log(auto);
console.log(copiaPorValorAuto);

// array

let numeros = [1, 4, 2, 5];
// let copiaNumeros = numeros;
// console.log(numeros);
// console.log(copiaNumeros);

// copiaNumeros.push(20);
// console.log(numeros);
// console.log(copiaNumeros);

let copiaPorValorNumeros = [...numeros];

numeros.push(20);
console.log(numeros);
console.log(copiaPorValorNumeros);

const perro = {
  raza: "callejero",
  edad: 2,
};

perro.edad = 3;
// perro = {}
console.log(perro);

const numeritos = [1, 2, 3, 5];
// numeritos = [];
numeritos.push(12);
console.log(numeritos);
