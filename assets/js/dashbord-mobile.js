
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
        pTriceps: 5,
        pSubEscapular: 4,
        pSupraIliaco: 5,
        pAbdominal: 6,
        pCuadricipital: 3,
        pComodin: 2,
        pPantorrilla: 5,
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

var colors = ["green", "blue", "yellow", "red"]

document.addEventListener("DOMContentLoaded", () => {
    filtrarUsuarios("BrunoBZG24");
    mostrarResultado("BrunoBZG24");

})

/*--======================= VARIABLES ========================--*/

let dashboardID = document.querySelector(".dashbord-de-usuarios");
let deshbordResults = document.querySelector(".dashbord-de-resultados");
let color = document.getElementsByClassName(".porcentajes");
var resultadoGrasa = porcentajeGrasa(users.genero, users.edad);
let mostrarTodo = document.querySelector(".mostrar-todo");
let composicionCorporal = document.querySelector(".composicion-corporal");
let aspectosDeSalud = document.querySelector(".aspectos-de-salud");
let capacidadesFisicas = document.querySelector(".capacidades-fisicas");
let antropometria = document.querySelector(".antropometria");

/*-----------------------  FIN VARIABLES -----------------------*/
mostrarTodo.addEventListener("click", () =>{
    
})
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
                    <div class="porcentajes" style="background-color:${colorResultadoGrasa(porcentajeGrasa(users.genero, users.edad),users.genero,users.edad)} ;">
                        <span>${porcentajeGrasa(users.genero, users.edad)}%</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Índece de masa corporal</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoImc(imc(users.peso, users.altura))};">
                        <span>${imc(users.peso, users.altura)}</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Índice Cintura-Cadera</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoIcc(icc(users.cCintura, users.cCadera), users.genero)};">
                        <span>${icc(users.cCintura, users.cCadera)}%</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Tensión Arterial Sistólica</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoTas(users.genero, users.edad, users.tas)}";>
                        <span>${users.tas}mm/hg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Tensión Arterial Diastólica</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoTad(users.genero, users.edad, users.tad)};">
                        <span>${users.tad}mm/hg</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Fracuencia cardiaca en reposo</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoFcr(users.genero, users.edad, users.fcr)};">
                        <span>${users.fcr}ppm</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Análisis postural</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoAnalisisPostural(analisisPostural(users.nivHombros, users.escoliosis, users.nivCadera, users.aliTobillos, users.sifosis, users.lordosis))};">
                        <span>${analisisPostural(users.nivHombros, users.escoliosis, users.nivCadera, users.aliTobillos, users.sifosis, users.lordosis)}</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Índice de adaptación al esfuerzo</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoIae(iae(users.fc1, users.fc2, users.fc3))};">
                        <span>${iae(users.fc1, users.fc2, users.fc3)}%</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Vo2Max</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoVo2Max( users.genero, users.edad, Vo2Max(users.genero, users.fcVo2max))};">
                        <span>${Vo2Max(users.genero, users.fcVo2max)}ml/kg/min</span>
                    </div>
                </div>
                <div class="tarjetas">
                    <h3>Flexibilidad coxofemoral</h3>
                    <p>Valor normal de acuerdo al genero y la edad</p>
                    <div class="porcentajes" style="background-color:${colorResultadoFlexibilidad(users.genero, users.flexibilidad)};">
                    <span>${(users.flexibilidad)}</span>
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
    if(ectomorfia > mesomorfia && ectomorfia > endomorfia)
    return "Ectomorfo"; 
    if(mesomorfia > ectomorfia && mesomorfia > endomorfia)
    return "Mesomorfo";
    if(endomorfia > ectomorfia && endomorfia > mesomorfia)
    return "Endomorfo"; 
}

function colorResultadoGrasa(resultadoGrasa, genero, edad){
    if(edad >= 18 && edad <=20 && genero == "masculino" && resultadoGrasa <= 7)
    return "skyblue";
    if(edad >= 21 && edad <=25 && genero == "masculino" && resultadoGrasa <= 7)
    return "skyblue";
    if(edad >= 26 && edad <=30 && genero == "masculino" && resultadoGrasa <= 9)
    return "skyblue";
    if(edad >= 31 && edad <=35 && genero == "masculino" && resultadoGrasa <= 10)
    return "skyblue";
    if(edad >= 36 && edad <=40 && genero == "masculino" && resultadoGrasa <= 12)
    return "skyblue";
    if(edad >= 41 && edad <=45 && genero == "masculino" && resultadoGrasa <= 15)
    return "skyblue";
    if(edad >= 46 && edad <=50 && genero == "masculino" && resultadoGrasa <= 16)
    return "skyblue";
    if(edad >= 51 && edad <=55 && genero == "masculino" && resultadoGrasa <= 17)
    return "skyblue";
    if(edad >= 56 && genero == "masculino" && resultadoGrasa <= 18)
    return "skyblue";

    if(edad >= 18 && edad <=20 && genero == "femenino" && resultadoGrasa <= 17)
    return "skyblue";
    if(edad >= 21 && edad <=25 && genero == "femenino" && resultadoGrasa <= 19)
    return "skyblue";
    if(edad >= 26 && edad <=30 && genero == "femenino" && resultadoGrasa <= 21)
    return "skyblue";
    if(edad >= 31 && edad <=35 && genero == "femenino" && resultadoGrasa <= 21)
    return "skyblue";
    if(edad >= 36 && edad <=40 && genero == "femenino" && resultadoGrasa <= 24)
    return "skyblue";
    if(edad >= 41 && edad <=45 && genero == "femenino" && resultadoGrasa <= 24)
    return "skyblue";
    if(edad >= 46 && edad <=50 && genero == "femenino" && resultadoGrasa <= 25)
    return "skyblue";
    if(edad >= 51 && edad <=55 && genero == "femenino" && resultadoGrasa <= 26)
    return "skyblue";
    if(edad >= 56 && genero == "femenino" && resultadoGrasa <= 26)
    return "skyblue";

    if(edad >= 18 && edad <=20 && genero == "masculino" && resultadoGrasa >= 7 && resultadoGrasa <= 13)
    return "yellowgreen";
    if(edad >= 21 && edad <=25 && genero == "masculino" && resultadoGrasa >= 7 && resultadoGrasa <= 14)
    return "yellowgreen";
    if(edad >= 26 && edad <=30 && genero == "masculino" && resultadoGrasa >= 9 && resultadoGrasa <= 17)
    return "yellowgreen";
    if(edad >= 31 && edad <=35 && genero == "masculino" && resultadoGrasa >= 10 && resultadoGrasa <= 18)
    return "yellowgreen";
    if(edad >= 36 && edad <=40 && genero == "masculino" && resultadoGrasa >= 12 && resultadoGrasa <= 19)
    return "yellowgreen";
    if(edad >= 41 && edad <=45 && genero == "masculino" && resultadoGrasa >= 15 && resultadoGrasa <= 21)
    return "yellowgreen";
    if(edad >= 46 && edad <=50 && genero == "masculino" && resultadoGrasa >= 16 && resultadoGrasa <= 22)
    return "yellowgreen";
    if(edad >= 51 && edad <=55 && genero == "masculino" && resultadoGrasa >= 17 && resultadoGrasa <= 24)
    return "yellowgreen";
    if(edad >= 56 && genero == "masculino" && resultadoGrasa >= 18 && resultadoGrasa <= 25)
    return "yellowgreen";

    if(edad >= 18 && edad <=20 && genero == "femenino" && resultadoGrasa >= 17 && resultadoGrasa <= 22)
    return "yellowgreen";
    if(edad >= 21 && edad <=25 && genero == "femenino" && resultadoGrasa >= 19 && resultadoGrasa <= 24)
    return "yellowgreen";
    if(edad >= 26 && edad <=30 && genero == "femenino" && resultadoGrasa >= 21 && resultadoGrasa <= 25)
    return "yellowgreen";
    if(edad >= 31 && edad <=35 && genero == "femenino" && resultadoGrasa >= 21 && resultadoGrasa <= 26)
    return "yellowgreen";
    if(edad >= 36 && edad <=40 && genero == "femenino" && resultadoGrasa >= 24 && resultadoGrasa <= 27)
    return "yellowgreen";
    if(edad >= 41 && edad <=45 && genero == "femenino" && resultadoGrasa >= 24 && resultadoGrasa <= 28)
    return "yellowgreen";
    if(edad >= 46 && edad <=50 && genero == "femenino" && resultadoGrasa >= 25 && resultadoGrasa <= 29)
    return "yellowgreen";
    if(edad >= 51 && edad <=55 && genero == "femenino" && resultadoGrasa >= 26 && resultadoGrasa <= 30)
    return "yellowgreen";
    if(edad >= 56 && genero == "femenino" && resultadoGrasa >= 26 && resultadoGrasa <= 30)
    return "yellowgreen";

    if(edad >= 18 && edad <=20 && genero == "masculino" && resultadoGrasa >= 14 && resultadoGrasa <= 20)
    return "orange";
    if(edad >= 21 && edad <=25 && genero == "masculino" && resultadoGrasa >= 15 && resultadoGrasa <= 22)
    return "orange";
    if(edad >= 26 && edad <=30 && genero == "masculino" && resultadoGrasa >= 18 && resultadoGrasa <= 23)
    return "orange";
    if(edad >= 31 && edad <=35 && genero == "masculino" && resultadoGrasa >= 19 && resultadoGrasa <= 25)
    return "orange";
    if(edad >= 36 && edad <=40 && genero == "masculino" && resultadoGrasa >= 20 && resultadoGrasa <= 25)
    return "orange";
    if(edad >= 41 && edad <=45 && genero == "masculino" && resultadoGrasa >= 22 && resultadoGrasa <= 28)
    return "orange";
    if(edad >= 46 && edad <=50 && genero == "masculino" && resultadoGrasa >= 23 && resultadoGrasa <= 29)
    return "orange";
    if(edad >= 51 && edad <=55 && genero == "masculino" && resultadoGrasa >= 24 && resultadoGrasa <= 30)
    return "orange";
    if(edad >= 56 && genero == "masculino" && resultadoGrasa >= 26 && resultadoGrasa <= 32)
    return "orange";

    if(edad >= 18 && edad <=20 && genero == "femenino" && resultadoGrasa >= 23 && resultadoGrasa <= 30)
    return "orange";
    if(edad >= 21 && edad <=25 && genero == "femenino" && resultadoGrasa >= 25 && resultadoGrasa <= 31)
    return "orange";
    if(edad >= 26 && edad <=30 && genero == "femenino" && resultadoGrasa >= 26 && resultadoGrasa <= 33)
    return "orange";
    if(edad >= 31 && edad <=35 && genero == "femenino" && resultadoGrasa >= 27 && resultadoGrasa <= 33)
    return "orange";
    if(edad >= 36 && edad <=40 && genero == "femenino" && resultadoGrasa >= 28 && resultadoGrasa <= 34)
    return "orange";
    if(edad >= 41 && edad <=45 && genero == "femenino" && resultadoGrasa >= 29 && resultadoGrasa <= 35)
    return "orange";
    if(edad >= 46 && edad <=50 && genero == "femenino" && resultadoGrasa >= 30 && resultadoGrasa <= 37)
    return "orange";
    if(edad >= 51 && edad <=55 && genero == "femenino" && resultadoGrasa >= 31 && resultadoGrasa <= 38)
    return "orange";
    if(edad >= 56 && genero == "femenino" && resultadoGrasa >= 31 && resultadoGrasa <= 38)
    return "orange";

    if(edad >= 18 && edad <=20 && genero == "masculino" && resultadoGrasa >= 20)
    return "red";
    if(edad >= 21 && edad <=25 && genero == "masculino" && resultadoGrasa >= 22)
    return "red";
    if(edad >= 26 && edad <=30 && genero == "masculino" && resultadoGrasa >= 23)
    return "red";
    if(edad >= 31 && edad <=35 && genero == "masculino" && resultadoGrasa >= 25)
    return "red";
    if(edad >= 36 && edad <=40 && genero == "masculino" && resultadoGrasa >= 25)
    return "red";
    if(edad >= 41 && edad <=45 && genero == "masculino" && resultadoGrasa >= 28)
    return "red";
    if(edad >= 46 && edad <=50 && genero == "masculino" && resultadoGrasa >= 29)
    return "red";
    if(edad >= 51 && edad <=55 && genero == "masculino" && resultadoGrasa >= 30)
    return "red";
    if(edad >= 56 && genero == "masculino" && resultadoGrasa >= 32)
    return "red";

    if(edad >= 18 && edad <=20 && genero == "femenino" && resultadoGrasa >= 30)
    return "red";
    if(edad >= 21 && edad <=25 && genero == "femenino" && resultadoGrasa >= 31)
    return "red";
    if(edad >= 26 && edad <=30 && genero == "femenino" && resultadoGrasa >= 33)
    return "red";
    if(edad >= 31 && edad <=35 && genero == "femenino" && resultadoGrasa >= 33)
    return "red";
    if(edad >= 36 && edad <=40 && genero == "femenino" && resultadoGrasa >= 34)
    return "red";
    if(edad >= 41 && edad <=45 && genero == "femenino" && resultadoGrasa >= 35)
    return "red";
    if(edad >= 46 && edad <=50 && genero == "femenino" && resultadoGrasa >= 37)
    return "red";
    if(edad >= 51 && edad <=55 && genero == "femenino" && resultadoGrasa >= 38)
    return "red";
    if(edad >= 56 && genero == "femenino" && resultadoGrasa >= 38)
    return "red";

};

function colorResultadoImc (imc){
    if(imc <= 18)
    return "skyblue";
    if(imc >= 19 && imc <= 25)
    return "yellowgreen";
    if(imc >= 26 && imc <= 30)
    return "orange";
    if(imc >= 31)
    return "red";
}

function colorResultadoIcc (icc, genero){
    if(icc <= 0.94999 && genero == "masculino")
    return "skyblue";
    if(icc <= 0.79999 && genero == "femenino")
    return "skyblue";

    if(icc >= 0.95 && icc <= 1 && genero == "masculino")
    return "yellowgreen";
    if(icc >= 0.80 && icc <= 0.85 && genero == "femenino")
    return "yellowgreen";

    if(icc >= 1.01 && icc <= 1.29 && genero == "masculino")
    return "orange";
    if(icc >= 0.86 && icc <= 0.91 && genero == "femenino")
    return "orange";

    if(icc >= 1.30 && genero == "masculino")
    return "red";
    if(icc >= 0.92 && genero == "femenino")
    return "red";

}

function colorResultadoTas (genero, edad, tas){
    if(edad >= 18 && edad <=20 && genero == "masculino" && tas <= 104)
    return "skyblue";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tas <= 104)
    return "skyblue";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tas <= 107)
    return "skyblue";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tas <= 109)
    return "skyblue";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tas <= 109)
    return "skyblue";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tas <= 109)
    return "skyblue";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tas <= 109)
    return "skyblue";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tas <= 114)
    return "skyblue";
    if(edad >= 56 && genero == "masculino" && tas <= 114)
    return "skyblue";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tas <= 99)
    return "skyblue";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tas <= 99)
    return "skyblue";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tas <= 101)
    return "skyblue";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tas <= 104)
    return "skyblue";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tas <= 104)
    return "skyblue";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tas <= 104)
    return "skyblue";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tas <= 104)
    return "skyblue";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tas <= 109)
    return "skyblue";
    if(edad >= 56 && genero == "femenino" && tas <= 114)
    return "skyblue";

    if(edad >= 18 && edad <=20 && genero == "masculino" && tas >= 105 && tas <= 120)
    return "yellowgreen";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tas >= 105 && tas <= 120)
    return "yellowgreen";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tas >= 108 && tas <= 120)
    return "yellowgreen";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tas >= 110 && tas <= 120)
    return "yellowgreen";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tas >= 110 && tas <= 120)
    return "yellowgreen";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tas >= 110 && tas <= 120)
    return "yellowgreen";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tas >= 110 && tas <= 120)
    return "yellowgreen";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tas >= 115 && tas <= 120)
    return "yellowgreen";
    if(edad >= 56 && genero == "masculino" && tas >= 115 && tas <= 120)
    return "yellowgreen";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tas >= 100 && tas <= 120)
    return "yellowgreen";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tas >= 100 && tas <= 120)
    return "yellowgreen";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tas >= 102 && tas <= 120)
    return "yellowgreen";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tas >= 105 && tas <= 120)
    return "yellowgreen";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tas >= 105 && tas <= 120)
    return "yellowgreen";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tas >= 105 && tas <= 120)
    return "yellowgreen";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tas >= 105 && tas <= 120)
    return "yellowgreen";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tas >= 110 && tas <= 120)
    return "yellowgreen";
    if(edad >= 56 && genero == "femenino" && tas >= 115 && tas <= 120)
    return "yellowgreen";

    if(edad >= 18 && edad <=20 && genero == "masculino" && tas >= 121 && tas <= 135)
    return "orange";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tas >= 121 && tas <= 139)
    return "orange";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tas >= 121 && tas <= 139)
    return "orange";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tas >= 121 && tas <= 145)
    return "orange";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tas >= 121 && tas <= 145)
    return "orange";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tas >= 121 && tas <= 150)
    return "orange";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tas >= 121 && tas <= 150)
    return "orange";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tas >= 121 && tas <= 155)
    return "orange";
    if(edad >= 56 && genero == "masculino" && tas >= 121 && tas <= 160)
    return "orange";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tas >= 121 && tas <= 130)
    return "orange";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tas >= 121 && tas <= 130)
    return "orange";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tas >= 121 && tas <= 135)
    return "orange";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tas >= 121 && tas <= 139)
    return "orange";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tas >= 121 && tas <= 139)
    return "orange";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tas >= 121 && tas <= 150)
    return "orange";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tas >= 121 && tas <= 150)
    return "orange";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tas >= 121 && tas <= 155)
    return "orange";
    if(edad >= 56 && genero == "femenino" && tas >= 121 && tas <= 160)
    return "orange";

    if(edad >= 18 && edad <=20 && genero == "masculino" && tas >= 136)
    return "red";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tas >= 140)
    return "red";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tas >= 140)
    return "red";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tas >= 146)
    return "red";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tas >= 146)
    return "red";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tas >= 151)
    return "red";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tas >= 151)
    return "red";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tas >= 156)
    return "red";
    if(edad >= 56 && genero == "masculino" && tas >= 161)
    return "red";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tas >= 131)
    return "red";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tas >= 131)
    return "red";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tas >= 136)
    return "red";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tas >= 140)
    return "red";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tas >= 140)
    return "red";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tas >= 151)
    return "red";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tas >= 151)
    return "red";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tas >= 156)
    return "red";
    if(edad >= 56 && genero == "femenino" && tas >= 161)
    return "red";

}

