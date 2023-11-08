import { GetSinglePokeReturnTypes } from "@/types/GetSinglePokeReturnTypes";

export class Pokemon {
  readonly number: number = 0;
  readonly name: string = "POKE";
  readonly primaryType: string = "POKE";
  readonly types: string[] = [""];
  readonly sprite: string = "POKE";
  readonly backSprite: string = "POKE";
  readonly statHP: string = "POKE";
  readonly statAtk: string = "POKE";
  readonly statDef: string = "POKE";
  readonly statSpa: string = "POKE";
  readonly statSpd: string = "POKE";
  readonly statSpe: string = "POKE";
  readonly hpValue: number = 0;
  readonly atkValue: number = 0;
  readonly defValue: number = 0;
  readonly spaValue: number = 0;
  readonly spdValue: number = 0;
  readonly speValue: number = 0;
  readonly height: number = 0;
  readonly abilities: string[] = [""];
  readonly hiddenAbility: string | null;
  readonly gen1moves: string[] | null
  readonly gen2moves: string[] | null
  readonly gen3moves: string[] | null
  readonly gen4moves: string[] | null
  readonly gen5moves: string[] | null
  readonly gen6moves: string[] | null
  readonly gen7moves: string[] | null
  readonly gen8moves: string[] | null
  readonly gen9moves: string[] | null
  readonly weight: number;
  readonly spriteForSearch: string = "POKE";

  constructor(pokeObject: GetSinglePokeReturnTypes) {
    this.number = pokeObject.id;
    this.name = pokeObject.name;
    this.primaryType = pokeObject.types[0].type.name;
    this.types = pokeObject.types.map((typeSlot) => typeSlot.type.name);
    this.sprite = pokeObject.sprites.front_default;
    this.spriteForSearch =
      pokeObject.sprites.other["official-artwork"].front_default;
    this.backSprite = pokeObject.sprites.back_default;
    this.statHP = pokeObject.stats[0].stat.name;
    this.statAtk = pokeObject.stats[1].stat.name;
    this.statDef = pokeObject.stats[2].stat.name;
    this.statSpa = pokeObject.stats[3].stat.name;
    this.statSpd = pokeObject.stats[4].stat.name;
    this.statSpe = pokeObject.stats[5].stat.name;
    this.hpValue = pokeObject.stats[0].base_stat;
    this.atkValue = pokeObject.stats[1].base_stat;
    this.defValue = pokeObject.stats[2].base_stat;
    this.spaValue = pokeObject.stats[3].base_stat;
    this.spdValue = pokeObject.stats[4].base_stat;
    this.speValue = pokeObject.stats[5].base_stat;
    this.abilities = pokeObject.abilities
      .filter((abilitySlot) => !abilitySlot.is_hidden)
      .map((ability) => ability.ability.name);

    const hiddenAbility = pokeObject.abilities.find(
      (abilitySlot) => abilitySlot.is_hidden
    );
    this.hiddenAbility = hiddenAbility ? hiddenAbility.ability.name : null;

    const heightDividedByTen = pokeObject.height / 10;
    this.height = heightDividedByTen;

    const weightDividedByTen = pokeObject.weight / 10;
    this.weight = weightDividedByTen;

    const gen1Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen1Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "red-blue";
      });
      return isGen1Moves;
    });
    this.gen1moves = gen1Moves.map((moveSlot) => moveSlot.move.name);

    const gen2Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen2Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "gold-silver";
      });
      return isGen2Moves;
    });
    this.gen2moves = gen2Moves.map((moveSlot) => moveSlot.move.name);

    const gen3Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen3Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "crystal";
      });
      return isGen3Moves;
    });
    this.gen3moves = gen3Moves.map((moveSlot) => moveSlot.move.name);

    
    const gen4Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen4Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "platinum";
      });
      return isGen4Moves;
    });
    this.gen4moves = gen4Moves.map((moveSlot) => moveSlot.move.name);

    const gen5Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen5Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "black-2-white-2";
      });
      return isGen5Moves;
    });
    this.gen5moves = gen5Moves.map((moveSlot) => moveSlot.move.name);

    const gen6Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen6Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "x-y";
      });
      return isGen6Moves;
    });
    this.gen6moves = gen6Moves.map((moveSlot) => moveSlot.move.name);

    const gen7Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen7Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "ultra-sun-ultra-moon";
      });
      return isGen7Moves;
    });
    this.gen7moves = gen7Moves.map((moveSlot) => moveSlot.move.name);

    const gen8Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen8Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "sword-shield";
      });
      return isGen8Moves;
    });

    this.gen8moves = gen8Moves.map((moveSlot) => moveSlot.move.name);

    
    const gen9Moves = pokeObject.moves.filter((moveSlot) => {
      const isGen9Moves = moveSlot.version_group_details.some((e) => {
        return e.version_group.name === "scarlet-violet";
      });
      return isGen9Moves;
    });
    this.gen9moves = gen9Moves.map((moveSlot) => moveSlot.move.name);
  }
}
