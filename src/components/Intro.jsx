import { useEffect, useState } from 'react'
import logo from '../assets/logo-rt.png'

// Full-screen brand intro that plays once when the page loads, then lifts
// like a curtain to reveal the hero. Skipped for reduced-motion users.
export default function Intro() {
  const [exiting, setExiting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    document.body.classList.add('is-loading')
    // Lift the curtain — and release the hero animations at the same moment.
    const t1 = setTimeout(() => {
      setExiting(true)
      document.body.classList.remove('is-loading')
    }, 1900)
    // Remove the overlay from the DOM once the lift finishes.
    const t2 = setTimeout(() => setDone(true), 2900)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      document.body.classList.remove('is-loading')
    }
  }, [])

  if (done) return null

  return (
    <div className={`intro ${exiting ? 'intro--exit' : ''}`} aria-hidden="true">
      <div className="intro__inner">
        <img src={logo} alt="Right Talent Pro Services" className="intro__logo" />
        <span className="intro__line" />
      </div>
    </div>
  )
}
