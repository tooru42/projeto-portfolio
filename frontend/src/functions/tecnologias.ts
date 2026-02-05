import { Tecnologia } from "@core"
import { httpGet } from "./api"

export async function obterTecnologias() {
    const data = await httpGet("/tecnologias")
    const tecnologias: Tecnologia[] = Array.isArray(data) ? data : []
    return {
        todas: tecnologias,
        get destaques() {
            return tecnologias.filter((tecnologia) => tecnologia.destaque)
        },
        get ativos() {
            return tecnologias.filter((tecnologia) => tecnologia.ativo)
        },
    }
}
