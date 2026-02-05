import Link from "next/link"
import Container from "./Container"
import Image from "next/image"
import Menu from "./Menu"
import { IconBrandReact, IconDownload } from "@tabler/icons-react"

export default function Cabecalho() {
    return (
        <header className="w-full flex items-center h-16 bg-black fixed top-0 z-50">
            <Container className="flex-1 flex justify-center sm:justify-between items-center">
                <div className="flex gap-10 items-center">
                    <Link href="/" className="hidden sm:block">
                        {/*<Image src="/logo.svg" alt="Logo" width={80} height={0} />*/}
                        <IconBrandReact size={40} color="#ff6900" stroke={1} />
                    </Link>
                    <Menu />
                </div>
                {/*<div className="hidden sm:flex items-center">
                    <Link
                        href="#"
                        target="_blank"
                        className="bg-orange-500 rounded-full px-7 py-1 text-sm font-bold flex gap-2"
                    >
                        <IconDownload size={20}></IconDownload> Download CV
                    </Link>
                </div>*/}
            </Container>
        </header>
    )
}
