//Funcionalidad fecha nacimiento signo del zodiaco
let signoZodiacal = (fechaDeNacimiento:Date):string => {
    let month: number = fechaDeNacimiento.getMonth();
    let date: number = fechaDeNacimiento.getDate();
    let signoZodiaco: string = ""
    if (month === 0 && date > 19 || month === 1 && date < 19) {
        signoZodiaco = "Acuario";
    }
    else if (month === 1 && date > 18 || month === 2 && date < 21) {
        signoZodiaco = "Piscis";
    }
    else if (month === 2 && date > 20 || month === 3 && date < 20) {
        signoZodiaco = "Aries";
    }
    else if (month === 3 && date > 19 || month === 4 && date < 21) {
        signoZodiaco = "Tauro";
    }
    else if (month === 4 && date > 20 || month === 5 && date < 21) {
        signoZodiaco = "Géminis";
    }
    else if (month === 5 && date > 20 || month === 6 && date < 23) {
        signoZodiaco = "Cáncer";
    }
    else if (month === 6 && date > 22 || month === 7 && date < 23) {
        signoZodiaco = "Leo";
    }
    else if (month === 7 && date > 22 || month === 8 && date < 23) {
        signoZodiaco = "Virgo";
    }
    else if (month === 8 && date > 22 || month === 9 && date < 23) {
        signoZodiaco = "Libra";
    }
    else if (month === 9 && date > 22 || month === 10 && date < 22) {
        signoZodiaco = "Escorpio";
    }
    else if (month === 10 && date > 21 || month === 11 && date < 22) {
        signoZodiaco = "Sagitario";
    }
    else if (month === 11 && date > 21 || month === 0 && date < 20) {
        signoZodiaco = "Capricornio";
    }
    return signoZodiaco;
};
console.log("");
console.log("Funcionalidad dada la fecha devuelve signo del zodiaco");
console.log("Ejemplo con fecha: 25/07/1993");
let fecha1:Date = new Date("1993-07-25");
console.log(signoZodiacal(fecha1));
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad país-continente
let paisContinente = (pais:string) => {
    if (pais === "España" || pais === "Francia" || pais === "Malta"
    || pais === "Paises Bajos" || pais === "Macedonia") {
        console.log("El país: " + pais + " está en Europa");
    }
    else if (pais === "México" || pais === "Honduras"
    || pais === "Argentina" || pais === "Canadá") {
        console.log("El país: " + pais + " está en Ámerica");
    }
    else if (pais === "Congo" || pais === "Marruecos" || pais === "Tanzania"
    || pais === "Sudáfrica" || pais === "Mauritania") {
        console.log("El país: " + pais + " está en África");
    }
    else if (pais === "China" || pais === "India" || pais === "Japón"
    || pais === "Indonesia" || pais === "Corea del Sur") {
        console.log("El país: " + pais + " está en Asia");
    }
    else if (pais === "Australia" || pais === "Nueva Zelanda") {
        console.log("El país: " + pais + " está en Oceanía");
    }
    else if (pais === "Unión de paises") {
        console.log("El país: " + pais + " está en Antartida");
    }
}
console.log("Funcionalidad dada el país determinar a qué continente"
 + " pertenece");
console.log("Ejemplo con país: Argentina");
let pais: string = "Argentina";
paisContinente(pais);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad imprimir números impares
let numerosImpares = (numero:number) => {
    for (numero; numero >= 0; numero--) {
        if (numero % 2 != 0) {
            console.log(numero);
        }
   }
}
console.log("Funcionalidad dada un número cualquiera imprime por " +
"consola los impares exsistentes");
console.log("Ejemplo con número: 10");
numerosImpares(10);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad array invertido
function arrayInvertido(arr:number[]):number[] {
    let arrayNuevo:number[] = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        arrayNuevo.push(arr[i]);
    }
    return arrayNuevo;
}
console.log("Funcionalidad que permite invertir un array");
console.log("EJemplo con el array: [1, 2, 3, 4]")
let arr:number[] = [1, 2, 3, 4];
let sol:number[] = arrayInvertido(arr);
console.log(sol);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad array string
function arrayString(arr:string[]) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "Rojo" || arr[i] === "Naranja" ||
        arr[i] === "Amarillo" || arr[i] === "Verde" ||
        arr[i] === "Azul" || arr[i] === "Violeta") {
            console.log("El color: " + arr[i] + ", está en el"
            + " arcoiris");
        }
        else {
            console.log("El color: " + arr[i] + ", NO está en el"
            + " arcoiris");
        }
    }
}

console.log("Funcionalidad que permite identificiar que colores"
 + " dentro de un array pertenecen al arcoiris.");
console.log("Ejemplo: [Rojo, Blanco, Amarillo, Oro].")
let arr1: string[] = ["Rojo", "Blanco", "Amarillo", "Oro"];
arrayString(arr1);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad existe numero par
function existeNumeroPar(num : number[]):boolean {
    let i:number = 0;
    let resultado:boolean = false;
    while (i < num.length && !resultado) {
        if (num[i] % 2 === 0) {
            resultado = true;
        }
        i++;
    }
    return resultado;
}
console.log("Funcionalidad que permite detectar si existe un numero "
+ "par en el array dado.")
console.log("Ejemplo con el array: [1, 5, 9, 11, 8, 6, 2, 0]")
let num: number[] = [1, 5, 9, 11, 8, 6, 2, 0];
let sol1: boolean = existeNumeroPar(num);
console.log(sol1);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad nombres que empiezan por M
function arrayNombres (nombres:string[]) {
    let i:number = 0;
    let resultado:boolean = false;
    while (i < nombres.length && !resultado) {
        i++;
        if (nombres[i][0] === "M") {
            resultado = false;
        }
        else {
            resultado = true;
        }
        
        return !resultado;
    }
}
console.log("Funcionalidad que identifica si y solo si todos los "
+ "nombres del array empiezan por la letra M.")
console.log("Ejemplo con el array: [María, Juan, Maricarmen]")
let nombres:string[] = ["María", "Juan", "Maricarmen"];
console.log(arrayNombres(nombres));
console.log("------------------------------------------------------");
console.log("");