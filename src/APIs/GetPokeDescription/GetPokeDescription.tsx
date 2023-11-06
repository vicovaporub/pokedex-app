import { Pokemon } from "@/shared/PokemonClass"


export const getPokeDescription = (poke: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`)
    .then((res) => res.json())
    .then((data) => new Pokemon(data))
    .catch((error) => console.log(error))
  }


