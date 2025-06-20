import { useEffect, useState } from 'react'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const element = document.getElementById('about')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const skills = [
    { name: 'Frontend', items: ['React', 'Vue.js', 'Tailwind CSS', 'TypeScript', 'Astro'] },
    { name: 'Backend', items: ['Node.js', 'Python', 'MongoDB', 'PostgreSQL'] },
    { name: 'DevOps', items: ['Docker', 'AWS', 'CI/CD', 'Git'] },
    { name: 'Tools', items: ['VS Code', 'Figma', 'Postman', 'Jest', 'Trae'] }
  ]

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className={`grid md:grid-cols-2 gap-12 items-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Sobre Mí
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Soy un desarrollador Full Stack apasionado por crear soluciones web innovadoras y escalables.
              Me especializo en tecnologías modernas y me mantengo actualizado con las últimas tendencias
              en desarrollo web.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Con experiencia en el desarrollo de aplicaciones web completas, desde la interfaz de usuario
              hasta la infraestructura backend, me enfoco en crear experiencias de usuario excepcionales
              y código mantenible.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {skills.map((category, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-2xl transform transition-all duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-gray-600 dark:text-gray-300 flex items-center space-x-2"
                    >
                      <svg
                        className="w-4 h-4 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About