import { FaUser } from 'react-icons/fa';

export default function Header() {
  const usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado") || "null");

  if (!usuarioLogado) return null;

  return (
    <header
      className="
        fixed w-full px-6 py-3
        flex justify-between items-center
        bg-[var(--bg-transparent-01)] backdrop-blur-md
        text-[var(--color-white)] shadow-md
        border-b border-[var(--border-transparent-02)]
      "
    >
      <div className="flex items-center gap-3">
        <span className="text-2xl"><FaUser /></span>
        <div className="flex flex-col leading-tight">
          <span className="font-semibold text-lg">{usuarioLogado.nomeUsuario}</span>
          <span className="text-sm text-[var(--color-white)]">{usuarioLogado.email}</span>
        </div>
      </div>

      <button
        onClick={() => {
          localStorage.removeItem("usuarioLogado");
          window.location.href = "/";
        }}
        className="
          px-6 py-2 rounded-xl 
          bg-[var(--buttons-color)] hover:bg-[var(--color-blue-hover)]
          text-[var(--color-white)] font-medium transition-all duration-200 cursor-pointer
        "
      >
        Sair
      </button>
    </header>
  );
}
