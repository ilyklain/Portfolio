import { useEffect, useState } from 'react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 animate-fade-in">
      <div className={`max-w-4xl mx-auto text-center transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-1000 ease-out`}>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          Desarrollador Full Stack
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in">
          Creando experiencias web únicas y funcionales
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-primary/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Ver Proyectos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-full hover:border-primary dark:hover:border-primary text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-lg hover:shadow-primary/30 backdrop-blur-sm active:scale-95 focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Contactar
          </a>
        </div>
        <div className="mt-16 flex justify-center items-center space-x-6 animate-bounce-slow">
          <a
            href="#about"
            className="text-gray-400 dark:text-gray-500 hover:text-primary dark:hover:text-primary transition-colors duration-300"
            aria-label="Scroll to about section"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero