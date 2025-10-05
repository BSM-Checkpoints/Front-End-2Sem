import { Link } from "react-router-dom"
import type { LoginType } from "../../types/login";
import { useForm } from "react-hook-form";

export default function Login() {

    const { register, handleSubmit, formState: { errors }, } = useForm<LoginType>()

    const aoSubmeter = (dados: LoginType) => {
        console.log(dados)
    }

    return (
        <main className="w-screen h-screen bg-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('bg-fundo.png')] flex items-center justify-center">
            <div className="flex w-[90%] flex-col h-fit rounded-2xl shadow-lg bg-[var(--bg-transparent-01)] backdrop-blur-sm text-[var(--color-white)] border-1
            sm:w-[75%]">
                <div>
                    <div>
                        <h1 className="text-4xl font-bold text-center my-5 sm:text-5xl">Seja bem-vindo!</h1>
                        <p className="text-lg text-center px-2 sm:text-2xl">
                            Estamos felizes em ter você aqui novamente!
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-1 mt-10">
                        <p className="text-lg sm:text-xl">Não possui uma conta?</p>
                        <Link to="/cadastro" className="text-center text-xl font-semibold w-[150px] mt-3 py-2 rounded-xl border-1 bg-[var(--buttons-color)]
                        hover:bg-[var(--color-blue-hover)] transition">
                            Criar conta
                        </Link>
                    </div>
                </div>

                <hr className="flex self-center border-1 w-[90%] border-[var(--border-transparent-02)] my-8"></hr>

                <div className="flex flex-col">
                    <h2 className="text-5xl text-center font-bold mb-7">Login</h2>
                    <form onSubmit={handleSubmit(aoSubmeter)} className="flex flex-col px-7 sm:px-20">

                        <label className="mb-2 text-2xl font-semibold">Nome:</label>
                        <input type="text" placeholder="Digite seu nome ou usuário" {...register("nomeUsuario", { required: "O nome/usuário é obrigatório!"})}
                            className="px-3 py-2 rounded-xl bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)
                            text-[var(--color-white)] placeholder-[--placeholder-grey-300] focus:outline-none"/>
                            {errors.nomeUsuario && (
                                <p className="w-[240px] p-2 rounded-2xl mt-2 text-[var(--color-red)] text-md border-1 border-[var(--color-red)]">{errors.nomeUsuario.message}</p>
                            )}

                        <label className="mb-2 mt-8 text-2xl font-semibold">E-mail:</label>
                        <input type="email" placeholder="Digite seu e-mail" {...register("email", {
                            required: "O E-mail é obrigatório!",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Formato de e-mail inválido! E-mail deve conter @ e ."
                            }
                        })} className="px-3 py-2 rounded-xl bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)
                            text-[var(--color-white)] placeholder-[--placeholder-grey-300] focus:outline-none"/>
                        {errors.email && (
                            <p className="w-[180px] p-2 rounded-2xl mt-2 text-[var(--color-red)] text-md border-1 border-[var(--color-red)]">{errors.email.message}</p>
                        )}

                        <button type="submit" className="self-center text-center text-2xl font-semibold w-[120px] my-6 py-2 rounded-xl
                        border-1 bg-[var(--buttons-color)] hover:bg-[var(--color-blue-hover)] transition">
                            Entrar
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}