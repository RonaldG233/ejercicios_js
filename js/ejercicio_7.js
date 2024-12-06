let renta_anual=prompt("ingresar su renta anual: ");
let impositivo=function (renta_anual) {
    if (renta_anual>10000 && renta_anual<20000) {
        alert("SU TIPO DE IMPOSITIVO QUE LE CORRESPONDE ES DE 5%")
    }else if (renta_anual>20000 && renta_anual<35000) {
        alert("SU TIPO DE IMPOSITIVO QUE LE CORRESPONDE ES DE 10%")
    }else if (renta_anual>35000 && renta_anual<60000) {
        alert("SU TIPO DE IMPOSITIVO QUE LE CORRESPONDE ES DE 20%")
    }else if (renta_anual>60000 ) {
        alert("SU TIPO DE IMPOSITIVO QUE LE CORRESPONDE ES DE 45%")
    }
}
console.log(impositivo(renta_anual));
