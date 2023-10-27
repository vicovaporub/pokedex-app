import { PokemonDescription } from "@/shared/PokeDescriptionClass";


export const getPokeDescription = (poke: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon-species/${poke}`)
    .then((res) => res.json())
    .then((data) => new PokemonDescription(data))
    .catch((error) => console.log(error))
  }


