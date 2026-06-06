import { useLang } from './context/LanguageContext.jsx'
import { useReveal } from './hooks/useReveal.js'
import Intro from './components/Intro.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Leadership from './components/Leadership.jsx'
import Purpose from './components/Purpose.jsx'
import Challenge from './components/Challenge.jsx'
import Solution from './components/Solution.jsx'
import Services from './components/Services.jsx'
import Value from './components/Value.jsx'
import Philosophy from './components/Philosophy.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  const { lang } = useLang()
  // Re-run reveal observer whenever language changes (content re-renders).
  useReveal(lang)

  return (
    <>
      <Intro />
      <Navbar />
      <main>
        <Hero />
        <Leadership />
        <Purpose />
        <Challenge />
        <Solution />
        <Services />
        <Value />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
