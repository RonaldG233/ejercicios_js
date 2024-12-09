let examen_1=parseInt(prompt("Ingrese la calificacion del primer examen: "));
let examen_2=parseInt(prompt("Ingrese la calificacion del segundo examen: "));
let examen_3=parseInt(prompt("Ingrese la calificacion del tercer examen: "));
let examen_4=parseInt(prompt("Ingrese la calificacion del cuarto examen: "));
let promedio=function (examen_1,examen_2,examen_3,examen_4) {
    if (examen_1>=1 && examen_1<=5 && examen_2>=1 && examen_2<=5 && examen_3>=1 && examen_3<=5 && examen_4>=1 && examen_4<=5) {
        let prom=(examen_1+examen_2+examen_3+examen_4)/4;
        alert("EL PROMEDIO DE LAS 4 CALIFICACIONES ES: " + prom);
    }
}
console.log(promedio(examen_1,examen_2,examen_3,examen_4));
