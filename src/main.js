// import { renderDirector } from './data.js';

import { directorFilter } from './data.js'; 

import { moviesFilter } from './data.js'; 

import { yearFilter } from './data.js'; 

import { producerFilter } from './data.js'; 


import data from './data/ghibli/ghibli.js';

const films = data.films;

// ---------------------modal------------------------
let modal = document.getElementById("modal");
let modalC = document.getElementById("modalCont");
let cerrar = document.getElementById("close");

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modalClose");
  
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },900);
});

window.addEventListener("click", function(e){
    /* this.console.log(e.target); */ // esto nos indica que estamos seleccionando por medio de la consola
    if (e.target == modalC){
        modal.classList.toggle("modalClose");       
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },900);
    }    
});
 
//---------------------rendereizar contenido ------------------------
//renderizar catálogos
function renderMovies(films, htmlLocation) {

    /* Recibira un arreglo de datos de peliculas y devolvera
    las portadas de cada pelicula

    input: arreglo de peliculas, ubicacion de renderizado
    output: no retorna (renderiza en pantalla)
    */
    let filmDivs = "";
    films.forEach( (film) => {
        filmDivs +=`
        <div class="portada" id="${film.id}">
            <button>
                <img src="${film.poster}">                
            </button>
            <div class="textoImg">${film.title}</div>
        </div>`
        htmlLocation.innerHTML = filmDivs; 
    });
    let btnPortadas = document.getElementsByClassName("portada");
    // console.log(btnPortadas);
    return btnPortadas;
    
}

//renderizar contenido del modal al seleccioar personajes
function renderCharacter(character){
    let modalData =`
        <div class="fondoImg">
            <div class="imagen-carnet" id="imagen-carnet">          
                <img src="${character.img}"/>
            </div>
        </div> 
        <div class="seccionDatos">
            <div class="contenido-texto" id="contenido-texto">
                <p>Name: ${character.name}</p><br>
                <p>Gender: ${character.gender}</p><br>
                <p>Age: ${character.age}</p><br>
                <p>Eye color: ${character.eye_color}</p><br>
                <p>Hair color: ${character.hair_color}</p><br>
                <p>Specie: ${character.specie}</p>        
            </div>
            <div class="codigoQR">
                <img src="./imagenes/codigoQR.PNG">
            </div>
        </div>
    `
    let modalDataContainer = document.getElementById("modalData");
    modalDataContainer.innerHTML = modalData;
}

//renderizar contenido del modal al seleccioar locaciones
function renderLocation(location){
    let modalData =`
        <div class="fondoImg">
            <div class="imagen-carnet" id="imagen-carnet">          
                <img src="${location.img}"/>
            </div>
        </div> 
        <div class="seccionDatos">
            <div class="contenido-texto" id="contenido-texto">
                <p>Name: ${location.name}</p><br>
                <p>Climate: ${location.climate}</p><br>
                <p>Terrain: ${location.terrain}</p><br>
                <p>Surface water: ${location.surface_water}</p><br>    
            </div>
            <div class="codigoQR">
                <img src="./imagenes/codigoQR.PNG">
            </div>
        </div>
    `
    let modalDataContainer = document.getElementById("modalData");
    modalDataContainer.innerHTML = modalData;
}

//renderizar contenido del modal al seleccioar vehículos
function renderVehicle(vehicle){    
    let modalData =`
        <div class="fondoImg">
            <div class="imagen-carnet" id="imagen-carnet">          
                <img src="${vehicle.img}"/>
            </div>
        </div> 
        <div class="seccionDatos">
            <div class="contenido-texto" id="contenido-texto">
                <p>Name: ${vehicle.name}</p><br>
                <p>description: ${vehicle.description}</p><br>
                <p>vehicle class: ${vehicle.vehicle_class}</p><br>
                <p>length: ${vehicle.length}</p><br>    
                <p>pilot name:${vehicle.pilot.name}</p><br> 
            </div>
            <div class="codigoQR">
                <img src="./imagenes/codigoQR.PNG">
            </div>
        </div>
    `
    let modalDataContainer = document.getElementById("modalData");
    modalDataContainer.innerHTML = modalData;
}

