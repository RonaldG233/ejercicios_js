let base=prompt("Ingresar la medida de la base del triangulo: ");
let altura=prompt("Ingresar la medida de la altura del triangulo: ");
let triangulo=function(base, altura){
    if (base>0 && altura>0){
        alert("el area del triangulo es :"+(1/2)*(base*altura))
    }
}
console.log(triangulo(base, altura));
