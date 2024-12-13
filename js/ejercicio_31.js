function calcularDistancia(x1, y1, x2, y2) {
    let distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return distancia;
}
let x1 = parseFloat(prompt("Ingrese la coordenada x del primer punto (x1):"));
let y1 = parseFloat(prompt("Ingrese la coordenada y del primer punto (y1):"));
let x2 = parseFloat(prompt("Ingrese la coordenada x del segundo punto (x2):"));
let y2 = parseFloat(prompt("Ingrese la coordenada y del segundo punto (y2):"));
let distancia = calcularDistancia(x1, y1, x2, y2);
alert("La distancia entre los dos puntos es: " + distancia);