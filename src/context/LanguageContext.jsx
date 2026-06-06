import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem('rt-lang')
    if (saved) return saved
    const browser = typeof navigator !== 'undefined' && navigator.language
    return browser && browser.toLowerCase().startsWith('es') ? 'es' : 'en'
  })

  useEffect(() => {
    localStorage.setItem('rt-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'es' : 'en'))

  // t(node) returns the string for the active language.
  // Accepts either a {en, es} object or a plain string.
  const t = (node) => {
    if (node == null) return ''
    if (typeof node === 'string') return node
    return node[lang] ?? node.en ?? ''
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
