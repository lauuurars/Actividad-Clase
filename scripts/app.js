
//---------------1. Comentarios

/*
    Esto es un gran comentario!
*/

//------------ 2. Variables

/*
//Variable que puede cambiar su valor
let variableLet = "Hola"

console.log(variableLet)

variableLet = "Mundo!"

console.log(variableLet)

variableLet = "Esto es una variable"

console.log(variableLet)

//Constante (sirve para datos que se repiten varias veces)

const constanteConts = "Esto es una constante"

console.log(constanteConts)

//Var (sirve para asignar un valor)

var Esmayor = true

*/

//----------------clase //

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value
    const edad = document.getElementById("edad").value
    const fechaNacimiento = document.getElementById("fechaNacimiento").value

    const textoFinal = `Mi nombre es ${nombre}, mi edad es ${edad} y nací el ${fechaNacimiento}`

    document.getElementById('resultado').textContent = textoFinal
})

