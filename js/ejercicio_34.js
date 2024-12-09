let algoritmo=prompt("Ingrese lo que quiere hallar caudal o el volumen: ")


let formula=function (algoritmo) {
    if (algoritmo=="caudal") {
        alert("FORMULA CAUDAL: Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).")
        let volumen=parseInt(prompt("Ingrese el numero de volumen en litros: "));
        let tiempo=parseInt(prompt("Ingrese el numero de tiempo en segundos: "));
        alert("EL RESULTADO DEL CAUDAL ES DE : " + volumen/tiempo + " Litros/Segundos")
    }else if (algoritmo=="volumen") {
        alert("FORMULA VOLUMEN Volumen = PI *(radio^2)* H (altura del depósito).")
        let radio=parseInt(prompt("Ingrese el numero de radio: "));
        let altura_dep=parseInt(prompt("Ingrese el numero de la altura del deposito: "));
        alert("EL RESULTADO DEL VOLUMEN ES DE : "+ (Math.PI*(radio*radio)*(altura_dep)))
    }
}
console.log(formula(algoritmo));
