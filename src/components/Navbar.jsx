import { useEffect, useState } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const c = content.nav

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    ['#about', c.about],
    ['#challenge', c.challenge],
    ['#solution', c.solution],
    ['#services', c.services],
    ['#value', c.value],
    ['#contact', c.contact],
  ]

  const close = () => setOpen(false)

  const LangToggle = ({ className = '' }) => (
    <div className={`lang-toggle ${className}`} role="group" aria-label="Language">
      <button
        className={lang === 'en' ? 'is-active' : ''}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        className={lang === 'es' ? 'is-active' : ''}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
    </div>
  )

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={close}>
          <span className="nav__mark">RT</span>
          <span className="nav__name">
            Right Talent
            <small>PRO SERVICES</small>
          </span>
        </a>

        <div className={`nav__links ${open ? 'is-open' : ''}`}>
          {links.map(([href, label]) => (
            <a key={href} href={href} className="nav__link" onClick={close}>
              {t(label)}
            </a>
          ))}
          <LangToggle className="lang-toggle--desktop" />
          <a href="#contact" className="btn btn--gold" onClick={close} style={{ padding: '12px 24px' }}>
            {t(c.requestStaff)}
          </a>
        </div>

        <div className="nav__mobile">
          <LangToggle className="lang-toggle--mobile" />
          <button
            className="nav__toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
