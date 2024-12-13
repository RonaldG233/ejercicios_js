let precioPorM2 = parseFloat(prompt("Ingrese el precio por metro cuadrado (en $):"));
let area = parseFloat(prompt("Ingrese el área a pintar en metros cuadrados:"));
let costoTotal = precioPorM2 * area;
alert("El presupuesto total para pintar " + area + " m² es: $" + costoTotal.toFixed(2));