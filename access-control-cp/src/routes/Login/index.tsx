import { Link } from "react-router-dom"
import type { LoginType } from "../../types/login";
import { useForm } from "react-hook-form";

export default function Login() {

    const { register, handleSubmit, formState: { errors }, } = useForm<LoginType>()

    const aoSubmeter = (dados: LoginType) => {
        console.log(dados)
    }

    return (
        <main className="h-screen bg-no-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('bg-fundo.png')] flex items-center justify-center">
            <div className="flex w-[900px] rounded-2xl shadow-lg bg-[var(--bg-transparent-01)] backdrop-blur-sm text-[var(--color-white)">
                <div>
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
                <div className="flex flex-col justify-center p-10 w-1/2 border-l border-[var(--border-transparent-02)]">
                    <h2 className="text-4xl text-center font-semibold mb-6">Login</h2>
                    <form onSubmit={handleSubmit(aoSubmeter)} className="flex flex-col space-y-4">

                        <input type="text" placeholder="Digite seu nome ou usuário" {...register("nomeUsuario", { required: "O nome usuário é obrigatório!" })}
                            className="px-4 py-2 rounded-xl bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)] text-[var(--color-white)]
                            placeholder-[--placeholder-grey-300] focus:outline-none"/>
                            {errors.nomeUsuario && (
                                <p className="text-[var(--color-red)] text-sm">{errors.nomeUsuario.message}</p>
                            )}

                        <input type="email" placeholder="Digite seu e-mail" {...register("email", {
                            required: "O e-mail é obrigatório!",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Formato de e-mail inválido! E-mail deve conter @ e ."
                            }
                        })} className=" px-4 py-2 rounded-xl bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)] text-[var(--color-white)]
                        placeholder-[--placeholder-grey-300] focus:outline-none"/>
                        {errors.email && (
                            <p className="text-[var(--color-red)] text-sm">{errors.email.message}</p>
                        )}

                        <button type="submit" className="mt-4 px-4 py-2 rounded-xl bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] transition cursor-pointer">
                            Entrar
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}