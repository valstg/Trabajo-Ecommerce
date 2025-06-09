//Pide al usuario un número entero positivo y usa un bucle para invertirlo. Por ejemplo, si el
//usuario ingresa 12345, el programa debe devolver 54321.

let numero = prompt("Introduce un número entero positivo:");
document.write(`El numero que usted ingreso es ${numero} y a continuacion lo va a visualizar de forma invertida. <br>`)
invertido = "";
for (let i = numero.length - 1; i>=0 ; i-- ){ 
    
    invertido += numero[i]
     
}

console.log("El numero invertido: " + invertido)
document.write(`El numero invertido que usted ingreso es: ${invertido}`)