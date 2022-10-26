/** 
 *
 * your solution here
 *
 */

var pasosT = []
var tiempoT = []
function stack() {
  this.data = []
  this.empasosTy = empasosTy
  this.push = push
  this.pop = pop
  this.show = show
  this.peek = peek
}

function pop() {
  if (this.empasosTy()) {
    console.log("Pila vacia")
  }
  else {
    return this.data.shift()
  }
}

function empasosTy() {
  if (this.data.length === 0)
    return true
  else
    return false
}

function push(element) {
  this.data.unshift(element)
}

function show() {
  let show = ""
  for (let i = 0; i < this.data.length; ++i) {
    show += this.data[i] + "\n"
  }
  return show
}

function peek() {
  return this.data[0]
}

function sortstack(x) {
    for(let k=1;k<=5;k++){
    let pasos = 0;
    var start = Date.now()
    let p = new stack(x);
    let s = new stack(x);
    
    let n, r, i = 1;
    n = Math.floor(Math.random() * (x - 1) + 1)
    p.push(n)
    while (i < x) {
      while (s.empasosTy() != true) {
        p.push(s.pop())
        pasos++
      }
      r = Math.floor(Math.random() * (x - 1) + 1)
      while (r <= p.peek() && p.empasosTy() != true) {
        s.push(p.pop())
        pasos++
      }
      if (r >= p.peek() || p.empasosTy()) {
        p.push(r)
        pasos++
      }
      i++
    }
    while (!s.empasosTy()) {
      p.push(s.pop())
    }
    pasosT[k-1] = pasos;
    console.log(p.show())
    console.log("pasos: " + pasos)
    var end = Date.now()
    tiempoT[k - 1] = end - start
    console.log("tiempo: "+ tiempoT[k - 1] + "s")
    pasos=0
    }
}

sortstack(10)
pasosT[5] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4]) / (5)
pasosT[6] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4])
tiempoT[5] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4]) / (5)
tiempoT[6] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4])
console.log("Datos de las 5 corridas de 10 elementos")
console.log("Total de Pasos: " + pasosT[6])
console.log("El promedio de pasos es: " + pasosT[5])
console.log("Total de tiempo: " + tiempoT[6] + "ms")
console.log("El promedio de tiempo es: " + tiempoT[5] + "ms")

sortstack(100)
pasosT[5] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4]) / (5)
pasosT[6] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4])
tiempoT[5] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4]) / (5)
tiempoT[6] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4])
console.log("Datos de las 5 corridas de 100 elementos")
console.log("Total de Pasos: " + pasosT[6])
console.log("El promedio de pasos es: " + pasosT[5])
console.log("Total de tiempo: " + tiempoT[6] + "ms")
console.log("El promedio de tiempo es: " + tiempoT[5] + "ms")

sortstack(1000)
pasosT[5] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4]) / (5)
pasosT[6] = (pasosT[0] + pasosT[1] + pasosT[2] + pasosT[3] + pasosT[4])
tiempoT[5] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4]) / (5)
tiempoT[6] = (tiempoT[0] + tiempoT[1] + tiempoT[2] + tiempoT[3] + tiempoT[4])
console.log("Datos de las 5 corridas de 1000 elementos")
console.log("Total de Pasos: " + pasosT[6])
console.log("El promedio de pasos  es: " + pasosT[5])
console.log("Total de tiempo: " + tiempoT[6] + "ms")
console.log("El promedio de tiempo es: " + tiempoT[5] + "ms")