let numeroSecreto = Math.floor(Math.random() * 10) + 1; // entre 1 y 10
let intento = 0;
let adivinado = false;

while (!adivinado) {
  intento = Number(prompt("Adiviná el número (entre 1 y 10):"));

  if (intento === numeroSecreto) {
    adivinado = true;
    alert("🎉 ¡Felicitaciones! Adivinaste el número.");
    document.write(`<h2>¡Ganaste! El número secreto era ${numeroSecreto}.</h2>`);
  } else if (intento < numeroSecreto) {
    alert("El número es más grande 📈");
  } else {
    alert("El número es más chico 📉");
  }
}
