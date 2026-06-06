import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import { images } from '../data/images.js'
import { Check } from './icons.jsx'
import CountUp from './CountUp.jsx'

export default function Leadership() {
  const { t, lang } = useLang()
  const c = content.leadership
  return (
    <section className="section section--navy" id="about">
      <div className="container split">
        <div className="split__media reveal reveal--left">
          <div className="media-frame">
            <img src={images.handshake} alt="Business partnership handshake" loading="lazy" />
            <div className="stat-badge">
              <span className="stat-badge__num"><CountUp value={t(c.statValue)} /></span>
              <span className="stat-badge__label">{t(c.statLabel)}</span>
            </div>
          </div>
        </div>
        <div className="reveal reveal--right">
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <h2 className="heading heading--lg">
            {t(c.titleLine1)} <span className="accent">{t(c.titleAccent)}</span>
          </h2>
          <p className="lead" style={{ marginTop: 22 }}>{t(c.body)}</p>
          <ul className="checklist">
            {c.points[lang].map((point) => (
              <li key={point}>
                <span className="tick"><Check /></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
