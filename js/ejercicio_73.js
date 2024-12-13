let frase=prompt("Ingrese una frase: ");
let letra=prompt("Ingrese una letra: ");
let cont=0;
for (let i = 0; i < frase.length; i++) {
    if (frase[i] === letra) {
        cont++;
    }
}
alert("La letra ingresada se encuentra: " +cont + " veces")