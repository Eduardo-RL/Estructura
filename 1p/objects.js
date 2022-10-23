let obj={}
obj.age= 20;
k=0;
for(i=0;i<10000;i++){ 
   let name = "name"+(1+Math.floor(Math.random()*1e4));
    obj[name]=name
    k++;
   }
console.log(obj);
console.log("los pasos son: "+k);