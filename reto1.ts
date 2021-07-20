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
}

let fecha1:Date = new Date("1993-07-25");
console.log(signoZodiacal(fecha1));

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

let pais: string = "Argentina";
paisContinente(pais);