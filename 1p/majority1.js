let arr = [];

for (let i = 0; i < 5; i++) {
    arr[i] = 1 + (Math.floor(Math.random() * 4));
}

   function mayoria(arr=[]){
    let cantidad = Math.floor(arr.length / 2);
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];
        map[value] = map[value] + 1 || 1;
        if (map[value] > cantidad)
            return value
    };
    return ("No hay mayoria ");
};
console.log(arr);
console.log("Número de la mayoria: "+mayoria(arr));