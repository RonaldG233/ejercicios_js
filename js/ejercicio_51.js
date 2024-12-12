let consumido=parseInt(prompt("Ingresar el valor del alimento que consumio: "));
if (consumido>130000) {
    let descuento=consumido-(consumido*0.15);
    alert("EL ALIMENTO QUE FUE CONSUMIDO, TUVO DESCUENTO DE UN 15%, Y DEBE CANCELAR: " +(descuento)+ " PESOS")
    
}else{
    alert("NO TIENE DESCUENTE DEBE CANCELAR LOS MISMOS: " + (consumido)+ " PESOS")
}