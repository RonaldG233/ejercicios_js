let numero=parseInt(prompt("Ingrese un numero: "));
if (numero>0) {
    for (let i = 1; i <= numero ; i++) {
        if (i%2 !==0) {
            
            alert(`${i},`);
            
        }
    }
}