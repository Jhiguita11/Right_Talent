import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'

export default function Services() {
  const { t, lang } = useLang()
  const c = content.services
  return (
    <section className="section section--cream" id="services">
      <div className="container">
        <div className="value__head reveal">
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <h2 className="heading heading--lg" style={{ color: 'var(--navy)' }}>{t(c.title)}</h2>
        </div>
        <div className="services__grid">
          {c.groups[lang].map((group, i) => (
            <div className="svc-group reveal" key={group.name} style={{ transitionDelay: `${i * 70}ms` }}>
              <h4><span className="dot" />{group.name}</h4>
              <ul>
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <div className="services__cta reveal">
          <a href="#contact" className="btn btn--gold">{t(c.cta)}</a>
        </div>
      </div>
    </section>
  )
}
