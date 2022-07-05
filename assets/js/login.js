'use strict'

let formulario = document.querySelector("#formulario");
let input = document.querySelector("#usuario");
let input2 = document.querySelector("#contraseña");
let menuHambuerguesa = document.querySelector('#hamburger button');
let menuMobil = document.querySelector('#nav-menu');
let fondoHeader = document.querySelector('#header');
let ocultarMostrar = document.querySelector('.ocultar');



menuHambuerguesa.addEventListener("click", (e) =>{
    menuHambuerguesa.classList.toggle('open');
    menuMobil.classList.toggle('show');
    fondoHeader.classList.toggle('change');
} );

ocultarMostrar.addEventListener("click",function (){
    const icon = this.querySelector('i');
    if(this.previousElementSibling.type === 'password'){
        this.previousElementSibling.type = 'text'; 
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        
    }else{
        this.previousElementSibling.type = 'password';
        icon.classList.add('fa-eye-slash')

    }
});

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