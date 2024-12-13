let a = parseFloat(prompt("Ingrese el valor de a: "));
let b = parseFloat(prompt("Ingrese el valor de b: "));
let c = parseFloat(prompt("Ingrese el valor de c: "));

let discriminante = b * b - 4 * a * c;

if (discriminante > 0) {
    let raiz1 = (-b + Math.sqrt(discriminante)) / (2 * a);
    let raiz2 = (-b - Math.sqrt(discriminante)) / (2 * a);
    alert("Las raíces reales son: " + raiz1 + " y " + raiz2);
} else if (discriminante === 0) {
    let raiz = -b / (2 * a);
    alert("La raíz real doble es: " + raiz);
} else {
    alert("Las raíces son complejas.");
}