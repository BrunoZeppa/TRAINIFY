'use strict'

let formulario = document.querySelector("#formulario")
let input = document.querySelector("#usuario")
let input2 = document.querySelector("#contraseña")

formulario.addEventListener("submit", (e) =>{

fetch("http://pokeapi.com", {
    method: "POST",
    headers :{
        'Content-Type' : 'application/json'
    }, 
    body: JSON.stringify ({
        usuario:input.value,
        password:input2.value
    })

   

})
e.preventDefault()
})