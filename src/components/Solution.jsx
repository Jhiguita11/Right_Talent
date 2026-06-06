import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import { images } from '../data/images.js'

export default function Solution() {
  const { t } = useLang()
  const c = content.solution
  return (
    <section className="section section--navy-deep" id="solution">
      <div className="container split split--reverse">
        <div className="split__media reveal reveal--left">
          <div className="media-frame">
            <img src={images.lobby} alt="Luxury hotel lounge" loading="lazy" />
          </div>
        </div>
        <div className="reveal reveal--right">
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <h2 className="heading heading--lg">{t(c.title)}</h2>
          <p className="lead" style={{ marginTop: 22 }}>{t(c.body1)}</p>
          <p className="lead" style={{ marginTop: 18 }}>{t(c.body2)}</p>
        </div>
      </div>
    </section>
  )
}
