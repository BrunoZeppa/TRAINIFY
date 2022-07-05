'use strict'

let formulario = document.querySelector("#formulario");
let input = document.querySelector("#usuario");
let input2 = document.querySelector("#contraseña");
let menuHambuerguesa = document.querySelector('#hamburger button');
let menuMobil = document.querySelector('#nav-menu');
let fondoHeader = document.querySelector('#header');



menuHambuerguesa.addEventListener("click", (e) =>{
    menuHambuerguesa.classList.toggle('open');
    menuMobil.classList.toggle('show');
    fondoHeader.classList.toggle('change');
} );

formulario.addEventListener("submit", (e) =>{

fetch("", {
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