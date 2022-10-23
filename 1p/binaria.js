console.log("Inica 10e3");
let arr1 = [];
let k1 = 0;
for (let i = 0; i < 10e3; i++) {
    arr1[i] = 1 + (Math.floor(Math.random() * 10e3));
}
console.time("Tiempo de la primer lista ");
binarySearch = function(item) {
    arr1.sort(function(a, b) { return a - b });
    console.log(arr1);
    let low = 0,
        high = arr1.length - 1,
        mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = arr1[mid];
        k1++;
        if (element < item) {
            low = mid + 1;
            k1++;
        } else if (element > item) {
            high = mid - 1;
            k1++;
        } else {
            k1++;
            return mid;
        }
    }
};

console.log("La posición del numero que esta buscando es la: "+binarySearch(5));//<--Numero que se va ha buscar
console.timeEnd("Tiempo de la primer lista ");
console.log("La cantidad de pasos es: "+k1);



console.log("\nInica 10e4");


let arr2 = [];
let pasos = 0;
let k2=0;
for (let i = 0; i < 10e4; i++) {
    arr2[i] = 1 + (Math.floor(Math.random() * 10e4));
}

console.time("Tiempo de la segunda lista ");
binarySearch = function(item) {
    arr2.sort(function(c, d) { return c - d });
    console.log(arr2);
    let low = 0,
        high = arr2.length - 1,
        mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = arr2[mid];
        k2++;
        if (element < item) {
            low = mid + 1;
            k2++;
        } else if (element > item) {
            high = mid - 1;
            k2++;
        } else {
            k2++;
            return mid;
        }
    }
};

console.log("La posición del numero que esta buscando es la: "+binarySearch(10));//<--Numero que se va ha buscar
console.timeEnd("Tiempo de la segunda lista ");
console.log("La cantidad de pasos es: "+k2);

console.log("\nInicia 10e5");

let arr3 = [];
let pas = 0;
let k3=0;
for (let i = 0; i < 10e5; i++) {
    arr3[i] = 1 + (Math.floor(Math.random() * 10e5));
}

console.time("Tiempo de la tercer lista ");
binarySearch = function(item) {
    arr3.sort(function(e, f) { return e - f });
    console.log(arr3);
    let low = 0,
        high = arr3.length - 1,
        mid, element;
    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        element = arr3[mid];
        k3++;
        if (element < item) {
            low = mid + 1;
          k3++;
        } else if (element > item) {
            high = mid - 1;
          k3++;
        } else {
            k3++;
            return mid;
        }
    }
};

console.log("La posición del numero que esta buscando es la: "+binarySearch(15));//<--Numero que se va ha buscar
console.timeEnd("Tiempo de la tercer lista ");
console.log("La cantidad de pasos es: "+k3);