import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import { images } from '../data/images.js'

export default function Hero() {
  const { t } = useLang()
  const c = content.hero
  return (
    <header className="hero" id="top">
      <div className="hero__bg" style={{ backgroundImage: `url(${images.heroBg})` }} />
      <div className="container hero__inner">
        <p className="hero__eyebrow">{t(c.eyebrow)}</p>
        <h1 className="hero__title">{t(c.title)}</h1>
        <div className="hero__rule" />
        <p className="hero__subtitle">{t(c.subtitle)}</p>
        <div className="hero__actions">
          <a href="#contact" className="btn btn--gold">{t(c.primaryCta)}</a>
          <a href="#services" className="btn btn--outline-light">{t(c.secondaryCta)}</a>
        </div>
      </div>
      <a href="#about" className="hero__scroll">
        {t({ en: 'Scroll', es: 'Desliza' })}
        <span />
      </a>
    </header>
  )
}
