let numero = Number(prompt("Ingresá un número entero positivo:"));
let resultado = 1;

for (let i = 1; i <= numero; i++) {
  resultado *= i;
}

console.log(`El factorial de ${numero} es: ${resultado}`);
