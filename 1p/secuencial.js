console.log("Inicia 10e3");
let num1=[];
let resultado1 = [];
let k1=0;
let a1=0;
  function secuencial1(a1){
    for (let j = 0; j <= 10e3; j++) {
    num1[j] = (1+Math.floor(Math.random() * 10e3))
}
console.time("Tiempo de la primer lista ");
     for(let i = 0; i < num1.length; i++){
        if(num1[i] === a1){
            resultado1.push(i)
            k1++
        }
        k1++
    }
  if(resultado1.length===0){
        return -1
    }
   return resultado1
}
console.log("El numero que esta buscando esta en la posición: "+secuencial1(100));//<--Numero que se va ha buscar
console.log(num1);
console.timeEnd("Tiempo de la primer lista ");
console.log("Fueron "+k1+ " pasos");



console.log("\nInicia 10e4");

let num2=[];
let resultado2 = [];
let k2=0;
let a2=0;
  function secuencial2(a2){
    for (let i = 0; i <= 10e4; i++) {
    num2[i] = (1+Math.floor(Math.random() * 10e4))
}
console.time("Tiempo de la segunda lista ");
     for(let x = 0; x < num2.length; x++){
        if(num2[x] === a2){
            resultado2.push(x)
            k2++
        }
        k2++
    }
  if(resultado2.length===0){
        return -1
    }
   return resultado2
}
console.log("El numero que esta buscando esta en la posición: "+secuencial2(1000));//<--Numero que se va ha buscar
console.log(num2);
console.timeEnd("Tiempo de la segunda lista ");
console.log("Fueron "+k2+ " pasos");


console.log("\nInicia 10e5");
let num3=[];
let resultado3 = [];
let k3=0;
let a3=0;
  function secuencial3(a3){
    for (let j = 0; j <= 10e5; j++) {
    num3[j] = (1+Math.floor(Math.random() * 10e5))
}
console.time("Tiempo de la tercer lista ");
     for(let i = 0; i < num3.length; i++){
        if(num3[i] === a3){
            resultado3.push(i)
            k3++
        }
        k3++
    }
  if(resultado3.length===0){
        return -1
    }
   return resultado3
}
console.log("El numero que esta buscando esta en la posición: "+secuencial3(5000));//<--Numero que se va ha buscar
console.log(num3);
console.timeEnd("Tiempo de la tercer lista ");
console.log("Fueron "+k3+ " pasos");