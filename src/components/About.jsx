import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-[#fff7ef] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="md:col-span-6 relative aspect-[4/5] rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(210,160,100,0.22)]"
        >
          <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1600&auto=format&fit=crop" alt="Candle on pedestal" className="h-full w-full object-cover" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(255,210,170,0.25),transparent)]" />
        </motion.div>

        <div className="md:col-span-6">
          <h2 className="text-4xl md:text-5xl text-[#20160f]" style={{fontFamily: 'Playfair Display, serif'}}>About Enchanya</h2>
          <p className="mt-6 text-[#6d5647] leading-relaxed text-lg">
            Enchanya is a ritual of light. Each candle is hand-poured in small batches and adorned with delicate floral compositions. Our golden tins evoke timeless elegance, while our fragrances are designed for slow living and sensory immersion.
          </p>
          <p className="mt-4 text-[#6d5647] leading-relaxed">
            Crafted with a reverence for art and materials, we work with natural waxes, botanical elements, and nuanced scent profiles to create an intimate atmosphere that lingers.
          </p>
        </div>
      </div>
    </section>
  )
}
