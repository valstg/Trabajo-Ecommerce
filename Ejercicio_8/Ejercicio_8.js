//Dado un array de números [5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6], escribe un programa que
//cree un nuevo array solo con los números positivos y lo imprima.

let array=[5, -1, -7, 10, 3, -2, 8, -9, 4, -4, 7, 1, 6];
let positivos=[]
for (let i=0;i<array.length;i++){
    if (array[i]>0){
        positivos.push(array[i])
    }
}
document.write(`El array inicial es: ${array}`)
document.write(`<p></p>El nuevo array, llamado positivos, es: ${positivos} y ha eliminado todos los numeros negativos.`)