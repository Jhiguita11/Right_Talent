import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import CountUp from './CountUp.jsx'

export default function Value() {
  const { t, lang } = useLang()
  const c = content.value
  return (
    <section className="section section--navy" id="value">
      <div className="container">
        <div className="value__head reveal">
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <h2 className="heading heading--lg">{t(c.title)}</h2>
          <p className="lead" style={{ marginTop: 22 }}>{t(c.body)}</p>
        </div>
        <div className="stats-row">
          {c.stats[lang].map((stat, i) => (
            <div className="stat reveal reveal--scale" key={stat.label} style={{ transitionDelay: `${i * 90}ms` }}>
              <div className="stat__num"><CountUp value={stat.value} /></div>
              <div className="stat__label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
