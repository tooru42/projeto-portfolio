import Image from "next/image";

export default function MiniCV() {
    return (
        <div className="flex-1 flex flex-col-reverse md:flex-row lg:flex-col-reverse xl:flex-row items-center md:items-start lg:items-center xl:items-start bg-black border-zinc-800 rounded-2xl px-6 pt-6 gap-6">
            <div className="relative min-w-64 h-60 xl:self-end">
                <Image src={"/images/curriculo.png"} alt="foto perfil" fill />
            </div>
            <div className="flex flex-col gap-5 self-center py-6 items-center md:items-start lg:items-center xl:items-start">
                <div className="flex flex-col items-center md:items-start lg:items-center xl:items-start">
                    <span className="bg-gradient-to-r from-red-500 via-white to-white text-transparent bg-clip-text text-2xl font-bold">Nome Sobrenome</span>
                    <span>Subtitulo</span>
                </div>
                <p className="text-sm text-center md:text-left lg:text-center xl:text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ex veniam nihil eum, quidem laudantium rem, incidunt repellat exercitationem eius recusandae similique modi labore quisquam, est ipsa ab autem magni.
                Similique quod doloremque reprehenderit iusto facilis commodi unde vitae veniam cupiditate enim non necessitatibus voluptatibus explicabo, itaque porro veritatis, dicta amet dolor ex. Expedita iusto esse architecto placeat praesentium accusantium.
                Fugit aliquam nihil quidem, numquam, corrupti porro assumenda, eos placeat accusamus sit facilis quo? Unde minima, inventore eaque aliquam eum quidem, nisi aperiam placeat et sit delectus, magni debitis libero.</p>
            </div>
        </div>
    )
}