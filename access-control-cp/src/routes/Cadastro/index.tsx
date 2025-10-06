import ContainerBemVindo from "../../components/ContainerBemVindo";
import { useForm } from "react-hook-form";
import type { CadastroType } from "../../types/cadastro";

export default function Cadastro() {
  const { register, handleSubmit, setError ,formState: { errors } } = useForm<CadastroType>();

  const aoSubmeter = async (dados: CadastroType) => {
  try {
    const resposta = await fetch("http://localhost:3001/usuarios");
    const usuarios: CadastroType[] = await resposta.json();

    const usuarioComMesmoNome = usuarios.find(
      (usuario) => usuario.nomeUsuario === dados.nomeUsuario
    );

    if (usuarioComMesmoNome) {
      setError("nomeUsuario", {
        type: "manual",
        message: "Esse nome de usuário já está sendo usado!",
      });
      return;
    }

    const usuarioComMesmoEmail = usuarios.find(
      (usuario) => usuario.email === dados.email
    );

    if (usuarioComMesmoEmail) {
      setError("email", {
        type: "manual",
        message: "Esse e-mail já está sendo usado!",
      });
      return;
    }

    await fetch("http://localhost:3001/usuarios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dados),
    });

    localStorage.setItem("usuarioCadastrado", JSON.stringify(dados));

    alert("Usuário cadastrado com sucesso!");
  } catch (error) {
    console.error("Erro ao cadastrar usuário:", error);
  }
};

  return (
    <main
      className="
        flex justify-center items-center 
        min-h-screen bg-no-repeat bg-cover bg-center 
        bg-[linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/bg-fundo.png')]
      "
    >
      <div
        className="flex w-[90%] flex-col h-fit rounded-2xl shadow-lg bg-[var(--bg-transparent-01)]
        backdrop-blur-sm text-[var(--color-white)] border-3 border-[var(--border-transparent-02)] mt-10 py-1
        sm:w-[70%] sm:mt-20 md:w-[60%] lg:flex-row lg:w-[70%] xl:w-[55%]"
      >
        <ContainerBemVindo
          titulo="Seja bem vindo"
          subtitulo="Estamos feliz em ter você aqui!"
          pergunta="Já possui uma conta?"
          rota="/"
          mensagemRota="Entrar"
        />

        <hr className="flex self-center border w-[90%] border-[var(--border-transparent-02)] my-6 lg:h-[420px] lg:w-0" />

        <div className="flex flex-col lg:w-1/2 px-6 py-1 lg:py-10">
          <h2 className="text-4xl text-center font-bold mb-3">Criar Conta</h2>
          <form
            onSubmit={handleSubmit(aoSubmeter)}
            className="flex flex-col px-2 sm:px-6 lg:gap-1.5"
          >
            <label className="mb-1 text-lg font-semibold">Nome:</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              {...register("nome", { required: "O nome é obrigatório!" })}
              className="
                w-full px-3 py-2 rounded-lg 
                bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)]
                text-[var(--color-white)] placeholder-[--placeholder-grey-300] 
                focus:outline-none
                transition-all duration-200
                text-sm
              "
            />
            {errors.nome && (
              <p className="mt-1 text-[var(--color-red)] text-sm">{errors.nome.message}</p>
            )}

            <label className="mb-1 mt-3 text-lg font-semibold">Nome de Usuário:</label>
            <input
              type="text"
              placeholder="Digite seu nome de usuário"
              {...register("nomeUsuario", {
                required: "O nome do usuario é obrigatório!",
              })}
              className="
                w-full px-3 py-2 rounded-lg 
                bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)]
                text-[var(--color-white)] placeholder-[--placeholder-grey-300] 
                focus:outline-none
                transition-all duration-200
                text-sm
              "
            />
            {errors.nomeUsuario && (
              <p className="mt-1 text-[var(--color-red)] text-sm">{errors.nomeUsuario.message}</p>
            )}

            <label className="mb-1 mt-3 text-lg font-semibold">E-mail:</label>
            <input
              type="email"
              placeholder="Digite seu e-mail"
              {...register("email", {
                required: "O E-mail é obrigatório!",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Formato de e-mail inválido! E-mail deve conter @ e .",
                },
              })}
              className="
                w-full px-3 py-2 rounded-lg 
                bg-[var(--bg-transparent-02)] border border-[var(--border-transparent-03)]
                text-[var(--color-white)] placeholder-[--placeholder-grey-300] 
                focus:outline-none
                transition-all duration-200
                text-sm
              "
            />
            {errors.email && (
              <p className="mt-1 text-[var(--color-red)] text-sm">{errors.email.message}</p>
            )}

            <button
              type="submit"
              className="self-center text-center text-2xl font-semibold mt-5 py-2 px-6 rounded-xl
              border-1 bg-[var(--buttons-color)] hover:bg-[var(--color-blue-hover)] transition cursor-pointer"
            >
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
