function invertirTexto(texto) {
    let Invertido = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        Invertido += texto[i];
    }
    return Invertido;
}


const frase = prompt("Ingrese una frase que lo caracterize como programador de Software:");
alert("Frase ingresada:"+ frase)


const fraseInvertida = invertirTexto(frase);
alert("Frase invertida:"+ fraseInvertida)