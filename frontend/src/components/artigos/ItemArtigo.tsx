export interface ItemArtigoProps {
    titulo: string
    descricao: string
    link: string
    id: number
}

export default function ItemArtigo(props: ItemArtigoProps) {
    return (
            <div
                key={props.id}
                className="flex flex-col justify-around bg-black p-6 rounded-2xl h-full"
            >
                <h3 className="text-xl text-white font-semibold">{props.titulo}</h3>
                <p className="text-sm text-gray-500">{props.descricao}</p>
                <a
                    className="border border-orange-500 py-2 text-center hover:bg-orange-500 hover:text-black"
                    href={props.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ler artigo
                </a>
            </div>
    )
}
