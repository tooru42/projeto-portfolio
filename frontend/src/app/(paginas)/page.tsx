import Artigos from "@/components/artigos/Artigos"
import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import Projetos from "@/components/projetos/Projetos"
import Container from "@/components/shared/Container"
import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"

export default async function Home() {
    try {
        const tecnologias = await obterTecnologias()
        const projetos = await obterProjetos()

        return (
            <div>
                <Principal tecnologias={tecnologias.destaques || []} />
                <Container className="py-16 flex flex-col items-center gap-10">
                    <Projetos titulo="Github" lista={projetos.destaque || []} />
                    <Artigos titulo="Artigos Científicos"></Artigos>
                    <Curriculo tecnologias={tecnologias.ativos || []} />
                </Container>
            </div>
        )
    } catch (error) {
        console.error("Error loading home page:", error)
        return (
            <div>
                <Principal tecnologias={[]} />
                <Container className="py-16 flex flex-col items-center gap-10">
                    <Projetos titulo="Github" lista={[]} />
                    <Artigos titulo="Artigos Científicos"></Artigos>
                    <Curriculo tecnologias={[]} />
                </Container>
            </div>
        )
    }
}
