export interface DictionaryItem {
    id: string;
    name: string;
    value: string | null;
    title: string;
}

export const enum DictionaryNames {
    FoodAllergen = 'foodAllergen',
    EnvironmentAllergen = 'environmentAllergen',
    AllergyReaction = 'allergyReaction',
    Mkb10 = 'mkb10',
    Drug = 'drug',
}

export interface DictionaryParams {
    id: string;
    value: string | null;
    title: string;
}

export type Dictionaries = {
    [type in DictionaryNames]?: DictionaryParams[];
};

export interface DictionaryFindOption {
    names?: string[] | string;
    titles?: string[] | string;
    limit?: number;
    offset?: number;
}

export interface CreateDictionaryItemForm extends DictionaryItem {}

export interface UpdateDictionaryItemForm {
    value?: string;
    title?: string;
}

export interface DictionaryResponse {
    dictionaries: DictionaryListParams[];
}

export interface DictionaryListParams {
    name: string;
    count: number;
}
