let edad=prompt("ingrese su edad: ");
let entradas=function (edad) {
    if (edad<4) {
        alert("PUEDE INGRESAR GRATIS")
    }else if(edad>4 && edad<18){
        alert("DEBE PAGAR 5 EUROS")
    }else if(edad>18){
        alert("DEBE PAGAR 10 EUROS")
    }
    
}

console.log(entradas(edad));
