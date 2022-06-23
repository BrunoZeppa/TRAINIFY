
'use strict'

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
        dMuñeca: 5,
        dRodilla: 11,
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

document.addEventListener("DOMContentLoaded", () => {
    filtrarUsuarios("BrunoBZG24");
    mostrarResultado("BrunoBZG24");

})

/*--======================= VARIABLES ========================--*/

let dashboardID = document.querySelector(".dashbord-de-usuarios");
let deshbordResults = document.querySelector(".dashbord-de-resultados");
let color = document.getElementsByClassName(".porcentajes");
var resultadoGrasa = porcentajeGrasa(users.genero, users.edad);

/*-----------------------  FIN VARIABLES -----------------------*/

/*--======================= FUNCIONES ========================--*/


function filtrarUsuarios(id){
    let fragmento = "";
    let usuarioFiltrados = users.filter((users) => users.id == id);
    usuarioFiltrados.forEach((users, clases) => {
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

function mostrarResultado(id) {
    let fragment = "";
    let usuarioFiltrados = users.filter((users) => users.id == id);
    usuarioFiltrados.forEach((users) => {
        fragment += `
        <div class="tarjetas">
                    <h3>Porcentaje de grasa</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${porcentajeGrasa(users.genero, users.edad)}%</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Índece de masa corporal</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${imc(users.peso, users.altura)}</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Índice Cintura-Cadera</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${icc(users.cCintura, users.cCadera)}%</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Peso Tejido Adiposo</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${pesoGrasa(porcentajeGrasa(users.genero, users.edad), users.peso)}kg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Peso Óseo</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${pesoOseo(users.altura, users.dMuñeca, users.dRodilla)}kg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Peso Residual</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${pesoResidual(users.genero, users.peso)}kg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Peso Muscular</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${pesoMuscular(users.peso, pesoGrasa(porcentajeGrasa(users.genero, users.edad), users.peso), pesoOseo(users.altura, users.dMuñeca, users.dRodilla), pesoResidual(users.genero, users.peso))}kg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Tipo de fibras Músculares</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${tipoFibrasMusculares(users.angSalto)}</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Tensión Arterial Sistólica</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${users.tas}mm/hg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Tensión Arterial Diastólica</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${users.tad}mm/hg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Fracuencia cardiaca</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${users.fcr}ppm</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Análisis postural</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${analisisPostural(users.nivHombros, users.escoliosis, users.nivCadera, users.aliTobillos, users.sifosis, users.lordosis)}</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Índice de adaptación al esfuerzo</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${iae(users.fc1, users.fc2, users.fc3)}%</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Vo2Max</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                        <span>${Vo2Max(users.genero, users.fcVo2max)}ml/kg/min</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Flexibilidad coxofemoral</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes">
                    <span>${(users.flexibilidad)}</span>
                </div>
            </div>`
            ;
    })
    deshbordResults.innerHTML = fragment
};



function porcentajeGrasa(genero, edad) {

    if (genero == "masculino" && edad <= 30)
        return Math.round(((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.097) + 3.64);
    if (genero == "masculino" && edad >= 31)
        return Math.round(((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.1066) + 4.975);

    if (genero == "femenino" && edad <= 30)
        return Math.round(((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.217) - 4.47);
    if (genero == "femenino" && edad >= 31)
        return Math.round(((users[0].pTriceps + users[0].pSubEscapular + users[0].pSupraIliaco + users[0].pAbdominal + users[0].pCuadricipital + users[0].pComodin) * 0.224) - 2.8);
};
function imc(peso, altura) {
    return Math.round((peso / (altura * altura)) * 10000);
};
function icc(cintura, cadera) {
    return cintura / cadera;
};
function pesoOseo(estatura, muñeca, rodilla) {
    return 3.02 * ((estatura / 100) ^ 2 * (muñeca / 100) * (rodilla / 100) * 400) ^ 0.712;
};
function pesoGrasa(grasa, peso) {
    return (grasa * peso) / 100;
};
function pesoResidual(genero, peso) {
    if (genero == "masculino")
        return peso * 0.241;
    if (genero == "femenino")
        return peso * 0.209;
};
function pesoMuscular(peso, grasa, hueso, agua) {
    return peso - (grasa + hueso + agua);
};
function analisisPostural(hombros, escoliosis, cadera, tobillos, sifosis, lordosis) {
    return hombros + escoliosis + cadera + tobillos + sifosis + lordosis;
};
function iae(fc1, fc2, fc3) {
    return ((fc1 + fc2 + fc3) - 200) / 10;
};
function Vo2Max(genero, fcTermino) {
    if (genero == "masculino")
        return Math.round(111.33 - (0.42 * fcTermino));
    if (genero == "femenino")
        return Math.round(65.81 - (0.1847 * fcTermino));
};
function tipoFibrasMusculares (angulo){
    if(angulo == 45)
    return "Rápidas";
    if(angulo == 90)
    return "Mixtas";
    if(angulo == 145)
    return "lentas";
}
function sumaHWR (pliegueTriceps, pliegueEscapula, pliegueIliaco){
    return pliegueTriceps + pliegueEscapula + pliegueIliaco;
}   

function perimetroCorregido ( sumaPliegues, estatura){
    return sumaPliegues * 170.18 / estatura;
}
function perimetroBrazoContraido (diametroBrazContraido, pliegueTriceps ){
    return diametroBrazContraido - ( pliegueTriceps / 100 );
}
function perimetroPantorrilla (diametroPantorrilla, plieguePantorrilla ){
    return diametroPantorrilla - ( plieguePantorrilla / 100 );
}
function indicePondral ( peso, estatura){
    return estatura / (peso ^ (1/3));
}
function endomorfia (perimetroCorregido){
    0.7182 + (0.1451 * perimetroCorregido) - (0.00068*(perimetroCorregido^2)) + (0.0000014*(perimetroCorregido^3));
}
function ectomorfia  ( indicePonderal){
    if(indicePonderal<=38.28)
    return 0.1;
    if(indicePonderal>38.28 || indicePonderal<40.75)
    return (indicePonderal * 0.463) - 17.63;
    if(indicePonderal>40.75)
    return (indicePonderal * 0.732) - 28.58;
}
function mesomorfia (muneca, rodilla, pbc, prc, estatura){
    return (0.858 * muneca)+(0.601 * rodilla)+(0.188 * pbc)+(0.161 * prc) - (0.131 * estatura) + 4.5; 
}
function tipoDeCuerpo (ectomorfia, mesomorfia, endomorfia){
    if(ectomorfia > mesomorfia && ectomorfia> endomorfia)
    return "Ectomorfo"; 
    if(mesomorfia > ectomorfia && mesomorfia > endomorfia)
    return "Mesomorfo";
    if(endomorfia > ectomorfia && endomorfia > mesomorfia)
    return "Endomorfo"; 
}
/*
function colorResultado(resultadoGrasa){
    if(resultadoGrasa == )
}*/