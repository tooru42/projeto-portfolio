import React from "react"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel"
import ItemArtigo from "./ItemArtigo"

export interface ArtigosProps {
    titulo: string
}

// Dados simulados de artigos
const articles = [
    {
        id: 1,
        title: "Compartilhamento de placa de video entre maquinas virtuais",
        description:
            "Este trabalho procura verificar o desempenho de tais placas de vídeo através da avaliação gratuita disponibilizado pela NVIDIA utilizando um software de modelagem 3D.",
        link: "https://docs.google.com/document/d/1HzkZvCvqule2hE8ed5HCv64WsbZYykWy/edit?usp=sharing&ouid=109104155650314555871&rtpof=true&sd=true",
    },
    {
        id: 2,
        title: "Desenvolvimento de um aplicativo para usuários não programadores que permite a criação de aplicações que utilizam tecnologia de realidade aumentada",
        description:
            "Com este trabalho espera-se contribuir a facilitar futuros projetos que envolvam esta tecnologia.",
        link: "https://docs.google.com/document/d/1qIAIq5HOtHx_oMG2x90Ixec5rNqXt9Ju/edit?usp=sharing&ouid=109104155650314555871&rtpof=true&sd=true",
    },
    {
        id: 3,
        title: "Um Robô Seguidor de Linha Fotossensível com Arduino",
        description:
            "O presente projeto do robô seguidor de linha tem como finalidade detectar uma linha desenhada na pista por meio de contraste entre a cor desta linha e a cor do restante da pista. ",
        link: "https://docs.google.com/document/d/1fUlWsJx1vZCIm2M8mSf41OkjrQxZIGhf/edit?usp=sharing&ouid=109104155650314555871&rtpof=true&sd=true",
    },
]

export default function Artigos(props: ArtigosProps) {
    return (
        <div className="flex flex-col items-center sm:items-start w-7/10 md:w-11/12 xl:w-full gap-5">
            <h3 className="text-2xl text-bold text-white/70">{props.titulo}</h3>
            <div className="relative w-full">
                <Carousel
                    opts={{
                        align: "center",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="flex">
                        {articles.map((article) => (
                            <CarouselItem
                                key={article.id}
                                className="md:basis-1/2 lg:basis-1/3 xl:basis-1/3"
                            >
                                <ItemArtigo
                                    titulo={article.title}
                                    descricao={article.description}
                                    link={article.link}
                                    id={article.id}
                                ></ItemArtigo>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious></CarouselPrevious>
                    <CarouselNext></CarouselNext>
                </Carousel>
            </div>
        </div>
    )
}
