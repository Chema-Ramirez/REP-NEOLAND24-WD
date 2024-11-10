//! BUCLES (EJERCICIOS)

//JSON 

const starWarsDatabase = {
    movies: [{
            title: "A New Hope",
            release_year: 1977,
            characters: [{
                    name: "Luke Skywalker",
                    homeworld: "Tatooine",
                    species: "Human"
                },
                {
                    name: "Darth Vader",
                    homeworld: "Tatooine",
                    species: "Human"
                },
            ],
            starships: [{
                    name: "X-wing",
                    model: "T-65 X-wing"
                },
                {
                    name: "TIE Advanced x1",
                    model: "Twin Ion Engine"
                },
            ],
        },
        {
            title: "The Empire Strikes Back",
            release_year: 1980,
            characters: [{
                    name: "Yoda",
                    homeworld: "Dagobah",
                    species: "Unknown"
                },
                {
                    name: "Han Solo",
                    homeworld: "Corellia",
                    species: "Human"
                },
            ],
            starships: [{
                    name: "Millennium Falcon",
                    model: "YT-1300"
                },
                {
                    name: "Slave I",
                    model: "Firespray-31"
                },
            ],
        },
    ],
};




//? ** Ejercicio 1: Listar todas las películas y sus años de estreno **

//*Enunciado

/*Queremos crear una función que imprima cada título de película y su año de estreno en la consola.

1. ** Leer y comprender el enunciado **
    -Objetivo: Obtener el título y año de estreno de cada película en un JSON y mostrarlos. 
    -Datos iniciales: Un JSON con un array `movies`, donde cada elemento representa una película.

2. ** Dividir el problema en partes **
    -Paso 1: Acceder al array `movies`. 
    -Paso 2: Extraer el título y el año de estreno de cada película. 
    -Paso 3: Imprimir esta información.

3. ** Identificar variables y estructuras necesarias **
    -`peliculas`: Array de todas las películas. 
    -`pelicula`: Objeto individual para cada película.

4. ** Crear una función para cada paso **

    -Creamos una función `listarPeliculas` que toma el JSON como argumento.

5. ** Escribir código y probar ***/


//javascript

function listarPeliculas(data) {
    // Paso 1: Accedemos al array de películas

    for (let i = 0; i < starWarsDatabase.movies.length; i++) {
        const pelicula = starWarsDatabase.movies[i];

        // Paso 2: Extraemos el título y el año
        console.log(`Título: ${pelicula.title}, Año: ${pelicula.release_year}`);
    }
}

// Probamos la función
listarPeliculas(starWarsDatabase);





//? ** Ejercicio 2: Listar todos los nombres de personajes por pelicula y mostrarlos **
/*1. ** Leer y comprender el enunciado **
    -Objetivo: Extraer los nombres de todos los personajes por película y mostrarlos. 
    -Datos iniciales: JSON con `movies`, donde cada elemento tiene un array `characters` con los personajes.

2. ** Dividir el problema en partes **
    -Paso 1: Acceder al array `movies`. 
    -Paso 2: Dentro de cada película, acceder al array `characters`. 
    -Paso 3: Extraer el nombre de cada personaje y mostrarlo.

3. ** Identificar variables y estructuras necesarias **
    -`peliculas`: Array de todas las películas. 
    -`personajes`: Array de personajes en cada película. 
    -`personaje`: Objeto de cada personaje en el array.

4. ** Crear una función para cada paso **
    -Función `listarPersonajesPorPelicula` que itera sobre las películas y personajes.

5. ** Escribir código y probar ***/


//javascript

function listarPersonajesPorPelicula(data) {
    const peliculas = data.movies;

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        console.log(`Película: ${pelicula.title}`);

        // Accedemos al array de personajes dentro de la película
        const personajes = pelicula.characters;

        for (let j = 0; j < personajes.length; j++) {
            const personaje = personajes[j];
            console.log(` - Personaje: ${personaje.name}`);
        }
    }
}

// Probamos la función
listarPersonajesPorPelicula(starWarsDatabase);






//? ** Ejercicio 3: Extraer información específica de los personajes **

//*Enunciado

//Queremos crear una función que recorra todas las películas y luego imprima el nombre, planeta natal(`homeworld`) y especie de cada personaje.

/*1. ** Leer y comprender el enunciado **
-Objetivo: Obtener `name`, `homeworld` y `species` de cada personaje en todas las películas y mostrarlos. 
-Datos iniciales: JSON con `movies`, cada una tiene un array `characters` con personajes.

2. ** Dividir el problema en partes **
    -Paso 1: Acceder al array `movies`. 
    -Paso 2: Dentro de cada película, acceder a `characters`. 
    -Paso 3: Extraer `name`, `homeworld` y `species` de cada personaje y mostrarlos.

3. ** Identificar variables y estructuras necesarias **
    -`peliculas`: Array de películas. 
    -`personajes `: Array de personajes en cada película. 
    -`personaje`: Objeto individual de cada personaje.

4. ** Crear una función para cada paso **
    -Función `listarDetallesPersonajes` que recorre películas y luego personajes.

5. ** Escribir código y probar ***/


//javascript

function listarDetallesPersonajes(data) {
    const peliculas = data.movies;

    for (let i = 0; i < peliculas.length; i++) {
        const pelicula = peliculas[i];
        console.log(`Película: ${pelicula.title}`);

        const personajes = pelicula.characters;

        for (let j = 0; j < personajes.length; j++) {
            const personaje = personajes[j];
            console.log(` -Nombre: ${personaje.name}, -Planeta: ${personaje.homeworld}, -Especie: ${personaje.species}`);
        }
    }
}

// Probamos la función
listarDetallesPersonajes(starWarsDatabase);






//? ** Ejercicio 4: Listar nombres y modelos de todas las naves **

//*Enunciado

//Queremos una función que recorra todas las películas y liste el `name` y `model` de cada nave en esa película.

function nombreYModeloNaves(data) {
    const infoNaves = data.movies;

    for (let i = 0; i < infoNaves.length; i++) {
        const pelicula = infoNaves[i];

        for (let j = 0; j < pelicula.starships.length; j++) {
            const nave = pelicula.starships[j];

    console.log(`Nombre de la nave: ${nave.name} y Modelo ${nave.model}`)

        }
    }
}

nombreYModeloNaves(starWarsDatabase)






//? ** Ejercicio 5: Crear un resumen de personajes por especie **

//*Enunciado

//Queremos una función que recorra todas las películas y agrupe los personajes por especie en un objeto.

function personajesPorEspecie(data) {
    const films = data.movies;

    for (let i = 0; i < films.length; i++) {
        const pelicula = films[i];
        console.log(`Película: ${pelicula.title}`)


    const personajes = pelicula.characters

        for (let j = 0; j < personajes.length; j++) {
            const  personajeEspecie = personajes[j];
            
            console.log(`El Personaje ${personajeEspecie.name} es ${personajeEspecie.species};`)
        }
    }
}
personajesPorEspecie(starWarsDatabase)
