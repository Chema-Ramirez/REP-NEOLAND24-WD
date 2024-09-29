//! EJERCICIOS - JS FUNCTIONS --->


//? ITERACION #1: BUSCAR EL MAXIMO --->
function numeroMasAlto(numBajo, numAlto){
    numBajo = 10;
    numAlto = 100;
        return Math.max(numBajo, numAlto)
}
console.log(Math.max(10, 100)); //Resultado: 100


////OTRA OPCION EJERCICIO 1 --->
const numeros1 = [25, 600];
const masAlto1 = Math.max(...numeros1);
console.log(masAlto1); //Resultado: 600


////OTRA OPCION EJERCICIO 1 --->
let numeros = [5, 500];
const maxValor = numeros.reduce((alto, bajo) => {
    if(bajo > alto) alto = bajo;
    return alto;
});
console.log(maxValor); //Resutado: 500



//? ITERACION #2: BUSCAR LA PALABRA MAS LARGA ---> ☠️
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function palabraMasLarga(avengers){
    return console.log(avengers.length);
}



//? ITERACION #3: CALCULAR LA SUMA --->
let numbers1 = [1, 2, 3, 5, 45, 37, 58];
let total1 = numbers1.reduce(
    function (acumulador1, valorActual1){
        return acumulador1 + valorActual1
    }, 0
);
console.log(total1); //Resultado: 151


////OTRA OPCION EJERCICIO 3 --->
let numbers2 = [1, 2, 3, 5, 45, 37, 58];
let total2 = numbers1.reduce((acumulador2,valorActual2) => acumulador2 + valorActual2, 0);
console.log(total2); //Resultado: 151



//? ITERACION #4: CALCULAR EL PROMEDIO --->
const num = [12, 21, 38, 5, 45, 37, 6];
const average = num.reduce(
function (previous, current){
    return (previous + current);},0);
    console.log(Math.ceil(average / 7)); //Resultado: 24


////OTRA OPCION EJERCICIO 4 --->
let num1 = [12, 21, 38, 5, 45, 37, 6];
let suma1 = num1.reduce((previous, current) => current + previous, 0);
let average1 = suma1 / 7;
console.log(Math.ceil(average1)); //Resultado: 24



//? ITERACION #5: CALCULAR PROMEDIO DE STRINGS ---> ☠️
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {

}


////OTRA OPCION EJERCICIO 5 ---> ☠️
/*const mixedElements1 = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
const sumaMixed1 = mixedElements1.reduce((previous, current) => current + previous, 0);
const averageMixed = sumaMixed1 / mixedElements1.length 
console.log(String.length(averageMixed))*/




//? ITERACION #6: VALORES UNICOS ---> ☠️
/*
const duplicates = [
    'sushi', 'pizza', 'burger','potatoe','pasta','ice-cream',
    'pizza','chicken','onion rings','pasta','soda'];
function removeDuplicates(param) {
    // insert code
}
    */




////OTRA OPCION EJERCICIO 5 ---> 
const duplicates = [
    'sushi', 'pizza', 'burger','potatoe','pasta','ice-cream',
    'pizza','chicken','onion rings','pasta','soda'];
const localizarDupli = duplicates.filter(function(comida, i, array){
    return array.indexOf(comida) === i}); 

console.log(localizarDupli) 
//Resultado: 'sushi','pizza','burger','potatoe','pasta','ice-cream','chicken','onion rings','soda'



//? ITERACION #7: BUSCADOR DE NOMBRES --->
const nameFinder = [
    'Peter','Steve','Tony','Natasha','Clint','Logan',
    'Xabier','Bruce','Peggy','Jessica','Marc'];
function finderName(nombre) {
    return nombre
}
console.log(nameFinder.find(finderName));
