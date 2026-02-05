import Image from "next/image"
import RedesSociais from "../shared/RedesSociais"

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border-zinc-800 rounded-2xl px-6 pt-6 gap-6">
            <div className="relative min-w-64 h-60 xl:self-end">
                <Image src={"/imagens/foto-perfil.jpg"} alt="foto perfil" fill />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span className="bg-gradient-to-r from-orange-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">
                        Tooru Tanaka
                    </span>
                    <span className="text-sm text-gray-500">Desenvolvedor WEB</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">Desenvolvedor WEB com experiência principalmente em PHP. Experiência em projetos como desenvolvedor fullstack.</p>
                <RedesSociais></RedesSociais>
            </div>
        </div>
    )
}
