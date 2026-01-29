let notificador1 = document.getElementById("notificador1")
let notificador2 = document.getElementById("notificador2")
let boton = document.getElementById("boton")

function mensajeNotificador(mensaje){
    notificador1.innerHTML = mensaje
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
    mensajeNotificador("Doble click detectado")
})

// Detectar la posición X,Y del mouse cuando pase por encima de la div "Elemento"

let elemento = document.getElementById("principal")

elemento.addEventListener("mousemove",function(event) {
    const offsetX = event.pageX - elemento.offsetLeft
    const offsetY = event.pageY - elemento.offsetTop
    mensajeNotificador(`X :${offsetX} Y :${offsetY}`)
})

// Al presionar la tecla "Enter" nos salta una alerta por pantalla

document.addEventListener("keypress", function(event){
    if(event.key == "Enter") {
        alert("Has apretado la tecla enter")
    }
})