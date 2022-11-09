// "use strict"
// alert("Hola Mundo"); // sirve para crear alertas y salgan en la pagina
var curso = "fullstack"; // se cra una variable
curso = true
let precio = "3€",
    color = "negro",
    cantidad = "10",
    tamaño = "100cm";
console.log(cantidad);
console.log(precio);
console.log(tamaño);
console.log(color);
// let y var son igual pero const sirve para cuando son variables que no se van a cambiar 
// aunque no se cambie se prefiere que se cambie por let
let producto = "patata";

// let producto = String ("patata");
// let producto = String ("patata");
console.log(producto);
console.log(producto.length);// longitud del valor de la variable
let tweet = "y yo haciendo esto";
console.log(tweet.includes("yo")); //palabras encluidas en el tweet sale verdadero o falso
console.log(tweet.indexOf("yo")); //posicion en la que inicia la palabras encluidas en el tweet
const numero1 = 100,
    numero2 = 15,
    numero3 = 30.5,
    numero4 = "200";
console.log(numero1, numero2, numero3, numero4);
console.log(typeof numero4);
let texto = "Hola"
console.log(typeof texto);
let resultado = numero1 + numero3;//suma
console.log(resultado)
let resultado2 = numero1 - numero3;//resta
console.log(resultado2)
let resultado3 = numero1 * numero3;//multiplicación
console.log(resultado3)
let resultado4 = numero1 / numero3;//división
console.log(resultado4)
let resultado5 = numero1 % numero3;//división
console.log(resultado5)
// let resultado6 = Math.random();// numeros ramdons
// let resultado6 = Math.round(7.49);// numeros mas prosimo
// let resultado6 = Math.ceil(7.1);//te redondea hacia arriba
// let resultado6 = Math.floor(7.1);//te redondea hacia abajo
// let resultado6 = Math.sqrt(144);//raiz cuadrada
// let resultado6 = Math.pow(12,2);//(12^2)elevaciones
// let resultado6 = Math.abs(-10.3);//valor absoluto
// let resultado6 = Math.min(3,6,9);//te coje el mas pequeño
// let resultado6 = Math.max(3,6,9);//te coje el mas grande
// let ejercicio = (Math.random()*10+1);//entero mayor a uno

let ejercicio = Math.PI * 16;
console.log(Math.floor(ejercicio));
// let likes = 10; //es como los likes de instagram etcc..
// likes++;//SUBIDA DE UNO EN UNO
// console.log("likes", ++likes);//Si lo pones adenlante de likes lee como 11
//pero si lo pones detras su valor no cambia de 10
let likes = 10;
console.log("likes", likes += 10);// este incrementa de 10 en 10

let nombre = "carlos",
    apellido = "sansinena",
    email = "carlos.sansinena.gamail.com";
// console.log("nombre apellidos y email", nombre, " ", apellido," ", email);~
console.log(`nombre, apellidos y email: ${nombre},${apellido},${email}`);//template string
// ("nombre", nombre) para ver como 
let boolean1 = true,//boolean true
    boolean2 = false,//boolean false
    boolean3 = "true";//string 
