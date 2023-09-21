'use client'

import { useEffect, useState } from "react"
import '@/components/PokeList/pokecontainer.css'




export const PokeList = () => {
    const [pokeData, setPokeData] = useState([])


    useEffect(() => {
        getList()
    }, [])

    class Pokemon {
        number;
        name;
        type;
        types = [];
        sprite;
    }


    const convertDetailsToPokemon = (pokeDetail) => {
        const pokemon = new Pokemon()
        pokemon.number = pokeDetail.id
        pokemon.name = pokeDetail.name
        pokemon.sprite = pokeDetail.sprites.front_default

        const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
        const [type] = types

        pokemon.types = types
        pokemon.type = type

        return pokemon
    }



    const getList = (offset = 0, limit = 20) => {
        

        return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then((res) => res.json())
        .then((data) => {
            let dataList = data.results
            
            Promise.all(
                dataList.map((pokePage) =>
                  fetch(pokePage.url)
                    .then((res) => res.json())
                    .then(convertDetailsToPokemon)
                )
              ).then((pokemonList) => {
                setPokeData(pokemonList);
              });
            });
    

        
    }



    return (
        <>
      {pokeData.map((pokemon) => (
          <li className={`pokemon ${pokemon.type}`} key='pokeList'>
           <span className="number" key={pokemon.number}>#{pokemon.number}</span>
           <span className="name" key={pokemon.name}>{pokemon.name}</span>
            <div className="detail" key='pokemon-detail'>
              <ol className="types" key='pokemon-types'>
               {pokemon.types.map((type) =>  (  <li className={`type ${type}`} >{type.charAt(0).toUpperCase() + type.slice(1)}</li> ))}
              </ol>
              <img src={pokemon.sprite}></img>
            </div>
          </li>
      
        
      
      ))}
        </>
    )
}