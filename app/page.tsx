import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
