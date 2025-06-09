let numero = prompt("Ingrese un numero: ");
numero = Number(numero);

if (isNaN(numero)) {
    alert("Por favor, ingrese un número válido.");
}
else if ( numero %2 ==0 ){
    alert("El numero ingresado es par!");
    }
else {
    alert("El numero ingresado es impar");
    }