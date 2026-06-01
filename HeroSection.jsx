import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HERO_IMAGE = 'https://media.base44.com/images/public/6a1d8a858eaf7a0dc27bf636/2709ddfbf_generated_018165ec.png';

export default function HeroSection() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Kriti Gupta in a moment of dynamic stillness against architectural concrete"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20 pb-16 md:pb-24 pt-32">
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-foreground"
          >
            Movement as a way
            <br />
            <span className="text-primary">of seeing, learning,</span>
            <br />
            and living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6 md:mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed font-body italic"
          >
            A journey through architecture, mountains, parkour, dance, and the art of movement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 md:mt-10 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('#journey')}
              className="px-7 py-3.5 bg-primary text-primary-foreground font-display text-sm tracking-wide hover:bg-primary/90 transition-colors"
            >
              Explore the Journey
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3.5 border border-foreground/20 text-foreground font-display text-sm tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              Get in Touch
            </button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 right-6 md:right-12 lg:right-20"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}