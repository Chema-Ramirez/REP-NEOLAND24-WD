//! EJERCICIOS - JS LOOPS --->

//? ITERACION #1: USA INCLUDES --->
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 
    'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];
let conCamiseta = products.filter(e => e.includes("Camiseta"));
console.log(conCamiseta);




//? ITERACION #2: CONDICIONALES AVANZADOS --->
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
];

for (const alumno of alumns){
    if (alumno.T1 + alumno.T2 + alumno.T3 >=2){
        alumno.isApproved = true;
    }else {
        alumno.isApproved = false;
    }
}
console.log(alumns); 
/*/Resultado: {
    name: 'Pepe Viruela',
    T1: false,
    T2: false,
    T3: true,
    isApproved: false
},
{
    name: 'Lucia Aranda',
    T1: true,
    T2: false,
    T3: true,
    isApproved: true
},
{
    name: 'Juan Miranda',
    T1: false,
    T2: true,
    T3: true,
    isApproved: true
},
{
    name: 'Alfredo Blanco',
    T1: false,
    T2: false,
    T3: false,
    isApproved: false
},
{
    name: 'Raquel Benito',
    T1: true,
    T2: true,
    T3: true,
    isApproved: true
}/*/




//? ITERACION #3: PROBANDO FOR...OF --->
const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar'];
for (let lugares of placesToTravel){
    console.log(lugares); 
}




//? ITERACION #4: PROBANDO FOR...IN --->
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
for(let datos in alien){
    console.log(`Los datos del alien son: ${alien[datos]}`)
}




//? ITERACION #5: PROBANDO FOR --->
const placesToTravel1 = [
    {id: 5, name: 'Japan'}, 
    {id: 11, name: 'Venecia'}, 
    {id: 23, name: 'Murcia'}, 
    {id: 40, name: 'Santander'}, 
    {id: 44, name: 'Filipinas'}, 
    {id: 59, name: 'Madagascar'}];

    for (let i = 0; i <= 1; i++) {
        let eliminarId = placesToTravel1.slice(1, 4);
        console.log(placesToTravel1)
        console.log(eliminarId);
    } 




//? ITERACION #6: MIXED FOR...OF E INCLUDES--->
const toys = [
    {id: 5, name: 'Buzz MyYear'}, 
    {id: 11, name: 'Action Woman'}, 
    {id: 23, name: 'Barbie Man'}, 
    {id: 40, name: 'El gato con Guantes'},
    {id: 40, name: 'El gato felix'}
    ]
    const sinGato = []
    for (const cadaJuguete of toys){
        if (!cadaJuguete.name.includes("gato"))
        console.log(cadaJuguete)} 
    //Resultado:{id: 5, name: 'Buzz MyYear' }{ id: 11, name: 'Action Woman' }{ id: 23, name: 'Barbie Man' }




//? ITERACION #7: FOR...OF AVANZADO --->
const popularToys = [];
const toys1 = [
	{id: 5, name: 'Buzz MyYear', sellCount: 10}, 
	{id: 11, name: 'Action Woman', sellCount: 24}, 
	{id: 23, name: 'Barbie Man', sellCount: 15}, 
	{id: 40, name: 'El gato con Guantes', sellCount: 8},
	{id: 40, name: 'El gato felix', sellCount: 35}
]
for (const bestSeller of toys1){
        if (bestSeller.sellCount >15){
            popularToys.push(bestSeller)
        }
}
console.log(popularToys)
//Resultado: { id: 11, name: 'Action Woman', sellCount: 24 },{ id: 40, name: 'El gato felix', sellCount: 35 }