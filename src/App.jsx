import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import WhyHireMe from './components/WhyHireMe.jsx'
import About from './components/About.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Publications from './components/Publications.jsx'
import Skills from './components/Skills.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-canvas font-body text-ink">
      <Nav />
      <main>
        <Hero />
        <WhyHireMe />
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}