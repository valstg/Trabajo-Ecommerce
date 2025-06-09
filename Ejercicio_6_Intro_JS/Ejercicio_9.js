let num1 = Number(prompt("Ingrese el primer numero: "));
let num2 = Number(prompt("Ingrese el segundo numero: "));
let opcion = Number(prompt("Ingrese 1 para sumar, 2 para restar, 3 para multiplicar o 4 para dividir: "));
if (isNaN(num1) || isNaN(num2) || isNaN(opcion)) {
    alert("Por favor, ingrese números válidos y una opción válida.");
}
else if (opcion === 1) {
    let suma = num1 + num2;
    alert("La suma de " + num1 + " y " + num2 + " es: " + suma);
}
else if (opcion === 2) {
    let resta = num1 - num2;
    alert("La resta de " + num1 + " y " + num2 + " es: " + resta);
}
else if (opcion === 3) {
    let multiplicacion = num1 * num2;
    alert("La multiplicación de " + num1 + " y " + num2 + " es: " + multiplicacion);
}
else if (opcion === 4) {
    if (num2 !== 0) {
        let division = num1 / num2;
        alert("La división de " + num1 + " entre " + num2 + " es: " + division);
    } else {
        alert("No se puede dividir por cero.");
    }
} else {
    alert("Opción no válida. Por favor, ingrese un número entre 1 y 4.");
}