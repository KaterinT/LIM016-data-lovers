import { directorFilter, producerFilter, moviesFilter, yearFilter, orderAz, orderZa, orderYearAsc, orderYearDesc, mayorPuntaje, menorPuntaje } from '../src/data.js';

describe('directorFilter', () => {  
  it('is a function', () => {
    expect(typeof directorFilter).toBe('function');
  });

  it('filtrar las peliculas que tienen como director a Hayao Miyazaki`', () => {
    let result = { director: "Hayao Miyazaki" };    
    expect(directorFilter("Hayao Miyazaki")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));    
  });
  it('filtrar las peliculas que tienen como director a Isao Takahata`', () => {
    let result = { director: "Isao Takahata" };    
    expect(directorFilter("Isao Takahata")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('filtrar las peliculas que tienen como director a Yoshifumi Kondō`', () => {
    let result = { director: "Yoshifumi Kondō" };    
    expect(directorFilter("Yoshifumi Kondō")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('filtrar las peliculas que tienen como director a Hiroyuki Morita`', () => {
    let result = { director: "Hiroyuki Morita" };    
    expect(directorFilter("Hiroyuki Morita")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('filtrar las peliculas que tienen como director a Gorō Miyazaki`', () => {
    let result = { director: "Gorō Miyazaki" };    
    expect(directorFilter("Gorō Miyazaki")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('filtrar las peliculas que tienen como director a Hiromasa Yonebayashi`', () => {
    let result = { director: "Hiromasa Yonebayashi" };    
    expect(directorFilter("Hiromasa Yonebayashi")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
});

describe('producerFilter', () => {  
  it('is a function', () => {
    expect(typeof producerFilter).toBe('function');
  });
  it('filtrar las peliculas que tienen como productor a Isao Takahata`', () => {
    let result = { producer: "Isao Takahata" };    
    expect(producerFilter("Isao Takahata")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
  it('filtrar las peliculas que tienen como productor a Hayao Miyazaki`', () => {
    let result = { producer: "Hayao Miyazaki" };    
    expect(producerFilter("Hayao Miyazaki")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('filtrar las peliculas que tienen como productor a Toru Hara`', () => {
    let result = { producer: "Toru Hara" };    
    expect(producerFilter("Toru Hara")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('filtrar las peliculas que tienen como productor a Toshio Suzuki`', () => {
    let result = { producer: "Toshio Suzuki" };    
    expect(producerFilter("Toshio Suzuki")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('filtrar las peliculas que tienen como productor a Yoshiaki Nishimurai`', () => {
    let result = { producer: "Yoshiaki Nishimura" };    
    expect(producerFilter("Yoshiaki Nishimura")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
});

describe('moviesFilter', () => {  
  it('is a function', () => {
    expect(typeof moviesFilter).toBe('function');
  });
  it('encontrar la película que tenga el mismo id`', () => {
    let result = { id: "2baf70d1-42bb-4437-b551-e5fed5a87abe" };    
    expect(moviesFilter("2baf70d1-42bb-4437-b551-e5fed5a87abe")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
  it('encontrar la película que tenga el mismo id`', () => {
    let result = { id: "58611129-2dbc-4a81-a72f-77ddfc1b1b49" };    
    expect(moviesFilter("58611129-2dbc-4a81-a72f-77ddfc1b1b49")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
  it('encontrar la película que tenga el mismo id`', () => {
    let result = { id: "ea660b10-85c4-4ae3-8a5f-41cea3648e3e" };    
    expect(moviesFilter("ea660b10-85c4-4ae3-8a5f-41cea3648e3e")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
  it('encontrar la película que tenga el mismo id`', () => {
    let result = { id: "12cfb892-aac0-4c5b-94af-521852e46d6a" };    
    expect(moviesFilter("12cfb892-aac0-4c5b-94af-521852e46d6a")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
  it('encontrar la película que tenga el mismo id`', () => {
    let result = { id: "4e236f34-b981-41c3-8c65-f8c9000b94e7" };    
    expect(moviesFilter("4e236f34-b981-41c3-8c65-f8c9000b94e7")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
  it('encontrar la película que tenga el mismo id`', () => {
    let result = { id: "ebbb6b7c-945c-41ee-a792-de0e43191bd8" };    
    expect(moviesFilter("ebbb6b7c-945c-41ee-a792-de0e43191bd8")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
});

describe('yearFilter', () => {  
  it('is a function', () => {
    expect(typeof yearFilter).toBe('function');
  });
  it('encontrar la pelicula realizada en un año específico 1986`', () => {
    let result = { release_date: "1986" };
    expect(yearFilter("1986")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });  
  it('encontrar la pelicula realizada en un año específico 1991`', () => {
    let result = { release_date: "1991" };
    expect(yearFilter("1991")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('encontrar la pelicula realizada en un año específico 1995`', () => {
    let result = { release_date: "1995" };
    expect(yearFilter("1995")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('encontrar la pelicula realizada en un año específico 1999`', () => {
    let result = { release_date: "1999" };
    expect(yearFilter("1999")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
  it('encontrar la pelicula realizada en un año específico 2001`', () => {
    let result = { release_date: "2001" };
    expect(yearFilter("2001")).toEqual(expect.arrayContaining([expect.objectContaining(result)]));
  });
});

describe('orderAz', () => {  
  it('is a function', () => {
    expect(typeof orderAz).toBe('function');
  });  
  it('genero un arreglo ordenado alfabeticamente de la A a la Z`', () => {
    let input = [{title: "Castle in the Sky"}, {title: "Pom Poko"}, {title: "My Neighbor Totoro"}];
    let output = [{title: "Castle in the Sky"}, {title: "My Neighbor Totoro"}, {title: "Pom Poko"}]
    let result = orderAz(input);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toStrictEqual(output);
  });  
});

describe('orderZa', () => {  
  it('is a function', () => {
    expect(typeof orderZa).toBe('function');
  });
  it('genero un arreglo ordenado alfabeticamente de la Z a la A`', () => {
    let input = [{title: "Castle in the Sky"}, {title: "Pom Poko"}, {title: "My Neighbor Totoro"}];
    let output = [{title: "Pom Poko"}, {title: "My Neighbor Totoro"}, {title: "Castle in the Sky"}];
    let result = orderZa(input);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toStrictEqual(output);
  });  
});

describe('orderYearAsc', () => {  
  it('is a function', () => {
    expect(typeof orderYearAsc).toBe('function');
  });
  it('genero un arreglo ordenado por fecha de lanzamiento en orden ascendente`', () => {
    let input = [{release_date: "1991"}, {release_date: "1986"}, {release_date: "2011"}, {release_date: "2004"}];
    let output = [{release_date: "1986"}, {release_date: "1991"}, {release_date: "2004"}, {release_date: "2011"}];
    let result = orderYearAsc(input);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toStrictEqual(output);
  });    
});

describe('orderYearDesc', () => {  
  it('is a function', () => {
    expect(typeof orderYearDesc).toBe('function');
  });
  it('genero un arreglo ordenado por fecha de lanzamiento en orden descendente`', () => {
    let input = [{release_date: "1991"}, {release_date: "1986"}, {release_date: "2011"}, {release_date: "2004"}];
    let output = [{release_date: "2011"}, {release_date: "2004"}, {release_date: "1991"}, {release_date: "1986"}];
    let result = orderYearDesc(input);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toStrictEqual(output);
  });    
  
});

describe('mayorPuntaje', () => {  
  it('is a function', () => {
    expect(typeof mayorPuntaje).toBe('function');
  });
  it('genero un arreglo ordenado por puntaje de Mayor a menor`', () => {
    let input = [{rt_score: "95"}, {rt_score: "41"}, {rt_score: "100"}, {rt_score: "97"}];
    let output = [{rt_score: "100"}, {rt_score: "97"}, {rt_score: "95"}, {rt_score: "41"}];    
    let result = mayorPuntaje(input);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toStrictEqual(output);    
  });   
  
});

describe('menorPuntaje', () => {  
  it('is a function', () => {
    expect(typeof menorPuntaje).toBe('function');
  });
  it('genero un arreglo ordenado por puntaje de menor a Mayor`', () => {
    let input = [{rt_score: "95"}, {rt_score: "41"}, {rt_score: "100"}, {rt_score: "97"}];
    let output = [{rt_score: "41"}, {rt_score: "95"}, {rt_score: "97"}, {rt_score: "100"}];    
    let result = menorPuntaje(input);
    expect(Array.isArray(result)).toEqual(true);
    expect(result).toStrictEqual(output);    
  });   
});