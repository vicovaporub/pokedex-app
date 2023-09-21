"use client";
import { useEffect, useState } from "react";
import "@/components/PokeList/pokecontainer.css";
import { Pokemon } from "@/shared/PokemonClass";

export const PokeList = () => {
  const [pokeData, setPokeData] = useState<Pokemon[]>();

  useEffect(() => {
    getList();
  }, []);

  const getList = (offset = 0, limit = 20) => {
    return fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        let dataList = data.results;

        Promise.all(
          dataList.map(
            (
              pokePage: { url: RequestInfo | URL } //TODO: ARRUMAR PARA UM TIPO MAIS RELEVANTE
            ) =>
              fetch(pokePage.url)
                .then((res) => res.json())
                .then((res) => new Pokemon(res))
          )
        ).then((pokemonList: Pokemon[]) => {
          setPokeData(pokemonList);
        });
      });
  };

  if (!pokeData) {
    return <div>Loading..</div>;
  }

  return (
    <>
      {pokeData.map((pokemon) => (
        <li className={`pokemon ${pokemon.primaryType}`} key={pokemon.number}>
          <span className="number">#{pokemon.number}</span>
          <span className="name">{pokemon.name}</span>
          <div className="detail">
            <ol className="types">
              {pokemon.types.map((type) => (
                <li key={type} className={`type ${type}`}>
                  {type}
                </li>
              ))}
            </ol>
            <img src={pokemon.sprite}></img>
          </div>
        </li>
      ))}
    </>
  );
};
