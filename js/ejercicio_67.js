const altura = parseInt(prompt("Ingrese un número entero para la altura del triángulo:"));
let triangulo = "";
for (let i = 1; i <= altura; i++) {
    triangulo += `${altura}`.repeat(i) + "\n"; 
}
alert(triangulo)
