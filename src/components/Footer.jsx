import { Mail, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#fff4e8]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl text-[#20160f]" style={{fontFamily: 'Playfair Display, serif'}}>Enchanya</h3>
            <p className="text-[#6d5647]">Enter the world of luminous luxury.</p>
          </div>

          <form className="w-full md:w-auto flex gap-3">
            <div className="relative flex-1">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-full border border-[#ead9c1] bg-white/70 px-5 py-3 text-[#20160f] placeholder-[#a7896b] focus:outline-none focus:ring-2 focus:ring-[#d5b78c]"
              />
              <Mail className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#a7896b]" size={18} />
            </div>
            <button className="rounded-full bg-gradient-to-br from-[#caa263] to-[#a6803e] text-white px-6 py-3 shadow-[0_8px_20px_rgba(202,162,99,0.35)]">Subscribe</button>
          </form>
        </div>

        <div className="mt-10 flex items-center justify-center md:justify-between gap-6">
          <p className="text-sm text-[#8b725c]">© {new Date().getFullYear()} Enchanya. All rights reserved.</p>
          <div className="hidden md:flex items-center gap-5 text-[#a7896b]">
            <a href="#" aria-label="Instagram" className="hover:text-[#a6803e]"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-[#a6803e]"><Twitter size={18} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-[#a6803e]"><Facebook size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
