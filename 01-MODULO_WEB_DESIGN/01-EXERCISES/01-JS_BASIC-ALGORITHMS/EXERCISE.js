//! EJERCICIOS - JS BASIC ALGORITHMS ---> ✏️😉

//? ITERACION #1: VARIABLE --->
//*EJERCICIO 1.1
const myFavoriteHero = "Hulk";
console.log(myFavoriteHero) //Devuelve "Hulk"


//*EJERCICIO 1.2
const x = 50;


//*EJERCICIO 1.3
const h = 5;
const y = 10;


//*EJERCICIO 1.4
const z = h + y;
console.log(z); //Resultado: z = 15




//? ITERACION #2: VARIABLES AVANZADAS --->
//*EJERCICIO 1.1
const character = {name: "Jack Sparrow", age: 10};
character.age = 25;
console.log(character); //Resultado: {name: 'Jack Sparrow', age:25}


//*EJERCICIO 1.2
let firstName = "Jon";
let lastName= "Snow";
let age = 24;
let frase = `Soy ${firstName} ${lastName}, tengo ${age} años y me gustan los lobos.`
console.log(frase); //Resultado: 'Soy Jon Snow, tengo 24 años y me gustan los lobos'


//*EJERCICIO 1.3
const toy1 = {name: "Buss MyYear", price: 19};
const toy2 = {name: "Rallo mcKing", price: 29};
console.log(toy1.price + toy2.price); //Resultado suma de precios = 48


//*EJERCICIO 1.4
let globalBasePrice = 10000;
globalBasePrice = 25000;

const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
car1.finalPrice = car1.basePrice + globalBasePrice;
console.log(car1) //Resultado: se ha modificado el valor de basePrice en variable car1: 75000

const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car2.finalPrice = car2.basePrice + globalBasePrice;
console.log(car2) //Resultado: se ha modificado el valor de basePrice en variable car2: 95000




//? ITERACION #3: OPERADORES --->
//*EJERCICIO 1.1
let a = 10;
let b = 5
let t = a * b;
console.log(t); //Resultado = 50


//*EJERCICIO 1.2
let d = 10;
let e = 2;
let f = d / e;
console.log(f); //Resultado = 5


//*EJERCICIO 1.3
let g = 15;
let r = 9 ;
let k = g % r;
console.log(k); //Resultado = 6


//*EJERCICIO 1.4
let p = 10;
let j = 5;
let o = p += j;
console.log(o); //Resultado = 15


//*EJERCICIO 1.5
let c = 10;
let m = 5;
let i = c *= m;
console.log(i); //Resultado = 50




//? ITERACION #4 ARRAYS --->
//*EJERCICIO 1.1
const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
console.log(avengers[0]) //Resultado: 'HULK'


//*EJERCICIO 1.2
const avengers1 = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
avengers1[0] = "IRONMAN"
console.log(avengers1); //Resultado: ['IRONMAN', 'SPIDERMAN', 'BLACK PANTHER']


//*EJERCICIO 1.3
const avengers2 = ["HULK", "SPIDERMAN", "BLACK PANTHER"]
console.log(avengers2.length); //Resultado = 3


//*EJERCICIO 1.4
const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
rickAndMortyCharacters.push("Morty", "Summer"); 
console.log(rickAndMortyCharacters); //Resultado: ["Rick", "Beth", "Jerry", "Morty", "Summer"]
console.log(rickAndMortyCharacters[4]); //Resultado: 'Summer'


//*EJERCICIO 1.5
const rickAndMortyCharacters1 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const newCharacters1 = rickAndMortyCharacters.pop(); 
console.log(newCharacters1) //Resultado: 'Summer' (Se ha eliminado el último elemento)
console.log(rickAndMortyCharacters1[0]) //Resultado primer elemento: 'Rick'
console.log(rickAndMortyCharacters1[4]) //Resultado ultimo elemento: 'Summer'


//*EJERCICIO 1.6
const rickAndMortyCharacters2 = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
const newCharacters2 = rickAndMortyCharacters2.splice(1,1);
console.log(newCharacters2); //Resultado: ['Beth'] (Devuelve el elemento eliminado)
console.log(rickAndMortyCharacters2); //Resultado: ["Rick", "Jerry", "Morty", "Summer", "Lapiz Lopez"]




//? ITERACION #5 CONDICIONALES --->
//*EJERCICIO 1.1
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2/number1 == 2){
console.log("number2 dividido entre number1 es igual a 2")
};

if (number1 !== number2){
    console.log("number1 es estrictamente distinto a number2")
};

if(number3 != number1){
    console.log("number3 es distinto a number1" )
};

if(number3*5==number1){
    console.log("number3 por 5 es igual a number1")
};

if((number3*5 == number1)&&(number1*2 == number2)){
    console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2")
};

if((number2/2 == number1)||(number1/5 == number3)){
    console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3")
};




//? ITERACION #6 BUCLES --->
//*EJERCICIO 1.1 
let bucleFor = 9;
for(i = 0; i <= bucleFor; i++){
    console.log(i) //Resultado: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
};


//*EJERCICIO 1.2

let bucleFor1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

   for (let e = 0; e < bucleFor1.length; e++) {
       if (bucleFor1[e] % 2 === 0) {
           console.log(e, 'El resto es 0');
       } else {
           console.log(e, 'El resto no es cero');
       }
   }

//*EJERCICIO 1.3
let contadorOvejas = 10
for (let i = 0; i <= contadorOvejas; i++) {
    console.log(i=1, 'Intentando dormir 🐑🙉');
    console.log(i=2, 'Intentando dormir 🐑🙉');
    console.log(i=3, 'Intentando dormir 🐑🙉');
    console.log(i=4, 'Intentando dormir 🐑🙉');
    console.log(i=5, 'Intentando dormir 🐑🙉');
    console.log(i=6, 'Intentando dormir 🐑🙉');
    console.log(i=7, 'Intentando dormir 🐑🙉');
    console.log(i=8, 'Intentando dormir 🐑🙉');
    console.log(i=9, 'Intentando dormir 🐑🙉')
    console.log(i=10, 'Durmiendo 💀💤');}
/*Resultado:
1 Intentando dormir 🐑🙉
2 Intentando dormir 🐑🙉
3 Intentando dormir 🐑🙉
4 Intentando dormir 🐑🙉
5 Intentando dormir 🐑🙉
6 Intentando dormir 🐑🙉
7 Intentando dormir 🐑🙉
8 Intentando dormir 🐑🙉
9 Intentando dormir 🐑🙉
10 Durmiendo 💀💤*/


//// OTRA OPCION EJERCICIO 1.3 --->
let contadorOvejas1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
for (let e = 0; e < contadorOvejas1.length; e++) {
    if (contadorOvejas1[e] === 10) {
        console.log(e+1, 'Durmiendo 💀💤');
    } else {
        console.log(e+1, 'Intentando dormir 🐑🙉');
    }}
/*Resultado:
1 Intentando dormir 🐑🙉
2 Intentando dormir 🐑🙉
3 Intentando dormir 🐑🙉
4 Intentando dormir 🐑🙉
5 Intentando dormir 🐑🙉
6 Intentando dormir 🐑🙉
7 Intentando dormir 🐑🙉
8 Intentando dormir 🐑🙉
9 Intentando dormir 🐑🙉
10 Durmiendo 💀💤*/