import NavBar      from './components/NavBar'
import Hero        from './components/Hero'
import Episodes    from './components/Episodes'
import PromoSection from './components/PromoSection'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Saltar al contenido principal</a>
      <NavBar />
      <main id="main">
        <section
          id="home"
          aria-labelledby="hero-heading"
          style={{ background: 'var(--ink)' }}
        >
          <Hero />
        </section>

        <Episodes />
        <PromoSection />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
