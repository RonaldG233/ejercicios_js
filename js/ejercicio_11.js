let num1=prompt("Ingresar primer numero");
let num2=prompt("Ingresar segundo numero");
let operaciones=function (num1, num2) {
    alert("LA SUMA DE LA OPERACION ES: "+ num1+num2)
    alert("LA RESTA DE LA OPERACION ES: "+num1-num2)
    alert("LA MULTIPLICACION DE LA OPERACION ES: "+num1*num2)
    if (num2==0) {
        alert("NO SE PUEDE DIVIDIR POR CERO")
    }else{
        alert("LA DIVISION DE LA OPERACION ES: "+num1/num2)
    }
}
console.log(operaciones(num1, num2));
