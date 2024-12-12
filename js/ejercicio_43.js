const regex = /"(?:[^"\\]|\\.)*"/g;

const texto = 'hola como "esta", holaa \\tuuuu\\';
const coincidencias = texto.match(regex);

console.log("Cadenas encontradas:", coincidencias);