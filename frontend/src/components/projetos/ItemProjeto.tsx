import { Projeto } from "@core"
import Image from "next/image"
import Link from "next/link"

export interface ItemProjetoProps {
    projeto: Projeto
}

export default function ItemProjeto(props: ItemProjetoProps) {
    return (
        <Link href={`/projeto/${props.projeto.id}`}>
            <div className="relative rounded-2x-l overflow-hidden border-zinc-800 min-w-64 min-h-64">
                <Image
                    src={props.projeto.imagens[0]}
                    fill
                    alt={props.projeto.nome}
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
        </Link>
    )
}
