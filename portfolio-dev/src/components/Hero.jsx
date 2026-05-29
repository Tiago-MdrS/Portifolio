const Hero = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Texto */}
          <div>
            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium mb-6">
              🚀 Disponível para novos projetos
            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Olá, eu sou
              <span className="block text-blue-600">
                Tiago Madeira
              </span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-6">
              Desenvolvedor Full Stack
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl">
              Estudante de Análise e Desenvolvimento de Sistemas,
              apaixonado por criar aplicações modernas utilizando
              React, Next.js, Spring Boot, Node.js e PostgreSQL.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  transition
                "
              >
                Ver Projetos
              </a>

              <a
                href="#contato"
                className="
                  border
                  border-slate-300
                  hover:border-blue-600
                  hover:text-blue-600
                  px-8
                  py-4
                  rounded-2xl
                  font-semibold
                  transition
                "
              >
                Entrar em Contato
              </a>
            </div>

            <div className="flex gap-12 mt-14">
              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-slate-500">Projetos</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">8+</h3>
                <p className="text-slate-500">Tecnologias</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">2+</h3>
                <p className="text-slate-500">Anos estudando</p>
              </div>
            </div>
          </div>

          {/* Card */}
          <div className="flex justify-center">
            <div className="w-full max-w-lg bg-slate-900 rounded-3xl shadow-2xl overflow-hidden">

              <div className="flex gap-2 p-5 border-b border-slate-800">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              <div className="p-8">
                <p className="text-green-400 mb-6">
                  portfolio.js
                </p>

                <pre className="text-sm text-slate-300 leading-7 overflow-x-auto">
{`const developer = {
  name: "Tiago Madeira",
  role: "Full Stack Developer",

  stack: [
    "React",
    "Next.js",
    "Node.js",
    "Spring Boot",
    "PostgreSQL"
  ],

  passion: "Building amazing apps",
  status: "Available"
};`}
                </pre>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero