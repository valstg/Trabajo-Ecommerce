//Genera un número aleatorio entre 1 y 50. Permite al usuario adivinar hasta 5 veces. Si falla,
//dale una pista: “Más alto” o “Más bajo”. Si adivina, felicítalo; si no, imprime el número al final.
let numeroSecreto = Math.floor(Math.random() * 50) + 1;
let intento=0
contador=0
adivinado=false
while (!adivinado && contador<5){
    intento = Number(prompt("Adiviná el número (entre 1 y 50):"));
    if (intento===numeroSecreto){
        adivinado=true
        alert("Felicitaciones! Adivinaste el numero secreto: "+numeroSecreto)
        document.write("Felicitaciones! Adivinaste el numero secreto: "+numeroSecreto)
        
    
    }else if (intento>numeroSecreto){
        alert("El numero secreto es mas chico que "+intento)
        contador++
    }else{
        alert("El numero secreto es mas grande que "+intento)
        contador++
    }
    
}
if (contador>=5){
    document.write("Perdiste!")
}