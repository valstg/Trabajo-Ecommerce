const imagenes = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1025/600/400"
];

let indice = 0;

const img = document.getElementById("imagen");
const btnPrev = document.getElementById("prev");
const btnNext = document.getElementById("next");

function mostrarImagen() {
  img.src = imagenes[indice];
}

btnPrev.addEventListener("click", () => {
  indice = (indice - 1 + imagenes.length) % imagenes.length;
  mostrarImagen();
});

btnNext.addEventListener("click", () => {
  indice = (indice + 1) % imagenes.length;
  mostrarImagen();
});

mostrarImagen();