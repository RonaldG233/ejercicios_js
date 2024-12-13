let contrasena=prompt("Ingrese contraseña: ");
let confirmacion_contra="";

while (confirmacion_contra!==contrasena) {
     confirmacion_contra=prompt("Confirme su contraseña: ");
    if (confirmacion_contra!==contrasena) {
        alert("CONTRASEÑA INVALIDA...")
    }
}
alert("CONTRASEÑA CORRECTA, SIGA.")