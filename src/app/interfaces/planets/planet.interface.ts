import { Itens } from "./itens.interface"
import { Links } from "./links.interface"
import { Meta } from "./meta.interface"

export interface Character {
    itens: Itens[],
    meta: Meta
    links: Links
}