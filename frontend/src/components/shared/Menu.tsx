"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Menu(){
const caminho = usePathname()

    return (
        <nav className="flex gap-6">
            <MenuItem href="/" selecionado={caminho ==="/"}>Inicio</MenuItem>
            {/*<MenuItem href="/projeto/1" selecionado={caminho.startsWith("/projeto")}>Projetos</MenuItem>*/}
            <MenuItem href="https://docs.google.com/document/d/1BCMKM4FbOaE315Vm3LSwmLJnE6QFyIOtmIrxLY5I-Bg/edit?usp=sharing" selecionado={false} novaAba>CV</MenuItem>
            <MenuItem href="https://linkedin.com/in/tooru-tanaka" novaAba>Linkedin</MenuItem>
            <MenuItem href="https://github.com/tooru42" novaAba>Github</MenuItem>
        </nav>
    )
}

function MenuItem(props:{href:string, children:React.ReactNode, selecionado?: boolean, novaAba?: boolean}){
    return (
        <Link href={props.href} target={props.novaAba ? "_blank" : "_self"}>
            <span className={`
                flex items-center gap-2 text-sm border-orange-600 hover:text-white
                ${props.selecionado ? "border-b-4 text-white" : "text-zinc-400"}  
            `}>{props.children}</span>
        </Link>
)}