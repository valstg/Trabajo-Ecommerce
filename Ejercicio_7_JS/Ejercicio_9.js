let edades = [18, 25, 14, 32, 16, 40]
for ( let i = 0; i<edades.length; i++) {
    let edad = edades[i]
    if (edad >= 18) {
        document.write(edades[i] +" es mayor de edad. ")
    }
    else{
        document.write(edades[i] +" es menor de edad. ")
    }
}