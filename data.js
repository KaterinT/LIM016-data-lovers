// estas funciones son de ejemplo
import data from './data/ghibli/ghibli.js';
const films = data.films;

//-----------------------------FILTER----------------------------------------
//---------------------------filter by director----------------------------
export const directorFilter = (director) => {       
  return films.filter((film) => {
    return film.director ===  director;
  });    
};

//---------------------------filter by producer----------------------------
export const producerFilter = (producer) => {
  return films.filter((film) => {
    return film.producer ===  producer;
  });
};

//---------------------------filter by movie----------------------------
export const moviesFilter = (movieId) => {
  return films.filter((film) => {
    return film.id === movieId;
  });
};

//---------------------------filter by release date----------------------------
export const  yearFilter = (release_date) => {
  return films.filter((film) => {
    return film.release_date === release_date;
  });
}

//-----------------------------ORDER-----------------------------------
//---------------------order alfabético de la a--z ---------------------
export const orderAz = (films) => {      
  return films.sort((a,b) => {
    if (a.title < b.title) {
      return -1;
    }
    if (a.title > b.title) {
      return 1;
    }
    return 0;
  }); 
    
}

//---------------------order alfabético de la z--a ---------------------
export const orderZa = (films) => {      
  return films.sort((a,b) => {
    if (a.title > b.title) {
      return -1;
    }
    if (a.title < b.title) {
      return 1;
    }
    return 0;
  }); 
    
}

// ----------orden por fecha de lanzamiento (mas antigua)-----------
export const orderYearAsc = (films) => {      
  return films.sort((a,b) => {
    if (a.release_date < b.release_date) {
        return -1;
    }
    if (a.release_date > b.release_date) {
        return 1;
    }
    return 0;
  });
    
}

// ----------orden por fecha de lanzamiento (mas nueva)-----------
export const orderYearDesc= (films) => {
  return films.sort((a,b) => {
    if (a.release_date > b.release_date) {
        return -1;
    }
    if (a.release_date < b.release_date) {
        return 1;
    }
    return 0;
  });
}

//----------orden por calificación (Mayor puntaje)-----------
export const mayorPuntaje = (films) => {
  return films.sort((a,b) => {
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
        return -1;
    }
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
        return 1;
    } 
    return 0;
  });
  
};

//----------orden por calificación (menor puntaje)-----------
export const menorPuntaje = (films) => {
  return films.sort((a,b) => {
    if (parseInt(a.rt_score) < parseInt(b.rt_score)) {
        return -1;
    }
    if (parseInt(a.rt_score) > parseInt(b.rt_score)) {
        return 1;
    } 
    return 0;
  });
  
};





