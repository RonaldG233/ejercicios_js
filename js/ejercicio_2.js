
const contraseñaGuardada = "contrasena124";
let contrasena = prompt("Ingrese la contraseña: ");
let patron = /^[a-zA-Z0-9]+$/;
if (patron.test(contrasena)) {
    
    if (contrasena.toLowerCase() === contraseñaGuardada.toLowerCase()) {
        alert("La contraseña es correcta");
    } else {
        alert("Contraseña incorrecta");
    }
} else {
    alert("La contraseña solo debe contener caracteres alfanumericos");
}