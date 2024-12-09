let velocidad_kilometros=parseInt(prompt("Ingrese la proporcion de la velocidad del automovil en kilometros: "));
let velocidad_horas=parseInt(prompt("Aca ingrese lo que se demora en horas dependiendo del kilometraje: "));

let velocidad_metros=velocidad_kilometros*100;
let velocidad_min=velocidad_horas*60;
let velocidad_seg=velocidad_min*60;
alert("LA VELOCIDAD DEL AUTOMOVIL ES DE: "+ (velocidad_metros)+ " metros / "+(velocidad_seg)+ " segundos")
