//Crea un programa que solicite la fecha de nacimiento del usuario 
// (en formato YYYY-MMDD) y calcule su edad en días.

let fecha = prompt("Ingrese la fecha de nacimiento (YYYY-MM-DD): ")
let fecha_obj = new Date(fecha)
let fecha_hoy= new Date()
let nacimiento= fecha_hoy - fecha_obj

let edad_dias= Math.floor(nacimiento / (1000 * 60 * 60 * 24))
let edad_anios= Math.floor(nacimiento / (1000 * 60 * 60 * 24 * 7 * 4 * 12))
document.write("Su edad en dias es de: "+edad_dias)
document.write("<p></p> Y su edad en anios es de: "+edad_anios)