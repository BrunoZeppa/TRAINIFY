'use strict'

let formulario = document.querySelector("#formulario")
let menuHambuerguesa = document.querySelector('#hamburger button');
let menuMobil = document.querySelector('#nav-menu');
let fondoHeader = document.querySelector('#header');

menuHambuerguesa.addEventListener("click", (e) =>{
    menuHambuerguesa.classList.toggle('open');
    menuMobil.classList.toggle('show');
    fondoHeader.classList.toggle('change');
} )

formulario.addEventListener("submit", eventoData  => {
   let inpunt1 = formulario.querySelector("#p1").value

   let data = {
       pregunta1: p1
   }

    console.log(data)
    evento.preventDefault()
})