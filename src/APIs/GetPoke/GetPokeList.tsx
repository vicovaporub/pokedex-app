import { Pokemon } from "@/shared/PokemonClass";


export const getPoke = (offset: number, limit: number) => {

  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
    .then((res) => res.json())
    .then((data) => {
      const dataList = data.results;

      return Promise.all(
        dataList.map((pokePage: { url: RequestInfo | URL; }) =>
          fetch(pokePage.url)
            .then((res) => res.json())
            .then((res) => new Pokemon(res))
        )
      );
    });

};
