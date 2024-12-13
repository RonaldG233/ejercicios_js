let cursos_cant=parseInt(prompt("Ingrese la cantidad de cursos que lleva el alumno: "));
if (cursos_cant<6) {
    alert("el pago total de los cursos sera de: " + (cursos_cant*2000000))
}else {
    alert("el pago total de los cursos sera de: " + (cursos_cant*1200000))
}