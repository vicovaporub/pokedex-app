import { GetSingleDescriptionReturnTypes } from "@/types/GetSingleDescriptionReturnTypes";

export class PokemonDescription {
    
    readonly description: string = ''
    readonly color: string = ''
    readonly eggGroups: string[] = ['']
    readonly name: string = ''
    readonly number: number
    
    constructor(pokeDescription: GetSingleDescriptionReturnTypes) { 
        this.color = pokeDescription.color.name
        this.eggGroups = pokeDescription.egg_groups.map((e) => e.name)
        this.name = pokeDescription.name
        this.number = pokeDescription.id

        const englishDescription = pokeDescription.flavor_text_entries.find(entry => entry.language.name === "en")
        if (englishDescription) {
            this.description = englishDescription.flavor_text
        }
    }

}