import { Pokemon } from "@/shared/PokemonClass";
import "@/components/PokeDetailPage/PokeDetailPage.css";
import { StatsColorBar } from "../StatsColorBar/StatsColorBar";

export const PokeDetailPage = ({ pokemon }: { pokemon: Pokemon }) => {

  return (
    <div className="page-center">
      <div className={`pokemon-card ${pokemon.primaryType}`}>
        <div className="name-number">
          <h1>
            {pokemon.name} - #{pokemon.number}
          </h1>
        </div>
        <div className="stats-container">
          <div className="stats-bars">
            <StatsColorBar statName="HP" statValue={pokemon.hpValue} />
            <StatsColorBar statName="Attack" statValue={pokemon.atkValue} />
            <StatsColorBar statName="Defense" statValue={pokemon.defValue} />
            <StatsColorBar statName="Special Attack" statValue={pokemon.spaValue}/>
            <StatsColorBar statName="Special Defense" statValue={pokemon.spdValue}/>
            <StatsColorBar statName="Speed" statValue={pokemon.speValue}/>
          </div>
        </div>
        <div className="types-container">
          <div className='types'>
          {pokemon.types.map((type) => (
                      <li key={type} className={`type ${type}`}>
                        {type}
                      </li>
                    ))}
          </div>
        </div>
          <div className="images-container">
          <div className="image-details">
              <img src={pokemon.sprite} alt={`${pokemon.name} Sprite`} />
              <p>Height: {pokemon.height}m</p>
            </div>
            <div className="image-details">
              <img src={pokemon.backSprite} alt={`${pokemon.name} Back Sprite`} />
              <p>Weight: {pokemon.weight}kg</p>
            </div>
          </div>
          <div className="abilities-container">
            <div className="abilities">
              {pokemon.abilites}
            </div>
          </div>
              <h1 className="moves-title">Here are the moves</h1>
          <div className="moves-container">
            <div className="moves">
              <ul>
      {pokemon.moves.map((move, index) => (
        <li key={index}>{move}</li>
      ))}
    </ul>
            </div>
          </div>
      </div>
    </div>
  );
};
