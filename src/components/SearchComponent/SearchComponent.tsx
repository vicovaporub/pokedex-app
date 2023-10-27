"use client";
import "@/components/SearchComponent/SearchComponent.css";
import { useState } from "react";
import { PokeDetailPage } from "../PokeDetailPage/PokeDetailPage";
import { getPokeDescription } from "@/APIs/GetPokeDescription/GetPokeDescription";
import { PokemonDescription } from "@/shared/PokeDescriptionClass";

export const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [foundPoke, setFoundPoke] = useState<PokemonDescription>();
  const [isPokeFound, setIsPokeFound] = useState(true)

  const handleSearch = (e: any) => {
    e.preventDefault()
    searchPokemon(searchQuery)
    .then((pokemonData) => {
      if(pokemonData) {
        setFoundPoke(pokemonData)
        setIsPokeFound(true)
      } else {
        setIsPokeFound(false)
      }
    })
  };

  const searchPokemon = async (param: any) => {
    const data = await getPokeDescription(param.toLowerCase())

 
    if (typeof param === 'number') {
      data.number
    } else if (typeof param === 'string') {
      data.name
    }
    return data
  }
 


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
      {!isPokeFound ? (
        <div>Pokemon not found</div>
      ) : (
        foundPoke ? (
          <PokeDetailPage pokemon={foundPoke} />
        ) : null
      )}
    </>
  );
};
