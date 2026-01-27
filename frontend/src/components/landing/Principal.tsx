import Cabecalho from "../shared/Cabecalho";
import { Tecnologia } from "@core";
import Tecnologias from "../tecnologias/Tecnologias";

export interface PrincipalProps{
    tecnologias: Tecnologia[]
}

export default function Principal(props: PrincipalProps){ {  
    return (
        <div className="flex w-full flex-col items-center justify-center h-[700px] bg-[url('/imagens/banner.gif')] bg-cover bg-left sm:bg-center bg-black/70 bg-blend-overlay gap-5">
            <Cabecalho />
            <div className="flex-1 flex flex-col items-center justify-center">
                <div className="flex flex-col gap-1 items-center">
                    <h1 className="flex gap-3 items-center">
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                        <span className="text-3xl sm:text-5-x-l font-bold text-center">Tooru Tanaka</span>
                        <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    </h1>
                    <h2 className="text-zinc-500 text-center">Desenvolvedor WEB</h2>
                </div>
                <Tecnologias lista={props.tecnologias}></Tecnologias>
            </div>
        </div>
    )
 }}