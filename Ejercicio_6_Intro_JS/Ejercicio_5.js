let num1 = prompt("Ingrese el primer numero: ");
let num2 = prompt("Ingrese el segundo numero: ");
let num3 = prompt("Ingrese el tercer numero: ");
num1 = Number(num1);
num2 = Number(num2);
num3 = Number(num3);
let promedio = (num1 + num2 + num3) / 3;
console.log("El promedio de los tres numeros es: " + promedio);
document.write("<h2> El promedio de los tres numeros es: " + promedio + "</h2>");