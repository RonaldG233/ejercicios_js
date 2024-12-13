let algo;
do {
    algo = prompt("Escribe algo (escribe SALIR para terminar):");
    if (algo !== "salir") {
        alert(algo);
    }
} while (algo !== "salir");

alert("Programa terminado");