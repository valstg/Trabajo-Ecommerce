let precio = Number(prompt("Ingrese el precio del producto en dolares: "));
let precio_en_pesos = precio * 1130; // Asumiendo que 1 dolar = 1130 pesos
let IVA = 0.21; // IVA del 21%
let precio_con_IVA = precio_en_pesos * (1 + IVA); // Precio con IVA incluido
alert("El precio final del producto en pesos argentinos, incluyendo el IVA, es: $" + precio_con_IVA.toLocaleString('es-AR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));