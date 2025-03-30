import { useState } from 'react'

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  const projects = [
    {
      id: 1,
      title: 'Rack Ball 🎱',
      description: 'Réplica avanzada de 8 Ball Pool con físicas realistas, multijugador y economía en tiempo real',
      image: '../assets/rackball.png',
      tags: ['Unity', 'C#', 'Multiplayer', 'Physics'],
      github: 'https://github.com/ilyklain/RackBall-Development-'
    },
    {
      id: 2,
      title: 'ClashMC Website 🌐',
      description: 'Web profesional con animaciones dinámicas y una paleta azul-morado, diseñada para presentar la red ClashMC',
      image: '../assets/clashmc.png',
      tags: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/ilyklain/ClashMC-Web'
    },
    {
      id: 3,
      title: 'Ranked Network Website ⚔️',
      description: 'Sitio web en HTML, CSS y JavaScript con animaciones, URLs limpias y detalles sobre HCF, KitMap y Practice',
      image: '../assets/ranked.png',
      tags: ['HTML', 'CSS', 'JavaScript', 'Animations'],
      github: 'https://github.com/ilyklain/Ranked-Test'
    },
    {
      id: 4,
      title: 'ClashMC Bot 🤖',
      description: 'Bot de Discord con sistema de tickets, logs, tags para anuncios y otras funciones para mejorar la experiencia del servidor',
      image: 'src/assets/cbot.png',
      tags: ['Discord.js', 'Node.js', 'SQLite'],
      github: 'https://github.com/ilyklain/ClashMC-Bot'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              style={{
                opacity: 0,
                animation: `fadeIn 0.5s ease-out ${index * 0.2}s forwards`,
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                />
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center animate-fade-in">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-full transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
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
