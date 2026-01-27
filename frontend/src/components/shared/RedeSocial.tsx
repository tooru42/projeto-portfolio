import Link from "next/link"
import React from "react"

interface RedeSocialProps {
    url: string
    icone: any
}

export default function RedeSocial(props: RedeSocialProps) {
    return (
        <div>
            <Link href={props.url} target="_blank">
                <div className="bg-zinc-800 rounded-lg p-1 mr-3 cursor-pointer">
                    {React.cloneElement(props.icone, {
                        size: 35,
                        stroke: 1,
                        className: "text-orange-500",
                    })}
                </div>
            </Link>
        </div>
    )
}
