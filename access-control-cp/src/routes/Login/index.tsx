import type { LoginType } from "../../types/login";
import { useForm } from "react-hook-form";
import ContainerBemVindo from "../../components/ContainerBemVindo";

export default function Login() {

    const { register, handleSubmit, formState: { errors }, } = useForm<LoginType>()

    const aoSubmeter = (dados: LoginType) => {
        console.log(dados)
    }

    return (
        <main className="w-screen h-screen bg-repeat bg-cover bg-center bg-[linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('bg-fundo.png')] flex items-center justify-center">
            <div className="flex w-[90%] flex-col h-fit rounded-2xl shadow-lg bg-[var(--bg-transparent-01)] backdrop-blur-sm text-[var(--color-white)] border-1 sm:w-[75%] lg:flex-row lg:w-[80%] xl:w-[65%]">
                <ContainerBemVindo 
                    titulo="Seja bem vindo"
                    subtitulo="Estamos feliz em ter você aqui novamente!"
                    pergunta="Não possui uma conta?"
                    rota="/cadastro"
                    mensagemRota="Criar Conta"
                />

                <hr className="flex self-center border-1 w-[90%] border-[var(--border-transparent-02)] my-8 lg:h-[450px] lg:w-0"></hr>

                <div className="flex flex-col lg:w-1/2">
                    <h2 className="text-5xl text-center font-bold mb-10 lg:mt-8">Login</h2>
                    <form onSubmit={handleSubmit(aoSubmeter)} className="flex flex-col px-7 sm:px-20 lg:px-10">

                        <label className="mb-1 text-2xl font-semibold">Nome:</label>
                        <input type="text" placeholder="Digite seu nome ou usuário" {...register("nomeUsuario", { required: "O nome/usuário é obrigatório!"})}
                            className="px-3 py-2 rounded-xl bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)
                            text-[var(--color-white)] placeholder-[--placeholder-grey-300] focus:outline-none md:py-3 "/>
                            {errors.nomeUsuario && (
                                <p className="flex-grow p-2 rounded-2xl mt-2 text-[var(--color-red)] text-md lg:text-lg">{errors.nomeUsuario.message}</p>
                            )}

                        <label className="mb-1 mt-10 text-2xl font-semibold lg:mt-12">E-mail:</label>
                        <input type="email" placeholder="Digite seu e-mail" {...register("email", {
                            required: "O E-mail é obrigatório!",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Formato de e-mail inválido! E-mail deve conter @ e ."
                            }
                        })} className="px-3 py-2 rounded-xl bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)
                            text-[var(--color-white)] placeholder-[--placeholder-grey-300] focus:outline-none md:py-3"/>
                        {errors.email && (
                            <p className="flex-grow p-2 rounded-2xl text-[var(--color-red)] text-md lg:text-lg">{errors.email.message}</p>
                        )}

                        <button type="submit" className="self-center text-center text-2xl font-semibold w-[120px] my-6 py-2 rounded-xl
                        border-1 bg-[var(--buttons-color)] hover:bg-[var(--color-blue-hover)] transition cursor-pointer">
                            Entrar
                        </button>

                    </form>
                </div>
            </div>
        </main>
    );
}