const boolean4 = new Boolean(true);//object
console.log(typeof boolean1);
console.log(typeof boolean2);
console.log(typeof boolean3);
console.log(typeof boolean4);
// const NOMBRE_OBJETO= new String (silla);
// const PRECIO_OBJETO= new Number(3);
// const DISPONIBILIDAD_OBJETO= new Boolean(true);
const OBJETO = { NOMBRE_OBJETO: "Silla", PRECIO_OBJETO: "3", DISPONIBILIDAD_OBJETO: "true" };
console.log(OBJETO);
OBJETO.imagenObjeto = "imagen.jpg";
console.log(OBJETO);
// delete OBJETO.PRECIO_OBJETO;
// console.log(OBJETO);
/* 
1º CREAR OBJETO.
2º AÑADIR:(1 PROPIEDAD, BORRAR).
3º BORRAR: BORRAR.
4º MOSTRARLO EN PANTALLA.
*/
let Bebidas = {
    BEBIDAS_ALCOHOLICAS: "cerveza",
    PRECIOS_ALCOHOLICAS: 2,
    BEBIDAS_NO_ALCOHOLICAS: "Fanta de naranja",
    PRECIOS_NO_ALCOHOLICAS: 1.5,
    CÓCTEL_ALCOHOLICAS: "JÄGERBOOM",
    PRECIOS_CÓCTEL: 7,
    ANTIGUO_COCTEL: "MARGARITA"
};
delete Bebidas.ANTIGUO_COCTEL;
console.log(Bebidas);
/*let 
BEBIDAS_ALCOHOLICAS= Bebidas.BEBIDAS_ALCOHOLICAS,
PRECIOS_ALCOHOLICAS= Bebidas.PRECIOS_ALCOHOLICAS,
BEBIDAS_NO_ALCOHOLICAS= Bebidas.BEBIDAS_NO_ALCOHOLICAS,
PRECIOS_NO_ALCOHOLICAS= Bebidas.PRECIOS_NO_ALCOHOLICAS,
CÓCTEL_ALCOHOLICAS= Bebidas.CÓCTEL_ALCOHOLICAS,
PRECIOS_CÓCTEL= Bebidas.PRECIOS_CÓCTEL;

console.log(BEBIDAS_ALCOHOLICAS , PRECIOS_ALCOHOLICAS , BEBIDAS_NO_ALCOHOLICAS , PRECIOS_NO_ALCOHOLICAS , CÓCTEL_ALCOHOLICAS , PRECIOS_CÓCTEL);
*/
let { BEBIDAS_ALCOHOLICAS, PRECIOS_ALCOHOLICAS } = Bebidas;
console.log(BEBIDAS_ALCOHOLICAS + " " + PRECIOS_ALCOHOLICAS);
// Object.freeze(Bebidas);//congela el objeto y no se puede:(ni borrar ni modificar ni añadir)
Object.seal(Bebidas)//congela el objeto y no se puede:(ni borrar ni añadir pero si puede modificar)
Bebidas.PRECIOS_ALCOHOLICAS = 3;
console.log(Bebidas);
let objetoNuevo = {
    ...Bebidas,
    ...OBJETO
};//muestra todos los objetos anteriores en un solo abjeto
console.log(objetoNuevo);
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(numeros);
let meses = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
];//arrays de meses
console.log(meses);

// console.table(meses2)
let arrayMezcla = [
    curso = "mates",
    plazas = 100,
    ocupacion = true,
    {
        nombre: "jose",
        apellido: "fernadez"
    },
    [20, 640277698, 42]
];
console.log(arrayMezcla);
console.log(arrayMezcla[3], arrayMezcla[2]);
console.log(meses.length);//anchura de los arrays
numeros[0] = 80;//el indice 0 es 10 pero se va a cambiar a 80 sirve para modificar
numeros.unshift(69);//te entra los datos en las primeras estancias
numeros[10] = 20;//se salta el index de la array a la posición que se establece
numeros.push(70, 90, 135);//te entra los datos en las ultimas estancias
numeros.pop();//elimina la ultima estancia
numeros.shift();//elimina la primera estancia
numeros.splice(3, 2);//este elimina desde el indice 3 los 2 siguientes valores
console.table(numeros);
let array2 = [
    ...meses, "septiembre"//spread 
];
console.table(array2);
let array3 = [
    "diciembre", ...meses
];
console.table(array3);
let Resultado100 = [
    meses.includes("marzo")
];//includes
console.log(Resultado100);

let carrito = [
    { prenda: "gorras", precio: 7 },
    { prenda: "camiseta", precio: 19 },
    { prenda: "sudadera", precio: 30 },
    { prenda: "pantalones", precio: 25 },
    { prenda: "zapatillas", precio: 35 }
];
console.table(carrito);
let diasDeLaSemana = [
    "marte",
    "miercoles",
    "jueves",
    "viernes",
    "sabado"
];
diasDeLaSemana.unshift("lunes")
diasDeLaSemana.pop()
console.table(diasDeLaSemana)
let camiseta = 7, cinturon = 5;
// function sumar (n1,n2) {
// console.log(n1+n2)
// }//esto es una funccion, siempre son iguales
// sumar();
function sumar(n1, n2) {
    console.log(n1 + n2);
};
sumar(camiseta, cinturon);//esto es una funccion, siempre son iguales
function restar(n1, n2) {
    console.log(n1 - n2);
};
restar(camiseta, cinturon);
const sumar2 = function (n1, n2) {
    console.log(n1 + n2);
};
sumar2(camiseta, cinturon);//esta es otra forma de *expresion* una funccion
//IIFE
(function () {
    console.log(5 + 7);
})();
sumar3()
function sumar3() {
    console.log(50 + 60);
};//este si te deja llamar a la funcion antes de crearse, NO DA FALLO a esto se le llama declaración
// sumar4()
const sumar4 = function () {
    console.log(80 + 70);
};//este no te deja llamar a la funcion antes de crearse, DA FALLO se le llama expresión
let numero100 = 20,
    numero200 = "20";
