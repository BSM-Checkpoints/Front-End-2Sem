import { Link } from "react-router-dom";
import type { ContainerBemVindoType } from "../../types/containerBemVindo";

export default function ContainerBemVindo({titulo, subtitulo, pergunta, rota, mensagemRota}: ContainerBemVindoType) {
    return (
       <div className="lg:ml-5 lg:w-1/2">
            <div className="text-center lg:text-start ">
                <h1 className="text-4xl font-bold my-5 sm:text-5xl md:mt-10 lg:mt-8">
                    {titulo}
                </h1>
                <p className="text-lg px-2 sm:text-2xl">
                    {subtitulo}
                </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-1 mt-10
                    md:mt-15 lg:items-start lg:mt-63 xl:mt-56 "
                >
                <p className="text-lg sm:text-xl">{pergunta}</p>
                <Link 
                to={rota} 
                className="text-center text-xl font-semibold w-[150px]
                 mt-3 py-2 rounded-xl border-1 bg-[var(--buttons-color)]
                hover:bg-[var(--color-blue-hover)] transition md:w-[180px]
                md:py-3 md:text-2xl">
                    {mensagemRota}
                </Link>
            </div>
        </div>
    )
}