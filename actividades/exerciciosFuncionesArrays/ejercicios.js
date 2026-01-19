/*
*************************************************
*************** EJERCICIOS ARRAYS ***************
*************************************************
*/


// Suma de elementos pares de un Array

let elementos = [2,4,5,6,7,8,3,1,10,4]


function sumaPares(elementos){
let resultat = 0
elementos.forEach(elemento => {
    if (elemento%2 == 0){
        resultat += elemento
    }
});
return resultat
}




//Dado un array con datos de un alumno, ordenarlos de manera que quede Nombre, Apellidos
//Notas y nota media
let array = ["Rodriguez", "8", 9, '5',4, 'Clara']
function ordenarArray(array){
    let arrayOrdenado = []
    let notaMedia = 0
    for(let i = 0;i<array.length;i++){
        switch(i){
            case 0:
                arrayOrdenado[1] = array[i]
                break
            case 1:
                arrayOrdenado[2] = array[i]
                notaMedia  += Number(array[i])
                break
            case 2:
                arrayOrdenado[3] = array[i]
                notaMedia  += Number(array[i])
                break
            case 3:
                arrayOrdenado[4] = array[i]
                notaMedia  += Number(array[i])
                break
            case 4:
                arrayOrdenado[5] = array[i]
                notaMedia  += Number(array[i])
                break
            case 5:
                arrayOrdenado[0] = array[i]
                break
        }

    }
    arrayOrdenado[6] = notaMedia/4
    return arrayOrdenado
    

}


//Elimina del array los nombres/palabras que empiezen con 'Z'

let nombres = ["Bob", "Alex", "Zoello", "zowii"]


function limpiarZ(array){
    let arrayLimpio = []
    array.forEach(nombre =>{
        if(nombre[0].toUpperCase() != 'Z'){

            arrayLimpio.push(nombre)
        }
})
return arrayLimpio
}

//Obtén el primer dia de la semana que empieze por "M"

let listaDias = ["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"]

function imprimirDatos(array){

    let datos = []

    let primerDiaConM = array.find(dia => dia.startsWith('M'))
    datos.push(primerDiaConM)

    let indiceV = array.findIndex(dia => dia.startsWith('V'))
    datos.push(indiceV)

    let booleanS = array.some(dia => dia.toUpperCase().startsWith('S'))
    datos.push(booleanS)

    let booleanFinalS = array.every(dia => dia.endsWith('s'))
    datos.push(booleanFinalS)

    return datos
}

console.log(imprimirDatos(listaDias))

