import { Pokemon } from "@/shared/PokemonClass"

export const PokeDetailPage = ( {pokemon}: { pokemon: Pokemon[]} ) => {

  return (
    <div>
        <h1>{pokemon.name}</h1>
        <h2>{pokemon.number}</h2>
        <img src={pokemon.sprite}></img>
    </div>
  )
}
