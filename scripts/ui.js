import { getDataUnique } from "./process.js";

const mainContainer = document.getElementById('mainContainer');
const pokemonsFooter = document.getElementById('pokemonsFooter')
const typePokemon = document.getElementById('typePokemon')
const searchPokemonInput = document.getElementById('searchPokemon') 
const searchButton = document.getElementById('searchButton')

let pokemonFiltered;

// recibe parametro lista de pokemones
export const printPokemons = (listPokemons) => { //llamar la función del process
    console.log(listPokemons)
    pokemonsFooter.innerHTML = "";
    listPokemons.forEach((element, index) => {
        if (index < 4) {
            pokemonsFooter.innerHTML += `
            <figure class="img_footer_container">
            <img src="${element.info.sprites.other['official-artwork'].front_default
            }" alt="squirtle" class="img_footer" data-url="${element.url}">
        </figure>
            `
        }

    }); 
}



const printPokemonInformation = (pokemonData) => {



    mainContainer.innerHTML = "";
    mainContainer.innerHTML = `
    <section class="section section1">
    <h1> ${pokemonData.name}</h1>
    <figure>
        <img src="${pokemonData.sprites.other['official-artwork'].front_default}" class="pokemonImage">
    </figure>
</section>

<section class="section section2">
    <div class="box">
        <div class="content_s2">
            <h3>NO</h3>
            <p>${pokemonData.id}</p>
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
            <p>${pokemonData.types[0].type.name}</p>
        </div>
    </div>

    <div class="box">
        <div class="content_s2">
            <h3>HABILITY</h3>
            <p>${pokemonData.abilities[0].ability.name}</p>
            <p>${pokemonData.abilities[1].ability.name}</p>
        </div>
    </div>

    <div class="box">
        <div class="content_s2">
            <h3>HEIGHT</h3>
            <p>${pokemonData.height}</p>
        </div>
    </div>

    <div class="box">
        <div class="content_s2">
            <h3>WEIGHT</h3>
            <p>${pokemonData.weight}</p>
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



// const findPokemon = (word) => {
//     pokemonFiltered = data.find((pokemon) => 
//       pokemon.name.toLowerCase().includes(word.toLowerCase())
//     );
  
//     console.log(pokemonFiltered);
//   };


// //función filtrar
// const filterArray = (word,text) => {
//     filtered = filtered.filter((object) =>
//       object.location.toLowerCase().includes(word.toLowerCase()) && object.type.includes(text)
      
//     );
//     console.log(filtered);
//   };

// //recibir informacion botón
// const handle=()=>{
//     let infoButton=selectLocation.value; //llamar el valor del contenedor select
//     let infoInput=inputSearch.value;//llamar el valor del input
//     console.log(infoButton,infoInput);
//     filterArray(infoButton,infoInput);
//     printCards();
// }
// btnSearch.addEventListener('click',handle)

