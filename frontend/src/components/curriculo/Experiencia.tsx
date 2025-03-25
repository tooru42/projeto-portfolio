export default function Experiencia() {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-col items-center justify-around p-6 bg-black border-zinc-800 rounded-2xl gap-6">
            <Item principal="+150" label="paises"/>
            <Item principal="+20" label="experiencia"/>
            <Item principal="420k" label="alunos"/>
        </div>
    )
}

function Item(props: {principal: string, label:string}){
    return (
        <div className="flex flex-col items-center ">
            <span className="text-red-500 text-3xl font-bold leading-6">{props.principal}</span>
            <span className="text-zinc-400 text-sm text-center">{props.label}</span>
        </div>
    )
}