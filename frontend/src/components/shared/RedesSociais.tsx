import { AxeIcon, BusIcon } from "lucide-react";
import RedeSocial from "./RedeSocial";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

export default function RedesSociais() {
    return (
        <div className="flex">
            <RedeSocial url="" icone={<IconBrandGithub></IconBrandGithub>}></RedeSocial>
            <RedeSocial url="" icone={<IconBrandLinkedin></IconBrandLinkedin>}></RedeSocial>
        </div>
    )
}