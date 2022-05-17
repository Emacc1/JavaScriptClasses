// Una array es un tipo de dato que sirve para 
// almacenar valores en forma de lista 

// El primer elemento del array siempre es 0

// Se puede acceder al elemento necesario del array 
// sin acceder a toda la cadena

const numeros = [1,2,3,4,5];
console.log (numeros[0]); // 1
console.log (numeros[3]); // 4

// Ejemplo lista de cumpleanos

const listaCumple=["tira de asado","chinchulines","vacio","chori","pan","vino","cocacola","fernet","carbon","ensalada"];
// para llamar toda la lista numerada
console.log(listaCumple);
// para llamar un elemento en particular
console.log(listaCumple[2]);

// recorrido del array

// para cambiarle el nro inicial del insumo de la lista, 
// se le suma 1 unidad para que empiece a contar desde el 1 y no desde el 0
for(let i=0; i<10; i++){
    console.log("producto nro "+(i+1)+" :"+listaCumple[i])
}

// metodos y propiedades que se le pueden agregar al array

// LENGTH - saber la longitud del array

console.log("la longitud de la lista es de "+listaCumple.length+" elementos");

// se puede escribir para que llegue hasta el final:
for (let i=0; i<listaCumple.lenght; i++);

// METODO PUSH PARA AGREGAR ELEMENTOS AL FINAL DE LA LISTA 
listaCumple.push ("torta de cumple");
// de esta manera se agrega una caja, un vagon mas en la lista que seria "lista de cumple"
//se pueden pushear varios elementos a la lista separados por comas (,)
console.log(listaCumple);


// UNSHIFT - AGREGA ELEMENTOS AL INICIO DEL ARRAY

listaCumple.unshift("chimichurri");
console.log(listaCumple);

// SHIFT - QUITAR PRIMER ELEMENTO DE LA LISTA 
listaCumple.shift();
console.log(listaCumple);
// POP - QUITAR EL ULTIMO ELEMENTO DE LA LISTA 
listaCumple.pop();
console.log(listaCumple);

// SPLICE -- PERMITE ELIMINAR UNO O VARIOS ELEMENTOS DE UN ARRAY EN CUALQUIER POSICION

// FUNCIONA CON 2 PARAMETROS EL PRIMERO ES EL INDICE DONDE SE UBICA EL METODO 
// PARA TRABAJAR Y EL SEGUNDO ES LA CANTIDAD DE ELEMENTOS A ELIMINAR DESDE ESA POSICION

// listaCumple.splice(nro de elemento, cantidad de elementos a eliminar de ahi en adelante)
listaCumple.splice(5,2);
console.log(listaCumple);

// JOIN - PODEMOS GENERAR UN STRING CON TODOS LOS ELEMENTOS DEL ARRAY 
// SEPARADOS POR EL VALOR QUE PASAMOS POR EL PARAMETRO

let listaConJoin=listaCumple.join("***");
let listaConJoin2=listaCumple.join("\n");
console.log(listaConJoin);
console.log(listaConJoin2);
// con esto se le puede agregar acciones de strings como por ejemplo uppercase


// CONCAT - CONCATENA 2 ARRAYS

// por ejemlo tengo una lista de perros y una lista de gatos 
// puedo concatenar las dos listas en una nueva que se llame mascotas

const perros = ["pupy", "rambo"];
const gatos = ["garfield", "mishi"];

// el array que pongamos al inicio ira primero y el segundo arrancara desde el ultimo elemento del primero
const mascotas = perros.concat(gatos);
console.log(mascotas);

// // SLICE -- corta una parte de un array dentro de un nuevo array

// cuando corta se debe marcar el primero que toma y el que le sigue al ultimo
// es decir que si yo quiero cortar elementos del 1 al 3 tengo que pedir 1-4

const nombres = ["rita", "pedro", "miguel", "juana"];
const masculinos = nombres.slice(1,3);
console.log(masculinos);
// Los elementos no desapareceran del primer Array, solo se copiaran en el siguiente

// INDEXOF
// busca la existencia de un elemento del array y devuelve el indice del mismo
// en caso de no existir, devuelve un indice negativo

const listaAprobados=["Gomez","Perez","Alvarez","Montoya"];
const notasAprobadas=[10,7,8,9]
let apellido= "Perez";
let indice=listaAprobados.indexOf(apellido);

if(indice!=-1){
    console.log("el alumno "+ apellido+ "aprobo con" +notasAprobadas[indice]);
    // se puede llamar la variable que designa el indexof para llamar al mismo nro correlativo de otra listaAprobados. 
    // Es decir el mismo nro de una lista sera correlativo al de otra. Solo factible si las listas son correlativas. 

    // Otra opcion es trabajar directamente con objetos donde por ejemplo un alumno 
    // es un objeto y dentro mismo encontramos, el nombres, la edad, y la nota por ej. 
}else{
    console.log("el alumno "+ apellido+ "no aprobo");
}

// INCLUDES

// nos permite saber si un elemento que recibo por parametro existe en el Array. responde con true or false

console.log(nombres.includes("Esteban"));
console.log(nombres.includes("rita"));

// REVERSE

// invierte el orden de los elementos del array
// El metodo reverse es destructivo por lo que modifica el array original 
// igual que los metodos para agregar o quitar elementos

nombres.reverse();
console.log(nombres);

// ARRAY DE OBJETOS

// Los arrays de objetos generan estructuras complejas de datos
// nos permite recorrer listas de objetos complejas de una forma ordenada y prolija

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

// FOR OF

// recorre los elementos de un Array. es una version modificada del for 
// para simplificarnos la Vida.

// for(const "singular de los objetos del array" of "nombre del array"){}
for(const libro of libros){
    console.log(libro);
    console.log(libro.titulo);
}

// EJEMPLO PARA CREAR OBJETOS CON CONSTRUCTORES Y CREAR ARRAY CON PUSH DE PRODUCTOS

class Producto {
    constructor(nombre, precio) {
        this.nombre  = nombre.toUpperCase();
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
    
    vender(){

        this.vendido = true;
    }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
    producto.sumaIva();

productos[1].vender(); //vendimos los fideos





