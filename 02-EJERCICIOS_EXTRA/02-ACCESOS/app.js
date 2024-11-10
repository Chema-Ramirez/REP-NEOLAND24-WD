//! ACCESOS (EJERCICIOS)

// Ejemplo de JSON Complejo(Datos de Star Wars)

//Usaremos el siguiente JSON para todos los ejercicios:

//javascript

const starWarsInfo = {
    movie: {
        title: "A New Hope",
        release_year: 1977,
        director: "George Lucas",
        characters: {
            main: {
                name: "Luke Skywalker",
                homeworld: "Tatooine",
                species: "Human",
                allies: ["Han Solo", "Leia Organa", "Obi-Wan Kenobi"],
            },
            villain: {
                name: "Darth Vader",
                homeworld: "Tatooine",
                species: "Human",
                allies: ["Emperor Palpatine"],
            },
        },
    },
};



//? ** Ejercicio 1: Acceder a un valor específico **

//*Enunciado

/*Queremos acceder al nombre del director de la película.

1. ** Leer y comprender el enunciado **
    -Objetivo: Obtener el nombre del director desde el JSON. -
    Datos iniciales: JSON `starWarsInfo`, el nombre del director está en `movie.director`.

2. ** Dividir el problema en partes **
    -Paso 1: Acceder al objeto `movie`. -
    Paso 2: Acceder a la propiedad `director`.

3. ** Código ***/


//javascript
function obtenerDirector(data) {
    return data.movie.director;
}

console.log(obtenerDirector(starWarsInfo)); // Resultado: imprime "George Lucas"






//? ** Ejercicio 2: Modificar un valor específico **

//*Enunciado

//Queremos cambiar el nombre del planeta natal de Luke Skywalker a "Dagobah".

function cambiarNombrePlanetaNatal(data) {
    return data.movie.characters.main.homeworld = "Dagobah"
}

console.log(cambiarNombrePlanetaNatal(starWarsInfo))







//? ** Ejercicio 3: Agregar un nuevo aliado a un personaje **

//*Enunciado

//Queremos agregar un nuevo aliado, "Chewbacca", al array de aliados de Luke Skywalker.

function agregarNuevoAliado(data) {
    data.movie.characters.main.allies.push("Chewbacca")
}
agregarNuevoAliado(starWarsInfo)

console.log(starWarsInfo.movie.characters.main.allies)






//? ** Ejercicio 4: Cambiar el nombre del villano **

//*Enunciado

//Queremos cambiar el nombre de "Darth Vader a "Anakin Skywalker" en el JSON.

function cambiarNombreVillano(data) {
    return data.movie.characters.villain.name = "Anakin Skywalker"
}

console.log(cambiarNombreVillano(starWarsInfo))






//? ** Ejercicio 5: Actualizar el año de estreno **

//*Enunciado

//Queremos actualizar el año de estreno de la película de 1977 a 1978.

function cambiarAñoEstreno(data) {
    return data.movie.release_year = 1978
}

console.log(cambiarAñoEstreno(starWarsInfo))