console.log((parseInt(numero200)));
console.log(typeof (parseInt(numero200)));
console.log((numero100.toString()));
console.log(typeof (numero100.toString()));
//nombre de variable.funccion=Método
//funccion(nombre de variable)=funccion
function sumar5(num1 = 0, num2 = 0) {
    console.log(num1 + num2);
};
sumar5(10);
sumar5(5, 10);
sumar5(10, 17);
sumar5(19, 17);
sumar5(25, 44);
//que yo darle una fuccion a hipotenusa con cateto1 y cateto2
function hipotenusa(cateto1 = 0, cateto2 = 0) {
    console.log(Math.sqrt(((cateto1 * cateto1) + (cateto2 * cateto2))))
}
hipotenusa(3, 4)
console.log(Math.pow(3, 2));//
function restar2(n1 = 0, n2 = 0) {
    return (n1 - n2);
};
let resultadoResta = restar2(2, 3);
console.log("este es el resultado resta2: ", resultadoResta);
// -----------------------------------------------------------------------------------------------------
let total = 0
let carrito2 = function (precio) {
    return total += precio
};
carrito2(10)//"camisa"
carrito2(25)//"pantalon"
carrito2(10)//"corbata"
console.log(total);//en este ejercicio hemos hecho un carrito 
let totalIva = 0
let impuestos = function (tasas = 0) {
    return (totalIva += tasas * 0.21)
};
impuestos(10)//"camisa"
impuestos(25)//"pantalon"
impuestos(10)//"corbata"
console.log(totalIva)//en este ejercicio le ponemos un iva del 21% en cada producto 
//metodo de propiedad --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let reproductorMusical = {
    reproducir: function (idCancion) {
        console.log(`Reproduciendo cancion con el ID: ${idCancion}`);
    },
    pausar: function () {
        console.log(`pausando...`);

    },
    crearPlaylist: function (playlist) {
        console.log(`Creando Playlist: ${playlist}`);
    }
};
// reproductorMusical.reproducir(idCancion=23)
// reproductorMusical.pausar()
// reproductorMusical.crearPlaylist("los morancos")
reproductorMusical.borrarCancion = function (idCancion) {
    console.log(`borrando la cancion con el ID:${idCancion}`);
};
// reproductorMusical.borrarCancion(23)
console.log(reproductorMusical);
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------
//esto es nuevo=O=>
// let multiplcar=(x);

let puntaje = 1000;
if (puntaje == 1000) {
    console.log("puntaje acertado");

} else {
    console.log("puntaje erroneo");
}
//=nos asigna valor a la variable,
// ==comprobacio que se igual sin mirar el tipo de dato,
//  === te lo compara para que sea identico al valor asignado.
//===igual,
// !==distinto,
//  >mayor,
//  >=mayor o igual a,
//  <menor,
//  <=menor o igual a.
let saldo = 2000;
let retirar = 3000;
if (saldo >= retirar) {
    console.log("puede retirar ", saldo);
} else {
    console.log("saldo insuficiente", saldo);
};
console.log("--------------------------------------------------------------------");
let a = 120,
    b = 110,
    c = 125;

if (a + b + c === 180) {
    console.log("triangulo");
} if (a + b + c === 360) {
    console.log("cuadrado");
} else {
    console.log("no eres nada");
};
console.log("--------------------------------------------------------------------");
let rol = 1;
let lobo = 1,
    vidente = 2,
    bruja = 3,
    niña = 4;
if (rol === 1) {
    console.log("eres un lobo");
} else if (rol === 2) {
    console.log("eres la vidente");
} else if (rol === 3) {
    console.log("eres la bruja");
} else if (rol === 4) {
    console.log("eres la niña");
} else {
    console.log("eres un ciudadano");
};
console.log("--------------------------------------------------------------------");
let rol2 = 1;
switch (rol2) {
    case 1: console.log("eres un lobo");
        break;
    case 2: console.log("eres la vidente");
        break;
    case 3: console.log("eres la bruja");
        break;
    case 4: console.log("eres la niña");
        break;
    default: console.log("eres un ciudadano");
        break;
};
console.log("--------------------------------------------------------------------");
//funcion que comparé las hora de asistencia+ la horas de impleabilidad y si las suma de las 2 es superior al 75% horas totales 260
//asistencia okey, si no poner las pilas empleabilidad
let horasDeAsistencia = 194,
    horasDeEmpleabilidad = 0,
    horasTotales = 260;
