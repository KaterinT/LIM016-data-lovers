/* import { conditionalExpression } from '@babel/types'; */

import { directorFilter } from './data.js';
import { moviesFilter } from './data.js';
import { producerFilter } from './data.js';
import { yearFilter } from './data.js';
import { orderAz } from './data.js';
import { orderZa } from './data.js';
import { orderYearAsc } from './data.js';
import { orderYearDesc } from './data.js';
import { mayorPuntaje } from './data.js';
import { menorPuntaje } from './data.js';
import data from './data/ghibli/ghibli.js';

// console.log((data));
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
                <p><span class="modalDetails">Name:</span> ${character.name}</p><br>
                <p><span class="modalDetails">Gender:</span> ${character.gender}</p><br>
                <p><span class="modalDetails">Age:</span> ${character.age}</p><br>
                <p><span class="modalDetails">Eye color:</span> ${character.eye_color}</p><br>
                <p><span class="modalDetails">Hair color:</span> ${character.hair_color}</p><br>
                <p><span class="modalDetails">Specie:</span> ${character.specie}</p>        
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
                <p><span class="modalDetails">Name:</span> ${location.name}</p><br>
                <p><span class="modalDetails">Climate:</span> ${location.climate}</p><br>
                <p><span class="modalDetails">Terrain:</span> ${location.terrain}</p><br>
                <p><span class="modalDetails">Surface water:</span> ${location.surface_water}</p><br>    
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
                <p><span class="modalDetails">Name:</span> ${vehicle.name}</p><br>
                <p><span class="modalDetails">Description:</span> ${vehicle.description}</p><br>
                <p><span class="modalDetails">Vehicle Class:</span> ${vehicle.vehicle_class}</p><br>
                <p><span class="modalDetails">Length:</span> ${vehicle.length}</p><br>    
                <p><span class="modalDetails">Pilot Name:</span>${vehicle.pilot.name}</p><br> 
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

    pagina3.style.display = "none" ; 
    pagina4.style.display = "none" ; 
    contenidoPagePersonajes.innerHTML = "";
    contenidoPageLocaciones.innerHTML = "";
    contenidoPageVehiculos.innerHTML = "";

    // generar lo datos basicos de la película selecionada
    let contentMovie =`
        <div class="contentImagPage2" id="textPage6"><img src="${movie.poster}"></div>
        <div class="contentMovie">
            <div class="titlePage2" id="textpage2"><span class="contentPage2title">${movie.title}</span></div>
            <div class="contentPage2" id="textpage3">${movie.description} </div>
            <div class="contentPage2" id="textpage4"><span class="contentPage2Subtitle">Director:</span>${movie.director}</div>
            <div class="contentPage2" id="textpage5"><span class="contentPage2Subtitle">Productor:</span> ${movie.producer}</div>
            <div class="contentPage2" id="textpage7"><span class="contentPage2Subtitle">Año:</span>${movie.release_date} </div>
            <div class="contentPage2" id="textpage8"><span class="contentPage2Subtitle">Puntaje:</span>${movie.rt_score}/100</div>
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
            let movie = films.filter( (film) => {
                return film.id === btnMovies[i].id;
            });
            principalPage.style.display = "none" ; 
            pagina3.style.display = "none" ; 
            pagina4.style.display = "none" ;        
            pagina2.style.display = "block" ;
            renderMovieDetail(movie[0]);
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
    pagina4.style.display = "none";
    pagina3.style.display = "none";     
    pagina2.style.display = "none";
    principalPage.style.display = "block";  
    location.reload();    
});

// ---------------------------------boton peliculas del menu principal---------------
function renderMovieDropdown() {
    let listaOcultaSegundaria = document.getElementById("listaOcultaSegundaria");
    let liElement = "";
    for(let i=0; i < films.length; i++){
        liElement += `<li><a id="${films[i].id}">${films[i].title}</a></li>`
    }
    listaOcultaSegundaria.innerHTML = liElement;
    addMoviesFilterCallback();
}

function addMoviesFilterCallback(){
    let movies = document.getElementById("listaOcultaSegundaria").children;
    for(let i=0; i < movies.length; i++){
        movies[i].firstChild.addEventListener("click", function(e){
            principalPage.style.display = "none";
            pagina2.style.display = "block";
            pagina3.style.display = "none";
            pagina4.style.display = "none";
            renderMovieDetail((moviesFilter(e.target.id)[0]));
        });
    }
}

//----------------------------------boton categorías del menu principal------------
let pagina3 = document.getElementById("pagina3");
let btnHeaderCategorias = document.getElementById("btnHeaderCategorias").children;
for(let i=0; i < btnHeaderCategorias.length; i++){
    btnHeaderCategorias[i].firstChild.addEventListener("click", function(){
        pagina4.style.display = "none";
        pagina3.style.display = "block";
        pagina2.style.display = "none";
        principalPage.style.display = "none";  
    });
}

//----------------------------------boton gráficas del menu principal------------
let pagina4 = document.getElementById("pagina4");
let graficasBtn = document.getElementById("btnGraficas");
graficasBtn.addEventListener("click", function(){   
    pagina4.style.display = "block";
    pagina3.style.display = "none";
    pagina2.style.display = "none";
    principalPage.style.display = "none";      
});

//----------------------------------render principal-------------------------------
function render(films) {
    let boxPoster = document.getElementById("boxPoster");
    let btnPortadasDivs = renderMovies(films, boxPoster); 
    addMovieCallbacks(btnPortadasDivs);  
    
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

/* function directorFilter(director) {    
    let filteredMovies = films.filter((film) => {
        return film.director ===  director;
    })
    return filteredMovies
}*/

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

/* function producerFilter(producer) {
    let filteredMovies = films.filter((film) => {
        return film.producer ===  producer;
    });
    return filteredMovies
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
    render (orderAz(films));     
        
});   

// ----------orden de z--a -----------
let z_a = document.getElementById("z_a");
z_a.addEventListener("click", function(){
    render (orderZa(films));
     
});

// ----------orden por fecha de lanzamiento (mas antigua)-----------
let yearAsc = document.getElementById("yearAsc");
yearAsc.addEventListener("click", function(){
    render (orderYearAsc(films));   
   
});

// ----------orden por fecha de lanzamiento (mas nueva)-----------
let yearDesc = document.getElementById("yearDesc");
yearDesc.addEventListener("click", function(){
    render (orderYearDesc (films)); 
});

// ----------orden por calificación (mayor puntaje)-----------
let mayorToMenor = document.getElementById("mayorToMenor");
mayorToMenor.addEventListener("click", function(){
    render (mayorPuntaje(films));
});

// ----------orden por calificación (menor puntaje)-----------
let menorToMayor = document.getElementById("menorToMayor");
menorToMayor.addEventListener("click", function(){       
    render (menorPuntaje(films));
      
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
    var scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var GOLDEN_RATIO = 0.5;

    if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
        // btnScrollTop.style.display = "block";   //show button

    // } else {
        //hide button
//         btnScrollTop.style.display = "none";
//   }
        if(!btnScrollTop.classList.contains("showScrollBtn"))
        btnScrollTop.classList.add("showScrollBtn")
        } else {
        //hide button
        if(btnScrollTop.classList.contains("showScrollBtn"))
        btnScrollTop.classList.remove("showScrollBtn")
        }
}
btnScrollTop.addEventListener("click", function() {      
    window.scrollTo({
            top: 0,
            behavior: "smooth"
    })
});

//------------------------barra de busqueda-------------------------------
let cardFilter =document.getElementById("cardFilter");
cardFilter.addEventListener("keyup", e => {    
    let resultSearch = films.filter((film) => {
        return film.title.toLowerCase().includes(e.target.value.toLowerCase());
    });       
    render(resultSearch);
});

//------------------------sección de category-------------------------
let uniqueCategories = [];

function RenderCategory(){ 
    uniqueCategories = films.map(x => x.category).filter(
    (category, index, categories) => categories.indexOf(category) === index
    );

    uniqueCategories.forEach( (category) => {
        let categoryMovies = films.filter((film) => {
            return film.category === category
        });
        
        let htmlLocation = document.getElementById(category);       
        let btnPortadas = renderMovies(categoryMovies, htmlLocation);        
        addMovieCallbacks(btnPortadas);            
    });  
   
}
RenderCategory();

// ----------colores Random-------------------------
let graphColors = [];
function coloresRandom (valor) {

    for (let i = 0; i <= valor.length; i++) {
        var randomR = Math.floor((Math.random() * 130) + 100);
        var randomG = Math.floor((Math.random() * 130) + 100);
        var randomB = Math.floor((Math.random() * 130) + 100);
    
        var graphBackground = "rgb(" 
                + randomR + ", " 
                + randomG + ", " 
                + randomB + ")";
        graphColors.push(graphBackground);
} 
    return graphColors;
}

// -----------------función del chart1-------------------
function totalCasesChart(ctx) {
    // eslint-disable-next-line no-undef
    new Chart(ctx, {
        type:"line",
        data: {
            labels: films.map(x => x.title),
            datasets:[{
                label: "Movies",
                data:films.map(x => x.release_date),
                
                borderColor:"#B1D51A",
                backgroundColor:[
                    'rgb(31, 152, 122)',
                ]
            }]
        },
    })
}

// -----------arrays de géneros por peliculas--------------
const arrayPeople = films.map(x => x.people);
const gender =  arrayPeople.map((x) =>x.map((elemt) => elemt.gender));

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

// ------separando en arrays generos de cantidad de cantida(n°) de cada uno------------
let namesGender = Object.keys(arrayConteoPorGeneros);
let namesValueGender = Object.values(arrayConteoPorGeneros);

// -----------arrays de especies por peliculas--------------
const specie =  arrayPeople.map((x) => x.map((elemt) => elemt.specie));

// ----concatena todas las especies de cada pelicula en un array----
for (let i=0; i<specie.length;i++){
    specie[0] = specie[0].concat(specie[i])
}

// --------función que cuenta cuantas personas habían por especie---- 
function arraySumBySpecie(datos_) {
    return datos_.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1,a), {});
}
let arrayConteoPorEspecie = arraySumBySpecie(specie[0])

// ------separando en arrays las especies de cantidad de cantida(n°) de cada uno------------
let namesSpecie = Object.keys(arrayConteoPorEspecie);
let namesValueSpecie = Object.values(arrayConteoPorEspecie);

// ----concatena todas las categorias de cada pelicula en un array----
const arrayCategory= films.map(x => x.category);
for (let i=0; i<arrayCategory.length;i++){
    arrayCategory[0] = arrayCategory[i];
}
// console.log(arrayCategory);

// --------función que cuenta cuantos hay por categorias---- 
function arraysSumByCategory(datos_) {
    return datos_.reduce((a, d) => (a[d] ? a[d] += 1 : a[d] = 1,a), {});
}
let arrayConteoPorCategory = arraysSumByCategory(arrayCategory);

// ------separando en arrays categoria de cantidad de cantida(n°) de cada uno------------
let namesCategory = Object.keys(arrayConteoPorCategory);
let namesValueCategory = Object.values(arrayConteoPorCategory);

// -----------colores Random por Gráfica---------
let colorRandomChart2 = coloresRandom(namesGender);
let colorRandomChart3 = coloresRandom(namesSpecie);
let colorRandomChart4 = coloresRandom(namesCategory);

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
                borderColor:"#607b7f",
                backgroundColor:
                    colorRandomChart2,
            }],
            options : {
                // maintainAspectRatio:false,
            },
        },             
    })
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
                
                borderColor:"#607b7f",
                backgroundColor:
                colorRandomChart3,
            }],
        },             
    })
}

// ----------función del chart 4-------------------
function totalCasesChart4(ctx4) {
    // eslint-disable-next-line no-undef
    new Chart(ctx4, {
        type:"doughnut",
        data: {
            labels:namesCategory,
            datasets:[{
                label: "Categorias",
                data:namesValueCategory,
                borderColor:"#607b7f",
                backgroundColor:
                colorRandomChart4,
            }],
        },             
    })
}

// ----------función que renderiza las gráficas-------------------
function renderChart() {
    
    const ctx =  document.getElementById("myChart").getContext("2d");
    const ctx2 =  document.getElementById("myChart2").getContext("2d");
    const ctx3 =  document.getElementById("myChart3").getContext("2d");
    const ctx4 =  document.getElementById("myChart4").getContext("2d");
    totalCasesChart(ctx);
    totalCasesChart2(ctx2);
    totalCasesChart3(ctx3);
    totalCasesChart4(ctx4);
}
renderChart();





    








            
            
            
