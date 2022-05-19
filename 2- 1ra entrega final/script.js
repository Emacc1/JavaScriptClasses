const listaBelgrano =  propiedades.filter((propiedad)=>propiedad.zona=`Belgrano`)
const listaPalermo =  propiedades.filter((propiedad)=>propiedad.zona=`Palermo`)
const listaRetiro =  propiedades.filter((propiedad)=>propiedad.zona=`Retiro`)

let vuelveAPreguntar = true;

class Propiedad {
    constructor(tipo, zona, direccion, habitaciones, precio) {
        this.tipo  = tipo.toUpperCase();
        this.zona  = zona.toUpperCase();
        this.direccion  = direccion.toUpperCase();
        this.habitaciones  = parseFloat(habitaciones);
        this.precio  = parseFloat(precio);
        this.vendido = false;
    }

    vender(){

        this.vendido = true;
    }
}



const Propiedades = [];
Propiedades.push(new Propiedad (`departamento`, `Belgrano`, `La Pampa 2026`,`19`,`65000`));
Propiedades.push(new Propiedad (`departamento`, `Belgrano`, `La Pampa 2900`,`2`,`45000`));
Propiedades.push(new Propiedad (`departamento`, `Palermo`, `Scalabrini Ortiz 1800`,`4`,`85000`));
Propiedades.push(new Propiedad (`departamento`, `Retiro`, `Paraguay 435`,`3`,`55000`));



console.log(Propiedades);

function buscarZona(art2) {
    if (art2 == 1){
        alert(Propiedades);
    } else if (art2 == 2) {
        alert(listaBelgrano)
    } else if (art2 == 3) {
        alert(listaPalermo)
    } else if (art2 == 4) {
        alert(listaRetiro)
    } else if (art2 == 0) {
        funcion volver atras 
    } else {
        alert("Valor invalido");
    }
}

function buscarOPublicar(art1) {
    if (art1 == 1){
        buscarZona
    } else if (art1 == 2) {
        prompt de funcion para ingresar propiedad
    } else if (art1 == 0) {
        alert('gracias vuelva prontos');
    } else {
        alert("Valor invalido");
    }
}
