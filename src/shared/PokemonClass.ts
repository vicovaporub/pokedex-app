import { GetSinglePokeReturnTypes } from "@/types/GetSinglePokeReturnTypes";


export class Pokemon {
    readonly number: number = 0;
    readonly name: string = 'POKE';
    readonly primaryType: string = 'POKE';
    readonly types: string[] = [''];
    readonly sprite: string = 'POKE';
    readonly backSprite: string = 'POKE'
    readonly statHP: string = 'POKE'
    readonly statAtk: string = 'POKE'
    readonly statDef: string = 'POKE'
    readonly statSpa: string = 'POKE'
    readonly statSpd: string = 'POKE'
    readonly statSpe: string = 'POKE'
    readonly hpValue: number = 0
    readonly atkValue: number = 0
    readonly defValue: number = 0
    readonly spaValue: number = 0
    readonly spdValue: number = 0
    readonly speValue: number = 0
    readonly height: number = 0


    constructor(pokeObject: GetSinglePokeReturnTypes) {
      this.number = pokeObject.id
      this.name = pokeObject.name 
      this.primaryType = pokeObject.types[0].type.name
      this.types = pokeObject.types.map((typeSlot) => typeSlot.type.name)
      this.sprite = pokeObject.sprites.front_default
      this.backSprite = pokeObject.sprites.back_default
      this.statHP = pokeObject.stats[0].stat.name
      this.statAtk = pokeObject.stats[1].stat.name
      this.statDef = pokeObject.stats[2].stat.name
      this.statSpa = pokeObject.stats[3].stat.name
      this.statSpd = pokeObject.stats[4].stat.name
      this.statSpe = pokeObject.stats[5].stat.name
      this.hpValue = pokeObject.stats[0].base_stat
      this.atkValue = pokeObject.stats[1].base_stat
      this.defValue = pokeObject.stats[2].base_stat
      this.spaValue = pokeObject.stats[3].base_stat
      this.spdValue = pokeObject.stats[4].base_stat
      this.speValue = pokeObject.stats[5].base_stat
      this.height = pokeObject.height
  
    }
}