function colorResultadoTad (genero, edad, tad){
    if(edad >= 18 && edad <=20 && genero == "masculino" && tad <= 59)
    return "skyblue";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tad <= 61)
    return "skyblue";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tad <= 64)
    return "skyblue";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tad <= 67)
    return "skyblue";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tad <= 67)
    return "skyblue";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tad <= 69)
    return "skyblue";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tad <= 69)
    return "skyblue";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tad <= 69)
    return "skyblue";
    if(edad >= 56 && genero == "masculino" && tad <= 69)
    return "skyblue";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tad <= 59)
    return "skyblue";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tad <= 59)
    return "skyblue";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tad <= 59)
    return "skyblue";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tad <= 64)
    return "skyblue";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tad <= 64)
    return "skyblue";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tad <= 64)
    return "skyblue";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tad <= 64)
    return "skyblue";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tad <= 69)
    return "skyblue";
    if(edad >= 56 && genero == "femenino" && tad <= 69)
    return "skyblue";

    if(edad >= 18 && edad <=20 && genero == "masculino" && tad >= 60 && tad <= 80)
    return "yellowgreen";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tad >= 62 && tad <= 80)
    return "yellowgreen";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tad >= 65 && tad <= 80)
    return "yellowgreen";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tad >= 68 && tad <= 80)
    return "yellowgreen";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tad >= 68 && tad <= 80)
    return "yellowgreen";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tad >= 70 && tad <= 80)
    return "yellowgreen";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tad >= 70 && tad <= 80)
    return "yellowgreen";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tad >= 70 && tad <= 80)
    return "yellowgreen";
    if(edad >= 56 && genero == "masculino" && tas >= 70 && tad <= 80)
    return "yellowgreen";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tad >= 60 && tad <= 80)
    return "yellowgreen";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tad >= 60 && tad <= 80)
    return "yellowgreen";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tad >= 60 && tad <= 80)
    return "yellowgreen";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tad >= 65 && tad <= 80)
    return "yellowgreen";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tad >= 65 && tad <= 80)
    return "yellowgreen";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tad >= 65 && tad <= 80)
    return "yellowgreen";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tad >= 65 && tad <= 80)
    return "yellowgreen";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tad >= 70 && tad <= 80)
    return "yellowgreen";
    if(edad >= 56 && genero == "femenino" && tas >= 70 && tad <= 80)
    return "yellowgreen";

    if(edad >= 18 && edad <=20 && genero == "masculino" && tad >= 81 && tad <= 86)
    return "orange";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tad >= 81 && tad <= 88)
    return "orange";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tad >= 81 && tad <= 89)
    return "orange";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tad >= 81 && tad <= 92)
    return "orange";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tad >= 81 && tad <= 92)
    return "orange";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tad >= 81 && tad <= 96)
    return "orange";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tad >= 81 && tad <= 96)
    return "orange";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tad >= 81 && tad <= 97)
    return "orange";
    if(edad >= 56 && genero == "masculino" && tas >= 81 && tad <= 100)
    return "orange";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tad >= 81 && tad <= 85)
    return "orange";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tad >= 81 && tad <= 85)
    return "orange";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tad >= 81 && tad <= 85)
    return "orange";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tad >= 81 && tad <= 88)
    return "orange";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tad >= 81 && tad <= 89)
    return "orange";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tad >= 81 && tad <= 96)
    return "orange";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tad >= 81 && tad <= 96)
    return "orange";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tad >= 81 && tad <= 97)
    return "orange";
    if(edad >= 56 && genero == "femenino" && tad >= 81 && tad <= 100)
    return "orange";

    if(edad >= 18 && edad <=20 && genero == "masculino" && tad >= 87)
    return "red";
    if(edad >= 21 && edad <=25 && genero == "masculino" && tad >= 89)
    return "red";
    if(edad >= 26 && edad <=30 && genero == "masculino" && tad >= 90)
    return "red";
    if(edad >= 31 && edad <=35 && genero == "masculino" && tad >= 93)
    return "red";
    if(edad >= 36 && edad <=40 && genero == "masculino" && tad >= 93)
    return "red";
    if(edad >= 41 && edad <=45 && genero == "masculino" && tad >= 97)
    return "red";
    if(edad >= 46 && edad <=50 && genero == "masculino" && tad >= 97)
    return "red";
    if(edad >= 51 && edad <=55 && genero == "masculino" && tad >= 98)
    return "red";
    if(edad >= 56 && genero == "masculino" && tad >= 101)
    return "red";

    if(edad >= 18 && edad <=20 && genero == "femenino" && tad >= 86)
    return "red";
    if(edad >= 21 && edad <=25 && genero == "femenino" && tad >= 86)
    return "red";
    if(edad >= 26 && edad <=30 && genero == "femenino" && tad >= 86)
    return "red";
    if(edad >= 31 && edad <=35 && genero == "femenino" && tad >= 89)
    return "red";
    if(edad >= 36 && edad <=40 && genero == "femenino" && tad >= 90)
    return "red";
    if(edad >= 41 && edad <=45 && genero == "femenino" && tad >= 97)
    return "red";
    if(edad >= 46 && edad <=50 && genero == "femenino" && tad >= 97)
    return "red";
    if(edad >= 51 && edad <=55 && genero == "femenino" && tad >= 98)
    return "red";
    if(edad >= 56 && genero == "femenino" && tad >= 101)
    return "red";

}