//renderizar información detallada de la película en la 2da vista
function renderMovieDetail(movie) {
    
    let locations;
    let characters;
    let vehicles;
    
    let contenidoPage = document.getElementById("contenidoPage");
    let contenidoPagePersonajes = document.getElementById("contenidoPagePersonajes");
    let contenidoPageLocaciones = document.getElementById("contenidoPageLocaciones");
    let contenidoPageVehiculos = document.getElementById("contenidoPageVehiculos");

    contenidoPagePersonajes.innerHTML = "";
    contenidoPageLocaciones.innerHTML = "";
    contenidoPageVehiculos.innerHTML = "";

    // generar lo datos basicos de la película selecionada
    let contentMovie =`
        <div class="contentImagPage2" id="textPage6"><img src="${movie.poster}"></div>
        <div class="contentMovie">
            <div class="contentPage2" id="textpage2">Título:${movie.title}</div>
            <div class="contentPage2" id="textpage3">Sinopsis: ${movie.description} </div>
            <div class="contentPage2" id="textpage4">Director: ${movie.director}</div>
            <div class="contentPage2" id="textpage5">Productor:  ${movie.producer}</div>
            <div class="contentPage2" id="textpage7">Fecha de lanzamiento: ${movie.release_date} </div>
            <div class="contentPage2" id="textpage8">Puntaje: ${movie.rt_score}/100</div>
        </div>
    `
    contenidoPage.innerHTML = contentMovie;

    // crear el catalogo de personajes
    for(let j = 0; j < movie.people.length; j++) {
        contenidoPagePersonajes.appendChild(createCharacter(movie.people[j]));           
    }  
     // crear el catalogo de locaciones
    if (movie.locations.length !== 0){
        for(let k = 0; k < movie.locations.length; k++) {
            contenidoPageLocaciones.appendChild(createLocation(movie.locations[k]));             
        } 
    }
    else{
        contenidoPageLocaciones.innerHTML = "En esta película no es destacan locaciones específicas";
    }
     
     // crear el catalogo de vehículos
    if (movie.vehicles.length == 0){
        contenidoPageVehiculos.innerHTML = "En esta película no es destacan vehículos específicos";
    }
    else{
        for(let l = 0; l < movie.vehicles.length ; l++){
            contenidoPageVehiculos.appendChild(createVehicle(movie.vehicles[l]));
        }
    }
    characters = document.getElementsByClassName("subDataCharacter");
    locations = document.getElementsByClassName("subDataLocation");
    vehicles = document.getElementsByClassName("subDataVehicle");
    
    addCharacterCallback(characters, movie.people);
    addLocationCallback(locations, movie.locations);
    addVehicleCallback(vehicles, movie.vehicles);
}

//apertura la 2da vista y llama a la función que rendereiza el contenido de la pelicula seleccionada 
function addMovieCallbacks(btnMovies){
    let pagina2 =  document.getElementById("pagina2");
    let principalPage = document.getElementById("principalPage");

    for(let i=0; i < btnMovies.length; i++){
        btnMovies[i].addEventListener("click", function() {            
            /* console.log(btnMovies[i].id); */ // encontramos el id de la pelicula seleccionada
            let movie = films.filter( (film) => {
                return film.id === btnMovies[i].id
            });
            principalPage.style.display = "none" ; 
            pagina2.style.display = "block" ;
            renderMovieDetail(movie[0]);
            // console.log(movie);
        });
    }
}

//apertura la vista del modal y llama a la función para rendereizar el contenido del personaje seleccionado 
function addCharacterCallback(characterDivs, characters) {
    for (let i = 0; i < characterDivs.length; i++){

        characterDivs[i].addEventListener("click", function(){
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modalClose");
            let characterData = characters.filter((character) => {
                return character.id === characterDivs[i].id
            });
            renderCharacter(characterData[0]);
        });
    }
}

