let num1=prompt("ingresar primer numero: ");
let num2=prompt("ingresar segundo numero: ");

try {
    if (num1>num2 && num2>0) {
        console.log(num1/num2);
    }else if(num2==0){
        throw("no se puede dividir por cero");
    }else{
        throw("error, ingrese numeros validos para la division");
    }
} catch (error) {
    console.log(error);
     
}