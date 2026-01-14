/*
**********************
******* FASE 1 ******* 
**********************
*/

//Investiga el autor del artículo
console.log(document.getElementById("autor").innerHTML)

//Guardar h1 en una variable y mostrarla por pantalla
let titulo = document.querySelector("h1")
console.log(titulo.innerHTML)

//Selecciona el input de comentarios y muesstra el texto por defecto
console.log(document.getElementById("input-comentario").value)

/*
**********************
******* FASE 2 ******* 
**********************
*/

//Cambio de titular por un texto mas dramatico
titulo.innerHTML = "Como diría Amador Rivas: Amai"

//Cambiar el nombre del autor para que ponga mi própio nombre
document.getElementById("autor").innerHTML = "Albert Domingo"

//Cambiar el texto del parrafo del cuerpo e inventarse una milonga
document.getElementById("cuerpo-noticia").innerHTML = 'Estudios confirman que "La remontada" académica está más cerca que nunca de cumplrise!'

//Cambiar el valor del input de comentarios para que aparzca otra cosa escrita
document.getElementById("input-comentario").value = "¡No me lo puedo creer, es increíble!"

/*
**********************
******* FASE 3 ******* 
**********************
*/

//Crear todo un nuevo articulo usando unicamente JS

//Crear el título

// Crear el primer