let palabra = prompt("Ingresá una palabra:");
let contadorVocales = 0;
let vocales = "aeiou";

for (let i = 0; i < palabra.length; i++) {
  let letra = palabra[i].toLowerCase();

  if (vocales.includes(letra)) {
    contadorVocales++;
  }
}

console.log(`La palabra "${palabra}" tiene ${contadorVocales} vocales.`);
document.write(`<h2>La palabra "${palabra}" tiene ${contadorVocales} vocales.</h2>`);
