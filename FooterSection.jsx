import { motion } from 'framer-motion';
import { useInView } from '@/hooks/useInView';

const FOOTER_IMG = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/1a0a43cb3_generated_1f0ebe99.png';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Journey', href: '#journey' },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Workshops', href: '#workshops' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export default function FooterSection() {
  const [ref, inView] = useInView(0.1);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer ref={ref} className="relative">
      {/* Mountain image with quote overlay */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={FOOTER_IMG}
          alt="Mountain horizon at dawn"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/40 flex items-center justify-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center font-body italic text-lg md:text-2xl text-white/90 max-w-2xl leading-relaxed"
          >
            "The body is the first architecture we inhabit."
          </motion.p>
        </div>
      </div>

      {/* Footer content */}
      <div className="bg-foreground text-background/80 px-6 md:px-12 lg:px-20 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <p className="font-display text-lg text-background font-semibold tracking-wide">Kriti Gupta</p>
              <p className="mt-2 text-sm text-background/50 leading-relaxed">
                Movement Practitioner · Architect · Explorer
              </p>
            </div>

            {/* Navigation */}
            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-background/40 mb-4">Navigate</p>
              <nav className="flex flex-wrap gap-x-6 gap-y-2">
                {NAV_LINKS.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollTo(link.href)}
                    className="font-display text-sm text-background/60 hover:text-background transition-colors"
                  >
                    {link.label}
                  </button>
                ))}
              </nav>
            </div>

            {/* Social */}
            <div>
              <p className="font-display text-xs tracking-[0.3em] uppercase text-background/40 mb-4">Connect</p>
              <div className="flex flex-col gap-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="font-display text-sm text-background/60 hover:text-background transition-colors">
                  Instagram
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="font-display text-sm text-background/60 hover:text-background transition-colors">
                  YouTube
                </a>
                <a href="mailto:hello@kritigupta.com" className="font-display text-sm text-background/60 hover:text-background transition-colors">
                  Email
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-background/30 font-display">
              © {new Date().getFullYear()} Kriti Gupta. All rights reserved.
            </p>
            <p className="text-xs text-background/20 font-display">
              Movement is life.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}