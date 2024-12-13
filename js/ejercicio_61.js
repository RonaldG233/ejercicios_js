
let notaAlta = 0;
let notaBaja = 100;
let conteoMaxima = 0;
let valorA = 0;
let valorB = 0;
let valorC = 0;
let valorD = 0;

let continuar = true;

while (continuar) {
    
    let nota = parseInt(prompt("Ingrese la nota del alumno (entre 1 y 100, o 0 para terminar):"));

    
    if (nota === 0) {
        continuar = false;
        break;
    }

    
    if (nota >= 1 && nota <= 100) {
        
        if (nota > notaAlta) notaAlta = nota;
        if (nota < notaBaja) notaBaja = nota;

        
        if (nota === 100) {
            conteoMaxima++;
        } else if (nota >= 90) {
            valorA++;
        } else if (nota >= 80) {
            valorB++;
        } else if (nota >= 70) {
            valorC++;
        } else if (nota >= 60) {
            valorD++;
        }
    } else {
        alert("Nota invalida, Por favor, ingrese un valor entre 1 y 100")
    }
}


if (notaAlta === 0 && notaBaja === 100) {
    console.log("No se ingresaron notas.");
} else {
    alert(`Nota mas alta: ${notaAlta}`)
    alert(`Nota mas baja: ${notaBaja}`)
    alert(`Alumnos con la máxima nota (100): ${conteoMaxima}`)
    alert(`Alumnos con calificación "a" (90-99): ${valorA}`)
    alert(`Alumnos con calificación "b" (80-89): ${valorB}`)
    alert(`Alumnos con calificación "c" (70-79): ${valorC}`)
    alert(`Alumnos con calificación "d" (60-69): ${valorD}`)
}
