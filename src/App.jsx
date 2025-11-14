import Hero from './components/Hero'
import ScrollScenes from './components/ScrollScenes'
import ProductShowcase from './components/ProductShowcase'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#fff7ef]">
      {/* Brand top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur bg-white/40 border-b border-[#ead9c1]">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-xl tracking-wide text-[#20160f]" style={{fontFamily: 'Playfair Display, serif'}}>Enchanya</a>
          <nav className="hidden md:flex items-center gap-8 text-[#6d5647]">
            <a href="#story" className="hover:text-[#a6803e]">Story</a>
            <a href="#shop" className="hover:text-[#a6803e]">Shop</a>
            <a href="#about" className="hover:text-[#a6803e]">About</a>
          </nav>
          <div className="text-[#6d5647]">Bag (0)</div>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <ScrollScenes />
        <ProductShowcase />
        <About />
      </main>

      <Footer />
    </div>
  )
}

export default App
