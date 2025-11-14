import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Services from "@/components/services"
import Pricing from "@/components/pricing"
import Portfolio from "@/components/portfolio"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
