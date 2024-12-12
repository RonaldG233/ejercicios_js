let postulada_edad=parseInt(prompt("Ingrese la edad de la postulada: "));
let postulada_estatura=parseInt(prompt("Ingrese la estatura de la postulada: "));
let postulada_peso=parseInt(prompt("Ingrese el peso de la postulada: "));

if (postulada_edad<=19 && postulada_estatura>175 && postulada_peso>=75 && postulada_peso<=80) {
    alert("ESTA CHICA SE PUEDE POSTULAR, POR CUMPLIR LAS REGLAS")
}else{
    alert("NO CUMPLE LAS REGLAS")
}