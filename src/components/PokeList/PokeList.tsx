'use client'
import { Pokemon } from '@/shared/PokemonClass'
import '@/components/PokeList/PokeList.css'
import { getPoke } from '@/GetPoke/GetPoke'
import { useEffect, useState } from 'react'


export default function PokeList( {offset, limit}: {offset: number, limit: number} ) {

    const [pokemonList, setPokemonList] = useState<Pokemon[]>([])

    useEffect(() => {
      getPoke(offset, limit)
      .then((data) => {
        setPokemonList(data)
      })
    }, [offset, limit])
   
  

    return (
        <div className='pokemon-container'>
          {pokemonList?.map((pokemon: Pokemon) => 
          { 
            return (
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
                  <ul className="base-stat-list"> 
                    <li className="base-stats" key={pokemon.statHP}>
                      {pokemon.statHP.toUpperCase()}: {pokemon.hpValue}
                    </li>
                    <li className="base-stats" key={pokemon.statAtk}>
                      {pokemon.statAtk}: {pokemon.atkValue}
                    </li>
                    <li className="base-stats" key={pokemon.statDef}>
                      {pokemon.statDef}: {pokemon.defValue}
                    </li>
                    <li className="base-stats" key={pokemon.statSpa}> 
                      {pokemon.statSpa}: {pokemon.spaValue}
                    </li>
                    <li className="base-stats" key={pokemon.statSpd}>
                      {pokemon.statSpd}: {pokemon.spdValue}
                    </li>
                    <li className="base-stats" key={pokemon.statSpe}>
                      {pokemon.statSpe}: {pokemon.speValue}
                    </li>
                  </ul>
                  <img src={pokemon.backSprite} alt={pokemon.name}></img>
                </div>
              </div>
            </>
          )})}
        </div>
      )
}