"use client";
import "@/components/SearchComponent/SearchComponent.css";
import "@/components/PokeDetailPage/PokeDetailPage.css"
import { useState } from "react";
import { PokeDetailPage } from "../PokeDetailPage/PokeDetailPage";
import { getPokeDescription } from "@/APIs/GetPokeDescription/GetPokeDescription";
import { Pokemon } from "@/shared/PokemonClass";

export const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [foundPoke, setFoundPoke] = useState<Pokemon | null>(null);
  const [isPokeFound, setIsPokeFound] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const data = await getPokeDescription(searchQuery.toLowerCase());
      if (data) {
        setFoundPoke(data);
        setIsPokeFound(true);
        setSearchQuery('');
      } else {
        setIsPokeFound(false);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setIsPokeFound(false);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <div>
      <form className="search-container" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search a Pokemon"
          className="search-input"
          id="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button" disabled={isLoading}>
          {isLoading ? 'Searching...' : 'OK'}
        </button>
      </form>
      {!isPokeFound ? (
        <div>Pokemon not found</div>
      ) : (
        foundPoke ? (
        <div className="found-poke-layout">
          <PokeDetailPage pokemon={foundPoke} />
        </div>
        ) : null
      )}
    </div>
  );
};

