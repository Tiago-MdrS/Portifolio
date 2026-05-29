const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <h1 className="text-2xl font-black">
          <span className="text-slate-900">Tiago</span>
          <span className="text-blue-600">Dev</span>
        </h1>

        <nav className="hidden md:flex gap-8">
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Skills</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
          Contato
        </button>
      </div>
    </header>
  )
}

export default Navbar