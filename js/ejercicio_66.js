
const cantidad = parseFloat(prompt("Ingrese la cantidad a invertir:"));
const interesAnual = parseFloat(prompt("Ingrese el interés anual (en %):"));
const anios = parseInt(prompt("Ingrese el número de años de la inversión:"));
alert(`Inversión inicial: ${cantidad}`)
alert(`Interés anual: ${interesAnual}%`)
alert(`Duración: ${anios} años\n`)
let capital = cantidad;
for (let i = 1; i <= anios; i++) {
    capital += capital * (interesAnual / 100); 
    alert(`Año ${i}: Capital acumulado = ${capital.toFixed(2)}`)
}

