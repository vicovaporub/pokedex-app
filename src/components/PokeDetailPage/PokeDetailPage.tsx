import { Pokemon } from "@/shared/PokemonClass";
import "@/components/PokeDetailPage/PokeDetailPage.css";
import { StatsColorBar } from "../StatsColorBar/StatsColorBar";

export const PokeDetailPage = ({ pokemon }: { pokemon: Pokemon }) => {
  return (
    <div className="page-center">
      <div className={`pokemon-card ${pokemon.primaryType}`}>
        <div className="name-number">
          <h1>
            {pokemon.name} - {pokemon.number}
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
          <div className="images-container">
          <div className="image-details">
              <img src={pokemon.sprite} alt={`${pokemon.name} Sprite`} />
              <p>Height: {pokemon.height}</p>
            </div>
            <div className="image-details">
              <img src={pokemon.backSprite} alt={`${pokemon.name} Back Sprite`} />
              <p>Weight: {pokemon.weight}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
