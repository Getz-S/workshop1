export const getInfo = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    // const response=await axios.get(URL);
    const { data: { results } } = await axios.get(URL); //en vez del anterior llamo el data que con axios siempre viene en esa propiedad
        // const {results}=data;//results se encuentra dentro de data, es una anidación, para ahorrar código se puede llamar arriba

    results.forEach(async (pokemon, index) => { //consultar y recorrer cada url de cada pokemon
        const {data} = await axios.get(pokemon.url)
        results[index].info = data //array de resultes, agregar nueva propiedad, en cual indice? array results en indice actual colocar nueva propiedad .info que tendra la data 
    });
    return results; //return para poder usar 
}

export const getDataUnique = async (url) => {
    const {data} = await axios.get(url)
    return data;
}
