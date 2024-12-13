let num1=parseInt(prompt("Ingresar primer numero"));
let num2=parseInt(prompt("Ingresar segundo numero"));
let operaciones=function (num1, num2) {
    let sum=num1+num2;
    let resta=num1-num2;
    let multiplicacion=num1*num2;
    
    alert(sum  )
    alert("LA RESTA DE LA OPERACION ES: "+resta )
    alert("LA MULTIPLICACION DE LA OPERACION ES: "+multiplicacion )
    if (num2==0) {
        
        alert("NO SE PUEDE DIVIDIR POR CERO")
    }else{
        let division=num1/num2;
        alert("LA DIVISION DE LA OPERACION ES: "+division )
    }
}
console.log(operaciones(num1, num2));
