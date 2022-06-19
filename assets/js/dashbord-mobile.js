
'use strict'

let contenedor = document.querySelector( ".dashbord-de-usuarios" );
let fragmento = new DocumentFragment;

const users = [
    {
        id: "BrunoBZG24",
        selfie: "https://picsum.photos/id/1005/200/300",
        nombre: "Bruno Zeppa",
        fechaDeNacimiento: 24/02/1994,
        correo: "zegb94@gmail.com",
        suscripcion: "estandar",
        tas: 120, 
        tad: 80,
        fcr: 60,
        peso: 73,
        altura: 168,
        cCintura: 80,
        cCadera: 100,
        cBrazo: 37,
        cPantorrilla: 40,
        pTriceps: 14,
        pSubEscapular: 20,
        pSupraIliaco: 14,
        pAbdominal: 23,
        pCuadricipital: 12,
        pComodin: 18, 
        pPantorrilla: 12,
        nivHombros: 10,
        escoliosis: 5,
        nivCadera: 5,
        aliTobillos: 10,
        sifosis: 10,
        lordosis: 10,
        flexibilidad: -4,
        angSalto: 45, 
        fc1: 70,
        fc2: 117,
        fc3: 90,
        fcVo2max: 169,
        cuads: 15, 
        isquios: 13,
        gluteos: 12,
        pecho: 19,
        remo: 20,
        hombro: 20, 
        core: 10,
        espaldaBaja:12,
        fecha: 01/05/2022
    },
    {
        id: 1,
        nombre: "Carlitos Sanchez",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/1012/200/300"
    },
    {
        id: 2,
        nombre: "Perenganita Lopez",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/1027/200/300"
    },
    {
        id: 3,
        nombre: "Maria Antonieta",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/342/200/300"
    },
]

for (let i = 0; i < users.length; i++) {

    let div = document.createElement("div")
    div.classList.add( "tarjetas-usuario" )

    let img = document.createElement("img")
    img.src = users[i].imgUrl
    
    let h1 = document.createElement("h1")
    h1.textContent = users[i].nombre
    
    let p = document.createElement("p")
    p.textContent = users[i].descripcion
    
    div.appendChild(img)
    div.appendChild(h1)
    div.appendChild(p)
    
    fragmento.appendChild( div )
}

console.log(contenedor.appendChild( fragmento ))

