const projects = [
  {
    title: "Sistema de Reservas",
    description:
      "Sistema completo para gerenciamento de reservas utilizando Next.js, Spring Boot e PostgreSQL.",
    technologies: ["Next.js", "Spring Boot", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    title: "AquaMind",
    description:
      "Plataforma de conscientização sobre consumo de água com desafios, ranking e dashboard interativo.",
    technologies: ["React", "Node.js", "Firebase"],
    github: "#",
    demo: "#",
  },
  {
    title: "Sistema PDV",
    description:
      "Sistema de gestão para lojas com controle de estoque, vendas, relatórios e dashboard financeiro.",
    technologies: ["React", "Node.js", "SQLite"],
    github: "#",
    demo: "#",
  },
]
const Projects = () => {
  return (
    <section
      id="projetos"
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold">
            Meu Trabalho
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">
            Projetos em Destaque
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Alguns dos projetos que desenvolvi durante meus estudos e
            experiências práticas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="
                bg-slate-50
                border
                border-slate-200
                rounded-3xl
                overflow-hidden
                hover:-translate-y-2
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <div className="h-52 bg-gradient-to-br from-blue-100 via-blue-50 to-white flex items-center justify-center">
                <span className="text-6xl">💻</span>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3
                        py-1
                        bg-blue-100
                        text-blue-600
                        rounded-lg
                        text-sm
                        font-medium
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    className="
                      flex-1
                      text-center
                      border
                      border-slate-300
                      py-3
                      rounded-xl
                      font-medium
                      hover:border-blue-600
                      hover:text-blue-600
                      transition
                    "
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    className="
                      flex-1
                      text-center
                      bg-blue-600
                      text-white
                      py-3
                      rounded-xl
                      font-medium
                      hover:bg-blue-700
                      transition
                    "
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects