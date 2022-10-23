//Total de elementos

let a = 300;
let elementos=0;
for (let i = 200; i < a; i++) {
  if (i % 7 == 0) {
    elementos++
  }
}
console.log(elementos);