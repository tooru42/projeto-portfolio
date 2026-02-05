import { httpGet } from "./api"
import { Projeto, Tipo } from "@core"

export async function obterProjetos() {
    const data = await httpGet("projetos")
    const projetos: Projeto[] = Array.isArray(data) ? data : []

    return {
        todps: projetos,
        get mobile() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.MOBILE)
        },
        get web() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.WEB)
        },
        get jogo() {
            return projetos.filter((projeto) => projeto.tipo === Tipo.JOGO)
        },
        get destaque() {
            return projetos.filter((projeto) => projeto.destaque)
        },
    }
}

export async function obterProjeto(id: string): Promise<Projeto | null> {
    return await httpGet(`projetos/${id}`)
}
