import banner from '../assets/brand-banner.png'

// Subtle full-width brand band. The image is a self-contained graphic
// (headline + value props), so we just frame it with breathing room.
export default function BrandBanner() {
  return (
    <section className="section section--tight section--navy-deep brand-banner">
      <div className="container">
        <img
          src={banner}
          alt="The Right Talent. The Right Results. Operational excellence for luxury hotels & resorts."
          className="brand-banner__img reveal reveal--scale"
          loading="lazy"
        />
      </div>
    </section>
  )
}
