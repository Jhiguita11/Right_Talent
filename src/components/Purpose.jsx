import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import { images } from '../data/images.js'

export default function Purpose() {
  const { t } = useLang()
  const c = content.purpose
  return (
    <section className="section section--navy-deep">
      <div className="container purpose__grid">
        <div className="reveal reveal--left">
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <div className="quote-card">
            <h3>{t(c.title)}</h3>
            <p>{t(c.body)}</p>
            <p className="italic">{t(c.bodyItalic)}</p>
          </div>
        </div>
        <div className="split__media reveal reveal--right">
          <div className="media-frame">
            <img src={images.purpose} alt="Right Talent hospitality team" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
