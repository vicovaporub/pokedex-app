import { Pokemon } from "@/shared/PokemonClass";


 const getPoke = (offset: number) => {

  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
    .then((res) => res.json())
    .then((data) => {
      const dataList = data.results;

      return Promise.all(
        dataList.map((pokePage: { url: RequestInfo | URL; }) =>
          fetch(pokePage.url)
            .then((res) => res.json())
            .then((res) => new Pokemon(res))
        )
      );
    });

};



export async function fetchPokeList(firstIdToGen: number ) {
    
    const pokemons: Pokemon[] =  await getPoke( firstIdToGen )
    return pokemons
}