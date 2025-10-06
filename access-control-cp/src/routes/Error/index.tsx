import { Link } from "react-router-dom";

export default function Error() {
  return (
    <main
      className="
        flex justify-center items-center 
        min-h-screen bg-no-repeat bg-cover bg-center 
        bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/bg-fundo.png')]
      "
    >
      <div
        className="
        flex w-[90%] flex-col h-fit rounded-2xl shadow-lg bg-[var(--bg-transparent-01)]
        backdrop-blur-sm text-[var(--color-white)] border-3 border-[var(--border-transparent-02)] mt-10 py-1
        sm:w-[70%] sm:mt-20 md:w-[60%] lg:flex-row lg:w-[70%] xl:w-[55%]"
      >
        <div className="flex flex-col justify-between items-center w-full min-h-82 py-8">
            <h1 className="font-bold text-2xl sm:text-3xl lg:text-5xl text-center">404 Página não encontrada</h1>
            <Link 
             to="/"
             className="
             bg-[var(--buttons-color)] hover:bg-[var(--color-blue-hover)]
             transition cursor-pointer px-8 py-2 rounded-xl text-xl 
             border border-[var(--border-transparent-03)]"
             >
                Voltar para o Login
            </Link>
        </div>
      </div>
    </main>
  );
}
