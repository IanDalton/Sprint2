var total = 0;
var cantidad = 0;
function calcular() {
    // Limpio resultados, obtengo las variables y las sumo al total

    let nombre = $("#nombre").val();
    let monto = $("#monto").val();

    // En caso de que alguna de las dos variables esten en blanco corto el programa y no cargo los datos
    if (nombre == "") {
        return;
    } else if (monto == "") {
        return;
    }
    total = +total + +monto;
    cantidad++;
    $("#resultado").empty();
    // Agrego el HTML el total y cuanto paga cada individuo
    let textoAMostrar = `<p>${"Total: " + total}</p> <p>${"A cada uno le toca aportar: $" + total / cantidad}`;
    $("#resultado").append(textoAMostrar)
    // Agrego la tabla con el nombre de la persona y cuanto pago
    let tabla = `<p>${nombre + ": $" + monto}</p>`
    $("#usuarios").append(tabla)
    //Elimino el input que dejo el usuario
    document.getElementById("nombre").value = "";
    document.getElementById("monto").value = "";
}
