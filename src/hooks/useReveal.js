import { useEffect } from 'react'

// Animates any `.reveal` element whenever it scrolls into view — and re-arms
// it when it leaves, so the animation replays scrolling both down AND up.
// Pass a `dep` (e.g. active language) to re-scan after content re-renders.
export function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Toggle on enter / off on exit so it animates again next time.
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [dep])
}
