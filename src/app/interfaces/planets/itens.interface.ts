import { Character } from "../characters/character.model";

export interface Itens {
    id: number,
    name: string,
    isDestroyed:  boolean,
    description: string,
    image: string,
    deletedAt?: null,
    characters: Character[]
}