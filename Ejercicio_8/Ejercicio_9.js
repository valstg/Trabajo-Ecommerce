//Dado un array de números [8, 15, 23, 42, 16, 4, 10, 7, 19], escribe un programa que recorra
//el array y sume solo los elementos que están en posiciones pares (índices 0, 2, 4, etc.).

let array=[8, 15, 23, 42, 16, 4, 10, 7, 19];
suma=0
let pares=[]
let impares=[]
for (let i=0;i<array.length;i++){
    if (i % 2 ===0){
        suma+=array[i];
        pares.push(array[i]);
    }
    else{
        impares.push(array[i]);
    }
}
document.write(`El array con los indices pares es: ${array}`)
document.write(`<p></p> Y la suma del array con los elementos que están en posiciones pares es: ${suma}`)
document.write(`<p></p> Y el array con los elementos que están en posiciones impares es: ${impares}`)