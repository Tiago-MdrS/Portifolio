const About = () => {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-blue-600 font-semibold">
              Sobre mim
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
              Desenvolvedor em constante evolução
            </h2>

            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Sou Tiago Madeira, estudante de Análise e Desenvolvimento de
              Sistemas e desenvolvedor Full Stack em formação. Tenho interesse
              em criar aplicações modernas, organizadas e funcionais.
            </p>

            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Gosto de transformar ideias em sistemas reais, trabalhando tanto
              no frontend quanto no backend, utilizando tecnologias como React,
              Next.js, Node.js, Spring Boot e PostgreSQL.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard title="Formação" text="ADS - Análise e Desenvolvimento de Sistemas" />
              <InfoCard title="Área" text="Desenvolvimento Full Stack" />
              <InfoCard title="Foco" text="Web Apps e Sistemas" />
              <InfoCard title="Localização" text="Maranhão, Brasil" />
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-6">
              O que eu faço
            </h3>

            <div className="space-y-5">
              <AboutItem
                title="Frontend"
                text="Criação de interfaces modernas, responsivas e intuitivas."
              />

              <AboutItem
                title="Backend"
                text="Desenvolvimento de APIs, regras de negócio e integração com bancos de dados."
              />

              <AboutItem
                title="Banco de Dados"
                text="Modelagem e utilização de bancos relacionais e não relacionais."
              />

              <AboutItem
                title="Projetos Acadêmicos e Profissionais"
                text="Construção de sistemas completos para prática, estudo e portfólio."
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function InfoCard({ title, text }) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5">
      <h4 className="font-bold text-slate-900 mb-2">
        {title}
      </h4>

      <p className="text-slate-600 text-sm">
        {text}
      </p>
    </div>
  )
}

function AboutItem({ title, text }) {
  return (
    <div className="border-l-4 border-blue-600 pl-5">
      <h4 className="font-bold text-slate-900 mb-1">
        {title}
      </h4>

      <p className="text-slate-600">
        {text}
      </p>
    </div>
  )
}

export default About