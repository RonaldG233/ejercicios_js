function numeroTexto(num) {
    const texto = ["cero", "uno", "dos", "tres", "cuatro", "cinco"];
    if (num >= 0 && num <= 5) {
        return texto[num]; 
    } else {
        return "Número fuera de rango";
    }
}
let numero = parseInt(prompt("Ingresa un número entre 0 y 5: "));
alert(numeroTexto(numero));