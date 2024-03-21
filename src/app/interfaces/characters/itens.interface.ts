import { Planet } from "../planets/planet.model"
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
    originPlanet: Planet
    transformations: Transformations[]
}