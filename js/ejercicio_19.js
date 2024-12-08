let calculo=prompt("Ingresar si quiere hallar el area del cilindro(area), o el volumen del cilindro(volumen): ");
let cilindro=function (calculo) {
    if (calculo=="volumen") {
        let radio=prompt("Ingresar el radio del cilindro para hallar el volumen del cilindro: ");
        let altura=prompt("Ingrese la respectiva altura del cilindro");
        alert("el volumen del cilindro es: " + ((Math.PI)*(radio*radio)*(altura)))
    }else if (calculo=="area") {
        let radio=prompt("Ingresar el radio del cilindro para hallar el area del cilindro: ");
        let altura=prompt("Ingrese la respectiva altura del cilindro");
        alert("el area del cilindro es: " + ((2*Math.PI*radio*(radio+altura))))
    }
}
console.log(cilindro(calculo));
