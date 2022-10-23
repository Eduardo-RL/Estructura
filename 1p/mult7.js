//Multiplicatoria de los números

let a = 300;
let multiplicacion = 1;
for (let i = 200; i < a; i++) {
  if (i % 7 == 0) {
    multiplicacion *= i;
  }
}
console.log(multiplicacion);