function colorResultadoFcr (genero, edad, fcr){
    if(edad >= 13 && edad <=19 && genero == "masculino" && fcr <= 59)
    return "skyblue";
    if(edad >= 20 && edad <=29 && genero == "masculino" && fcr <= 59)
    return "skyblue";
    if(edad >= 30 && edad <=39 && genero == "masculino" && fcr <= 61)
    return "skyblue";
    if(edad >= 40 && edad <=49 && genero == "masculino" && fcr <= 63)
    return "skyblue";
    if(edad >= 50 && edad <=55 && genero == "masculino" && fcr <= 65)
    return "skyblue";
    if(edad >= 56 && genero == "masculino" && fcr <= 65)
    return "skyblue";

    if(edad >= 13 && edad <=19 && genero == "femenino" && fcr <= 69)
    return "skyblue";
    if(edad >= 20 && edad <=29 && genero == "femenino" && fcr <= 69)
    return "skyblue";
    if(edad >= 30 && edad <=39 && genero == "femenino" && fcr <= 69)
    return "skyblue";
    if(edad >= 40 && edad <=49 && genero == "femenino" && fcr <= 71)
    return "skyblue";
    if(edad >= 50 && edad <=55 && genero == "femenino" && fcr <= 73)
    return "skyblue";
    if(edad >= 56 && genero == "femenino" && fcr <= 73)
    return "skyblue";

    if(edad >= 13 && edad <=19 && genero == "masculino" && fcr >= 60 && fcr <= 68)
    return "yellowgreen";
    if(edad >= 20 && edad <=29 && genero == "masculino" && fcr >= 60 && fcr <= 68)
    return "yellowgreen";
    if(edad >= 30 && edad <=39 && genero == "masculino" && fcr >= 62 && fcr <= 70)
    return "yellowgreen";
    if(edad >= 40 && edad <=49 && genero == "masculino" && fcr >= 64 && fcr <= 72)
    return "yellowgreen";
    if(edad >= 50 && edad <=55 && genero == "masculino" && fcr >= 66 && fcr <= 74)
    return "yellowgreen";
    if(edad >= 56 && genero == "masculino" && fcr >= 66 && fcr <= 74)
    return "yellowgreen";

    if(edad >= 13 && edad <=19 && genero == "femenino" && fcr >= 70 && fcr <= 76)
    return "yellowgreen";
    if(edad >= 20 && edad <=29 && genero == "femenino" && fcr >= 70 && fcr <= 76)
    return "yellowgreen";
    if(edad >= 30 && edad <=39 && genero == "femenino" && fcr >= 70 && fcr <= 78)
    return "yellowgreen";
    if(edad >= 40 && edad <=49 && genero == "femenino" && fcr >= 72 && fcr <= 78)
    return "yellowgreen";
    if(edad >= 50 && edad <=55 && genero == "femenino" && fcr >= 74 && fcr <= 82) 
    return "yellowgreen";
    if(edad >= 56 && genero == "femenino" && fcr >= 74 && fcr <= 82)
    return "yellowgreen";

    if(edad >= 13 && edad <=19 && genero == "masculino" && fcr >= 69 && fcr <= 86)
    return "orange";
    if(edad >= 20 && edad <=29 && genero == "masculino" && fcr >= 69 && fcr <= 86)
    return "orange";
    if(edad >= 30 && edad <=39 && genero == "masculino" && fcr >= 71 && fcr <= 86)
    return "orange";
    if(edad >= 40 && edad <=49 && genero == "masculino" && fcr >= 73 && fcr <= 90)
    return "orange";
    if(edad >= 50 && edad <=55 && genero == "masculino" && fcr >= 75 && fcr <= 90)
    return "orange";
    if(edad >= 56 && genero == "masculino" && fcr >= 75 && fcr <= 90)
    return "orange";

    if(edad >= 13 && edad <=19 && genero == "femenino" && fcr >= 77 && fcr <= 96)
    return "orange";
    if(edad >= 20 && edad <=29 && genero == "femenino" && fcr >= 77 && fcr <= 96)
    return "orange";
    if(edad >= 30 && edad <=39 && genero == "femenino" && fcr >= 79 && fcr <= 98)
    return "orange";
    if(edad >= 40 && edad <=49 && genero == "femenino" && fcr >= 79 && fcr <= 100)
    return "orange";
    if(edad >= 50 && edad <=55 && genero == "femenino" && fcr >= 83 && fcr <=104) 
    return "orange";
    if(edad >= 56 && genero == "femenino" && fcr >= 83 && fcr <= 104)
    return "orange";

    if(edad >= 13 && edad <=19 && genero == "masculino" && fcr >= 87)
    return "red";
    if(edad >= 20 && edad <=29 && genero == "masculino" && fcr >= 87)
    return "red";
    if(edad >= 30 && edad <=39 && genero == "masculino" && fcr >= 87)
    return "red";
    if(edad >= 40 && edad <=49 && genero == "masculino" && fcr >= 91)
    return "red";
    if(edad >= 50 && edad <=55 && genero == "masculino" && fcr >= 91)
    return "red";
    if(edad >= 56 && genero == "masculino" && fcr >= 91)
    return "red";

    if(edad >= 13 && edad <=19 && genero == "femenino" && fcr >= 97)
    return "red";
    if(edad >= 20 && edad <=29 && genero == "femenino" && fcr >= 97)
    return "red";
    if(edad >= 30 && edad <=39 && genero == "femenino" && fcr >= 99)
    return "red";
    if(edad >= 40 && edad <=49 && genero == "femenino" && fcr >= 101)
    return "red";
    if(edad >= 50 && edad <=55 && genero == "femenino" && fcr >=105) 
    return "red";
    if(edad >= 56 && genero == "femenino" && fcr >= 105)
    return "red";
}

