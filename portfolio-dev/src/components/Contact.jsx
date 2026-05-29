const Contact = () => {
  return (
    <section
      id="contato"
      className="py-24 bg-slate-50"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            Contato
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Vamos trabalhar juntos?
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Estou disponível para novos projetos, freelances e
            oportunidades de desenvolvimento.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          
          {/* Informações */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <h3 className="text-2xl font-bold mb-8">
              Informações
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-slate-500 mb-1">
                  Email
                </p>

                <a
                  href="mailto:tiagomadeira421@gmail.com"
                  className="text-lg font-medium hover:text-blue-600 transition"
                >
                  tiagomadeira421@gmail.com
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  GitHub
                </p>

                <a
                  href="https://github.com/Tiago-MdrS"
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-medium hover:text-blue-600 transition"
                >
                  github.com/Tiago-MdrS
                </a>
              </div>

              <div>
                <p className="text-sm text-slate-500 mb-1">
                  Localização
                </p>

                <p className="text-lg font-medium">
                  Maranhão, Brasil
                </p>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200">
            <form className="space-y-5">
              <div>
                <label className="block mb-2 font-medium">
                  Nome
                </label>

                <input
                  type="text"
                  placeholder="Seu nome"
                  className="
                    w-full
                    border
                    border-slate-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-600
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="
                    w-full
                    border
                    border-slate-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-blue-600
                  "
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Mensagem
                </label>

                <textarea
                  rows="5"
                  placeholder="Digite sua mensagem..."
                  className="
                    w-full
                    border
                    border-slate-300
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    resize-none
                    focus:border-blue-600
                  "
                />
              </div>

              <button
                type="submit"
                className="
                  w-full
                  bg-blue-600
                  text-white
                  py-3
                  rounded-xl
                  font-semibold
                  hover:bg-blue-700
                  transition
                "
              >
                Enviar Mensagem
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact