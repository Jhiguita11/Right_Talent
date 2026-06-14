import banner from '../assets/brand-banner.png'

// Full-bleed immersive brand band: the graphic spans edge-to-edge and
// expands to fill on reveal. No card framing so it reads as a visual break.
export default function BrandBanner() {
  return (
    <section className="brand-banner" aria-label="The Right Talent. The Right Results.">
      <img
        src={banner}
        alt="The Right Talent. The Right Results. Operational excellence for luxury hotels & resorts."
        className="brand-banner__img reveal reveal--scale"
        loading="lazy"
      />
    </section>
  )
}
