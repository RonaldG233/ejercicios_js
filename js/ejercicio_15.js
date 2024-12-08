
let calculo=prompt("Ingrese que es lo que quiere calcular, la longitud de una circunferencia(longitud), o el area de una circunferencia (area): ");
let circunferencia=function (calculo) {
   if (calculo=="longitud") {
    let radio=prompt("Ingrese el numero del radio: ");
    alert("la longitud de la circunferecnai es:"+ (2*Math.PI*radio))
    
   } else if (calculo=="area") {
    let radio=prompt("Ingrese el numero del radio: ");
    alert("el area de la circunferencia es:"+ (Math.PI*(radio*radio)))
   }
}
console.log(circunferencia(calculo));

