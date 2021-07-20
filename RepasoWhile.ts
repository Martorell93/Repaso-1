//FUNCIONALIDADES CON WHILE

//Funcionalidad existe numero par
export function existeNumeroPar(num : number[]):boolean {
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

//Funcionalidad nombres que empiezan por M
export function arrayNombres (nombres:string[]):boolean {
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