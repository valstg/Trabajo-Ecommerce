let frase = prompt("Ingresá una frase:");
let palabras = frase.trim().split(/\s+/); // divide por espacios (múltiples espacios también)
let cantidad = palabras.length;

console.log(`La frase tiene ${cantidad} palabras.`);
document.write(`<h2>La frase tiene ${cantidad} palabras.</h2>`);
