document.write("programa que use un bucle para pedir al usuario números enteros: <br>")

suma=0
while (suma <= 100) {
    let numero = Number(prompt("Introduce un número:"));
    document.write(` + ${numero} <br>  `);
    // Validación del número
    if (isNaN(numero)) {
        document.write("Por favor, introduce un número válido.<br>");
        continue; // Pide otro número si no es válido
    }
    suma += numero
    if (suma > 100) {
        document.write(`La suma total es: ${suma} <br>`);
        break; // Termina el bucle si la suma supera 100
    }
}
