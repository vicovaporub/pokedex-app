"use client";
import { Pokemon } from "@/shared/PokemonClass";
import "@/components/PokeList/PokeList.css";
import { fetchPokeList } from "@/APIs/GetPoke/GetPokeList";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

interface PokeListProps {
  initialToGen: number;
  limitToGen: number;
}

export default function PokeList({ initialToGen, limitToGen }: PokeListProps) {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(initialToGen);
  const [displayedPokes, setDisplayedPokes] = useState(0);
  const [showSpinner, setShowSpinner] = useState(true);

  async function loadMorePokes(page: number) {
    const remainingPokes = limitToGen - displayedPokes;

    if (remainingPokes > 0) {
      const pokesToFetch = Math.min(remainingPokes, 40);

      setTimeout(async () => {
        const pokemons = await fetchPokeList(page, pokesToFetch);
        if (pokemons?.length) {
          setPokemonList((prev) => [
            ...(prev?.length ? prev : []),
            ...pokemons,
          ]);
          setDisplayedPokes((prev) => prev + pokesToFetch);
        }
      });
    }
  }

  useEffect(() => {
    if (inView && displayedPokes < limitToGen) {
      setPage((prev: number) => prev + 40);
      loadMorePokes(page);
    } else if (displayedPokes >= limitToGen) {
      setShowSpinner(false);
    }
  }, [inView, displayedPokes, pokemonList]);

  return (
    <>
      <div className="disclaimer">
        Warning: The API does not have all information for
        <br /> later generations (8, 9), some assets could be broken
      </div>
      <div className="how-to-list">
        <strong>
          Mouse over a card to flip it and see the base stats of the pokemon
        </strong>
      </div>
      <div className="pokemon-container">
        {pokemonList?.map((pokemon: Pokemon) => {
          return (
            <div className="inner-card" key={pokemon.number}>
              <div className={`card-front pokemon ${pokemon.primaryType}`}>
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
                <ul className="base-stat-list">
                  <li className="base-stats">
                    {pokemon.statHP.toUpperCase()}: {pokemon.hpValue}
                  </li>
                  <li className="base-stats">
                    {pokemon.statAtk}: {pokemon.atkValue}
                  </li>
                  <li className="base-stats">
                    {pokemon.statDef}: {pokemon.defValue}
                  </li>
                  <li className="base-stats">
                    {pokemon.statSpa}: {pokemon.spaValue}
                  </li>
                  <li className="base-stats">
                    {pokemon.statSpd}: {pokemon.spdValue}
                  </li>
                  <li className="base-stats">
                    {pokemon.statSpe}: {pokemon.speValue}
                  </li>
                </ul>
                <img src={pokemon.backSprite} alt={pokemon.name}></img>
              </div>
            </div>
          );
        })}
        {showSpinner && (
          <div
            ref={ref}
            className="col-span-1 mt-16 flex items-center justify-center sm:col-span-2 md:col-span-3 lg:col-span-4"
          >
            <svg
              aria-hidden="true"
              className="h-10 w-10 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
    </>
  );
}
