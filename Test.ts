//Import funciones de las rutas RepasoIf/RepasoFor/RepasoWhile
import { signoZodiacal, paisContinente, parOImpar } from './RepasoIf';
import { arrayString, sumaCaracteres, arrayInvertido, numerosImpares } from './RepasoFor';
import { arrayNombres, existeNumeroPar } from './RepasoWhile';

//Funcionalidad fecha nacimiento signo del zodiaco
console.log("");
console.log("Funcionalidad dada la fecha devuelve signo del zodiaco");
console.log("Ejemplo con fecha: 25/07/1993");
let fecha1:Date = new Date("1993-07-25");
console.log(signoZodiacal(fecha1));
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad país-continente
console.log("Funcionalidad dada el país determinar a qué continente"
 + " pertenece");
console.log("Ejemplo con país: Argentina");
let pais: string = "Argentina";
paisContinente(pais);
console.log("------------------------------------------------------");
console.log("");

// //Funcionalidad imprimir números impares
console.log("Funcionalidad dada un número cualquiera imprime por " +
"consola los impares exsistentes");
console.log("Ejemplo con número: 10");
numerosImpares(10);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad array invertido
console.log("Funcionalidad que permite invertir un array");
console.log("EJemplo con el array: [1, 2, 3, 4]")
let arr:number[] = [1, 2, 3, 4];
let sol:number[] = arrayInvertido(arr);
console.log(sol);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad array string
console.log("Funcionalidad que permite identificiar que colores"
 + " dentro de un array pertenecen al arcoiris.");
console.log("Ejemplo: [Rojo, Blanco, Amarillo, Oro].")
let arr1: string[] = ["Rojo", "Blanco", "Amarillo", "Oro"];
arrayString(arr1);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad existe numero par
console.log("Funcionalidad que permite detectar si existe un numero "
+ "par en el array dado.")
console.log("Ejemplo con el array: [1, 5, 9, 11, 8, 6, 2, 0]")
let num: number[] = [1, 5, 9, 11, 8, 6, 2, 0];
let sol1: boolean = existeNumeroPar(num);
console.log(sol1);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad nombres que empiezan por M
console.log("Funcionalidad que identifica si y solo si todos los "
+ "nombres del array empiezan por la letra M.")
console.log("Ejemplo con el array: [María, Juan, Maricarmen]")
let nombres:string[] = ["María", "Juan", "Maricarmen"];
console.log(arrayNombres(nombres));
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad suma de caracteres
console.log("Funcionalidad que devuelve la suma del número de "
+ "caracteres de las palabras almacenadas en el array");
console.log("Ejemeplo con el array: [patata, camión, pera, 123].");
let arr2:string[] = ["patata", "camión", "pera", "123"];
console.log(sumaCaracteres(arr2));
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad par o impar
console.log("Funcionalidad que identifica si el parámetro introducido "
+ "es par o impar");
console.log("Ejemplo: parametro = 23.");
let parametro:number = 23;
parOImpar(parametro);
console.log("------------------------------------------------------");
console.log("");

//Funcionalidad suma caracteres y par o impar para arrays dados
console.log("Comprobar usando las funcionalidades: "
+ "Suma caracteres en un array y Par o impar.")
console.log("Los siguientes array: " +"\n" +
"1.- [Casa, Coche, Cuidad, Cesta]" + "\n" +
"2.- [Barco, Baca, Bicicleta, Bisiesto, Brasil]" +"\n" +
"3.- [Venezuela, Veneno, Voltaje]");
let nombres1: string[] = ["Casa", "Coche", "Cuidad", "Cesta"];
let nombres2:string[] = ["Barco", "Baca", "Bicicleta", "Bisiesto"
, "Brasil"];
let nombres3 :string[] = ["Venezuela", "Veneno", "Voltaje"];
let nombres1Sum:number = sumaCaracteres(nombres1);
let nombres2Sum:number = sumaCaracteres(nombres2);
let nombres3Sum:number = sumaCaracteres(nombres3);
console.log("El contador del array: 1. Es: " + nombres1Sum);
parOImpar(nombres1Sum);
console.log("El contador del array: 2. Es: " + nombres2Sum);
parOImpar(nombres2Sum);
console.log("El contador del array: 3. Es: " + nombres3Sum);
parOImpar(nombres3Sum);