if (horasDeAsistencia + horasDeEmpleabilidad >= (horasTotales * 0.75)) {
    console.log("asistencia ok");
} else if (horasDeAsistencia >= (230 * 0.75)) {
    console.log("hay que ponerse las pilas con emplebilidad");
} else {
    console.log("ponte las pilas con todo");
};
console.log("--------------------------------------------------------------------");
// for (let i= 0; i <= 5 ; i++){
//     console.log(i)
// };
// for (let i= 1; i <= 100 ; i++){
// if(i%2==1){
// console.log(i)
// }};
// mostrar por pantalla las prenda de carrito2
console.log("--------------------------------------------------------------------");
let carrito3 = [
    {
        prenda: "gorras",
        precios: 7
    },
    {
        prenda: "camiseta",
        precios: 19
    },
    {
        prenda: "sudadera",
        precios: 30
    },
    {
        prenda: "pantalones",
        precios: 25
    },
    {
        prenda: "zapatillas",
        precios: 35
    }
];
for (let i = 0; i < carrito3.length; i++) {
    console.log(carrito3[i].prenda, carrito3[i].precios);
};
console.log("--------------------------------------------------------------------");
let estaciones = "invierno";
let
    estacion1 = "invierno",
    estacion2 = "primavera",
    estacion3 = "verano",
    estacion4 = "otoño";

let meses3 = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"];//arrays de meses con tabla

if (estaciones == "invierno") {
    for (let mes = 0; mes <= 1; mes++) {
        console.log("este son los meses de ", estaciones, meses3[mes]);
    }
} else if (estaciones == "primavera") {
    for (let mes = 2; mes <= 7; mes++) {
        console.log("este son los meses de ", estaciones, meses3[mes]);
    }

} else if (estaciones == "verano") {
    for (let mes = 8; mes <= 10; mes++) {
        console.log("este son los meses de ", estaciones, meses3[mes]);
    }
} else {
    for (let mes = 11; mes <= 13; mes++) {
        console.log("este son los meses de ", estaciones, meses3[mes]);
    }
};
console.log("--------------------------------------------------------------------");
let dado1 = [
    { caras1: 1 },
    { caras1: 2 },
    { caras1: 3 },
    { caras1: 4 },
    { caras1: 5 },
    { caras1: 6 }
];
let dado2 = [
    { caras2: 1 },
    { caras2: 2 },
    { caras2: 3 },
    { caras2: 4 },
    { caras2: 5 },
    { caras2: 6 }
];
let dado3 = [
    { caras3: 1 },
    { caras3: 2 },
    { caras3: 3 },
    { caras3: 4 },
    { caras3: 5 },
    { caras3: 6 }
];
for (let i = 0; i < dado1.length; i++) {
    for (let n = 0; n < dado2.length; n++) {
        for (let d = 0; d < dado3.length; d++) {
            if (dado1[i].caras1 + dado2[n].caras2 + dado3[d].caras3 == 6) {

                console.log(`dado1 "${dado1[i].caras1}" ,dado2 "${dado2[n].caras2}" ,dado3 "${dado3[d].caras3}" la suma da 6 que es lo que se pretende`);//Es im
            }
        }
    }
};
console.log("--------------------------------------------------------------------");
// while (condition) { : mientras     
// }
let i = 1;
while (i <= 100) {
    if (i % 2 == 0)
        console.log(i);
    i++;
};
console.log("--------------------------------------------------------------------");
let meses4 = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre"
];
meses4.forEach(i => console.table(i));// por cada objeto de la array
console.log("--------------------------------------------------------------------");
let arrayMap = meses4.map(i => console.log(i));
console.log("--------------------------------------------------------------------");
// this: 
let reservas = {
    nombres: "carlos",
    apellidos: "sansinena",
    camiseta: 32,
    pantalones: 50,
    totales: 82,
    pagados: true,
    informacion: function () {
        console.log(`El cliente ${this.nombres} ${this.apellidos} reservo una camiseta = ${this.camiseta} y un pantalon = ${this.pantalones} y su cantidad a pagar es de ${this.totales}`);
    }
}
console.log(reservas.informacion());
console.log("--------------------------------------------------------------------");
// Object LITERAL
let productoPrueba = {
    nombre: "tablet",
    precio: 500
};
// Object CONSTRUCTOR
function ProductoPrueba2(nombre, precio, pagado) {
    this.nombre = nombre;
    this.precio = precio;
    this.pagado = pagado;
};
let productoPrueba3 = new ProductoPrueba2("camiseta", 37, true);
let productoPrueba4 = new ProductoPrueba2("pantalones", 50, true);
console.log(productoPrueba3, productoPrueba4);
console.log("--------------------------------------------------------------------");
class Personajes {
    constructor(nombre, poder) {
        this.nombre = nombre;
        this.poder = poder;
    }
    descripcionPersonaje() {
        console.log(`el personaje ${this.nombre} tiene el poder ${this.poder}`);
    }
}

