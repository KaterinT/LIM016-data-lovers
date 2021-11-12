// import { conditionalExpression } from '@babel/types';
/* import { example } from './data.js'; */

import data from './data/ghibli/ghibli.js';

//interacción con el DOM
let btnImagenes = document.getElementsByClassName("portada");
let principalBtn = document.getElementById("btnHeaderPrincipal");
let pagina2 =  document.getElementById("pagina2");
let principalPage = document.getElementById("principalPage");
let textPage2 = document.getElementById("textPage2");
let textPage3 = document.getElementById("textPage3");
let textPage4 = document.getElementById("textPage4");
let textPage5 = document.getElementById("textPage5");
let textPage6 = document.getElementById("textPage6");
let textPage7 = document.getElementById("textPage7");
let textPage8 = document.getElementById("textPage8");
let contenidoPagePersonajes = document.getElementById("contenidoPagePersonajes");
let contenidoPageLocaciones = document.getElementById("contenidoPageLocaciones");
let contenidoPageVehiculos = document.getElementById("contenidoPageVehiculos");

let dataPeliculas = data.films;
let tituloPeliculas = dataPeliculas.map(x => x.title);
let descriptionPelicula = dataPeliculas.map(x => x.description);
let directorPelicula = dataPeliculas.map(x => x.director);
let producerPelicula = dataPeliculas.map(x => x.producer);
let poster = dataPeliculas.map(x => x.poster);
let release_date = dataPeliculas.map(x => x.release_date);
let rt_score = dataPeliculas.map(x => x.rt_score);
let personajesPelicula = dataPeliculas.map(x => x.people);
let locacionesPelicula = dataPeliculas.map(x => x.locations);
let vehiculosPelicula = dataPeliculas.map(x => x.vehicles);

// genera las portadas de los catálogos dinamicamente 
let list='';
let i = 1;
dataPeliculas.forEach( (obj) => {
    list +=`
    <div class="portada">
        <button id= "btnPortada${[i]}">
        <img src="${obj.poster}" alt="">                
        </button>
        <div class="textoImg" id= "">${obj.title}</div>
    </div>`
    document.getElementById("boxPoster").innerHTML = list;
    i++;  

});

// ordenado alfabético ascendente
let a_z = document.getElementById("a_z");
a_z.addEventListener("click",() => {
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";
    
    let peliculasOrdenadasPorTitulo = dataPeliculas.sort((a,b) => {
        if (a.title < b.title) { return -1;}
        if (a.title > b.title) { return 1;}
        return 0;
    }) 
        
    let list='';
    let i = 1;

    peliculasOrdenadasPorTitulo.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        boxPosterFilter.innerHTML = list;
        i++;  
        
    });      
    /* crearVista2(peliculasOrdenadasPorTitulo); */
    
}); 

// ordenado alfabético descendente
let z_a = document.getElementById("z_a");
z_a.addEventListener("click", () => {
    
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorTitulo = dataPeliculas.sort((a,b) => {
        if (a.title > b.title) {
            return -1;
        }
        if (a.title < b.title) {
            return 1;
        }
        return 0;
    }) 
    
    
    let list='';
    let i = 1;

    peliculasOrdenadasPorTitulo.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        boxPosterFilter.innerHTML = list;
        i++;        
    });
})

// ordenado cronológico ascendente
let yearAsc = document.getElementById("yearAsc");
yearAsc.addEventListener("click",() => {
    /* console.log(release_date.sort()) */
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorYear = dataPeliculas.sort((a,b) => {
        if (a.release_date < b.release_date) {
            return -1;
        }
        if (a.release_date > b.release_date) {
            return 1;
        }
        return 0;
    }) 
    /* console.log(peliculasOrdenadasPorYear); */
    
    let list='';
    let i = 1;

    peliculasOrdenadasPorYear.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        boxPosterFilter.innerHTML = list;
        i++;        
    });


})

// ordenado cronológico descendente
let yearDesc = document.getElementById("yearDesc");
yearDesc.addEventListener("click", () => {
    /* console.log(tituloPeliculas.reverse()) */
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorYear = dataPeliculas.sort((a,b) => {
        if (a.release_date > b.release_date) {
            return -1;
        }
        if (a.release_date < b.release_date) {
            return 1;
        }
        return 0;
    }) 
    /* console.log(peliculasOrdenadasPorYear); */
    
    let list='';
    let i = 1;
 
    peliculasOrdenadasPorYear.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        boxPosterFilter.innerHTML = list;
        i++;        
    });
})

//ordenado por calificación de Mayor a menor
let mayorToMenor = document.getElementById("mayorToMenor");
mayorToMenor.addEventListener("click", () => {
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorcalificacion = dataPeliculas.sort((a,b) => {
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return 1;
        }
        return 0;
    }) 
    
    let list='';
    let i = 1;

    peliculasOrdenadasPorcalificacion.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        boxPosterFilter.innerHTML = list;
        i++;        
    });

})

//ordenado por calificación de menor a Mayor
let menorToMayor = document.getElementById("menorToMayor");
menorToMayor.addEventListener("click", () => {
    let boxPoster = document.getElementById("boxPoster");
    let boxPosterFilter = document.getElementById("boxPosterFilter");   
    boxPoster.style.display= "none";
    boxPosterFilter.style.display= " ";

    let peliculasOrdenadasPorcalificacion = dataPeliculas.sort((a,b) => {
        if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
            return -1;
        }
        if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
            return 1;
        }
        return 0;
    }) 
    
    let list='';
    let i = 1;

    peliculasOrdenadasPorcalificacion.forEach( (obj) => {
        list +=`
        <div class="portada">
            <button id= "btnPortada${[i]}">
            <img src="${obj.poster}" alt="">                
            </button>
            <div class="textoImg" id= "">${obj.title}</div>
        </div>`
        boxPosterFilter.innerHTML = list;
        i++;        
    });


})

