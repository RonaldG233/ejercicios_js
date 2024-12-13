const filas = 7;

for (let i = 1; i <= filas; i++) {
    let espacio = ' '.repeat(filas - i);  
    let asteriscos = '*'.repeat(2 * i - 1);  
    console.log(espacio + asteriscos);
}