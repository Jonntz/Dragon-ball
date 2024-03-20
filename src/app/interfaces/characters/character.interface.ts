import { Itens } from "./itens.interface"
import { Links } from "./links.interface"
import { Meta } from "./meta.interface"

export interface Planets {
    itens: Itens[],
    meta: Meta
    links: Links
}