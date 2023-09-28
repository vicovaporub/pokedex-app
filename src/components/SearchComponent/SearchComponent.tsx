"use client";
import { getPoke } from "@/GetPoke/GetPoke";
import "@/components/SearchComponent/SearchComponent.css";
import { useState } from "react";
import { Pokemon } from "@/shared/PokemonClass";
import { PokeDetailPage } from "../PokeDetailPage/PokeDetailPage";

export const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPoke, setFoundPoke] = useState<Pokemon[]>([]);

  const handleSearch = (e: any) => {
    e.preventDefault()
    searchPokemon(searchQuery)
    .then((pokemonData) => setFoundPoke(pokemonData)
    );
  };

  const searchPokemon = async (param: any) => {
    const data = await getPoke(0, 151);
    const foundPoke = data.find(
      (pokemon) =>  pokemon.name.toLowerCase() === param.toLowerCase()
    );
    return foundPoke;
  };

  return (
    <>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Pokemon name"
          className="search-input"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          ok
        </button>
      </form>
      {foundPoke ? (
        <>
          <PokeDetailPage pokemon={foundPoke}/>
        </>
      ) : (
        <div>Pokémon not found</div>
      )}
    </>
  );
};
