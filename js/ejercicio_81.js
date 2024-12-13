function encontrarMayor(array) {
    let mayor = array[0];  

    for (let i = 1; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i];
        }
    }
    return mayor;
}


const numeros = [2,6,7,1,9,2,3];
const mayor = encontrarMayor(numeros);
console.log(`El número mayor es: ${mayor}`);