let c = 35;
let j = 2;
let numPrimos = [];

function primos(numero) {

  for (var i = 2; i < numero; i++) {

    if (numero % i === 0) {
      return false;
    }

  }

  return numero !== 1;
}

for (; j < c; j++) {

  if (primos(j)) {
    numPrimos.push(j);
  }
  
}

console.log(numPrimos);