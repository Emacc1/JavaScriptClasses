 //FUNCIONES DE ORDEN SUPERIOR
 
 //ABSTRACCION

// Una funcion de orden superior retorna una funcion
// o recibe una funcion por parametro 

// Nos permiten abstraernos sobre acciones y no solo valores

// Funcion que retorna funcion//

function mayorQue(n) {
    return (m) => m > n
}

// la funcion flecha seria igual que:
// function mayorQue(n) {
//     return function (m) {
//         return m>n;
//     }
// }

// let mayorQueDiez = mayorQue(10);

// console.log( mayorQueDiez(12));
// console.log( mayorQueDiez(8));

// let mayorDeEdad = mayorQue(21);
// if(mayorDeEdad(parseInt(prompt("ingrese su edad")))){
//     console.log("puede ingresar al bar");
// }else{
//     console.log("no puede ingresar al boliche")
// }

// RECIBIR FUNCIONES POR PARAMETRO
// funciones que reciben funciones como parametro

const preciosProductos = [10999,8690,23290.99,13000,999.99];

function realizar(operacion,lista) {
    for(const elemento of lista) {
        operacion(elemento);
    }
}

let total=0;

// funcion para sumar totales
function sumarTotal(precio){
    total += precio;
    // Es como decir que total es total + precio
    
}

function calcularIva (precio) {
    console.log("precio $"+ precio + " con iva:$"+precio*1.21);

}

realizar(sumarTotal,preciosProductos);
console.log("Total de la compra $"+total)

realizar(calcularIva, preciosProductos);

// cuando es una funcion dentro de otra la funcion sumada aplica como variable 
// la segunda variable de la funcion Padre
 

// parametros con funciones flecha

function porCadaUno(arr,fn) {
    for (const el of arr) {
        fn(el)

    }
}

const listaDeViaje=["abrigo","remeras","joggins","zapatillas"];

const aMayusculas=[];

porCadaUno (listaDeViaje, (prenda)=>{
    aMayusculas.push (prenda.toUpperCase());
});

console.log(aMayusculas);

// METODOS DE BUSQUEDA Y TRANSFORMACION

// forEach()
// find()
// filter() 
// some() 
// map()
// reduce()
// sort()

// ---- forEach() ----
// porCadaUno, recorre todos los numeros y por cada numero
// imprime por consola ese numero

const libros=[
    {
        isbn:"2345123",
        titulo:"Harry Potter",
        genero:"Aventuras",
        precio:230.90
    },
    {
        isbn:"9099777",
        titulo:"Elige tu propia aventura",
        genero:"Aventuras",
        precio:199.00
    },
    {
        isbn:"12121212",
        titulo:"JS para principiantes",
        genero:"Educacion",
        precio:290.00
    },
    {
        isbn:"3333333",
        titulo:"Diccionario de Frances-Español",
        genero:"Diccionario",
        precio:99.90
    },
];

//imprimir el titulo de cada libro

libros.forEach((libro)=>{ //los titulos inventados siempre representan los elementos del array 
    console.log("titulo: "+libro.titulo)
});

//-------- FIND ---------------

// Esta funcion devuelve EL PRIMER elemento (el elemento entero) que encuentre 
// que cumpla con la condicion  detalladas
//y lo que encuentra lo tiene que guardar en una variable ya que retorna
// en true or false dependiendo de lo que encuentre

let encontrado= libros.find ((libro)=> libro.titulo == "JS para principiantes"); //se podria poner un prompt para lo que busca
console.log(encontrado);

// si hubiese mas de un titulo con el mismo nombres, solo va a mostrar
// al primero que cumpla con esta igualdad

// ------- FILTER ---------

// similar a find
// busca TODOS los elementos de todo el array que cumpla con 
// la condicion dada 
// Genera un nuevo array con todos los elementos encontrados
// utiliza la propiedad INCLUDES que busca un fragmento de texto
// dentro del array detallado


const listaBaratos = libros.filter((libro)=> libro.precio<200);

console.log(listaBaratos);


// ----------- SOME ------------

// el metodo some funciona igual que el find pero responde true or false
// true si existe
// false si no existe

const existe = libros.some((libro)=> libro.genero == "Diccionario");
console.log("existe diccionario? "+existe);

// ------------ MAP ------------

// crea un nuevo array con la propiedad definida de un array anterior

// nuevo array con la transformacion solicitada

// EJ
// solo los precios de los libros y con iva

const preciosConIva= libros.map((libro)=>libro.precio *1.21);
console.log ("CON IVA");
console.log(preciosConIva);

// aplicando descuento

const preciosEnEfectivo = libros.map((libro)=> libro.precio * 0.9);
console.log ("CON DESCUENTO");
console.log (preciosEnEfectivo);

const librosConIva = libros.map((libro)=>{
    return{
        isbn:libro.isbn,
        titulo:libro.titulo.toUpperCase,
        genero:libro.genero,
        precio:libro.precio * 1.21
    }
});
// se le pueden agregar nuevas propiedades sumando lineas
//ademas de cambiar cada propiedad sumando condiciones como uppercase

console.log (librosConIva)


// --------- REDUCE ---------

// recibe dos parametros
// generalmente uno es un acumulador y el segudno parametro es el punto donde inicia
// es decir que si el segundo parametro es 100 y esta sumando 800 en los elementos, el total va a ser 900
// generalmente el segundo parametro es 0 si se genera una suma por acumulador

// EJ
// sumador de precios
const totalPrecios = librosConIva.reduce((acumulador,libro)=>acumulador+libro.precio,0)

console.log ("total de precios con VIA incl. $ " + totalPrecios);

//-------- SORT ---------

// ordenamiento de arrays, pero es destructivo, es decir que modifica el array original
// la forma de escribir esto es particular

const edades=[78,24,13,47,98,4,6];
edades.sort((a,b)=>a-b); // de menor a mayor
console.log(edades);

edades.sort((a,b)=>b-a); // de mayor a menor
console.log(edades);


//  --------------- EL OBJETO MATH ---------------------
//Math siempre con M mayus
// contenedor de herramientas y metodos para realizar operaciones matematicas

// Se puede buscar todas las aplicaciones de Math en la informacion oficial en la pagina
// de consulta de codigo

// MATH.CEIL > redondea hacia arriba 

// MATH.FLOOR  > redondea hacia abajo

// MATH.ROUND > redondea al mas cercano


// ---

// Math.random() > va a enviarte un numero pseudo aleatorio entreo 0 y 1

// para generar un numero aleatorio en un rango definido, se deberia multiplicar 
// el Math.random por el nro maximo del rango
// envia numeros con muchos decimales. 

console.log(Math.random() * 10);

// Si quiero que envie numeros entre un numero que no sea 0 y el maximo del rango:

console.log(Math.random() * 30 + 20);

// Es decir definimos primero el tamanio total del rango y luego se le suma el numero de donde inicia. 

// GENERAR NUMEROS ENTEROS SE SUELE COMBINAR CON FUNCIONES DE REDONDEO

console.log(Math.round( Math.random() * 1000));



// Tirar 3 veces un dado aleatoriamente

let resultadoDado;

for(let i=1;i<4;i++){
    resultadoDado=Math.round(Math.random() * 5);

    console.log (resultadoDado)
}


// OBJETOS TIPO FECHA - DATE

let fechaAhora = new Date();
console.log (fechaAhora);
// el new es el llamado al constructor de una clase

// mas lindo 
console.log(fechaAhora.toLocaleString());
// Lo muestra en una linea mas prolija

// solo la hora 
console.log (fechaAhora.toTimeString());

// En las diapositivas esta todo especificado







