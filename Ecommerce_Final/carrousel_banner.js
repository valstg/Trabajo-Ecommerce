const imagenes = [
  "img/inicio1.jpg",
  "img/inicio2.jpg",
  "img/inicio3.jpg"
];

let indice = 0;
const banner = document.getElementById("banner");

function cambiarImagen() {
  indice = (indice + 1) % imagenes.length;
  banner.src = imagenes[indice];
}

// Cambiar imagen cada 4 segundos
setInterval(cambiarImagen, 4000);