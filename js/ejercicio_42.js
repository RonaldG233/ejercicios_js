let libros=parseInt(prompt("Ingresar cantidad de libros solicitados al dia: "));
let cuadernos=parseInt(prompt("Ingresar cantidad de cuadernos solicitados al dia: "));
let lapiceros=parseInt(prompt("Ingresar cantidad de lapiceros solicitados al dia: "));

let operac_libros=libros*10000;
let operac_cuadernos=cuadernos*7550;
let operac_lapiceros=lapiceros*5550;

alert("EL MONTO TOTAL DE LA VENTA DEL DIA ES: "+ (operac_libros+operac_cuadernos+operac_lapiceros) + " PESOS")