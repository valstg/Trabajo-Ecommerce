let auto = {
    marca : "Mitsubishi",
    modelo : "Montero",
    year : 1998,
    color : "Azul",
    velocidad_maxima : 180,
    motor : "2.8 Turbo Diesel",
    puertas : 5
};
console.log(auto);
document.write(`<h2>El auto ${auto.marca} ${auto.modelo} del anio ${auto.year} es de color ${auto.color}, tiene una velocidad maxima de ${auto.velocidad_maxima} km/h, un motor ${auto.motor} y cuenta con ${auto.puertas} puertas. </h2>`)
let imagen = document.createElement("img");
imagen.src = "Recursos adicionales/Imagen/Montero_azul.png";
imagen.alt = "Imagen del auto";
imagen.style.width = "300px";
imagen.style.borderRadius = "10px";
document.body.appendChild(imagen);