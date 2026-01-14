//Primero establecemos "contenedor" ya que será el elemento en el que trabajaremos
let contenedor = document.getElementById("contenedor")

//Ejercicio 1: cambiar el titulo y el texto a "Modificados"
contenedor.querySelector("h1").innerHTML = "Título actualizado"
contenedor.querySelector("p").innerHTML = "Texto actualizado"

//Ejercicio 2: Poner imagen y un parrafo para editar los atributos
contenedor.querySelector("img").setAttribute("src","dmz.png")
contenedor.querySelector("#descripcion").innerHTML = "Imagen actualizada"

//Ejercicio 3: Crear un header con HTML y modificar el CSS con JS
let titulo2 = contenedor.querySelector("#titulo2")

titulo2.style.color = "red"
titulo2.style.fontSize = "32px"

