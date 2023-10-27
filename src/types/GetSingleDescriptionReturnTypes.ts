export interface GetSingleDescriptionReturnTypes {
    base_happiness: number;
    capture_rate: number;
    color: {
      name: string;
      url: string;
    };
    egg_groups: {
      name: string;
      url: string;
    }[]
    flavor_text_entries: {
        flavor_text: string;
        language: {
          name: string;
          url: string;
        };
        version: {
          name: string;
          url: string;
        };
      }[];
      name: string;
      id: number;
}