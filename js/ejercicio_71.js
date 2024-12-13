
const numero = parseInt(prompt("Introduce un numero entero:"));


function esPrimo(num) {
    if (num < 2) return false; 
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false; 
    }
    return true; 
}

if (esPrimo(numero)) {
    alert(`El numero es primo`);
} else {
    alert(`El numero no es primo`);
}

