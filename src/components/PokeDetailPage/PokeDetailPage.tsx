import { Pokemon } from "@/shared/PokemonClass";
import "@/components/PokeDetailPage/PokeDetailPage.css";
import { StatsColorBar } from "../StatsColorBar/StatsColorBar";
import { MovesByGen } from "../MovesByGen/MovesByGen";

export const PokeDetailPage = ({ pokemon }: { pokemon: Pokemon }) => {
  const hasHiddenAbility = pokemon.hiddenAbility !== null;

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
            <h1><strong>Base stats:</strong></h1><br />
            <StatsColorBar statName="HP" statValue={pokemon.hpValue} />
            <StatsColorBar statName="Attack" statValue={pokemon.atkValue} />
            <StatsColorBar statName="Defense" statValue={pokemon.defValue} />
            <StatsColorBar
              statName="Special Attack"
              statValue={pokemon.spaValue}
            />
            <StatsColorBar
              statName="Special Defense"
              statValue={pokemon.spdValue}
            />
            <StatsColorBar statName="Speed" statValue={pokemon.speValue} />
          </div>
        </div>
        <div className="types-container">
          <div className="types">
            {pokemon.types.map((type) => (
              <li key={type} className={`type ${type}`}>
                {type}
              </li>
            ))}
          </div>
        </div>
        <div className="detail-container">
          <p>
            Height: <strong>{pokemon.height}m</strong>
          </p>
          <p>
            Weight: <strong>{pokemon.weight}kg</strong>
          </p>
        </div>
        <div className="images-container">
          <div className="image-details">
            <img src={pokemon.spriteForSearch} alt={`${pokemon.name} Sprite`} />
          </div>
        </div>
        <div className="abilities-container">
          <div className="abilities">
            <h1>Abilities:</h1>
            <ul className="ability-list">
              {pokemon.abilities.map((ability, index) => (
                <li key={index} className="ability">
                  {ability}
                </li>
              ))}
              {hasHiddenAbility && (
                <li className="hidden-ability">
                  {pokemon.hiddenAbility} (Hidden Ability)
                </li>
              )}
            </ul>
          </div>
        </div>
        <h1 className="moves-title">Each generation move learnset:</h1>
        <MovesByGen
          gen1Moves={pokemon.gen1moves}
          gen2Moves={pokemon.gen2moves}
          gen3Moves={pokemon.gen3moves}
          gen4Moves={pokemon.gen4moves}
          gen5Moves={pokemon.gen5moves}
          gen6Moves={pokemon.gen6moves}
          gen7Moves={pokemon.gen7moves}
          gen8Moves={pokemon.gen8moves}
          gen9Moves={pokemon.gen9moves}
        />
      </div>
    </div>
  );
};
