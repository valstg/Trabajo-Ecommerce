let palabras = [];
let palindromas = [];
let palabra = prompt("Ingrese la palabra que desee: ")

while (palabra != "stop"){
    palabras.push(palabra)
    palabra = prompt("Ingrese otra palabra (hasta ingresar stop'): ")
}

document.write("Las palabras ingresadas son: " +palabras)

for (let i = 0; i < palabras.length; i++) {
  let palabrita = palabras[i].trim().toLowerCase(); // limpiar espacios y unificar formato
  let invertida = palabrita.split("").reverse().join("");

  if (palabrita === invertida) {
    palindromas.push(palabrita);
  }
}

document.write(". <br> Las palabras palindromas son: " +palindromas)