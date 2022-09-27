import { getDataUnique, getInfo } from "./process.js";
import { printPokemons } from "./ui.js";

const mainFunction = async () => {
    let data = await getInfo(); //get info es promesa y espera respuesta
    let responseInfo = [];
    data.forEach(element => {
        let infoPokemons = getDataUnique(element.url);
        responseInfo.push(infoPokemons)
    });

    const newResponse = await Promise.all(responseInfo);

    data.forEach((_, index) => {
        data[index].info = newResponse[index];
    })
    printPokemons(data);
}

mainFunction(); //necesito la data, la llamo dentro de una función para no usar then
