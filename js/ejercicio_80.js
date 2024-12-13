function tablaMultiplicar() {
    const numero = 5;
    for (let i = 1; i <= 10; i++) {
        if (i === 5) continue; 
        alert(`${numero} * ${i} = ${numero * i}`)
    }
}
tablaMultiplicar();