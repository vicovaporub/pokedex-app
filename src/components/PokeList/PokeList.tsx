import { Pokemon } from '@/shared/PokemonClass'
import '@/components/PokeList/pokecontainer.css'


export const PokeList = ( { pokeData }: any ) => {


    return (
        <div className='pokemon-container'>
          {pokeData?.map((pokemon: Pokemon) => 
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
                  <li className="base-stat-list" key={pokemon.height}>  {/* TODO: MUDAR O HEIGHT AQUI DEPOIS */}
                    <li className="base-stats">
                      {pokemon.statHP.toUpperCase()}: {pokemon.hpValue}
                    </li>
                    <li className="base-stats">
                      {pokemon.statAtk}: {pokemon.atkValue}{" "}
                    </li>
                    <li className="base-stats">
                      {pokemon.statDef}: {pokemon.defValue}{" "}
                    </li>
                    <li className="base-stats">
                      {pokemon.statSpa}: {pokemon.spaValue}{" "}
                    </li>
                    <li className="base-stats">
                      {pokemon.statSpd}: {pokemon.spdValue}{" "}
                    </li>
                    <li className="base-stats">
                      {pokemon.statSpe}: {pokemon.speValue}{" "}
                    </li>
                  </li>
                  <img src={pokemon.backSprite} alt={pokemon.name}></img>
                </div>
              </div>
            </>
          )})}
        </div>
      )
}