//? ITERACION #1: MIX FOR E INCLUDES --->
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const cadaCategoria = []

for(const pelicula of movies){
    for (const categoria of pelicula.categories){
        if (!cadaCategoria.includes(categoria)){
            cadaCategoria.push(categoria);
        }  
    }
}
console.log(cadaCategoria); //Resultado: [ 'comedia', 'aventura', 'acción', 'thriller', 'animación' ]




//? ITERACION #2: MIX FORS --->
const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let volumenTotal = 0;
let sumaVolumen = 0;

for (musica of users){
    for (sound in musica.favoritesSounds){
        volumenTotal += musica.favoritesSounds[sound].volume;
        sumaVolumen++
    }
}
const mediaVolumen = volumenTotal / sumaVolumen;
console.log(`El volumen medio de los sonidos favoritos de los usuarios es de ${mediaVolumen}`)
//Resultado: El volumen medio de los sonidos favoritos de los usuarios es de 57.25




//? ITERACION #3: MIX FORS --->
const usuarios = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
];




//? ITERACION #4: METODOS FIND ARRAY INDEX --->
function findArrayIndex(array, text) {}
const peliculas = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]




//? ITERACION #5: FUNCIÓN ROLLDICE --->




//? ITERACION #6: FUNCIÓN SWAP --->
['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
