import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'

export default function Challenge() {
  const { t, lang } = useLang()
  const c = content.challenge
  return (
    <section className="section section--navy" id="challenge">
      <div className="container">
        <div className="challenge__head reveal">
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <h2 className="heading heading--lg">
            {t(c.title).split(' ').slice(0, -1).join(' ')}{' '}
            <span className="accent">{t(c.title).split(' ').slice(-1)}</span>
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>{t(c.intro)}</p>
        </div>
        <div className="cards">
          {c.items[lang].map((item, i) => (
            <div className="card reveal" key={item.title} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="card__num">{String(i + 1).padStart(2, '0')}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
