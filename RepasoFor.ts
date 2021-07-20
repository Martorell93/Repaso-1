//FUNCIONALIDADES QUE TIENEN FOR

//Funcionalidad suma de caracteres
export let sumaCaracteres = (arr2: string[]):number => {
    let contador:number = 0;
    for (let i = 0; i < arr2.length; i++) {
            contador += arr2[i].length;
        }
    return contador;
}

//Funcionalidad array string
export function arrayString(arr:string[]) {
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

//Funcionalidad array invertido
export function arrayInvertido(arr:number[]):number[] {
    let arrayNuevo:number[] = [];
    for (let i = (arr.length - 1); i >= 0; i--) {
        arrayNuevo.push(arr[i]);
    }
    return arrayNuevo;
}

export let numerosImpares = (numero:number) => {
    for (numero; numero >= 0; numero--) {
        if (numero % 2 != 0) {
            console.log(numero);
        }
   }
}