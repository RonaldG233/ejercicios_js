let producto_1=parseInt(prompt("El valor del producto 1 es de: "));
let producto_2=parseInt(prompt("El valor del producto 2 es de: "));
let producto_3=parseInt(prompt("El valor del producto 3 es de: "));
let producto_4=parseInt(prompt("El valor del producto 4 es de: "));
let producto_5=parseInt(prompt("El valor del producto 5 es de: "));

let subtotal=(producto_1+producto_2+producto_3+producto_4+producto_5);
let iva=subtotal*0.19;
let total=subtotal+iva;
alert("EL SUBTOTAL ES: "+ subtotal)
alert("CON EL IVA SERIA: "+ iva)
alert("EL TOTAL DE LA COMPRA ES DE: " + total)