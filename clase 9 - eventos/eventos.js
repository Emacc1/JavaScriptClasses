// Eventos

// controla las acciones de los usuarios y definir un comportamiento
// de la pagina o aplicacion cuando se produzcan

// JS nos permite escuchar eventos sobre elementos seleccionados

// ........... 3 FORMAS DE DEFINIR EVENTOS ..............

// 1- addEventListener() - permite definir que evento escuchar sobre cualquier elemento seleccionado
// el primer parametro es el nombre del Evento es la funcion que se activa

// 2- boton.onclick 

// 3- Sintaxis 

// --------------

let boton = document.getElementById(`miBoton`);

// Opcion 1 - addEventListener()
// boton.addEventListener(`click`,interactuar);

// function interactuar(){
//     alert(`Buen dia, el dia de hoy es `+new Date());
// }

// OPCION 2 - propiedad .onclick

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
//mouseover/mouseout



boton.onmouseover=()=>{

    console.log(`No me toques!`);
    boton.className=`btn btn-danger`;

}


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

// on change

campoEdad.onchange=()=>{
    console.log(`cambio el texto del campo`);
    console.log(`texto actualizado: `+campoEdad)
}

// --------- EVENTO INPUT

campoNombre.oninput=()=>{
    // if(isNaN(campoNombre)==false)
    if(!isNaN(campoNombre.value)){
        campoNombre.style.color=`red`;

    }else{
        campoNombre.style.color=`black`;
    }

    // De esta manera pone en rojo el texto que no corresponda
    // por queremos dar a entende rque es un campo solo para texto
    
// isNaN is  Not a number
// si el campo nombre no es un no numero, entonces por lo tanto es numero
// con ! se niega 
}