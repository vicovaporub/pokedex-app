import { GetSinglePokeReturnTypes } from "@/types/GetSinglePokeReturnTypes";


export class Pokemon {
    readonly number: number = 0;
    readonly name: string = 'POKE';
    readonly primaryType: string = 'POKE';
    readonly types: string[] = [''];
    readonly sprite: string = 'POKE';

    constructor(pokeObject: GetSinglePokeReturnTypes) {
      this.number = pokeObject.id
      this.name = pokeObject.name 
      this.primaryType = pokeObject.types[0].type.name
      this.types = pokeObject.types.map((typeSlot) => typeSlot.type.name)
      this.sprite = pokeObject.sprites.front_default
    }
}