'use strict'


let menuHambuerguesa = document.querySelector('#hamburger button');
let menuMobil = document.querySelector('#nav-menu');
let fondoHeader = document.querySelector('#header');



menuHambuerguesa.addEventListener("click", (e) =>{
    menuHambuerguesa.classList.toggle('open');
    menuMobil.classList.toggle('show');
    fondoHeader.classList.toggle('change');
} );
