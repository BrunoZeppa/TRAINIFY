
'use strict'


const users = [
    {
        id: 0,
        nombre: "Fulanito Perez",
        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum sed id qui delectus possimus vitae.",
        imgUrl: "https://picsum.photos/id/1005/200/300"
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

let contenedor = document.querySelector( ".dashbord-de-usuarios" )

let fragmento = new DocumentFragment

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