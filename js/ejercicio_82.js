function invierteCadena(cadena) {
    let invertida = '';
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    return invertida;
}
const cadenaInvertida = invierteCadena('Hola');
console.log(cadenaInvertida);