const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <span className="text-3xl font-black text-blue-600">
            &lt;/&gt;
          </span>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Tiago Madeira
            </h1>

            <p className="text-xs text-slate-500">
              Full Stack Developer
            </p>
          </div>
        </a>

        {/* Navegação */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#inicio"
            className="font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Início
          </a>

          <a
            href="#sobre"
            className="font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Sobre
          </a>

          <a
            href="#habilidades"
            className="font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Skills
          </a>

          <a
            href="#projetos"
            className="font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Projetos
          </a>

          <a
            href="#contato"
            className="font-medium text-slate-600 hover:text-blue-600 transition"
          >
            Contato
          </a>
        </nav>

        {/* Botão */}
        <a
          href="#contato"
          className="
            bg-blue-600
            hover:bg-blue-700
            text-white
            px-5
            py-2.5
            rounded-xl
            font-medium
            transition
          "
        >
          Fale Comigo
        </a>
      </div>
    </header>
  )
}

export default Header