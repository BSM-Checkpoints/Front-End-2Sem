import ContainerBemVindo from "../../components/ContainerBemVindo";
import { useForm } from "react-hook-form";
import type { CadastroType } from "../../types/cadastro";

export default function Cadastro() {
    const { register, handleSubmit, formState: { errors}, } = useForm<CadastroType>()

    const aoSubmeter = (dados: CadastroType) => {
        console.log(dados)
    }

  return (
    <main
      className="
        flex justify-center items-center 
        h-screen bg-no-repeat bg-cover bg-center 
        bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/bg-fundo.png')]
      "
    >
      <div className="
      flex w-4xl h-[500px] rounded-2xl shadow-lg bg-[var(--bg-transparent-01)]
      backdrop-blur-sm text-[var(--color-white)] border-1
      "
      >
         <ContainerBemVindo 
                titulo="Seja bem vindo"
                subtitulo="Estamos feliz em ter você aqui!"
                pergunta="Já possui uma conta?"
                rota="/"
                mensagemRota="Entrar"
            />
        {/* Coluna do Formulário */}
        <div className="flex flex-col justify-center p-10 w-1/2 border-l border-[var(--border-transparent-02)]">
          <h2 className="text-4xl text-center font-semibold mb-6">Criar Conta</h2>
          <form 
          onSubmit={handleSubmit(aoSubmeter)}
          className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Nome"
              {...register("nome", {
                required: "O nome é obrigatório"
              })}
              className="
              px-4 py-2 rounded-xl
            bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)]
             text-[var(--color-white)] placeholder-[--placeholder-grey-300] focus:outline-none"
            />
            {errors.nome && (
                <p className="text-[var(--color-red)] text-sm">{errors.nome.message}</p>
            )}
            <input
              type="text"
              placeholder="NomeUsuário"
              {...register("nomeUsuario", {
                required: "O nome usuário é obrigatório"
              })}
              className="
              px-4 py-2 rounded-xl
            bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)]
             text-[var(--color-white)] placeholder-[--placeholder-grey-300] focus:outline-none"
            />
            {errors.nomeUsuario && (
                <p className="text-[var(--color-red)] text-sm">{errors.nomeUsuario.message}</p>
            )}
            <input
              type="email"
              placeholder="E-mail"
              {...register("email", {
                required: "O e-mail é obrigatório",
                pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Formato de e-mail inválido"
                }
              })}
              className="
              px-4 py-2 rounded-xl
            bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)]
             text-[var(--color-white)] placeholder-[--placeholder-grey-300] focus:outline-none"
            />
            {errors.email && (
                <p className="text-[var(--color-red)] text-sm">{errors.email.message}</p>
              )}
            <button
              type="submit"
              className="mt-4 px-4 py-2 rounded-xl bg-[var(--color-blue)] hover:bg-[var(--color-blue-hover)] transition cursor-pointer"
            >
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
