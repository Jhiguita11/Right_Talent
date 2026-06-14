import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import logo from '../assets/logo-rt.png'

export default function Footer() {
  const { t } = useLang()
  const c = content.footer
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={logo} alt="Right Talent Pro Services" className="footer__logo" />
          <span className="footer__tagline">{t(c.tagline)}</span>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Right Talent Pro Services. {t(c.rights)}
        </p>
      </div>
    </footer>
  )
}
