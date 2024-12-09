let cant_medic=parseInt(prompt("Ingresar la cantidad de medicamentos: "));
let operac_medicamentos=function (cant_medic) {
    for (let med = 1; med <=cant_medic; med++) {
        let medicamento=parseInt(prompt("Ingrese costo del medicamento "+(med) +" : "));
        let descuento=(medicamento-(medicamento*0.10));
        alert("incluyendole el descuento al costo del medicamento sera: "+ (descuento))
        
        
    }
   
    
}
console.log(operac_medicamentos(cant_medic));
