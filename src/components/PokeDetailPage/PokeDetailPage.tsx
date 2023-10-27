import { PokemonDescription } from "@/shared/PokeDescriptionClass"

export const PokeDetailPage = ( {pokemon}: { pokemon: PokemonDescription} ) => {


    return (
      <>
    <h1>Pokemon Details</h1>
      <div>Name: {pokemon.name}</div>
      <div>Description: {pokemon.description}</div>
      <div>Color: {pokemon.color}</div>
      <div>Egg Groups: {pokemon.eggGroups}</div>
      <div>Number: {pokemon.number}</div>
    </>
  )
}