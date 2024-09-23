//! EJERCICIOS - JS BASIC ALGORITHMS ---> ✏️😉


//? ITERACION #1: VARIABLE --->
//*1.1
const myFavoriteHero = "Hulk";


//*1.2
const x = 50;


//*1.3
const h = 5;
const y = 10;


//*1.4
const z = h + y;
console.log(z); //Resultado: z = 15



//? ITERACION #2: VARIABLES AVANZADAS --->
//*1.1
const character = {name: "Jack Sparrow", age: 10};
character.age = 25;
console.log(character); //Resultado: {name: 'Jack Sparrow', age:25}


//*1.2
let firstName = "Jon";
let lastName= "Snow";
let age = 24;
let frase = `Soy ${firstName} ${lastName}, tengo ${24} años y me gustan los lobos.`
console.log(frase); //Resultado: 'Soy Jon Snow, tengo 24 años y me gustan los lobos'


//*1.3
const toy1 = {name: "Buss MyYear", price: 19};
const toy2 = {name: "Rallo mcKing", price: 29};
console.log(toy1.price + toy2.price); //Resultado suma de precios = 48


//*1.4
let globalBasePrice = 10000;
globalBasePrice = 25000;

const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
car1.finalPrice = car1.basePrice + globalBasePrice;
console.log(car1) //Resultado: se ha modificado el valor de basePrice en variable car1: 75000

const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2) //Resultado: se ha modificado el valor de basePrice en variable car2: 95000



//? ITERACION #3: OPERADORES --->
//*1.1
let a = 10;
let b = 5
let t = a * b;
console.log(t); //Resultado = 50


//*1.2
let d = 10;
let e = 2;
let f = d / e;
console.log(f); //Resultado = 5


//*1.3
let g = 15;
let r = 9 ;
let k = g % r;
console.log(k); //Resultado = 6


//*1.4
let p = 10;
let j = 5;
let o = p += j;
console.log(o); //Resultado = 15


//*1.5
let c = 10;
let m = 5;
let i = c *= m;
console.log(i); //Resultado = 50



//? ITERACION #4 ARRAYS --->
//*1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]) //Resultado: 'HULK'


//*1.2
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1[0] = "IRONMAN"
console.log(avengers1); //Resultado: ['IRONMAN', 'SPIDERMAN', 'BLACK PANTHER']


//*1.3
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
console.log(avengers2.length); //Resultado = 3


//*1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer"); 
console.log(rickAndMortyCharacters); //Resultado: ["Rick", "Beth", "Jerry", "Morty", "Summer"]
console.log(rickAndMortyCharacters[4]); //Resultado: 'Summer'


//*1.5
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const newCharacters1 = rickAndMortyCharacters.pop(); 
console.log(newCharacters1) //Resultado: 'Summer' (Se ha eliminado el último elemento)
console.log(rickAndMortyCharacters1[0]) //Resultado primer elemento: 'Rick'
console.log(rickAndMortyCharacters1[4]) //Resultado ultimo elemento: 'Summer'


//*1.6
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const newCharacters2 = rickAndMortyCharacters2.splice(1,1);
console.log(newCharacters2); //Resultado: ['Beth'] (Devuelve el elemento eliminado)
console.log(rickAndMortyCharacters2); //Resultado: ["Rick", "Jerry", "Morty", "Summer", "Lapiz Lopez"]



