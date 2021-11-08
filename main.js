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


// let list='';
// let i = 0;
// dataPeliculas.forEach( (obj) => {
//         list += `
//         <div class="portada_prueba ${[i]}">
//             <button id= "btnPortada ${[i]}">
//             <img src=" ${obj.poster}" alt="">                
//             </button>
//             <div class="textoImg" id= "">${obj.title}</div>
//         </div>`
//         document.getElementById("contenidoPagePersonajes").innerHTML=list;
//         i++;

// });

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

for (let i=0; i< btnImagenes.length; i++) {
    //Añades un evento a cada elemento
    btnImagenes[i].addEventListener("click",function() {
        let characters = personajesPelicula[i];
        let locations = locacionesPelicula[i];
        let vehicles = vehiculosPelicula[i];
       //Aquí la función que se ejecutará cuando se dispare el evento
       principalPage.style.display = "none" ; //En este caso ocultaremos el contenido que se encuentra en "principalPage" al darle click al botón de imagen cliqueado
       pagina2.style.display = "block" ;//En este caso mostraremos la página2 al darle click al botón de imagen cliqueado
       textPage6.innerHTML = '<img src ='+ poster[i]+'>';
       textPage2.innerHTML = "Título: " + tituloPeliculas[i];
       textPage3.innerHTML = "Sinopsis: " + descriptionPelicula[i];
       textPage4.innerHTML = "Director: " + directorPelicula[i];
       textPage5.innerHTML = "Productor: " + producerPelicula[i];
       textPage7.innerHTML = "Fecha de lanzamiento: " + release_date[i];
       textPage8.innerHTML = "Puntaje: " + rt_score[i] + "/100";     

        for(let j = 0; j < characters.length; j++) {
           contenidoPagePersonajes.appendChild(createCharacter(characters[j]));           
        }  
        
        for(let k = 0; k < locations.length; k++) {
            contenidoPageLocaciones.appendChild(createLocation(locations[k])); 
            /* if (locations !== ""){
                contenidoPageLocaciones.appendChild(createLocation(locations[k]));  
            } 
            else{
                contenidoPageLocaciones.innerHTML = "En esta película no es destacan locaciones espefíficas";
            }  */
                      
        } 

        for(let l = 0; l < vehicles.length; l++) {
            contenidoPageVehiculos.appendChild(createVehicles(vehicles[l]));
            /* if (vehicles !== ""){
                contenidoPageVehiculos.appendChild(createVehicles(vehicles[l]));
            } 
            else{
                contenidoPageVehiculos.innerHTML = "En esta película no es destacan vehículos espefíficos";
                                
            }     */             
        }         
       
    }); 
    
}

//botones del header
principalBtn.addEventListener("click", function(){    
    pagina2.style.display = "none";
    principalPage.style.display = "block";    
});
// _________________________________________________________
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


/* console.log(example, data); */


