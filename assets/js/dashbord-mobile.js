
'use strict'

document.addEventListener("DOMContentLoaded", () => {
    filtrarUsuarios("BrunoBZG24");
    mostrarResultado();

})

let dashboardID = document.querySelector(".dashbord-de-usuarios");
let deshbordResults = document.querySelector(".dashbord-de-resultados")



const users = [
    {
        id: "BrunoBZG24",
        selfie: "https://picsum.photos/id/1005/200/300",
        nombre: "Bruno Zeppa",
        edad: 28,
        correo: "zegb94@gmail.com",
        suscripcion: "estandar",
        genero: "masculino",
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
        espaldaBaja: 12,
        fecha: "20 Marzo"
    },
    {
        id: "DeyaniraDRS22",
        selfie: "https://picsum.photos/200/300",
        nombre: "Deyanira Rossette",
        edad: 38,
        correo: "dsamedi@gmail.com",
        suscripcion: "estandar",
        genero: "femenino",
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
        espaldaBaja: 12,
        fecha: "20 ABRIL"
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
function filtrarUsuarios(id) {
    let fragmento = "";
    let usuarioFiltrados = users.filter((users) => users.id == id);
    usuarioFiltrados.forEach((users) => {
        fragmento += `
        <div class="card-user">
          <div>
              <img src="${users.selfie}" alt="">
              <h2><span class="id">id</span>: ${users.id}</h2>
          </div>
          <div>
              <p> <span>edad</span>:${users.edad} años</p>
              <p> <span>genero</span>:${users.genero}</p>
              <p> <span>correo registrado</span>:${users.correo}</p>
              <p> <span>suscripcion</span>:${users.suscripcion}</p>
              <a href="#" class="button">cambiar</a>
              <br><br>
          </div>
      </div>`;
    });

    dashboardID.innerHTML = fragmento;
};

function mostrarResultado(){
    let fragment = "";
    users.forEach((users) => {
        fragment += `
        <div class="tarjetas">
                    <h3>Porcentaje de grasa</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${porcentajeGrasa(users.genero, users.edad)}%</span>
                    </div>
                </div>`;
    })
    deshbordResults.innerHTML = fragment
};








function porcentajeGrasa( genero, edad ){

    if(genero == "masculino" && edad <= 30)
       return ((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.097)+3.64;
        if(genero == "masculino" && edad >= 31)
       return ((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.1066)+4.975;
    
    if(genero == "femenino" && edad <= 30)
       return ((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.217)-4.47;
    if(genero == "femenino" && edad >= 31)
       return ((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.224)-2.8;
};
function imc(peso, altura){
    return (peso/(altura * altura))*10000;
};
function icc(cintura, cadera){
    return cintura / cadera; 
};
function pesoOseo(estatura, muñeca, rodilla){
    return 3.02*((estatura/100)^2 * (muñeca/100) * (rodilla / 100) * 400)^0.712;
};
function pesoGrasa(grasa, peso){
    return (grasa * peso  ) / 100;
};
function pesoResidual (genero, peso ){
    if(genero == "masculino")
    return peso * 0.241;
    if(genero == "femenino")
    return peso * 0.209;
};
function pesoMuscular (peso, grasa, hueso, agua){
   return peso - (grasa + hueso + agua );
};