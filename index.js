//Simulador Pagina Web Interactiva "Comida En 5"

alert("Bienvenidos a Comida En 5")

//Lets BEBIDAS

let coca = 700
let sprite = 700
let levite = 500
let brahama = 900

//Lets COMIDAS

let hamburguesa = 4500
let lomo = 5000
let pizza = 3500
let papasFritas = 1500
let milanesa = 2500
let menu = 4500 

//Lets POSTRES 

let tiramizu = 1500
let selva_Negra = 1700
let helado = 1000
let ensalada_De_Frutas = 1000


const NOMBREDELCLIENTE = prompt("Ingrese su Nombre aqui")

alert("Buenas tardes " + NOMBREDELCLIENTE + " mediante la consola podras ver nuestra carta de menu")

console.log("COMIDA EN 5")

console.log("BEBIDAS: Coca $700, Sprite $700, Levite $500, Brahama $900,")

console.log("COMIDA: Hamburguesa $4500, Lomo $5000, Pizza $3500, Papas Fritas $1500, Milanesa $2500")

console.log("POSTRES: Tiramizu $1500, Selva Negra $1700, Helado $1000, Ensalada de Frutas $1000")

console.log("MENU DEL DIA: Costeletas con Papas a la Criolla $4500")

console.log("RECIBO DE LA ORDEN DE " + NOMBREDELCLIENTE +":" )

alert("Acontinuacion elije las opciones dentro de nuestras categorias")


switch (ordenDeBebida = prompt("¿Que bebida te gustaria tomar?")){

    case "coca":
        console.log("Ordenaste una coca a $" + coca)
        break;

    case "sprite":
        console.log("Ordenaste una sprite a $" + sprite)
        break;
    
    case "levite":
        console.log("Ordenaste una levite a $" + levite)
        break;

    case "brahama":
        console.log("Ordenaste una brahama a $" + brahama)
        break;

    case "nada":
        console.log("")
        break;

    default:
        alert("Esta bebida no esta disponible o no existe")

}

switch (ordenDeComida = prompt("¿Que comida te gustaria comer?")){

    case "hamburguesa":
        console.log("Ordenaste una hamburguesa a $" + hamburguesa)
        break;

    case "lomo":
        console.log("Ordenaste un lomo a $" + lomo)
        break;
    
    case "pizza":
        console.log("Ordenaste una pizza a $" + pizza)
        break;

    case "milanesa":
        console.log("Ordenaste una milanesa a $" + milanesa)
        break;

    case "papas fritas":
        console.log("Ordenaste unas papas fritas a $" + papasFritas)
        break;

    case "nada":
    console.log("")
    break;

    default:
        alert("Este platillo no esta disponible o no existe")
}

switch ( ordenDePostre = prompt("¿Que postre te gustaria comer?")){

    case "tiramizu":
        console.log("Ordenaste un tiramizu a $" + tiramizu)
        break;

    case "selva negra":
        console.log("Ordenaste una selva negra a $" + selva_Negra)
        break;
    
    case "helado":
        console.log("Ordenaste una pizza a $" + helado)
        break;

    case "ensalada de frutas":
        console.log("Ordenaste una ensalada de frutas a $" + ensalada_De_Frutas)
        break;

    case "nada":
    console.log("")
    break;

    default:
        alert("Este postre no esta disponible o no existe")
    break;
}

for (let i = 0; i < 50000; i++){


    let primerValor = Number(prompt("Ingrese el valor de su bebida"));
    let segundoValor = Number(prompt("Ingresa el valor de su comida"));
    let tercerValor = Number(prompt("Ingrese el valor de su postre"));
    let direccion = prompt("Ingrese la direccion de su domicilio");
    let resultado = 0;

    resultado = primerValor + segundoValor + tercerValor;

    console.log("Perfecto " + NOMBREDELCLIENTE + " el total a pagar es $" + resultado + " tu orden estara lista en 5 minutos en la calle " + direccion + " muchas gracias!")
    
    break;
}
        
        
        
