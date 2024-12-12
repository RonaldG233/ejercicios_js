let temperatura=parseInt(prompt("Ingrese la temperatura que tenga: "));
let presion=parseInt(prompt("Ingrese la presion que tenga"));
if (presion>200 || temperatura>100) {
    alert("Alarma")
}else{
    alert("Normal")
}