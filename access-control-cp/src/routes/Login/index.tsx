import { Link } from "react-router-dom"

export default function Login() {
    return (
        <main  className="h-screen bg-no-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/bg-fundo.png')]">
            <div className="flex w-[900px] rounded-2xl shadow-lg bg-[var(--bg-transparent-01)] backdrop-blur-md text-[var(--color-white)">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Seja bem-vindo!</h1>
                    <p className="text-sm mb-6">
                    Estamos felizes em ter você aqui novamente!
                    </p>
                </div>
                <div className="flex flex-col gap-1">
                    <p className="text-sm">Não possui uma conta?</p>
                    <Link to="/cadastro" className="mt-3 px-10 py-2 rounded-xl bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] transition">
                        Criar Conta
                    </Link>
                </div>
            </div>
        </main>
    )
}