'use strict'


let menuHambuerguesa = document.querySelector('#hamburger button');
let menuMobil = document.querySelector('#nav-menu');
let fondoHeader = document.querySelector('#header');
let cardSalud = document.querySelector('.health-program-card');
let iconoSalud = document.querySelector('#salud-img-white');
let iconoSaludBlack = document.querySelector('#salud-img-black');



menuHambuerguesa.addEventListener("click", (e) =>{
    menuHambuerguesa.classList.toggle('open');
    menuMobil.classList.toggle('show');
    fondoHeader.classList.toggle('change');
} )
