let a=parseInt(prompt("Ingrese numero A: "));
let b=parseInt(prompt("Ingrese numero B: "));
let c=parseInt(prompt("Ingrese numero C: "));
if (a>b && a>c) {
    alert("EL NUMERO MAYOR ES A")
}else if (b>a && b>c) {
    alert("EL NUMERO MAYOR ES B")
}else if (c>a && c>b) {
    alert("EL NUMERO MAYOR ES C")
}
if (a<b && a<c) {
    alert("EL NUMERO MENOR ES A")
}else if (b<a && b<c) {
    alert("EL NUMERO MENOR ES B")
}else if (c<a && c<b) {
    alert("EL NUMERO MENOR ES C")
}

if (a==c && b==c && a==b) {
    alert("TODOS SON IGUALES")
}else if (a==b){
    alert("A Y B SON IGUALES")
}else if (c==b){
    alert("C Y B SON IGUALES")
}else if (a==c){
    alert("A Y C SON IGUALES")
}

