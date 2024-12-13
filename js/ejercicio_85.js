const numeros = [-5, 3, -2, 7, 1, -8];
let sumaPositivos = 0;

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 0) {
        sumaPositivos += numeros[i]; 
    }
}

console.log(sumaPositivos);