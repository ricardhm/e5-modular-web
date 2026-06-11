import { useState, useEffect } from 'react'
import { copy } from './copy'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Mosaico from './components/Mosaico'
import Phases from './components/Phases'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css'

export default function App() {
  const [lang, setLang] = useState('es')
  const c = copy[lang]

  useEffect(() => {
    document.title = c.pageTitle
  }, [lang])

  return (
    <div className="min-h-screen">
      <Nav lang={lang} setLang={setLang} c={c} />
      <Hero c={c} lang={lang} />
      <Manifesto c={c} />
      <Mosaico c={c} />
      <Phases c={c} />
      <Contact c={c} />
      <Footer c={c} />
    </div>
  )
}
