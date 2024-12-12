let ano_nacimiento=parseInt(prompt("Ingrese el año en que nacio: "));
let ano_presente=2024;
if (ano_nacimiento<ano_presente) {
    alert("LOS AÑOS QUE TIENE LA PERSONA QUE HA SIDO ENTREVISTADA ES DE: "+(ano_presente-ano_nacimiento)+ " AÑOS")
} else{
    alert("ERROR, NO CONICIDE CON UNA EDAD")
}
