let array=[15, 42, 3, 18, 90, 67, 29]
numero=0
mayor=0
segundo=0
for (let i=0;i<array.length;i++){
    numero=array[i]
    
    if(numero>mayor){
        segundo=mayor
        mayor=numero
    }
    if (numero > segundo && numero < mayor){
        segundo=numero
    }
}
document.write("El numero mas grande es: "+mayor)
document.write("<p> </p>El segundo numero mas grande es: "+segundo)