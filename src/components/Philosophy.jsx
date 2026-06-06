import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'

export default function Philosophy() {
  const { t } = useLang()
  const c = content.philosophy
  return (
    <section className="section section--tight section--navy-deep">
      <div className="container philosophy reveal reveal--scale">
        <div className="mark">&ldquo;</div>
        <blockquote>{t(c.quote)}</blockquote>
        <cite>{t(c.attribution)}</cite>
      </div>
    </section>
  )
}
