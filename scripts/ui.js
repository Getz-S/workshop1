import { getDataUnique, getInfo} from "./process.js";
const mainContainer = document.getElementById('mainContainer');
const pokemonsFooter = document.getElementById('pokemonsFooter')
const typePokemon = document.getElementById('typePokemon');
const searchPokemon = document.getElementById('searchPokemon');
const searchButton = document.getElementById('searchButton');
// export const capturarInformacion=(data)=>{
//   let query=searchPokemon.value;
//   console.log(data);
//   const filter=(query)=>{
//     // let filtroPokemon=dataPokemon.filter((element)=>element.name.includes(query))
//   }
//   filter(query);
// searchButton.addEventListener('click',capturarInformacion)
// }
const filterArray=async(word)=>{
    const URL = 'https://pokeapi.co/api/v2/pokemon/';
    const { data: { results } } = await axios.get(URL);
    const searchFilter = results.find(p=> p.name.toLowerCase().includes(word.toLowerCase()));
    const {data}= await axios.get(searchFilter.url);
    searchFilter.details = data;
    console.log(searchFilter);
    printPokemonInformation(searchFilter)
}
const handleSearch=()=>{
    let searchType=searchPokemon.value;
    filterArray(searchType)
    console.log(searchType);
}
searchButton.addEventListener('click',handleSearch)
let pokemonFiltered;
// recibe parametro lista de pokemones
export const printPokemons = (listPokemons) => { //llamar la función del process
    console.log(listPokemons)
    pokemonsFooter.innerHTML = "";
    listPokemons.forEach((element, index) => {
        if (index < 4) {
            pokemonsFooter.innerHTML += `
            <figure class="img_footer_container">
            <img src="
            " alt="squirtle" class="img_footer" data-url="${element.url}">
        </figure>
            `
        }
    });
}
const printPokemonInformation = (pokemonData) => {
    console.log(pokemonData.details.sprites.other.dream_world.front_default);
    mainContainer.innerHTML = "";
    mainContainer.innerHTML = `
    <section class="section section1">
    <h1> ${pokemonData.details.name}</h1>
    <figure>
        <img src="${pokemonData.details.sprites.other.dream_world.front_default}" class="pokemonImage">
    </figure>
</section>
<section class="section section2">
    <div class="box">
        <div class="content_s2">
            <h3>NO</h3>
            <p>${pokemonData.details.id}</p>
        </div>
    </div>
    <div class="box">
        <div class="content_s2">
            <h3>LEVEL</h3>
            <p>100</p>
        </div>
    </div>
    <div class="box">
        <div class="content_s2" id="typePokemon">
            <h3>TYPE</h3>
            <p>${pokemonData.details.types[0].type.name}</p>
        </div>
    </div>
    <div class="box">
        <div class="content_s2">
            <h3>HABILITY</h3>
            <p>${pokemonData.details.abilities[0].ability.name}</p>
            <p>${pokemonData.details.abilities[1].ability.name}</p>
        </div>
    </div>
    <div class="box">
        <div class="content_s2">
            <h3>HEIGHT</h3>
            <p>${pokemonData.details.height}</p>
        </div>
    </div>
    <div class="box">
        <div class="content_s2">
            <h3>WEIGHT</h3>
            <p>${pokemonData.details.weight}</p>
        </div>
    </div>
</section>
    `
    // pokemonData.types.forEach(element => {
    //     console.log(element.type.name)
    //     typePokemon.innerHTML = "";
    //     typePokemon.innerHTML += `
    //     <h3>TYPE</h3>
    //     <p>hola</p>
    //     `
    // })
}
document.addEventListener('click', async ({target}) => {
    if (target.classList.contains('img_footer')){
        console.log('clicksquirtle')
        const url = target.getAttribute('data-url')
        console.log(url)
        const dataPokemon = await getDataUnique(url);
        console.log(dataPokemon)
        printPokemonInformation(dataPokemon);
    }
})
// const handleSearch = () => {
//     let pokemonInput = searchPokemonInput.value;
//     findPokemon(pokemonInput);
// }
const consoleW = () => {
    console.log('buscando')
}
searchButton.addEventListener('click', consoleW)