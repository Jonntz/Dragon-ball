import { Itens } from "./itens.interface"
import { Links } from "./links.interface"
import { Meta } from "./meta.interface"

export type Character = {
    items: Itens[],
    meta: Meta
    links: Links
}

