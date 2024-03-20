import { Character } from "./planet.interface";

export interface Itens {
    id: number,
    name: string,
    isDestroyed:  string,
    description: string,
    image: string,
    deletedAt?: null,
    characters: Character[]
}