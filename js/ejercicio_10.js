let pizza_vegetariana=prompt("Si quiere pizza vegetariana diga SI a lo contrario diga NO: ");

let orden=function (pizza_vegetariana) {
    if (pizza_vegetariana=="si") {
        let ingredientes_v=prompt("Ingresar si el ingrediente que quiere es pimiento (ingresar 1) o tofu (ingresar 2): ");
        if (ingredientes_v==1) {
            alert("SU ORDEN, ES UNA PIZZA VEGETARIANA: Y SUS INGREDIENTES SON PIMIENTO, MOZZARELLA Y TOMATE.")
        }else if(ingredientes_v==2){
            alert("SU ORDEN, ES UNA PIZZA VEGETARIANA: Y SUS INGREDIENTES SON TOFU, MOZZARELLA Y TOMATE.")
        }
    }else if (pizza_vegetariana=="no") {
        let ingredientes_nv=prompt("Ingresar si el ingrediente que quiere es pepperoni (ingresar 1) o jamon (ingresar 2), o salmon (ingresar 3): ");
        if (ingredientes_nv==1) {
            alert("SU ORDEN, ES UNA PIZZA QUE NO ES VEGETARIANA: Y SUS INGREDIENTES SON PEPPERONI, MOZZARELLA Y TOMATE.")
        }else if(ingredientes_nv==2){
            alert("SU ORDEN, ES UNA PIZZA QUE NO ES VEGETARIANA: Y SUS INGREDIENTES SON JAMON, MOZZARELLA Y TOMATE.")
        }else if(ingredientes_nv==3){
            alert("SU ORDEN, ES UNA PIZZA QUE NO ES VEGETARIANA: Y SUS INGREDIENTES SON SALMON, MOZZARELLA Y TOMATE.")
        }
    }

}

console.log(orden(pizza_vegetariana));
