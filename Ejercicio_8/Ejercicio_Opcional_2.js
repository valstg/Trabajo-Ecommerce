let opciones = ["piedra", "papel", "tijera"];
let opcion_elegida = opciones[Math.floor(Math.random() * opciones.length)];

let condicion = false;

while (!condicion) {
  let usuario = prompt("Escoger entre piedra, papel o tijera:").toLowerCase();

  if (usuario === opcion_elegida) {
    alert("¡Empate!");
    document.write("Ambos eligieron " + usuario + ". ¡Empate!");
    condicion = true;
  }
  else if (
    (opcion_elegida === "piedra" && usuario === "tijera") ||
    (opcion_elegida === "tijera" && usuario === "papel") ||
    (opcion_elegida === "papel" && usuario === "piedra")
  ) {
    alert("La máquina eligió " + opcion_elegida + " y le ganó al usuario.");
    document.write("La máquina eligió " + opcion_elegida + " y le ganó al usuario.");
    condicion = true;
  } else if (
    (usuario === "piedra" || usuario === "papel" || usuario === "tijera")
  ) {
    alert("¡Ganaste! La máquina eligió " + opcion_elegida);
    document.write("¡Ganaste! La máquina eligió " + opcion_elegida);
    condicion = true;
  } else {
    alert("Opción inválida. Escribí piedra, papel o tijera.");
  }
}
