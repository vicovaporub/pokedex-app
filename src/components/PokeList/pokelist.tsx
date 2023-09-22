"use client";
import { useEffect, useState } from "react";
import "@/components/PokeList/pokecontainer.css";
import { Pokemon } from "@/shared/PokemonClass";

export const PokeList = () => {
  const [pokeData, setPokeData] = useState<Pokemon[]>();

  useEffect(() => {
    getList();
  }, []);

  const getList = (offset = 0, limit = 5) => {
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
        <>
          <div className="inner-card">
            <div
              className={`card-front pokemon ${pokemon.primaryType}`}
              key={pokemon.number}
            >
              <span className="number">#{pokemon.number}</span>
              <h1 className="name">{pokemon.name}</h1>
              <div className="detail">
                <ol className="types">
                  {pokemon.types.map((type) => (
                    <li key={type} className={`type ${type}`}>
                      {type}
                    </li>
                  ))}
                </ol>
                <img src={pokemon.sprite} alt={pokemon.name}></img>
              </div>
            </div>
            <div className={`card-back pokemon ${pokemon.primaryType}`}>
              <span className="number">#{pokemon.number}</span>
              <span className="name">{pokemon.name}</span>
              <li className="base-stat-list" key={pokemon.height}>
                <ul className="base-stats">
                  {pokemon.statHP.toUpperCase()}: {pokemon.hpValue}
                </ul>
                <ul className="base-stats">
                  {pokemon.statAtk}: {pokemon.atkValue}{" "}
                </ul>
                <ul className="base-stats">
                  {pokemon.statDef}: {pokemon.defValue}{" "}
                </ul>
                <ul className="base-stats">
                  {pokemon.statSpa}: {pokemon.spaValue}{" "}
                </ul>
                <ul className="base-stats">
                  {pokemon.statSpd}: {pokemon.spdValue}{" "}
                </ul>
                <ul className="base-stats">
                  {pokemon.statSpe}: {pokemon.speValue}{" "}
                </ul>
              </li>
              <img src={pokemon.backSprite} alt={pokemon.name}></img>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
