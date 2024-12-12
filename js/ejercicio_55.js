let helado=parseInt(prompt("Ingrese el valor del helado: "));
let membresia=prompt("Ingrese su tipo de membresia A,B o C: ");
if (membresia=="a") {
    let descuento=helado-(helado*0.10);
    alert("EL PRECIO DEL HELADO INCLUIDO CON EL DESCUENTO ES DE: " +descuento)
}else if (membresia=="b") {
    let descuento=helado-(helado*0.15);
    alert("EL PRECIO DEL HELADO INCLUIDO CON EL DESCUENTO ES DE: " +descuento)
}else if (membresia=="c") {
    let descuento=helado-(helado*0.20);
    alert("EL PRECIO DEL HELADO INCLUIDO CON EL DESCUENTO ES DE: " +descuento)
}