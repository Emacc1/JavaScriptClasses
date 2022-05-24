// DOM = DOCUMENT OBJECTS MODEL

// En DOM cada etiqueta html es un oibjeto al que podemos llamar nodo
// las etiquetas anidadas son nodos hijos del nodo padre

// odos estos objetos son accesibles con JS mediante el objeto global DOCUMENT
// el objeto document seria el principal en el arbol familiar de las etiquetas

// las transformaciones de las etiquetas html habituales genera dos nodos
// NODOS ELEMENTOS
// NODOS TEXTO

// console.dir Muestra un listado interactivo de las propiedades de un objeto JS especifico
//en consola
// Esta lista nos permite ver una lista de documentos hijos

// console.dir(document.body);
// console.dir(document.body.children); // para ver los hijos especificamente

// TIPOS DE NODOS

// Document: padre de todos los nodos
// Element: todas las etiquetas (h1, h2, h3, div, etc)
// attr: ATRIBUTOS  de las etiquetas, como href, id, class, etc
// text: nodos de textos dentro de las etiquetas
// Comments: los comentarios dentro del html


// -------- ACCEDER AL DOM ----------

// existen distintos metodos para acceder a los elementos del DOM 
// empleando en la clase document


// ------ getelementbyID ------------
// Sirve para acceder a un elemento de la estructura html 
// utilizando su atributo ID como identificador

// Se lo asigna a un let o const y se lo iguala llamando document.getElementById("Elemento1");

let section = document.getElementById("principal");
console.log(section.innerHTML)
// Esto lo utilizamos para ver todo el codigo del section seleccionado y sus hijos

// ----------- GETELEMENTBYCLASSNAME()--------------------
// sirve para acceder a un conjunto de elementos de la estructura HTML
// Se utiliza el class como identificador
// Se retorna un ARRAY de elementos con todas las coincidencias 


// ----------- GETELEMENTBYTAGNAME()--------------------

// Se llega a un elemento utilizando el nombre de la etiqueta como identificador

let parrafos = document.getElementsByTagName("p");

console.log(parrafos);
console.log(parrafos[1].innerHTML); //El inner te muestra lo que tiene adentro un elemento
parrafos[0].innerText= new Date().toLocaleString();
// modificar cosas desde JS

section.style.background="yellow";

let titulo=document.getElementById("titulo");
titulo.innerText= "Que frio que hace!";


// ----------- INNER HTML -------------

// te permite insertar codigo html con la etiqueta y todo

// ---------- className: te permite asignarle una clase a la etiqueta



let labels1 = document.getElementsByTagName("label");

let boton = document.getElementById("boton");

function activateDark(){
    section.style.background="black";
    titulo.style.color="black";

    for(const parrafo of parrafos){
        parrafo.style.color=`white`;
    }
}

// ------- crear elementos ----------

// para crear elementos se utiliza la funcion //////document.createElement()////////
// y se debe indicar el nombre de la etiqueta HTML que representara ese elemento

// Luego debe agregarse como hijo el nodo creado como append()

// ------------Eliminar elementos ---------
// se pueden eliminar nodos existentes y nuevos. El motodo removeEventListener() permite 
// elimnar un nodo seleccionado del DOM


// ------------- .VALUE -----------------

// insertar textos en inputs (cajas donde rellena el usuario), 
//  permitiendote acceder a los campos de texto
// incluso permitiendole al usuario incorporar texto


let campoEmpresa = document.getElementById("empresa");
campoEmpresa.value="Mercado Libre";

let stock=document.getElementById("cantidad");
stock.value=2000;



// REVISAR DIAPO 44 PARA EJEMPLO DE ARRAYS CON ASIGNACION

// --------PLANTILLAS LITERALES ------------

// simplifica la escritura con strings y conectores
// entonces se puede tipear los strings con`STRINGS` ${VALORES}



// --------- TABLA CON DOM -------- 

let table=document.createElement("table");
let tableBody = document.createElement("tbody");

for(const producto of productos){

    let fila= document.createElement("tr");
    fila.innerHTML=
        `<td>${producto.id}<td/>`
        `<td>${producto.nombre}<td/>`
        `<td>${producto.precio}<td/>`;
    tableBody.appendChild(fila); 
        
}

tabla.appenChild(tableBody);

let lugarParaTabla=document.getElementById("inferior");
lugarParaTabla.appendChild(table);


// -----------QUERY SELECTOR -----------

// // DIAPO 49

// Te devuelve el primer elemento de la busqueda que haces
// let contenedor =
// document.querySelector(#algo p)

// QUERY SELECTOR ALL HACE UNA DEVOLUCION DE TODOS LOS ELEMENTOS CON ESTA CARACTERISTICA


/////////////////

// REPASO 

// para llamar un elemento

// ID: let seccion = document.getElementById("principal");

// INNERHTML - Sirve para mostrar en consola lo que esta dentro de un elemento o seccion


// GETELEMENTBYCLASSNAME - llama a las clases. Crea un array 

let paises = document.GetElementByClassName()

// GETELEMENTBYTAGNAME - llama por nombre de etiqueta, como div, section, etc. Crea un array

// Para acceder a un elemento en puntual hay que llamar al let con corchetes y el Nro del
// elemento en el Array. ej::::::::::::::  console.log(paises[1].innerHTML);

// INNERTEXT -- TOMA EL TEXTO INTERNO DE UNA ETIQUETA
// ej paises[1].innerText="coso"; 
// Modifica el texto interno de la etiqueta 1 de la clase paises



//////////// Revisar elementos de un array de clases o tags con el FOR OF 



// METODO APPEND

