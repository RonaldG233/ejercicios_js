let calificacion=parseFloat(prompt("Ingrese la calificacion obtenida: "));
if (calificacion>=9.1 && calificacion<=10) {
    alert("EXCELENTE")
}else if (calificacion>=8.1 && calificacion<=9) {
    alert("MUY BIEN")
}else if (calificacion>7.5 && calificacion<=8) {
    alert("BIEN")
}else if (calificacion<7.5 ) {
    alert("NA (no aprobado)")
}