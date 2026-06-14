import { useState } from 'react'
import { useLang } from '../context/LanguageContext.jsx'
import { content } from '../data/content.js'
import { Mail, Globe } from './icons.jsx'

export default function Contact() {
  const { t } = useLang()
  const c = content.contact
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // No backend yet: open the user's mail client with prefilled content.
    const data = new FormData(e.currentTarget)
    const subject = encodeURIComponent(`Staffing request — ${data.get('company') || data.get('name')}`)
    const body = encodeURIComponent(
      `Name: ${data.get('name')}\n` +
        `Job title: ${data.get('role')}\n` +
        `Company: ${data.get('company')}\n` +
        `Staff needed: ${data.get('teamSize')}\n` +
        `Phone: ${data.get('phone')}\n` +
        `Email: ${data.get('email')}\n\n` +
        `${data.get('message')}`,
    )
    window.location.href = `mailto:${c.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="section section--navy" id="contact">
      <div className="container contact__grid">
        <div className="contact__intro reveal reveal--left">
          <span className="eyebrow">{t(c.eyebrow)}</span>
          <h2 className="heading heading--lg">{t(c.title)}</h2>
          <p className="lead" style={{ marginTop: 18 }}>{t(c.body)}</p>
          <div className="contact__methods">
            <a className="contact__method" href={`mailto:${c.email}`}>
              <span className="ico"><Mail /></span>
              <span>
                <small>{t(c.emailLabel)}</small>
                {c.email}
              </span>
            </a>
            <a className="contact__method" href={`https://${c.web}`} target="_blank" rel="noreferrer">
              <span className="ico"><Globe /></span>
              <span>
                <small>{t(c.webLabel)}</small>
                {c.web}
              </span>
            </a>
          </div>
        </div>

        <form className="form reveal reveal--right" onSubmit={handleSubmit}>
          <div className="row">
            <div className="field">
              <label htmlFor="name">{t(c.form.name)}</label>
              <input id="name" name="name" required />
            </div>
            <div className="field">
              <label htmlFor="role">{t(c.form.role)}</label>
              <input id="role" name="role" />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="company">{t(c.form.company)}</label>
              <input id="company" name="company" />
            </div>
            <div className="field">
              <label htmlFor="teamSize">{t(c.form.teamSize)}</label>
              <input id="teamSize" name="teamSize" type="number" min="1" inputMode="numeric" />
            </div>
          </div>
          <div className="row">
            <div className="field">
              <label htmlFor="phone">{t(c.form.phone)}</label>
              <input id="phone" name="phone" type="tel" inputMode="tel" />
            </div>
            <div className="field">
              <label htmlFor="email">{t(c.form.email)}</label>
              <input id="email" name="email" type="email" required />
            </div>
          </div>
          <div className="field">
            <label htmlFor="message">{t(c.form.message)}</label>
            <textarea id="message" name="message" required />
          </div>
          <button type="submit" className="btn btn--gold" style={{ justifyContent: 'center' }}>
            {t(c.form.submit)}
          </button>
          {sent && (
            <p className="form__success">
              {t({ en: 'Opening your email client…', es: 'Abriendo tu cliente de correo…' })}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
