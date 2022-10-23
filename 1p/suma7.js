//Sumatoria de los números

let a = 300;
let suma = 0;
for (let i = 200; i < a; i++) {
  if (i % 7 == 0) {
    suma += i;
  }
}
console.log(suma);