// parametros: son datos que vienen de afuera de la funcion
// los parametros deberian ser lo mas descriptivos posibles 

// FUNCTION 

// function + nombre (se recomienda que sean verbos en infinitivo) ()

// declaracion basica de una funcion 

function mostrarCurso(){
    console.log("Curso de JavaScript");
}

// invocacion a la funcion
mostrarCurso();

// las funciones nos evitan repetir lineas de codigo y llamarlas cuando sea necesario

// Los parametros son espacios predeterminados que permiten modificar la funcion en cada situacion poara que se adapte mejor a lo requerido
// diapo 20

// function + nombre + ( parametro1 , parametro2){}
function armarFrase(palabra1, palabra2) {
    console.log(palabra1 + " " + palabra2);
}

armarFrase("Hola","Lau"); //la ubicacion del parametro depende del orden en que se ponen.

// CALCULAR PRECIO CON DESCUENTO
// por ej sabemos que el descuento siempre es del 10%
function calcularPrecioConDescuento(precioProducto){
    let precioFinal=precioProducto *0.9;
    console.log ("En efectivo $" + precioFinal);

}

calcularPrecioConDescuento(parseFloat(prompt("ingresar precio del producto")));

// froma 2 de utilizarlo, se pueden llamar las variables dentro de la misma funcion 
// sin definirlo como parametro
// -- 
// el problema de este metodo es que las variables de dentro de la funcion 
// no se pueden llamar luego como lo haria con una variable global

function calcularPrecioConDescuento2(){
    
    let precioProducto=parseFloat(prompt("ingresar precio del producto"));
    let precioFinal=precioProducto *0.9;
    console.log ("En efectivo $" + precioFinal);

}

calcularPrecioConDescuento2();

// return .. SACA UN VALOR POR FUERA DE LA FUNCION PARAA QUE LUEGO SE LO PUEDA LLAMAR GLOBALMENTE
// pero para sacarlo de la funcion esa funcion TIENE QUE SER LLAMADO CON UNA VARIABLE 

function sumar(primerNumero, segundoNumero){
    return primerNumero + segundoNumero;
}

let resultado1; 
resultado1 = sumar(5, 8);
console.log("Resultado de la suma: "+resultado1);

calcularPrecioConDescuento(resultado1);

// Diapo 25 - calculadora 

function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;2
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

// console.log(calculadora(10, 5, "*"));

let primerNumero = parseInt(prompt("ingresar el primer numero"));
let segundoNumero = parseInt(prompt("ingresar el segundo numero"));
let operacion = prompt("ingresar | + | - | / | * |");
let resultado2 = calculadora (primerNumero, segundoNumero, operacion);
console.log(resultado2);


// FUNCIONES ANONIMAS 

// es una funcion que se define sin nombre y utilizar para ser pasada 
// como parametro o asignada a una variable

// se llama a la variable, se le suma la funcion con los parametros 
// y se le agrega el return para que sea global

const suma = function (a, b) { return a + b }

console.log (suma(15,20))

// FUNCION FLECHA

// es una funcion anonima de sintaxis simplificada
// sintaxis:
// constante/variable = (parametro1, parametro2 =>(flecha) {return parametro1 +(accion) parametro2}
const suma2 = (a, b) => {return a + b}
console.log( suma2 (15,20))