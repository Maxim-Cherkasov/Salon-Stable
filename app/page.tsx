import { HeroCarousel } from '@/components/hero-carousel'
import { GalleryGrid } from '@/components/gallery-grid'
import { PriceTable } from '@/components/price-table'
import { ContactForm } from '@/components/contact-form'
import { Hero } from '@/components/hero'
import { HaircutsSection } from '@/components/haircuts-section'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeroCarousel />
      
      <div className="container mx-auto px-4 py-24 max-w-7xl">
        <HaircutsSection />

        <Testimonials />

        <section id="gallery" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent">Our Works</h2>
          <GalleryGrid />
        </section>

        <section id="prices" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent">Our Prices</h2>
          <div className="max-w-4xl mx-auto">
            <PriceTable />
          </div>
        </section>

        <section id="contact" className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 bg-clip-text text-transparent">Contact Us</h2>
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </section>
      </div>
    </>
  )
}