let personaje1 = new Personajes("Arquero", "flechas envenenadas");
let personaje2 = new Personajes("Brujo", "lluvia de acido");
let personaje3 = new Personajes("Curandero", "creacion de pociones de vida");
personaje1.descripcionPersonaje();
personaje2.descripcionPersonaje();
personaje3.descripcionPersonaje();
console.log("--------------------------------------------------------------------");

class Libro {
    constructor(nombre, precio, isbn) {
        this.nombre = nombre;
        this.precio = precio;
        this.isbn = isbn;
    }
    descripcionLibro() {
        console.log(`El titulo del libro ${this.nombre} con el valor ${this.precio} y con el isbn ${this.isbn}`);
    }
}
let libro1 = new Libro("harry potter y la camara secreta", 23, 0672567);
let libro2 = new Libro("el señor de los anillos la comunida del anillo", 25, 06235671);
let libro3 = new Libro("los hijos de la bruma", 30, 067743275);

libro1.descripcionLibro()
libro2.descripcionLibro()
libro3.descripcionLibro()
console.log("--------------------------------------------------------------------");


class Libro2 extends Libro {
    constructor(nombre, precio, isbn, stock) {
        super(nombre, precio, isbn);
        this.stock = stock;
    }
    descripcionLibro2() {
        console.log(`El titulo del libro ${this.nombre} con el valor ${this.precio}, con el isbn ${this.isbn} y hay stock ${this.stock}`);
    }
};
let libro4 = new Libro2("harry potter y la camara secreta", 23, 0672567, true);
let libro5 = new Libro2("el señor de los anillos la comunida del anillo", 25, 06235671, false);
let libro6 = new Libro2("los hijos de la bruma", 30, 067743275, true);
libro4.descripcionLibro2()
libro5.descripcionLibro2()
libro6.descripcionLibro2()

let c1 = 20,
    c3 = 30;
console.log(c1);
try {
    console.log(c2);
} catch (error) {
    console.log(error);
}
console.log(c3);
console.log("--------------------------------------------------------------------");
let usuarioAutenticado = new Promise((resolve, reject) => {
    let auth = true;
    if (auth === true) {
        resolve("el promise se cumple");
    } else {
        alert("el promise no se cumple")
        reject("el promise no se cumple");
    }
})
// console.log(usuarioAutenticado);
console.log("--------------------------------------------------------------------");
// usuarioAutenticado
//     .then(function (resultado) {
//         console.log(`${resultado}`);
//     })
//     .catch(function (error) {
//         console.log(`${error}`);
//     });
// querySelector: solo seleciona uno o ninguno
// querySelectorAll: seleciona todos o ninguno
// Getelementbyid:seleciona por id
let botonJS = document.querySelector(`.botonJS`);
botonJS.addEventListener('click', function () {
    console.log('Diste al click');
    Notification.requestPermission()
        .then(function (resultado) {
            console.log(`Permiso ${resultado}`);
        })
        .catch(function (error) {
            console.log(`${error}`);
        });
});

// setTimeout(function () {
//     console.log("set time a los 5s")
// }, 5000);
//  asta que no pasa 5s no hace esa funcion.
// setInterval(function() {
//     console.log("set time a los 5s")
// }, 5000);
// bucle de 5s
// async 

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log("Descargando clientes.... espere...");
        setTimeout(function () {
            resolve("los clientes fueron descargados");
        }, 5000);
    });
}//creamos una funcion que solo tendrá resolve.

async function app() {
    let resultadoApp = await descargarNuevosClientes();
    console.log("Este codigo si se bloquea");
    console.log(resultadoApp);
};
app();
console.log("Este codigo no se bloquea");

