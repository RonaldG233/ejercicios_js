

let contra="Ola123";
let regex=/([a-z])(\d)[a-z\d]/i;


let confirm=prompt("confirme la contraseña: ");
function contrasena(regex,contra) {
    if (contra===confirm) {
        if (contra.includes(regex)) {
            console.log ("contraseña confirmada"); 
        }else{
            console.log ("confirmacion incorrecta");
        }   
        
    }
}


// console.log(contrasena(regex,contra));
console.log(regex.test(contra));