function colorResultadoAnalisisPostural(analisisPostural){
    if(analisisPostural >= 45)
    return "yellowgreen";
    if(analisisPostural >= 35 && analisisPostural <= 44)
    return "skyblue";
    if(analisisPostural >= 10 && analisisPostural <= 34)
    return "orange";
    if(analisisPostural <= 9)
    return "red";  
}

function colorResultadoIae (iae){
    if(iae >= 16)
    return "red";
    if(iae >= 11 && iae <= 15.99)
    return "orange";
    if(iae >= 6 && iae <= 10.99)
    return "skyblue";
    if(iae <= 5.99)
    return "yellowgreen"; 

}

function colorResultadoVo2Max (genero, edad, Vo2Max){
    if(edad >= 13 && edad <=19 && genero == "masculino" && Vo2Max >= 59.9)
    return "yellowgreen";
    if(edad >= 20 && edad <=29 && genero == "masculino" && Vo2Max >= 52.4)
    return "yellowgreen";
    if(edad >= 30 && edad <=39 && genero == "masculino" && Vo2Max >= 49.4)
    return "yellowgreen";
    if(edad >= 40 && edad <=49 && genero == "masculino" && Vo2Max >= 48)
    return "yellowgreen";
    if(edad >= 50 && edad <=55 && genero == "masculino" && Vo2Max >= 45.3)
    return "yellowgreen";
    if(edad >= 56 && genero == "masculino" && Vo2Max >= 44.2)
    return "yellowgreen";

    if(edad >= 13 && edad <=19 && genero == "femenino" && Vo2Max >= 44.2)
    return "yellowgreen";
    if(edad >= 20 && edad <=29 && genero == "femenino" && Vo2Max >= 41.9)
    return "yellowgreen";
    if(edad >= 30 && edad <=39 && genero == "femenino" && Vo2Max >= 41)
    return "yellowgreen";
    if(edad >= 40 && edad <=49 && genero == "femenino" && Vo2Max >= 40)
    return "yellowgreen";
    if(edad >= 50 && edad <=55 && genero == "femenino" && Vo2Max >= 36.9)
    return "yellowgreen";
    if(edad >= 56 && genero == "femenino" && Vo2Max >= 35)
    return "yellowgreen";

    if(edad >= 13 && edad <=19 && genero == "masculino" && Vo2Max >= 45.2 && Vo2Max <= 59.8)
    return "skyblue";
    if(edad >= 20 && edad <=29 && genero == "masculino" && Vo2Max >= 42.5 && Vo2Max <= 52.3)
    return "skyblue";
    if(edad >= 30 && edad <=39 && genero == "masculino" && Vo2Max >= 41 && Vo2Max <= 49.3)
    return "skyblue";
    if(edad >= 40 && edad <=49 && genero == "masculino" && Vo2Max >= 39 && Vo2Max <= 47.9)
    return "skyblue";
    if(edad >= 50 && edad <=55 && genero == "masculino" && Vo2Max >= 35.8 && Vo2Max <= 45.)
    return "skyblue";
    if(edad >= 56 && genero == "masculino" && Vo2Max >= 32.3 && Vo2Max <= 44.1)
    return "skyblue";

    if(edad >= 13 && edad <=19 && genero == "femenino" && Vo2Max >= 35 && Vo2Max <= 44.1)
    return "skyblue";
    if(edad >= 20 && edad <=29 && genero == "femenino" && Vo2Max >= 33 && Vo2Max <= 42.9)
    return "skyblue";
    if(edad >= 30 && edad <=39 && genero == "femenino" && Vo2Max >= 31.5 && Vo2Max <= 41.8)
    return "skyblue";
    if(edad >= 40 && edad <=49 && genero == "femenino" && Vo2Max >= 29 && Vo2Max <= 39.9)
    return "skyblue";
    if(edad >= 50 && edad <=55 && genero == "femenino" && Vo2Max >= 27 && Vo2Max <= 36.8)
    return "skyblue";
    if(edad >= 56 && genero == "femenino" && Vo2Max >= 24.5 && Vo2Max <= 34.9)
    return "skyblue";

    if(edad >= 13 && edad <=19 && genero == "masculino" && Vo2Max >= 35 && Vo2Max <= 45.1)
    return "orange";
    if(edad >= 20 && edad <=29 && genero == "masculino" && Vo2Max >= 33 && Vo2Max <= 42.4)
    return "orange";
    if(edad >= 30 && edad <=39 && genero == "masculino" && Vo2Max >= 31.5 && Vo2Max <= 42.9)
    return "orange";
    if(edad >= 40 && edad <=49 && genero == "masculino" && Vo2Max >= 30.2 && Vo2Max <= 38.9)
    return "orange";
    if(edad >= 50 && edad <=55 && genero == "masculino" && Vo2Max >= 26.1 && Vo2Max <= 35.7)
    return "orange";
    if(edad >= 56 && genero == "masculino" && Vo2Max >= 20.5 && Vo2Max <= 32.2)
    return "orange";

    if(edad >= 13 && edad <=19 && genero == "femenino" && Vo2Max >= 25 && Vo2Max <= 44.1)
    return "orange";
    if(edad >= 20 && edad <=29 && genero == "femenino" && Vo2Max >= 23.6 && Vo2Max <= 42.8)
    return "orange";
    if(edad >= 30 && edad <=39 && genero == "femenino" && Vo2Max >= 22.8 && Vo2Max <= 41.7)
    return "orange";
    if(edad >= 40 && edad <=49 && genero == "femenino" && Vo2Max >= 21 && Vo2Max <= 39.8)
    return "orange";
    if(edad >= 50 && edad <=55 && genero == "femenino" && Vo2Max >= 20.02 && Vo2Max <= 36.7) 
    return "orange";
    if(edad >= 56 && genero == "femenino" && Vo2Max >= 17.5 && Vo2Max <= 34.8)
    return "orange";

    if(edad >= 13 && edad <=19 && genero == "masculino" && Vo2Max <= 34.9)
    return "red";
    if(edad >= 20 && edad <=29 && genero == "masculino" && Vo2Max <= 32.9)
    return "red";
    if(edad >= 30 && edad <=39 && genero == "masculino" && Vo2Max <= 31.4)
    return "red";
    if(edad >= 40 && edad <=49 && genero == "masculino" && Vo2Max <= 30.1)
    return "red";
    if(edad >= 50 && edad <=55 && genero == "masculino" && Vo2Max <= 26)
    return "red";
    if(edad >= 56 && genero == "masculino" && Vo2Max <= 20.4)
    return "red";

    if(edad >= 13 && edad <=19 && genero == "femenino" && Vo2Max <= 24.9)
    return "red";
    if(edad >= 20 && edad <=29 && genero == "femenino" && Vo2Max <= 23.5)
    return "red";
    if(edad >= 30 && edad <=39 && genero == "femenino" && Vo2Max <= 22.7)
    return "red";
    if(edad >= 40 && edad <=49 && genero == "femenino" && Vo2Max <= 20.9)
    return "red";
    if(edad >= 50 && edad <=55 && genero == "femenino" && Vo2Max <=20.1) 
    return "red";
    if(edad >= 56 && genero == "femenino" && Vo2Max <= 17.4)
    return "red";
}
function colorResultadoFlexibilidad (genero, flexibilidad){
    if(genero == "masculino" && flexibilidad >= 27)
    return "yellowgreen";
    if(genero == "femenino" && flexibilidad >= 30)
    return "yellowgreen";

    if(genero == "masculino"  && flexibilidad >= 0 && flexibilidad <= 26)
    return "skyblue";
    if(genero == "femenino"  && flexibilidad >= 1 && flexibilidad <= 29)
    return "skyblue";

    if(genero == "masculino"  && flexibilidad >= -20 && flexibilidad <= -1)
    return "orange";
    if(genero == "femenino"  && flexibilidad >= -15 && flexibilidad <= 0)
    return "orange";

    if(genero == "masculino" && flexibilidad <= -21)
    return "red";
    if(genero == "femenino" && flexibilidad <= -16)
    return "red";

}