let saldo=parseInt(prompt("Ingresar saldo del banco: "));
if (saldo<100000) {
    interes_anual_menor=0.3;
    alert("El saldo que tiene el banco en el momento es de: " + saldo)
    alert("El interes que debe de pagar es de: " +(saldo+(saldo*interes_anual_menor)))
}else  {
    interes_anual_mayor=0.4;
    alert("El saldo que tiene el banco en el momento es de: " + saldo)
    alert("El interes que debe de pagar es de: " +(saldo+(saldo*interes_anual_mayor)))
}