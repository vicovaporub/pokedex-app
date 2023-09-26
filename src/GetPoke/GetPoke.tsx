"use client";
import { useEffect, useState } from "react";
import { Pokemon } from "@/shared/PokemonClass";
import { PokeList } from "../components/PokeList/PokeList";

export const GetPoke = ( {offset, limit}: any ) => {
  const [pokeData, setPokeData] = useState<Pokemon[]>([]);

  useEffect(() => {
    getList(offset, limit);
  }, [offset, limit]);

  const getList = (offset = 0, limit = 151) => {
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

  return (
    <>
    <PokeList pokeData={pokeData} />
    </>
  )

};