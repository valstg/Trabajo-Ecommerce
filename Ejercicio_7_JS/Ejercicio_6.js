document.write("Numeros del 1 al 50 (buzz y fizz): ")
for (let i = 1; i <=50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        document.write("El numero " + i + " es FizzBuzz. <br>");
    } else if (i % 3 === 0) {
        document.write("El numero " + i + " es Fizz. <br>");
    } else if (i % 5 === 0) {
        document.write("El numero " + i + " es Buzz. <br>");
    } 
}