function obtenerEmpleados() {
    fetch('empleados.json')
        .then(resultado => {
            return resultado.json();
        })
        .then(datos => {
            console.log(datos);
            let { empleados } = datos;

            console.log(empleados.id);
            console.log(empleados.nombre);
            console.log(empleados.puesto);
        })
}
obtenerEmpleados();
let minutos = 0
let hora = 480;
for (let i = 2; i < 20; i += 2) {
    for (let j = 1; j < i; j++) {
        if (i < 5) {
            minutos = minutos + i + j;
        }
    }
}
let horasSalida = ((hora + minutos - 8) / 60)
console.log
Math.round(horasSalida), ':', ((horasSalida - 8) * 60);
console.log("--------------------------------------------------------------------");

let selectorTexto = document.querySelector(".texto-meh");
console.log(selectorTexto);

selectorTexto.textContent = "Nuevo Heading";
selectorTexto.classList.add("claseDesdeJS");
let enlaceJS = document.querySelectorAll(".enlaces");
console.log(enlaceJS)
enlaceJS[0].href = "https://www.google.com";
console.log("--------------------------------------------------------------------");

let nuevoEnlace = document.createElement("A");
nuevoEnlace.href = "https://www.google.com";
nuevoEnlace.textContent = "nuevo enlace desde JS"
nuevoEnlace.classList.add = ("NavegacionEnlace")
console.log(nuevoEnlace);
console.log("--------------------------------------------------------------------");

let navPrincipal = document.querySelector(".nav-principal")
navPrincipal.appendChild(nuevoEnlace);
console.log(1);
window.addEventListener('load', function () {
    console.log(2);
});
window.onload = function () {
    console.log(3);
}
document.addEventListener('DOMContentLoaded', function () {
    console.log(4);
});
console.log(5);
console.log("--------------------------------------------------------------------");
//EVENTO SCROLL

window.onscroll = function () {
    console.log('haciendo scroling....');
};
// let botonEnviar = document.querySelector(".botonFormulario");
// console.log("boton enviar seleccionado", botonEnviar);
// botonEnviar.addEventListener('click', function (evento) {
//     console.log(evento);
//     evento.preventDefault();//para que no recarge la pagina y se vaya para arriba
//     console.log("Enviando Formuilario");
// });
console.log("--------------------------------------------------------------------");
let nombreInput = document.querySelector("#nombreInput");
let apellidoInput = document.querySelector("#apellidoInput");
let emailInput = document.querySelector("#emailInput");
let telefonoInput = document.querySelector("#telefonoInput");
let mensajeInput = document.querySelector("#mensajeInput");
let datosFormulario = {
    nombreInput: "",
    apellidoInput: "",
    emailInput: "",
    telefonoInput: "",
    mensajeInput: ""
};
// function leertexto(evento) {
//     console.log("Escribiendo",evento);
//     console.log(evento.target.value);
// }
function leertexto(e) {
    datosFormulario[e.target.id] = e.target.value;
    console.log(datosFormulario);
}
nombreInput.addEventListener('input', leertexto);
apellidoInput.addEventListener('input', leertexto);
emailInput.addEventListener('input', leertexto);
telefonoInput.addEventListener('input', leertexto);
mensajeInput.addEventListener('input', leertexto);

let formulario = document.querySelector(".formulario")
formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    let { nombreInput,
        apellidoInput,
        emailInput,
        telefonoInput,
        mensajeInput } = datosFormulario;

    if (nombreInput === "" || apellidoInput === "" || emailInput === "" || telefonoInput === "" || mensajeInput === "") {
        console.log("todos los campos son obligatorios");
        mostrarerror("todos los campos son obligatorios")
        return;
    };

 mostrarmensaje("mensaje Enviado correctamente");

    // destructuring
    // console.log(nombreInput);
    //     console.log(apellidoInput);
    //     console.log(emailInput);
    //     console.log(telefonoInput);
    //     console.log(mensajeInput);
    // console.log("enviando formulario")
});


function mostrarmensaje(mensajes) {
    let correcto = document.createElement('p')
    correcto.textContent = mensajes
    correcto.classList.add("correcto");
    formulario.appendChild(correcto);
    setTimeout(() => {
        correcto.remove();
    }, 3000)
}

function mostrarerror(mensaje) {
    let error = document.createElement('p')
    error.textContent = mensaje;
    error.classList.add("error");
    formulario.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 3000)
}

