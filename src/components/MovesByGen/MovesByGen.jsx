import { useState } from "react";

export const MovesByGen = ({
  gen1Moves,
  gen2Moves,
  gen3Moves,
  gen4Moves,
  gen5Moves,
  gen6Moves,
  gen7Moves,
  gen8Moves,
  gen9Moves,
}) => {
  const [selectedGen, setSelectedGen] = useState("");

  const handleSelectChange = (e) => {
    setSelectedGen(e.target.value);
  };

  const selectedMoves = {
    "Red/Blue": gen1Moves,
    "Gold/Silver/Crystal": gen2Moves,
    "Ruby/Sapphire/Emerald": gen3Moves,
    "Diamond/Pearl/Platinum": gen4Moves,
    "Black/White - Black 2/White 2": gen5Moves,
    "X/Y": gen6Moves,
    "Sun/Moon": gen7Moves,
    "Sword/Shield": gen8Moves,
    "Scarlet/Violet": gen9Moves,
  };

  return (
    <div className="moves-container">
      <select value={selectedGen} onChange={handleSelectChange}>
        <option value="">Choose a Generation</option>
        {Object.keys(selectedMoves).map((gen) => (
          <option key={gen} value={gen}>
            {gen}
          </option>
        ))}
      </select>
      <div className="moves">
        {selectedGen && (
          <ul>
            {selectedMoves[selectedGen].map((move, index) => (
              <li key={index} className={`gen-${selectedGen}`}>
                {move}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
