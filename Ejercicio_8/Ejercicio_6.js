//Escribe un programa que solicite al usuario un número que represente grados Celsius y
//conviértelo a Fahrenheit utilizando la fórmula: F = (C × 9/5) + 32.

let numero = Number(prompt("Ingrese los grados celsius: "))
document.write(`Usted ha ingresado ${numero} grados Celsius.`)
Fahrenheit= (numero*9/5) +32
document.write(`<p></p> Y ese valor se traduce a ${Fahrenheit} grados Fahrenheit.`)