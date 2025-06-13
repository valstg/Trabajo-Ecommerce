//Dado un array con elementos repetidos [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4], crea un
//programa que devuelva un nuevo array sin duplicados.

let array = [1, 2, 3, 1, 4, 5, 2, 6, 5, 1, 2, 4, 2, 1,5, 8, 7, 4];
let nuevo_array = [];

for (let i=0;i<array.length;i++){
    numero=array[i]
    if (!nuevo_array.includes(array[i])){
        
        nuevo_array.push(array[i])
    }
}
document.write("El nuevo array es: "+nuevo_array);