//apertura la vista del modal y llama a la función para renderizar el contenido del la locación seleccionado 
function addLocationCallback(locationDivs, locations) {
    for (let i = 0; i < locationDivs.length; i++){

        locationDivs[i].addEventListener("click", function(){
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modalClose");
            let locationData = locations.filter((location) => {
                return location.id === locationDivs[i].id
            });
            renderLocation(locationData[0]);
        });
    }
}

//apertura la vista del modal y llama a la función para renderizar el contenido del vehículo seleccionado 
function addVehicleCallback(vehicleDivs, vehicles) {
    for (let i = 0; i < vehicleDivs.length; i++){

        vehicleDivs[i].addEventListener("click", function(){
            modalC.style.opacity = "1";
            modalC.style.visibility = "visible";
            modal.classList.toggle("modalClose");
            let vehicleData = vehicles.filter((vehicle) => {
                return vehicle.id === vehicleDivs[i].id
            });
            
            renderVehicle(vehicleData[0]);
        });
    }
}

//crea los div en función de cada personajes 
function createCharacter(character) {
    let nuevoElemento = document.createElement('div');
    nuevoElemento.id = character.id;
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = character.img;
    nuevoElemento.textContent += `${character.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData", "subDataCharacter");

    return nuevoElemento;
}

//crea los div en función de cada locación 
function createLocation(location) {
    let nuevoElemento = document.createElement('div');
    nuevoElemento.id = location.id; 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = location.img;
    nuevoElemento.textContent += `${location.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData", "subDataLocation");
    
    return nuevoElemento;
}

//crea los div en función de cada vehículo 
function createVehicle(vehicle) {
    let nuevoElemento = document.createElement('div'); 
    nuevoElemento.id = vehicle.id; 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = vehicle.img;
    nuevoElemento.textContent += `${vehicle.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData", "subDataVehicle");
    
    return nuevoElemento;
}

// ---------------------------------boton inicio del menu principal--------------
let principalBtn = document.getElementById("btnHeaderPrincipal");
let pagina2 = document.getElementById("pagina2");
let principalPage = document.getElementById("principalPage");
principalBtn.addEventListener("click", function(){ 
    pagina3.style.display = "none";
    pagina4.style.display = "none";  
    pagina2.style.display = "none";
    principalPage.style.display = "block";  
    location.reload();    
});

// ----------------botón nosotros del menú principal-------------------

let btnHeaderNosotros = document.getElementById("btnHeaderNosotros");
let pagina3 = document.getElementById("pagina3");
let pagina4 = document.getElementById("pagina4");


btnHeaderNosotros.addEventListener("click",()=> {
    principalPage.style.display = "none";
    pagina2.style.display = "none";
    pagina3.style.display = "block";
    pagina4.style.display = "none";
})

// ----------------botón gráficos del menú principal-------------------
let btnGraficas = document.getElementById("btnGraficas")
btnGraficas.addEventListener("click",()=> {
    principalPage.style.display = "none";
    pagina2.style.display = "none";
    pagina3.style.display = "none";
    pagina4.style.display = "block";
})


//----------------------------------render principal-------------------------------
function render(films) {
    let boxPoster = document.getElementById("boxPoster");
    let btnPortadasDivs = renderMovies(films, boxPoster); 
    addMovieCallbacks(btnPortadasDivs);  
    // console.log(renderMovies(films, boxPoster));
}

renderDirectorDropdown();
renderProducerDropdown();
renderYearDropdown();
render(films);
renderMovieDropdown(); 

// -------------------------------filters-----------------------------------------

// ----------genera el dorpdown de directores-----------
function renderDirectorDropdown() {
    let listDirector = document.getElementById("listDirector");    
    let uniqueDirectors = films.map(x => x.director).filter(
        (director, index, directors) => directors.indexOf(director) === index
    );
    let liElement = "";
    for(let i=0; i < uniqueDirectors.length; i++){
        liElement += `<li><a id="${uniqueDirectors[i]}">${uniqueDirectors[i]}</a></li>`
    }
    listDirector.innerHTML = liElement;
    addDirectorFilterCallback();
}

//filtra en función del director seleccionado 
function addDirectorFilterCallback(){
    let directors = document.getElementById("listDirector").children;    
    for(let i=0; i < directors.length; i++){
        directors[i].firstChild.addEventListener("click", function(e){            
            render(directorFilter(e.target.id));
        });
    }
}

// function directorFilter(director) {    
//     let filteredMovies = films.filter((film) => {
//         return film.director ===  director;
//     })
//     return filteredMovies
// }

// ---------------generar dropdows productores------------
function renderProducerDropdown() {
    let listProducer = document.getElementById("listProducer");
    let uniqueProducers = films.map(x => x.producer).filter(
        (producer, index, producers) => producers.indexOf(producer) === index
    );
    let liElement = "";
    for(let i=0; i < uniqueProducers.length; i++){
        liElement += `<li><a id="${uniqueProducers[i]}">${uniqueProducers[i]}</a></li>`
    }
    listProducer.innerHTML = liElement;
    addProducerFilterCallback();
}

//filtra en función del productor seleccionado 
function addProducerFilterCallback(){
    let producers = document.getElementById("listProducer").children;
    for(let i=0; i < producers.length; i++){
        producers[i].firstChild.addEventListener("click", function(e){
            render(producerFilter(e.target.id));
        });
    }
}

//----------------------boton pelicula del header---------------------
/* function renderMovieBtnMenu(films) {
    let listMovieBtn = document.getElementById("listaOcultaSegundaria");
    let listMovieByTitle = films.map(x => x.title);
       
    let listMovie = "";
    for(let i=0; i < listMovieByTitle.length; i++){
        listMovie += `<li><a id="${[i]}">${listMovieByTitle[i]}</a></li>`
    }
    listMovieBtn.innerHTML = listMovie;

    renderMovieDetail()
} */

// ---------------generar dropdows por Año------------
function renderYearDropdown() {
    let listYear = document.getElementById("listYear");
    let uniqueYears = films.map(x => x.release_date).filter(
        (year, index, years) => years.indexOf(year) === index//para que no se repitan los elementos
    );
    let liElement = "";
    for(let i=0; i < uniqueYears.length; i++){
        liElement += `<li><a id="${uniqueYears[i]}">${uniqueYears[i]}</a></li>`
    }
    listYear.innerHTML = liElement;
    addYearFilterCallback();
}

function addYearFilterCallback(){
    let years = document.getElementById("listYear").children;
    for(let i=0; i <  years.length; i++){
        years[i].firstChild.addEventListener("click", function(e){
            render(yearFilter(e.target.id));
        });
    }
}

// -------------------------------orderns-----------------------------------------
// ----------orden de a--z -----------

let a_z = document.getElementById("a_z");
a_z.addEventListener("click", function(){       
    
    let peliculasOrdenadasPorTitulo = films.sort((a,b) => {
        if (a.title < b.title) {
            return -1;
        }
        if (a.title > b.title) {
            return 1;
        }
        return 0;
    });
    render (peliculasOrdenadasPorTitulo);
        
});   

// ----------orden de z--a -----------
let z_a = document.getElementById("z_a");
z_a.addEventListener("click", function(){
    
    let peliculasOrdenadasPorTitulo = films.sort((a,b) => {
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    });
    render (peliculasOrdenadasPorTitulo);

});

// ----------orden por fecha de lanzamiento (mas antigua)-----------
let yearAsc = document.getElementById("yearAsc");
yearAsc.addEventListener("click", function(){
  
    let peliculasOrdenadasPorYear = films.sort((a,b) => {
        if (a.release_date < b.release_date) {
            return -1;
        }
        if (a.release_date > b.release_date) {
            return 1;
        }
        return 0;
    });

    render (peliculasOrdenadasPorYear);  

});

// ----------orden por fecha de lanzamiento (mas nueva)-----------
let yearDesc = document.getElementById("yearDesc");
yearDesc.addEventListener("click", function(){
  
    let peliculasOrdenadasPorYear = films.sort((a,b) => {
        if (a.release_date > b.release_date) {
            return -1;
        }
        if (a.release_date < b.release_date) {
            return 1;
        }
        return 0;
    });

    render (peliculasOrdenadasPorYear);  

});

// ----------orden por calificación (mayor puntaje)-----------
let mayorToMenor = document.getElementById("mayorToMenor");
mayorToMenor.addEventListener("click", function(){
    
    let peliculasOrdenadasPorcalificacion = films.sort((a,b) => {
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return 1;
        }
        return 0;
    });

    render (peliculasOrdenadasPorcalificacion);
});

// ----------orden por calificación (menor puntaje)-----------
let menorToMayor = document.getElementById("menorToMayor");
menorToMayor.addEventListener("click", function(){
    
    let peliculasOrdenadasPorcalificacion = films.sort((a,b) => {
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return 1;
        }
        return 0;
    });
    
    render (peliculasOrdenadasPorcalificacion);
});

// ---------------------------creando div para el boton de top scroll-----------------------------
let buttomScrollTop = document.getElementById("buttomScrollTop")

let creationButtomScrollTop="";
creationButtomScrollTop +=`<button id="btnScrollTop" class="btnScrollTop"><i class="fas fa-arrow-circle-up"></i></button>`     

buttomScrollTop.innerHTML=creationButtomScrollTop;

// -------------------------- boton de top scroll--------------------------------------------------

let btnScrollTop = document.getElementById("btnScrollTop");

document.addEventListener("scroll", handleScroll);

function handleScroll() {
  // do something on scroll

  var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  var GOLDEN_RATIO = 0.7;


  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
    //show button
    btnScrollTop.style.display = "block";
  } else {
    //hide button
    btnScrollTop.style.display = "none";
  }
}

btnScrollTop.addEventListener("click", function() {
    // window.scrollTo({
    //         top: 0;
    //         behavior: "smooth";
    //   });
      
    window.scrollTo({
            top: 0,
            behavior: "auto"
    })
});


//------------------botón películas del botón principal------------------

//------genera el dropdown de Peliculas-----
function renderMovieDropdown() {
    let listaOcultaSegundaria = document.getElementById("listaOcultaSegundaria");    
    let liElement = "";
    for(let i=0; i < films.length; i++){
        liElement += `<li><a id="${films[i].id}" class="peliculasList">${films[i].title}</a></li>`

    }
    listaOcultaSegundaria.innerHTML = liElement;
    addMoviesFilterCallback();
}

//-----pasa a render 2 en función de la película seleccionada -----

function addMoviesFilterCallback(){
    let movies = document.getElementById("listaOcultaSegundaria").children;   
    // console.log(movies);
    for(let i=0; i < movies.length; i++){
        movies[i].firstChild.addEventListener("click", function(e){   
            principalPage.style.display = "none" ; 
            pagina2.style.display = "block" ;
            renderMovieDetail((moviesFilter(e.target.id)[0]));                 
        });
    }      
}

// -----------------función del chart1-------------------
// let Chart = "";
// console.log(films.map(x => x.people[3]));
function totalCasesChart(ctx) {
    // eslint-disable-next-line no-undef
    new Chart(ctx, {
        type:"line",
        data: {
            labels: films.map(x => x.title),
            datasets:[{
                label: "Num datos",
                data:films.map(x => x.release_date).filter(
                    (year, index, years) => years.indexOf(year) === index//para que no se repitan los elementos
                ),
                //   data: ["1980","2000","2021"],
                borderColor:"orange",
                backgroundColor:[
                    'rgb(31, 152, 122)',
                ]
            }]
        },

        options : {
            title: {
                display: true,
                text: 'Peliculas de Studios Ghibli por año',
                fontSize: 300,
                padding:30,
                fontCoor: '#12619c',
                },
            // beginAtZero: false,
            legend : {
            position: 'bottom',
            labels: {
                padding: 20,
                boxWhidth:15,
                fontFamily: "system-ui",
                fontColor: "#345678",
            }
            }
        }      
    })
}


// -----------arrays de géneros por peliculas--------------
const arrayPeople = films.map(x => { return x.people;});
const gender =  arrayPeople.map((x) => {return x.map((elemt) => {return elemt.gender})});

// ----concatena todos los generos de cada pelicula en un array----
for (let i=0; i<gender.length;i++){
    gender[0] = gender[0].concat(gender[i])
}

// --------función que cuenta cuantas personas habían por género---- 
function arraySumByGender(datos_) {
    return datos_.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1,a), {});
}

let arrayConteoPorGeneros = arraySumByGender(gender[0])
delete arrayConteoPorGeneros["NA"];

// ------separando en arrays generos de cantidad de cantida de cada uno------------
let namesGender = Object.keys(arrayConteoPorGeneros);
let namesValueGender = Object.values(arrayConteoPorGeneros);

// -----------arrays de especies por peliculas--------------
const specie =  arrayPeople.map((x) => {return x.map((elemt) => {return elemt.specie})});
// console.log(specie);

// ----concatena todos los generos de cada pelicula en un array----
for (let i=0; i<specie.length;i++){
    specie[0] = specie[0].concat(specie[i])
}

// --------función que cuenta cuantas personas habían por género---- 
function arraySumBySpecie(datos_) {
    return datos_.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1,a), {});
}

let arrayConteoPorEspecie = arraySumBySpecie(specie[0])
// delete arrayConteoPorEspecie["NA"];
// console.log(arrayConteoPorEspecie);

// ------separando en arrays generos de cantidad de cantida de cada uno------------
let namesSpecie = Object.keys(arrayConteoPorEspecie);
let namesValueSpecie = Object.values(arrayConteoPorEspecie);

// ----------función del chart 2-------------------
function totalCasesChart2(ctx2) {
    // eslint-disable-next-line no-undef
    new Chart(ctx2, {
        type:"pie",
        data: {
            labels:namesGender,
            datasets:[{
                label: "Num datos",
                data:namesValueGender,
                //   data: ["1980","2000","2021"],
                borderColor:"orange",
                backgroundColor:[
                    'rgb(20, 143, 119)',
                    'rgb(244, 208, 63)',
                    'rgb(31, 97, 141)',
                    'rgb(245, 183, 177)',
                ]
            }]
        },             
    })
}
// ----------colores Random-------------------------
let graphColors = [];
let internalDataLength = namesSpecie;
let i = 0;
while (i <= internalDataLength.length) {
    var randomR = Math.floor((Math.random() * 130) + 100);
    var randomG = Math.floor((Math.random() * 130) + 100);
    var randomB = Math.floor((Math.random() * 130) + 100);
  
    var graphBackground = "rgb(" 
            + randomR + ", " 
            + randomG + ", " 
            + randomB + ")";
    graphColors.push(graphBackground);
    i++;
} 

// ----------función del chart 3-------------------
function totalCasesChart3(ctx3) {
    // eslint-disable-next-line no-undef
    new Chart(ctx3, {
        type:"doughnut",
        data: {
            labels:namesSpecie,
            datasets:[{
                label: "Num datos",
                data:namesValueSpecie,
                //   data: ["1980","2000","2021"],
                borderColor:"orange",
                backgroundColor:
                    graphColors,
            }]
        },             
    })
}

// ----------función que renderiza las gráficas-------------------
function renderChart() {
    const ctx =  document.getElementById("myChart").getContext("2d");
    const ctx2 =  document.getElementById("myChart2").getContext("2d");
    const ctx3 =  document.getElementById("myChart3").getContext("2d");
    totalCasesChart(ctx);
    totalCasesChart2(ctx2);
    totalCasesChart3(ctx3);
}
renderChart();



    








            
            
            