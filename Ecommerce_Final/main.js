//Eventos onclick para los productos de la tienda
function mostrarDetalle(imagen, titulo, descripcion) {
    document.getElementById("modal-img").src = "assets/images/" + imagen;
    document.getElementById("modal-titulo").innerText = titulo;
    document.getElementById("modal-descripcion").innerText = descripcion;
    document.getElementById("modal-detalle").style.display = "block";
  }

  function cerrarModal() {
    document.getElementById("modal-detalle").style.display = "none";
  }

  // Permitir cerrar haciendo clic afuera del modal
  window.onclick = function(event) {
    const modal = document.getElementById("modal-detalle");
    if (event.target == modal) {
      cerrarModal();
    }
  }