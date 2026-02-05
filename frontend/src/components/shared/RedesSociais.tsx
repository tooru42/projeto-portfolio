import RedeSocial from "./RedeSocial";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial url="https://github.com/tooru42" icone={<IconBrandGithub></IconBrandGithub>}></RedeSocial>
            <RedeSocial url="https://linkedin.com/in/tooru-tanaka" icone={<IconBrandLinkedin></IconBrandLinkedin>}></RedeSocial>
        </div>
    )
}