//! 

//? **Ejercicio 1: Obtener resumen de los personajes (Nombre y Peso)

//#### Paso 1: Leer el JSON y entender la estructura 
//-Primero, veamos cómo podría lucir el JSON de ejemplo:

//javascript
const starWarsData = {
    characters: [{
            name: "Luke Skywalker",
            height: 172,
            mass: 77,
            species: "Human"
        },
        {
            name: "Darth Vader",
            height: 202,
            mass: 136,
            species: "Human"
        },
        {
            name: "Yoda",
            height: 66,
            mass: 17,
            species: "Unknown"
        },
    ],
};

/*Aquí tenemos un objeto con un array de personajes, cada uno con sus propiedades. Identificamos que necesitamos acceder a `characters`
y luego extraer el `name` y `height`
de cada uno.

#### Paso 2: Dividir el problema
Nuestro objetivo es devolver un resumen de nombres y altura.Entonces:
1. Accedemos a la propiedad `characters`.
2. Recorremos cada personaje.
3. Creamos una lista con el nombre y la altura de cada personaje.

#### Paso 3: Escribir la función
Empecemos con una función `obtenerResumenPersonajes`, que tomará el JSON como argumento.*/


//javascript

function obtenerResumenPersonajes(data) {
    // Paso 1: Accedemos al array de personajes
    const personajes = data.characters;

    // Paso 2: Creamos un array vacío donde guardaremos el resumen
    const resumen = [];

    // Paso 3: Recorremos cada personaje
    for (let i = 0; i < personajes.length; i++) {
        const personaje = personajes[i];
        // Extraemos nombre y altura
        const info = `
Nombre: $ {personaje.name}, Altura: $ {personaje.height}`;
        resumen.push(info); // Guardamos el resumen en el array
    }

    // Paso 4: Devolvemos el array resumen
    return resumen;
}

// Probamos la función
console.log(obtenerResumenPersonajes(starWarsData));


/*#### Paso 4: Desglose y explicación de cada paso en comentarios

He añadido comentarios en cada paso para que comprendan qué hace el código.Es crucial que los estudiantes vean cómo cada parte se traduce en código.

1. Primero, accedemos al array de personajes.
2. Creamos una lista `resumen`donde guardaremos los resultados.
3. Recorremos cada personaje y extraemos los datos requeridos.
4. Guardamos la información en el array `resumen` y lo devolvemos.*/






    //! ###Ejercicios para practicar


//? **Ejercicio 1: Información adicional

/*Extiende la función `obtenerResumenPersonajes` para que también devuelva el peso(`mass`) de cada personaje en el resumen.

    -** Pista **: Accede a `personaje.mass` dentro del bucle y agrégalo al string de `info`.*/






//? Ejercicio 2: Filtrar personajes

/*Crea una nueva función `filtrarPersonajesPorEspecie `, que reciba el JSON y una especie como argumento y devuelva solo los personajes de esa especie.

    ** Pista **: Usa un `if `dentro del bucle para verificar si `personaje.species`
coincide con la especie dada.Si es así, añade la información al array de resultados.*/






//? Ejercicio 3: Obtener el personaje más alto

/*Crea una función `obtenerPersonajeMasAlto` que reciba el JSON y devuelva el nombre y altura del personaje más alto.

    ** Pista **: Necesitarás una variable que almacene la altura máxima encontrada y otra para el personaje con esa altura.


    ###Uso de funciones dentro de funciones

Podemos crear funciones auxiliares que realicen una sola tarea específica.Este ejercicio ayuda a comprender cómo organizar el código de manera modular.

#### Ejemplo: Crear funciones auxiliares*/


//* 1. ** Función para obtener altura y nombre de un personaje: **

//javascript

function obtenerAlturaYNombre(personaje) {
    return `Nombre: $ {personaje.name}, Altura: $ {personaje.height}`;
    }


//* 2. ** Función principal que usa la función auxiliar: **

//javascript

function obtenerResumenPersonajes(data) {
    const personajes = data.characters;
    const resumen = [];

    for (let i = 0; i < personajes.length; i++) {
        resumen.push(obtenerAlturaYNombre(personajes[i]));
    }
    return resumen;
}
