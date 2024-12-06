let puntuacion=prompt("ingresar su puntuacion (0.0, 0.4, 0.6 o mas): ");
let dinero_nivel=2400;
let tabla=function (puntuacion, dinero_nivel) {
    if (puntuacion==0.0) {
        alert("NIVEL DE PUNTUACION INACEPTABLE")
        alert("esta sera la cantidad que recibira el usuario  $"+puntuacion*dinero_nivel)

    }else if (puntuacion==0.4) {
        alert("NIVEL DE PUNTUACION ACEPTABLE")
        alert("esta sera la cantidad que recibira el usuario $"+puntuacion*dinero_nivel)
    }else if (puntuacion>=0.6) {
        alert("NIVEL DE PUNTUACION MERITORIO")
        alert("esta sera la cantidad que recibira el usuario $"+puntuacion*dinero_nivel)
    }
}

console.log(tabla(puntuacion, dinero_nivel));
