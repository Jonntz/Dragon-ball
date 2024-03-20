import { Planets } from "./character.interface"
import { Transformations } from "./transformations.interface"

export interface Itens {
    id: number,
    name: string,
    ki: string,
    maxKi: string,
    race: string,
    gender: string,
    description: string,
    image: string,
    affiliation: string,
    deletedAt?: null
    originPlanet: Planets
    transformations: Transformations[]
}