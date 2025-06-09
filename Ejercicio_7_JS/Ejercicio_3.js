let numero = Number(prompt("Introduce un número del 1 al 100:"));
if (numero >= 1 && numero <= 100) {
    
    document.write(`<h2>Tabla de multiplicar del ${numero} </h2>`)
    for (let i = 1; i <=100; i++) {
        let resultado = numero * i;
        if (resultado > 1000) {
            break; // Detener si el resultado supera 1000
        }
        document.write(`${numero} x ${i} = ${resultado} <br>`);
    }
}
else{
        document.write("El número debe estar entre 1 y 100.");
}
