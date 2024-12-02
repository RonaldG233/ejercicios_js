let num1=prompt("ingresar primer numero: ");
let num2=prompt("ingresar segundo numero: ");

if (num1>num2 && num2>0) {
    alert(num1/num2);
}else if  (num2==0) {
    alert("no se puede dividir por cero");
}else{
    alert("error, ingrese numeros validos para la division");
}
