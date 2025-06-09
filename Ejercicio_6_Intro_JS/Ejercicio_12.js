let miListaDePendientes = [
    "Breaking bad",
    "Game of Thrones",
    "The Walking Dead",
    "Stranger Things"
];
// Pedimos una nueva serie al usuario
let nuevaSerie = prompt("Ingrese una nueva serie para agregar a la lista: ");
// Agregamos la nueva serie al final de la lista
miListaDePendientes.push(nuevaSerie);
// Cambiamos la 2da por otra nueva serie
miListaDePendientes[1] = prompt("Ingrese una nueva serie para reemplazar la segunda: ");
//Mostramos la lista actualizada
console.log("Lista actualizada de series pendientes:");
for (let i = 0; i < miListaDePendientes.length; i++) {
    console.log(miListaDePendientes[i]);
    document.write("<h2>" + miListaDePendientes[i] + "</h2>");
}