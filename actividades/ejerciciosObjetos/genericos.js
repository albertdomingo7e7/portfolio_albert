
//Ejercicio 1
/*
const tvSamsung = {
    nombre : "TV Samsung 42",
    categoria : "Televisores",
    unidades : 4,
    precio : 345.95,
    getImporte : function(){
        return this.precio*this.unidades
    }
}
*/
/*
console.log(tvSamsung.getImporte().toFixed(2))

for(key in tvSamsung){
    console.log(`${key}:${tvSamsung[key]}`)
}

let stringSamsung = JSON.stringify(tvSamsung)

console.log(stringSamsung)
*/

//Ejercicio 2
/*
let listaNuevos = []
let pedir = prompt("Añade una característica")
listaNuevos.push(pedir)
for(let i=0;i<listaNuevos.length;i++){
    let caracteristica = listaNuevos[i]
    let ValorCaracteristica = prompt(`valor de ${caracteristica}`)
    tvSamsung[caracteristica] = ValorCaracteristica
}
let stringSamsung = JSON.stringify(tvSamsung)
console.log(stringSamsung)
*/

//Ejercicio 4
const coche = {
    marca : "Toyota",
    modelo : "Corolla",
    año : 2020,
    encendido : false,
    kilometraje : 0,
    arrancar : function() {
        this.encendido = true
        console.log("Brrrruuuummmmm")
    },
    apagar : function() {
        this.encendido = false
        console.log(`Hasta luego!`)
    },

    recorrer : function(km) {
        if(this.encendido = false){
            console.log("para pdoer tirar con el coche primero tendrías que encenderlo")
        } else {
            this.kilometraje += km
        }


    }




}