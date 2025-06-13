document.write("El array dado es: [10, 20, 30, 40, 50, 60, 63, 79, 81, 95] <p></p>")
let array =  [10, 20, 30, 40, 50, 60, 63, 79, 81, 95]
suma=0
for (let i=0; i<array.length;i++){
suma+= array[i]
prom=suma/array.length
}
console.log(`La suma del Array dado es ${suma} y el promedio es ${prom}`)
document.write(`La suma del Array dado es ${suma} y el promedio es ${prom}`)