let producto_1=parseInt(prompt("Ingrese el valor del producto(1): "));
let producto_2=parseInt(prompt("Ingrese el valor del producto(2): "));
let producto_3=parseInt(prompt("Ingrese el valor del producto(3): "));
let producto_4=parseInt(prompt("Ingrese el valor del producto(4): "));
let producto_5=parseInt(prompt("Ingrese el valor del producto(5): "));
let descuento_5_1=(producto_1-(producto_1*0.5));
let descuento_5_2=(producto_2-(producto_2*0.5));
alert("CON EL DESCUENTO DEL 5% EN LOS PRIMEROS DOS PRODUCTOS ES, PRODUCTO 1:"+descuento_5_1+"PRODUCTO 2: "+descuento_5_2)
alert("PRODUCTO A PAGAR DEL PRODUCTO 3: "+producto_3)
let descuento_2_4=(producto_4-(producto_4*0.2));
let descuento_2_5=(producto_5-(producto_5*0.2));
alert("CON EL DESCUENTO DEL 2% EN LOS ULTIMOS DOS PRODUCTOS ES, PRODUCTO 4:"+descuento_2_4+"PRODUCTO 5: "+descuento_2_5)
let suma=(descuento_5_1+descuento_5_2+descuento_2_4+descuento_2_5);

alert("EL TOTAL DE LA COMPRA DE LOS PRODUCTOS ES DE: "+suma)