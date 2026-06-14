import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    // Always default to English; only honor a previous explicit choice.
    const saved = typeof localStorage !== 'undefined' && localStorage.getItem('rt-lang')
    return saved === 'es' || saved === 'en' ? saved : 'en'
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
