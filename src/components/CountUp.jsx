import { useEffect, useRef, useState } from 'react'

// Animates a number from 0 up to the target the first time it scrolls into view.
// Accepts a string like "120+", "100%", "95%" — keeps any prefix/suffix.
export default function CountUp({ value, duration = 1600 }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(value)
  const started = useRef(false)

  useEffect(() => {
    const match = String(value).match(/^(\D*)(\d+)(\D*)$/)
    // Non-numeric values render as-is.
    if (!match) {
      setDisplay(value)
      return
    }
    const [, prefix, numStr, suffix] = match
    const target = parseInt(numStr, 10)

    setDisplay(`${prefix}0${suffix}`)

    const run = () => {
      if (started.current) return
      started.current = true
      const start = performance.now()
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1)
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(`${prefix}${Math.round(eased * target)}${suffix}`)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }

    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) {
      run()
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [value, duration])

  return <span ref={ref}>{display}</span>
}