//crea que catálogo con las imagenes de "personajes", "locaciones" y "vehículos"

for (let i=0; i< btnImagenes.length; i++) {
    
    btnImagenes[i].addEventListener("click",function() {
        let characters = personajesPelicula[i];
        let locations = locacionesPelicula[i];
        let vehicles = vehiculosPelicula[i];
        // ocultar la primera vista y despliega la segunda
        principalPage.style.display = "none" ; 
        pagina2.style.display = "block" ;
        // generar lo daros basicos de la película selecionada
        textPage6.innerHTML = '<img src ='+ poster[i]+'>';
        textPage2.innerHTML = "Título: " + tituloPeliculas[i];
        textPage3.innerHTML = "Sinopsis: " + descriptionPelicula[i];
        textPage4.innerHTML = "Director: " + directorPelicula[i];
        textPage5.innerHTML = "Productor: " + producerPelicula[i];
        textPage7.innerHTML = "Fecha de lanzamiento: " + release_date[i];
        textPage8.innerHTML = "Puntaje: " + rt_score[i] + "/100";     
        // crear el catalogo de personajes
        for(let j = 0; j < characters.length; j++) {
           contenidoPagePersonajes.appendChild(createCharacter(characters[j]));           
        }  
        // crear el catalogo de locaciones
        for(let k = 0; k < locations.length; k++) {
            contenidoPageLocaciones.appendChild(createLocation(locations[k])); 
            /* if (locations !== ""){
                contenidoPageLocaciones.appendChild(createLocation(locations[k]));  
            } 
            else{
                contenidoPageLocaciones.innerHTML = "En esta película no es destacan locaciones espefíficas";
            }  */
                     
        } 
        // crear el catalogo de vehículos
        for(let l = 0; l < vehicles.length; l++) {
            contenidoPageVehiculos.appendChild(createVehicles(vehicles[l]));
            /* if (vehicles !== ""){
                contenidoPageVehiculos.appendChild(createVehicles(vehicles[l]));
            } 
            else{
                contenidoPageVehiculos.innerHTML = "En esta película no es destacan vehículos espefíficos";
                                
            }      */         
        }     
    }); 
}


/* 
function crearVista2 () {
    
    for (let i=0; i< btnImagenes.length; i++) {
        btnImagenes[i].addEventListener("click",function() {
            principalPage.style.display = "none" ; 
            pagina2.style.display = "block" ;
            // generar lo daros basicos de la película selecionada
            textPage6.innerHTML = '<img src ='+ poster[i]+'>';
            textPage2.innerHTML = "Título: " + tituloPeliculas[i];
            textPage3.innerHTML = "Sinopsis: " + descriptionPelicula[i];
            textPage4.innerHTML = "Director: " + directorPelicula[i];
            textPage5.innerHTML = "Productor: " + producerPelicula[i];
            textPage7.innerHTML = "Fecha de lanzamiento: " + release_date[i];
            textPage8.innerHTML = "Puntaje: " + rt_score[i] + "/100"; 
        });   
    }    
}
 */
 
//botones del header
principalBtn.addEventListener("click", function(){    
    pagina2.style.display = "none";
    principalPage.style.display = "block";    
});
//--------------------------------------------------
//crea los div en función de cada caracter 
function createCharacter(character) {
    let nuevoElemento = document.createElement('div'); 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = character.img;
    nuevoElemento.textContent += `${character.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData");
    
    return nuevoElemento;
}

//crea los div en función de cada locación 
function createLocation(locations) {
    let nuevoElemento = document.createElement('div'); 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = locations.img;
    nuevoElemento.textContent += `${locations.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData");
    
    return nuevoElemento;
}

//crea los div en función de cada vehículo 
function createVehicles(vehicles) {
    let nuevoElemento = document.createElement('div'); 
    let nuevoElementoImg = document.createElement('img');
    nuevoElementoImg.src = vehicles.img;
    nuevoElemento.textContent += `${vehicles.name}:`
    nuevoElemento.appendChild(nuevoElementoImg);
    nuevoElemento.classList.add("contenedorSubData");
    
    return nuevoElemento;
}

// reacción y funcionalidad del modal
let cerrar = document.getElementById("close");
let abrir = document.getElementById("cta");
let modal = document.getElementById("modal");
let modalC = document.getElementById("modalCont");

abrir.addEventListener("click", function(e){
    e.preventDefault();
    modalC.style.opacity = "1";
    modalC.style.visibility = "visible";
    modal.classList.toggle("modalClose");
});

cerrar.addEventListener("click", function(){
    modal.classList.toggle("modalClose");
  
    setTimeout(function(){
        modalC.style.opacity = "0";
        modalC.style.visibility = "hidden";
    },900);
});

window.addEventListener("click", function(e){
    this.console.log(e.target); // esto nos indica que estamos seleccionando por medio de la consola
    if (e.target == modalC){
        modal.classList.toggle("modalClose");       
        setTimeout(function(){
            modalC.style.opacity = "0";
            modalC.style.visibility = "hidden";
        },900);
    }
});

/* console.log(example, data); */


