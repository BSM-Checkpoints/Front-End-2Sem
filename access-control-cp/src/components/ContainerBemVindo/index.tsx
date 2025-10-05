import { Link } from "react-router-dom";
import type { ContainerBemVindoType } from "../../types/containerBemVindo";

export default function ContainerBemVindo({titulo, subtitulo, pergunta, rota, mensagemRota}: ContainerBemVindoType) {
    return (
    <div className="flex flex-col justify-center gap-20 items-start p-12 w-1/2">
        <div>
            <h1 className="text-4xl font-bold mb-2">{titulo}</h1>
            <p className="text-sm mb-6">
                {subtitulo}
            </p>
        </div>
        <div className="flex flex-col gap-1">
            <p className="text-sm">{pergunta}</p>
            <Link
                to={rota}
                className="mt-3 px-10 py-2 rounded-xl bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] transition"
            >
                {mensagemRota}
            </Link>
        </div>
    </div>
    )
}