//! EJERCICIOS - JS FUNCTIONS --->

//? ITERACION #1: BUSCAR EL MAXIMO --->
function sum(a , b) {
    if (a > b) {
        return console.log(`${a} Es mayor que ${b}`)
    }else{
        return console.log(`${a} No  es mayor que ${b}`)
    }};
sum(5, 10); 
//Resultado: Se ejecuta "5 no es mayor que 10"



////OTRA OPCION EJERCICIO 1 --->
const numeros1 = [25, 600];
const masAlto1 = Math.max(...numeros1);
console.log(masAlto1); //Resultado: 600



////OTRA OPCION EJERCICIO 1 --->
function numMayor (a, b){
    return Math.max(a, b)
}
  console.log(numMayor(10, 100)) // Resultado: 100
  console.log(numMayor(50, 1)) // Resultado: 50





//? ITERACION #2: BUSCAR LA PALABRA MAS LARGA ---> ☠️
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array){
    return array.reduce((acc, valorActual)=>{
        return valorActual.length > acc.length ? valorActual : acc;}," ")};

console.log(findLongestWord(avengers)); //Resultado: Devuelve "Captain A."





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
let suma1 = num1.reduce((acc,  currentValue) => acc + currentValue) / num1.length; 
console.log(Math.ceil(suma1));//Resultado: 24





//? ITERACION #5: CALCULAR PROMEDIO DE STRINGS ---> 
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(array) {
    const total = array.reduce((acc, actual) => {
        if (typeof actual == "number"){
            return acc + actual
        }
        else {(typeof actual == "string")
            return acc + actual.length
        }
    }, 0 );
    return total}
    console.log(averageWord(mixedElements)); //Resultado: 41 es el total de la suma de los number y las longitudes de los string





//? ITERACION #6: VALORES UNICOS ---> 
const duplicates = [
    'sushi', 'pizza', 'burger','potatoe','pasta','ice-cream',
    'pizza','chicken','onion rings','pasta','soda'];

function removeDuplicates(e) {
    const unicos = [];
    e.forEach(item => {
        if (!unicos.includes(item)) {
            unicos.push(item);
        }
    });
    return unicos
}
console.log(removeDuplicates(duplicates)); //!imprime el array sin los duplicados



////OTRA OPCION EJERCICIO 6 ---> 
const duplicates1 = [
    'sushi', 'pizza', 'burger','potatoe','pasta','ice-cream',
    'pizza','chicken','onion rings','pasta','soda'];
const localizarDupli = duplicates1.filter(function(comida, i, array){
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



////OTRA OPCION EJERCICIO 7 ---> 
const nameFinder1 = [
    'Peter','Steve','Tony','Natasha','Clint','Logan',
    'Xabier','Bruce','Peggy','Jessica','Marc'];

    function finderName1 (e, name){
        for (let i = 0; i < e.length; i++){
            if(e[i] === name){
                return {inArray: true, position: i};
            }
        }
        return {inArray:false};
    }
console.log(finderName1(nameFinder, 'Uma'));
console.log(finderName1(nameFinder, 'Marc'))





//? ITERACION #8: CONTADOR DE REPETICIONES --->
const counterWords = [
    'code','repeat','eat','sleep','code','enjoy',
    'sleep','code','enjoy','upgrade','code'
];
function repeatCounter(e) {
    const contador = {};
    console.log(contador);

    e.forEach(palabra=>{
        console.log(palabra);
        contador[palabra] = (contador[palabra] || 0) + 1
    }); return contador;
};
const palabrasRepetidas = repeatCounter(counterWords);
console.log(palabrasRepetidas);
//Resultado: { code: 4, repeat: 1, eat: 1, sleep: 2, enjoy: 2, upgrade: 1 }