import { motion, useAnimation } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { ChevronDown } from 'lucide-react'
import { useEffect } from 'react'

export default function Hero() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 1.1, ease: 'easeOut' } })
  }, [controls])

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-gradient-to-br from-[#fff7ef] via-[#fde9d9] to-[#f7dcc4]">
      {/* Subtle grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply" style={{backgroundImage: `radial-gradient(rgba(0,0,0,0.05) 1px, transparent 1px)`, backgroundSize: '3px 3px'}} />

      {/* Light leaks */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgba(255,199,146,0.55),transparent)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(closest-side,rgba(255,220,170,0.55),transparent)] blur-2xl" />

      {/* Spline 3D scene */}
      <div className="relative z-10 h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh]">
        <Spline scene="https://prod.spline.design/c1w2QYixcPkptHWE/scene.splinecode" style={{ width: '100%', height: '100%' }} />

        {/* Soft glow overlay */}
        <motion.div
          aria-hidden
          initial={{ opacity: 0.4 }}
          animate={{ opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(60% 50% at 50% 55%, rgba(255,190,120,0.25) 0%, rgba(255,210,160,0.12) 45%, rgba(255,240,220,0.05) 70%, rgba(255,255,255,0) 100%)',
          }}
        />
      </div>

      {/* Headline / CTA */}
      <div className="relative z-20 px-6 md:px-10 -mt-6 md:-mt-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={controls}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-[clamp(2rem,6vw,4rem)] leading-tight tracking-tight text-[#20160f] font-semibold" style={{fontFamily: 'Playfair Display, serif'}}>
            Crafted Light. Eternal Luxury.
          </h1>
          <p className="mt-4 text-[clamp(1rem,2.4vw,1.25rem)] text-[#6d5647]">
            Hand-poured botanical candles in artisan golden tins.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-[#caa263] to-[#a6803e] text-white px-7 py-3 text-sm md:text-base shadow-[0_10px_30px_rgba(202,162,99,0.35)] hover:shadow-[0_12px_36px_rgba(202,162,99,0.45)] transition-shadow">
              Explore Collection
            </a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-[#d5b78c] text-[#7a5f46] px-7 py-3 text-sm md:text-base bg-white/30 backdrop-blur-[2px] hover:bg-white/60 transition-colors">
              Our Story
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex justify-center">
        <motion.div
          initial={{ y: 0, opacity: 0.8 }}
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center text-[#a6803e]"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="h-6 w-6 mt-1" />
        </motion.div>
      </div>
    </section>
  )
}
