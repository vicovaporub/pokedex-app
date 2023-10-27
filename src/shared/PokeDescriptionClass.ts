import { GetSingleDescriptionReturnTypes } from "@/types/GetSingleDescriptionReturnTypes";

export class PokemonDescription {
    
    readonly description: string = ''
    readonly color: string = ''
    readonly eggGroups: string[] = ['']
    readonly name: string = ''
    readonly number: number
    
    constructor(pokeDescription: GetSingleDescriptionReturnTypes) { 
        this.description = pokeDescription.flavor_text_entries[0].flavor_text
        this.color = pokeDescription.color.name
        this.eggGroups = pokeDescription.egg_groups.map((e) => e.name)
        this.name = pokeDescription.name
        this.number = pokeDescription.id
    }

}