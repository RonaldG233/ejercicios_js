let trabajo_empleado=prompt("Ingrese en que parte del empleo trabaja el empleado (es de planta o administrativo): ")
let empleado=function (trabajo_empleado) {
    if (trabajo_empleado=="planta") {
        let hora_pagada_planta=20000;
        let horas_trabajadas_empleado_planta=parseInt(prompt("Ingrese las horas trabajadas del empleado: "))
        alert("EL PAGO TOTAL AL EMPLEADO DE PLANTA, POR SUS HORAS TRABAJADAS ES DE: " + horas_trabajadas_empleado_planta*hora_pagada_planta)
    }else if (trabajo_empleado=="administrativo") {
        let hora_pagada_administrativo=10000;
        let horas_trabajadas_empleado_administrativo=parseInt(prompt("Ingrese las horas trabajadas del empleado: "))
        alert("EL PAGO TOTAL AL EMPLEADO DE ADMINISTRATIVO, POR SUS HORAS TRABAJADAS ES DE: " + horas_trabajadas_empleado_administrativo*hora_pagada_administrativo)
    }
}
console.log(empleado(trabajo_empleado));
