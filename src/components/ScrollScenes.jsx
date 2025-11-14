import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollScenes() {
  const { scrollYProgress } = useScroll()

  const bgShift = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  return (
    <section className="relative bg-[#fff9f2]" id="story">
      {/* Scene container */}
      <div className="relative mx-auto max-w-6xl px-6 py-28 sm:py-36 lg:py-40">
        {/* Scene 1 — Ignition */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-28">
          <motion.div
            className="md:col-span-7 aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#fbe2c6] to-[#fdebd6] shadow-[0_20px_60px_rgba(210,160,100,0.25)] overflow-hidden relative"
            style={{ y: useTransform(scrollYProgress, [0, 0.2], [30, 0]) }}
          >
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <img src="https://images.unsplash.com/photo-1544954468-7b2c4fbab3d5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxJZ25pdGlvbnxlbnwwfDB8fHwxNzYzMDk5OTI0fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Ignition" className="h-full w-full object-cover" />
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: [0.2, 0.5, 0.2] }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 2.8 }}
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(255,180,120,0.35),transparent_60%)]"
              />
            </motion.div>
          </motion.div>
          <div className="md:col-span-5">
            <h3 className="text-3xl md:text-4xl text-[#20160f]" style={{fontFamily: 'Playfair Display, serif'}}>Where light meets art.</h3>
            <p className="mt-4 text-[#6d5647]">A gentle spark. A golden glow. The ritual begins with a soft ignition, inviting presence and stillness.</p>
          </div>
        </div>

        {/* Scene 2 — Bloom */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center mb-28">
          <div className="md:col-span-5 order-2 md:order-1">
            <h3 className="text-3xl md:text-4xl text-[#20160f]" style={{fontFamily: 'Playfair Display, serif'}}>Hand-crafted with botanical precision.</h3>
            <p className="mt-4 text-[#6d5647]">Macro florals, kissed by light. Each piece is composed by hand with slow intention and natural detail.</p>
          </div>
          <motion.div
            className="md:col-span-7 order-1 md:order-2 aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#fbe2c6] to-[#fdebd6] shadow-[0_20px_60px_rgba(210,160,100,0.25)] overflow-hidden relative"
            style={{ y: useTransform(scrollYProgress, [0.2, 0.5], [30, -10]) }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1605974780733-0f4a49f4860c?q=80&w=1600&auto=format&fit=crop"
              alt="Bloom"
              initial={{ scale: 1.06, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="h-full w-full object-cover"
            />
            {/* Sparkling micro-particles */}
            <motion.div
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: 'radial-gradient(rgba(255,220,170,0.6) 1px, transparent 1px)', backgroundSize: '18px 18px', backgroundPositionY: bgShift }}
            />
          </motion.div>
        </div>

        {/* Scene 3 — Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div
            className="md:col-span-7 aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#fbe2c6] to-[#fdebd6] shadow-[0_20px_60px_rgba(210,160,100,0.25)] overflow-hidden relative"
            style={{ y: useTransform(scrollYProgress, [0.5, 0.9], [20, -10]) }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop"
              alt="Reveal"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="h-full w-full object-cover"
            />
          </motion.div>
          <div className="md:col-span-5">
            <h3 className="text-3xl md:text-4xl text-[#20160f]" style={{fontFamily: 'Playfair Display, serif'}}>An experience, not just a fragrance.</h3>
            <p className="mt-4 text-[#6d5647]">Texture, light, and time converge. The ritual unfolds, revealing an intimate atmosphere of luminous luxury.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
