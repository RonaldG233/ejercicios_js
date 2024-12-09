let primer_parcial=parseInt(prompt("Ingresar la calificacion del primer parcial : "));
let segundo_parcial=parseInt(prompt("Ingresar la calificacion del segunsdo parcial : "));
let tercero_parcial=parseInt(prompt("Ingresar la calificacion del tercer parcial : "));
let promedio_final=(primer_parcial+segundo_parcial+tercero_parcial)/3;
let porcent_promedio_final=(promedio_final*(100%55)/3);
alert(porcent_promedio_final)
let examen_final=parseInt(prompt("Ingresar la calificacion del examen final : "));
let trabajo_final=parseInt(prompt("Ingresar la calificacion del trabajo final : "));
 

let porcent_examen_final=(examen_final*30)/3;
let porcent_trabajo_final=(trabajo_final*15)/3;

alert(porcent_examen_final)
alert(porcent_trabajo_final)