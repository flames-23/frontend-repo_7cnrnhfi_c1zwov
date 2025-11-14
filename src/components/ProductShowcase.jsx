import { motion } from 'framer-motion'

const products = [
  { id: 1, name: 'Enchanya No.1', note: 'Amber • Rose • Vanilla', price: '$68', image: 'https://images.unsplash.com/photo-1659234574667-bd08bac8a8d4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbmNoYW55YSUyME5vLjF8ZW58MHwwfHx8MTc2MzA5OTkyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 2, name: 'Enchanya No.2', note: 'Peony • Pear • Musk', price: '$68', image: 'https://images.unsplash.com/photo-1659234574667-bd08bac8a8d4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFbmNoYW55YSUyME5vLjF8ZW58MHwwfHx8MTc2MzA5OTkyNXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80' },
  { id: 3, name: 'Enchanya No.3', note: 'Bergamot • Jasmine • Sandalwood', price: '$68', image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' },
]

export default function ProductShowcase() {
  return (
    <section id="shop" className="relative bg-[#fffaf4] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl text-[#20160f]" style={{fontFamily: 'Playfair Display, serif'}}>The Collection</h2>
          <p className="mt-3 text-[#6d5647]">Golden tins, botanical blooms, everlasting glow.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="group relative rounded-2xl overflow-hidden bg-white/70 backdrop-blur border border-[#ead9c1] shadow-[0_10px_40px_rgba(210,160,100,0.18)]"
            >
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-[1.06]" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl text-[#20160f]">{p.name}</h3>
                  <span className="text-[#7a5f46]">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-[#6d5647]">{p.note}</p>
                <div className="mt-5 flex items-center gap-3">
                  <button className="flex-1 rounded-full bg-gradient-to-br from-[#caa263] to-[#a6803e] text-white px-5 py-2.5 shadow-[0_8px_20px_rgba(202,162,99,0.35)]">Add to Cart</button>
                  <button className="flex-1 rounded-full border border-[#d5b78c] text-[#7a5f46] px-5 py-2.5">View Details</button>
                </div>
              </div>
              {/* Golden border glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#d5b78c]/70" />
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-[#f5d8a8]/0 via-[#f0c98b]/20 to-[#dfb875]/0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
