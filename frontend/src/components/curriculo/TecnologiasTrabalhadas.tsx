import {Tecnologia} from "@core"

export interface TecnologiasTrabalhadas{
    tecnologias: Tecnologia[]
}

export default function TecnologiasTrabalhadas(props: TecnologiasTrabalhadas){

    return props.tecnologias ? (<div>
        <div className="felx justify-center items-center p-6 w-full lg:w-72 bg-black border-zinc-800 rounded-2xl">
            <div className="flex justify-center flex-wrap gap-x-3">
                {props.tecnologias.map((tecnologia) => (
                    <div key={tecnologia.id}>
                        <span className="text-red-500 text-bold">#</span>
                        <span>{tecnologia.nome}</span>
                    </div> ))}
            </div>
        </div>
    </div>) : null
}