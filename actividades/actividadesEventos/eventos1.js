let notificador = document.getElementById("notificador")
let boton = document.getElementById("boton")

function mensajeNotificador(mensaje){
    notificador.innerHTML = mensaje
}


// Cuando se hace click en el botón manda un mensaje al usuario
boton.addEventListener("click", () => { 
    mensajeNotificador("Botón pulsado")
})


/*
function pulsarElboton(){
    document.getElementById("notificador").innerHTML = "Botón pulsado"
}

boton.addEventListener("click",pulsarElboton)
*/

//Al hacer doble click se pone una alerta
/*
function dobleClick(){
    document.getElementById("notificador").innerHTML = "Doble click"
}

boton.addEventListener("dblclick",dobleClick)
*/
boton.addEventListener("dblclick",() => {
    mensajeNotificador("Doble Click detectado")
})

// Detectar la posición X,Y del mouse cuando pase por encima de la foto

let imagen = document.querySelector("img")
