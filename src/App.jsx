import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 via-black to-red-700 animate-gradient-xy backdrop-blur-sm backdrop-filter relative overflow-hidden before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.1)_0%,transparent_50%)] before:animate-pulse-slow">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

export default App
