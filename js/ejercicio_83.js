function validarPIN(pin) {
    const regex = /^[0-9]{4}$|^[0-9]{6}$/;
    return regex.test(pin);
}


const pinValido = validarPIN("1736");
console.log(pinValido);  

const pinInvalido = validarPIN("ad54");
console.log(pinInvalido);  

