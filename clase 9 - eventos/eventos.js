// Eventos

// controla las acciones de los usuarios y definir un comportamiento
// de la pagina o aplicacion cuando se produzcan

// JS nos permite escuchar eventos sobre elementos seleccionados

// ........... 3 FORMAS DE DEFINIR EVENTOS ..............

// 1- addEventListener() - 

// permite definir que evento escuchar sobre cualquier elemento seleccionado
// el primer parametro es el nombre del Evento es la funcion que se activa

// 2- boton.onclick 

// 3- Sintaxis 

// --------------

let boton = document.getElementById(`miBoton`);

// Opcion 1 - addEventListener()
// let boton = document.getElementById(`btnPricipal`);
// ....... Se llama al elemento, se le agrega addEventListener(1par: nombre del evento
// , 2par: respuesta /funcion);
boton.addEventListener(`click`,interactuar);



function interactuar(){
    alert(`Buen dia, el dia de hoy es `+new Date());
}

// OPCION 2 - propiedad .onclick
// opcion tipo flecha donde se selecciona el elemento 
// .onclick flecha y accion entre llaves
boton.onclick=()=> {console.log(`hichiste click`)};

// OPCION 3 - Crear onclick en la sintaxis del html 
// (en el mismo lugar donde se ponen clases y ID)


// EN TEORIA SE DEBERIA USAR 1 y 2
// LA OPCION 3 NO ES RECOMENDADA PARA PROYECTOS EN PRODUCCION, 
// ES DECIR PROYECTOS QUE YA ESTAN EN USO. 




// ........EVENTOS MAS COMUNES ........

// Eventos de Mouse
// entre los mas comunes 
// mousedown/mouseup: se prime/suelta el boton del raton sobre un elemetno
//mouseover/mouseout= cuando el puntero se mueve sobre el elemento
// mousemove= el movimiento del mouse sobre el elemento activa el evento
// click=




boton.onmouseover=()=>{ //detecta cuando entras a su campo

    console.log(`No me toques!`); 
    boton.className=`btn btn-danger`;

}

// no hay que olvidar las fechas y pensar que el mouse over y mouse out 
// son cosas diferentes, uno activa cuando entra al campo otro cuando sale

boton.onmouseout=()=>{
    boton.className="btn btn-success";
}


// EVENTOS DE TECLADO

// keydown: cuando se presiona cualquier tecla
// keyup: cuando se suelta cualquier tecla

let campoNombre=document.getElementById("nombre");
let campoEdad=document.getElementById("edad");
campoEdad.onkeydown=()=>{console.log(`presionaste una tecla`)};
campoEdad.onkeyup=()=>{console.log(`soltaste una tecla`)};

// Evento change

// se activa cuando se detecta un cambio en el valor del elemento
// ej cambio de un campo a otro con tab



campoEdad.onchange=()=>{
    console.log(`cambio el texto del campo`);
    console.log(`texto actualizado: ` + campoEdad.value)
}

// --------- EVENTO INPUT

campoNombre.oninput=()=>{

    // Podes generar una accion mientras se tipea en uno de los cuadros
    // de ingreso de datos

    // if(isNaN(campoNombre)==false)
    if(!isNaN(campoNombre.value)){
        campoNombre.style.color=`red`;

    }else{
        campoNombre.style.color=`black`;
    }
}
    // De esta manera pone en rojo el texto que no corresponda
    // por queremos dar a entende rque es un campo solo para texto
    
// isNaN is  Not a number
// si el campo nombre no es un no numero, entonces por lo tanto es numero
// con ! se niega 

// Es decir si se niega que un elemento no es un numero (isNaN), el resultado es 
// que lo es


//....................... Evento submit

// El evento submit se activa cuando el formulario 
// es enviado
// El evento submit sirve para validar los datos antes de enviar 
// un formulario

// Se llama al evento con una (e) llamado objeto evento
// despues de nombrar la function. 

// function validarFormulario(e){
//     e.preventDefault();
//     console.log(`formulario enviado`);
// }

// Ejemplo de como llamar al evento y modificarlo. 

// HTML 
// <form> id=`formulario`
//     <input type = `text`>
//     <input type = `number`>
//     <input type = `submit` value= `enviar`>
    
//     </form>


// let miFormulario = document.getElementById(`formulario`);
// miFormulario.addEventListener(`submit`, validarFormulario);

// function validarFormulario(e){

//     e.preventDefault(); // cancelamos el comportamiento del evento
//     let formulario = e.target // obtenemos el elemento desde el cual se disparo el evento
//     console.log(formulario.children[0].value); // obtengo el valor del primer hijo input txt
//     console.log(formulario.children[1].value); // obtengo el valor del primer hijo input nbr

// }

// EVENTO SUBMIT EJEMPLO PROFE

let formulario = document.getElementById(`formulario`);
formulario.addEventListener(`submit`,validarFormulario);

function validarFormulario(e){//tomo el evento con el (e)
    if(isNaN(campoEdad.value)|| campoNombre.value==``){ 
        // no me lo va a enviar si el campo edad no es un numero y el nombre esta vacio
        e.preventDefault();//evita que se borren todos los campos 
        alert(`ingrese nombre o edad valido`);
    }
}

//EVENTO DE TECLADO DETECTANDO EL ENTER

function capturarEnter(e){

    //segun navegador usamos la propiuedad which o keycode para detectar una tecla en 
    // particular

    if(e.which==13 || e.keycode==13){
        alert(`presionaste Enter`);
    }
}
// Por lo tanto primero tenemops que detectar cual es la clave acsii de la tecla que queremos 
// escuchar y luego la incorporamos a un if 




//EVENTO COPY DE CLIPBOARD

let textosCopia = document.getElementsByClassName(`textoP`);
//textos copia es un array si o si 
//se intentara copiar el primer texto y te marca por consola quien marco tu texto y lo copio
// puede ser usado con fines estadisticos, para saber si alguien esta llevandose tu info
// en un blog

// ESTOS SON LLAMADOS EVENTOS DE CLICKBOARD CHEQUEAR !!!!

textosCopia[0].addEventListener(`copy`,console.log(`textos copia`));

