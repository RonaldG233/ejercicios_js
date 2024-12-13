let palabra=prompt("Ingrese una palabra: ");
function contarSilabas(palabra) {
const vocales = "aeiouáéíóú";
let contador = 0;
for (let i = 0; i < palabra.length; i++) {
    if (vocales.indexOf(palabra[i]) !== -1) {
        contador++;
    }
}
return contador;
}
    const numSilabas = contarSilabas(palabra);
    alert(`La palabra "${palabra}" tiene ${numSilabas} silabas.`)









