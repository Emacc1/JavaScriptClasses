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
