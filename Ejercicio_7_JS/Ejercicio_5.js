let filas = Number(prompt("Introduce el número de filas:"));
document.write(`El numero de filas es: ${filas} <br>`);

for (let i=filas; i >=1; i--){
    let linea = "";
    for (let j=1; j <= i;j++){
        linea += "*";
    }
    console.log(linea);
    document.write(linea + "<br>" )
}



