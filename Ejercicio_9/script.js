let contactos = []; // Array para guardar los contactos

const btnAgregar = document.getElementById("btnAgregar");
const tabla = document.getElementById("tablaContactos").getElementsByTagName("tbody")[0];

btnAgregar.addEventListener("click", function () {
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const telefono = document.getElementById("telefono").value;
  const fechaNacimiento = document.getElementById("fechaNacimiento").value;

  if (!nombre || !email || !telefono || !fechaNacimiento) {
    alert("Por favor, completá todos los campos.");
    return;
  }

  // Agregar al array
  contactos.push({
    nombre: nombre,
    email: email,
    telefono: telefono,
    fechaNacimiento: fechaNacimiento
  });

  // Limpiar inputs
  document.getElementById("nombre").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("fechaNacimiento").value = "";

  actualizarTabla();
});

function actualizarTabla() {
  // Vaciar la tabla
  tabla.innerHTML = "";

  // Recorrer el array con un for clásico
  for (let i = 0; i < contactos.length; i++) {
    const fila = tabla.insertRow();

    fila.innerHTML = `
      <td>${contactos[i].nombre}</td>
      <td>${contactos[i].email}</td>
      <td>${contactos[i].telefono}</td>
      <td>${contactos[i].fechaNacimiento}</td>
      <td><button class="eliminar">Eliminar</button></td>
    `;

    // Botón eliminar
    fila.querySelector(".eliminar").addEventListener("click", function () {
      contactos.splice(i, 1); // Eliminar del array
      actualizarTabla();      // Redibujar
    });
  }
}
