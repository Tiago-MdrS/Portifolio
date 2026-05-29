import React from 'react'

const Skills = () => {
  const skillGroups = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Java', 'Spring Boot', 'C#'],
    },
    {
      title: 'Banco de Dados',
      skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
    },
    {
      title: 'Ferramentas',
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'GitHub Actions'],
    },
  ]

  return (
    <section id="habilidades" className="bg-slate-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold">Minhas habilidades</span>

          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Tecnologias que utilizo
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto">
            Ferramentas e tecnologias que uso para desenvolver aplicações web modernas,
            responsivas e bem estruturadas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold mb-5 text-slate-900">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-blue-50 text-blue-600 px-3 py-2 rounded-lg text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills