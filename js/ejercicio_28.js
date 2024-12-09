let nombre=prompt("Ingrese el nombre del empleado: ");
let horas_trabajo=parseInt(prompt("Ingrese la cantidad de horas que ha trabajado el empleado "+ nombre + " : "));
let pago_hora=parseInt(prompt("Ingrese el pago por hora del empleado " + nombre + " : "));
alert("El pago que le han dado a " +nombre+ " es de: " + (horas_trabajo*pago_hora));