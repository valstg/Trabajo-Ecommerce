let palabras=  ["casa", "programación", "sol", "javascript", "texto", "html", "bootstrap", "css", "nodejs", "reactjs", "for"];
let palabrotas=[];
contador=0
for (let i=0;i<palabras.length;i++){
    if ( palabras[i].length >5){
        palabrotas.push(palabras[i])
        contador++
    }
}
document.write(`Las palabras con mas de 5 letras son; ${palabrotas}`)
document.write("<p></p>hay " + contador + " palabras con mas de 5 letras.")