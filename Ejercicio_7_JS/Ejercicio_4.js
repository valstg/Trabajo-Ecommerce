let array = [23, 45, 12, 67, 34, 89, 21];
let max = array[0];
for (let i = 1; i < array.length; i++) {

    if (array[i] > max){
        max = array[i];
        
        }
}
document.write(`El numero ${max} es el mas grande del array`); 