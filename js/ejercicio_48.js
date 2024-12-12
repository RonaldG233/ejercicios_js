let figura=prompt("Ingrese T(si quiere hallar el area del triangulo), o C(si quiere hallar el area del circulo): ")
let calcular=function (figura) {
    if (figura=="t") {
        let base=parseInt(prompt("Ingrese el numero de la base del triangulo: "));
        let altura=parseInt(prompt("Ingrese el numero de la altura del triangulo: "));
        let area_trian=(base*altura)/2
        alert("EL AREA DEL TRIANGULO ES: " + area_trian)
    }else if (figura=="c") {
        let radio=parseInt(prompt("Ingrese el numero del radio del circulo: "));
        let area_circu=(Math.PI*(radio*radio));
        alert("EL AREA DEL TRIANGULO ES: " + area_circu)
    }
}
console.log(calcular(figura));
