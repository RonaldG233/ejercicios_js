let lado1=parseInt(prompt("Ingrese el valor del lado 1: "));
let lado2=parseInt(prompt("Ingrese el valor del lado 2: "));
if (lado1>0 && lado2>0) {
    
    let area_triangulo=lado1*lado2;
    alert("EL AREA DEL TRIANGULO ES: " +(area_triangulo))
    
}else{
    alert("ERROR")
}